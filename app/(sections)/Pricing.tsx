'use client';

import { motion } from 'framer-motion';
import PlanCard from '../components/PlanCard';
import { useGsapScrollReveal } from '@/lib/animations/useGsapScrollReveal';
import styles from './Pricing.module.css';

const plans = [
    {
        name: 'Starter',
        price: '$999',
        description: 'Perfecto para startups y pequeños negocios que comienzan su viaje digital',
        features: [
            { text: 'Estrategia digital básica', included: true },
            { text: 'Gestión de 2 redes sociales', included: true },
            { text: 'Reporte mensual', included: true },
            { text: 'SEO básico', included: true },
            { text: 'Campañas SEM', included: false },
            { text: 'Soporte prioritario', included: false },
        ],
        ctaText: 'Comenzar',
    },
    {
        name: 'Pro',
        price: '$2,499',
        description: 'La opción más popular para empresas en crecimiento que buscan resultados',
        features: [
            { text: 'Estrategia digital completa', included: true },
            { text: 'Gestión de 4 redes sociales', included: true },
            { text: 'Reportes semanales', included: true },
            { text: 'SEO avanzado', included: true },
            { text: 'Campañas SEM optimizadas', included: true },
            { text: 'Soporte prioritario 24/7', included: true },
        ],
        featured: true,
        ctaText: 'Comenzar Ahora',
    },
    {
        name: 'Elite',
        price: '$4,999',
        description: 'Solución enterprise para marcas que exigen excelencia y resultados máximos',
        features: [
            { text: 'Estrategia omnicanal 360°', included: true },
            { text: 'Gestión ilimitada de redes', included: true },
            { text: 'Reportes en tiempo real', included: true },
            { text: 'SEO enterprise', included: true },
            { text: 'Campañas multi-plataforma', included: true },
            { text: 'Account Manager dedicado', included: true },
        ],
        ctaText: 'Contactar',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 12,
        },
    },
};

export default function Pricing() {
    const sectionRef = useGsapScrollReveal('.pricing-card');

    return (
        <section id="planes" className="section" ref={sectionRef}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>
                        Planes diseñados para <span className="text-gold">tu crecimiento</span>
                    </h2>
                    <p className={styles.description}>
                        Elige el plan que mejor se adapte a tus objetivos. Todos incluyen nuestra garantía de satisfacción.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            className="pricing-card"
                            variants={cardVariants as any}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                transition: { type: 'spring', stiffness: 300, damping: 20 },
                            }}
                        >
                            <PlanCard {...plan} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.note}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <p>
                        ¿Necesitas algo personalizado? <a href="#contacto" className="text-gold">Contáctanos</a> para crear un plan a medida.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
