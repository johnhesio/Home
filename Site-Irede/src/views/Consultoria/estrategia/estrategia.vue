<script>
import { createApp } from "vue";
import image1 from "../../../assets/Imagens/consultoria/icones_nossos_servicos/icon_estrategia_personalizada.svg"
import image2 from "../../../assets/Imagens/consultoria/icones_nossos_servicos/icon_escrita_especializada.svg"
import Carousel from 'primevue/carousel';
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "estrategia",
    components: { Carousel },
    setup() {
        let links = [
            {
                image: image1,
                imageAlt:"Ícone de Estratégia Personalizada",
                cardTittle: "Estratégia Personalizada",
                cardText: "Desenvolvemos estratégias personalizadas alinhadas com seus objetivos comerciais e de inovação.",
            },
            {
                image: image2,
                imageAlt:"Ícone de Escrita Especializada",
                cardTittle: "Escrita Especializada",
                cardText: "Elaboramos propostas e documentos necessários para garantir elegibilidade em projetos subvencionados, destacando a singularidade e o potencial inovador do seu projeto.",
            },

        ]

        return {
            links
        }
    },
})
</script>

<template>
    <!--web-->
    <div class="w-full hidden md:block">
        <h3 class="md:text-3xl text-[#8b47fe] text-xl pb-4 text-center">Estratégia e Escrita</h3>
        <div class="w-full flex flex-wrap justify-center mb-5">
            <div class="w-[40%] bg-[#F2F2F2] mx-2 rounded-xl" v-for=" link in links">
                <img :src="link.image" :alt="link.imageAlt" class="w-[80px]">
                <h4 class="pl-3 pb-2 text-[#8b47fe] text-2xl font-bold">{{ link.cardTittle }}</h4>
                <p class="pl-3 pb-2 w-[95%] text-black">{{ link.cardText }}</p>
            </div>

        </div>
    </div>
    <!--mobile-->
    <div class="md:hidden">
        <h3 class=" text-[#8b47fe] text-xl text-center">Estratégia e Escrita</h3>
        <Carousel Carousel :value="links" :numVisible="1" :numScroll="1" circular :responsiveOptions="responsiveOptions"
            class="" :autoplayInterval="4000">
            <template #item="slotProps">
                <div class="w-[full] bg-[#F2F2F2] mx-2 rounded-xl mt-2">
                    <img :src="slotProps.data.image" :alt="slotProps.data.imageAlt" class="w-[80px]">
                    <h4 class="pl-3 pb-2 text-[#8b47fe] text-2xl font-bold">{{ slotProps.data.cardTittle }}</h4>
                    <p class="pl-3 pb-2 w-[95%] text-black">{{ slotProps.data.cardText }}</p>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<style scoped></style>