import { ViteSSG } from 'vite-ssg/single-page';
import '@/assets/styles/font-face.css';
import '@/assets/styles/main.css';

import App from './App.vue';

export const createApp = ViteSSG(App);
