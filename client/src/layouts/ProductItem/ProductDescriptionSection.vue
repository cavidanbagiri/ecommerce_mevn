
<template>
    <div class="col-md-8 mt-5">
        
        <button @click="onchangedesc" class="ms-1 border p-1 rounded-sm bg-gray-200 text-sm fw-bold" >Product Description</button>
        <button @click="onchangechar" class="ms-3 border p-1 rounded-sm bg-gray-200 text-sm fw-bold" >Product Charestic</button>

        <hr class="mt-2">
        <div class="py-4" >
            <component :is="tabs[current_tab]"></component>
        </div>
        <hr class="mt-2">

    </div>
</template>

<script setup>

import ProductDescriptionTab from "./ProductDescriptionTab.vue";
import ProductCharesticTab from "./ProductCharesticTab.vue";
import {ref} from 'vue';

const current_tab = ref('ProductDescriptionTab');
const tabs = {ProductDescriptionTab,ProductCharesticTab};


const onchangedesc = () => {
    current_tab.value = 'ProductDescriptionTab'
}
const onchangechar = () => {
    current_tab.value = 'ProductCharesticTab'
}

</script>
