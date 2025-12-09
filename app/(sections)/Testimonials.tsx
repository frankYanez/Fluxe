'use client';

import { useState, useEffect } from 'react';
import { gsap } from '@/lib/animations/gsapClient';
import { shouldReduceMotion } from '@/lib/animations/gsapClient';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: 'María González',
        role: 'CEO, TechStart',
        content: 'AURUM Labs transformó completamente nuestra presencia digital. En 6 meses aumentamos nuestras conversiones en un 340% y el ROI superó todas nuestras expectativas.',
        rating: 5,
    },
    {
        name: 'Carlos Mendoza',
        role: 'Director Marketing, LuxBrand',
        content: 'El equipo de AURUM no solo entregó resultados excepcionales, sino que se convirtieron en verdaderos partners estratégicos. Su enfoque basado en datos es impresionante.',
        rating: 5,
    },
    {
        name: 'Ana Rodríguez',
        role: 'Founder, EcoShop',
        content: 'Profesionalismo, creatividad y resultados. AURUM Labs nos ayudó a posicionar nuestra marca en un mercado altamente competitivo. Totalmente recomendados.',
        rating: 5,
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (shouldReduceMotion()) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (shouldReduceMotion()) return;

        const testimonial = document.querySelector(`.${styles.activeTestimonial}`);
        if (!testimonial) return;

        gsap.fromTo(
            testimonial,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
    }, [activeIndex]);

    return (
        <section id="testimonios" className={`section ${styles.testimonials}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Lo que dicen <span className="text-gold">nuestros clientes</span>
                    </h2>
                </div>

                <div className={styles.carousel}>
                    <div className={`${styles.testimonial} ${styles.activeTestimonial}`}>
                        <div className={styles.stars}>
                            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            ))}
                        </div>

                        <blockquote className={styles.quote}>
                            "{testimonials[activeIndex].content}"
                        </blockquote>

                        <div className={styles.author}>
                            <div className={styles.authorName}>{testimonials[activeIndex].name}</div>
                            <div className={styles.authorRole}>{testimonials[activeIndex].role}</div>
                        </div>
                    </div>

                    <div className={styles.dots}>
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                                onClick={() => setActiveIndex(idx)}
                                aria-label={`Ver testimonio ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
