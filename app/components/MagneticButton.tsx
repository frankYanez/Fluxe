'use client';

import { useRef, useState, useEffect } from 'react';
import { gsap } from '@/lib/animations/gsapClient';
import { shouldReduceMotion } from '@/lib/animations/gsapClient';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    ariaLabel?: string;
}

export default function MagneticButton({
    children,
    className = '',
    href,
    onClick,
    ariaLabel,
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    useEffect(() => {
        if (!buttonRef.current || shouldReduceMotion()) return;

        const button = buttonRef.current;
        let rafId: number;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Magnetic effect - subtle pull towards cursor
            const strength = 0.3;

            rafId = requestAnimationFrame(() => {
                gsap.to(button, {
                    x: x * strength,
                    y: y * strength,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            });
        };

        const handleMouseLeave = () => {
            if (rafId) cancelAnimationFrame(rafId);

            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)',
            });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);

        if (onClick) onClick();
    };

    const commonProps = {
        ref: buttonRef as any,
        className: `${styles.magneticButton} ${className}`,
        onClick: handleClick,
        'aria-label': ariaLabel,
    };

    if (href) {
        return (
            <a {...commonProps} href={href}>
                {children}
                {ripples.map((ripple) => (
                    <span
                        key={ripple.id}
                        className={styles.ripple}
                        style={{ left: ripple.x, top: ripple.y }}
                    />
                ))}
            </a>
        );
    }

    return (
        <button {...commonProps}>
            {children}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className={styles.ripple}
                    style={{ left: ripple.x, top: ripple.y }}
                />
            ))}
        </button>
    );
}
