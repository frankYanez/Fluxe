import { test, expect } from '@playwright/test';

test.describe('AURUM Labs Landing Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
    });

    test('should render hero section with animated heading', async ({ page }) => {
        const hero = page.locator('#inicio');
        await expect(hero).toBeVisible();

        const heading = hero.locator('h1');
        await expect(heading).toContainText('Transformamos');
        await expect(heading).toContainText('digital');
    });

    test('should have sticky navbar that changes on scroll', async ({ page }) => {
        const navbar = page.locator('nav');
        await expect(navbar).toBeVisible();

        // Scroll down
        await page.evaluate(() => window.scrollBy(0, 500));
        await page.waitForTimeout(300);

        // Check if navbar has scrolled class
        const hasScrolledClass = await navbar.evaluate((el) =>
            el.classList.contains('scrolled') ||
            el.className.includes('scrolled')
        );
        expect(hasScrolledClass).toBeTruthy();
    });

    test('should navigate to sections when clicking nav links', async ({ page }) => {
        // Click on "Servicios" link
        await page.click('a[href="#valor"]');
        await page.waitForTimeout(500);

        // Check if scrolled to value section
        const valueSection = page.locator('#valor');
        await expect(valueSection).toBeInViewport();
    });

    test('should display all main sections', async ({ page }) => {
        await expect(page.locator('#inicio')).toBeVisible();
        await expect(page.locator('#valor')).toBeVisible();
        await expect(page.locator('#portafolio')).toBeVisible();
        await expect(page.locator('#testimonios')).toBeVisible();
        await expect(page.locator('#planes')).toBeVisible();
        await expect(page.locator('#contacto')).toBeVisible();
    });

    test('should have all CTA buttons present and clickable', async ({ page }) => {
        const ctaButtons = page.locator('.btn-primary');
        const count = await ctaButtons.count();
        expect(count).toBeGreaterThan(0);

        // Check first CTA is clickable
        const firstCta = ctaButtons.first();
        await expect(firstCta).toBeVisible();
        await expect(firstCta).toBeEnabled();
    });

    test('should display portfolio images with alt text', async ({ page }) => {
        await page.locator('#portafolio').scrollIntoViewIfNeeded();

        const portfolioImages = page.locator('#portafolio img');
        const count = await portfolioImages.count();
        expect(count).toBeGreaterThan(0);

        // Check first image has alt text
        const firstImage = portfolioImages.first();
        const alt = await firstImage.getAttribute('alt');
        expect(alt).toBeTruthy();
    });

    test('should display pricing cards', async ({ page }) => {
        await page.locator('#planes').scrollIntoViewIfNeeded();

        // Should have 3 pricing plans
        const planCards = page.locator('#planes h3');
        await expect(planCards).toHaveCount(3);

        // Check for plan names
        await expect(page.locator('text=Starter')).toBeVisible();
        await expect(page.locator('text=Pro')).toBeVisible();
        await expect(page.locator('text=Elite')).toBeVisible();
    });

    test('should have testimonials carousel', async ({ page }) => {
        await page.locator('#testimonios').scrollIntoViewIfNeeded();

        const testimonial = page.locator('#testimonios blockquote');
        await expect(testimonial).toBeVisible();

        // Check for navigation dots
        const dots = page.locator('#testimonios button[aria-label*="testimonio"]');
        const dotCount = await dots.count();
        expect(dotCount).toBeGreaterThan(0);
    });

    test('should toggle mobile menu', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });

        const menuButton = page.locator('button[aria-label="Menú de navegación"]');
        await expect(menuButton).toBeVisible();

        // Open menu
        await menuButton.click();
        await page.waitForTimeout(300);

        // Check if menu is expanded
        const isExpanded = await menuButton.getAttribute('aria-expanded');
        expect(isExpanded).toBe('true');
    });

    test('should respect reduced motion preference', async ({ page, context }) => {
        // Set reduced motion preference
        await context.addInitScript(() => {
            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                value: (query: string) => ({
                    matches: query === '(prefers-reduced-motion: reduce)',
                    media: query,
                    onchange: null,
                    addListener: () => { },
                    removeListener: () => { },
                    addEventListener: () => { },
                    removeEventListener: () => { },
                    dispatchEvent: () => true,
                }),
            });
        });

        await page.goto('http://localhost:3000');

        // Page should still render correctly
        await expect(page.locator('#inicio')).toBeVisible();
    });

    test('should have proper heading hierarchy', async ({ page }) => {
        const h1 = page.locator('h1');
        await expect(h1).toHaveCount(1);

        const h2s = page.locator('h2');
        const h2Count = await h2s.count();
        expect(h2Count).toBeGreaterThan(0);
    });

    test('should have footer with links', async ({ page }) => {
        const footer = page.locator('footer');
        await expect(footer).toBeVisible();

        // Check for social links
        const socialLinks = footer.locator('a[aria-label*="LinkedIn"], a[aria-label*="Twitter"], a[aria-label*="Instagram"]');
        const socialCount = await socialLinks.count();
        expect(socialCount).toBeGreaterThan(0);
    });
});
