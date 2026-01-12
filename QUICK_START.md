# Modern Portfolio - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
cd "e:\Web Dev\repositories\portfolio-website"
npm install
npm run dev
```

The portfolio will be available at: **http://localhost:3000**

---

## 📂 Project Structure

```
portfolio-website/
├── app/
│   ├── page.tsx              # Main portfolio page (redesigned)
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles + custom animations
│   └── skeleton-demo/        # Demo page for skeleton loaders
├── components/
│   ├── modern/               # ✨ NEW: Modern component library
│   │   ├── ModernHero.tsx
│   │   ├── ModernAbout.tsx
│   │   ├── ModernStats.tsx
│   │   ├── ModernSkills.tsx
│   │   ├── ModernProjects.tsx
│   │   ├── ModernTimeline.tsx
│   │   ├── ModernContact.tsx
│   │   └── ModernFooter.tsx
│   ├── sections/             # Original sections (legacy)
│   └── ui/                   # shadcn/ui components
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
└── README.md                 # Original project readme
```

---

## 🎨 Customization Guide

### Update Personal Information

**Email & Contact Links** (`ModernContact.tsx`)
```tsx
const contactLinks = [
  {
    href: 'mailto:your-email@example.com',
    value: 'your-email@example.com',
    // ...
  },
  // ...
];
```

**Projects** (`ModernProjects.tsx`)
```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Description',
    image: '/images/project.jpg',
    tags: ['React', 'Node.js'],
    liveUrl: 'https://...',
    githubUrl: 'https://...',
  },
  // ...
];
```

**Skills** (`ModernSkills.tsx`)
```tsx
const skillCategories = {
  frontend: [
    { name: 'React', icon: <Code className="w-6 h-6" /> },
    // ...
  ],
  // ...
};
```

**Timeline** (`ModernTimeline.tsx`)
```tsx
const timeline = [
  {
    year: '2024',
    title: 'Your Achievement',
    description: 'Description of your milestone',
    icon: <Award className="w-6 h-6" />,
  },
  // ...
];
```

### Change Color Scheme

All components use Tailwind classes. Search for color classes:
- `blue-400`, `blue-500`, `blue-950` → Replace with your primary color
- `cyan-400` → Replace with your accent color

Example: Change from blue to purple
```bash
# In all files, replace:
blue-400 → purple-400
blue-500 → purple-500
cyan-400 → purple-400
```

### Modify Animations

Edit `app/globals.css` to adjust:
- Animation speed (duration in keyframes)
- Animation intensity (translate/scale values)
- Add new animations

See `ANIMATIONS.md` for detailed documentation.

---

## 🔧 Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint

# Format code (if configured)
npm run format
```

---

## 📱 Responsive Breakpoints

All modern components use Tailwind's responsive breakpoints:
- `md:` (768px) - Tablet
- `lg:` (1024px) - Large screens
- Default: Mobile-first (< 768px)

Test responsiveness:
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test different screen sizes

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to other platforms
1. Build: `npm run build`
2. Deploy the `.next` folder and `public` folder

---

## 📊 Performance Tips

✅ Images are lazy-loaded  
✅ Animations use CSS (GPU-accelerated)  
✅ No unnecessary re-renders  
✅ Modern compression with Turbopack  

### PageSpeed Score
Expected scores (lighthouse):
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process (Windows PowerShell)
Get-Process -Name node | Stop-Process -Force

# Then try again
npm run dev
```

### Module not found errors
```bash
# Reinstall dependencies
rm node_modules
npm install
```

### Build fails
```bash
# Clear Next.js cache
rm -r .next
npm run build
```

---

## 📚 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **lucide-react Icons**: https://lucide.dev
- **shadcn/ui**: https://ui.shadcn.com

---

## 🎯 Next Steps

1. ✅ Update personal information in all components
2. ✅ Add your project images to `public/images/`
3. ✅ Update project links (GitHub, live demos)
4. ✅ Test responsive design on all devices
5. ✅ Deploy to Vercel or your hosting provider

---

**Version**: 1.0.0 Modern Redesign  
**Last Updated**: 2025  
**Framework**: Next.js 14+ with Tailwind CSS

For detailed animation documentation, see `ANIMATIONS.md`  
For redesign details, see `REDESIGN_SUMMARY.md`
