<script>
import image1 from "../../../assets/Imagens/grafico.svg"
import image2 from "../../../assets/Imagens/dinheiro.svg"
import image3 from "../../../assets/Imagens/pessoas.svg"
import image4 from "../../../assets/Imagens/predio-comercial.svg"
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "numeros",
    setup() {
        let links = [
            {
                image: image1,
                imageAlt:"Gráfico de crescimento",
                cardTitle: "+500",
                cardText: "Projetos de P&D 120 nos últimos 3 anos",
            },
            {
                image: image2,
                imageAlt:"Simbolo de Real",
                cardTitle: "R$ 600 Milhões",
                cardText: "de recursos investidos em inovação ",
            },
            {
                image: image3,
                imageAlt:"Ícone de pessoas",
                cardTitle: "+350",
                cardText: "Colaboradores",
            },
            {
                image: image4,
                imageAlt:"Ícone Prédio",
                cardTitle: "4",
                cardText: "Unidades de negócios",
            },
        ]
        return {
            links
        }
    }
});

</script>

<template>
    <h1 class="text-xl font-bold text-center pb-6 md:text-4xl md:pb-10 md:pt-4">Principais Indicadores</h1>
    <div class="flex flex-row flex-wrap">
        <div class="w-1/2 sm:w-1/4 md:w-1/4 mb-4 px-2 " v-for="link in links">
            <div class="flex flex-col justify-center items-center md:pt-5">
                <img :src="link.image" :alt="link.imageAlt" class="block h-20 md:h-[100px]">
            </div>
            <div class="p-4 flex flex-col justify-center items-center">
                <p class="text-2xl font-bold text-center pb-">{{ link.cardTitle }}</p>
                <p class="text-center">{{ link.cardText }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
