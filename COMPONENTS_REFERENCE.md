# Modern Components Reference

## Complete Component Library

All modern components are located in `/components/modern/` directory.

---

## 🎯 Component Breakdown

### 1. ModernHero
**File**: `components/modern/ModernHero.tsx`  
**Purpose**: Eye-catching hero section with animated elements  
**Key Features**:
- Animated gradient background (8s loop)
- Floating animated orbs with blob animation
- Large gradient headline with "Primes" name
- Two CTA buttons (View My Work, Learn More)
- Smooth scroll navigation
- Bounce animation on scroll indicator

**Props**: None  
**Sections**: Home section (id="home")

**Key Classes**:
```tsx
- animate-gradient-slow // Background gradient animation
- animate-blob // Floating orb animation
- animation-delay-2000 // Stagger second orb
- text-6xl md:text-8xl // Responsive headline
- bg-gradient-to-r from-blue-400 to-cyan-400 // Gradient text
```

---

### 2. ModernAbout
**File**: `components/modern/ModernAbout.tsx`  
**Purpose**: Highlight key values and strengths  
**Key Features**:
- 4 value proposition cards (Clean Code, Performance, Innovation, Collaboration)
- Glassmorphism design
- Icon indicators
- Hover effects with border color change
- Responsive grid (1 col mobile, 2 cols tablet, 4 cols desktop)

**Props**: None  
**Sections**: About section (id="about")

**Key Classes**:
```tsx
- backdrop-blur-xl // Frosted glass effect
- bg-gradient-to-br from-white/10 to-white/5 // Glass background
- border-blue-500/20 // Subtle blue border
- hover:border-blue-400/50 // Hover border color
```

---

### 3. ModernStats
**File**: `components/modern/ModernStats.tsx`  
**Purpose**: Display impressive statistics with animated counters  
**Key Features**:
- 4 statistics with animated counters
- Intersection Observer for scroll-triggered animations
- 2-second counter animation duration
- AnimatedCounter sub-component handles counting logic
- Gradient text on numbers
- Responsive 2x2 grid

**Props**: None  
**Sections**: Stats section (id="stats")

**Default Statistics**:
- Projects: 15+
- Clients: 8+
- Technologies: 20+
- Experience: 3+ years

**Key Hooks**:
```tsx
- useEffect() // Counter animation logic
- useRef() // Element reference for observer
- useState() // Current count state
- useIntersectionObserver() // Scroll detection
```

---

### 4. ModernSkills
**File**: `components/modern/ModernSkills.tsx`  
**Purpose**: Showcase technical and soft skills  
**Key Features**:
- Two technical categories: Frontend & Backend
- Animated progress bars (blue-500 to cyan-400)
- 8-item soft skills grid
- Glassmorphism skill cards
- Icon indicators for each skill
- Hover animations on skill items

**Props**: None  
**Sections**: Skills section (id="skills")

**Skill Categories**:
- **Frontend**: React, TypeScript, Tailwind CSS, Next.js
- **Backend**: Node.js, Express, MongoDB, PostgreSQL
- **Soft Skills**: 8 soft skill items in grid

**Key Classes**:
```tsx
- w-full bg-slate-700 rounded-full h-2 // Progress bar track
- bg-gradient-to-r from-blue-500 to-cyan-400 // Progress bar fill
- h-3 rounded-full // Progress animation
- group-hover:shadow-lg // Hover effect
```

---

### 5. ModernProjects
**File**: `components/modern/ModernProjects.tsx`  
**Purpose**: Showcase featured projects with rich details  
**Key Features**:
- 3 featured projects displayed in card grid
- Project images with hover zoom effect (scale-110)
- Gradient overlay appears on hover
- Gradient tags for tech stack
- Two action buttons: View (external link), GitHub (GitHub link)
- Glassmorphism card design
- Responsive grid (1 col mobile, 3 cols desktop)

**Props**: None  
**Sections**: Projects section (id="projects")

**Project Data Structure**:
```typescript
{
  id: number,
  title: string,
  description: string,
  image: string, // Path in public/images/
  tags: string[], // Tech stack
  liveUrl: string, // External link
  githubUrl: string, // GitHub repository link
}
```

**Key Classes**:
```tsx
- group // For hover effects
- overflow-hidden // Clip image on hover
- scale-110 group-hover:scale-110 // Image zoom
- from-transparent to-black // Gradient overlay
```

---

### 6. ModernTimeline
**File**: `components/modern/ModernTimeline.tsx`  
**Purpose**: Display journey milestones and achievements  
**Key Features**:
- Vertical timeline design
- 4 milestone entries
- Alternating layout on desktop (left-right)
- Single column on mobile
- Gradient timeline line (hidden on mobile)
- Icon indicators for each milestone
- Glassmorphism cards

**Props**: None  
**Sections**: Timeline section (id="timeline")

**Timeline Items**:
1. 2023 - Started Full-Stack Journey
2. 2024 - Building & Learning
3. 2024-2025 - Professional Growth
4. Present - Ready for Challenges

**Key Classes**:
```tsx
- absolute left-1/2 // Center timeline line
- border-l-4 border-blue-500 // Timeline line gradient
- md:w-1/2 // Half width on desktop
- md:ml-auto // Alternate sides
```

---

### 7. ModernContact
**File**: `components/modern/ModernContact.tsx`  
**Purpose**: Provide contact information and call-to-action  
**Key Features**:
- 3 contact method cards (Email, LinkedIn, GitHub)
- Direct action links to contact/social profiles
- Large CTA button for email contact
- Glassmorphism design
- Hover effects on cards
- Icon indicators
- Responsive grid (1 col mobile, 3 cols desktop)

**Props**: None  
**Sections**: Contact section (id="contact")

**Contact Methods**:
```tsx
{
  icon: <Mail />,
  label: 'Email',
  value: 'villa.primesbryan@gmail.com',
  href: 'mailto:villa.primesbryan@gmail.com',
}
// ... LinkedIn and GitHub
```

**Key Features**:
- Opens email client when clicked
- Opens social profiles in new tabs
- Shadow effect on hover

---

### 8. ModernFooter
**File**: `components/modern/ModernFooter.tsx`  
**Purpose**: Clean footer with copyright and attribution  
**Key Features**:
- Copyright information
- Tech stack attribution
- Minimal, clean design
- Blue accent border at top
- Dark background matching hero

**Props**: None  
**Sections**: Footer section

**Content**:
```
© 2025 Primes Bryan Villa. All rights reserved.
Crafted with passion using Next.js, React, TypeScript & Tailwind CSS
```

---

## 🔄 Component Flow in page.tsx

The modern portfolio follows this component structure:

```tsx
Portfolio (page.tsx)
├── ModernHero         (Hero section)
├── ModernAbout        (About & values)
├── ModernStats        (Statistics with counters)
├── ModernSkills       (Technical & soft skills)
├── ModernProjects     (Featured projects)
├── ModernTimeline     (Journey timeline)
├── ModernContact      (Contact information)
└── ModernFooter       (Footer)
```

All components are directly imported (no Suspense/lazy loading) for instant rendering.

---

## 🎨 Common Component Patterns

### Glassmorphism Card Template
```tsx
<div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
  {/* Content */}
</div>
```

### Gradient Text Template
```tsx
<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
  Text here
</span>
```

### Icon Box Template
```tsx
<div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
  {icon}
</div>
```

### Responsive Grid Template
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Items */}
</div>
```

---

## 📦 Dependencies Used

```json
{
  "react": "^19.x",
  "next": "^16.x",
  "lucide-react": "latest", // Icons
  "tailwindcss": "^4.x", // Styling
  "@radix-ui/react-slot": "^2.x", // shadcn/ui base
  "class-variance-authority": "^0.7.x", // shadcn/ui utilities
  "clsx": "^2.x", // Class merging
  "tailwind-merge": "^2.x" // Tailwind utilities
}
```

---

## 🚀 Performance Metrics

All components are optimized for:
- ✅ Fast initial load (no lazy loading overhead)
- ✅ Smooth animations (GPU-accelerated CSS)
- ✅ Minimal JavaScript (mostly rendering logic)
- ✅ Responsive design (Tailwind breakpoints)
- ✅ Accessibility (semantic HTML, ARIA labels where needed)

---

## 🔧 Extending Components

To add a new modern component:

1. Create new file: `components/modern/ModernNewSection.tsx`
2. Follow the existing pattern (glassmorphism, gradient text, blue accents)
3. Import in `app/page.tsx`
4. Add section ID for navigation

Example:
```tsx
'use client';

export function ModernNewSection() {
  return (
    <section id="new-section" className="py-32 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Content */}
      </div>
    </section>
  );
}
```

---

**Last Updated**: 2025  
**Framework**: Next.js 14+ with React 18+  
**Styling**: Tailwind CSS v4+
