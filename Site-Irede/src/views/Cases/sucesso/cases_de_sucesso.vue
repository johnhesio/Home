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
