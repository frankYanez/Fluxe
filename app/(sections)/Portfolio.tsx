'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useGsapScrollReveal } from '@/lib/animations/useGsapScrollReveal';
import styles from './Portfolio.module.css';

const projects = [
    {
        title: 'E-commerce Revolution',
        category: 'Desarrollo Web',
        image: '/ai/case-1.webp',
        description: 'Plataforma de comercio electrónico con aumento del 340% en conversiones',
    },
    {
        title: 'Brand Identity',
        category: 'Branding',
        image: '/ai/case-2.webp',
        description: 'Rediseño completo de identidad visual para marca de lujo',
    },
    {
        title: 'Social Campaign',
        category: 'Social Media',
        image: '/ai/case-3.webp',
        description: 'Campaña viral que alcanzó 5M+ de impresiones orgánicas',
    },
    {
        title: 'SEO Strategy',
        category: 'SEO',
        image: '/ai/case-1.webp',
        description: 'Estrategia SEO que triplicó el tráfico orgánico en 6 meses',
    },
    {
        title: 'App Design',
        category: 'UX/UI',
        image: '/ai/case-2.webp',
        description: 'Diseño de aplicación móvil con 4.8★ en stores',
    },
    {
        title: 'Digital Marketing',
        category: 'Marketing',
        image: '/ai/case-3.webp',
        description: 'Campaña integrada con ROI de 580%',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function Portfolio() {
    const sectionRef = useGsapScrollReveal('.portfolio-item');

    return (
        <section id="portafolio" className="section" ref={sectionRef}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>
                        Proyectos que <span className="text-gold">transforman</span> negocios
                    </h2>
                    <p className={styles.description}>
                        Casos de éxito que demuestran nuestro compromiso con la excelencia y los resultados
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className={`${styles.item} portfolio-item`}
                            variants={itemVariants as any}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                transition: { type: 'spring', stiffness: 300, damping: 20 },
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading={idx < 3 ? 'eager' : 'lazy'}
                                />
                                <motion.div
                                    className={styles.overlay}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className={styles.category}>{project.category}</span>
                                </motion.div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
