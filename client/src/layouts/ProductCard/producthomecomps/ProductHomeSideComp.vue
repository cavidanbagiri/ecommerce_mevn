<template>
    <div class=" flex justify-content-center">
        <div class="col-md-10 m-0">
            <div class="row flex justify-content-between p-1 m-0">
                <div v-for="(product, index) in props.products" :key="index" class="card border-none mx-1"
                    style="width: 15rem;">
                    <ProductMainSideCardItem :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {defineProps} from 'vue';
import ProductMainSideCardItem from '../ProductMainSideCardItem.vue';

const props = defineProps(['products']);

</script>