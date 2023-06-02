import Vue from 'vue';
import Router from 'vue-router';
import ProductListView from './component/ProductList.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'ProductosLista',
      component: ProductListView,
    },
  ],
});

export default router;
