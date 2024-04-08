<script>
import image1 from "../../../assets/Imagens/pdi/pdi/icones_educação/icon_plataforma_de_treinamento.svg"
import image2 from "../../../assets/Imagens/pdi/pdi/icones_educação/icon_data_analytics.svg"
import image3 from "../../../assets/Imagens/pdi/pdi/icones_educação/icon_treinamento_em_ambiente_imersivo.svg"
import image4 from "../../../assets/Imagens/pdi/pdi/icones_educação/icon_gameficacao.svg"
import image5 from "../../../assets/Imagens/pdi/pdi/icones_educação/icon_mineracao_de_conteudos.svg"
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "edu_card",
    setup() {
        let links = [
            {
                image: image1,
                imageText: "Plataforma de treinamento",
            },
            {
                image: image2,
                imageText: "Data analytics de desempenho de aluno",
            },
            {
                image: image3,
                imageText: "Treinamento em ambiente imersivo",
            },
            {
                image: image4,
                imageText: "Gamificação",
            },
            {
                image: image5,
                imageText: "Mineração de conteúdos",
            },

        ]
        return {
            links
        }
    },
})
</script>

<template>
    <div class="bg-[#8B47FE] flex flex-row w-full">
        <div class="h-[550px]">
            <h1 class="text-white md:text-7xl font-bold md:pl-28 md:py-12 md:text-left text-4xl text-center pt-5">Educação</h1>
            <div class="flex items-center md:py-3 md:pl-28 pl-5 py-1" v-for="link in links">
                <img :src="link.image" alt="Imagens Cards" class="md:w-[100px] w-[80px]">
                <p class="text-white font-medium md:text-2xl md:pl-2 text-xl">{{ link.imageText }}</p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=558538795344"
                class="bg-black text-white md:px-8 px-6 md:py-3 py-1 md:ml-32 ml-20 md:text-xl rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                com a gente</a>
        </div>
        <img src="../../../assets/Imagens/pdi/pdi/pdi_educacao.png" alt="Pdi Educação" class="hidden md:block md:w-[700px] mb-10">
    </div>
</template>

<style scoped></style>
