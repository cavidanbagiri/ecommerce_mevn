
<template>

    <div class="row flex justify-content-center mt-2">
        
        <Suspense>
            <template #default>
                <ProductLeftSideFilter/>
            </template>
            <template #fallback> 
                <h1>load</h1>
            </template>
        </Suspense>

        <Suspense>
            <template #default>
                    <ProductMainSide />
            </template>
            <template #fallback>
                <h1>load</h1>
            </template>
        </Suspense>

    </div>

</template>

<script setup>

import { onMounted, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';

import LoadingCompVue from '../components/Design/LoadingComp.vue';

const ProductLeftSideFilter  = defineAsyncComponent({
    loader: ()=>import('../layouts/ProductCard/ProductLeftSideFilter.vue'),
    loadingComponent:LoadingCompVue,
    timeout: 3000
}) ;

const ProductMainSide = defineAsyncComponent({
    loader: ()=>import('../layouts/ProductCard/ProductMainSide.vue'),
    loadingComponent:LoadingCompVue,
    timeout: 3000
}) ;


const store = useStore();

onMounted(async()=>{
    await store.dispatch('LOAD_ALL_PRODUCTS','accessories');
})


</script>
