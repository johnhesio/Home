<script>
import { createApp } from "vue";
import image1 from "../../../assets/Imagens/shopinfo.png"
import image2 from "../../../assets/Imagens/datacom.png"
import image3 from "../../../assets/Imagens/hp.png"
import image4 from "../../../assets/Imagens/multi.png"
import image5 from "../../../assets/Imagens/daten.png"
import image6 from "../../../assets/Imagens/belmicro.png"
import image7 from "../../../assets/Imagens/ibyte.png"
import image8 from "../../../assets/Imagens/vmi.png"


import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "clientes",
    setup() {
        let links = [
            {
                image: image1,
                imageAlt: "Logo Shopinfo",
            },

            {
                image: image2,
                imageAlt: "Logo Datacom",
            },

            {
                image: image3,
                imageAlt: "Logo HP",
            },

            {
                image: image4,
                imageAlt: "Logo Multi",
            },

            {
                image: image5,
                imageAlt: "Logo Daten",
            },

            {
                image: image6,
                imageAlt: "Logo Belmicro",
            },

            {
                image: image7,
                imageAlt: "Logo Ibyte",
            },

            {
                image: image8,
                imageAlt: "Logo VMI",
            },
        ]
        return {
            links
        }
    },
});

</script>

<template>
    <h2 class="text-black text-xl font-bold text-center pt-7 md:text-4xl md:pt-2 pb-5">Clientes</h2>
    <div class="md:w-full md:pt-5 relative flex justify-center mb-10">
        <div class="md:w-[80%] flex flex-wrap bg-zinc-200 z-10 rounded-xl justify-center">
            <div class="md:py-2 md:px-5 px-8 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                v-for="link in links">
                <img :src="link.image" :alt="link.imageAlt" class="md:w-[250px] w-[120px]">
            </div>
        </div>
        <img src="../../../assets/Imagens/cliente_bg.png" alt="Cliente Background"
            class="md:pt-14 md:w-full absolute top-0 md:mt-[-100px] mt-[-20px]">
    </div>
</template>

<style></style>