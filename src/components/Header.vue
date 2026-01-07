<template>
    <!-- header -->
    <header class="flex justify-between items-center">
        <div class="flex items-center">
            <router-link to="/">
                <h1 class="px-2 font-semibold text-white text-start mb-6 mt-4 underline">
                    Jardim Europa Mall
                </h1>
            </router-link>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
</script>

<style scoped></style>
