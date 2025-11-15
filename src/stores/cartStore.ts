import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0);
//     const doubleCount = computed(() => count.value * 2);
//     function increment() {
//         count.value++;
//     }

//     return { count, doubleCount, increment };
// });

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as {
            idProduto: number;
            nomeProduto: string;
            urlImg: string;
            valorProduto: string;
            quantidade: number;
        }[],
    }),

    actions: {
        add(item: {
            idProduto: number;
            nomeProduto: string;
            urlImg: string;
            valorProduto: string;
            quantidade: number;
        }) {
            this.items.push(item);
        },

        remove(idProduto: number) {
            this.items = this.items.filter(item => item.idProduto !== idProduto);
        },
    },

    getters: {
        count: state => state.items.length,
    },
});
