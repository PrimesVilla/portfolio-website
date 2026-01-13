# Modern Portfolio Website

A beautiful, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, GSAP, and Lenis smooth scrolling.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Features

- ?? **Modern UI** - Clean, responsive design with Tailwind CSS
- ? **Smooth Scrolling** - Physics-based scrolling with Lenis
- ?? **GSAP Animations** - Advanced scroll-triggered animations
- ?? **Mobile Optimized** - Fully responsive on all devices
- ?? **TypeScript** - Full type safety
- ? **Performance** - GPU-accelerated animations at 60fps

## Project Structure

```
app/
  layout.tsx        # Root layout with LenisProvider
  page.tsx          # Home page
  globals.css       # Global styles & animation utilities
components/
  sections/   # Modern section components
  ui/              # UI component library
lib/
  animations.ts    # GSAP animation utilities
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Customization

### Edit Content

Update component content in `components/modern/`

### Modify Animations

Adjust animation timings and effects in component files or create custom animations using the utilities in `lib/animations.ts`

### Change Styling

Update Tailwind classes and CSS modules - global animations are in `app/globals.css`

## Documentation

- [GSAP & Lenis Integration Guide](GSAP_LENIS_INTEGRATION.md) - Detailed animation setup
- [Project Status](PROJECT_STATUS.md) - Implementation details
- [Documentation Index](DOCUMENTATION_INDEX.md) - Additional resources

## Tech Stack

- **Next.js 16.1.1** - React framework
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **GSAP 3.14.2** - Animations
- **Lenis 1.0.42** - Smooth scrolling
- **shadcn/ui** - UI components


