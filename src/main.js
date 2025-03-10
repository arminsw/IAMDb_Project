import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes.js';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

const store = createPinia()
const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).use(store).mount('#app')