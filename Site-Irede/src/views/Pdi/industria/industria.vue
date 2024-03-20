<script>
import image1 from "../../../assets/Imagens/pdi/pdi/icones_industria/icon_industria_01.svg"
import image2 from "../../../assets/Imagens/pdi/pdi/icones_industria/icon_industria_02.svg"
import image3 from "../../../assets/Imagens/pdi/pdi/icones_industria/icon_industria_03.svg"
import image4 from "../../../assets/Imagens/pdi/pdi/icones_industria/icon_industria_04.svg"

import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "industria",
    setup() {
        let links = [
            {
                image: image1,
                imageText: "Processamento de imagens (controle de fluxos, linha de produção, pessoas, veículos, máquinas…).",
            },
            {
                image: image2,
                imageText: "Fabricação de hardware para aplicação de IOT em ambientes industriais.",
            },
            {
                image: image3,
                imageText: "Gêmeos digitais em simulações de usinagem mecânica, simulações de otimização em ambiente virtual.",
            },
            {
                image: image4,
                imageText: "Sistemas Embarcados, desenvolvimento de firmware, protocolos de rede, etc.",
            },
            
        ]
        return {
            links
        }
    },
})
</script>

<template>
    <div class="relative w-full flex flex-col">
        <div class="top-0 md:absolute">
            <h1 class="md:text-[#fff] text-[#8B47FE] md:text-7xl font-bold md:pt-16 md:pb-10 pt-8 pb-8 md:text-left text-4xl text-center md:pl-10">
                Industria 4.0</h1>
            <div class="flex flex-row flex-wrap gap-4 md:ml-8 justify-center md:justify-start">
                <div class="w-[45%] md:w-1/6 md:h-[270px] md:mx-2 bg-[#8B47FE] rounded-xl md:hover:scale-105 transition delay-150 duration-300 ease-in-out" v-for="link in links">
                    <div class="flex justify-center">
                        <img :src="link.image" alt="" class="w-[120px]">
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-center text-[16px] md:px-6 px-2 pb-2 text-white">{{ link.imageText }}</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="../../../assets/Imagens/pdi/pdi/pdi_industria.jpg" alt="" class="hidden md:block w-full"> 
    </div>
</template>

<style scoped></style>
