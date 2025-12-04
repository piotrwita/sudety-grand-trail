import { z } from 'zod';
import { isServer } from '../lib/utils';

/* ============================================================================
   CONSTANTS
   ============================================================================ */

export const MAX_DESCRIPTION_LENGTH = 200;
export const MAX_ADDITIONAL_PHOTOS = 5;
export const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB in bytes
export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
] as const;
export const TRAIL_TYPES = [
  'Solo',
  'Grupa',
  'Z psem',
  'Ultralight',
  'Inne',
] as const;

/* ============================================================================
   TYPES
   ============================================================================ */

export interface EmailAttachment {
  filename: string;
  content: string; // base64 encoded
  contentType: string;
}

/* ============================================================================
   BASE FIELD SCHEMAS (Shared validation rules)
   ============================================================================ */

const baseNameSchema = z
  .string()
  .min(1, 'Imię i nazwisko jest wymagane')
  .min(3, 'Imię i nazwisko musi mieć minimum 3 znaki');

const baseEmailSchema = z
  .string()
  .min(1, 'Email jest wymagany')
  .email('Wprowadź poprawny adres email');

const baseTypeSchema = z.enum(TRAIL_TYPES, {
  message: 'Wybierz typ przejścia',
});

const baseStartDateSchema = z.string().min(1, 'Data rozpoczęcia jest wymagana');

const baseEndDateSchema = z.string().min(1, 'Data zakończenia jest wymagana');

const baseDescriptionSchema = z
  .string()
  .max(MAX_DESCRIPTION_LENGTH, `Maksymalnie ${MAX_DESCRIPTION_LENGTH} znaków`)
  .optional();

const baseDateRangeRefine = <T extends z.ZodObject<any>>(schema: T) =>
  schema.refine(
    (data: z.infer<T>) => {
      if (!data.startDate || !data.endDate) return true;
      return (
        new Date(data.endDate as string) >= new Date(data.startDate as string)
      );
    },
    {
      message:
        'Data zakończenia musi być późniejsza lub równa dacie rozpoczęcia',
      path: ['endDate'],
    }
  ) as T;

/* ============================================================================
   EMAIL ATTACHMENT SCHEMA (for server-side validation)
   ============================================================================ */

const emailAttachmentSchema = z.object({
  filename: z.string().min(1, 'Nazwa pliku jest wymagana'),
  content: z.string().min(1, 'Zawartość pliku jest wymagana'),
  contentType: z.string().min(1, 'Typ pliku jest wymagany'),
});

const emailPhotoSchema = emailAttachmentSchema
  .optional()
  .refine(
    (attachment) => {
      if (!attachment) return true;
      return ACCEPTED_IMAGE_TYPES.includes(
        attachment.contentType as (typeof ACCEPTED_IMAGE_TYPES)[number]
      );
    },
    { message: 'Akceptowane formaty: JPG, PNG, WebP' }
  )
  .refine(
    (attachment) => {
      if (!attachment) return true;
      // Estimate size from base64 (base64 is ~33% larger than binary)
      const estimatedSize = (attachment.content.length * 3) / 4;
      return estimatedSize <= MAX_FILE_SIZE;
    },
    { message: 'Plik nie może być większy niż 1MB' }
  );

const emailGpxFileSchema = emailAttachmentSchema
  .optional()
  .refine(
    (attachment) => {
      if (!attachment) return true;
      return attachment.filename.toLowerCase().endsWith('.gpx');
    },
    { message: 'Plik musi mieć rozszerzenie .gpx' }
  )
  .refine(
    (attachment) => {
      if (!attachment) return true;
      const estimatedSize = (attachment.content.length * 3) / 4;
      return estimatedSize <= MAX_FILE_SIZE;
    },
    { message: 'Plik nie może być większy niż 1MB' }
  );

const emailAdditionalPhotosSchema = z
  .array(emailAttachmentSchema)
  .optional()
  .refine(
    (photos) => {
      if (!photos) return true;
      return photos.length <= MAX_ADDITIONAL_PHOTOS;
    },
    { message: `Maksymalnie ${MAX_ADDITIONAL_PHOTOS} zdjęć` }
  )
  .refine(
    (photos) => {
      if (!photos || photos.length === 0) return true;
      return photos.every((photo) => {
        const estimatedSize = (photo.content.length * 3) / 4;
        return estimatedSize <= MAX_FILE_SIZE;
      });
    },
    { message: 'Każdy plik nie może być większy niż 1MB' }
  )
  .refine(
    (photos) => {
      if (!photos || photos.length === 0) return true;
      return photos.every((photo) =>
        ACCEPTED_IMAGE_TYPES.includes(
          photo.contentType as (typeof ACCEPTED_IMAGE_TYPES)[number]
        )
      );
    },
    { message: 'Akceptowane formaty: JPG, PNG, WebP' }
  );

/* ============================================================================
   FORM FILE SCHEMAS (for client-side validation with FileList)
   ============================================================================ */

const formPhotoSchema = z
  .any()
  .refine((val) => {
    if (isServer()) return true;
    return val instanceof FileList && val.length > 0;
  }, 'Zdjęcie profilowe jest wymagane')
  .refine((files) => {
    if (isServer()) return true;
    return (
      !files ||
      files.length === 0 ||
      ACCEPTED_IMAGE_TYPES.includes(files[0]?.type)
    );
  }, 'Akceptowane formaty: JPG, PNG, WebP')
  .refine((files) => {
    if (isServer()) return true;
    return !files || files.length === 0 || files[0]?.size <= MAX_FILE_SIZE;
  }, 'Plik nie może być większy niż 1MB');

const formGpxFileSchema = z
  .any()
  .refine((files) => {
    if (isServer()) return true;
    return (
      !files ||
      files.length === 0 ||
      files[0]?.name.toLowerCase().endsWith('.gpx')
    );
  }, 'Plik musi mieć rozszerzenie .gpx')
  .refine((files) => {
    if (isServer()) return true;
    return !files || files.length === 0 || files[0]?.size <= MAX_FILE_SIZE;
  }, 'Plik nie może być większy niż 1MB');

const formAdditionalPhotosSchema = z
  .any()
  .optional()
  .refine((files) => {
    if (isServer()) return true;
    return !files || files.length <= MAX_ADDITIONAL_PHOTOS;
  }, `Maksymalnie ${MAX_ADDITIONAL_PHOTOS} zdjęć`)
  .refine((files) => {
    if (isServer()) return true;
    if (!files || files.length === 0) return true;
    return Array.from(files as FileList).every(
      (file) => file.size <= MAX_FILE_SIZE
    );
  }, 'Każdy plik nie może być większy niż 1MB')
  .refine((files) => {
    if (isServer()) return true;
    if (!files || files.length === 0) return true;
    return Array.from(files as FileList).every((file) =>
      ACCEPTED_IMAGE_TYPES.includes(
        file.type as (typeof ACCEPTED_IMAGE_TYPES)[number]
      )
    );
  }, 'Akceptowane formaty: JPG, PNG, WebP');

/* ============================================================================
   COMPLETE SCHEMAS
   ============================================================================ */

const baseSubmissionFields = {
  name: baseNameSchema,
  nickname: z.string().optional(),
  email: baseEmailSchema,
  type: baseTypeSchema,
  startDate: baseStartDateSchema,
  endDate: baseEndDateSchema,
  description: baseDescriptionSchema,
  favoriteSection: z.string().optional(),
  hardestSection: z.string().optional(),
  isFirstSudety: z.boolean(),
  additionalAchievements: z.string().optional(),
};

/**
 * Schema for client-side form validation (uses FileList)
 */
export const submissionFormSchema = baseDateRangeRefine(
  z.object({
    ...baseSubmissionFields,
    photo: formPhotoSchema,
    gpxFile: formGpxFileSchema,
    additionalPhotos: formAdditionalPhotosSchema,
  })
);

/**
 * Schema for server-side email submission validation (uses base64 attachments)
 */
export const emailSubmissionSchema = baseDateRangeRefine(
  z.object({
    ...baseSubmissionFields,
    photo: emailPhotoSchema,
    gpxFile: emailGpxFileSchema,
    additionalPhotos: emailAdditionalPhotosSchema,
  })
);

/* ============================================================================
   TYPES
   ============================================================================ */

export type SubmissionFormData = z.infer<typeof submissionFormSchema>;
export type EmailSubmissionData = z.infer<typeof emailSubmissionSchema>;
