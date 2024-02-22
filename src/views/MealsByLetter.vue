<template>
    <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
            {{ letter }}

        </router-link>
    </div>
    <Meals :meals="meals"></Meals>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import store from '../store';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';
import MealItem from '../components/MealItem.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})


onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})



</script>