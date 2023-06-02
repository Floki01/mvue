import { createRouter, createWebHistory } from 'vue-router';
import ProductoView from "@/view/ProductoView.vue";

const routes = [
    {
        path: "/producto",
        name: "producto",
        component: ProductoView
    },
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;