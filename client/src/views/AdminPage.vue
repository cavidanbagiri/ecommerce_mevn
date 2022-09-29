
<template>
    <div>
        <form @submit="addProduct" enctype="multipart/form-data">

            <input type="text" v-model="product.brand" placeholder="brand">
            <select v-model="category_selected">
                <option v-for="option in category_options" :value="option">
                    {{option}}
                </option>
            </select>
            <input type="text" v-model="product.name" placeholder="name">
            <input type="text" v-model="product.raiting" placeholder="raiting">
            <input type="text" v-model="product.price" placeholder="price">
            <select v-model="sex_selected">
                <option v-for="option in sex_options" :value="option">
                    {{option}}
                </option>
            </select>
            <input type="file" ref="selected_file" @change="fileSelect">
            <input class="btn btn-danger text-dark" @click="addProduct" value="Add Product">

            <pre>{{product}}</pre>
            <p>{{sex_selected}}</p>

        </form>
    </div>
</template>

<script setup>

import axios from 'axios';
import { ref, reactive } from 'vue';

const sex_selected = ref('Unisex')
const sex_options = ref(['Man', 'Woman', 'Child'])
const category_selected = ref('Perfume')
const category_options = ref(['Perfume', 'Makeup', 'Accessories', 'Skin Care', 'Hair Care']);
let selected_file = ref(null);
let file = ref(null);
const fileSelect = () => {
    file.value = selected_file.value.files[0];
}

//Create product reactive
const product = reactive({
    brand: null,
    catalog: category_selected,
    name: null,
    raiting: null,
    price: null,
    sex: sex_selected,
});

const addProduct = async () => {
    const formData = new FormData();
    formData.append('file', file.value);
    formData.append('brand', product.brand);
    formData.append('catalog', product.catalog);
    formData.append('name', product.name);
    formData.append('raiting', product.raiting);
    formData.append('price', product.price);
    formData.append('sex', product.sex);
    
    
    axios.post("http://localhost:3000/create", formData).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });

    // axios.post("http://localhost:3000/create", formData).then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // });


    // await axios({
    //     method: 'post',
    //     url: 'http://localhost:3000/create',
    //     formData
    //     // formData
    //     // data: {
    //     //     brand: product.brand,
    //     //     catalog: product.catalog,
    //     //     name: product.name,
    //     //     raiting: product.raiting,
    //     //     price: product.price,
    //     //     sex: product.sex,
    //     //     file: formData
    //     // },
    // }).then((res) => {
    //     console.log('axios post ', res);
    // }).catch((err) => {
    //     console.log('axios post', err);
    // })
}

</script>
