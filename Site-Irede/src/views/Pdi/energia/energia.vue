<script>
import image1 from "../../../assets/Imagens/pdi/pdi/icones_energia/icon_energia_01.svg"
import image2 from "../../../assets/Imagens/pdi/pdi/icones_energia/icon_energia_02.svg"
import image3 from "../../../assets/Imagens/pdi/pdi/icones_energia/icon_energia_03.svg"
import image4 from "../../../assets/Imagens/pdi/pdi/icones_energia/icon_energia_04.svg"
import image5 from "../../../assets/Imagens/pdi/pdi/icones_energia/icon energia_05.svg"
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "energia",
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
            <h1 class="text-[#8B47FE] md:text-7xl font-bold md:py-12 pt-10 md:text-left text-4xl text-center md:pt-[100px] md:pl-10">
                Energia</h1>
            <div class="flex flex-row flex-wrap gap-4 justify-center mb-8">
                <div class="w-1/3 md:w-1/6 md:h-[200px] md:mb-10" v-for="link in links">
                    <div class="flex justify-center">
                        <img :src="link.image" alt="" class="w-[120px]">
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-center">{{ link.imageText }}</p>
                    </div>
                </div>
            </div>
            <a href="https://api.whatsapp.com/send?phone=558538795344"
                class="bg-black text-white md:px-8 md:ml-10 ml-20 px-6 md:py-3 py-3 md:text-xl rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                com a gente</a>
        </div>
        <img src="../../../assets/Imagens/pdi/pdi/pdi_energia.jpg" alt="Pdi Energia" class="hidden md:block w-full"> 
    </div>
</template>

<style scoped></style>
