

<template>
    <div class="row justify-content-center my-2 py-5">

        <!-- Image Section -->
        <ProductImagesSectionComp :file_name="file_name" />

        <!-- Indormation Section -->
        <ProductInformationSection :current_item="current_item"/>

        <!-- Product Description -->
        <ProductDescriptionSection/>

        <!-- Blog Section -->
        <ProductBlogSection/>

        <!-- Recomended Section-->
        <RecomendedSection/>


    </div>
</template>

<script setup>

import { ref, onMounted, defineAsyncComponent, onErrorCaptured,} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ProductBlogSection from '../layouts/ProductItem/ProductBlogSection.vue';
import RecomendedSection from '../layouts/ProductItem/RecomendedSection.vue';
import ProductImagesSectionComp from '../layouts/ProductItem/ProductImagesSectionComp.vue';
import ProductInformationSection from '../layouts/ProductItem/ProductInformationSection.vue';
import ProductDescriptionSection from '../layouts/ProductItem/ProductDescriptionSection.vue';

let isOpen = ref(false);

const route = useRoute();
const store = useStore();


let current_item = ref(null);
const file_name = ref('');

onMounted(async ()=>{
    await store.dispatch('LOAD_ONE_DATA', {id: route.params.id, catalog: route.query.catalog});
    current_item.value = store.getters["GETPRODUCTITEM"];
    file_name.value = 'http://localhost:3000/'+current_item?.value?.file;
})
</script>

<style>

    

</style>