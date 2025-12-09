import MagneticButton from '../components/MagneticButton';
import styles from './FinalCta.module.css';

export default function FinalCta() {
    return (
        <section id="contacto" className={`section ${styles.finalCta}`}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        ¿Listo para transformar tu <span className="text-gold">presencia digital</span>?
                    </h2>
                    <p className={styles.description}>
                        Agenda una consultoría estratégica gratuita y descubre cómo podemos
                        ayudarte a alcanzar tus objetivos de negocio
                    </p>

                    <MagneticButton className={`btn btn-primary ${styles.ctaButton}`} href="#contacto">
                        Reservar Estrategia Gratuita
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </MagneticButton>

                    <div className={styles.benefits}>
                        <div className={styles.benefit}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Sin compromiso</span>
                        </div>
                        <div className={styles.benefit}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Análisis personalizado</span>
                        </div>
                        <div className={styles.benefit}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Propuesta a medida</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
