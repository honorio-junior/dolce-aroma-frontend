import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        vue(),
        // vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        proxy: {
            // qualquer requisição para /api será redirecionada para o backend
            '/api': {
                target: 'http://localhost:8000', // endereco laravel local
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '/api'),
            },
        },
    },
});
