'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './GlobalReach.module.css';

// Importar Globe dinámicamente para evitar problemas de SSR
const World = dynamic(() => import('../components/ui/globe').then((m) => m.World), {
    ssr: false,
});

export default function GlobalReach() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#1d072e",
        showAtmosphere: true,
        atmosphereColor: "#C7A046",
        atmosphereAltitude: 0.1,
        emissive: "#C7A046",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(199, 160, 70, 0.7)",
        ambientLight: "#C7A046",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#C7A046",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    const sampleArcs = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: "#C7A046",
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: "#D4B15F",
        },
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.5,
            color: "#C7A046",
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: "#D4B15F",
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: "#C7A046",
        },
        {
            order: 2,
            startLat: -15.785493,
            startLng: -47.909029,
            endLat: 36.162809,
            endLng: -115.119411,
            arcAlt: 0.3,
            color: "#D4B15F",
        },
        {
            order: 3,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: "#C7A046",
        },
        {
            order: 3,
            startLat: 21.3099,
            startLng: -157.8581,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: "#D4B15F",
        },
        {
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: "#C7A046",
        },
        {
            order: 4,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.5,
            color: "#D4B15F",
        },
        {
            order: 4,
            startLat: -34.6037,
            startLng: -58.3816,
            endLat: 28.6139,
            endLng: 77.209,
            arcAlt: 0.7,
            color: "#C7A046",
        },
        {
            order: 4,
            startLat: -33.9249,
            startLng: 18.4241,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.5,
            color: "#D4B15F",
        },
    ];

    return (
        <section id="global" className={styles.globalReach}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Texto a la izquierda */}
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className={styles.badge}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className={styles.badgeIcon}>🌍</span>
                            Alcance Global
                        </motion.div>

                        <h2 className={styles.title}>
                            Conectamos <span className="text-gold">Marcas</span> con el{' '}
                            <span className="text-gold">Mundo</span>
                        </h2>

                        <p className={styles.description}>
                            Nuestra red global de partners y clientes nos permite crear
                            campañas de marketing digital que trascienden fronteras.
                            Desde startups locales hasta corporaciones multinacionales,
                            ayudamos a marcas a alcanzar su máximo potencial en cualquier mercado.
                        </p>

                        <div className={styles.stats}>
                            <motion.div
                                className={styles.statItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className={styles.statValue}>50+</div>
                                <div className={styles.statLabel}>Países</div>
                            </motion.div>
                            <motion.div
                                className={styles.statItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className={styles.statValue}>1000+</div>
                                <div className={styles.statLabel}>Clientes</div>
                            </motion.div>
                            <motion.div
                                className={styles.statItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className={styles.statValue}>24/7</div>
                                <div className={styles.statLabel}>Soporte</div>
                            </motion.div>
                        </div>

                        <motion.div
                            className={styles.features}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                        >
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>✓</span>
                                Estrategias multicanal
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>✓</span>
                                Localización cultural
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>✓</span>
                                Análisis de mercados globales
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Globe a la derecha */}
                    <motion.div
                        className={styles.globeContainer}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <div className={styles.globeWrapper}>
                            <World data={sampleArcs} globeConfig={globeConfig} />
                        </div>
                        <div className={styles.globeGlow}></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
