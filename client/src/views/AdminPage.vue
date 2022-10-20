
<template>
    <div>
        
        <select v-model="category_selected">
            <option v-for="option in category_options" :value="option">
                {{option}}
            </option>
        </select>

        <AccessoriesPage/>

        <keep-alive>
            <component :is="tabs[category_selected]"></component>
        </keep-alive>

    </div>
</template>

<script setup>

import { ref, reactive } from 'vue';
import Perfume from '../components/AdminPageComp/CreateParfumery.vue';
import Makeup from '../components/AdminPageComp/CreateMakeup.vue';
import Accessories from '../components/AdminPageComp/CreateAccessories.vue';

const category_selected = ref('Perfume')
const category_options = ref(['Perfume', 'Makeup', 'Accessories', 'Skin Care', 'Hair Care']);
const tabs = { Perfume, Makeup, Accessories}

</script>
