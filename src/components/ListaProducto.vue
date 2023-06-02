<template>
  <div>
    <h2>Listado de productos</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <product-item :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import ProductItem from './ListaProducto.vue';

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get('http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/api/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>
