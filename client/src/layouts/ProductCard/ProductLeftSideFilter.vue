
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
        
        <!----------------------------------------------------------------     MakeUp Sides                                            -->
        <!-- Department Filter Section-->
        <div class="my-2">
            <h3 v-if="departments.size>1" class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Departments size </h3>
            <div v-for="(department, index) in departments" :key="index" class="w-full dark:border-gray-600">
                <div v-if="department">
                    <ProductLeftSideFilterItem :itemname="department" item="department"
                        @filteredName="filteredName" 
                        @unFilteredName="unFilteredName"
                    />
                </div>
            </div>
        </div>
        <!-- Formulations Filter Section Checkbox -->
        <div class="my-2">
            <h3 v-if="formulations.size>1" class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Formulations</h3>
            <div v-for="(formulation, index) in formulations" :key="index" class="w-full dark:border-gray-600">
                <div v-if="formulation">
                    <ProductLeftSideFilterItem :itemname="formulation" item="formulation"
                        @filteredName="filteredName" 
                        @unFilteredName="unFilteredName"
                    />
                </div>
            </div>
        </div>

        <!----------------------------------------------------------------    Accessories Sides                                            -->
        <!-- Styles Filter Section Checkbox-->
        <div class="my-2">
            <h3  v-if="styles.size>1"  class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Styles</h3>
            <div v-for="(style, index) in styles" :key="index" class="w-full dark:border-gray-600">
                <div v-if="style">
                    <ProductLeftSideFilterItem :itemname="style" item="style"
                        @filteredName="filteredName" 
                        @unFilteredName="unFilteredName"
                    />
                </div>
            </div>
        </div>
        <!-- Styles Filter Section Checkbox-->
        <div class="my-2">
            <h3  v-if="materials.size>1"  class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Materials</h3>
            <div v-for="(material, index) in materials" :key="index" class="w-full dark:border-gray-600">
                <div v-if="material">
                    <ProductLeftSideFilterItem :itemname="material" item="material"
                        @filteredName="filteredName" 
                        @unFilteredName="unFilteredName"
                    />
                </div>
            </div>
        </div>
        <!-- Closure Filter Section Checkbox-->
        <div class="my-2">
            <h3  v-if="closuretypes.size>1"  class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Closuretype</h3>
            <div v-for="(closuretype, index) in closuretypes" :key="index" class="w-full dark:border-gray-600">
                <div v-if="closuretype">
                    <ProductLeftSideFilterItem :itemname="closuretype" item="closuretype"
                        @filteredName="filteredName" 
                        @unFilteredName="unFilteredName"
                    />
                </div>
            </div>
        </div>
        <!-- Styles Filter Section Checkbox-->
        <div class="my-2">
            <h3  v-if="linningdescriptions.size>1"  class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Linning Descriptions</h3>
            <div v-for="(linningdescription, index) in linningdescriptions" :key="index" class="w-full dark:border-gray-600">
                <div v-if="linningdescription">
                    <ProductLeftSideFilterItem :itemname="linningdescription" item="linningdescription"
                        @filteredName="filteredName" 
                        @unFilteredName="unFilteredName"
                    />
                </div>
            </div>
        </div>
        

    </div>
</template>
<script setup>

import ProductLeftSideFilterItem from './ProductLeftSideFilterItem.vue';
import { useRoute } from 'vue-router';
import { allFilteredFunction } from '../../composables/LeftSideFilteredComposables/LeftSideFilteredComposobles';

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
