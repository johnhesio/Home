<script>
import image1 from "../../../assets/Imagens/pdi/pdi/pdi_sustentabilidade_energia_solar.jpg"
import image2 from "../../../assets/Imagens/pdi/pdi/pdi_sustentabilidade_energia_eolica.jpg"
import image3 from "../../../assets/Imagens/pdi/pdi/pdi_sustentabilidade_hidrogenio_verde.jpg"
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "sustentabilidade",
    setup() {
        let links = [
            {
                image: image1,
                imageText: "Energia Solar",
                imageAlt: "Energia Solar",
            },
            {
                image: image2,
                imageText: "Energia Eólica",
                imageAlt: "Energia Eólica",
            },
            {
                image: image3,
                imageText: "Hidrogênio Verde",
                imageAlt: "Hidrogênio Verde",
            },
            

        ]
        return {
            links
        }
    },
})
</script>

<template>
    <div class="">
        <img src="../../../assets/Imagens/pdi/pdi/pdi_sustentabilidade_capa.jpg" alt="" class="w-full">
        <h1 class="text-[#8B47FE] md:text-6xl font-bold md:text-left text-4xl text-center pt-10 md:pl-20 md:pb-5">
            Sustentabilidade</h1>
        <div class="flex flex-wrap justify-center md:text-xl">
            <div class="w-3/5 md:w-1/4 md:h-[370px] md:mb-36 md:mx-10 my-2 md:hover:scale-105 transition delay-150 duration-300 ease-in-out" v-for="link in links">
                <img :src="link.image" :alt="link.imageAlt" class="rounded-3xl">
                <p class="md:text-4xl font-bold text-[#8B47FE] md:w-[20%] md:py-5 text-2xl py-2"> {{ link.imageText }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
