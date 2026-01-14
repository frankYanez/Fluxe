/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: 'var(--gold)',
                    light: 'var(--gold-light)',
                    dark: 'var(--gold-dark)',
                    50: '#FAF8F3',
                    100: '#F5F1E7',
                    200: '#E8DFC7',
                    300: '#DBCDA7',
                    400: '#D4B15F',
                    500: '#C7A046',
                    600: '#A68838',
                    700: '#7D662A',
                    800: '#54441C',
                    900: '#2B220E',
                },
                ink: 'var(--ink)',
                muted: 'var(--muted)',
                line: 'var(--line)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                spotlight: 'spotlight 2s ease 0.75s 1 forwards',
                meteor: 'meteor linear infinite',
            },
            keyframes: {
                spotlight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate(-72%, -62%) scale(0.5)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(-50%, -40%) scale(1)',
                    },
                },
                meteor: {
                    '0%': {
                        transform: 'rotate(215deg) translateX(0)',
                        opacity: '1',
                    },
                    '70%': {
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'rotate(215deg) translateX(-500px)',
                        opacity: '0',
                    },
                },
            },
        },
    },
    plugins: [],
}
