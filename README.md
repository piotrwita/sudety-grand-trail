# Sudety Grand Trail

A modern, minimalist website for the Sudety Grand Trail built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Modern Design**: Clean, minimalist design with mountain/travel theme
- **Dark Theme**: Dark background with green accents and light contrast elements
- **Responsive**: Mobile-first responsive design
- **Animations**: Smooth Framer Motion animations for section entries
- **Interactive Map**: Embedded map showing the trail route
- **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Inter & Poppins** fonts for modern typography

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   └── trail/
│       └── page.tsx         # Trail page
├── components/
│   ├── Navigation.tsx       # Main navigation component
│   ├── HeroSection.tsx      # Homepage hero section
│   ├── FeatureCards.tsx     # "Why choose" feature cards
│   ├── MotivationSection.tsx # Motivational quote section
│   ├── TrailMap.tsx         # Interactive map component
│   ├── TrailDescription.tsx # Trail description section
│   └── TrailMotivation.tsx  # Trail motivation section
└── public/
    └── images/              # Placeholder SVG images
```

## Pages

### Homepage (`/`)
- Full-screen hero section with mountain background
- "Sudety Grand Trail" heading with description
- "Poznaj Szlak" CTA button leading to `/trail`
- "Why choose?" section with 3 feature cards (Adventure, Nature, Challenge)
- Motivational quote section with inspiring text

### Trail Page (`/trail`)
- Header with trail introduction
- Interactive map section (embedded from mapy.com)
- Trail description with details and features
- Motivation section with benefits and CTA

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## External Links

- **Map**: https://mapy.com/s/barusofola
- **Facebook**: https://www.facebook.com/SudetyGrandTrail

## Color Scheme

- **Primary Green**: Various shades from `#22c55e` to `#14532d`
- **Dark Background**: Shades from `#0f172a` to `#475569`
- **Accent Colors**: Gradients combining green and blue tones

## Typography

- **Display Font**: Poppins (headings, hero text)
- **Body Font**: Inter (body text, navigation)

## Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation with mobile menu
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## Animations

Framer Motion animations include:
- Fade-in-up effects for sections
- Staggered animations for feature cards
- Hover effects on interactive elements
- Smooth page transitions

