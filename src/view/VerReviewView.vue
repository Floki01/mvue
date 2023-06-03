<template>
  

  <ProductComp :product="this.product"></ProductComp>
  <ReseñaComp :reviews="this.reviews"></ReseñaComp>
</template>
  
  <script>
import axios from "axios";
import ReseñaComp from '@/components/ReseñaComp.vue';
import ProductComp from "@/components/ProductComp.vue";

export default {
  components:{
    ReseñaComp,
    ProductComp
  },
  data() {
    return {
      reviews: [],
      product: [],
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
