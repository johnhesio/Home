<script>
import { createApp } from "vue";
import Carousel from 'primevue/carousel';
import image1 from "../../../assets/Imagens/competencia_educacao.jpg"
import image2 from "../../../assets/Imagens/competencia_energia.jpg"
import image3 from "../../../assets/Imagens/competencia_industria.jpg"
import image4 from "../../../assets/Imagens/competencia_saude.jpg"
import image5 from "../../../assets/Imagens/competencia_sustentabilidade.jpg"
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "competencias",
    components: { Carousel },
    setup() {
        let links = [
            {
                image: image1,
                imageAlt:'Criança sentada estudando no tablet',
                cardText: "Educação",
                cardIcon: "pi pi-chevron-circle-right",
                link: "/educacao",
            },
            {
                image: image2,
                imageAlt:'Homem usando epi conferindo tablet',
                cardText: "Energia",
                cardIcon: "pi pi-chevron-circle-right",
                link: "/energia",
            },
            {
                image: image3,
                imageAlt:'Maquina da industria trabalhando',
                cardText: "Indústria",
                cardIcon: "pi pi-chevron-circle-right",
                link: "/industria",
            },
            {
                image: image4,
                imageAlt:'Mulher morena médica sorrindo',
                cardText: "Saúde",
                cardIcon: "pi pi-chevron-circle-right",
                link: "/saude",
            },
            {
                image: image5,
                imageAlt:'Jovens de mãos dadas segurando uma planta',
                cardText: "Sustentabilidade",
                cardIcon: "pi pi-chevron-circle-right",
                link: "/sustentabilidade",
            },

        ]

        return {
            links
        }
    },
});

</script>


<template>

    <h2 class="text-white text-xl font-bold text-center pt-7 md:text-4xl md:pt-9 bg-[#8b47fe]">Competências por
        Segmento </h2>
    <div
        class="flex flex-col md:gap-10 md:flex-row justify-center items-center md:items-start bg-[#8b47fe] md:w-full md:h-[200px] md:relative md:mb-32 h-[400px]">
        <div class="rounded-2xl hidden md:block relative justify-center w-[200px] mb-5" v-for="link in links">
            <router-link :to="link.link">
                <div class="rounded-2xl md:absolute top-8 ">
                    <img :src="link.image" :alt="link.imageAlt"
                        class="w-full rounded-xl md:hover:scale-105 transition delay-150 duration-300 ease-in-out brightness-[.9]" />
                    <div class="w-full rounded-b-xl absolute bottom-0 flex ">
                        <p class="text-white font-bold pl-2">{{ link.cardText }}</p>
                        <i :class="link.cardIcon" style="color: white;" class="right-0 absolute bottom-1 pr-1"></i>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="md:hidden">
            <Carousel Carousel :value="links" :numVisible="1" :numScroll="1" circular
                :responsiveOptions="responsiveOptions" class="" :autoplayInterval="4000">
                <template #item="slotProps">
                    <div class="rounded-2xl flex justify-center">
                        <router-link :to="slotProps.data.link">
                            <div
                                class="relative rounded-md md:mx-2 md:my-7 p-3 md:hover:scale-105 transition delay-150 duration-300 ease-in-out md:h-[560px] h-[340px]">
                                <div class="mb-3 ">
                                    <div class="rounded-2xl md:absolute top-8">
                                        <img :src="slotProps.data.image" :alt="slotProps.data.imageAlt"
                                            class="w-full rounded-md md:hover:scale-105 transition delay-150 duration-300 ease-in-out brightness-[.8]" />
                                        <div class="w-full absolute bottom-0 flex">
                                            <p class="text-white font-bold pl-2 text-2xl">{{ slotProps.data.cardText }}
                                            </p>
                                            <i :class="slotProps.data.cardIcon" style="color: white; font-size: medium;"
                                                class="right-0 absolute bottom-2 pr-8 "></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
</template>


<style></style>