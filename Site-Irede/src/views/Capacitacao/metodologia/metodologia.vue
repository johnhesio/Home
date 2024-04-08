<script>
import image1 from "../../../assets/Imagens/capacitacao/icones_metodologias/icon_metodologias_01.svg"
import image2 from "../../../assets/Imagens/capacitacao/icones_metodologias/icon_metodologias_02.svg"
import image3 from "../../../assets/Imagens/capacitacao/icones_metodologias/icon_metodologias_03.svg"
import image4 from "../../../assets/Imagens/capacitacao/icones_metodologias/icon_metodologias_04.svg"
import image5 from "../../../assets/Imagens/capacitacao/icones_metodologias/icon_metodologias_05.svg"
import image6 from "../../../assets/Imagens/capacitacao/icones_metodologias/icon_metodologias_06.svg"
import image7 from "../../../assets/Imagens/capacitacao/icones_metodologias/icon_metodologias_07.svg"
import image8 from "../../../assets/Imagens/capacitacao/icones_metodologias/icon_metodologias_08.svg"
import { defineComponent } from "vue";
export default defineComponent({
    name: "metodologia",
    setup() {
        let links = [
            {
                image: image1,
                imageText: "Identificação e predição de falhas",
            },
            {
                image: image2,
                imageText: "Ambiente virtual para capacitação",
            },
            {
                image: image3,
                imageText: "Medidores inteligentes",
            },
            {
                image: image4,
                imageText: "Inspeção semiautônoma",
            },
            {
                image: image5,
                imageText: "Sistema de Monitoramento de uso do EPI",
            },
            {
                image: image6,
                imageText: "Sistema de Monitoramento de uso do EPI",
            },
            {
                image: image7,
                imageText: "Sistema de Monitoramento de uso do EPI",
            },
            {
                image: image8,
                imageText: "Sistema de Monitoramento de uso do EPI",
            },

        ]
        return {
            links
        }
    },
})
</script>

<template>
    <div class="relative w-full flex flex-col gap-4">
        <div class="top-0 md:absolute md:left-[600px]">
            <h1
                class="text-[#8B47FE] md:text-7xl font-bold md:py-12 pt-10 md:text-left text-4xl text-center md:pt-[100px] md:pl-10 pb-5">
                Metodologias</h1>
            <div class="flex flex-row flex-wrap gap-4 justify-center mb-10">
                <div class="w-1/3 md:w-1/6 md:h-[200px] " v-for="link in links">
                    <div class="flex justify-center">
                        <img :src="link.image" alt="" class="w-[120px]">
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p class=" text-center">{{ link.imageText }}</p>
                    </div>
                </div>
            </div>
            <div class=" flex justify-center">
                <a href="#"
                    class="bg-black text-white md:px-8 px-6 md:py-3 py-3 mb-5 md:text-xl rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                    com a gente</a>
            </div>
        </div>
        <img src="../../../assets/Imagens/capacitacao/capacitacacao_metodologias.jpg" alt="Capacitação e Metodologias"
            class="hidden md:block w-full">
    </div>
</template>

<style scoped></style>
