# Jak wygenerować nowy Gmail Refresh Token

Jeśli Twój `GMAIL_REFRESH_TOKEN` wygasł i musisz go podmieniać w Vercel, użyj tego przewodnika. Runtime aplikacji wysyła wiadomości przez Gmail API (`users.messages.send`), więc token musi być zgodny z tym przepływem.

## Wymagany scope

Projekt wymaga wyłącznie scope `https://www.googleapis.com/auth/gmail.send`. Ten scope pozwala jedynie na wysyłanie emaili — bez dostępu do skrzynki odbiorczej, wersji roboczych ani etykiet. Używany jest przez dwie Server Actions w `actions/send-email.ts`:
- `sendSubmissionEmail` — zgłoszenie przejścia trasy (z załącznikami: zdjęcie, GPX)
- `sendTrackerRequestEmail` — zgłoszenie wypożyczenia trackera GPS

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

5. Zamknij panel ustawień

6. W lewej kolumnie znajdź **"Gmail API v1"** i rozwiń

7. Zaznacz scope: `https://www.googleapis.com/auth/gmail.send` (jedyny wymagany scope)

8. Kliknij **"Authorize APIs"**

9. Zaloguj się kontem Gmail które używasz jako `GMAIL_USER`

10. Zaakceptuj uprawnienia

11. Kliknij **"Exchange authorization code for tokens"**

12. Skopiuj **"Refresh token"** - to jest Twój nowy `GMAIL_REFRESH_TOKEN`

### Krok 3: Zaktualizuj w Vercel

1. Przejdź do: https://vercel.com/twoj-projekt/settings/environment-variables
2. Znajdź zmienną: `GMAIL_REFRESH_TOKEN`
3. Kliknij **"Edit"**
4. Wklej nowy refresh token
5. Kliknij **"Save"**
6. Zrób **Redeploy** projektu

## Alternatywa: Skrypt Node.js z lokalnym callbackiem

Jeśli wolisz użyć skryptu lokalnie, projekt zawiera gotowy skrypt `scripts/generate-refresh-token.js`, który uruchamia tymczasowy lokalny callback OAuth na `http://127.0.0.1:3000/oauth2callback`.

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

Jeśli port `3000` jest zajęty, możesz ustawić inny:

```powershell
$env:GMAIL_CLIENT_ID="twoj_client_id"
$env:GMAIL_CLIENT_SECRET="twoj_client_secret"
$env:GMAIL_OAUTH_PORT="3010"
node scripts/generate-refresh-token.js
```

Skrypt poprosi Cię o:
1. Otwarcie URL w przeglądarce
2. Zalogowanie się kontem Gmail
3. Zaakceptowanie scope `gmail.send`
4. Poczekanie na przekierowanie na lokalny callback
5. Skopiowanie refresh tokena z terminala

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
- Sprawdź czy redirect URI w Google Cloud Console zawiera dokładnie ten adres, którego używa skrypt, np. `http://127.0.0.1:3000/oauth2callback`

### Nie otrzymuję refresh tokena

- Odwołaj dostęp aplikacji: https://myaccount.google.com/permissions
- Uruchom proces generowania tokena ponownie
- Upewnij się że używasz `prompt: 'consent'` w konfiguracji OAuth
- Upewnij się, że autoryzujesz aplikację z dostępem offline

### Email nie przychodzi po aktualizacji tokena

- Sprawdź czy zrobiłeś redeploy w Vercel
- Sprawdź czy `GMAIL_USER` i `GMAIL_RECIPIENT` są poprawne
- Sprawdź folder SPAM
- Sprawdź logi w Vercel Functions

