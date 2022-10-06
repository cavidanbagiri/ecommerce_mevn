
<template>
    <div>
        
        <CarouselComp />
        <CatalogMain />

        <DesignBrandsComp/>

        <div style="height:200px">

        </div>


    </div>
</template>

<script setup>

import CarouselComp from "../components/Design/CarouselComp.vue";
import CatalogMain from "../components/Design/CatalogMain.vue";
import { onErrorCaptured, ref } from "vue";
import DesignBrandsComp from "../layouts/DesignComponents/DesignBrandsComp.vue";

const err = ref(null);
const returnerr = onErrorCaptured((e)=>{
    err.value = e;
    return true;
})



</script>