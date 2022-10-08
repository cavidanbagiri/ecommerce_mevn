<template>
    <div class="col-md-4">
        <div class="col-12">
            <h1 class="text-5xl px-1 py-2" style="font-family: Georgia, serif;">{{current_item?.brand}}</h1>
        </div>
        <div class="col-12">
            <h1 class="text-5xl px-1 py-4" style="font-family: Georgia, serif;">{{current_item?.name}} </h1>
        </div>

        <div class="col-12 shadow-lg border-top rounded-lg">
            <div class="ps-4 pt-2 mt-3">
                <span class="text-3xl ">{{current_item?.price}} ₽</span>
                <s class="text-2xl p-1 text-gray-300">8 000</s>
                <span class="ms-3 text-xl px-2 fw-bold bg-green-400 text-white">15%</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.color">
                <span class="text-sm text-black py-5">Color: {{current_item?.color}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.material">
                <span class="text-sm fw-bold text-black py-5">Material: {{current_item?.material}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.style">
                <span class="text-sm fw-bold  text-black py-5">Style: {{current_item?.style}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.closuretype">
                <span class="text-sm fw-bold  text-black py-5">Closure Type: {{current_item?.closuretype}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.formfactor">
                <span class="text-sm fw-bold  text-black py-5">Form Factor: {{current_item?.formfactor}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.linningdescription">
                <span class="text-sm fw-bold  text-black py-5">Linning Description: {{current_item?.linningdescription}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.walletcompartment">
                <span class="text-sm fw-bold  text-black py-5">Compartment: {{current_item?.walletcompartment}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.formulation">
                <span class="text-sm fw-bold  text-black py-5">Formulation: {{current_item?.formulation}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.department">
                <span class="text-sm fw-bold  text-black py-5">Department: {{current_item?.department}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.fragranceformat">
                <span class="text-sm fw-bold  text-black py-5">Fragrance Format: {{current_item?.fragranceformat}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.fragrancescent">
                <span class="text-sm fw-bold  text-black py-5">Fragrance Scent: {{current_item?.fragrancescent}}</span>
            </div>
            <div class="ps-4 pt-2 mt-3" v-if="current_item?.fragrancematerialfeatures">
                <span class="text-sm fw-bold  text-black py-5">Fragrance Material Features: {{current_item?.fragrancematerialfeatures}}</span>
            </div>
            <div class="ps-4 pt-2 mt-2">
                <span class="text-sm text-gray-400 py-5">Bonus for buying</span>
            </div>
            <div class="ps-4">
                <i class="fa-sharp fa-solid fa-star" style="color:blue"></i><span class="ps-2 fw-bold"
                    style="color:blue">5</span>
            </div>
            <div class="border-lg bg-violet-20 pb-2 m-2">
                <div class="ps-4 pt-2 mt-2">
                    <span class="text-lg fw-bold text-gray-900 py-5">Get Information About Product</span>
                </div>
                <div class="px-4 pt-1 mt-2">
                    <span class="text-sm  text-gray-800 py-5">{{current_item?.information}}</span>
                </div>
            </div>
            <div class="ps-4 pt-2 mt-2">
                <span class="text-sm fw-bold  text-gray-800 py-5">Call Whatsapp for more information<i
                        class="fa-brands ps-2 fa-lg  fa-whatsapp" style="color:green"></i> </span>
            </div>
            <div class="ps-4 pt-4 pb-5">
                <button class="btn w-80 btn-dark mt-3">Add WishList</button>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['current_item']);

</script>