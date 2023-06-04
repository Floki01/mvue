<template>
  <div v-if="reviews.length">
    <div v-for="(a, i) in reviews" :key="i" class="container m-5">
      <div class="row border shadow">
        <div class="col-3">
          <img :src="a.user.photo" class="img-thumbnail" />
        </div>
        <div class="col m-4">
          <h3>{{ a.user.name }}</h3>
          <p class="h5 m-2">{{ a.review }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="m-5" v-else>
    <span class="p-5 h1">Sin reviews</span>
  </div>
</template>

<script>
export default {
  props: {
    reviews: [],
  },
};
</script>

<style scoped>
img {
  height: 100%;
  width: 50%;
}
</style>