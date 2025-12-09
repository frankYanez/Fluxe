// Accessibility utilities
export const reducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const prefersReducedMotion = (): MediaQueryList | null => {
    if (typeof window === 'undefined') return null;
    return window.matchMedia('(prefers-reduced-motion: reduce)');
};

// Focus trap helper for modals/menus
export const trapFocus = (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey && document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
        }
    };

    element.addEventListener('keydown', handleTabKey);

    return () => {
        element.removeEventListener('keydown', handleTabKey);
    };
};
