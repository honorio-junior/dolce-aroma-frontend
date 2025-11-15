<template>
    <h1 class="text-xl font-medium px-2 text-center mt-5">Cardapio</h1>
    <main class="px-2">
        <section v-for="item in cardapio" class="mb-3">
            <div class="border-b border-zinc-200 py-4 mb-2">
                <span class="font-medium">{{ item.nomeCategoria }}</span>
            </div>
            <div
                class="border border-zinc-200 p-1 rounded bg-zinc-100 flex justify-between items-center flex-wrap mb-3"
                v-for="produto in item.produtos"
            >
                <div class="px-3 font-medium">
                    <h3>{{ produto.nomeProduto }}</h3>
                    <span class="font-normal">R$ {{ produto.valorProduto }}</span>
                </div>
                <div class="relative">
                    <img
                        :src="produto.urlImg"
                        alt="produto"
                        class="w-[100px] h-[100px] object-cover rounded-4xl"
                        loading="lazy"
                    />
                    <div v-if="produto.entrega" class="absolute top-0 right-0">
                        <AdicionarProduto
                            :idProduto="produto.idProduto"
                            :nomeProduto="produto.nomeProduto"
                            :urlImg="produto.urlImg"
                            :valorProduto="produto.valorProduto"
                        ></AdicionarProduto>
                    </div>
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
