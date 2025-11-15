<template>
    <Transition>
        <!-- MODAL -->
        <div
            v-if="openModal"
            class="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-50"
        >
            <div class="bg-white w-full h-full m-1 p-4 overflow-y-auto shadow-xl">
                <h1 class="text-center text-zinc-500">Meu carrinho</h1>
                <h2 class="border-b border-zinc-300">Itens</h2>
                <div class="max-h-60 overflow-auto">
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
                                class="w-[50px] h-[50px] object-cover rounded border border-zinc-800"
                                loading="lazy"
                            />
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xs">{{ item.nomeProduto }}</h3>
                            <span class="text-xs">R$ {{ item.valorProduto }}</span>
                        </div>
                        <div class="flex items-center justify-center flex-col">
                            <span class="text-sm">{{ item.quantidade }}</span>
                            <div class="text-white flex gap-2">
                                <button
                                    @click="adicionarItem(item.idProduto)"
                                    class="bg-warning p-1 cursor-pointer rounded h-5 w-5 flex items-center justify-center"
                                >
                                    <span> + </span>
                                </button>

                                <button
                                    @click="removerItem(item.idProduto)"
                                    class="bg-warning p-1 cursor-pointer rounded h-5 w-5 flex items-center justify-center"
                                >
                                    <span class="mb-0.5"> - </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="cart.items.length > 0">
                    <!-- Resumo -->
                    <h2 class="border-b border-zinc-300 mt-3">Resumo</h2>
                    <div class="mt-1">
                        <!-- subtotal -->
                        <div class="flex justify-between items-center">
                            <span class="text-zinc-600 text-xs">Subtotal</span>
                            <span class="text-sm text-zinc-700">R$ {{ subtotal }}</span>
                        </div>
                        <!-- taxa entrega -->
                        <div class="flex justify-between items-center mt-1">
                            <span class="text-zinc-600 text-xs">Taxa de entrega</span>
                            <span class="text-xs text-zinc-700">R$ {{ entrega }}</span>
                        </div>
                        <!-- total -->
                        <div class="flex justify-between items-center mt-1">
                            <span class="text-zinc-700 font-normal">Total</span>
                            <span class="text-sm">R$ {{ total }}</span>
                        </div>
                    </div>
                    <!-- Pagar -->
                    <button
                        @click="gerarMensagemWhatsApp()"
                        class="mt-2 bg-primary text-white rounded w-full py-2 cursor-pointer"
                    >
                        Fazer pedido
                    </button>
                </template>
            </div>
        </div>
    </Transition>

    <!-- BOTÃO FLUTUANTE -->
    <button
        @click="abrirCarrinho()"
        class="bg-primary/70 rounded-full cursor-pointer p-4 fixed bottom-3 right-3 z-50"
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
        if (produto.quantidade < 200) {
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

function gerarMensagemWhatsApp() {
  let mensagem = "Olá! Quero fazer um pedido:\n\n";

  cart.items.forEach(item => {
    mensagem += `• ${item.nomeProduto} — ${item.quantidade}\n`;
  });

//   mensagem += "\nObrigado! 😊";

  const texto = encodeURIComponent(mensagem);
  const numero = "5592991588743";

  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
}

function gerarPix() {}
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
