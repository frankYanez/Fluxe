'use client';

import { motion, AnimatePresence } from 'framer-motion';
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

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
    }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function Testimonials() {
    const [[page, direction], setPage] = useState([0, 0]);
    const activeIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;

    useEffect(() => {
        if (shouldReduceMotion()) return;

        const interval = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(interval);
    }, [page]);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <section id="testimonios" className={`section ${styles.testimonials}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>
                        Lo que dicen <span className="text-gold">nuestros clientes</span>
                    </h2>
                </motion.div>

                <div className={styles.carousel}>
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={page}
                            className={`${styles.testimonial} ${styles.activeTestimonial}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: 'spring', stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.2 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                        >
                            <motion.div
                                className={styles.stars}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            >
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <motion.svg
                                        key={i}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        initial={{ opacity: 0, rotate: -180 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                                    >
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </motion.svg>
                                ))}
                            </motion.div>

                            <blockquote className={styles.quote}>
                                "{testimonials[activeIndex].content}"
                            </blockquote>

                            <div className={styles.author}>
                                <div className={styles.authorName}>{testimonials[activeIndex].name}</div>
                                <div className={styles.authorRole}>{testimonials[activeIndex].role}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className={styles.dots}>
                        {testimonials.map((_, idx) => (
                            <motion.button
                                key={idx}
                                className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                                onClick={() => {
                                    const newDirection = idx > activeIndex ? 1 : -1;
                                    setPage([idx, newDirection]);
                                }}
                                aria-label={`Ver testimonio ${idx + 1}`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
