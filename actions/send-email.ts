'use server';

import { emailSubmissionSchema } from '@/schemas/submission';
import { trackerRequestSchema } from '@/schemas/tracker';
import type { EmailSubmissionData } from '@/schemas/submission';
import type { TrackerRequestData } from '@/schemas/tracker';
import {
  formatSubmissionEmail,
  formatTrackerRequestEmail,
} from '@/lib/email-templates';
import { isGmailApiConfigured, sendGmailMessage } from '@/lib/gmail';
import type { MimeAttachment } from '@/lib/email-mime';

/* ============================================================================
   TYPES
   ============================================================================ */

export interface ActionResult {
  success: boolean;
  message: string;
}

/* ============================================================================
   SERVER ACTION
   ============================================================================ */

const buildAttachments = (data: EmailSubmissionData): MimeAttachment[] => {
  const attachments: MimeAttachment[] = [];

  if (data.photo) {
    attachments.push({
      filename: data.photo.filename,
      content: Buffer.from(data.photo.content, 'base64'),
      contentType: data.photo.contentType,
    });
  }

  if (data.gpxFile) {
    attachments.push({
      filename: data.gpxFile.filename,
      content: Buffer.from(data.gpxFile.content, 'base64'),
      contentType: data.gpxFile.contentType,
    });
  }

  return attachments;
};

const getEmailAddresses = (): { sender: string; recipient: string } | null => {
  const sender = process.env.GMAIL_USER || '';

  if (!sender) {
    console.error('Missing sender email address');
    return null;
  }

  const recipient = process.env.GMAIL_RECIPIENT || '';

  if (!recipient) {
    console.error('Missing recipient email address');
    return null;
  }

  return { sender, recipient };
};

export const sendSubmissionEmail = async (
  data: unknown
): Promise<ActionResult> => {
  try {
    // Validate input data
    const validationResult = emailSubmissionSchema.safeParse(data);

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0];
      return {
        success: false,
        message: firstError?.message || 'Nieprawidłowe dane formularza.',
      };
    }

    const validatedData = validationResult.data;
    const emailAddresses = getEmailAddresses();
    if (!emailAddresses) {
      return {
        success: false,
        message:
          'Adres email nadawcy lub odbiorcy nie jest skonfigurowany. Skontaktuj się z administratorem.',
      };
    }

    if (!isGmailApiConfigured()) {
      console.error('Missing Gmail API credentials');
      return {
        success: false,
        message:
          'Konfiguracja serwera email jest nieprawidłowa. Skontaktuj się z administratorem.',
      };
    }

    const attachments = buildAttachments(validatedData);
    const { sender, recipient } = emailAddresses;

    await sendGmailMessage({
      from: sender,
      to: recipient,
      subject: `Nowe zgłoszenie przejścia - ${validatedData.name}`,
      html: formatSubmissionEmail(validatedData),
      attachments,
    });

    return {
      success: true,
      message: 'Zgłoszenie zostało wysłane pomyślnie.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Nie udało się wysłać zgłoszenia. Spróbuj ponownie później.',
    };
  }
};

export const sendTrackerRequestEmail = async (
  data: unknown
): Promise<ActionResult> => {
  try {
    // Validate input data
    const validationResult = trackerRequestSchema.safeParse(data);

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0];
      return {
        success: false,
        message: firstError?.message || 'Nieprawidłowe dane formularza.',
      };
    }

    const validatedData = validationResult.data;
    const emailAddresses = getEmailAddresses();
    if (!emailAddresses) {
      return {
        success: false,
        message:
          'Adres email nadawcy lub odbiorcy nie jest skonfigurowany. Skontaktuj się z administratorem.',
      };
    }

    if (!isGmailApiConfigured()) {
      console.error('Missing Gmail API credentials');
      return {
        success: false,
        message:
          'Konfiguracja serwera email jest nieprawidłowa. Skontaktuj się z administratorem.',
      };
    }

    const { sender, recipient } = emailAddresses;

    await sendGmailMessage({
      from: sender,
      to: recipient,
      subject: `Zgłoszenie tracker GPS - ${validatedData.email}`,
      html: formatTrackerRequestEmail(validatedData),
    });

    return {
      success: true,
      message:
        'Zgłoszenie zostało wysłane pomyślnie. Skontaktujemy się z Tobą wkrótce!',
    };
  } catch (error) {
    console.error('Error sending tracker request email:', error);
    return {
      success: false,
      message: 'Nie udało się wysłać zgłoszenia. Spróbuj ponownie później.',
    };
  }
};
