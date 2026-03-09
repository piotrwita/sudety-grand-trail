import { randomUUID } from 'crypto';

const CRLF = '\r\n';

export interface MimeAttachment {
  filename: string;
  content: Buffer;
  contentType: string;
}

export interface MimeMessageOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
  attachments?: MimeAttachment[];
}

const sanitizeHeaderValue = (value: string): string => {
  return value.replace(/\r?\n/g, ' ').trim();
};

const encodeBase64Url = (value: string): string => {
  return Buffer.from(value, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
};

const wrapBase64 = (value: string): string => {
  return value.match(/.{1,76}/g)?.join(CRLF) ?? value;
};

const encodeHeader = (value: string): string => {
  return `=?UTF-8?B?${Buffer.from(sanitizeHeaderValue(value), 'utf8').toString('base64')}?=`;
};

const encodeFilenameParameter = (filename: string): string => {
  return `utf-8''${encodeURIComponent(sanitizeHeaderValue(filename))}`;
};

const buildHtmlPart = (html: string): string => {
  const encodedHtml = wrapBase64(Buffer.from(html, 'utf8').toString('base64'));

  return [
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    encodedHtml,
  ].join(CRLF);
};

const buildAttachmentPart = (attachment: MimeAttachment): string => {
  const encodedContent = wrapBase64(attachment.content.toString('base64'));
  const encodedFilename = encodeFilenameParameter(attachment.filename);

  return [
    `Content-Type: ${attachment.contentType}; name*=${encodedFilename}`,
    `Content-Disposition: attachment; filename*=${encodedFilename}`,
    'Content-Transfer-Encoding: base64',
    '',
    encodedContent,
  ].join(CRLF);
};

export const buildRawMimeMessage = ({
  from,
  to,
  subject,
  html,
  attachments = [],
}: MimeMessageOptions): string => {
  const baseHeaders = [
    `From: ${sanitizeHeaderValue(from)}`,
    `To: ${sanitizeHeaderValue(to)}`,
    `Subject: ${encodeHeader(subject)}`,
    'MIME-Version: 1.0',
  ];

  if (attachments.length === 0) {
    const message = [
      ...baseHeaders,
      'Content-Type: text/html; charset=UTF-8',
      'Content-Transfer-Encoding: base64',
      '',
      wrapBase64(Buffer.from(html, 'utf8').toString('base64')),
    ].join(CRLF);

    return encodeBase64Url(message);
  }

  const boundary = `gmail-api-boundary-${randomUUID()}`;
  const parts = [
    ...baseHeaders,
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    buildHtmlPart(html),
    ...attachments.flatMap((attachment) => [
      `--${boundary}`,
      buildAttachmentPart(attachment),
    ]),
    `--${boundary}--`,
  ];

  return encodeBase64Url(parts.join(CRLF));
};
