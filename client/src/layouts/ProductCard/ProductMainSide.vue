
<template>
    <div class="col-md-8">
        <span class="text-4xl fw-bold ps-4" >Fragrances</span>
        <div class="row flex justify-content-between p-1 m-0">
        <div v-for="product in products" :key="product?.id" class="card border-none border-bottom mx-2" style="width: 14rem;">
            <ProductCardMainItem :product="product" />
        </div>
    </div>
    </div>
</template>

<script setup>

import axios from 'axios';
import {ref, onMounted} from 'vue';
import ProductCardMainItem from './ProductCardMainItem.vue';

let products = ref([]);

onMounted(()=>{
    axios.get('http://localhost:3000/perfumes').
    then((respond)=>{
        products.value = respond.data;
        console.log('products is : ', products);
    }).catch((err)=>{
        console.log('Error Happen inside Of Perfume get Page : ', err);
    })
})

</script>
