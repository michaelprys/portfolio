/** @type {import('tailwindcss').Config} */
export default {
    'content': [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    'theme': {
        'extend': {
            'container': {
                'screens': {
                    'sm': '600px',
                    'md': '728px',
                    'lg': '984px',
                    'xl': '1168px'
                }
            },
            'colors': {
                'custom-gray-1': '#17171b',
                // 'custom-gray-1': '#131316',
                // 'custom-citrus': '#3c4457',
                // 'custom-citrus': '#1D1F36',
                'custom-citrus': '#800020 ',
                'custom-white': '#FEFEFE',
                // 'custom-decoration': '#BFBFBF ',
                'custom-decoration': '#800020',
                'custom-gray-2': '#55555b',
                'custom-gray-3': '#faf3e0cc',
                'custom-focus': '#414146',
                'custom-dark-1': '#FAF3E0',
                'custom-dark-2': '#080809',
                'custom-subtext': '#BFBFBF '
            },
            'borderRadius': {
                '4xl': '2rem',
                'btn': '4rem'
            },
            'transitionDuration': {
                '400': '400ms'
            }
        },
        'fontFamily': {
            'primary': ['Gotham'],
            'secondary': ['Retro Signature']
        }
    },
    'plugins': []
};
