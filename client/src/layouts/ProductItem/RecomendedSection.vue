

<template>
    <!-- Recomended Pages-->
    <div class="col-md-8">
        <h1 class="text-start text-5xl f2-bold fw-bold mt-5">Recomended</h1>
        <ProductMainSideCard />
    </div>

</template>

<script setup>

import { defineAsyncComponent } from 'vue';
const ProductMainSideCard = defineAsyncComponent(() => import('../../layouts/ProductCard/ProductMainSideCard.vue'));



</script>
