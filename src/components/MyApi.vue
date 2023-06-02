<template>

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
  methods: {
    fetchData() {
      axios
        .get("http://ec2-54-163-208-73.compute-1.amazonaws.com:8080")
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