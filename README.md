# Sudety Grand Trail

> **Official Website**: [https://sudety-grand-trail.com](https://sudety-grand-trail.com)

A modern, minimalist website for the Sudety Grand Trail built with Next.js 16, TypeScript, TailwindCSS, and Framer Motion. Fully bilingual (Polish/English) with comprehensive trail information, live tracking, and community features.

## Features

- **Internationalization**: Full Polish/English bilingual support with next-intl and locale-based routing
- **Modern Design**: Clean, minimalist design with mountain/travel theme
- **Dark Theme**: Dark background with green accents and light contrast elements
- **Responsive**: Mobile-first responsive design
- **Animations**: Smooth Framer Motion animations for section entries
- **Interactive Map**: Embedded map showing the trail route with GPX download
- **Live Tracking**: Real-time GPS tracking integration with Poltrax
- **Trail Journal**: Day-by-day trail journey documentation with photos and stories
- **Hall of Fame**: Showcase of trail completers with submission form
- **Badge System**: Official trail completion badge showcase and information
- **Form Validation**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics integration for performance monitoring
- **SEO Optimized**: Metadata configuration, sitemap, and robots.txt with multilingual support
- **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Next.js 16** with App Router and internationalization routing (`[locale]`)
- **React 19** for UI components
- **TypeScript** for type safety
- **next-intl** for internationalization (Polish/English)
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for form validation
- **@vercel/analytics** for analytics and performance monitoring
- **Inter, Oswald & Montserrat Alternates** fonts for modern typography

## Project Structure

```
├── app/
│   ├── [locale]/            # Locale-based routing (pl, en)
│   │   ├── layout.tsx       # Locale layout with i18n provider
│   │   ├── page.tsx        # Homepage
│   │   ├── about/
│   │   │   └── page.tsx    # About page
│   │   ├── badge/
│   │   │   └── page.tsx    # Badge page
│   │   ├── hall-of-fame/
│   │   │   └── page.tsx    # Hall of Fame page
│   │   ├── live/
│   │   │   └── page.tsx    # Live tracking page
│   │   ├── peaks/
│   │   │   └── page.tsx    # Peaks (Szczyty) page
│   │   ├── privacy-policy/
│   │   │   └── page.tsx    # Privacy Policy page
│   │   ├── terms-of-service/
│   │   │   └── page.tsx    # Terms of Service page
│   │   └── trail/
│   │       └── page.tsx    # Trail page
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── manifest.ts          # PWA manifest
│   ├── robots.ts            # Robots.txt configuration
│   └── sitemap.ts           # Sitemap generation
├── components/
│   ├── layouts/             # Layout components
│   │   ├── Footer.tsx
│   │   ├── header/          # Header and navigation
│   │   └── SocialLinkList.tsx
│   ├── sections/            # Page sections
│   │   ├── HomeHeroSection.tsx
│   │   ├── WhyChooseSection/
│   │   ├── AboutProjectSection.tsx
│   │   ├── TrailMapSection.tsx
│   │   ├── TrailJourneySection.tsx
│   │   ├── LiveTrackingSection.tsx
│   │   ├── ModernTrackerSection/
│   │   ├── SudetenCrownSection/
│   │   ├── BadgeSection.tsx
│   │   └── SubmissionFormSection/
│   ├── pages/               # Page-specific hero sections
│   ├── icons/               # Icon components
│   ├── motion/              # Animation components
│   │   ├── FadeIn.tsx
│   │   ├── ScaleIn.tsx
│   │   └── MorphingDialog.tsx
│   └── [other components]   # Various reusable components
├── config/
│   ├── metadata.ts          # SEO metadata configuration
│   ├── site-routes.ts       # Route definitions
│   ├── site.ts              # Site configuration
│   └── section-ids.ts       # Section navigation IDs
├── data/
│   └── trail-journal/       # Trail journal entries (day-1.ts through day-15.ts)
│       └── trail-journal.ts
├── i18n/                    # Internationalization configuration
│   ├── routing.ts           # next-intl routing config
│   ├── navigation.ts        # Navigation utilities
│   └── request.ts           # Server-side i18n request handler
├── messages/                # Translation files
│   ├── pl.json              # Polish translations
│   └── en.json              # English translations
├── schemas/                 # Validation schemas
│   ├── submission.ts        # Form submission schema
│   └── tracker.ts           # Tracker data schema
├── hooks/                   # Custom React hooks
│   ├── useClickOutside.ts
│   ├── useDebounce.ts
│   ├── useIsMobile.ts
│   ├── useIsMounted.ts
│   └── useScrollLock.ts
├── lib/
│   ├── fonts.ts             # Font configuration
│   ├── utils.ts             # Utility functions
│   ├── i18n-utils.ts        # i18n helper functions
│   ├── get-navigation.ts    # Navigation utilities
│   ├── section-navigation.ts
│   └── email-templates.ts   # Email template utilities
├── actions/
│   └── send-email.ts        # Server action for email sending
└── public/
    └── images/              # Static images and assets
        ├── journal/         # Trail journal photos
        └── mountains/       # Mountain range photos
```

## Pages

All pages are available in both Polish (default) and English with locale-based routing (`/` for Polish, `/en` for English).

### Homepage (`/`)

- Full-screen hero section with mountain background
- "Sudety Grand Trail" heading with description
- Trail statistics (900 km, 23 ranges, 3 countries, etc.)
- "Why choose?" section with feature cards
- About project section
- Trail journey section with day-by-day journal entries

### Trail Page (`/trail`)

- Hero section introducing the trail map
- Interactive map section (embedded from mapy.com)
- GPX download functionality
- Trail description with details and features
- Trail journey section with journal entries and photos
- Motivation section with benefits and CTA

### Peaks Page (`/peaks`)

- Interactive section showcasing all 23 mountain ranges
- Mountain cards view with detailed information
- Trail planner view
- Summary statistics
- Information about Korona Sudetów (Sudeten Crown)

### Live Tracking (`/live`)

- Real-time GPS tracking display
- Time pressure visualization
- Statistics and progress tracking
- Information about Poltrax tracker partnership
- Modern tracker interface with live updates

### Hall of Fame (`/hall-of-fame`)

- Showcase of trail completers
- Statistics about completions
- Pre-trail registration section
- Submission form for new completions
- Gallery of finishers

### Badge Page (`/badge`)

- Official trail completion badge showcase
- Badge design and information
- Requirements for earning the badge
- Badge application process

### About (`/about`)

- Information about the creator
- Personal story and motivation
- Creator's background and inspiration

### Privacy Policy (`/privacy-policy`)

- Privacy policy and data protection information
- GDPR compliance details
- Cookie policy

### Terms of Service (`/terms-of-service`)

- Terms and conditions of service
- Usage guidelines
- Legal information

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher (20.x recommended)
- **npm** 9.x or higher (comes with Node.js)

You can check your versions by running:

```bash
node --version
npm --version
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

Create a `.env.local` file in the root directory and configure the following variables:

- **Gmail OAuth2 Credentials** (required for email submission form):
  - `GMAIL_CLIENT_ID` - Your Gmail OAuth2 Client ID
  - `GMAIL_CLIENT_SECRET` - Your Gmail OAuth2 Client Secret
  - `GMAIL_REFRESH_TOKEN` - Your Gmail OAuth2 Refresh Token
  - `GMAIL_USER` - Gmail address used as sender
  - `GMAIL_RECIPIENT` - Email address to receive form submissions

- **Site Configuration** (optional):
  - `NEXT_PUBLIC_SITE_URL` - Your site URL (defaults to `https://sudety-grand-trail.com`)

> **Note**: The email submission form will not work without proper Gmail OAuth2 credentials. If you don't need email functionality for development, you can skip these variables, but form submissions will fail.

> **Need help setting up Gmail OAuth2?** See the [Gmail Refresh Token Guide](docs/REFRESH_TOKEN_GUIDE.md) for detailed instructions on generating and managing your OAuth2 credentials.

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

   The site will default to Polish (`/`). Access the English version at `/en`.

> **Note**: The site uses `next-intl` for internationalization. Locales are configured in `i18n/routing.ts` with `pl` as the default locale and `en` as the secondary locale. All translations are stored in `messages/pl.json` and `messages/en.json`.

## Build & Deploy

1. Build for production:

```bash
npm run build
```

2. Start production server:

```bash
npm start
```

3. Lint code:

```bash
npm run lint
```

### Deployment

The website is production-ready and deployed at [https://sudety-grand-trail.com](https://sudety-grand-trail.com).

**Deployment considerations:**

- Environment variables must be configured for email functionality
- `NEXT_PUBLIC_SITE_URL` should be set to the production URL
- Both locales (`pl` and `en`) are automatically generated during build
- Static assets and images are optimized for production
- SEO metadata is configured for both locales with proper hreflang tags

## Troubleshooting

### Gmail OAuth2 Issues

**Problem**: Email form submissions are failing or you're getting authentication errors.

**Solutions**:
- Verify all Gmail OAuth2 credentials are correctly set in `.env.local`
- Check if your `GMAIL_REFRESH_TOKEN` has expired (tokens expire after 7 days if the OAuth app is in Testing mode)
- See the [Gmail Refresh Token Guide](docs/REFRESH_TOKEN_GUIDE.md) for detailed instructions on generating a new refresh token
- Ensure `GMAIL_USER` matches the Gmail account used to generate the OAuth2 credentials
- Add your Gmail account as a test user in Google Cloud Console to prevent token expiration

### Build Errors

**Problem**: Build fails with TypeScript or module resolution errors.

**Solutions**:
- Ensure you're using Node.js 18+ (20.x recommended)
- Delete `node_modules` and `.next` folders, then run `npm install` again
- Clear npm cache: `npm cache clean --force`
- Verify all dependencies are installed: `npm install`

### Internationalization Issues

**Problem**: Translations not showing or locale routing not working.

**Solutions**:
- Verify translation files exist in `messages/pl.json` and `messages/en.json`
- Check that locale routing is configured correctly in `i18n/routing.ts`
- Ensure the default locale (`pl`) is set correctly
- Clear `.next` cache and rebuild: `rm -rf .next && npm run build`

### Development Server Issues

**Problem**: Development server won't start or crashes.

**Solutions**:
- Check if port 3000 is already in use: `lsof -i :3000` (Mac/Linux) or `netstat -ano | findstr :3000` (Windows)
- Try using a different port: `npm run dev -- -p 3001`
- Verify Node.js version matches requirements
- Check for syntax errors in recently modified files

## Production Website

- **Official Website**: [https://sudety-grand-trail.com](https://sudety-grand-trail.com)
- **Polish Version**: [https://sudety-grand-trail.com](https://sudety-grand-trail.com)
- **English Version**: [https://sudety-grand-trail.com/en](https://sudety-grand-trail.com/en)

## External Links

- **Trail Map**: [https://mapy.com/s/barusofola](https://mapy.com/s/barusofola)
- **Facebook Page**: [https://www.facebook.com/SudetyGrandTrail](https://www.facebook.com/SudetyGrandTrail)
- **Facebook Group**: [https://www.facebook.com/groups/opowiescizeszlaku](https://www.facebook.com/groups/opowiescizeszlaku)

## Color Scheme

- **Primary Green**: Various shades from `#22c55e` to `#14532d`
- **Dark Background**: Shades from `#0f172a` to `#475569`
- **Accent Colors**: Gradients combining green and blue tones
- **Cream/Beige**: Light contrast elements for readability

## Typography

- **Display Font**: Oswald (headings, hero text)
- **Body Font**: Inter (body text, navigation)
- **Accent Font**: Montserrat Alternates (special sections)

## Responsive Design

The website is built with a mobile-first approach and includes:

- Responsive navigation with mobile menu
- Flexible grid layouts
- Optimized typography scaling with fluid typography
- Touch-friendly interactive elements
- Skip to content link for accessibility

## Browser Support

The website is optimized for modern browsers that support ES6+ features and React 19:

- **Chrome/Edge**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Mobile browsers**: iOS Safari (latest), Chrome Mobile (latest)

The site uses modern web standards and may not work correctly in older browsers (Internet Explorer, older versions of Safari, etc.). For the best experience, please use an up-to-date browser.

## Animations

Framer Motion animations include:

- Fade-in-up effects for sections
- Scale-in effects for badges and icons
- Staggered animations for feature cards
- Hover effects on interactive elements
- Smooth page transitions
- Scroll-triggered animations

## Form Handling

- React Hook Form for form state management
- Zod for schema validation
- Custom form components with validation feedback
- Submission form for Hall of Fame entries

## SEO & Metadata

- Centralized metadata configuration
- Dynamic sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card support
- PWA manifest support

## Security Features

The website implements comprehensive security headers configured in `next.config.js`:

- **X-Frame-Options**: Set to `DENY` to prevent clickjacking attacks
- **X-Content-Type-Options**: Set to `nosniff` to prevent MIME type sniffing
- **Referrer-Policy**: Set to `strict-origin-when-cross-origin` for privacy protection
- **Permissions-Policy**: Restricts access to camera, microphone, and geolocation APIs
- **Strict-Transport-Security**: Enforces HTTPS with HSTS headers (max-age: 1 year)
- **X-XSS-Protection**: Enables browser XSS filtering

These headers are automatically applied to all routes, providing defense-in-depth security for the application.

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Skip to content link
- Keyboard navigation support
- Screen reader friendly components

## Internationalization

The website is fully bilingual with support for Polish (default) and English:

- **Locale-based routing**: Uses Next.js `[locale]` dynamic routing
- **next-intl integration**: Server and client components with type-safe translations
- **Default locale**: Polish (`pl`) - accessible at `/`
- **Secondary locale**: English (`en`) - accessible at `/en`
- **Translation files**: All content stored in `messages/pl.json` and `messages/en.json`
- **SEO optimized**: Proper hreflang tags and canonical URLs for each locale
- **Language switcher**: Available in navigation header

### Supported Locales

- `pl` - Polish (default)
- `en` - English

### Adding New Translations

1. Add translation keys to `messages/pl.json` and `messages/en.json`
2. Use `useTranslations()` hook in client components
3. Use `getTranslations()` in server components
4. Translations are type-safe and validated at build time

## Trail Journal

The website includes a comprehensive trail journal feature documenting the creator's journey:

- **15-day journey**: Detailed day-by-day entries from the trail
- **Photo galleries**: Visual documentation of each day's journey
- **Stories and experiences**: Personal narratives and trail insights
- **Trail statistics**: Daily progress, distance, elevation, and highlights
- **Interactive timeline**: Navigate through the journey chronologically

Journal entries are stored in `data/trail-journal/` with individual files for each day (`day-1.ts` through `day-15.ts`). The journal is displayed on the homepage and trail page, providing visitors with an immersive experience of the trail journey.

## License

This project is private and proprietary. All rights reserved.

---

**Sudety Grand Trail** - [https://sudety-grand-trail.com](https://sudety-grand-trail.com)
