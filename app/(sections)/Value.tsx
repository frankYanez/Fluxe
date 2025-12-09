'use client';

import { useGsapScrollReveal } from '@/lib/animations/useGsapScrollReveal';
import styles from './Value.module.css';

const services = [
    {
        title: 'Marketing Digital',
        description: 'Estrategias 360° que conectan tu marca con la audiencia correcta en el momento preciso',
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 13.3333L20 3.33331L5 13.3333V26.6666L20 36.6666L35 26.6666V13.3333Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 36.6666V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35 13.3333L20 20L5 13.3333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Branding & Diseño',
        description: 'Identidades visuales que comunican la esencia de tu marca y generan conexión emocional',
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5H8.33333C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333V31.6667C5 32.5507 5.35119 33.3986 5.97631 34.0237C6.60143 34.6488 7.44928 35 8.33333 35H31.6667C32.5507 35 33.3986 34.6488 34.0237 34.0237C34.6488 33.3986 35 32.5507 35 31.6667V25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32.5 3.49998C33.163 2.83694 34.0435 2.46558 34.9583 2.46558C35.8731 2.46558 36.7537 2.83694 37.4167 3.49998C38.0797 4.16302 38.4511 5.04355 38.4511 5.95831C38.4511 6.87308 38.0797 7.75361 37.4167 8.41665L20 25.8333L13.3333 27.5L15 20.8333L32.5 3.49998Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Desarrollo Web',
        description: 'Experiencias digitales rápidas, accesibles y optimizadas para conversión',
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.6667 5H8.33333C6.49238 5 5 6.49238 5 8.33333V31.6667C5 33.5076 6.49238 35 8.33333 35H31.6667C33.5076 35 35 33.5076 35 31.6667V8.33333C35 6.49238 33.5076 5 31.6667 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 15L11.6667 20L15 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 15L28.3333 20L25 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'SEO & SEM',
        description: 'Posicionamiento orgánico y campañas pagadas que maximizan tu visibilidad y ROI',
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 35L27.5 27.5M31.6667 18.3333C31.6667 25.6971 25.6971 31.6667 18.3333 31.6667C10.9695 31.6667 5 25.6971 5 18.3333C5 10.9695 10.9695 5 18.3333 5C25.6971 5 31.6667 10.9695 31.6667 18.3333Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.3333 13.3333V23.3333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.3333 18.3333H23.3333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Social Media',
        description: 'Gestión de redes sociales que construye comunidades y genera engagement auténtico',
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.3333 5H11.6667C8.35304 5 5.66667 7.68638 5.66667 11V28.3333C5.66667 31.647 8.35304 34.3333 11.6667 34.3333H28.3333C31.647 34.3333 34.3333 31.647 34.3333 28.3333V11C34.3333 7.68638 31.647 5 28.3333 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26.6667 18.9833C26.8721 20.3193 26.6518 21.6866 26.0351 22.8972C25.4183 24.1078 24.4347 25.0986 23.2279 25.7241C22.0211 26.3496 20.6555 26.5798 19.3182 26.3841C17.9809 26.1884 16.7395 25.5765 15.7609 24.6312C14.7824 23.6859 14.1158 22.4564 13.8559 21.1242C13.596 19.792 13.7554 18.4214 14.3141 17.1901C14.8729 15.9587 15.8048 14.9275 16.9783 14.2465C18.1518 13.5655 19.5085 13.2686 20.8517 13.3999C22.2221 13.5337 23.5137 14.0997 24.5396 15.0163C25.5655 15.9329 26.2751 17.1543 26.5667 18.4999" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M29.1667 10.8333H29.1833" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Analytics & Data',
        description: 'Inteligencia de datos que transforma información en decisiones estratégicas accionables',
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 5L23.3333 16.6667L16.6667 10L5 21.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26.6667 5H35V13.3333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 35H35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export default function Value() {
    const sectionRef = useGsapScrollReveal('.value-card');

    return (
        <section id="valor" className="section" ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Servicios que <span className="text-gold">impulsan</span> tu crecimiento
                    </h2>
                    <p className={styles.description}>
                        Combinamos estrategia, creatividad y tecnología para crear soluciones
                        que generan resultados medibles y sostenibles
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, idx) => (
                        <div key={idx} className={`${styles.card} value-card`}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <a href="#contacto" className="btn btn-primary">
                        Descubre cómo podemos ayudarte
                    </a>
                </div>
            </div>
        </section>
    );
}
