import { google } from 'googleapis';
import { buildRawMimeMessage, type MimeMessageOptions } from '@/lib/email-mime';

const getRequiredEnvVar = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required Gmail environment variable: ${name}`);
  }

  return value;
};

export const isGmailApiConfigured = (): boolean => {
  return Boolean(
    process.env.GMAIL_CLIENT_ID &&
      process.env.GMAIL_CLIENT_SECRET &&
      process.env.GMAIL_REFRESH_TOKEN
  );
};

const createGmailClient = () => {
  const clientId = getRequiredEnvVar('GMAIL_CLIENT_ID');
  const clientSecret = getRequiredEnvVar('GMAIL_CLIENT_SECRET');
  const refreshToken = getRequiredEnvVar('GMAIL_REFRESH_TOKEN');

  const auth = new google.auth.OAuth2(clientId, clientSecret);
  auth.setCredentials({ refresh_token: refreshToken });

  return google.gmail({ version: 'v1', auth });
};

export const sendGmailMessage = async (
  message: MimeMessageOptions
): Promise<void> => {
  const gmail = createGmailClient();
  const raw = buildRawMimeMessage(message);

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw },
  });
};
