<template>
    <router-link :to="{name:'ProductItem',params:{id:`${props?.product?._id}`}}">
        <div>
        <img :src="file_name" class="card-img-top mt-5" alt="...">
        <div class="card-body">
            <h5 class="card-title text-md fw-bold">{{props?.product?.brand}}</h5>
            <p class="card-text text-sm fw-bold py-1">{{props?.product?.name}}</p>
            <div class="d-flex justify-content-between">
                <span class="card-text text-sm px-0 fw-bold py-1">{{props?.product?.price}}R 
                    <s class="ps-1 text-xs text-gray-400"> {{10000}}RUB</s>
                    <span class="ms-3 text-xs bg-danger text-white">15%</span>
                </span>
            </div>
            <a href="#" class="btn btn-dark btn-sm my-1">Add Wishlist</a>
        </div>
    </div>
    </router-link>
</template>

<script setup>

    import { ref } from 'vue';

    const props = defineProps(['product']);

    const file_name = ref('');
    file_name.value = 'http://localhost:3000/'+props?.product?.file;

    

</script>