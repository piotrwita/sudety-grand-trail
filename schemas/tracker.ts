import { z } from 'zod';

const baseTrackerEmailSchema = z
  .string()
  .email('Proszę podać prawidłowy adres email.')
  .min(1, 'Proszę podać prawidłowy adres email.')
  .max(100, 'Adres email nie może przekraczać 100 znaków.');

const baseTrackerStartDateSchema = z
  .string()
  .min(1, 'Proszę podać planowaną datę startu.')
  .refine(
    (date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const maxDate = new Date();
      maxDate.setFullYear(maxDate.getFullYear() + 1);
      maxDate.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);
      return selectedDate >= today && selectedDate <= maxDate;
    },
    {
      message:
        'Data startu musi być między dzisiaj a datą za rok od dzisiaj.',
    }
  );

const basePlannedDaysSchema = z
  .string()
  .min(1, 'Proszę podać planowaną długość wyprawy.')
  .max(50, 'Planowana długość wyprawy nie może przekraczać 50 znaków.');

export const trackerRequestSchema = z.object({
  email: baseTrackerEmailSchema,
  startDate: baseTrackerStartDateSchema,
  plannedDays: basePlannedDaysSchema,
});

export type TrackerRequestData = z.infer<typeof trackerRequestSchema>;
