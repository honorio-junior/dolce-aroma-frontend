<template>
    <!-- header -->
    <header class="flex justify-between items-center border-b border-yellow-400" :class="open == false ? 'mb-4' : ''">
        <div class="flex items-center">
            <img src="/img/logo.jpg" alt="logo" width="70" />
            <!-- <h1 class="font-semibold text-lg text-primary">Dolce Aroma</h1> -->
        </div>
        <div class="mr-2 cursor-pointer" @click="open = !open">
            <span
                ><svg
                    :class="open == true ? 'rotate-90' : 'rotate-0'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-list transition-transform text-primary"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    /></svg
            ></span>
        </div>
    </header>
    <div v-if="open" class="bg-yellow-200 p-4 min-h-20 mb-4 text-center font-medium flex flex-col gap-3 text text-black/80 border-b border-yellow-400">
    <span @click="open = false" :class="route.path == '/' ? 'underline' : ''"><router-link to="/">Inicio</router-link></span>
    <span @click="open = false" :class="route.path == '/cardapio' ? 'underline' : ''"><router-link to="/cardapio">Cardapio</router-link></span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const open = ref(false);
</script>

<style scoped></style>
