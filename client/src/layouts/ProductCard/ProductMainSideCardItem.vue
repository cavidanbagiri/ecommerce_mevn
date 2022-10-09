<template>
    <router-link :to="{name:'ProductItem',params:{id:`${props?.product?._id}`},query:{catalog:`${props?.product?.catalog}`}}">
        <div class="mt-5 shadow-md" >
        <!-- <img :src="file_name" class="card-img-top mt-5" alt="..."> -->
        <img :src="`http://localhost:3000/${props?.product?.file}`" class="card-img-top " style="height: 14rem;object-fit: contain;" alt="...">
        <div class="card-body">
            <h5 class="card-title text-md fw-bold" style="height:3rem; overflow: hidden;">{{props?.product?.brand}}</h5>
            <p class="card-text text-sm py-1" style="font-family: Georgia, serif;height:4rem; overflow: hidden;">{{props?.product?.name}}</p>
            <div class="d-flex justify-content-between">
                <span class="card-text text-sm px-0 fw-bold py-1">{{props?.product?.actualprice}} ₽ 
                    <s class="ps-1 text-xs text-gray-400">{{props?.product?.withoutpercentprice}} ₽</s>
                    <span class="ms-3 text-xs bg-green-400 text-white">{{props?.product?.percentprice}}%</span>
                </span>
            </div>
            <a href="#" class="btn btn-dark btn-sm my-1">Add Wishlist</a>
        </div>
    </div>
    </router-link>
</template>

<script setup>

    const props = defineProps(['product']);

</script>