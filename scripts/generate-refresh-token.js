/**
 * Skrypt do generowania Gmail OAuth2 Refresh Token
 * 
 * Użycie:
 * 1. Ustaw zmienne środowiskowe:
 *    GMAIL_CLIENT_ID=twoj_client_id
 *    GMAIL_CLIENT_SECRET=twoj_client_secret
 * 
 * 2. Uruchom: node scripts/generate-refresh-token.js
 * 
 * 3. Otwórz URL który się pojawi w przeglądarce
 * 
 * 4. Zaloguj się kontem Gmail które używasz jako GMAIL_USER
 * 
 * 5. Skopiuj refresh token z konsoli
 */

const { google } = require('googleapis');
const readline = require('readline');

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('❌ Błąd: Musisz ustawić zmienne środowiskowe:');
  console.error('   GMAIL_CLIENT_ID=twoj_client_id');
  console.error('   GMAIL_CLIENT_SECRET=twoj_client_secret');
  console.error('');
  console.error('Przykład:');
  console.error('   $env:GMAIL_CLIENT_ID="xxx"; $env:GMAIL_CLIENT_SECRET="yyy"; node scripts/generate-refresh-token.js');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  'urn:ietf:wg:oauth:2.0:oob' // Redirect URI dla aplikacji desktop
);

const scopes = ['https://www.googleapis.com/auth/gmail.send'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline', // To jest ważne - bez tego nie dostaniesz refresh tokena
  scope: scopes,
  prompt: 'consent', // Wymusza pokazanie ekranu zgody (ważne dla refresh tokena)
});

console.log('');
console.log('═══════════════════════════════════════════════════════════');
console.log('🔐 Generowanie Gmail OAuth2 Refresh Token');
console.log('═══════════════════════════════════════════════════════════');
console.log('');
console.log('1️⃣  Otwórz ten URL w przeglądarce:');
console.log('');
console.log('   ' + authUrl);
console.log('');
console.log('2️⃣  Zaloguj się kontem Gmail które używasz jako GMAIL_USER');
console.log('');
console.log('3️⃣  Zaakceptuj uprawnienia');
console.log('');
console.log('4️⃣  Skopiuj kod autoryzacyjny i wklej tutaj:');
console.log('');

rl.question('📋 Kod autoryzacyjny: ', (code) => {
  rl.close();
  
  console.log('');
  console.log('⏳ Przetwarzanie...');
  
  oauth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error('');
      console.error('❌ Błąd podczas uzyskiwania tokena:', err.message);
      if (err.message.includes('invalid_grant')) {
        console.error('');
        console.error('💡 Możliwe przyczyny:');
        console.error('   - Kod autoryzacyjny wygasł (spróbuj ponownie)');
        console.error('   - Kod został już użyty');
        console.error('   - Zły CLIENT_ID lub CLIENT_SECRET');
      }
      process.exit(1);
    }

    if (!token.refresh_token) {
      console.error('');
      console.error('⚠️  UWAGA: Nie otrzymano refresh tokena!');
      console.error('');
      console.error('Możliwe przyczyny:');
      console.error('   1. Użyłeś tego samego konta wcześniej (Google nie daje nowego refresh tokena)');
      console.error('   2. Brak parametru prompt: "consent"');
      console.error('');
      console.error('Rozwiązanie:');
      console.error('   - Odwołaj dostęp aplikacji: https://myaccount.google.com/permissions');
      console.error('   - Uruchom skrypt ponownie');
      console.error('');
      if (token.access_token) {
        console.log('Otrzymano access token (ale bez refresh tokena):');
        console.log('   ' + token.access_token.substring(0, 50) + '...');
      }
      process.exit(1);
    }

    console.log('');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('✅ SUKCES! Otrzymano refresh token');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('');
    console.log('📋 Skopiuj ten refresh token i wklej do Vercel:');
    console.log('');
    console.log('   ' + token.refresh_token);
    console.log('');
    console.log('🔧 Jak zaktualizować w Vercel:');
    console.log('   1. Przejdź do: https://vercel.com/twoj-projekt/settings/environment-variables');
    console.log('   2. Znajdź zmienną: GMAIL_REFRESH_TOKEN');
    console.log('   3. Kliknij "Edit" i wklej nowy token');
    console.log('   4. Kliknij "Save"');
    console.log('   5. Zrób redeploy projektu');
    console.log('');
    console.log('💡 Aby token nie wygasał co tydzień:');
    console.log('   - Dodaj użytkownika testowego w Google Cloud Console');
    console.log('   - Lub opublikuj aplikację OAuth');
    console.log('');
  });
});

