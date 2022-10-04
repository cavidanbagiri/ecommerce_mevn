

<template>
    <!-- Recomended Pages-->
    <div class="col-md-8">
        <h1 class="text-start text-5xl f2-bold fw-bold mt-5">Recomended</h1>
        <ProductMainSide />
    </div>

</template>

<script setup>

import { defineAsyncComponent } from 'vue';
const ProductMainSide = defineAsyncComponent(() => import('../../layouts/ProductCard/ProductMainSide.vue'));



</script>
