/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'custom-gray': '#1A1919',
                // 'custom-bright-1': '#358b60', // green
                'custom-bright-1': '#FFF197',
                'custom-bright-2': '#FAFAFA',
                'custom-medium': '#575757',
                'custom-dark-1': '#030303',
                'custom-dark-2': '#050000',
            },
            borderRadius: {
                '4xl': '2rem',
                btn: '4rem',
            },
        },
        fontFamily: {
            primary: ['Gotham'],
            secondary: ['Retro Signature'],
        },
    },
    plugins: [],
};
