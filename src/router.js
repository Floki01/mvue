import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "./view/HomeView.vue"
import NosotrosView from "./view/NosotrosView.vue"
import AgregarProductosView from "./view/AgregarProductosView.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/nosotros",
        name: "nosotros",
        component: NosotrosView
    },
    {
        path: "/productos",
        name: "productos",
        component: AgregarProductosView
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;