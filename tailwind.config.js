/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '33.75rem',
            md: '48rem',
            lg: '64rem',
            xl: '75rem',
            xxl: '93.75rem'
        },
        extend: {
            container: {
                center: true,
                padding: '1.5rem'
            },
            colors: {
                'primary-common': 'rgb(var(--primary-common))',
                'secondary-common': 'rgb(var(--secondary-common))',
                'nav-bg': 'rgb(var(--nav-bg))',
                'tooltip-bg': 'rgb(var(--tooltip-bg))',
                'primary-text': 'rgb(var(--primary-text))',
                'muted-text': 'rgb(var(--muted-text))',
                'primary-accent': 'rgb(var(--primary-accent))',
                'secondary-accent': 'rgb(var(--secondary-accent))',
                'border-primary': 'rgb(var(--border-primary))'
            },
            borderRadius: {
                common: '2rem'
            },
            transitionDuration: {
                400: '400ms'
            },
            fontFamily: {
                primary: ['Gotham'],
                secondary: ['Retro Signature']
            },
            gridTemplateColumns: {
                'fit-icon': 'repeat(auto-fill, minmax(2rem, 1fr))'
            },
            fontSize: {
                h1: 'clamp(1.5rem, 0.8864rem + 1.8182vw, 2.25rem)',
                h2: 'clamp(1.25rem, 0.7386rem + 1.5152vw, 1.875rem)',
                h3: 'clamp(1.125rem, 1.0227rem + 0.303vw, 1.25rem)'
            }
        }
    }
};
