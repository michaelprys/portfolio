import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import globals from 'globals';

export default [
    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        files: ['**/*.{js,ts,mjs,vue}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2024,
            },
        },
        rules: {
            'no-alert': 'warn',
            'no-console': 'warn',
            eqeqeq: ['error', 'always'],
            camelcase: ['error', { properties: 'always' }],
            'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        },
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: { vue: pluginVue },
        rules: {
            'vue/html-indent': ['error', 4],
            'vue/max-attributes-per-line': ['error', { singleline: { max: 3 } }],
            'vue/v-slot-style': ['error', { default: 'shorthand', named: 'shorthand' }],
            'vue/v-bind-style': ['error', 'shorthand'],
            'vue/singleline-html-element-content-newline': [
                'error',
                { ignoreWhenNoAttributes: false, ignoreWhenEmpty: false },
            ],
            'vue/custom-event-name-casing': ['error', 'camelCase'],
            'vue/component-name-in-template-casing': ['error', 'PascalCase'],
            'vue/require-default-prop': 'off',
            'vue/no-v-html': 'error',
        },
    },
    { ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**', '**/dist-ssr/**'] },
];
