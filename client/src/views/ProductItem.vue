

<template>
    <div class="row justify-content-center my-2 py-5">
        
        <!-- Image Section -->
        <div class="col-md-4" >
            <div class="row flex justify-content-center">
                <div class="col-sm-3 p-2">
                    <div class="my-2 mx-1 shadow-md bg-danger " > <img src="../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                    <div class="my-2 mx-1 shadow-md bg-danger " > <img src="../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                    <div class="my-2 mx-1 shadow-md bg-danger " > <img src="../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                    <div class="my-2 mx-1 shadow-md bg-danger " > <img src="../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                </div>
                <div class="col-sm-8 my-2 ">
                    <img class="img-fluid" :src="file_name" alt="" style="width:100%; height:80%">
                </div>
            </div>
        </div>

        <!-- Indormation Section -->
        <div class="col-md-4">
            <div class="col-12" ><h1 class="text-5xl px-1 py-2">{{current_item?.brand}}</h1></div>
            <div class="col-12" ><h1 class="text-5xl px-1 py-4">{{current_item?.name}} </h1></div>

            <div class="col-12 shadow-md border-top rounded-lg">
                    <div class="ps-4 pt-5 mt-3">
                        <span class="text-3xl " >{{current_item?.price}} Rub</span>
                        <s class="text-2xl p-1 text-gray-300" >8 000</s>
                        <span class="ms-3 text-xl px-2 fw-bold bg-green-400 text-white">15%</span>
                    </div>
                    <div class="ps-4 pt-3 mt-3">
                        <span class="text-md text-black py-5">Lorem Ipsum Dolor Sit Amet</span>
                    </div>
                    <div class="ps-4 pt-3 mt-2">
                        <span class="text-sm text-gray-400 py-5">Bonus For Buying</span>
                    </div>
                    <div class="ps-4">
                        <i class="fa-solid fa-lg fa-hand-pointer" style="color:blue;"></i><span class="ps-2 fw-bold" style="color:blue">50</span>
                    </div>
                    <div class="border-lg">
                        <div class="ps-4 pt-3 mt-2">
                            <span class="text-lg fw-bold text-gray-800 py-5">Information About Product</span>
                        </div>
                        <div class="px-4 pt-1 mt-2">
                            <span class="text-md text-gray-800 py-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptas saepe maiores architecto? Minima dolorum non temporibus delectus eum corrupti earum. Impedit, quae. Voluptatibus illo explicabo eligendi quasi, laboriosam quaerat, aspernatur aliquam doloribus aliquid quibusdam obcaecati inventore sint, est veritatis accusantium ut voluptates! Nemo nesciunt possimus veritatis aperiam fugiat ex!</span>
                        </div>
                    </div>
                    <div class="ps-4 pt-3 mt-2">
                        <span class="text-md text-gray-800 py-5">Get Information About Product <i class="fa-brands ps-2 fa-lg  fa-whatsapp" style="color:green"></i> </span>
                    </div>
                    <div class="ps-4 pt-4 pb-5">
                        <button class="btn w-80 btn-dark mt-3" >Add WishList</button>
                    </div>
            </div>
        </div>

        <!-- Blog Section -->

        <div class="col-md-8 mt-5">
            <!-- Blogs Title-->
            <div>
                <h1 class="text-start text-5xl f2-bold fw-bold mt-5">Blogs</h1>
            </div>
            <!-- Each Post -->
            <div class="my-5">
                <h1 class="fw-bold text-2xl my-3">Marina</h1>
                <div class="bg-gray-200 p-5 rounded-lg shadow-sm">
                    <span class="text-md"> Iusto repellendus soluta, sed facere debitis assumenda maiores iure, eaque consequatur sapiente est deserunt quasi ratione!</span>
                </div>
            </div>
            
            <!-- Each Post -->
            <div class="my-5">
                <h1 class="fw-bold text-2xl my-3">Anna</h1>
                <div class="bg-gray-200 p-5 rounded-lg shadow-sm">
                    <span class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates doloribus aut unde eligendi sint nihil enim reprehenderit commodi, inventore accusamus atque est eius voluptas aspernatur rerum explicabo magni dignissimos a repudiandae excepturi minus? Iusto repellendus soluta, sed facere debitis assumenda maiores iure, eaque consequatur sapiente est deserunt quasi ratione!</span>
                </div>
            </div>

            <!-- Each Post -->
            <div class="my-5">
                <h1 class="fw-bold text-2xl my-3">Nastya</h1>
                <div class="bg-gray-200 p-5 rounded-lg shadow-sm">
                    <span class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates doloribus aut unde eligendi sint nihil enim reprehenderit commodi, inventore accusamus atque est eius voluptas aspernatur rerum explicabo magni dignissimos a repudiandae excepturi minus? Iusto repellendus soluta, sed facere debitis assumenda maiores iure, eaque consequatur sapiente est deserunt quasi ratione!</span>
                </div>
            </div>


            <!-- Each Post -->
            <div class="my-5">
                <h1 class="fw-bold text-2xl my-3">Masha</h1>
                <div class="bg-gray-200 p-5 rounded-lg shadow-sm">
                    <span class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates doloribus aut unde eligendi sint nihil enim reprehenderit commodi, inventore accusamus atque est eius voluptas aspernatur rerum explicabo magni dignissimos a repudiandae excepturi minus? Iusto repellendus soluta, sed facere debitis assumenda maiores iure, eaque consequatur sapiente est deserunt quasi ratione!</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();


let current_item = ref(null);
const file_name = ref('');

onMounted(async ()=>{
    await store.dispatch('LOAD_ONE_DATA', route.params.id)
    current_item.value = store.getters["GETPRODUCTITEM"];
    file_name.value = 'http://localhost:3000/'+current_item?.value?.file;
    console.log('file name : ', file_name.value, ' current item : ',current_item.value);
})




</script>


//'http://localhost:3000/'+props?.product?.file;