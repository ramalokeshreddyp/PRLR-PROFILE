# 🎯 Quick Reference Guide

## 🚀 Running the Portfolio

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `H` | Navigate to Home |
| `S` | Navigate to Skills |
| `P` | Navigate to Projects |
| `C` | Navigate to Contact |
| `Esc` | Scroll to Top |
| `?` | Toggle Shortcuts Help |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── portfolio/          # Main portfolio components
│   │   ├── Hero.tsx
│   │   ├── Terminal.tsx
│   │   ├── SkillsCode.tsx
│   │   ├── Projects.tsx
│   │   ├── Internships.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollProgress.tsx    # NEW
│   │   ├── BackToTop.tsx         # NEW
│   │   ├── KeyboardShortcuts.tsx # NEW
│   │   └── PageLoader.tsx        # NEW
│   └── ui/                 # Shadcn UI components
├── hooks/
│   ├── use-toast.ts
│   └── use-accessibility.ts      # NEW
├── lib/
│   ├── utils.ts
│   ├── constants.ts              # NEW
│   ├── helpers.ts                # NEW
│   └── performance.tsx           # NEW
├── pages/
│   ├── Index.tsx
│   ├── ResumePage.tsx
│   └── NotFound.tsx
└── providers/
    └── ThemeProvider.tsx
```

---

## 🎨 Using New Utilities

### Constants
```typescript
import { PERSONAL_INFO, SOCIAL_LINKS, PROJECT_LINKS } from '@/lib/constants';

console.log(PERSONAL_INFO.name); // "Rama Lokesh Reddy Penumallu"
```

### Helpers
```typescript
import { scrollToSection, copyToClipboard, debounce } from '@/lib/helpers';

// Scroll to section with offset
scrollToSection('projects', 100);

// Copy to clipboard
await copyToClipboard('Hello World');

// Debounce function
const debouncedSearch = debounce((query) => search(query), 300);
```

### Performance
```typescript
import { getWebVitals, prefetchLinks } from '@/lib/performance';

// Get performance metrics
const metrics = await getWebVitals();
console.log(metrics);

// Prefetch important routes
prefetchLinks(['/resume', '/projects']);
```

### Accessibility Hooks
```typescript
import { useKeyboardNavigation, useScreenReaderAnnouncement } from '@/hooks/use-accessibility';

// Enable keyboard navigation
useKeyboardNavigation();

// Announce to screen readers
const announce = useScreenReaderAnnouncement();
announce('Form submitted successfully!');
```

---

## 🎨 CSS Utility Classes

```tsx
// Animations
<div className="fade-in">...</div>
<div className="slide-up">...</div>
<div className="floating">...</div>

// Effects
<div className="shimmer">...</div>
<div className="pulse-glow">...</div>
<div className="gradient-text-animated">...</div>

// Transitions
<button className="transition-smooth hover-scale">...</button>
<button className="transition-bounce">...</button>

// Backdrop Blur
<div className="backdrop-blur-strong">...</div>
<div className="backdrop-blur-medium">...</div>
<div className="backdrop-blur-light">...</div>
```

---

## 📝 Customization Quick Guide

### Update Personal Info
Edit `src/lib/constants.ts`:
```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  email: "your@email.com",
  // ... update other fields
};
```

### Update Colors
Edit `src/index.css` and `tailwind.config.ts`:
```css
:root {
  --primary: 190 95% 50%;    /* Change this */
  --secondary: 280 100% 70%; /* And this */
}
```

### Update SEO
Edit `index.html`:
```html
<title>Your Title</title>
<meta name="description" content="Your description">
```

### Add New Section
1. Create component in `src/components/portfolio/`
2. Import in `src/pages/Index.tsx`
3. Add to navigation in `Hero.tsx`

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

---

## 📊 Performance Tips

1. **Images**: Use WebP format for better compression
2. **Fonts**: Already optimized with preconnect hints
3. **Code Splitting**: Lazy load heavy components if needed
4. **Analytics**: Check Web Vitals in dev console

---

## ✅ Pre-Deployment Checklist

- [ ] Update meta tags in `index.html`
- [ ] Update personal info in `src/lib/constants.ts`
- [ ] Test all links (projects, social media, resume)
- [ ] Test on mobile devices
- [ ] Test keyboard navigation
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Check performance in Lighthouse
- [ ] Verify SEO with meta tag checker

---

## 🔗 Important Links to Update

Before deploying, update these links:

### In `src/lib/constants.ts`:
- Social media URLs
- Project repository URLs
- Resume Google Drive link

### In `index.html`:
- Canonical URL
- Open Graph image URL
- Favicon

### In `src/components/portfolio/`:
- Project live demo URLs
- Certification URLs
- Contact email addresses

---

## 🎊 Features Overview

### User Interaction
- ✅ Smooth scroll navigation
- ✅ Mobile-responsive menu
- ✅ Keyboard shortcuts
- ✅ Back to top button
- ✅ Interactive hover effects

### Visual Feedback
- ✅ Scroll progress indicator
- ✅ Loading screen
- ✅ Toast notifications
- ✅ Animated transitions
- ✅ Hover states

### Performance
- ✅ Optimized images
- ✅ Code splitting
- ✅ Resource prefetching
- ✅ Web Vitals tracking

### Accessibility
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ ARIA labels
- ✅ Reduced motion support

---

## 💡 Pro Tips

1. **Keyboard Shortcuts**: Press `?` to see all shortcuts
2. **Performance**: Check browser console for Web Vitals
3. **Development**: Use React DevTools for debugging
4. **Mobile**: Test with Chrome DevTools device mode
5. **Accessibility**: Test with screen reader (NVDA/JAWS)

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/)
- [Shadcn UI Components](https://ui.shadcn.com/)

---

**Need help? All code is well-commented and documented!** 🚀
