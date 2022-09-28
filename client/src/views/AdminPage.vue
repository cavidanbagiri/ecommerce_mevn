
<template>
    <div>
        <form @submit="addProduct">

            <input type="text" v-model="product.brand" placeholder="brand">
            <input type="text" v-model="product.catalog" placeholder="catalog">
            <input type="text" v-model="product.name" placeholder="name">
            <input type="text" v-model="product.raiting" placeholder="raiting">
            <input type="text" v-model="product.price" placeholder="price">
            <input type="text" v-model="product.sex" placeholder="sex">
            <input class="btn btn-danger text-dark" @click="addProduct" value="Add Product">

            <pre>{{product}}</pre>

        </form>
    </div>
</template>

<script setup>

    import axios from 'axios';
import {ref, reactive} from 'vue';

    //Create product reactive
    const product = reactive({
        brand:null,
        catalog:null,
        name:null,
        raiting:null,
        price:null,
        sex:null,
    });

    const addProduct = () => {
        axios({
            method:'post',
            url:'http://localhost:3000/create',
            data:{
                brand:product.brand,
                catalog:product.catalog,
                name:product.name,
                raiting:product.raiting,
                price:product.price,
                sex:product.sex,
            },
        }).then((res)=>{
            console.log('axios post ',res);
        }).catch((err)=>{
            console.log('axios post',err);
        })
    }

</script>
