<script>
import image1 from "../../assets/Imagens/pdi_icon.svg"
import image2 from "../../assets/Imagens/capacitacao_icon.svg"
import image3 from "../../assets/Imagens/empreendedorismo_icon.svg"
import image4 from "../../assets/Imagens/consultoria_icon.svg"
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "atuacao",
    setup() {
        let links = [
            {
                image: image1,
                name: "PD&I",
                buttonLink: "teste.com",
                buttonText: "Sabia Mais!",
            },
            {
                image: image2,
                name: "Capacitação",
                buttonLink: "teste.com",
                buttonText: "Sabia Mais!",
            },
            {
                image: image3,
                name: "Empreendedorismo",
                buttonLink: "teste.com",
                buttonText: "Sabia Mais!",
            },
            {
                image: image4,
                name: "Consultoria",
                buttonLink: "teste.com",
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
    <div class="container mx-auto p-8">
        <h1 class="text-2xl font-bold text-center pb-6">Áreas de atuação</h1>
        <div class="flex flex-row flex-wrap -mx-2">
            <div class="w-1/2 sm:w-1/4 md:w-1/4 mb-4 px-2" v-for="Link in links">
                <div class="relative bg-white rounded border justify-center">
                    <picture class="block bg-gray-200 border-b">
                        <img class="block h-20" :src="Link.image" alt="Card 1">
                    </picture>
                    <div class="p-4">
                        <h1 class="text-lg font-bold"> {{ Link.name }} </h1>
                        <a class="stretched-link" :href="Link.buttonLink" title="Card 1"> {{ Link.buttonText }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>
