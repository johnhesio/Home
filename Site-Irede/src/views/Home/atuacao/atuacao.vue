<script>
import image1 from "../../../assets/Imagens/pdi_icon.svg"
import image2 from "../../../assets/Imagens/capacitacao_icon.svg"
import image3 from "../../../assets/Imagens/empreendedorismo_icon.svg"
import image4 from "../../../assets/Imagens/consultoria_icon.svg"
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "atuacao",
    setup() {
        let links = [
            {
                image: image1,
                imageAlt:"Ícone para a página de PDI",
                name: "PD&I",
                buttonLink: "/pdi",
                buttonText: "Saiba Mais!",
            },
            {
                image: image2,
                imageAlt:"Ícone para a página de Capacitação",
                name: "Capacitação",
                buttonLink: "/capacitacao",
                buttonText: "Saiba Mais!",
            },
            {
                image: image3,
                imageAlt:"Ícone para a página de Empreendedorismo",
                name: "Empreendedorismo",
                buttonLink: "/empreendedorismo",
                buttonText: "Saiba Mais!",
                
            },
            {
                image: image4,
                imageAlt:"Ícone para a página de Consultoria",
                name: "Consultoria",
                buttonLink: "/consultoria",
                buttonText: "Saiba Mais!",
            },
        ]
        return {
            links,
        }
    }
})
</script>

<template>
    <div class="container mx-auto p-8 drop-shadow-lg">
        <h1 class="text-xl font-bold text-center pb-6 md:text-4xl md:pb-10 md:pt-4">Áreas de Atuação</h1>
        <div class="flex flex-row flex-wrap -mx-2">
            <div class="w-1/2 sm:w-1/4 md:w-1/4 mb-4 px-2" v-for="Link in links">
                <div class="relative bg-white rounded border">
                    <picture class=" bg-white flex flex-col justify-center items-center pt-5">
                        <img class="block h-20 md:h-[150px]" :src="Link.image" :alt="Link.imageAlt">
                    </picture>
                    <div class="p-4 flex flex-col justify-center items-center">
                        <h2 class="text-sm font-bold text-center md:pb-10 pb-5 md:text-2xl text-black"> {{ Link.name }} </h2>
                        <router-link
                            class="text-black stretched-link md:border md:border-black rounded-full md:text-xl 
               md:py-2 md:px-12 hover:bg-[#8b47fe] md:hover:border-transparent ease-in duration-200 md:hover:text-white border border-black text-[10px] md:mb-10 px-2 py-1"
                            :to="Link.buttonLink"> {{ Link.buttonText }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>
