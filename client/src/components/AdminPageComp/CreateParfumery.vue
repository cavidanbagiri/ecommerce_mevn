<template>

<div class="container">
    <p>Perfume</p>
    <form @submit="addProduct" enctype="multipart/form-data">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <!-- Product Brand-->
            <div>
                <label for="brand"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Brand</label>
                <input type="text" id="brand" v-model="product.brand" placeholder="Brand"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="">
            </div>
            <!-- Produc Name-->
            <div>
                <label for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                <input type="text" id="name" v-model="product.name" placeholder="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="">
            </div>
            <!-- Product Price-->
            <div>
                <label for="price"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                <input type="text" id="price" v-model="product.price" placeholder="price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="">
            </div>
            <!-- Product For-->
            <div>
                <label for="for" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">For</label>
                <input type="tel" id="for" v-model="product.for" placeholder="for"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="">
            </div>

            <!-- Product FragranceFormat-->
            <div>
                <label for="fragranceformat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fragrance Format</label>
                <input type="tel" id="fragranceformat" v-model="product.fragranceformat" placeholder="fragranceformat"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="">
            </div>

            <!-- Product FragranceScent-->
            <div>
                <label for="fragrancescent" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fragrance Scent</label>
                <input type="tel" id="fragrancescent" v-model="product.fragrancescent" placeholder="fragrancescent"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="">
            </div>

            <!-- Product FragranceMaterialFeatures-->
            <div>
                <label for="for" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fragrance Material Features</label>
                <input type="tel" id="fragrancematerialfeatures" v-model="product.fragrancematerialfeatures" placeholder="fragrancematerialfeatures"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="">
            </div>

            <!-- Product Description -->
            <div>
                <label for="description" class="form-label inline-block mb-2 text-gray-700"> Product Informetion</label>
                <textarea  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="description" rows="3" v-model="product.description" placeholder="Description"></textarea>
            </div>
            <!-- Product Charasteristic-->
            <div>
                <label for="characteristic" class="form-label inline-block mb-2 text-gray-700"> Product Characteristic</label>
                <textarea  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="characteristic" rows="3" v-model="product.characteristic" placeholder="Characteristic"></textarea>
            </div>
        </div>
        <!-- Product Information-->
        <div class="mb-6">
            <label for="information" class="form-label inline-block mb-2 text-gray-700"> Product Information</label>
                <textarea  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="information" rows="3" v-model="product.information" placeholder="Information"></textarea>
        </div>
        <!-- Sex Option -->
        <label for="sex" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sex</label>
        <select id="sex" v-model="sex_selected" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="option in sex_options" :value="option">
                {{option}}
            </option>
        </select>
        <!-- File Selection -->
        <input type="file" ref="selected_file" @change="fileSelect">
        <!-- Add Image -->
        <input @click="addProduct" value="Add Product"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    </form>
</div>

</template>

<script setup>

import { ref, reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const sex_options = ref(['Man', 'Woman', 'Child'])
const sex_selected = ref('Man')

let file = ref(null);
let selected_file = ref(null);
const fileSelect = () => {
    file.value = selected_file.value.files[0];
}

//Create product reactive
const product = reactive({
    brand: null,
    catalog: 'Perfume',
    name: null,
    price: null,
    sex: sex_selected,
    for: null,
    fragranceformat : null,
    fragrancescent : null,
    fragrancematerialfeatures : null,
    stock : true,
    description: null,
    characteristic: null,
    information: null,
});

const addProduct = async () => {
    console.log('add clicked');
    const formData = new FormData();
    formData.append('file', file.value);
    formData.append('brand', product.brand);
    formData.append('catalog', product.catalog);
    formData.append('name', product.name);
    formData.append('raiting', product.raiting);
    formData.append('price', product.price);
    formData.append('sex', product.sex);
    formData.append('for', product.for);
    formData.append('fragranceformat', product.fragranceformat);
    formData.append('fragrancescent', product.fragrancescent);
    formData.append('fragrancematerialfeatures', product.fragrancematerialfeatures);
    formData.append('stock', product.stock);
    formData.append('description', product.description);
    formData.append('characteristic', product.characteristic);
    formData.append('information', product.information);    
    store.dispatch('CREATE_DATA', formData);
}



</script>


