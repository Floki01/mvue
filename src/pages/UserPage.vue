<template>
    <div>
      <h1>Página de usuario</h1>
      <UserProfile />
    </div>
  </template>
  
  <script>
  import UserProfile from '@/components/Usuario.vue';
  import MyNavbar  from '@/components/MyNavbar.vue';
  
  export default {
    components: {
      UserProfile,
      MyNavbar 
    }
  };
  </script>
  