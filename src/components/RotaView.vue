<template>
    <!-- info -->
    <p class="text-center px-2 mb-2 font-semibold">
        <span class="text-zinc-700 font-normal">Horario da proxima entrega:</span>
        <br />
        <span class="text-zinc-800 font-semibold"
            >{{ formatMinutosHora(rota.partida) }} <br />
            <span class="text-xs font-normal text-zinc-600"
                >(Compras ate {{ formatMinutosHora(rota.limiteCompra) }})</span
            ></span
        >
    </p>
    <!-- rota -->
    <div class="relative px-3 mb-1">
        <div class="w-full bg-white rounded-full h-5 mb-2 relative">
            <!-- barra interna -->
            <div
                class="h-5 rounded-full transition-all duration-500 flex items-center bg-linear-to-r from-indigo-400 via-green-600 bg-size-[200%_100%]"
                style="min-width: 8%"
                :style="{ width: porcRota + '%' }"
            >
                <img class="ms-auto" src="/img/rota.svg" alt="rota" width="23" />
            </div>

            <!-- marcador -->
            <span
                class="absolute top-[10.5px] -translate-y-1/2 text-zinc-600"
                :style="{ left: porcRotaLimite + '%' }"
                >|</span
            >
        </div>

        <div class="flex justify-between mt-1">
            <p class="text-sm text-gray-600 text-left">
                {{
                    horaRotaRestante > 0
                        ? formatMinutosHora(horaRotaRestante) + ' restantes'
                        : '---'
                }}
            </p>
            <p class="text-sm text-gray-600 text-right">Partida</p>
        </div>
    </div>
    <div class="underline text-blue-400 font-normal text-center mb-4 text-xs cursor-default">
        <span class="cursor-pointer"> Saiba mais </span>
    </div>
</template>

<script setup lang="ts">
import { getRota } from '@/services/indexService';
import { onMounted, ref, computed } from 'vue';

const rota = ref<{ partida: number; limiteCompra: number }>({
    partida: 0,
    limiteCompra: 0,
});

// Minuto atual
const now = ref(new Date().getHours() * 60 + new Date().getMinutes());

// porcentagem barra rota 0 => 0%
const porcRota = computed(() => {
    let perc = (now.value / rota.value.partida) * 100;
    if (perc < 0) perc = 0;
    if (perc > 100 && perc <= 110) perc = 100;
    if (perc > 110) perc = 0;
    return perc;
});

// porcentagem barra rota limite 0 => 0%
const porcRotaLimite = computed(() => {
    let perc = (rota.value.limiteCompra / rota.value.partida) * 100;
    if (perc <= 0) perc = 2;
    if (perc > 0 && perc < 100) perc -= 3;
    if (perc >= 100) perc = 97;
    return perc;
});

// hora restante
const horaRotaRestante = computed(() => {
    let hr = rota.value.partida - now.value;
    return hr;
});

onMounted(async () => {
    setInterval(() => {
        const agora = new Date();
        const horas = agora.getHours() * 60;
        const minutos = agora.getMinutes();
        now.value = horas + minutos;
    }, 1000);
    rota.value = await getRota();
});

// recebe minutos e transforma em hora => 00:00
function formatMinutosHora(ts: number) {
    const horas = Math.floor(ts / 60); // pega as horas inteiras
    const minutos = ts % 60; // pega os minutos restantes
    // garante 2 dígitos com padStart
    const hh = String(horas).padStart(2, '0');
    const mm = String(minutos).padStart(2, '0');
    return `${hh}:${mm}`;
}
</script>

<style scoped></style>
