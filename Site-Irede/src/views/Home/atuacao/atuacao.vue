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
                name: "PD&I",
                buttonLink: "/pdi",
                buttonText: "Sabia Mais!",
            },
            {
                image: image2,
                name: "Capacitação",
                buttonLink: "/capacitacao",
                buttonText: "Sabia Mais!",
            },
            {
                image: image3,
                name: "Empreendedorismo",
                buttonLink: "/empreendedorismo",
                buttonText: "Sabia Mais!",
            },
            {
                image: image4,
                name: "Consultoria",
                buttonLink: "/consultoria",
                buttonText: "Sabia Mais!",
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
        <h1 class="text-2xl font-bold text-center pb-6 md:text-4xl md:pb-10 md:pt-4">Áreas de atuação</h1>
        <div class="flex flex-row flex-wrap -mx-2">
            <div class="w-1/2 sm:w-1/4 md:w-1/4 mb-4 px-2" v-for="Link in links">
                <div class="relative bg-white rounded border">
                    <picture class=" bg-white flex flex-col justify-center items-center pt-5">
                        <img class="block h-20 md:h-[150px]" :src="Link.image" alt="Cards">
                    </picture>
                    <div class="p-4 flex flex-col justify-center items-center">
                        <h1 class="text-sm font-bold text-center md:pb-10 pb-5 md:text-2xl"> {{ Link.name }} </h1>
                        <router-link
                            class="stretched-link md:border md:border-black rounded-full md:text-xl 
               md:py-2 md:px-12 hover:bg-purple-700 md:hover:border-transparent ease-in duration-200 md:hover:text-white border border-black text-[10px] md:mb-10 px-2 py-1"
                            :to="Link.buttonLink" title="Card 1"> {{ Link.buttonText }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>
