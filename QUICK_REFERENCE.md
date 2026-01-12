# 🎯 Quick Reference Card

## 🚀 Start Development
```bash
cd "e:\Web Dev\repositories\portfolio-website"
npm run dev
# Visit: http://localhost:3000
```

---

## 📁 Project Structure
```
portfolio-website/
├── components/modern/          ← Modern components (8 files)
│   ├── ModernHero.tsx
│   ├── ModernAbout.tsx
│   ├── ModernStats.tsx
│   ├── ModernSkills.tsx
│   ├── ModernProjects.tsx
│   ├── ModernTimeline.tsx
│   ├── ModernContact.tsx
│   └── ModernFooter.tsx
├── app/
│   ├── page.tsx               ← Main portfolio (redesigned)
│   ├── globals.css            ← Custom animations
│   └── layout.tsx
├── components/ui/             ← shadcn/ui components
├── public/                    ← Static assets
├── Documentation Files (7)    ← Markdown docs
└── package.json              ← Dependencies
```

---

## 🎨 Edit Your Information

### File Locations for Customization
| Item | File | Line/Section |
|------|------|--------------|
| Contact Email | `ModernContact.tsx` | Search "villa.primesbryan" |
| LinkedIn URL | `ModernContact.tsx` | Search "linkedin.com" |
| GitHub URL | `ModernContact.tsx` | Search "github.com" |
| Projects | `ModernProjects.tsx` | Search "projects array" |
| Skills | `ModernSkills.tsx` | Search "skillCategories" |
| Timeline | `ModernTimeline.tsx` | Search "timeline array" |

### Quick Edit Locations
```
1. Email/Social
   → components/modern/ModernContact.tsx (lines ~10-35)

2. Projects
   → components/modern/ModernProjects.tsx (lines ~1-40)

3. Skills
   → components/modern/ModernSkills.tsx (lines ~1-60)

4. Timeline
   → components/modern/ModernTimeline.tsx (lines ~1-50)

5. About Values
   → components/modern/ModernAbout.tsx (lines ~1-40)
```

---

## 🎬 Customize Animations

### In `app/globals.css`:

**Change Speed** (example: hero background)
```css
/* Current: 8 seconds */
.animate-gradient-slow {
  animation: gradient 8s ease infinite;
}

/* Change to: */
.animate-gradient-slow {
  animation: gradient 6s ease infinite; /* Faster */
}
```

**Change Movement** (example: blob orbs)
```css
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  /* Adjust these values: */
  25% { transform: translate(20px, -50px) scale(1.1); }
  50% { transform: translate(-20px, 20px) scale(0.9); }
  75% { transform: translate(50px, 50px) scale(1.05); }
}
```

---

## 🎨 Change Color Scheme

### From Blue to Purple (Example)
Search & Replace in all component files:

```
blue-400    → purple-400
blue-500    → purple-500
blue-950    → purple-950
cyan-400    → purple-600
blue-600    → purple-600
```

### Color Reference
| Use | Class | Hex |
|-----|-------|-----|
| Primary | blue-400 | #60a5fa |
| Hover | blue-500 | #3b82f6 |
| Background | blue-950 | #0f172a |
| Accent | cyan-400 | #22d3ee |
| Glass | white/10 | rgba(255,255,255,0.1) |
| Dark BG | black | #000000 |
| Text | white | #ffffff |

---

## 📱 Responsive Design

### Tailwind Breakpoints
```
Default    :  Mobile (< 640px)
md:        :  Tablet (640px+)
lg:        :  Desktop (1024px+)
```

### Example: Responsive Classes
```tsx
<div className="text-6xl md:text-7xl lg:text-8xl">
  Text sizes adjust per screen
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
  1 col on mobile, 2 on tablet, 4 on desktop
</div>
```

---

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push to GitHub
2. Connect repo in Netlify
3. Auto-deploy on every push

---

## 🔧 Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check for lint errors
npm run lint

# Install new package
npm install package-name

# Remove node_modules & reinstall
rm node_modules && npm install
```

---

## 🛠️ Troubleshooting

### Issue: Port 3000 in use
```bash
# Kill Node processes
Get-Process -Name node | Stop-Process -Force
npm run dev
```

### Issue: Dependencies outdated
```bash
# Reinstall clean
rm -r node_modules
npm install
```

### Issue: Build errors
```bash
# Clear cache
rm -r .next
npm run build
```

---

## 📚 Documentation Map

| Document | Purpose | Read Time |
|----------|---------|-----------|
| DOCUMENTATION_INDEX.md | Guide to all docs | 5 min |
| QUICK_START.md | Getting started | 10 min |
| VISUAL_GUIDE.md | Design system | 10 min |
| COMPONENTS_REFERENCE.md | Component API | 15 min |
| ANIMATIONS.md | Animation system | 10 min |
| PROJECT_STATUS.md | Status report | 10 min |
| REDESIGN_SUMMARY.md | Full overview | 15 min |

---

## 🎯 Component Props

### ModernHero
```tsx
export function ModernHero() {
  // No props required
  // Uses internal scroll navigation
}
```

### ModernStats
```tsx
export function ModernStats() {
  // No props required
  // Default stats: 15+, 8+, 20+, 3+
}
```

### ModernSkills
```tsx
export function ModernSkills() {
  // No props required
  // Edit skillCategories array in component
}
```

### ModernProjects
```tsx
export function ModernProjects() {
  // No props required
  // Edit projects array in component
}
```

---

## 🎬 Animation Classes

### Available Animations
```tsx
// Gradient shift (8s)
className="animate-gradient-slow"

// Blob floating (7s)
className="animate-blob"

// Gentle floating (3s)
className="animate-float"

// Delay animations
className="animation-delay-2000"
className="animation-delay-4000"

// Combine with Tailwind
className="animate-bounce"      // Built-in bounce
className="animate-pulse"       // Built-in pulse
```

---

## 🎨 Typography Classes

### Headlines
```tsx
<h1 className="text-8xl font-bold">Extra Large (Desktop)</h1>
<h2 className="text-5xl font-bold">Large</h2>
<h3 className="text-2xl font-bold">Medium</h3>
```

### Text Colors
```tsx
<p className="text-white">Main text</p>
<p className="text-slate-300">Body text</p>
<p className="text-slate-400">Muted text</p>
<p className="text-blue-400">Accent text</p>
```

### Gradient Text
```tsx
<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
  Gradient text here
</span>
```

---

## 🔗 Section Links

Add smooth scroll to any section:
```tsx
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

scrollToSection('projects');  // Smooth scroll to #projects
scrollToSection('about');     // Smooth scroll to #about
scrollToSection('contact');   // Smooth scroll to #contact
```

---

## 📊 Performance Tips

✅ Use CSS animations (not JavaScript)  
✅ Keep animations under 7 seconds  
✅ Use `transform` and `opacity` for animations  
✅ Test on mobile browsers (Safari)  
✅ Check Lighthouse scores  
✅ Use Next.js Image component  
✅ Lazy load images with `src="/path/image.jpg"`  

---

## 🎓 Next Learning Steps

1. **Read** DOCUMENTATION_INDEX.md (5 min)
2. **Customize** your information (15 min)
3. **Test** on multiple devices (10 min)
4. **Deploy** to production (5 min)
5. **Share** your portfolio!

---

## 📞 Quick Help

| Question | Answer |
|----------|--------|
| Where's my main page? | `app/page.tsx` |
| Where are components? | `components/modern/` |
| How to change colors? | Search/replace color classes |
| How to edit content? | Open component file and edit arrays |
| How to add project? | Edit projects array in `ModernProjects.tsx` |
| How to deploy? | Run `npm run build` then deploy `.next` folder |
| Where's documentation? | Root folder, `.md` files |
| How to customize? | See QUICK_START.md |

---

## ✅ Launch Checklist

Before deploying:
- [ ] Update all contact information
- [ ] Add project images to `public/`
- [ ] Update project descriptions and links
- [ ] Update skills list
- [ ] Update timeline with your journey
- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test on desktop browser
- [ ] Check Lighthouse scores
- [ ] Verify all links work

---

**Version**: 1.0.0 | **Framework**: Next.js 16+ | **Updated**: 2025

Print this card for quick reference! 📌
