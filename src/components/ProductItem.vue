<template>
    <div>
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Fecha de publicación: {{ product.date }}</p>
      <p>Precio: {{ product.price }}</p>
      <p>Ciudad: {{ product.city }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
  };
  </script>
  