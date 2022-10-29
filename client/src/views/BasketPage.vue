
<template>
    <div>
        Basket Page
    </div>
    <pre>{{basket_product}}</pre>
</template>

<script setup>

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

onMounted(async()=>{
    await store.dispatch('GETBASKET');
})

let basket_product = computed(()=>{
    return store.getters['GETBASKETDATA'];
})


</script>
