<template>
    <!-- info -->
    <header class="text-center px-2 mb-2 font-semibold text-white">
        <h3 class="text-2xl mb-4" style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6)">
            Tudo oque você precisa, mais perto de você!!
        </h3>
        <h4 class="text-sm bg-white/20 rounded-full py-2">Praticidade, conforto e conveniência</h4>
    </header>
    <!-- rota -->
    <!-- <RotaView></RotaView> -->
    <img src="/img/logo.png" class="mx-auto p-4 max-w-[300px]" alt="foto1" />
    <!-- menu -->
    <div class="bg-success rounded-3xl mx-4 pb-2">
        <!-- links menus -->
        <ul>
            <li v-for="item in linksMenus" class="flex justify-center items-center pt-2">
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
                        class="col-6 text-white font-medium cursor-pointer"
                        :class="{
                            'no-underline pointer-events-none opacity-50':
                                item.label === 'Hotel' || item.label === 'Feirinha',
                            underline: !(item.label === 'Hotel' || item.label === 'Feirinha'),
                        }"
                        :to="item.rota"
                    >
                        {{ item.label }}
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
    <!-- sobre -->
    <div class="mt-3">
        <span class="m-2 text-white">Quem somos?</span>
        <br /><br />
        <p class="m-2 mt-0 text-white text-center">
            O Jardim Europa Mall nasceu com um propósito simples: estar perto de quem vive ao nosso
            redor. Localizados à beira da estrada, entendemos a importância de oferecer praticidade,
            acesso fácil e soluções rápidas para o dia a dia da comunidade local.
            <br /><br />Trabalhamos com bar, hotel, feirinha, comércio, cafeteria e restaurante,
            reunindo em um só espaço diferentes serviços pensados para atender moradores, viajantes
            e toda a região com conforto, qualidade e conveniência. Mais do que um centro comercial,
            somos um ponto de encontro, apoio e conexão para a comunidade local. <br /><br />
            O Jardim Europa Mall também mantém parceria com a piscicultura JAHYL, referência na
            produção de peixes frescos e de qualidade. A JAHYL trabalha majoritariamente com
            matrinxãs pescados na hora, garantindo frescor e procedência, e em breve ampliará sua
            produção com a venda de tambaquis. <br /><br />
            Estamos localizados na Estrada da Várzea – AM 363, KM 37, um ponto estratégico para
            facilitar o acesso e aproximar ainda mais você do que precisa. <br /><br />
            No Jardim Europa Mall, conveniência, cuidado e comunidade caminham juntos.
        </p>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const linksMenus = ref([
    { label: 'Bar', rota: '/bar' },
    { label: 'Hotel', rota: '/' },
    { label: 'Feirinha', rota: '/feirinha' },
    { label: 'Comércio', rota: '/comercio' },
    { label: 'Cafeteria e Restaurante', rota: '/cafeteria-restaurante' },
]);
</script>

<style scoped></style>
