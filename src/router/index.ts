import Catalogo from '@/components/Catalogo.vue';
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
        {
            path: '/bar',
            name: 'bar',
            component: Catalogo,
            props: { categoria: 'Bar', service: 'getCardapioBar' },
        },
        {
            path: '/feirinha',
            name: 'feirinha',
            component: Catalogo,
            props: { categoria: 'Feirinha', service: 'getCardapioFeirinha' },
        },
        {
            path: '/comercio',
            name: 'comercio',
            component: Catalogo,
            props: { categoria: 'Comércio', service: 'getCardapioComercio' },
        },
        {
            path: '/cafeteria-restaurante',
            name: 'cafeteria-restaurante',
            component: Catalogo,
            props: { categoria: 'Cafeteria e Restaurante', service: 'getCardapioCafeteria' },
        },
    ],
});

export default router;
