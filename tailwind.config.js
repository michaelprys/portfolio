/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1168px',
                },
            },
            colors: {
                'custom-gray-1': '#1A1919',
                // 'custom-green': '#yellow', // green
                // 'custom-green': '#358b60', // green
                // 'custom-green': '#725e4f', // brown
                'custom-citrus': '#FFF197',
                'custom-white': '#FAFAFA',
                'custom-decoration': '#725e4f',
                'custom-gray-2': '#575757',
                'custom-gray-3': '#AAA7A7',
                'custom-dark-1': '#030303',
                'custom-dark-2': '#050000',
            },
            borderRadius: {
                '4xl': '2rem',
                btn: '4rem',
            },
            transitionDuration: {
                400: '400ms',
            },
        },
        fontFamily: {
            primary: ['Gotham'],
            secondary: ['Retro Signature'],
        },
    },
    plugins: [],
};
