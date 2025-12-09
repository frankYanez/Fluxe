'use client';

import Image from 'next/image';
import { useGsapScrollReveal } from '@/lib/animations/useGsapScrollReveal';
import styles from './Portfolio.module.css';

const projects = [
    {
        title: 'E-Commerce Premium',
        category: 'Desarrollo Web & SEO',
        image: '/ai/case-1.webp',
        description: 'Plataforma de comercio electrónico con aumento del 340% en conversiones',
    },
    {
        title: 'Campaña Social Luxury',
        category: 'Social Media & Branding',
        image: '/ai/case-2.webp',
        description: 'Estrategia de redes sociales que generó 2M+ de impresiones',
    },
    {
        title: 'App Fintech',
        category: 'UX/UI & Marketing Digital',
        image: '/ai/case-3.webp',
        description: 'Aplicación móvil con 50K+ descargas en el primer mes',
    },
    {
        title: 'Rebranding Corporativo',
        category: 'Branding & Estrategia',
        image: '/ai/case-1.webp',
        description: 'Nueva identidad visual que aumentó el reconocimiento de marca en 85%',
    },
    {
        title: 'Campaña SEM',
        category: 'Google Ads & Analytics',
        image: '/ai/case-2.webp',
        description: 'Optimización de campañas con ROI de 8:1',
    },
    {
        title: 'Sitio Corporativo',
        category: 'Desarrollo Web & SEO',
        image: '/ai/case-3.webp',
        description: 'Website institucional con score de 98/100 en Lighthouse',
    },
];

export default function Portfolio() {
    const sectionRef = useGsapScrollReveal('.portfolio-item');

    return (
        <section id="portafolio" className="section" ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Proyectos que <span className="text-gold">transforman</span> negocios
                    </h2>
                    <p className={styles.description}>
                        Casos de éxito que demuestran nuestro compromiso con la excelencia y los resultados
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, idx) => (
                        <div key={idx} className={`${styles.item} portfolio-item`}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.category}>{project.category}</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
