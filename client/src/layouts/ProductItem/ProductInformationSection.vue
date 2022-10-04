<template>
    <div class="col-md-4">
        <div class="col-12">
            <h1 class="text-5xl px-1 py-2" style="font-family: Georgia, serif;">{{current_item?.brand}}</h1>
        </div>
        <div class="col-12">
            <h1 class="text-5xl px-1 py-4" style="font-family: Georgia, serif;">{{current_item?.name}} </h1>
        </div>

        <div class="col-12 shadow-md border-top rounded-lg">
            <div class="ps-4 pt-5 mt-3">
                <span class="text-3xl ">{{current_item?.price}} Rub</span>
                <s class="text-2xl p-1 text-gray-300">8 000</s>
                <span class="ms-3 text-xl px-2 fw-bold bg-green-400 text-white">15%</span>
            </div>
            <div class="ps-4 pt-3 mt-3">
                <span class="text-md text-black py-5">Lorem Ipsum Dolor Sit Amet</span>
            </div>
            <div class="ps-4 pt-3 mt-2">
                <span class="text-sm text-gray-400 py-5">Bonus For Buying</span>
            </div>
            <div class="ps-4">
                <i class="fa-solid fa-lg fa-hand-pointer" style="color:blue;"></i><span class="ps-2 fw-bold"
                    style="color:blue">50</span>
            </div>
            <div class="border-lg">
                <div class="ps-4 pt-3 mt-2">
                    <span class="text-lg fw-bold text-gray-800 py-5">Information About Product</span>
                </div>
                <div class="px-4 pt-1 mt-2">
                    <span class="text-md text-gray-800 py-5">Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident voluptas saepe maiores architecto? Minima dolorum non temporibus delectus
                        eum corrupti earum. Impedit, quae. Voluptatibus illo explicabo eligendi quasi, laboriosam
                        quaerat, aspernatur aliquam doloribus aliquid quibusdam obcaecati inventore sint, est
                        veritatis accusantium ut voluptates! Nemo nesciunt possimus veritatis aperiam fugiat
                        ex!</span>
                </div>
            </div>
            <div class="ps-4 pt-3 mt-2">
                <span class="text-md text-gray-800 py-5">Get Information About Product <i
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