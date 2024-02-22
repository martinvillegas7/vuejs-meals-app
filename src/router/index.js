import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/ingredients/',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsByIngredient
            },
            {
                path: '/meal/:id?',
                name: 'mealDetails',
                component: MealDetails
            }

        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
        children: []
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;