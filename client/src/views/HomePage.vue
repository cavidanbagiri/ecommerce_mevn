
<template>
    <div>

        <CarouselComp />
        <CategoriesMain />
        <div class="row flex justify-content-space p-1 m-0">
            <div v-for="product in products" :key="product?.id" class="card border-none border-bottom mx-2"
                style="width: 14rem;">
                <img src="../assets/parfume_images/terre_hermes.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-md fw-bold">{{product?.brand}}</h5>
                    <p class="card-text text-md py-1">{{product?.name}}</p>
                    <p class="card-text text-sm fw-bold py-1">{{product?.price}} RUB</p>
                    <a href="#" class="btn btn-dark btn-sm my-1">Add Wishlist</a>
                </div>
            </div>
        </div>

        <div style="height:200px">

        </div>


    </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import CarouselComp from "../components/Design/CarouselComp.vue";
import CategoriesMain from "../components/Design/CategoriesMain.vue";
import axios from 'axios';

let products = ref([]);

onMounted(() => {
    axios({
        method: 'get',
        url: 'http://localhost:3000'
    }).then((respond) => {
        products.value = respond.data;
        console.log(products.value[0]);
        console.log(products.value[1]);
        console.log(products.value[2]);
    }).catch((err) => {
        console.log('axios index ', err);
    })
})

</script>