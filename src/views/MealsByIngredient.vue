<template>
    <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredients)

onMounted(() => {
    store.dispatch('searchMealsByIngredients', route.params.ingredient)
})


</script>