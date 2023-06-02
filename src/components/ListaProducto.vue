<template>
    <div>
      //<h1></h1>

      <!--lista de prodcutos Api-->
      <ul>
        <!-- Iteración sobre el array birds listado de nombres-->
        <li v-for="products in products" :key="products.id">{{ products }}</li>
      </ul>
    </div>
  </template>
  
<script>
  export default {

    name: 'ListaProductos', 
    data() {
      return {
        
        products: []
      }
    },
    mounted() {
      this.fetchBirds()
    },
    
    methods: {
      // Metodo para obtener los pajaros mediante una solicitud HTTP
      fetchBirds() {
        fetch('http://ec2-54-163-208-73.compute-1.amazonaws.com:8080')
          .then(response => response.json())
          .then(data => {
            // Asignar los datos de los pajaros al array 'birds'
            this.products= data
          })
          .catch(error => {
            console.error('Error:', error)
          })
      }
    }
  }
  </script>
 <style>
 
 </style>
  