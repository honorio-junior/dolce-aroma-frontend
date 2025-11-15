<template>
    <Transition>
        <!-- MODAL -->
        <div
            v-if="openModal"
            class="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-50"
        >
            <div class="bg-white w-full h-full m-1 p-4 overflow-y-auto shadow-xl">
                <h1 class="text-center font-semibold">Meu carrinho</h1>
                <h2 class="font-medium border-b border-zinc-300">Items</h2>
                <div class="max-h-80 overflow-auto">
                    <!-- item do carrinho -->
                    <span class="text-sm text-zinc-500" v-if="cart.items.length == 0"
                        >Nenhum produto adicionado.</span
                    >
                    <div
                        v-for="item in cart.items"
                        class="flex p-2 gap-3 justify-between bg-zinc-200 rounded mt-2"
                    >
                        <div>
                            <img
                                :src="item.urlImg"
                                alt="produto"
                                class="w-[50px] h-[50px] object-cover rounded p-1 border border-zinc-300"
                                loading="lazy"
                            />
                        </div>
                        <div class="flex-1">
                            <h3 class="font-semibold text-xs">{{ item.nomeProduto }}</h3>
                            <span class="text-sm font-medium">R$ {{ item.valorProduto }}</span>
                        </div>
                        <div class="flex items-center justify-center flex-col">
                            <span class="text-sm font-medium">{{ item.quantidade }}</span>
                            <div class="text-white font-medium flex gap-2">
                                <button
                                    @click="adicionarItem(item.idProduto)"
                                    class="bg-warning p-1 cursor-pointer rounded h-5 w-5 flex items-center justify-center"
                                >
                                    <span>
                                        <!-- SVG plus -->
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-plus-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8
                 8 0 1 0 8 0a8 8 0 0 0 0 16"
                                            />
                                            <path
                                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5
                 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5
                 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                <button
                                    @click="removerItem(item.idProduto)"
                                    class="bg-warning p-1 cursor-pointer rounded h-5 w-5 flex items-center justify-center"
                                >
                                    <span>
                                        <!-- SVG dash -->
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-dash-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8
                 8 0 1 0 8 0a8 8 0 0 0 0 16"
                                            />
                                            <path
                                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 
                 0 0 1 0 1h-7A.5.5 0 0 1 4 8"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="cart.items.length > 0">
                    <!-- Resumo -->
                    <h2 class="font-medium border-b border-zinc-300 mt-3">Resumo</h2>
                    <div class="mt-1">
                        <!-- subtotal -->
                        <div class="flex justify-between items-center">
                            <span class="text-zinc-500 font-medium text-sm">Subtotal</span>
                            <span>R$ {{ subtotal }}</span>
                        </div>
                        <!-- taxa entrega -->
                        <div class="flex justify-between items-center mt-1">
                            <span class="text-zinc-500 font-medium text-sm">Taxa de entrega</span>
                            <span class="text-sm">R$ {{ entrega }}</span>
                        </div>
                        <!-- total -->
                        <div class="flex justify-between items-center mt-1">
                            <span class="text-zinc-700 font-medium">Total</span>
                            <span class="font-medium">R$ {{ total }}</span>
                        </div>
                    </div>
                    <!-- Pagar -->
                    <button @click="gerarPix()" class="mt-2 bg-primary text-white rounded w-full py-2 cursor-pointer">
                        Gerar Pix
                    </button>
                </template>
            </div>
        </div>
    </Transition>

    <!-- BOTÃO FLUTUANTE -->
    <button
        @click="abrirCarrinho()"
        class="bg-primary/90 rounded-full cursor-pointer p-4 fixed bottom-3 right-3 z-50"
    >
        <svg
            v-if="!openModal"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            class="bi bi-basket-fill text-white"
            viewBox="0 0 16 16"
        >
            <path
                d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"
            />
        </svg>
        <svg
            v-if="openModal"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            class="bi bi-x-circle-fill text-white"
            viewBox="0 0 16 16"
        >
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
            />
        </svg>

        <!-- BADGE DE QUANTIDADE -->
        <span class="absolute -top-1 -right-1 bg-success text-white px-2 rounded-full text-xs">
            {{ cart.items.length }}
        </span>
    </button>
</template>

<script setup lang="ts">
import { getEntrega } from '@/services/indexService';
import { useCartStore } from '@/stores/cartStore';
import { ref } from 'vue';

const cart = useCartStore();
const openModal = ref(false);
const subtotal = ref('0');
const entrega = ref('0');
const total = ref('0');

async function abrirCarrinho() {
    openModal.value = !openModal.value;
    entrega.value = await getEntrega();
    calcular();
}

function calcular() {
    let calc = 0;

    cart.items.forEach(item => {
        const valor = parseFloat(item.valorProduto.replace(',', '.')) * item.quantidade;
        calc += valor;
    });

    subtotal.value = calc.toFixed(2).replace('.', ',');

    let ent = parseFloat(entrega.value.replace(',', '.'));

    let tlt = parseFloat(subtotal.value.replace(',', '.')) + ent;

    total.value = tlt.toFixed(2).replace('.', ',');
}
function adicionarItem(idProduto: number) {
    const produto = cart.items.find(i => i.idProduto == idProduto);

    if (produto) {
        if (produto.quantidade < 10) {
            produto.quantidade += 1;
        }
    }
    calcular();
}
function removerItem(idProduto: number) {
    const produto = cart.items.find(i => i.idProduto == idProduto);

    if (produto) {
        if (produto.quantidade > 1) {
            produto.quantidade -= 1;
        } else {
            cart.remove(produto.idProduto);
        }
    }
    calcular();
}

function gerarPix() {
    
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
