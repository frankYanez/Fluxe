// GSAP Client-side utilities (SSR-safe)
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins only on client
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// Helper to check if animations should be reduced
export const shouldReduceMotion = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Default GSAP config for accessibility
export const getGsapDefaults = () => {
    const reduced = shouldReduceMotion();
    return {
        duration: reduced ? 0.01 : 0.6,
        ease: reduced ? 'none' : 'power2.out',
    };
};
