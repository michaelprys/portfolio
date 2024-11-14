/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            container: {
                screens: {
                    sm: '37.5rem',
                    md: '45.5rem',
                    lg: '61.5rem',
                    xl: '73rem'
                }
            },
            colors: {
                'primary-common': 'rgb(var(--primary-common))',
                'secondary-common': 'rgb(var(--secondary-common))',
                'nav-bg': 'rgb(var(--nav-bg))',
                'nav-hover': 'rgb(var(--nav-hover))',
                'tooltip-bg': 'rgb(var(--tooltip-bg))',
                'primary-text': 'rgb(var(--primary-text))',
                'muted-text': 'rgb(var(--muted-text))',
                'primary-accent': 'rgb(var(--primary-accent))',
                'secondary-accent': 'rgb(var(--secondary-accent))',
                'border-primary': 'rgb(var(--border-primary)),'
            },
            borderRadius: {
                common: '32px',
                max: '9999px'
            },
            transitionDuration: {
                400: '400ms'
            }
        },
        fontFamily: {
            primary: ['Gotham'],
            secondary: ['Retro Signature']
        }
    },
    plugins: []
};
