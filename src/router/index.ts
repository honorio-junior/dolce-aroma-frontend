import Bar from '@/components/Bar.vue';
import Cardapio from '@/components/Cardapio.vue';
import Index from '@/components/Index.vue';
import Feirinha from '@/components/Feirinha.vue';
import Comercio from '@/components/Comercio.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Cafeteria from '@/components/Cafeteria.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        // Se tiver posição salva (ex: botão voltar), usa ela
        if (savedPosition) {
            return savedPosition;
        }

        // Em qualquer navegação normal → volta para o topo
        return { top: 0 };
    },
    routes: [
        { path: '/', component: Index, name: 'index' },
        { path: '/bar', component: Bar, name: 'bar' },
        { path: '/feirinha', component: Feirinha, name: 'feirinha' },
        { path: '/comercio', component: Comercio, name: 'comercio' },
        { path: '/cafeteria-restaurante', component: Cafeteria, name: 'cafeteria-restaurante' },
    ],
});

export default router;
