'use client';

import { useGsapHero } from '@/lib/animations/useGsapHero';
import MagneticButton from '../components/MagneticButton';
import styles from './Hero.module.css';

export default function Hero() {
    // Animate heading with "digital" (word index 3) as the golden word
    const headingRef = useGsapHero(3);

    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.background}>
                <svg className={styles.lines} viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--line)" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="var(--line)" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    <path d="M0,400 Q300,200 600,400 T1200,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                    <path d="M0,300 Q400,100 800,300 T1200,300" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" opacity="0.6" />
                    <path d="M0,500 Q200,300 400,500 T800,500" stroke="url(#lineGradient)" strokeWidth="1" fill="none" opacity="0.4" />
                    <circle cx="200" cy="200" r="3" fill="var(--gold)" opacity="0.4" />
                    <circle cx="600" cy="400" r="4" fill="var(--gold)" opacity="0.3" />
                    <circle cx="1000" cy="300" r="2" fill="var(--gold)" opacity="0.5" />
                </svg>
            </div>

            <div className={`container ${styles.content}`}>
                <h1 ref={headingRef} className={styles.heading}>
                    Transformamos marcas en experiencias digital memorables
                </h1>

                <p className={styles.subtitle}>
                    Estrategias de marketing que combinan creatividad, datos y tecnología
                    para impulsar el crecimiento de tu negocio en el mundo digital
                </p>

                <div className={styles.ctas}>
                    <MagneticButton className="btn btn-primary" href="#contacto">
                        Reservar Estrategia
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </MagneticButton>

                    <a href="#portafolio" className="btn btn-secondary">
                        Ver Portafolio
                    </a>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>250+</div>
                        <div className={styles.statLabel}>Proyectos</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>98%</div>
                        <div className={styles.statLabel}>Satisfacción</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>5x</div>
                        <div className={styles.statLabel}>ROI Promedio</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
