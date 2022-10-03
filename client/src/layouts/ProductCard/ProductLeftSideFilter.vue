
<template>
    <div class="col-md-3 ">
        <!-- Filter Text Section -->
        <div class="my-2"><span class="text-4xl flex pb-2 fw-bold rounded-t-lg border-b border-gray-300">Filters</span>
        </div>
        <!-- Filter Sex Section-->
        <div class="my-2">
            <h3 class="mb-2 mt-3 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Sex</h3>
            <ul
                class=" text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="man" type="checkbox" name="man" v-model="sex_clicked.Man"  @change="checkedSex"
                            class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="man"
                            class="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-black-300">Man</label>
                    </div>
                </li>
                <li class="w-full dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="woman" type="checkbox" value="" v-model="sex_clicked.Woman"  @change="checkedSex"
                            class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="woman"
                            class="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-black-300">Woman</label>
                    </div>
                </li>
                <li class="w-full dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="unisex" type="checkbox" value=""
                            class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="unisex"
                            class="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-black-300">Unisex</label>
                    </div>
                </li>
                <li class="w-full  dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="child" type="checkbox" value=""
                            class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="child"
                            class="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-black-300">Child</label>
                    </div>
                </li>
                <pre>{{sex_clicked}}</pre>
            </ul>
        </div>

        <hr>
        <!-- Brand Filter Section Checkbox-->
        <div class="my-2">
            <h3 class="mb-2 mt-3 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Brands</h3>
            <ul class=" text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li v-for="(brand, index) in brands" :key="index" class="w-full dark:border-gray-600">
                    <ProductLeftSideFilterItem :brand="brand" 
                    @checkedBrand="checkedBrands" 
                    @unCheckedBrand="unCheckedBrands"
                     />
                </li>
            </ul>
        </div>

    </div>
</template>
<script setup>

import ProductLeftSideFilterItem from './ProductLeftSideFilterItem.vue';

import { allFilteredFunction } from '../../composables/LeftSideFilteredComposables/LeftSideFilteredComposobles';

let {brands, sex_clicked, checkedBrands, unCheckedBrands, checkedSex } = allFilteredFunction();


</script>
