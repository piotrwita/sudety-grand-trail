# Jak wygenerować nowy Gmail Refresh Token

Jeśli Twój `GMAIL_REFRESH_TOKEN` wygasł i musisz go podmieniać w Vercel, użyj tego przewodnika.

## Szybkie rozwiązanie (Google OAuth Playground)

### Krok 1: Przygotuj dane
- `GMAIL_CLIENT_ID` - z Vercel Environment Variables
- `GMAIL_CLIENT_SECRET` - z Vercel Environment Variables

### Krok 2: Użyj Google OAuth Playground

1. Przejdź do: https://developers.google.com/oauthplayground/

2. W prawym górnym rogu kliknij ikonę ustawień ⚙️

3. Zaznacz **"Use your own OAuth credentials"**

4. Wpisz:
   - **OAuth Client ID**: Twój `GMAIL_CLIENT_ID`
   - **OAuth Client secret**: Twój `GMAIL_CLIENT_SECRET`

5. W lewej kolumnie znajdź **"Gmail API v1"**

6. Zaznacz scope: `https://www.googleapis.com/auth/gmail.send`

7. Kliknij **"Authorize APIs"**

8. Zaloguj się kontem Gmail które używasz jako `GMAIL_USER`

9. Zaakceptuj uprawnienia

10. Kliknij **"Exchange authorization code for tokens"**

11. Skopiuj **"Refresh token"** - to jest Twój nowy `GMAIL_REFRESH_TOKEN`

### Krok 3: Zaktualizuj w Vercel

1. Przejdź do: https://vercel.com/twoj-projekt/settings/environment-variables
2. Znajdź zmienną: `GMAIL_REFRESH_TOKEN`
3. Kliknij **"Edit"**
4. Wklej nowy refresh token
5. Kliknij **"Save"**
6. Zrób **Redeploy** projektu

## Alternatywa: Skrypt Node.js

Jeśli wolisz użyć skryptu lokalnie:

### Instalacja zależności

```bash
npm install googleapis
```

### Uruchomienie skryptu

**Windows PowerShell:**
```powershell
$env:GMAIL_CLIENT_ID="twoj_client_id"
$env:GMAIL_CLIENT_SECRET="twoj_client_secret"
node scripts/generate-refresh-token.js
```

**Linux/Mac:**
```bash
GMAIL_CLIENT_ID="twoj_client_id" GMAIL_CLIENT_SECRET="twoj_client_secret" node scripts/generate-refresh-token.js
```

Skrypt poprosi Cię o:
1. Otwarcie URL w przeglądarce
2. Zalogowanie się kontem Gmail
3. Wklejenie kodu autoryzacyjnego
4. Skopiowanie refresh tokena

## Dlaczego token wygasa co tydzień?

Refresh token wygasa po 7 dniach jeśli:
- ❌ Aplikacja OAuth w Google Cloud Console jest w trybie **Testing**
- ❌ Nie ma dodanych użytkowników testowych

## Jak naprawić to na stałe?

### Rozwiązanie: Dodaj użytkownika testowego

1. Przejdź do [Google Cloud Console](https://console.cloud.google.com/)
2. Wybierz swój projekt
3. Przejdź do **APIs & Services** → **OAuth consent screen**
4. W sekcji **Test users** kliknij **+ ADD USERS**
5. Dodaj adres email który używasz jako `GMAIL_USER`
6. Kliknij **SAVE**

Po dodaniu użytkownika testowego:
- ✅ Refresh token **NIE BĘDZIE** wygasał co tydzień
- ✅ Będzie działał permanentnie (dopóki nie wycofasz dostępu)
- ✅ Nie będziesz musiał go podmieniać

### Opcjonalnie: Opublikuj aplikację

1. W tym samym ekranie **OAuth consent screen**
2. Przewiń w dół do **Publishing status**
3. Kliknij **PUBLISH APP**
4. Potwierdź publikację

**Uwaga**: Po publikacji aplikacja będzie dostępna dla wszystkich użytkowników Google. Jeśli chcesz ograniczyć dostęp tylko do określonych użytkowników, użyj użytkowników testowych zamiast publikacji.

## Troubleshooting

### "invalid_grant" error

- Token wygasł - wygeneruj nowy refresh token
- Sprawdź czy `GMAIL_USER` jest tym samym kontem które użyłeś do generowania tokena
- Sprawdź czy aplikacja OAuth ma poprawne uprawnienia

### Nie otrzymuję refresh tokena

- Odwołaj dostęp aplikacji: https://myaccount.google.com/permissions
- Uruchom proces generowania tokena ponownie
- Upewnij się że używasz `prompt: 'consent'` w konfiguracji OAuth

### Email nie przychodzi po aktualizacji tokena

- Sprawdź czy zrobiłeś redeploy w Vercel
- Sprawdź czy `GMAIL_USER` i `GMAIL_RECIPIENT` są poprawne
- Sprawdź folder SPAM
- Sprawdź logi w Vercel Functions

