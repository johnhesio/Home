<script>
import Carousel from 'primevue/carousel';
import 'primeicons/primeicons.css'
import image1 from "../../../assets/Imagens/case_1.jpg"
import image2 from "../../../assets/Imagens/case_2.jpg"
import image3 from "../../../assets/Imagens/case_3.jpg"
import image4 from "../../../assets/Imagens/case_4.jpg"
import image5 from "../../../assets/Imagens/case_5.jpg"
import image6 from "../../../assets/Imagens/case_6.jpg"
import image7 from "../../../assets/Imagens/case_7.jpg"
import image8 from "../../../assets/Imagens/case_8.jpg"
import image9 from "../../../assets/Imagens/case_9.jpg"
import image10 from "../../../assets/Imagens/case_10.jpg"
import image11 from "../../../assets/Imagens/case_11.jpg"
import image12 from "../../../assets/Imagens/case_12.jpg"
import image13 from "../../../assets/Imagens/case_13.jpg"
import image14 from "../../../assets/Imagens/case_14.jpg"
import image15 from "../../../assets/Imagens/case_15.jpg"
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "cases",
    components: { Carousel },
    setup() {
        const carouselSlides = [
            {
                image: image1,
                imageAlt: "Residência em Desen. de Aplicativos",
                imageTitle: "Residência em Desen. de Aplicativos",
                imageText: "Apps que Elevam Experiências e conectam Ideias Atividade",
                buttonLink: "/residencia",
                buttonIcon: "pi pi-chevron-circle-right",
            },
            {
                image: image2,
                imageAlt: "Plataforma EAD Adaptativa",
                imageTitle: "Plataforma EAD Adaptativa",
                imageText: "Rumo ao Conhecimento Personalizado: Homero, EAD Adaptativo. Transformando Aprendizado, Moldando Futuros de Forma Única e Personalizada",
                buttonLink: "/plataformaead",
                buttonIcon: "pi pi-chevron-circle-right",
            },
            {
                image: image3,
                imageAlt: "IA Aplicada a Saúde",
                imageTitle: "IA Aplicada a Saúde",
                imageText: "Conectando Inovação ao Cuidado: Com a IA, Elevamos a Saúde para Novos Patamares.",
                buttonLink: "/ia_saude",
                buttonIcon: "pi pi-chevron-circle-right",
            },
          
            
            {
                image: image5,
                imageAlt: "DevOps Básico e Quality Assurance",
                imageTitle: "DevOps Básico e Quality Assurance",
                imageText: "Construindo Pontes entre Desenvolvimento e Qualidade. Unindo Eficiência e Excelência em Cada Etapa do Caminho.",
                buttonLink: "/devops",
                buttonIcon: "pi pi-chevron-circle-right",
            },
            
            
            
            {
                image: image13,
                imageAlt: "Desenvolvimento de Software",
                imageTitle: "Desenvolvimento de Software",
                imageText: "Buscando o atendimento da demanda de mercado carente em profissionais de TIC.",
                buttonLink: "/dev_software",
                buttonIcon: "pi pi-chevron-circle-right",
            },
           
            {
                image: image15,
                imageAlt: "Educação Imersiva",
                imageTitle: "Educação Imersiva",
                imageText: "Conectando Mentes, Transformando Futuros: Uma Educação Imersiva, com Gamificação e Interação EAD. Aprendizado que Inspira, Conecta e Transforma",
                buttonLink: "/edu_imersiva",
                buttonIcon: "pi pi-chevron-circle-right",
            },

        ];
        const responsiveOptions = [

            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }

        ];

        return { carouselSlides, responsiveOptions };
    },
});

</script>

<template>

    <h1 class="text-2xl font-bold text-center pt-7 pb-5 md:text-4xl md:pb-8 md:pt-9">Cases de sucesso e soluções</h1>
    <Carousel :value="carouselSlides" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions"
        :autoplayInterval="4000" class="relative">
        <template #item="slotProps">
            <div class="">
                <router-link :to="slotProps.data.buttonLink">
                    <div
                        class="relative bg-white border border-surface-200 dark:border-surface-700 rounded-md md:mx-2 md:my-7 p-3 md:hover:scale-105 transition delay-150 duration-300 ease-in-out md:h-[560px] h-[340px]">
                        <div class="mb-3">
                            <div class="relative mx-auto ">
                                <img :src="slotProps.data.image" :alt="slotProps.data.alt" class="w-full rounded-md" />
                            </div>
                        </div>
                        <div class="flex flex-col  ">
                            <div class="md:mb-3 md:text-2xl font-bold text-[14px] relative mx-auto text-purple-700">{{
        slotProps.data.imageTitle }}
                            </div>
                            <div class="flex flex-col justify-between items-center relative mx-auto">
                                <div class="mt-0 font-regular text-[12px] md:text-[20px]">{{ slotProps.data.imageText }}
                                </div>

                            </div>
                        </div>
                        <i :class="slotProps.data.buttonIcon" style="font-size: 2rem; color: rgb(126, 34, 206);"
                            class="absolute bottom-0 right-0 py-2 px-2"></i>
                    </div>
                </router-link>

            </div>
        </template>
    </Carousel>

</template>


<style scoped></style>
