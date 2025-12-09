'use client';

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

export default function Pricing() {
    const sectionRef = useGsapScrollReveal('.pricing-card');

    return (
        <section id="planes" className="section" ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Planes diseñados para <span className="text-gold">tu crecimiento</span>
                    </h2>
                    <p className={styles.description}>
                        Elige el plan que mejor se adapte a tus objetivos. Todos incluyen nuestra garantía de satisfacción.
                    </p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, idx) => (
                        <div key={idx} className="pricing-card">
                            <PlanCard {...plan} />
                        </div>
                    ))}
                </div>

                <div className={styles.note}>
                    <p>
                        ¿Necesitas algo personalizado? <a href="#contacto" className="text-gold">Contáctanos</a> para crear un plan a medida.
                    </p>
                </div>
            </div>
        </section>
    );
}
