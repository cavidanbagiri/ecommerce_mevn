
<template>
    <div class="row flex justify-content-between p-1 m-0">
        <div v-for="product in products" :key="product?.id" class="card border-none border-bottom mx-2" style="width: 15rem;">
            <ProductMainSideCardItem :product="product" />
        </div>
    </div>
</template>
<script setup>

import ProductMainSideCardItem from './ProductMainSideCardItem.vue';

import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(async() => {
    await store.dispatch('LOAD_ALL_PERFUMES');
})

let products = computed(()=>{
    
    return store.getters['GETALLPERFUMES']

});

</script>