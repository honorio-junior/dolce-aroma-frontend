<template>
    <!-- info -->
    <header class="text-center px-2 mb-2 font-semibold text-white">
        <h3 class="text-2xl mb-4" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.6);">Tudo oque você precisa, mais perto de você!!</h3>
        <h4 class="text-sm bg-white/20 rounded-full py-2">Praticidade, conforto e conveniência</h4>
    </header>
    <!-- rota -->
    <!-- <RotaView></RotaView> -->
    <img src="/img/logo.png" class="mx-auto p-4 max-w-[300px]" alt="foto1" />
    <!-- menu -->
    <div class="bg-success rounded-3xl mx-4 pb-2">
        <ul>
            <li class="flex justify-center items-center pt-2">
                <div class="flex align-items-center gap-2">
                    <span class="flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-check-circle text-green-900"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                            />
                            <path
                                d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                            />
                        </svg>
                    </span>

                    <router-link
                        class="col-6 text-white font-medium underline cursor-pointer"
                        to="/bar"
                    >
                        Bar
                    </router-link>
                </div>
            </li>
            <li class="flex justify-center items-center pt-2">
                <div class="flex align-items-center gap-2">
                    <span class="flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-check-circle text-green-900"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                            />
                            <path
                                d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                            />
                        </svg>
                    </span>

                    <router-link
                        class="col-6 text-white font-medium cursor-pointer pointer-events-none opacity-50"
                        to="/hotel"
                    >
                        Hotel
                    </router-link>
                </div>
            </li>
            <li class="flex justify-center items-center pt-2">
                <div class="flex align-items-center gap-2">
                    <span class="flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-check-circle text-green-900"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                            />
                            <path
                                d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                            />
                        </svg>
                    </span>

                    <router-link
                        class="col-6 text-white font-medium underline cursor-pointer"
                        to="/feirinha"
                    >
                        Feirinha
                    </router-link>
                </div>
            </li>
            <li class="flex justify-center items-center pt-2">
                <div class="flex align-items-center gap-2">
                    <span class="flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-check-circle text-green-900"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                            />
                            <path
                                d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                            />
                        </svg>
                    </span>

                    <router-link
                        class="col-6 text-white font-medium underline cursor-pointer"
                        to="/comercio"
                    >
                        Comércio
                    </router-link>
                </div>
            </li>
            <li class="flex justify-center items-center pt-2">
                <div class="flex align-items-center gap-2">
                    <span class="flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-check-circle text-green-900"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                            />
                            <path
                                d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                            />
                        </svg>
                    </span>

                    <router-link
                        class="col-6 text-white font-medium underline cursor-pointer"
                        to="/cafeteria-restaurante"
                    >
                        Cafeteria e Restaurante
                    </router-link>
                </div>
            </li>
        </ul>
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
</script>

<style scoped></style>
