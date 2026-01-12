# Custom Animations Documentation

## Overview
Custom CSS animations have been added to `app/globals.css` to create dynamic, modern effects throughout the portfolio.

## Available Animations

### 1. `animate-gradient-slow`
**Duration**: 8 seconds  
**Behavior**: Infinite loop  
**Use Case**: Background gradient shifts  

```css
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

**Usage**:
```tsx
<div className="bg-gradient-to-br from-black via-blue-950 to-black animate-gradient-slow"></div>
```

**Where Used**: ModernHero background

---

### 2. `animate-blob`
**Duration**: 7 seconds  
**Behavior**: Infinite loop  
**Use Case**: Organic floating orbs/shapes  

```css
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -50px) scale(1.1); }
  50% { transform: translate(-20px, 20px) scale(0.9); }
  75% { transform: translate(50px, 50px) scale(1.05); }
}
```

**Usage**:
```tsx
<div className="w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-blob"></div>
```

**Where Used**: ModernHero animated orbs (2 orbs with different delays)

---

### 3. `animate-float`
**Duration**: 3 seconds  
**Behavior**: Infinite loop  
**Use Case**: Gentle up-and-down floating motion  

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

**Usage**:
```tsx
<div className="animate-float">Content</div>
```

**Available for**: Custom floating elements

---

## Animation Delay Utilities

### `animation-delay-2000`
Delays animation start by 2 seconds.

```css
.animation-delay-2000 { animation-delay: 2s; }
```

**Usage**:
```tsx
<div className="animate-blob animation-delay-2000"></div>
```

**Where Used**: Second orb in ModernHero (creates staggered effect)

---

### `animation-delay-4000`
Delays animation start by 4 seconds.

```css
.animation-delay-4000 { animation-delay: 4s; }
```

**Usage**: Available for additional staggered animations

---

## Stacking Animations

Animations can be combined with Tailwind's built-in animations:

```tsx
{/* Bounce (Tailwind) + Custom gradient (custom) */}
<div className="animate-bounce animate-gradient-slow"></div>

{/* Pulse (Tailwind) + Blob (custom) */}
<div className="animate-pulse animate-blob"></div>
```

## Built-in Tailwind Animations Used

- **`animate-bounce`**: Used for scroll indicator in ModernHero
- **`animate-pulse`**: Available for loading states

## Performance Considerations

✅ **GPU Accelerated**: All animations use `transform` and `opacity` (best performance)  
✅ **CSS Only**: No JavaScript overhead  
✅ **Smooth**: 60fps on modern browsers  
✅ **Battery Friendly**: Can be disabled with `prefers-reduced-motion` media query  

## Customizing Animations

### Change Animation Speed
Modify the duration in `globals.css`:

```css
.animate-blob {
  animation: blob 5s infinite; /* Changed from 7s to 5s */
}
```

### Change Animation Movement
Modify the keyframes in `globals.css`:

```css
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, -100px) scale(1.2); } /* Increased movement */
  50% { transform: translate(-50px, 50px) scale(0.8); }
  75% { transform: translate(100px, 100px) scale(1.1); }
}
```

### Add New Animation
1. Add keyframes to `globals.css`:
```css
@keyframes myAnimation {
  0% { /* start state */ }
  50% { /* middle state */ }
  100% { /* end state */ }
}
```

2. Add utility class:
```css
.animate-my-animation {
  animation: myAnimation 5s ease-in-out infinite;
}
```

3. Use in component:
```tsx
<div className="animate-my-animation"></div>
```

## Accessibility

All animations respect the `prefers-reduced-motion` preference. To add explicit support:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-gradient-slow,
  .animate-blob,
  .animate-float {
    animation: none;
  }
}
```

## Browser Support

- **Chrome/Edge**: Full support (all animations)
- **Firefox**: Full support (all animations)
- **Safari**: Full support (all animations)
- **Mobile**: Full support (optimized performance)

---

**Last Updated**: 2025  
**Framework**: Next.js 14+ with Tailwind CSS v3+
