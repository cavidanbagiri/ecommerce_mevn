
<template>
    <div class="col-md-8">
        <span class="text-4xl fw-bold ps-4" >Fragrances</span>
        <div class="row flex justify-content-between p-1 m-0">
        <div v-for="product in products" :key="product?.id" class="card border-none border-bottom mx-2" style="width: 14rem;">
            <ProductMainSideCardItem :product="product" />
        </div>
    </div>
    </div>
</template>

<script setup>


import { computed } from 'vue';
import { useStore } from 'vuex';
import ProductMainSideCardItem from './ProductMainSideCardItem.vue';


const store = useStore();


let products = computed(()=>{
    
    if(store.getters['GETFILTEREDPERFUMES'].length > 0){
        console.log('if enter');
        return store.getters['GETFILTEREDPERFUMES']
    }else{
        console.log('else enter');
        return store.getters['GETALLPERFUMES'];
    }

})


</script>