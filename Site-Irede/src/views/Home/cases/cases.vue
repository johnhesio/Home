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
                imageAlt: "Pessoas planejando projeto sob a mesa",
                imageTitle: "Residência em desenvolvimento de aplicativos",
                imageText: "Apps que elevam experiências e conectam ideias a atividade.",
                buttonLink: "/residencia",
                buttonIcon: "pi pi-chevron-circle-right",
            },
            {
                image: image2,
                imageAlt: "plataforma homero na tela do computador",
                imageTitle: "Plataforma EAD adaptativa",
                imageText: "Rumo ao conhecimento personalizado: Homero, EAD adaptativo, transformando aprendizado, moldando futuros de forma única e personalizada.",
                buttonLink: "/plataformaead",
                buttonIcon: "pi pi-chevron-circle-right",
            },
            {
                image: image3,
                imageAlt: "pessoas conversando sobre tecnologia",
                imageTitle: "IA aplicada à saúde",
                imageText: "Conectando inovação à saúde: com a IA, elevamos a saúde para novos patamares.",
                buttonLink: "/ia_saude",
                buttonIcon: "pi pi-chevron-circle-right",
            },
          
            
            {
                image: image5,
                imageAlt: "pessoa conversando sobre projetos",
                imageTitle: "DevOps básico e quality assurance",
                imageText: "Construindo pontes entre desenvolvimento e qualidade. Unindo eficiência e excelência em cada etapa do caminho.",
                buttonLink: "/devops",
                buttonIcon: "pi pi-chevron-circle-right",
            },
            
            
            
            {
                image: image13,
                imageAlt: "pessoa encinando sobre programação",
                imageTitle: "Desenvolvimento de software",
                imageText: "Buscando o atendimento da demanda de mercado, carente em profissionais de TIC.",
                buttonLink: "/dev_software",
                buttonIcon: "pi pi-chevron-circle-right",
            },
           
            {
                image: image15,
                imageAlt: "plataforma de educação imersiva",
                imageTitle: "Educação imersiva",
                imageText: "Conectando mentes, transformando futuros: uma educação imersiva, com gamificação e interação EAD. Aprendizado que inspira, conecta e transforma.",
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

    <h1 class="text-xl font-bold text-center pt-7 pb-5 md:text-4xl md:pb-8 md:pt-9">Cases de Sucesso e Soluções</h1>
    <Carousel :value="carouselSlides" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions"
        :autoplayInterval="4000" class="relative">
        <template #item="slotProps">
            <div class="">
                <router-link :to="slotProps.data.buttonLink">
                    <div
                        class="relative bg-white border border-surface-200 dark:border-surface-700 rounded-md md:mx-2 md:my-7 p-3 md:hover:scale-105 transition delay-150 duration-300 ease-in-out md:h-[560px] h-[340px]">
                        <div class="mb-3">
                            <div class="relative mx-auto ">
                                <img :src="slotProps.data.image" :alt="slotProps.data.imageAlt" class="w-full rounded-md" />
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
