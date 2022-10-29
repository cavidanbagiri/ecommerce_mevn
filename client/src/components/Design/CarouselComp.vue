<template>
        <div class="relative mx-0 py-1" data-carousel="static">
            <!-- Carousel wrapper -->
            <transition name="zoom" type="animation" appear>
            <div class="relative h-56 overflow-hidden md:h-96">
                <!-- Item 1 -->
                <div class="absolute inset-0 " data-carousel-item="" v-for="i in images.length" :key="i">
                        <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                        <img :src="images[count]" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                        
                    </div>
                </div>
            </transition>
            <!-- Slider indicators -->
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <div v-for="i in images.length" :key="i -= 1">
                    <button
                        :style="i === count ? { 'backgroundColor': 'rgb(196, 98, 98)' } : { 'backgroundColor': 'rgb(161, 159, 159)' }"
                        type="button" class="w-3 h-3 rounded-full" @click="changeIndicator(i)"></button>
                </div>
            </div>
            <!-- Slider controls -->
            <button type="button" @click="prev"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev="">
                <span
                    class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" @click="next"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next="">
                <span
                    class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
    
</template>

<script setup>

import { ref } from 'vue';

let flag = ref(true);

let count = ref(0);
const images = ref([
    'src/assets/sliderimages/image4.jpg',
    'src/assets/sliderimages/image2.jpg',
    'src/assets/sliderimages/image3.jpg',
    'src/assets/sliderimages/image1.jpg'
])


const next = () => count.value < images.value.length - 1 ? count.value += 1 : count.value = 0
const prev = () => count.value > 0 ? count.value -= 1 : count.value = 2;
const changeIndicator = (i) => count.value = i;
setInterval(next, 3000)

</script>
 
<style>
h2 {
    width: 400px;
    padding: 20px;
    margin: 20px;
}

.zoom-enter-active {
    animation: zoom-in 0.50s linear forwards;
}

.zoom-leave-active {
    animation: zoom-out 0.50s linear forwards;
}

.zoom-enter-from {
    opacity: 0;
}

.zoom-leave-to {
    opacity: 0
}

@keyframes zoom-in {
    from {
        transform: scale(0, 0);
        transition: all 0.25s linear;
    }
    to {
        transform: scale(1, 1);
        transition: all 0.25s linear;
    }
}

@keyframes zoom-out {
    from {
        transform: scale(1, 1);
    }
    to {
        transform: scale(0, 0);
    }
}

</style>