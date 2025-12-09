import { useEffect, useRef } from 'react';
import { gsap } from './gsapClient';
import { shouldReduceMotion } from './gsapClient';

export const useGsapHero = (goldWordIndex: number = 1) => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (!headingRef.current) return;

        const reduced = shouldReduceMotion();
        const heading = headingRef.current;

        // Split text into words, then letters
        const text = heading.textContent || '';
        const words = text.split(' ');

        heading.innerHTML = words
            .map((word, wordIdx) => {
                const letters = word.split('').map((char) => {
                    return `<span class="letter" style="display: inline-block;">${char}</span>`;
                }).join('');

                const isGoldWord = wordIdx === goldWordIndex;
                return `<span class="word ${isGoldWord ? 'gold-word' : ''}" style="display: inline-block; white-space: nowrap;">${letters}</span>`;
            })
            .join(' ');

        const letters = heading.querySelectorAll('.letter');
        const goldWord = heading.querySelector('.gold-word');

        if (reduced) {
            // Instant reveal for reduced motion
            gsap.set(letters, { opacity: 1, y: 0 });
            if (goldWord) {
                goldWord.classList.add('text-gold');
            }
        } else {
            // Animated reveal
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                letters,
                { opacity: 0, y: 50, rotationX: -90 },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 0.8,
                    stagger: 0.03,
                }
            );

            // Emphasize gold word
            if (goldWord) {
                tl.to(
                    goldWord,
                    {
                        color: 'var(--gold)',
                        scale: 1.05,
                        duration: 0.4,
                        ease: 'back.out(1.7)',
                    },
                    '-=0.3'
                );
            }

            timelineRef.current = tl;
        }

        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, [goldWordIndex]);

    return headingRef;
};
