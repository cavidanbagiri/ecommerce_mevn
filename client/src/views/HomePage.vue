
<template>
    <div>
        <CarouselComp />
        <CatalogMain />

        <DesignBrandsComp />

        <ProductHomeSideComp :products="products" />

    </div>
</template>

<script setup>

import CarouselComp from "../components/Design/CarouselComp.vue";
import CatalogMain from "../components/Design/CatalogMain.vue";
import { onErrorCaptured, ref, onMounted, computed } from "vue";
import { useStore } from 'vuex';
import DesignBrandsComp from "../layouts/DesignComponents/DesignBrandsComp.vue";
import ProductHomeSideComp from "../layouts/ProductCard/producthomecomps/ProductHomeSideComp.vue";
import axios from 'axios';
const store = useStore();


onMounted(() => {
    store.dispatch('LOAD_ALL_PRODUCT_FOR_HOME');
})

let products = computed(() => {
    return store.getters['GETALLPRODUCTFORHOME'];
})



const err = ref(null);
const returnerr = onErrorCaptured((e) => {
    err.value = e;
    return true;
})



</script>