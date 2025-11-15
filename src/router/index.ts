import Cardapio from '@/components/Cardapio.vue';
import Index from '@/components/Index.vue';
import { createRouter, createWebHistory } from 'vue-router';

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
        { path: '/cardapio', component: Cardapio, name: 'cardapio' },
    ],
});

export default router;
