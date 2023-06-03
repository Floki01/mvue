import { createApp } from 'vue'
import App from './App.vue'

//Importar las funciones createRouter y createWebHistory de vue-router
import { createRouter, createWebHistory } from 'vue-router'

import Usuario from './components/Usuario.vue'

//Crear una instancia del enrutador
const router = createRouter({
  history: createWebHistory(),
  //Configurar rutas
  routes: [
    {
      path: '/',
   
      name: 'Home',
      
      component: Usuario
    }
  ]
})

//crear una instancia de la aplicación Vue, Usar el enrutador creado y Montar la aplicación en el elemento con el id 'app'
createApp(App).use(router).mount('#app')