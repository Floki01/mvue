<template>
  <!-- <h1>{{$router.params.id }}</h1> -->
  <h1>{{ $route.params.id }}</h1>
  <h1>
    {{ "http://54.163.208.73:8080/products/" + $route.params.id + "/reviews" }}
  </h1>
  <ul v-for="(item,index) in data" :key="index">
        <li>{{ item.reviews.user }}</li>
        <p>------------------------------</p>
    </ul>
</template>
  
  <script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      id: ""
    };
  },
  mounted() {
    this.fetchData();
  },
  created() {
    
  },
  methods: {
    fetchData() {
      axios
        .get(
          "http://54.163.208.73:8080/products/" + this.$route.params.id + "/reviews"
        )
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
