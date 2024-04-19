<script>
import { createApp } from "vue";
import image1 from "../../../assets/Imagens/consultoria/icones_nossos_servicos/icon_avaliacao_profunda.svg"
import image2 from "../../../assets/Imagens/consultoria/icones_nossos_servicos/icon_elegibilidade_a_projetos_subvencionados.svg"
import image3 from "../../../assets/Imagens/consultoria/icones_nossos_servicos/icon_desenvolvimento_completo.svg"

import Carousel from 'primevue/carousel';
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "servicos",
    components: { Carousel },
    setup() {
        let links = [
            {
                image: image1,
                imageAlt: "Ícone para setor de avaliação profunda",
                cardTittle: "Avaliação Profunda",
                cardText: "Realizamos uma análise detalhada das necessidades e oportunidades específicas do seu negócio, identificando áreas-chave para inovação.",
            },
            {
                image: image2,
                imageAlt: "Ícone para setor de Elegibilidade a Projetos Subvencionados",
                cardTittle: "Elegibilidade a Projetos Subvencionados",
                cardText: "Mapeamos oportunidades de financiamento e subsídios, garantindo que sua empresa aproveite ao máximo os recursos disponíveis.",
            },
            {
                image: image3,
                imageAlt: "Ícone para setor de Desenvolvimento Completo",
                cardTittle: "Desenvolvimento Completo",
                cardText: "Desde a concepção até a execução, cuidamos de todos os aspectos do processo de inovação, garantindo uma abordagem holística e eficiente.",
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
        <h2 class="md:text-5xl text-[#8b47fe] font-bold md:pt-10 text-2xl text-center"> Nossos Serviços</h2>
        <h3 class="md:text-3xl text-[#8b47fe] md:pt-3 text-xl text-center">Consultoria de Inovação</h3>
        <div class="w-full flex flex-wrap justify-center mb-5 ">
            <div class="w-[30%] bg-[#F2F2F2] mx-2 rounded-xl" v-for="link in links">
                <img :src="link.image" :alt="link.imageAlt" class="w-[80px]">
                <h4 class="pl-3 pb-2 text-[#8b47fe] text-2xl font-bold">{{ link.cardTittle }}</h4>
                <p class="pl-3 pb-2 w-[95%] text-black">{{ link.cardText }}</p>
            </div>

        </div>
    </div>
    <!--mobile-->
    <div class="md:hidden">
        <h2 class=" text-[#8b47fe] font-bold pt-2 text-2xl text-center"> Nossos Serviços</h2>
        <h3 class=" text-[#8b47fe] text-xl text-center">Consultoria de Inovação</h3>
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