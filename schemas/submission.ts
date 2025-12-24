import { z } from 'zod';
import { isServer } from '../lib/utils';

/* ============================================================================
   CONSTANTS
   ============================================================================ */

export const MAX_DESCRIPTION_LENGTH = 300;
export const MAX_PHOTO_SIZE = 500 * 1024; // 500KB in bytes
export const MAX_GPX_SIZE = 500 * 1024; // 500KB in bytes
export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
] as const;
export const TRAIL_TYPES = [
  'Solo',
  'Grupa',
  'Z psem',
  'Ultralight',
  'Fastpacking',
  'Ze wsparciem',
  'Rower',
  'Ultra running',
  'Bez pośpiechu',
  'Na dziko',
  'Fragmentami',
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
  .min(3, 'Imię i nazwisko musi mieć minimum 3 znaki')
  .max(100, 'Imię i nazwisko nie może przekraczać 100 znaków');

const baseEmailSchema = z
  .string()
  .min(1, 'Email jest wymagany')
  .email('Wprowadź poprawny adres email')
  .max(100, 'Adres email nie może przekraczać 100 znaków');

const baseTypeSchema = z.enum(TRAIL_TYPES, {
  message: 'Wybierz typ przejścia',
});

const MIN_DATE = '2025-06-01';

const getTodayString = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const baseStartDateSchema = z
  .string()
  .min(1, 'Data rozpoczęcia jest wymagana')
  .refine(
    (date) => {
      return date >= MIN_DATE;
    },
    {
      message: 'Data nie może być wcześniejsza niż 1 czerwca 2025',
    }
  )
  .refine(
    (date) => {
      return date <= getTodayString();
    },
    {
      message: 'Data nie może być późniejsza niż dzisiaj',
    }
  );

const baseEndDateSchema = z
  .string()
  .min(1, 'Data zakończenia jest wymagana')
  .refine(
    (date) => {
      return date >= MIN_DATE;
    },
    {
      message: 'Data nie może być wcześniejsza niż 1 czerwca 2025',
    }
  )
  .refine(
    (date) => {
      return date <= getTodayString();
    },
    {
      message: 'Data nie może być późniejsza niż dzisiaj',
    }
  );

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
        'Data rozpoczęcia musi być wcześniejsza niż data zakończenia',
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
    { message: 'Akceptowane formaty: JPG' }
  )
  .refine(
    (attachment) => {
      if (!attachment) return true;
      // Estimate size from base64 (base64 is ~33% larger than binary)
      const estimatedSize = (attachment.content.length * 3) / 4;
      return estimatedSize <= MAX_PHOTO_SIZE;
    },
    { message: 'Plik nie może być większy niż 500KB' }
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
      return estimatedSize <= MAX_GPX_SIZE;
    },
    { message: 'Plik nie może być większy niż 500KB' }
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
    return !files || files.length === 0 || files[0]?.size <= MAX_PHOTO_SIZE;
  }, 'Plik nie może być większy niż 500MB');

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
    return !files || files.length === 0 || files[0]?.size <= MAX_GPX_SIZE;
  }, 'Plik nie może być większy niż 500KB');


/* ============================================================================
   COMPLETE SCHEMAS
   ============================================================================ */

const baseSubmissionFields = {
  name: baseNameSchema,
  nickname: z
    .string()
    .max(50, 'Pseudonim nie może przekraczać 50 znaków')
    .optional(),
  email: baseEmailSchema,
  type: baseTypeSchema,
  startDate: baseStartDateSchema,
  endDate: baseEndDateSchema,
  description: baseDescriptionSchema,
  favoriteSection: z
    .string()
    .max(150, 'Najpiękniejszy moment nie może przekraczać 150 znaków')
    .optional(),
  hardestSection: z
    .string()
    .max(150, 'Najtrudniejszy fragment nie może przekraczać 150 znaków')
    .optional(),
  isFirstSudety: z.boolean(),
  additionalAchievements: z
    .string()
    .max(200, 'Dodatkowe osiągnięcia nie mogą przekraczać 200 znaków')
    .optional(),
};

/**
 * Schema for client-side form validation (uses FileList)
 */
export const submissionFormSchema = baseDateRangeRefine(
  z.object({
    ...baseSubmissionFields,
    photo: formPhotoSchema,
    gpxFile: formGpxFileSchema,
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
  })
);

/* ============================================================================
   TYPES
   ============================================================================ */

export type SubmissionFormData = z.infer<typeof submissionFormSchema>;
export type EmailSubmissionData = z.infer<typeof emailSubmissionSchema>;
