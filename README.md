# Sudety Grand Trail

A modern, minimalist website for the Sudety Grand Trail built with Next.js 16, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Modern Design**: Clean, minimalist design with mountain/travel theme
- **Dark Theme**: Dark background with green accents and light contrast elements
- **Responsive**: Mobile-first responsive design
- **Animations**: Smooth Framer Motion animations for section entries
- **Interactive Map**: Embedded map showing the trail route
- **Live Tracking**: Real-time GPS tracking integration with Poltrax
- **Hall of Fame**: Showcase of trail completers with submission form
- **Form Validation**: React Hook Form with Zod validation
- **SEO Optimized**: Metadata configuration, sitemap, and robots.txt
- **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Next.js 16** with App Router
- **React 19** for UI components
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for form validation
- **Inter, Oswald & Montserrat Alternates** fonts for modern typography

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with header and footer
│   ├── page.tsx             # Homepage
│   ├── manifest.ts          # PWA manifest
│   ├── robots.ts            # Robots.txt configuration
│   ├── sitemap.ts           # Sitemap generation
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── hall-of-fame/
│   │   └── page.tsx         # Hall of Fame page
│   ├── korona/
│   │   └── page.tsx         # Korona Sudetów page
│   ├── live/
│   │   └── page.tsx         # Live tracking page
│   └── trail/
│       └── page.tsx         # Trail page
├── components/
│   ├── layouts/             # Layout components
│   │   ├── Footer.tsx
│   │   └── header/          # Header and navigation
│   ├── sections/            # Page sections
│   │   ├── HomeHeroSection.tsx
│   │   ├── WhyChooseSection/
│   │   ├── AboutProjectSection.tsx
│   │   ├── TrailMapSection.tsx
│   │   ├── LiveTrackingSection.tsx
│   │   ├── SudetenCrownSection/
│   │   └── SubmissionFormSection/
│   ├── icons/               # Icon components
│   ├── motion/              # Animation components
│   │   ├── FadeIn.tsx
│   │   ├── ScaleIn.tsx
│   │   └── MorphingDialog.tsx
│   └── [other components]   # Various reusable components
├── config/
│   ├── metadata.ts          # SEO metadata configuration
│   ├── site-routes.ts       # Route definitions
│   └── site.ts              # Site configuration
├── hooks/                   # Custom React hooks
│   ├── useClickOutside.tsx
│   ├── useDebounce.ts
│   ├── useIsMobile.tsx
│   ├── useIsMounted.ts
│   └── useScrollLock.ts
├── lib/
│   ├── fonts.ts             # Font configuration
│   └── utils.ts             # Utility functions
└── public/
    └── images/              # Static images and assets
```

## Pages

### Homepage (`/`)

- Full-screen hero section with mountain background
- "Sudety Grand Trail" heading with description
- "Why choose?" section with feature cards
- About project section

### Trail Page (`/trail`)

- Hero section introducing the trail map
- Interactive map section (embedded from mapy.com)
- Trail description with details and features
- Motivation section with benefits and CTA

### Korona Sudetów (`/korona`)

- Interactive section showcasing all 23 mountain ranges
- Mountain cards view with detailed information
- Trail planner view
- Summary statistics

### Live Tracking (`/live`)

- Real-time GPS tracking display
- Time pressure visualization
- Statistics and progress tracking
- Information about Poltrax tracker partnership

### Hall of Fame (`/hall-of-fame`)

- Showcase of trail completers
- Statistics about completions
- Pre-trail registration section
- Submission form for new completions

### About (`/about`)

- Information about the creator
- Personal story and motivation

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

Copy the `.env.sample` file to `.env.local` and fill in the required values:

```bash
cp .env.sample .env.local
```

Edit `.env.local` and configure the following variables:

- **Gmail OAuth2 Credentials** (required for email submission form):
  - `GMAIL_CLIENT_ID` - Your Gmail OAuth2 Client ID
  - `GMAIL_CLIENT_SECRET` - Your Gmail OAuth2 Client Secret
  - `GMAIL_REFRESH_TOKEN` - Your Gmail OAuth2 Refresh Token
  - `GMAIL_USER` - Gmail address used as sender
  - `GMAIL_RECIPIENT` - Email address to receive form submissions

- **Site Configuration** (optional):
  - `NEXT_PUBLIC_SITE_URL` - Your site URL (defaults to production URL)

> **Note**: The email submission form will not work without proper Gmail OAuth2 credentials. If you don't need email functionality for development, you can skip these variables, but form submissions will fail.

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

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

## External Links

- **Map**: https://mapy.com/s/barusofola
- **Facebook**: https://www.facebook.com/SudetyGrandTrail

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

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Skip to content link
- Keyboard navigation support
- Screen reader friendly components
