import { z } from 'zod';

const baseTrackerEmailSchema = z
  .string()
  .email('Proszę podać prawidłowy adres email.')
  .min(1, 'Proszę podać prawidłowy adres email.');

const baseTrackerStartDateSchema = z
  .string()
  .min(1, 'Proszę podać planowaną datę startu.');

const basePlannedDaysSchema = z
  .string()
  .min(1, 'Proszę podać planowaną długość wyprawy.');

export const trackerRequestSchema = z.object({
  email: baseTrackerEmailSchema,
  startDate: baseTrackerStartDateSchema,
  plannedDays: basePlannedDaysSchema,
});

export type TrackerRequestData = z.infer<typeof trackerRequestSchema>;
