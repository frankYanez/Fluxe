'use client';

import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import styles from './FinalCta.module.css';

const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            type: 'spring',
            stiffness: 100,
        },
    }),
};

export default function FinalCta() {
    const benefits = [
        'Sin compromiso',
        'Análisis personalizado',
        'Propuesta a medida',
    ];

    return (
        <section id="contacto" className={`section ${styles.finalCta}`}>
            <div className="container">
                <div className={styles.content}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                    >
                        ¿Listo para transformar tu <span className="text-gold">presencia digital</span>?
                    </motion.h2>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Agenda una consultoría estratégica gratuita y descubre cómo podemos
                        ayudarte a alcanzar tus objetivos de negocio
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                            type: 'spring',
                            stiffness: 200,
                        }}
                    >
                        <MagneticButton className={`btn btn-primary ${styles.ctaButton}`} href="#contacto">
                            Reservar Estrategia Gratuita
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </MagneticButton>
                    </motion.div>

                    <div className={styles.benefits}>
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                className={styles.benefit}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-100px' }}
                                variants={benefitVariants as any}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { type: 'spring', stiffness: 400, damping: 10 },
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        d="M20 6L9 17L4 12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                                    />
                                </svg>
                                <span>{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
