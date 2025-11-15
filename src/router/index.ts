import Cardapio from '@/components/Cardapio.vue';
import Index from '@/components/Index.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', component: Index, name: 'index'},
        {path: '/cardapio', component: Cardapio, name: 'cardapio'},
    ],
});

export default router;
