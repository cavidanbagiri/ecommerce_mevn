

<template>
    <div>
        
            Product Item {{id}}

    </div>
</template>

<script setup>

import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

let id = ref('');

id.value = route.params.id;



</script>
