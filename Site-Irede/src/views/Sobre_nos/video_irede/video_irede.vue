<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "video_irede",

})
</script>

<template>
    <div class="bg-[#8b47fe] w-full">
        <div class="flex justify-center">
            <video class="md:w-[1000px] w-[400px] py-10" controls>
                <source src="../../../assets/Imagens/VIDEO IREDE SITE.mp4" type="video/mp4" alt="Video sobre IREDE">
            </video>
        </div>
    </div>
</template>

<style scoped></style>