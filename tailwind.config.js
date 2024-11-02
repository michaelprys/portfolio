/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'bg-custom-bright': '#FFF197',
                'bg-custom-gray': '#1A1919',
                'bg-custom-dark': '#030303',
                'bg-custom-darker': '#050000',
                'text-custom-bright': '#FAFAFA',
                'text-custom-dark': '#AAA7A7',
            },
        },
    },
    plugins: [],
};
