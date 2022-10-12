
<template>
    <div class="col-md-2 m-0">
        <!-- Filter Text Section -->
        <div class="my-2"><span class="text-4xl flex p-2 fw-bold rounded-t-lg border-b border-gray-300">Filters</span>
        </div>
        
        <!-- Brand Filter Section Checkbox-->
        <div class="my-2">
            <h3 class="mb-2 mt-3  p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Brands</h3>
            <ul class=" text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li v-for="(brand, index) in brands" :key="index" class="w-full dark:border-gray-600">
                    <ProductLeftSideFilterItem :itemname="brand" item="brand"
                    @filteredName="filteredName" 
                    @unFilteredName="unFilteredName"
                     />
                </li>
            </ul>
        </div>
       
        <!----------------------------------------------------------------    Makeup Sides                                            -->
        <ProductLeftSideMakeup :departments="departments" :formulations="formulations" 
            @filteredName="filteredName" @unFilteredName="unFilteredName"/>
    
        <!----------------------------------------------------------------    Accessories Sides                                            -->
        <ProductLeftSideAccessories :styles="styles" :materials="materials" 
            :closuretypes="closuretypes" 
            :linningdescriptions="linningdescriptions"
            @filteredName="filteredName" @unFilteredName="unFilteredName"/>


    </div>
</template>
<script setup>

import ProductLeftSideFilterItem from './ProductLeftSideFilterItem.vue';
import { useRoute } from 'vue-router';
import { allFilteredFunction } from '../../composables/LeftSideFilteredComposables/LeftSideFilteredComposobles';
import ProductLeftSideMakeup from './eachpagefolder/ProductLeftSideMakeup.vue';
import ProductLeftSideAccessories from './eachpagefolder/ProductLeftSideAccessories.vue';

const route = useRoute();
let current_path = route.path
let {
    brands,//All Products 
    departments,//Make Up
    formulations,//Make Up
    styles,//Accessories
    materials,//Accessories
    closuretypes,//Accessories
    linningdescriptions,//Accessories
    filteredName,//All Filtered Clicked
    unFilteredName//All Filtered Clicked
} = allFilteredFunction(current_path);

</script>
