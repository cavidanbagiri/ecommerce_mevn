
<template>
    <div class="row flex justify-content-evenly p-1 m-0">
        <div v-for="product in products" :key="product?.id" class="card border-none border-bottom mx-2" style="width: 15rem;">
            <ProductCardMainItem :product="product" />
        </div>
    </div>
</template>
<script setup>

import axios from 'axios';
import { ref, onMounted } from 'vue';
import ProductCardMainItem from './ProductCardMainItem.vue';

let products = ref([]);

onMounted(async() => {
    await axios({
        method: 'get',
        url: 'http://localhost:3000/'
    }).then((respond) => {
        products.value = respond.data;
    }).catch((err) => {
        console.log('axios index ', err);
    })
})

</script>