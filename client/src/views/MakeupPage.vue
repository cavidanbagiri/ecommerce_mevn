
<template>
    <div class="row flex justify-content-center mt-2">
        <ProductLeftSideFilter/>
        <ProductMainSide />
    </div>
</template>

<script setup>

import ProductLeftSideFilter from '../layouts/ProductCard/ProductLeftSideFilter.vue';
import ProductMainSide from '../layouts/ProductCard/ProductMainSide.vue';

import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(async()=>{
    await store.dispatch('LOAD_ALL_PRODUCTS','makeup');
})


</script>
