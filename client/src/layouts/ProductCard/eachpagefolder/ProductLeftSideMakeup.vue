

<template>
    <div>

        <div class="my-2">
            <h3 v-if="props.departments.size>1"
                class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Departments size </h3>
                <!-- <pre>{{props.departments}}</pre> -->
            <div v-for="(department, index) in props?.departments" :key="index" class="w-full dark:border-gray-600">
                <div v-if="department">
                    <ProductLeftSideFilterItem :itemname="department" item="department" @filteredName="filteredName"
                        @unFilteredName="unFilteredName" />
                </div>
            </div>
        </div>
        <!-- Formulations Filter Section Checkbox -->
        <div class="my-2">
            <h3 v-if="props.formulations.size>1"
                class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Formulations</h3>
            <div v-for="(formulation, index) in props?.formulations" :key="index" class="w-full dark:border-gray-600">
                <div v-if="formulation">
                    <ProductLeftSideFilterItem :itemname="formulation" item="formulation" @filteredName="filteredName"
                        @unFilteredName="unFilteredName" />
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>

    import ProductLeftSideFilterItem from '../ProductLeftSideFilterItem.vue';

    import {defineProps, defineEmits} from 'vue';
    
    const props = defineProps(['departments', 'formulations']);
    const emit = defineEmits(['filteredName','unFilteredName']);
    
    function filteredName(itemname, item){
        emit('filteredName', itemname, item);
    }
    function unFilteredName(itemname, item){
        emit('unFilteredName', itemname, item);
    }

</script>
