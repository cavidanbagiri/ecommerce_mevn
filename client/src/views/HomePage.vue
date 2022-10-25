
<template>
    <div>
        <button class="btn btn-primary" @click="getfriends">
            Click Me For Getting Friends
        </button>

        <CarouselComp />
        <CatalogMain />

        <DesignBrandsComp />

        <ProductHomeSideComp :products="products" />

        <div style="height:200px">

        </div>


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

const getfriends = () => {

    console.log('clickd');
    axios.get('http://localhost:3000/users/friends',{
            headers: {
                Authorization:'Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiYmFza2V0IjoiaW5pdCIsIl9pZCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJjcmVhdGVkQXQiOiJpbml0IiwidXBkYXRlZEF0IjoiaW5pdCJ9LCJzdGF0ZXMiOnsiZGVmYXVsdCI6e30sImluaXQiOnsiX2lkIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsImJhc2tldCI6dHJ1ZSwiY3JlYXRlZEF0Ijp0cnVlLCJ1cGRhdGVkQXQiOnRydWV9fX0sInNraXBJZCI6dHJ1ZX0sIiRpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX2lkIjoiNjM1MGZjZDI1OGI0ZTQzMGM3OGJhMWVkIiwiZW1haWwiOiJjYXZpZGFuYmFnaXJpQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNTdhNDk2NWI3N2Y0MTlkN2EyNjAzNjAxNmMxMzIwOWY5MzVlNjAyZTRkZDhhNmUyMGJlMGVkMTEzZDZlNzg0MyIsImJhc2tldCI6WyI2MzQyOGMyYzhiMWNmOGI2YzA1MDJhODMiLCI2MzQyOGY0ZThiMWNmOGI2YzA1MDJhYWIiXSwiY3JlYXRlZEF0IjoiMjAyMi0xMC0yMFQwNzo0NjoyNi4wOTRaIiwidXBkYXRlZEF0IjoiMjAyMi0xMC0yMFQxODoyNTozNC4yMTBaIn0sImlhdCI6MTY2NjcyODg0OCwiZXhwIjoxNjY3MzMzNjQ4fQ.oKmoy0OTEfYjVtzerAtGfJU3C7QcdG2oJFz6q84U3jY'
            }
        }
    ).then((respond) => {
        console.log(respond.data);
    }).catch((err) => {
        console.log('err : ', err);
    })
}


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