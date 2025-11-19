<template>
    <h2 class="text-2xl font-medium px-2 text-center mt-5 text-primary">Cardapio</h2>
    <main class="px-2">
        <section v-for="item in cardapio" class="mb-3">
            <h3 class="border-b border-yellow-400 py-1 mb-2">
                <span class="font-medium">{{ item.nomeCategoria }}</span>
            </h3>
            <div
                class="border relative border-yellow-400 p-1 rounded bg-white/50 flex justify-between items-center flex-wrap mb-3"
                v-for="produto in item.produtos"
            >
                <div class="px-3">
                    <h3>{{ produto.nomeProduto }}</h3>
                    <span class="text-sm text-stone-700">R$ {{ produto.valorProduto }}</span>
                </div>
                <div class="relative">
                    <img
                        :src="produto.urlImg"
                        alt="produto"
                        class="w-[65px] h-[65px] object-cover rounded-2xl border border-yellow-400"
                        loading="lazy"
                    />
                </div>
                <div v-if="produto.entrega" class="absolute top-0 right-0 opacity-90">
                    <AdicionarProduto
                        :idProduto="produto.idProduto"
                        :nomeProduto="produto.nomeProduto"
                        :urlImg="produto.urlImg"
                        :valorProduto="produto.valorProduto"
                    ></AdicionarProduto>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getCardapio } from '../services/indexService';
import AdicionarProduto from './AdicionarProduto.vue';

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
    cardapio.value = await getCardapio();
});
</script>

<style scoped></style>
