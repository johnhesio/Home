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
                imageAlt:"Ícone de identificação e predição de falhas",
                imageText: "Identificação e predição de falhas",
            },
            {
                image: image2,
                imageAlt:"Ícone de ambiente virtual",
                imageText: "Ambiente virtual para capacitação",
            },
            {
                image: image3,
                imageAlt:"Ícone de medidores inteligentes",
                imageText: "Medidores inteligentes",
            },
            {
                image: image4,
                imageAlt:"Ícone de inspeção semiautônoma",
                imageText: "Inspeção semiautônoma",
            },
            {
                image: image5,
                imageAlt:"Ícone de resolução de problemas",
                imageText: "Resolução de problemas",
            },
            {
                image: image6,
                imageAlt:"Ícone de comunicação eficaz",
                imageText: "Comunicação eficaz",
            },
            {
                image: image7,
                imageAlt:"Ícone de aprendizado contínuo",
                imageText: "Aprendizado contínuo",
            },
            {
                image: image8,
                imageAlt:"Ícone de conhecimento específico",
                imageText: "Conhecimento específico",
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
            <h2
                class="text-[#8B47FE] md:text-7xl font-bold md:py-12 pt-10 md:text-left text-4xl text-center md:pt-[100px] md:pl-10 pb-5">
                Metodologias</h2>
            <div class="flex flex-row flex-wrap gap-4 justify-center mb-10">
                <div class="w-1/3 md:w-1/6 md:h-[200px] " v-for="link in links">
                    <div class="flex justify-center">
                        <img :src="link.image" :alt="link.imageAlt" class="w-[120px]">
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p class=" text-center">{{ link.imageText }}</p>
                    </div>
                </div>
            </div>
            <div class=" flex justify-center">
                <a href="https://api.whatsapp.com/send?phone=558538795344"
                    class="bg-black text-white md:px-8 px-6 md:py-3 py-3 mb-5 md:text-xl rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                    com a gente</a>
            </div>
        </div>
        <img src="../../../assets/Imagens/capacitacao/capacitacacao_metodologias.jpg" alt="Capacitação e Metodologias"
            class="hidden md:block w-full">
    </div>
</template>

<style scoped></style>
