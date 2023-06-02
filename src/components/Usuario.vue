<template>
  <div>
    <h2>Perfil del usuario</h2>

    <div class="user-profile">
      <img :src="user.photo" alt="Imagen de usuario">
      <h3>{{ user.name }}</h3>
      <p>{{ user.city }}</p>
      <p>{{ user.bio }}</p>
    </div>

    <h3>Reseñas realizadas ({{ reviews.length }})</h3>

    <div v-for="review in reviews" :key="review._id" class="review">
      <img :src="review.product.images[0]" alt="Imagen del producto">
      <h4>{{ review.product.name }}</h4>
      <p>{{ review.review }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UsuarioProfile',
  data() {
    return {
      user: {},
      reviews: []
    };
  },

  mounted() {
    this.fetchReviews();
  },

  methods: {
    fetchReviews() {
      axios
        .get('http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/users/reviews')
        .then(response => {
          this.user = response.data.user;
          this.reviews = response.data.reviews;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  text-align: center;
}

h3 {
  margin-bottom: 20px;
  text-align: center;
}

.user-profile {
  margin-bottom: 20px;
  text-align: center;
}

.review {
  margin-bottom: 10px;
  text-align: center;
}
</style>
