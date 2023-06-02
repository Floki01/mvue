import Vue from 'vue';
import Router from 'vue-router';
import UsuarioView from './pages/UserPage.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'UsuarioView',
      component: UsuarioView,
    },
  ],
});

export default router;
