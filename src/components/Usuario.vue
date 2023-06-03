<template>
  <div>
    <my-navbar></my-navbar>
    <div class="user-profile">
      <div class="user-avatar-container">
        <div class="user-avatar">
          <img :src="user.photo" alt="Imagen de usuario">
        </div>
      </div>
      <h3>{{ user.name }}</h3>
      <p>{{ user.city }}</p>
      <p>{{ user.bio }}</p>
    </div>

    <h3>Reseñas creadas por {{ user.name }} ({{ reviews.length }})</h3>

    <div class="review-cards">
      <review-card v-for="review in reviews" :key="review._id" :review="review"></review-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MyNavbar from "@/components/MyNavbar.vue";
import ReviewCard from "@/components/ReviewCard.vue";

export default {
  name: 'UsuarioProfile',
  components: {
    MyNavbar,
    ReviewCard
  },
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

        .get('http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/users/647178286edc199bff73e81f/reviews')
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
h3 {
  text-align: center;
}

.user-profile {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;

}

.user-avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.user-avatar {
  width: 150px; 
  height: 150px; 
  border-radius: 50%;
  overflow: hidden;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.review-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
