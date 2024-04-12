<script>
import Carousel from 'primevue/carousel';
import image1 from "../../../assets/Imagens/capacitacao/icones_areas_de_conhecimento/icon_areas_de_conhecimento_01.svg"
import image2 from "../../../assets/Imagens/capacitacao/icones_areas_de_conhecimento/icon_areas_de_conhecimento_02.svg"
import image3 from "../../../assets/Imagens/capacitacao/icones_areas_de_conhecimento/icon_areas_de_conhecimento_03.svg"
import image4 from "../../../assets/Imagens/capacitacao/icones_areas_de_conhecimento/icon_areas_de_conhecimento_04.svg"
import image5 from "../../../assets/Imagens/capacitacao/icones_areas_de_conhecimento/icon_areas_de_conhecimento_05.svg"
import image6 from "../../../assets/Imagens/capacitacao/icones_areas_de_conhecimento/icon_areas_de_conhecimento_06.svg"
import image7 from "../../../assets/Imagens/capacitacao/icones_areas_de_conhecimento/icon_areas_de_conhecimento_07.svg"
import image8 from "../../../assets/Imagens/capacitacao/icones_areas_de_conhecimento/icon_areas_de_conhecimento_08.svg"
import { defineComponent } from "vue";
export default defineComponent({
    name: "conhecimento",
    components: { Carousel },
    setup() {
        let links = [
            {
                image: image1,
                imageText: "Comunicação e relacionamento interpessoal",
            },
            {
                image: image2,
                imageText: "Inglês para profissional de TIC",
            },
            {
                image: image3,
                imageText: "Quality assurance",
            },
            {
                image: image4,
                imageText: "FullStack",
            },
            {
                image: image5,
                imageText: "Desenvolvimento iOS e android",
            },
            {
                image: image6,
                imageText: "Empreendedorismo e inovação",
            },
            {
                image: image7,
                imageText: "Inteligência artificial",
            },
            {
                image: image8,
                imageText: "Java",
            },

        ]
        return {
            links
        }
    },
})
</script>

<template>
    <div class="relative w-full flex-col hidden md:block">
        <div class="top-0 md:absolute">
            <h1
                class="text-[#8B47FE] md:text-7xl font-bold md:pt-16 md:pb-10 pt-8 pb-8 md:text-left text-4xl text-center md:pl-10">
                Áreas de Conhecimento</h1>
            <div class="flex flex-row flex-wrap gap-1 md:ml-8 justify-center md:justify-start md:w-2/3">
                <div class="w-[45%] md:w-1/5 md:py-5" v-for="link in links">
                    <div class="flex justify-center">
                        <img :src="link.image" alt="" class="w-[150px]">
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-center text-[16px] md:px-20 px-2 pb-2 text-[#000]">{{ link.imageText }}</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="../../../assets/Imagens/capacitacao/capacitacacao_areas_de_conhecimento.jpg" alt="Capacitação Área de conhecimento" class="w-full">
    </div>
    <div class="md:hidden">
        <h1
            class="text-[#8B47FE] md:text-7xl font-bold md:pt-16 md:pb-10 pt-8 pb-2 md:text-left text-4xl text-center md:pl-10">
            Áreas de Conhecimento</h1>
        <Carousel Carousel :value="links" :numVisible="1" :numScroll="1" circular :responsiveOptions="responsiveOptions"
            class="" :autoplayInterval="4000">
            <template #item="slotProps">
                <div class="">
                    <div class="relative h-[300px]">
                        <div class="">
                            <div class="flex flex-col text-center">
                                <div class="flex justify-center">
                                    <img :src="slotProps.data.image" alt="" class="w-[200px]" />
                                </div>
                                <div class="w-full">
                                    <p class="text-black font-bold text-2xl px-2">{{
                                        slotProps.data.imageText }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<style scoped></style>
