'use server';

import nodemailer from 'nodemailer';
import { emailSubmissionSchema } from '@/schemas/submission';
import { trackerRequestSchema } from '@/schemas/tracker';
import type {
  EmailSubmissionData,
  EmailAttachment,
} from '@/schemas/submission';
import type { TrackerRequestData } from '@/schemas/tracker';
import {
  formatSubmissionEmail,
  formatTrackerRequestEmail,
} from '@/lib/email-templates';

/* ============================================================================
   TYPES
   ============================================================================ */

export interface ActionResult {
  success: boolean;
  message: string;
}

// Re-export types for backward compatibility
// Note: Constants cannot be re-exported from 'use server' files
export type { EmailSubmissionData, EmailAttachment, TrackerRequestData };

/* ============================================================================
   EMAIL CONFIGURATION
   ============================================================================ */

const getTransporter = (sender: string): nodemailer.Transporter | null => {
  const clientId = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: sender,
      clientId,
      clientSecret,
      refreshToken,
    },
  });
};

/* ============================================================================
   SERVER ACTION
   ============================================================================ */

const buildAttachments = (
  data: EmailSubmissionData
): Array<{
  filename: string;
  content: Buffer;
  contentType: string;
}> => {
  const attachments: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }> = [];

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

  if (data.additionalPhotos && data.additionalPhotos.length > 0) {
    data.additionalPhotos.forEach((photo) => {
      attachments.push({
        filename: photo.filename,
        content: Buffer.from(photo.content, 'base64'),
        contentType: photo.contentType,
      });
    });
  }

  return attachments;
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

    const sender = process.env.GMAIL_USER || '';

    if (!sender) {
      console.error('Missing sender email address');
      return {
        success: false,
        message:
          'Adres email nadawcy nie jest skonfigurowany. Skontaktuj się z administratorem.',
      };
    }

    const recipient = process.env.GMAIL_RECIPIENT || '';
    if (!recipient) {
      console.error('Missing recipient email address');
      return {
        success: false,
        message:
          'Adres email odbiorcy nie jest skonfigurowany. Skontaktuj się z administratorem.',
      };
    }

    const transporter = getTransporter(sender);
    if (!transporter) {
      console.error('Missing Gmail OAuth2 credentials');
      return {
        success: false,
        message:
          'Konfiguracja serwera email jest nieprawidłowa. Skontaktuj się z administratorem.',
      };
    }

    const attachments = buildAttachments(validatedData);

    const mailOptions: nodemailer.SendMailOptions = {
      from: sender,
      to: recipient,
      subject: `Nowe zgłoszenie przejścia - ${validatedData.name}`,
      html: formatSubmissionEmail(validatedData),
    };

    if (attachments.length > 0) {
      mailOptions.attachments = attachments;
    }

    await transporter.sendMail(mailOptions);

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

    const sender = process.env.GMAIL_USER || '';

    if (!sender) {
      console.error('Missing sender email address');
      return {
        success: false,
        message:
          'Adres email nadawcy nie jest skonfigurowany. Skontaktuj się z administratorem.',
      };
    }

    const recipient = process.env.GMAIL_RECIPIENT || '';
    if (!recipient) {
      console.error('Missing recipient email address');
      return {
        success: false,
        message:
          'Adres email odbiorcy nie jest skonfigurowany. Skontaktuj się z administratorem.',
      };
    }

    const transporter = getTransporter(sender);
    if (!transporter) {
      console.error('Missing Gmail OAuth2 credentials');
      return {
        success: false,
        message:
          'Konfiguracja serwera email jest nieprawidłowa. Skontaktuj się z administratorem.',
      };
    }

    const mailOptions: nodemailer.SendMailOptions = {
      from: sender,
      to: recipient,
      subject: `Zgłoszenie tracker GPS - ${validatedData.email}`,
      html: formatTrackerRequestEmail(validatedData),
    };

    console.log('sender', sender);
    console.log('recipient', recipient);
    console.log('email', validatedData.email);

    await transporter.sendMail(mailOptions);

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
