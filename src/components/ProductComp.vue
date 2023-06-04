<template>
  <div class="container">
    <div class="row">
      <div class="col-9">
        <div class="row p-5">
          <div class="col justify-content-center">
            <img :src="product.images" />
          </div>
        </div>
        <div class="row">
          <span class="h4">{{ product.name }}</span>
        </div>
        <div class="row">
          <span>{{ product.description }}</span>
        </div>
        <div class="row p-3">
          <span class="h4">${{ product.price }}</span>
        </div>
      </div>
      <div class="col">
         <!-- Asi deberia ser, pero me da un error al usar los parametros de user -->
        <!-- <div class="row p-5"><img :src="product.user.photo" class="userImg"></div>
        <div class="row">{{ product.user.name }}</div>
        <div class="row">{{ product.user.city }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: [],
  },
};
</script>

<style scoped>
img {
  height: 400px;
  width: 50%;
}

.userImg{
  height: 200px;
  width: 100%;
}
</style>