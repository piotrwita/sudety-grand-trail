import { EmailSubmissionData } from '@/schemas/submission';

/* ============================================================================
   EMAIL TEMPLATES
   ============================================================================ */

/**
 * Formats submission data into an HTML email template
 */
export const formatSubmissionEmail = (data: EmailSubmissionData): string => {
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Nie podano';
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const calculateDays = () => {
    if (data.startDate && data.endDate) {
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <h2 style="color: #2d5016; border-bottom: 2px solid #2d5016; padding-bottom: 10px;">
        Nowe zgłoszenie przejścia Sudety Grand Trail
      </h2>
      
      <div style="background-color: white; padding: 20px; margin-top: 20px; border-radius: 8px;">
        <h3 style="color: #2d5016; margin-top: 0;">Dane podstawowe</h3>
        <p><strong>Imię i Nazwisko:</strong> ${data.name}</p>
        ${data.nickname ? `<p><strong>Pseudonim:</strong> ${data.nickname}</p>` : ''}
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Typ przejścia:</strong> ${data.type}</p>
        
        <h3 style="color: #2d5016; margin-top: 30px;">Terminy przejścia</h3>
        <p><strong>Data rozpoczęcia:</strong> ${formatDate(data.startDate)}</p>
        <p><strong>Data zakończenia:</strong> ${formatDate(data.endDate)}</p>
        <p><strong>Czas przejścia:</strong> ${calculateDays()} dni</p>
        
        <h3 style="color: #2d5016; margin-top: 30px;">Materiały</h3>
        <p><strong>Zdjęcie profilowe:</strong> ${data.photo ? data.photo.filename : 'Nie załączono'}</p>
        <p><strong>Plik GPX:</strong> ${data.gpxFile ? data.gpxFile.filename : 'Nie załączono'}</p>
        <p><strong>Dodatkowe zdjęcia:</strong> ${data.additionalPhotos && data.additionalPhotos.length > 0 ? `${data.additionalPhotos.length} plik(ów)` : 'Nie załączono'}</p>
        
        ${
          data.description
            ? `
          <h3 style="color: #2d5016; margin-top: 30px;">Opis przejścia</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${data.description}</p>
        `
            : ''
        }
        
        ${
          data.favoriteSection || data.hardestSection
            ? `
          <h3 style="color: #2d5016; margin-top: 30px;">Szczegóły</h3>
          ${data.favoriteSection ? `<p><strong>Najpiękniejszy moment:</strong> ${data.favoriteSection}</p>` : ''}
          ${data.hardestSection ? `<p><strong>Najtrudniejszy fragment:</strong> ${data.hardestSection}</p>` : ''}
        `
            : ''
        }
        
        <h3 style="color: #2d5016; margin-top: 30px;">Dodatkowe informacje</h3>
        <p><strong>Pierwsze przejście Sudetów:</strong> ${data.isFirstSudety ? 'Tak' : 'Nie'}</p>
        ${
          data.additionalAchievements
            ? `
          <p><strong>Dodatkowe osiągnięcia:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${data.additionalAchievements}</p>
        `
            : ''
        }
      </div>
      
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        To zgłoszenie zostało wysłane przez formularz na stronie Sudety Grand Trail.
      </p>
    </div>
  `;
};
