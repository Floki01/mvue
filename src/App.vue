<template>
  <MyNavbar></MyNavbar>
  <RouterView></RouterView>
</template>

<script>
import MyNavbar from './components/MyNavbar.vue';
export default {
  components:{
    MyNavbar
  }
};
</script>
