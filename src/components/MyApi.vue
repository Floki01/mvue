<template>

    <ul v-for="(item,index) in data" :key="index">
        <li>{{ item.name }}</li>
        <li>{{ item.description }}</li>
        <li>${{ item.price }}</li>
        <li>{{ item.user.city }}</li>
        <li><img :src="item.images[0]"></li>
        
        <router-link :to="`/listar/${item._id}/reviews`">Ver Reviews</router-link>
        <p>------------------------------</p>
    </ul>
    
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted(){
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get('http://54.163.208.73:8080/products')
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
</style>