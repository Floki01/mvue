<template>
  <p>{{ $route.params.id }}</p>

  <h1>{{ product }}</h1>

  <ul v-for="(a,i) in reviews" :key="i">
    <li><img :src="a.user.photo"></li>
    <li>{{ a.user.name }}</li>
    <li>{{ a.review }}</li>
  </ul>

</template>
  
  <script>
import axios from "axios";
export default {
  data() {
    return {
      reviews: [],
      product: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(
          "http://54.163.208.73:8080/products/" +
            this.$route.params.id +
            "/reviews"
        )
        .then((response) => {
          this.reviews = response.data.reviews;
          this.product = response.data.product;

        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
