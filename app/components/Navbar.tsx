'use client';

import { useEffect, useRef, useState } from 'react';
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

        // ScrollTrigger for active section indicator
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

    useEffect(() => {
        if (!mobileMenuOpen) return;

        const menuItems = document.querySelectorAll(`.${styles.mobileLink}`);

        if (shouldReduceMotion()) {
            gsap.set(menuItems, { opacity: 1, x: 0 });
        } else {
            gsap.fromTo(
                menuItems,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' }
            );
        }
    }, [mobileMenuOpen]);

    return (
        <nav
            ref={navRef}
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            role="navigation"
            aria-label="Navegación principal"
        >
            <div className={styles.container}>
                <a href="#inicio" className={styles.logo} onClick={(e) => handleLinkClick(e, '#inicio')}>
                    <span className={styles.logoText}>AURUM</span>
                    <span className={styles.logoAccent}>Labs</span>
                </a>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`${styles.navLink} ${activeSection === link.href.substring(1) ? styles.active : ''}`}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="#contacto" className={`btn btn-primary ${styles.ctaBtn}`}>
                    Contactar
                </a>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={toggleMobileMenu}
                    aria-label="Menú de navegación"
                    aria-expanded={mobileMenuOpen}
                >
                    <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenu} role="dialog" aria-modal="true">
                    <ul className={styles.mobileLinks}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contacto" className={`btn btn-primary ${styles.mobileCta}`}>
                                Contactar
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
