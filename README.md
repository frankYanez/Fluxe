<<<<<<< HEAD
# AURUM Labs - Futuristic Landing Page

A stunning, high-performance Next.js landing page for a digital marketing agency featuring a clean white background with sophisticated golden accents, GSAP-powered animations, and full accessibility support.

## 🚀 Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
fluxe/
├── app/
│   ├── (sections)/          # Page sections
│   │   ├── Hero.tsx         # Animated hero with letter-split effect
│   │   ├── Value.tsx        # Services showcase
│   │   ├── Portfolio.tsx    # Project gallery
│   │   ├── Testimonials.tsx # Client testimonials carousel
│   │   ├── Pricing.tsx      # Pricing plans
│   │   └── FinalCta.tsx     # Final call-to-action
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Sticky navbar with scroll effects
│   │   ├── MagneticButton.tsx # Interactive button with magnetic effect
│   │   ├── PlanCard.tsx     # Pricing card with animated border
│   │   └── Footer.tsx       # Site footer
│   ├── globals.css          # Design system & utilities
│   ├── layout.tsx           # Root layout with SEO
│   └── page.tsx             # Main page composition
├── lib/
│   ├── animations/
│   │   ├── gsapClient.ts    # GSAP initialization
│   │   ├── useGsapHero.ts   # Hero animation hook
│   │   └── useGsapScrollReveal.ts # Scroll reveal hook
│   └── a11y.ts              # Accessibility utilities
├── public/
│   └── ai/                  # Portfolio images
│       ├── case-1.webp
│       ├── case-2.webp
│       └── case-3.webp
└── tests/
    └── landing.spec.ts      # E2E tests
```

## 🎨 Design System

### Color Palette

The design uses CSS custom properties defined in `globals.css`:

- **Background**: `--bg: #ffffff` (Pure white)
- **Text**: `--ink: #0f1115` (Near black)
- **Muted**: `--muted: #6b7280` (Gray for secondary text)
- **Gold**: `--gold: #C7A046` (Primary accent color)
- **Gold Light**: `--gold-light: #D4B15F`
- **Gold Dark**: `--gold-dark: #A68838`
- **Line**: `--line: #ECEFF3` (Borders and dividers)

### Typography

Fluid typography using `clamp()` for responsive scaling:

```css
--text-5xl: clamp(3.5rem, 3rem + 2.5vw, 5rem);  /* Headings */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);  /* Body */
```

## 🎭 Animations

### GSAP Timelines

All animations are powered by GSAP with ScrollTrigger:

1. **Hero Animation** (`useGsapHero.ts`)
   - Splits text into individual letters
   - Staggered reveal with 3D rotation
   - Golden word emphasis

2. **Scroll Reveals** (`useGsapScrollReveal.ts`)
   - Fade and slide up on scroll
   - Configurable trigger points
   - Automatic cleanup

3. **Navbar Scroll Effect**
   - Height morphing on scroll
   - Blur backdrop activation
   - Active section indicator

4. **Magnetic Button**
   - Cursor-following effect
   - Ripple on click
   - Smooth elastic return

### Reduced Motion Support

All animations respect `prefers-reduced-motion`:

```typescript
if (shouldReduceMotion()) {
  // Instant reveal instead of animation
  gsap.set(element, { opacity: 1, y: 0 });
}
```

## 🖼️ Replacing AI Images

The portfolio uses placeholder AI-generated images. To replace them:

1. Add your images to `public/ai/`:
   ```
   public/ai/case-1.webp
   public/ai/case-2.webp
   public/ai/case-3.webp
   ```

2. Update the `projects` array in `app/(sections)/Portfolio.tsx`:
   ```typescript
   const projects = [
     {
       title: 'Your Project Name',
       category: 'Service Type',
       image: '/ai/your-image.webp',
       description: 'Project description',
     },
     // ...
   ];
   ```

3. Optimize images:
   - Use WebP or AVIF format
   - Recommended size: 800x600px minimum
   - Compress for web (use tools like Squoosh or ImageOptim)

## 🎨 Customizing the Golden Accent

To change the golden color throughout the site:

1. Update CSS variables in `app/globals.css`:
   ```css
   :root {
     --gold: #YOUR_COLOR;
     --gold-light: #LIGHTER_SHADE;
     --gold-dark: #DARKER_SHADE;
   }
   ```

2. The color will automatically update across:
   - Text highlights
   - Button backgrounds
   - Borders and accents
   - Hover states
   - Animated elements

## ⚙️ Modifying GSAP Timelines

### Hero Animation

Edit `lib/animations/useGsapHero.ts`:

```typescript
// Change which word gets the golden treatment
const headingRef = useGsapHero(3); // Index of word to highlight

// Modify animation parameters
tl.fromTo(
  letters,
  { opacity: 0, y: 50, rotationX: -90 },
  {
    opacity: 1,
    y: 0,
    rotationX: 0,
    duration: 0.8,      // Animation speed
    stagger: 0.03,      // Delay between letters
  }
);
```

### Scroll Reveals

Edit `lib/animations/useGsapScrollReveal.ts`:

```typescript
scrollTrigger: {
  trigger: el,
  start: 'top 85%',    // When to start (element position in viewport)
  end: 'bottom 20%',   // When to end
  toggleActions: 'play none none reverse',
}
```

## ✅ Testing

### Run E2E Tests

```bash
# Run all tests
npm run test

# Run tests in UI mode
npx playwright test --ui

# Run specific test file
npx playwright test tests/landing.spec.ts

# Run tests in headed mode (see browser)
npx playwright test --headed
```

### Test Coverage

The test suite covers:
- ✅ Hero section rendering and animations
- ✅ Navbar sticky behavior and scroll effects
- ✅ Section navigation via anchor links
- ✅ All CTAs present and clickable
- ✅ Portfolio images with alt text
- ✅ Pricing cards display
- ✅ Testimonials carousel
- ✅ Mobile menu functionality
- ✅ Reduced motion support
- ✅ Heading hierarchy (single H1)
- ✅ Footer links and social icons

## 🚀 Performance Checklist

- [x] Next.js Image optimization enabled
- [x] WebP/AVIF image formats
- [x] Lazy loading for images (except hero)
- [x] CSS custom properties for theming
- [x] Minimal JavaScript bundle (GSAP only)
- [x] No external CDN dependencies
- [x] Proper `sizes` attributes on images
- [x] Security headers configured

### Expected Lighthouse Scores

- **Performance**: 90+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## ♿ Accessibility Features

- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ ARIA labels and landmarks
- ✅ Keyboard navigation support
- ✅ Focus visible styles
- ✅ `prefers-reduced-motion` support
- ✅ Color contrast WCAG AA compliant
- ✅ Alt text on all images
- ✅ Single H1 per page
- ✅ Proper heading hierarchy
- ✅ Skip links (can be added if needed)

## 🌐 SEO Optimization

### Metadata

Configured in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data (Organization schema)

### To Customize

1. Update metadata in `app/layout.tsx`:
   ```typescript
   export const metadata: Metadata = {
     title: "Your Agency Name",
     description: "Your description",
     // ...
   };
   ```

2. Update JSON-LD schema:
   ```typescript
   {
     "@context": "https://schema.org",
     "@type": "Organization",
     name: "Your Agency",
     url: "https://yourdomain.com",
     // ...
   }
   ```

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Test production build locally
npm run build && npm start
```

## 🔧 Configuration

### Next.js Config

Image optimization and security headers are configured in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  async headers() {
    // Security headers
  },
};
```

## 📝 Content Customization

### Agency Name

Replace "AURUM Labs" throughout:
- `app/layout.tsx` - Metadata
- `app/components/Navbar.tsx` - Logo
- `app/components/Footer.tsx` - Brand section

### Services

Edit `app/(sections)/Value.tsx`:

```typescript
const services = [
  {
    title: 'Your Service',
    description: 'Service description',
    icon: <YourSVGIcon />,
  },
  // ...
];
```

### Pricing Plans

Edit `app/(sections)/Pricing.tsx`:

```typescript
const plans = [
  {
    name: 'Plan Name',
    price: '$999',
    description: 'Plan description',
    features: [
      { text: 'Feature 1', included: true },
      { text: 'Feature 2', included: false },
    ],
  },
  // ...
];
```

## 🐛 Troubleshooting

### Animations not working

1. Check browser console for GSAP errors
2. Verify `gsap` is installed: `npm list gsap`
3. Clear `.next` cache: `rm -rf .next && npm run dev`

### Images not loading

1. Verify images exist in `public/ai/`
2. Check file extensions match (`.webp`)
3. Restart dev server

### TypeScript errors

```bash
# Regenerate types
npm run build
```

## 📄 License

This project is created for AURUM Labs. Customize as needed for your use case.

## 🤝 Support

For questions or issues:
1. Check this README
2. Review the implementation plan artifact
3. Inspect component code and comments

---

**Built with**: Next.js 16, React 19, GSAP, TypeScript, Playwright
=======
# Fluxe
>>>>>>> main
