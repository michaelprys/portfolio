import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
            '@icon': fileURLToPath(new URL('./src/components/icons', import.meta.url)),
            '@style': fileURLToPath(new URL('./src/assets/styles', import.meta.url))
        }
    }
});
