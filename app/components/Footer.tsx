'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className={styles.footer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={footerVariants}
        >
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <motion.div className={styles.brand} variants={itemVariants}>
                        <div className={styles.logo}>
                            <span className={styles.logoText}>FLUXE</span>
                            <span className={styles.logoAccent}>Labs</span>
                        </div>
                        <p className={styles.tagline}>
                            Transformamos marcas en experiencias digitales inolvidables
                        </p>
                        <div className={styles.social}>
                            {[
                                { label: 'LinkedIn', path: 'M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z M6 9H2V21H6V9Z M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z' },
                                { label: 'Twitter', path: 'M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.28445C14.0247 3.61166 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z' },
                                { label: 'Instagram', path: 'M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z' },
                            ].map((social, i) => (
                                <motion.a
                                    key={social.label}
                                    href="#"
                                    aria-label={social.label}
                                    className={styles.socialLink}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={social.path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links */}
                    <motion.div className={styles.links} variants={itemVariants}>
                        <h4 className={styles.linksTitle}>Servicios</h4>
                        <ul className={styles.linksList}>
                            <li><a href="#valor">Marketing Digital</a></li>
                            <li><a href="#valor">Branding</a></li>
                            <li><a href="#valor">Desarrollo Web</a></li>
                            <li><a href="#valor">SEO & SEM</a></li>
                        </ul>
                    </motion.div>

                    <motion.div className={styles.links} variants={itemVariants}>
                        <h4 className={styles.linksTitle}>Empresa</h4>
                        <ul className={styles.linksList}>
                            <li><a href="#portafolio">Portafolio</a></li>
                            <li><a href="#testimonios">Testimonios</a></li>
                            <li><a href="#planes">Planes</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </motion.div>

                    <motion.div className={styles.links} variants={itemVariants}>
                        <h4 className={styles.linksTitle}>Legal</h4>
                        <ul className={styles.linksList}>
                            <li><a href="#">Privacidad</a></li>
                            <li><a href="#">Términos</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.bottom}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className={styles.copyright}>
                        © {currentYear} FLUXE Labs. Todos los derechos reservados.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
}
