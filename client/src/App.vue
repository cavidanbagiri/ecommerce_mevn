
<template>
  <div>

    <NavbarComp />

    <router-view></router-view>


  </div>
</template>

<script setup>

import NavbarComp from "./layouts/NavbarComp.vue";
import HomePage from "./views/HomePage.vue";

</script>