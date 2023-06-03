<template>
    <div class="review-card">
    <div class="review-card-content">
      <div class="review-image">
        <img :src="review.product.images[0]" alt="Imagen del producto">
      </div>
      <div class="review-details">
        <h4>{{ review.product.name }}</h4>
        <p>{{ review.review }}</p>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'ReviewCard',
    props: {
      review: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .review-card {
  width: 50%; 
  margin: 10px;
  padding: 20px;
  text-align: center;
  border: 1px solid #e2e0e0;
  border-radius: 5px;
  background-color: #e9e8e8; 
  box-sizing: border-box;
}

.review-card-content {
  display: flex;
  align-items: center;
}

.review-image {
  width: 30%;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
  
}

.review-image img {
  width: 100%;
  height: auto;
}

.review-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
  </style>
  