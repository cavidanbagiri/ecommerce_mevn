

<template>
    <div class="row justify-content-center my-2 py-5">
        
        <div class="col-md-6" >
            <div class="row flex justify-content-center">
                <div class="col-sm-3 p-2">
                    <div class="my-2 mx-1 shadow-md bg-danger " > <img src="../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                    <div class="my-2 mx-1 shadow-md bg-danger " > <img src="../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                    <div class="my-2 mx-1 shadow-md bg-danger " > <img src="../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                    <div class="my-2 mx-1 shadow-md bg-danger " > <img src="../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                </div>
                <div class="col-sm-8 my-2 ">
                    <img :src="file_name" alt="" style="width:100%; height:80%">
                </div>
            </div>
        </div>

        <div class="col-md-5">
            <div class="col-12" ><h1 class="text-5xl px-1 py-2">{{current_item?.brand}}</h1></div>
            <div class="col-12" ><h1 class="text-5xl px-1 py-4">{{current_item?.name}} </h1></div>

            <div class="col-12 shadow-lg py-5 rounded-lg">
                    <div class="pt-3">
                        <span class="text-2xl p-1 fw-bold " >{{current_item?.price}} Rub</span>
                        <s class="text-2xl p-1 fw-bold" >8 000</s>
                        <span class="ms-3 text-2xl fw-bold bg-success text-white">15%</span>
                    </div>
                    <div class="mt-5">
                        <span class="text-lg text-inherit fw-bold py-5">10 Bonus For Buying</span>
                    </div>
                    <div>
                        <button class="btn btn-dark mt-5" >Add WishList</button>
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