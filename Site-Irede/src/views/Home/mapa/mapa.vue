<script>
import { createApp } from "vue";
import image1 from "../../../assets/Imagens/local_bs.png"
import image2 from "../../../assets/Imagens/local_manaus.png"
import image3 from "../../../assets/Imagens/local_polo.png"
import image4 from "../../../assets/Imagens/logo_irede_card.png"
import image5 from "../../../assets/Imagens/logo_irede_amazonia.png"
import image6 from "../../../assets/Imagens/logo_lds.png"
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "mapa",
    setup() {
        let links = [
            {
                image: image1,
                imageAlt: "IREDE Fortaleza",
                imageLogo: image4,
                imageLogoalt: "Logo IREDE",
                cardLocal: "FORTALEZA",
                cardTitle1: "Gestão e Empreendedorismo",
                cardText1: "Av. Desembargador Moreira, 1300 - Aldeota, Fortaleza-CE, 60170-002",
                cardTitle2: "Laboratórios de PD&I",
                cardText2: "Rua Martinho Rodrigues, 331 - Fátima, Fortaleza-CE, 60411-280",

            },
            {
                image: image2,
                imageAlt: "IREDE Manaus",
                imageLogo: image5,
                imageLogoalt: "Logo IREDE Manuas",
                cardLocal: "MANAUS",
                cardTitle1: "Gestão e Laboratórios de PD&I",
                cardText1: "Rua Guglielmo Marconi, 14 - Adrianópolis, Manaus-AM, 69055-010",

            },
            {
                image: image3,
                imageAlt: "Laboratorio de inovação",
                imageLogo: image6,
                imageLogoalt: "Logo Laboratório de desenvolvimento de software",
                cardLocal: "FORTALEZA",
                cardTitle1: "Laboratórios de PD&I",
                cardText1: "Rua Felino Barroso, 643 - Fátima, Fortaleza-CE, 60050-130",
                cardTitle2: "IFCE",
                cardText2: "Av. Treze de Maio, 2081 - Benfica, Fortaleza-CE, 60040-531",
                cardTitle3: "UECE",
                cardText3: "Av. Dr. Silas Munguba, 1700 - Itaperi, Fortaleza-CE, 60714-903",
                cardTitle4: "Polo de Inovação IFCE",
                cardText4: "R. Nogueira Acioli, 621 - Aldeota, Fortaleza-CE, 60110-140",

            },
        ]
        return {
            links
        }
    },
});

</script>

<template>
    <h2 class="text-black text-xl font-bold text-center pt-7 md:text-4xl md:pt-2 ">Onde Estamos</h2>
    <div
        class="md:w-full md:pt-10 pt-10 flex flex-col md:flex-row justify-center items-center md:items-start mb-10 gap-10">
        <div class="rounded-2xl relative w-[350px] mb-5" v-for="link in links">
            <div class="bg-zinc-200 md:h-[750px] h-[600px] rounded-2xl">
                <div class="rounded-2xl md:absolute ">
                    <img :src="link.image" alt="Imagens local" class="w-full rounded-xl hidden md:block">
                    <img :src="link.imageLogo" alt="Logotipo empresas" class="md:w-[200px] md:px-1">
                    <h3 class="font-bold md:pt-1 md:px-4 text-xl text-[#8b47fe] px-2">{{ link.cardLocal }}</h3>
                    
                    <div class="md:px-4 px-2 text-black">
                        <p class="font-bold text-xl pt-2">{{ link.cardTitle1 }}</p>
                        <P class="">{{ link.cardText1 }}</P>
                    </div>
                    
                    <div class="md:px-4 px-2 text-black">
                        <p class="font-bold text-xl pt-2">{{ link.cardTitle2 }}</p>
                        <P class="">{{ link.cardText2 }}</P>
                    </div>

                    <div class="md:px-4 px-2 text-black">
                        <p class="font-bold text-xl pt-2 ">{{ link.cardTitle3 }}</p>
                        <P class="">{{ link.cardText3 }}</P>
                    </div>

                    <div class="md:px-4 px-2 text-black">
                        <p class="font-bold text-xl pt-2">{{ link.cardTitle4 }}</p>
                        <P class="">{{ link.cardText4 }}</P>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>