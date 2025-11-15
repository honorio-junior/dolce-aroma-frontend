<template>
    <button
        @click="adicionarProdutoCarrinho(idProduto)"
        class="bg-primary rounded-full cursor-pointer p-2"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart-plus-fill text-white"
            viewBox="0 0 16 16"
        >
            <path
                d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"
            />
        </svg>
    </button>
    <Transition>
        <div
            v-if="popup"
            class="h-15 fixed top-0 left-0 right-0 text-center flex items-center justify-center text-white font-semibold z-999"
            :class="exist == false ? 'bg-success/90' : 'bg-red-500/90'"
        >
            {{ info }}
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import { ref } from 'vue';

const props = defineProps({
    idProduto: {
        type: Number,
        required: true,
    },
    nomeProduto: {
        type: String,
        required: true,
    },
    urlImg: {
        type: String,
        required: true,
    },
    valorProduto: {
        type: String,
        required: true,
    }
});

const popup = ref(false);

const cart = useCartStore();

const info = ref('');
const exist = ref(false);

function adicionarProdutoCarrinho(idProduto: number) {
    popup.value = true;
    if (cart.items.find(i => i.idProduto == idProduto) == undefined) {
        const produto = {
            idProduto: idProduto,
            nomeProduto: props.nomeProduto,
            urlImg: props.urlImg,
            valorProduto: props.valorProduto,
            quantidade: 1,
        }
        cart.add(produto);
        exist.value = false;
        info.value = 'Adicionado ao carrinho!';
    } else {
        exist.value = true;
        info.value = 'Ja adicionado ao carrinho!';
    }
    setTimeout(() => {
        popup.value = false;
    }, 1000);
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
