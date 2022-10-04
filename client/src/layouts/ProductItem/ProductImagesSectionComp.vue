<template>

    <!-- Image Section -->
    <div class="col-md-4">
        <div class="row flex justify-content-center">
            <div class="col-2 p-2">
                <div class="my-2 mx-1 shadow-md bg-danger "> <img
                        src="../../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                <div class="my-2 mx-1 shadow-md bg-danger "> <img
                        src="../../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                <div class="my-2 mx-1 shadow-md bg-danger "> <img
                        src="../../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
                <div class="my-2 mx-1 shadow-md bg-danger "> <img
                        src="../../assets/parfume_images/woman_perfumes/CalvinKlein_Women.png" alt=""> </div>
            </div>
            <div class="col-8 my-2 ">
                <img class="img-fluid" :src="file_name" alt="" style="width:100%; height:80%">
            </div>
        </div>
    </div>

</template>

<script setup>

    const props = defineProps(['file_name']);

</script>