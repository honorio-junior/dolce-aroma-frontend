<template>
    <div class="flex">
        <!-- card -->
        <div class="min-w-40 bg-white/50 border border-yellow-400 shadow rounded-lg p-2 flex flex-col">
            <div class="relative">
                <img
                    :src="urlImg"
                    alt="produto"
                    class="w-[150px] h-[150px] object-cover rounded"
                    loading="lazy"
                />
                <div v-if="entrega" class="absolute bottom-1 right-1">
                    <AdicionarProduto :idProduto="id" :nomeProduto="nome" :urlImg="urlImg" :valorProduto="valor"></AdicionarProduto>
                </div>
            </div>

            <div class="mt-2">
                <span class="font-semibold block">R$ {{ valor }}</span>
                <span class="text-zinc-700 text-sm">{{ nome }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AdicionarProduto from './AdicionarProduto.vue';

defineProps({
    id: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    urlImg: {
        type: String,
        required: true,
    },
    valor: {
        type: String,
        required: true,
    },
    entrega: {
        type: Boolean,
        required: true,
    },
});
</script>

<style scoped></style>
