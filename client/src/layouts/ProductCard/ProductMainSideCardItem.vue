<template>

    <div
        class="transition ease-in-out delay-30  hover:-translate-y-1 hover:shadow-xl hover:border hover:border-bottom-none duration-300 mt-5">
        <router-link
            :to="{ name: 'ProductItem', params: { id: `${props?.product?._id}` }, query: { catalog: `${props?.product?.catalog}` } }">
            <div class="">
                <img :src="`http://localhost:3000/${props?.product?.file}`" class="card-img-top "
                    style="height: 14rem;object-fit: contain;" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-md fw-bold" style="height:3rem; overflow: hidden;">{{
                            props?.product?.brand
                    }}</h5>
                    <p class="card-text text-sm py-1"
                        style="font-family: Georgia, serif;height:4rem; overflow: hidden;">{{
                                props?.product?.name
                        }}</p>
                    <div class="d-flex justify-content-between">
                        <span class="card-text text-sm px-0 fw-bold py-1">{{ props?.product?.actualprice }} ₽
                            <s class="ps-1 text-xs text-gray-400">{{ props?.product?.withoutpercentprice }} ₽</s>
                            <span class="ms-3 text-xs bg-green-400 text-white">{{ props?.product?.percentprice
                            }}%</span>
                        </span>
                    </div>
                </div>
                <!-- Opening Modal Section -->
            </div>
        </router-link>
        <div class="flex justify-content-center">
            <input class="btn btn-dark btn-sm my-1" @click="openModal" value='Add Wishlist' />
            <teleport to='#modal'>
                <div class="modal" v-if="isOpen">
                    <div class="inmodal">
                        <div class="">
                            <img :src="`http://localhost:3000/${props?.product?.file}`" class="card-img-top "
                                style="height: 16rem;object-fit: contain;" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-md fw-bold" style="height:2rem; overflow: hidden;">{{props?.product?.brand}}</h5>
                                <p class="card-text text-md pt-1" style="font-family: Georgia, serif;height:3rem; overflow: hidden;">{{props?.product?.name}}</p>
                                <div class="d-flex justify-content-between">
                                    <span class="card-text text-sm px-0 py-0 fw-bold">
                                        <span class="text-lg">Product Price : </span>
                                        {{ props?.product?.actualprice }} ₽
                                        <s class="ps-1 text-sm text-gray-400">{{ props?.product?.withoutpercentprice }} ₽</s>
                                        <span class="ms-3 text-sm bg-green-400 text-white">{{ props?.product?.percentprice }}%</span>
                                    </span>
                                </div>
                                <div class="flex align-items-center mt-3 justify-content-around">
                                    <button class="btn btn-dark mx-1 px-3 hover:bg-gray-50 hover:text-black" :disabled="count===1" @click="decrease">-</button>
                                    <span class="text-lg fw-bold mx-3">{{count}}</span>
                                    <button class="btn btn-dark mx-1 px-3 hover:bg-gray-50 hover:text-black" @click="increase">+</button>
                                    <button class="btn btn-dark mx-1 px-3 hover:bg-gray-50 hover:text-black" @click="addBasket(props?.product)">Add</button>
                                    <button class="btn btn-dark mx-1 px-3 hover:bg-gray-50 hover:text-black" @click="isOpen = false">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </teleport>
        </div>
    </div>



</template>

<script setup>

import { useStore } from 'vuex';
import { ref } from 'vue';
const store = useStore();
const props = defineProps(['product']);

const addBasket = (product) => {
    store.dispatch('AddBasket', product);
    isOpen.value = false;
};
const isOpen = ref(false);
const openModal = () => isOpen.value = true;
const count = ref(1);
const increase = () => count.value++; 
const decrease = () => count.value>1 ? count.value-- : count.value;


</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inmodal {
    max-width:500px;
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
}
</style>