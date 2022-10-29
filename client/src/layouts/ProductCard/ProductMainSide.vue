
<template>
    <div class="col-md-10 m-0">
        <div class="row flex justify-content-between p-1 m-0">
        <div v-for="(product, index) in products" :key="index" class="card border-none mx-1" 
        style="width: 14rem;">
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
    
    if(store.getters['GETFILTEREDRESULT']?.length!==0){
        return store.getters['GETFILTEREDRESULT']
    }
    else{
        return store.getters['GETALLPRODUCTS'];
    }

})


</script>