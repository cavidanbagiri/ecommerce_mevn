<template>

    <div class="container mb-5">
        <p>Accessories</p>

        

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
                <div class="row">
                    <!-- Actual Price -->
                    <div class="col-sm-4">
                        <label for="price"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Actual Price</label>
                        <input type="text" id="price" v-model="product.price" placeholder="price"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required="">
                    </div>
                    <!-- Percent Price -->
                    <div class="col-sm-4">
                        <label for="price"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Percent
                            Price</label>
                        <input type="text" id="price" v-model="product.price" placeholder="price"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required="">
                    </div>
                    <!-- Without Percent Price -->
                    <div class="col-sm-4">
                        <label for="price"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Without Percent
                            Price</label>
                        <input type="text" id="price" v-model="product.price" placeholder="price"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required="">
                    </div>
                </div>
                <!-- Product For-->
                <div>
                    <label for="for" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">For</label>
                    <input type="tel" id="for" v-model="product.for" placeholder="for"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="">
                </div>

                <!-- Product Material-->
                <div>
                    <label for="material" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Material</label>
                    <input type="tel" id="material" v-model="product.material" placeholder="material"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="">
                </div>

                
                <!-- Product Style-->
                <div>
                    <label for="style" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Style</label>
                    <input type="tel" id="style" v-model="product.style" placeholder="style"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="">
                </div>

                <!-- Product ClosureType-->
                <div>
                    <label for="closuretype" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Closuretype</label>
                    <input type="tel" id="closuretype" v-model="product.closuretype" placeholder="closuretype"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="">
                </div>

                <!-- Product FormFactor-->
                <div>
                    <label for="formfactor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">FormFactor</label>
                    <input type="tel" id="formfactor" v-model="product.formfactor" placeholder="formfactor"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="">
                </div>

                <!-- Product FormFactor-->
                <div>
                    <label for="linningdescription" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Linning Description</label>
                    <input type="tel" id="linningdescription" v-model="product.linningdescription" placeholder="linningdescription"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="">
                </div>

                <!-- Product WalletCompartment-->
                <div>
                    <label for="walletcompartment" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wallet Compartment</label>
                    <input type="tel" id="walletcompartment" v-model="product.walletcompartment" placeholder="walletcompartment"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="">
                </div>

                <!-- Product PoscketDescription-->
                <div>
                    <label for="pocketdescription" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pocket Description</label>
                    <input type="tel" id="pocketdescription" v-model="product.pocketdescription" placeholder="pocketdescription"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="">
                </div>

                <!-- Sex Option -->
                <div>
                    <label for="sex" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sex</label>
                    <select id="sex" v-model="sex_selected" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="option in sex_options" :value="option">
                            {{option}}
                        </option>
                    </select>
                </div>

                <!-- Product Description -->
                <div>
                    <label for="description" class="form-label inline-block mb-2 text-gray-700"> Product Informetion</label>
                    <textarea  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="description" rows="3" v-model="product.decription" placeholder="Description"></textarea>
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
    
    const sex_options = ref(['Man', 'Woman', 'Child'])
    const sex_selected = ref('Man')
    const store = useStore();
    let file = ref(null);
    let selected_file = ref(null);
    const fileSelect = () => {
        file.value = selected_file.value.files[0];
    }
    
    
    //Create product reactive
    const product = reactive({
        brand: null,
        catalog: 'Accessories',
        name: null,
        actualprice: null,
        percentprice: nul,
        withoutpercentprice: null,
        for: null,
        decription: null,
        characteristic: null,
        information: null,
        color:'Black',
        sex: sex_selected,
        material: null,
        style: null,
        closuretype: null,
        formfactor: null,
        linningdescription: null,
        walletcompartment: null,
        pocketdescription: null,
    });
    
    const addProduct = async () => {
        console.log('add clicked');
        const formData = new FormData();
        formData.append('file', file.value);
        formData.append('brand', product.brand);
        formData.append('catalog', product.catalog);
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('sex', product.sex);
        formData.append('material', product.material);
        formData.append('style', product.style);
        formData.append('closuretype', product.closuretype);
        formData.append('formfactor', product.formfactor);
        formData.append('linningdescription', product.linningdescription);
        formData.append('walletcompartment', product.walletcompartment);
        formData.append('pocketdescription', product.pocketdescription);
        formData.append('description', product.decription);
        formData.append('characteristic', product.characteristic);
        formData.append('information', product.information);    
        store.dispatch('CREATE_DATA', formData);
    }
    
    
    
    </script>
    
    
    