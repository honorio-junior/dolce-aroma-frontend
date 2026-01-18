<template>
    <h2 class="text-2xl font-medium px-2 text-center mt-2 text-white">{{ categoria }}</h2>
    <main class="px-2">
        <section v-for="item in cardapio" class="mb-3">
            <h3 class="border-b border-white py-1 mb-2">
                <span class="font-medium text-white">{{ item.nomeCategoria }}</span>
            </h3>
            <div
                v-for="produto in item.produtos"
                :key="produto.idProduto"
                class="relative flex items-center justify-between bg-white/50 rounded-lg border border-success p-3 mb-3 gap-3"
            >
                <!-- Informações do produto -->
                <div class="flex-1 min-w-0">
                    <h3 class="text-base font-medium text-gray-800 truncate">
                        {{ produto.nomeProduto }}
                    </h3>
                    <span class="text-sm text-gray-600">R$ {{ produto.valorProduto }}</span>
                </div>

                <!-- Imagem do produto -->
                <div class="shrink-0">
                    <img
                        :src="produto.urlImg"
                        alt="produto"
                        class="w-16 h-16 object-cover rounded-lg border border-success"
                        loading="lazy"
                    />
                </div>

                <!-- Botão adicionar produto -->
                <div v-if="produto.entrega" class="absolute top-2 right-2">
                    <AdicionarProduto
                        :idProduto="produto.idProduto"
                        :nomeProduto="produto.nomeProduto"
                        :urlImg="produto.urlImg"
                        :valorProduto="produto.valorProduto"
                    />
                </div>
            </div>
        </section>
    </main>
    <Carrinho></Carrinho>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as services from '../services/indexService';
import AdicionarProduto from './AdicionarProduto.vue';
import Carrinho from './Carrinho.vue';

const props = defineProps({
    categoria: String,
    service: String, // nome da função enviada pela rota
});

const cardapio = ref<
    {
        idCategoria: number;
        nomeCategoria: string;
        produtos: {
            idProduto: number;
            nomeProduto: string;
            valorProduto: string;
            urlImg: string;
            entrega: boolean;
        }[];
    }[]
>([
    {
        idCategoria: 0,
        nomeCategoria: '',
        produtos: [
            {
                idProduto: 0,
                nomeProduto: '',
                valorProduto: '0,00',
                urlImg: '',
                entrega: false,
            },
        ],
    },
]);

onMounted(async () => {
    const func = services[props.service];

    if (!func) {
        console.error(`Service "${props.service}" não encontrado!`);
        return;
    }

    cardapio.value = await func();
});
</script>

<style scoped></style>
