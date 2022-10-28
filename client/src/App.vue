
<template>
  <div>

    <NavbarComp />

    <router-view></router-view>

    <FooterComp/>

  </div>
</template>

<script setup>

  import NavbarComp from "./layouts/NavbarComp.vue";
  import FooterComp from './layouts/FooterComp.vue';
  

</script>