import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from './gsapClient';
import { shouldReduceMotion } from './gsapClient';

interface ScrollRevealOptions {
    trigger?: string;
    start?: string;
    end?: string;
    scrub?: boolean;
    markers?: boolean;
}

export const useGsapScrollReveal = (
    selector: string,
    options: ScrollRevealOptions = {}
) => {
    const scopeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scopeRef.current) return;

        const reduced = shouldReduceMotion();
        const elements = scopeRef.current.querySelectorAll(selector);

        if (elements.length === 0) return;

        const animations: gsap.core.Tween[] = [];

        elements.forEach((el) => {
            if (reduced) {
                // Instant reveal for reduced motion
                gsap.set(el, { opacity: 1, y: 0 });
            } else {
                // Animated reveal
                const anim = gsap.fromTo(
                    el,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: options.start || 'top 85%',
                            end: options.end || 'bottom 20%',
                            toggleActions: 'play none none reverse',
                            markers: options.markers || false,
                        },
                    }
                );
                animations.push(anim);
            }
        });

        return () => {
            animations.forEach((anim) => anim.kill());
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, [selector, options.start, options.end, options.markers]);

    return scopeRef;
};
