<template>
    <div>
        <img src="../../assets/parfume_images/terre_hermes.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-md fw-bold">{{props?.product?.brand}}</h5>
            <p class="card-text text-md py-1">{{props?.product?.name}}</p>
            <div class="d-flex justify-content-between">
                <p class="card-text text-sm fw-bold px-0 py-1">{{props?.product?.price}} R <s
                        class="ps-4 text-slate-500">{{10000}}RUB</s></p>
            </div>
            <a href="#" class="btn btn-dark btn-sm my-1">Add Wishlist</a>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps(['product']);

</script>