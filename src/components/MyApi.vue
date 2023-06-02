<template>
    <h1>data</h1>
    <h1>{{ data }}</h1>
    
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