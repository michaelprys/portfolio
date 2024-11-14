import stylistic from '@stylistic/eslint-plugin';
import pluginVue from 'eslint-plugin-vue';

export default [
    {
        plugins: {
            '@stylistic': stylistic,
            'vue': pluginVue
        },
        rules: {
            // Stylistic
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/semi': 'error',
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
            // Vue
            'vue/html-indent': ['error', 4]
        },
        files: ['**/*.{js,mjs,jsx,vue}']
    },
    {
        ignores: [
            '**/dist/**',
            '**/dist-ssr/**',
            '**/coverage/**'
        ]
    },
    ...pluginVue.configs['flat/essential']
];
