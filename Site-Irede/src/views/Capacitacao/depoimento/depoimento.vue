<script>
import Carousel from 'primevue/carousel';
import image1 from "../../../assets/Imagens/capacitacao/capacitacao_feedback_gabriel.png"
import image2 from "../../../assets/Imagens/capacitacao/capacitacao_feedback_gabriela.png"
import image3 from "../../../assets/Imagens/capacitacao/capacitacao_feedback_eduardo.png"
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "depoimento",
    components: { Carousel },
    setup() {
        let links = [
            {
                image: image1,
                imageAlt:"Gabriel Gurgueira que fez parte do academy",
                textTittle: "Técnico em Informática – IFCE, Bacharel em Sistemas e Mídias Digitais – UFC",
                text: "O Academy deu acesso ao que precisávamos para nos profissionalizarmos. Contato com pessoas, equipamentos, bolsas de estudos, capacitação e a metodologia criou o ambiente ideal para o Mercadapp sair da ideação para conclusão do seu MVP (Minimum Viable Product).",
                textPeople: "Gabriel Gurgueira",
            },
            {
                image: image2,
                imageAlt:"Gabriela Bezerra que fez parte da capacitação ",
                textTittle: "Bacharel em Engenharia da Computação – IFCE, Especialista em Computação Aplicada a Educação – USP",
                text: "A capacitação foi um divisor de águas na minha vida. Não me adaptava no ensino tradicional, o CBL  me mudou completamente, através da metodologia, fui capaz de desenvolver autonomia para aprender a programar ao mesmo tempo em que executava outras funções.",
                textPeople: "Gabriela Bezerra",
            },
            {
                image: image3,
                imageAlt:"Eduardo Borges que fez parte dos nossos programas",
                textTittle: "Mestre em Administração - UFC Análise e desenvolvimento de Sistemas - UNIFOR",
                text: "Os professores se destacam pela excelência, sendo altamente capacitados e dedicados a transmitir os conteúdos aos alunos, integrando de maneira eficaz teoria e prática. Incorporam diversas Hard Skills cruciais para a formação profissional, abordadas ao longo de nossa jornada educacional por meio de uma metodologia ágil.",
                textPeople: "Eduardo Borges",
            },

        ]
        return {
            links
        }
    },
});

</script>

<template>
    <!--web-->
    <div class="hidden md:block">
        <div class="w-full flex justify-center mt-32">
            <div class="w-4/5 flex flex-row">
                <div class="mx-4 " v-for="link in links">
                    <div
                        class="relative w-full mt-6 mb-6 bg-white shadow-2xl md:max-w-sm rounded-xl h-[500px] border-b-8 border-[#8437fe] hover:border-[#43EAE8] ease-in duration-200">
                        <div class="pb-6">
                            <!--photo-->
                            <div class="justify-center">
                                <div class="flex justify-center w-full">
                                    <div class="relative">
                                        <img :src="link.image" :alt="link.imageAlt"
                                            class="dark:shadow-xl rounded-full align-middle absolute top-[-80px] right-[-80px] max-w-[150px]" />
                                    </div>
                                </div>
                            </div>

                            <!--tittle-->

                            <div class="mt-20 text-center ">
                                <h3 class="mb-1 text-2xl font-bold leading-normal text-black">{{ link.textPeople }}</h3>
                                <div class="flex flex-row justify-center w-full text-center">
                                    <div class="text-black font-regular text-sm w-[80%]">
                                        {{ link.textTittle }}</div>
                                </div>
                            </div>

                            <!--text-->

                            <div class="pt-3 mx-2 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full px-6">
                                        <p class="mb-8 leading-relaxed text-black ">
                                            {{ link.text }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--mobile-->
    <div class="md:hidden pt-10">

        <Carousel Carousel :value="links" :numVisible="1" :numScroll="1" circular :responsiveOptions="responsiveOptions"
            class="" :autoplayInterval="4000">
            <template #item="slotProps">
                <div class="rounded-2xl flex justify-center">
                    <div
                        class="relative w-full mt-10 mb-6 bg-blue-100 shadow-xl rounded-xl h-[580px] border-b-8 border-[#8437fe]">
                        <div class="pb-6">
                            <!--photo-->
                            <div class="justify-center">
                                <div class="flex justify-center w-full">
                                    <div class="relative">
                                        <img :src="slotProps.data.image"
                                            class="dark:shadow-xl rounded-full align-middle absolute top-[-30px] right-[-60px] max-w-[120px]" />
                                    </div>
                                </div>
                            </div>
                             <!--tittle-->
                            <div class="mt-28 text-center ">
                                <h3 class="mb-1 text-2xl font-bold leading-normal text-black">{{ slotProps.data.textPeople }}</h3>
                                <div class="flex flex-row justify-center w-full text-center">
                                    <div class="text-black font-regular text-sm w-[80%]">
                                        {{ slotProps.data.textTittle }}</div>
                                </div>
                            </div>
                            <!--text-->
                            <div class="pt-3 mx-2 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full px-6">
                                        <p class="mb-8 leading-relaxed text-black ">
                                            {{ slotProps.data.text }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<style></style>