# System Motywów Strony

## Przegląd

Każda podstrona ma swój unikalny motyw kolorystyczny, który zachowuje spójność stylistyczną całej strony, jednocześnie nadając każdej podstronie charakterystyczny wygląd.

## Motywy Podstron

### 🏠 HOME (`/`) - Neutralny/Basic
**Kolor dominujący:** Szare odcienie (mountain)
**Charakterystyka:** Neutralny, podstawowy, elegancki
**Użycie:** Strona główna z ogólnym przeglądem projektu

**Kolory:**
- Primary: `mountain-700` (#52525b)
- Secondary: `mountain-600` (#71717a)
- Accent: `mountain-400` (#a1a1aa)
- Background: `cream-500` (#f5f2e7)
- Text: `mountain-900` (#27272a)

**Klasy utility:**
- `.theme-home-hero` - Tło hero sekcji
- `.theme-home-badge` - Badge z ikoną
- `.theme-home-text-gradient` - Gradient tekstu
- `.theme-home-btn-primary` - Główny przycisk
- `.theme-home-btn-secondary` - Drugorzędny przycisk

---

### 🏆 HALL OF FAME (`/hall-of-fame`) - Złoty/Skarb
**Kolor dominujący:** Złote odcienie (gold)
**Charakterystyka:** Luksusowy, prestiżowy, elegancki
**Użycie:** Lista zdobywców, statystyki, rejestracja

**Kolory:**
- Primary: `gold-500` (#f59e0b)
- Secondary: `gold-400` (#fbbf24)
- Accent: `gold-600` (#d97706)
- Background: Ciemne tło z złotymi akcentami
- Text: `cream` na ciemnym tle

**Klasy utility:**
- `.theme-halloffame-hero` - Tło hero sekcji
- `.theme-halloffame-badge` - Badge z ikoną (złoty)
- `.theme-halloffame-text-gradient` - Gradient tekstu (złoty)
- `.theme-halloffame-btn-primary` - Główny przycisk (złoty)
- `.theme-halloffame-btn-secondary` - Drugorzędny przycisk
- `.theme-halloffame-glow` - Efekt świecenia

**Efekty specjalne:**
- `shadow-gold-glow` - Cień z efektem złotego świecenia
- `shadow-gold-glow-lg` - Większy cień z efektem złotego świecenia

---

### 🗺️ TRAIL (`/trail`) - Brązowy/Ziemisty
**Kolor dominujący:** Brązowe odcienie (earth)
**Charakterystyka:** Ziemisty, naturalny, stabilny
**Użycie:** Mapa trasy, opis trasy, motywacja

**Kolory:**
- Primary: `earth-700` (#6b4423)
- Secondary: `earth-600` (#8b6b47)
- Accent: `earth-500` (#a8825f)
- Background: Ciemne brązowe tło
- Text: `cream` na ciemnym tle

**Klasy utility:**
- `.theme-trail-hero` - Tło hero sekcji
- `.theme-trail-badge` - Badge z ikoną (brązowy)
- `.theme-trail-text-gradient` - Gradient tekstu (brązowy)
- `.theme-trail-btn-primary` - Główny przycisk (brązowy)
- `.theme-trail-btn-secondary` - Drugorzędny przycisk
- `.theme-trail-glow` - Efekt świecenia

**Efekty specjalne:**
- `shadow-brown-glow` - Cień z efektem brązowego świecenia
- `shadow-brown-glow-lg` - Większy cień z efektem brązowego świecenia

---

### ⛰️ SZCZYTY (`/szczyty`) - Zielony/Las
**Kolor dominujący:** Zielone odcienie (forest)
**Charakterystyka:** Naturalny, świeży, górski
**Użycie:** Lista szczytów, Korona Sudetów, interaktywne karty

**Kolory:**
- Primary: `forest-700` (#2f4f3e)
- Secondary: `forest-600` (#3d6045)
- Accent: `forest-500` (#4f7a58)
- Background: Ciemne zielone tło
- Text: `cream` na ciemnym tle

**Klasy utility:**
- `.theme-szczyty-hero` - Tło hero sekcji
- `.theme-szczyty-badge` - Badge z ikoną (zielony)
- `.theme-szczyty-text-gradient` - Gradient tekstu (zielony)
- `.theme-szczyty-btn-primary` - Główny przycisk (zielony)
- `.theme-szczyty-btn-secondary` - Drugorzędny przycisk
- `.theme-szczyty-glow` - Efekt świecenia

**Efekty specjalne:**
- `shadow-green-glow` - Cień z efektem zielonego świecenia
- `shadow-green-glow-lg` - Większy cień z efektem zielonego świecenia

---

### 🔴 LIVE (`/live`) - Pomarańczowy
**Kolor dominujący:** Pomarańczowe odcienie (orange)
**Charakterystyka:** Dynamiczny, żywy, aktywny
**Użycie:** Live tracking, statystyki na żywo, timer

**Kolory:**
- Primary: `orange-500` (#f97316)
- Secondary: `orange-400` (#fb923c)
- Accent: `orange-600` (#ea580c)
- Background: Ciemne tło z pomarańczowymi akcentami
- Text: `cream` na ciemnym tle

**Klasy utility:**
- `.theme-live-hero` - Tło hero sekcji
- `.theme-live-badge` - Badge z ikoną (pomarańczowy)
- `.theme-live-text-gradient` - Gradient tekstu (pomarańczowy)
- `.theme-live-btn-primary` - Główny przycisk (pomarańczowy)
- `.theme-live-btn-secondary` - Drugorzędny przycisk
- `.theme-live-glow` - Efekt świecenia

**Efekty specjalne:**
- `shadow-orange-glow` - Cień z efektem pomarańczowego świecenia
- `shadow-orange-glow-lg` - Większy cień z efektem pomarańczowego świecenia

---

## Uniwersalne Klasy

Następujące klasy działają z każdym motywem:

- `.theme-hero-bg` - Bazowe tło hero sekcji
- `.theme-hero-overlay` - Nakładka na tło hero
- `.theme-hero-glow` - Efekt świecenia w tle
- `.theme-badge-base` - Bazowy styl badge
- `.theme-btn-base` - Bazowy styl przycisku

## Gradienty Tła Hero

Każdy motyw ma swój dedykowany gradient tła hero:

- `bg-hero-home` - Neutralny gradient dla strony głównej
- `bg-hero-halloffame` - Złoty gradient dla Hall of Fame
- `bg-hero-trail` - Brązowy gradient dla trasy
- `bg-hero-szczyty` - Zielony gradient dla szczytów
- `bg-hero-live` - Pomarańczowy gradient dla live

## Przykład Użycia

```tsx
// Przykład dla strony Hall of Fame
<Section className="theme-halloffame-hero">
  <div className="theme-hero-overlay" />
  <div className="theme-hero-glow theme-halloffame-glow" />
  
  <div className="theme-badge-base theme-halloffame-badge">
    <TrophyIcon />
  </div>
  
  <h1 className="theme-halloffame-text-gradient">
    Hall of Fame
  </h1>
  
  <button className="theme-btn-base theme-halloffame-btn-primary">
    Zgłoś Przejście
  </button>
</Section>
```

## Zasady Użycia

1. **Spójność:** Używaj klas motywu dla danej podstrony konsekwentnie
2. **Hierarchia:** Używaj primary dla głównych elementów, secondary dla drugorzędnych
3. **Kontrast:** Zawsze zapewniaj odpowiedni kontrast tekstu z tłem
4. **Efekty:** Używaj efektów świecenia (glow) oszczędnie, tylko dla ważnych elementów
5. **Responsywność:** Wszystkie klasy są responsywne i działają na wszystkich urządzeniach

## Rozszerzanie

Aby dodać nowy motyw:

1. Dodaj kolory do `tailwind.config.js` w sekcji `colors`
2. Dodaj gradienty do `backgroundImage` w `tailwind.config.js`
3. Dodaj cienie do `boxShadow` w `tailwind.config.js`
4. Dodaj klasy utility do `app/globals.css` w sekcji `@layer components`
5. Zaktualizuj tę dokumentację

## Kolory Bazowe

Wszystkie motywy używają wspólnych kolorów bazowych:

- `cream` - Główny kolor tła i tekstu na ciemnych tłach
- `forest` - Zielone odcienie (używane w motywie szczyty)
- `earth` - Brązowe odcienie (używane w motywie trail)
- `mountain` - Szare odcienie (używane w motywie home)
- `accent` - Pomarańczowo-czerwony akcent (używany globalnie)

