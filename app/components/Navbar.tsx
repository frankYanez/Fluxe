'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap, ScrollTrigger } from '@/lib/animations/gsapClient';
import { shouldReduceMotion } from '@/lib/animations/gsapClient';
import styles from './Navbar.module.css';

const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#valor', label: 'Servicios' },
    { href: '#portafolio', label: 'Portafolio' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#planes', label: 'Planes' },
];

const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.3,
        },
    }),
};

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [activeSection, setActiveSection] = useState('inicio');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (shouldReduceMotion()) return;

        const sections = navLinks.map(link => link.href.substring(1));

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (!element) return;

            ScrollTrigger.create({
                trigger: element,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => setActiveSection(sectionId),
                onEnterBack: () => setActiveSection(sectionId),
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <motion.nav
            ref={navRef}
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            role="navigation"
            aria-label="Navegación principal"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <div className={styles.container}>
                <motion.a
                    href="#inicio"
                    className={styles.logo}
                    onClick={(e) => handleLinkClick(e, '#inicio')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className={styles.logoText}>FLUXE</span>
                    <span className={styles.logoAccent}>Labs</span>
                </motion.a>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link, i) => (
                        <motion.li
                            key={link.href}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={linkVariants}
                        >
                            <motion.a
                                href={link.href}
                                className={`${styles.navLink} ${activeSection === link.href.substring(1) ? styles.active : ''}`}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                {link.label}
                            </motion.a>
                        </motion.li>
                    ))}
                </ul>

                <motion.a
                    href="#contacto"
                    className={`btn btn-primary ${styles.ctaBtn}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contactar
                </motion.a>

                {/* Mobile Menu Button */}
                <motion.button
                    className={styles.mobileMenuBtn}
                    onClick={toggleMobileMenu}
                    aria-label="Menú de navegación"
                    aria-expanded={mobileMenuOpen}
                    whileTap={{ scale: 0.9 }}
                >
                    <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}></span>
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    className={styles.mobileMenu}
                    role="dialog"
                    aria-modal="true"
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <ul className={styles.mobileLinks}>
                        {navLinks.map((link, i) => (
                            <motion.li
                                key={link.href}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <a
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                        <motion.li
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: navLinks.length * 0.1 }}
                        >
                            <a href="#contacto" className={`btn btn-primary ${styles.mobileCta}`}>
                                Contactar
                            </a>
                        </motion.li>
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
}
