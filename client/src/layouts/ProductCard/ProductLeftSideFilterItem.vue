

<template>
    <div>
        <div class="flex items-center pl-3">
            <input :id="brand" type="checkbox" name="{{brand}}" v-model="checked" @change="checkCondition" 
                class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label :for="brand"
                class="py-2 ml-2 w-full text-base font-medium text-gray-700 dark:text-black-300">{{brand}}</label>
        </div>
    </div>
</template>

<script setup>

    import { defineProps, ref, defineEmits } from 'vue';
    
    const props = defineProps(['brand']);
    const emit = defineEmits(['checkedBrand','unCheckedBrand']);

    let checked = ref(false);

    const checkCondition = () => {
        if(checked.value){
            emit('checkedBrand', props.brand);
        }
        else{
            emit('unCheckedBrand', props.brand);
        }
    }


</script>
