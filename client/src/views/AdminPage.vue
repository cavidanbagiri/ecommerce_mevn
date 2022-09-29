
<template>
    <div>
        <form @submit="addProduct">

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
const sex_options = ref(['Man','Woman','Child'])
const category_selected = ref('Perfume')
const category_options = ref(['Perfume','Makeup','Accessories','Skin Care', 'Hair Care']);

//Create product reactive
const product = reactive({
    brand: null,
    catalog: category_selected,
    name: null,
    raiting: null,
    price: null,
    sex: sex_selected,
});

const addProduct = () => {
    axios({
        method: 'post',
        url: 'create',
        data: {
            brand: product.brand,
            catalog: product.catalog,
            name: product.name,
            raiting: product.raiting,
            price: product.price,
            sex: product.sex,
        },
    }).then((res) => {
        console.log('axios post ', res);
    }).catch((err) => {
        console.log('axios post', err);
    })
}

</script>
