import '@style/font-face.css';
import '@style/main.css';
import '@style/themes.css';
import { ViteSSG } from 'vite-ssg/single-page';
// import { createApp } from 'vue';
import App from './App.vue';

export const createApp = ViteSSG(App);

// createApp(App).mount('#app');
