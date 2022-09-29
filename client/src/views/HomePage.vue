
<template>
    <div>
        
        <CarouselComp />
        <CatalogMain />

        <span v-if="err">
            {{err}}
        </span>
        <Suspense v-else>
            <template #default>
                <ProductCardMainAsync />
            </template>
            <template #fallback>
                <h1>...Downloading</h1>
            </template>
        </Suspense>


        <div style="height:200px">

        </div>


    </div>
</template>

<script setup>

import CarouselComp from "../components/Design/CarouselComp.vue";
import CatalogMain from "../components/Design/CatalogMain.vue";
import { defineAsyncComponent, onErrorCaptured, ref } from "vue";

const err = ref(null);
const returnerr = onErrorCaptured((e)=>{
    err.value = e;
    return true;
})

const ProductCardMainAsync = defineAsyncComponent(() => import('../layouts/ProductCard/ProductCardMain.vue'));


</script>