//Importar las funciones createRouter y createWebHistory de vue-router
import { createRouter, createWebHistory } from 'vue-router'


import Producto from '@/Producto.vue'
//Definir las rutas 
const routes = [
  {
    path: '/',
   
    name: 'Home',
  
    component: Producto
  }
]

//Crear una instancia del enrutador
const router = createRouter({
  //Configurar el historial basado en la API
  history: createWebHistory(),routes
})

export default router