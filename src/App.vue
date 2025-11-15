<template>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <Carrinho></Carrinho>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Carrinho from './components/Carrinho.vue';
</script>

<style scoped></style>
