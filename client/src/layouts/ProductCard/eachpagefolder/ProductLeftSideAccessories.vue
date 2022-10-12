<template>
    <div>
        <!-- Styles Filter Section Checkbox-->
        <div class="my-2">
            <h3 v-if="props.styles.size>1" class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">
                Styles</h3>
            <div v-for="(style, index) in props.styles" :key="index" class="w-full dark:border-gray-600">
                <div v-if="style">
                    <ProductLeftSideFilterItem :itemname="style" item="style" @filteredName="filteredName"
                        @unFilteredName="unFilteredName" />
                </div>
            </div>
        </div>
        <!-- Styles Filter Section Checkbox-->
        <div class="my-2">
            <h3 v-if="props.materials.size>1"
                class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Materials</h3>
            <div v-for="(material, index) in props.materials" :key="index" class="w-full dark:border-gray-600">
                <div v-if="material">
                    <ProductLeftSideFilterItem :itemname="material" item="material" @filteredName="filteredName"
                        @unFilteredName="unFilteredName" />
                </div>
            </div>
        </div>
        <!-- Closure Filter Section Checkbox-->
        <div class="my-2">
            <h3 v-if="props.closuretypes.size>1"
                class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Closuretype</h3>
            <div v-for="(closuretype, index) in props.closuretypes" :key="index" class="w-full dark:border-gray-600">
                <div v-if="closuretype">
                    <ProductLeftSideFilterItem :itemname="closuretype" item="closuretype" @filteredName="filteredName"
                        @unFilteredName="unFilteredName" />
                </div>
            </div>
        </div>
        <!-- Styles Filter Section Checkbox-->
        <div class="my-2">
            <h3 v-if="props.linningdescriptions.size>1"
                class="mb-2 mt-3 p-2 text-xl fw-bold font-semibold text-gray-900 dark:text-dark">Linning Descriptions
            </h3>
            <div v-for="(linningdescription, index) in props.linningdescriptions" :key="index"
                class="w-full dark:border-gray-600">
                <div v-if="linningdescription">
                    <ProductLeftSideFilterItem :itemname="linningdescription" item="linningdescription"
                        @filteredName="filteredName" @unFilteredName="unFilteredName" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import ProductLeftSideFilterItem from '../ProductLeftSideFilterItem.vue';

import {defineProps, defineEmits} from 'vue';

const props = defineProps(['styles', 'materials','closuretypes','linningdescriptions']);
const emit = defineEmits(['filteredName','unFilteredName']);

function filteredName(itemname, item){
    emit('filteredName', itemname, item);
}
function unFilteredName(itemname, item){
    emit('unFilteredName', itemname, item);
}

</script>
