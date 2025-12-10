'use client';

import { motion } from 'framer-motion';
import styles from './Features.module.css';

export default function Features() {
    return (
        <section id="features" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: 'var(--text-4xl)', marginBottom: '1rem' }}>
                        Nuestras <span className="text-gold">Características</span>
                    </h2>
                    <p style={{ color: 'var(--muted)', fontSize: 'var(--text-lg)' }}>
                        Descubre lo que nos hace diferentes
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    justifyItems: 'center'
                }}>
                    <div className="dotted-glow-background" />
                    <div className="dotted-glow-background" />
                    <div className="dotted-glow-background" />
                </div>
            </div>
        </section>
    );
}
