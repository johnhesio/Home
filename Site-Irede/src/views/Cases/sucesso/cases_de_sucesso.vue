<script>
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
    setup() {
        const links = [
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
                imageText: "Conectando Mentes, Transformando Futuros: Uma Educação Imersiva, com Gameficação e Interação EAD. Aprendizado que Inspira, Conecta e Transforma",
                buttonLink: "/edu_imersiva",
                buttonIcon: "pi pi-chevron-circle-right",
            },

        ];

        return { links };
    },
});

</script>

<template>
    <h1 class="text-center md:mt-10 mt-5 text-xl font-bold md:text-6xl text-[#8B47FE]">Cases de Sucesso e Soluções</h1>
    <div class="w-full flex flex-wrap justify-center">
        <div class="md:w-[30%] w-[45%] mx-2 my-4" v-for="link in links">
            <router-link :to="link.buttonLink">
                <div class="relative">
                    <div
                        class="flex flex-col bg-[#F8F8F8] shadow-md md:mx-2 md:my-7 rounded-2xl md:hover:scale-105 transition delay-150 duration-300 ease-in-out md:h-[560px] h-[360px] ">
                        <img :src="link.image" :alt="link.alt" class=" rounded-t-2xl" />
                        <div class="md:mb-3 md:text-2xl font-bold text-[13px] text-center p-3 text-[#8B47FE] ">{{
            link.imageTitle }}
                        </div>
                        <div class="flex flex-col justify-between items-center relative mx-auto">
                            <div class="mt-0 font-regular text-[11px] md:text-[20px] p-3 text-center">{{ link.imageText
                                }}
                            </div>

                        </div>

                        <i :class="link.buttonIcon" style="font-size: 2rem; color: rgb(126, 34, 206);"
                            class="absolute bottom-0 right-0 py-2 px-4"></i>

                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>


<style scoped></style>
