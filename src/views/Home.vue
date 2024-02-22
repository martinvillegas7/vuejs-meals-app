<template>
    <div class="flex flex-col-2 items-center content-center">
        <!-- <div>
            <h1>Alégrate con la única
                Contabilidad inteligente
                Facturación electrónica
                Venta POS
                Nómina electrónica
                que le da superpoderes a tu pyme</h1>
            <p>Vive el poder de vender, facturar y contabilizar de manera automática y desde un solo lugar.</p>
            <YoutubeButton>Hola</YoutubeButton>
            <p>
                Valoración de 5

                Hubspot LogoCapterra LogoPlayStore Logo</p>
        </div> -->
        <img class="flex translate-y-5" src="../assets/alegra-COL-Home-hero.webp" alt="">

    </div>
    <div class="flex flex-col-2 items-center content-center">
        <!-- <div>
            <h1>Alégrate con la única
                Contabilidad inteligente
                Facturación electrónica
                Venta POS
                Nómina electrónica
                que le da superpoderes a tu pyme</h1>
            <p>Vive el poder de vender, facturar y contabilizar de manera automática y desde un solo lugar.</p>
            <YoutubeButton>Hola</YoutubeButton>
            <p>
                Valoración de 5

                Hubspot LogoCapterra LogoPlayStore Logo</p>
        </div> -->
        <img class="flex translate-y-5" src="../assets/alegra-COL-Home-hero.webp" alt="">

    </div>
    <div class="flex flex-col-2 items-center content-center">
        <!-- <div>
            <h1>Alégrate con la única
                Contabilidad inteligente
                Facturación electrónica
                Venta POS
                Nómina electrónica
                que le da superpoderes a tu pyme</h1>
            <p>Vive el poder de vender, facturar y contabilizar de manera automática y desde un solo lugar.</p>
            <YoutubeButton>Hola</YoutubeButton>
            <p>
                Valoración de 5

                Hubspot LogoCapterra LogoPlayStore Logo</p>
        </div> -->
        <img class="flex translate-y-5" src="../assets/alegra-COL-Home-hero.webp" alt="">

    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js';

const meals = computed(() => store.state.meals)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ingredients = ref([]);

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    console.log(response.data)
    ingredients.value = response.data
})
</script>

