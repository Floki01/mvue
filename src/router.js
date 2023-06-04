import { createRouter, createWebHistory } from 'vue-router';
import ProductoView from "@/view/ProductoView.vue";
import VerReviewView from "@/view/VerReviewView.vue";
const routes = [
    {
        path: "/listar",
        name: "listar",
        component: ProductoView
    },
    {
      path: "/listar/:id/reviews",
      name: "reviews",
      component: VerReviewView
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;