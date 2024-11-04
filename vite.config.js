import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@img': fileURLToPath(
                new URL('./src/assets/images', import.meta.url)
            ),
            '@icon': fileURLToPath(
                new URL('./src/assets/images/icons', import.meta.url)
            ),
            '@style': fileURLToPath(
                new URL('./src/assets/styles', import.meta.url)
            ),
        },
    },
});
