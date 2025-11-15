<template>
    <!-- info -->
    <p class="text-center px-2 mb-2 font-semibold text-primary">
        Loja virtual JAHYL
        <br />
        Compre online e receba na sua casa!
        <br />
    </p>
    <!-- rota -->
    <RotaView></RotaView>
    <!-- banner -->
    <p class="text-center text-xl font-bold text-success">Destaques</p>
    <div class="mx-2 mb-3">
        <div class="p-1 rounded-2xl max-w-max mx-auto bg-primary">
            <div class="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl">
                <!-- Slides -->
                <div id="carousel" class="flex transition-transform duration-500">
                    <img
                        v-for="p in destaques"
                        :src="p.urlImg"
                        :key="p.idProduto"
                        class="w-full shrink-0 max-h-60 object-cover"
                        alt="produto"
                    />
                </div>

                <!-- Botões -->
                <button
                    id="prev"
                    class="absolute top-1/2 left-2 -translate-y-1/2 bg-white/10 text-white/30 cursor-pointer p-2 rounded"
                >
                    ◀
                </button>
                <button
                    id="next"
                    class="absolute top-1/2 right-2 -translate-y-1/2 bg-white/10 text-white/30 cursor-pointer p-2 rounded"
                >
                    ▶
                </button>
            </div>
        </div>
    </div>
    <!-- search -->
    <form class="flex justify-center gap-2 px-2 mt-8 mb-2">
        <input
            class="flex-1 border border-zinc-300 rounded-full px-3 outline-0"
            type="text"
            placeholder="Digite o nome do produto"
        />
        <button class="bg-primary rounded-full p-3 cursor-pointer" type="submit">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-search text-white"
                viewBox="0 0 16 16"
            >
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
            </svg>
        </button>
    </form>
    <!-- mini cardapio -->
    <div v-for="c in cardapio" :key="c.idCategoria" class="p-2">
        <!-- categoria -->
        <div class="flex justify-between items-center mb-4">
            <span class="font-medium text-lg">{{ c.nomeCategoria }}</span>
            <!-- <button class="font-medium underline text-warning cursor-pointer">Ver mais</button> -->
            <router-link class="text-warning font-medium underline cursor-pointer" to="/cardapio"
                >Ver mais</router-link
            >
        </div>

        <!-- produtos -->
        <div class="flex gap-2 overflow-x-auto pb-2 mb-2 scroll-smooth">
            <!-- card -->
            <Product
                v-for="p in c.produtos"
                :key="p.idProduto"
                :id="p.idProduto"
                :nome="p.nomeProduto"
                :urlImg="p.urlImg"
                :valor="p.valorProduto"
                :cart="true"
                :entrega="p.entrega"
            ></Product>
        </div>
    </div>
    <!-- links -->
    <div class="text-center mb-3">
        <span>
            <router-link class="text-warning font-medium underline" to="/cardapio"
                >Ver cardapio completo</router-link
            >
        </span>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getDestaques, getCardapioResumo } from '../services/indexService';
import RotaView from './RotaView.vue';
import Product from './Product.vue';

const destaques = ref<{ idProduto: number; urlImg: string }[]>([{ idProduto: 0, urlImg: '' }]);
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
    bannerDestaques();
    destaques.value = await getDestaques();
    cardapio.value = await getCardapioResumo();
});

function bannerDestaques() {
    const carousel = document.getElementById('carousel') as HTMLElement;
    const slides = carousel?.children;
    let index = 0;

    function showSlide(i: number) {
        const total = slides.length;
        index = (i + total) % total;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    next?.addEventListener('click', () => showSlide(index + 1));
    prev?.addEventListener('click', () => showSlide(index - 1));

    setInterval(() => showSlide(index + 1), 5000);
}
</script>

<style scoped></style>
