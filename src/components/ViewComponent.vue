<template>
  <h1>{{$router.params.id}}</h1>
  <h1>{{ data }}</h1>
</template>

<script>
export default {
    data(){
        return{
            data: []
        };
    },
    methods: {
    fetchData(id) {

        const link = "http://54.163.208.73:8080/products/"+id+"reviews";
      
      axios
        .get(link)
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  mounted(){
    const id = this.$route.params.id;
    this.fetchData(id);

  }
}
</script>

<style>

</style>