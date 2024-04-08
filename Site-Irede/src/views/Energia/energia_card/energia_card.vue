<script>
import image1 from "../../../assets/Imagens/pdi/pdi/icones_energia/icon_energia_01.svg"
import image2 from "../../../assets/Imagens/pdi/pdi/icones_energia/icon_energia_02.svg"
import image3 from "../../../assets/Imagens/pdi/pdi/icones_energia/icon_energia_03.svg"
import image4 from "../../../assets/Imagens/pdi/pdi/icones_energia/icon_energia_04.svg"
import image5 from "../../../assets/Imagens/pdi/pdi/icones_energia/icon energia_05.svg"
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "energia_card",
    setup() {
        let links = [
            {
                image: image1,
                imageText: "Identificação e predição de falhas",
            },
            {
                image: image2,
                imageText: "Ambiente virtual para capacitação",
            },
            {
                image: image3,
                imageText: "Medidores inteligentes",
            },
            {
                image: image4,
                imageText: "Inspeção semiautônoma",
            },
            {
                image: image5,
                imageText: "Sistema de Monitoramento de uso do EPI",
            },

        ]
        return {
            links
        }
    },
})
</script>

<template>
    <div class="relative w-full flex flex-col gap-4">
        <div class="top-0 md:absolute md:left-[600px]">
            <h1
                class="text-[#8B47FE] md:text-7xl font-bold md:py-12 pt-10 md:text-left text-4xl text-center md:pt-[100px] md:pl-10">
                Energia</h1>
            <div class="flex flex-row flex-wrap gap-4 justify-center mb-8">
                <div class="w-1/3 md:w-1/6 md:h-[200px] md:mb-10" v-for="link in links">
                    <div class="flex justify-center">
                        <img :src="link.image" alt="" class="w-[120px]">
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-center">{{ link.imageText }}</p>
                    </div>
                </div>
            </div>
            <a href="https://api.whatsapp.com/send?phone=558538795344"
                class="bg-black text-white md:px-8 md:ml-10 ml-20 px-6 md:py-3 py-3 md:text-xl rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                com a gente</a>
        </div>
        <img src="../../../assets/Imagens/pdi/pdi/pdi_energia.jpg" alt="Pdi energia" class="hidden md:block w-full">
    </div>
    <div class="w-full">
        <div class="md:w-2/2 flex md:flex-row flex-col">
            <div class="flex flex-col md:w-1/2">
                <h1
                    class="text-[#8B47FE] md:text-6xl font-bold md:text-left text-4xl text-center pt-10 md:pl-20 md:pb-5">
                    Projeto</h1>
                <div class="flex flex-wrap justify-center md:text-xl">
                    <ul
                        class="md:mb-10 list-disc list-inside md:mx-10 bg-slate-100 rounded-xl p-5 shadow-lg my-4 ">
                        <li>Hardware para medição e controle de energia e renováveis;
                        </li>
                        <li>Firmware para medição e controle de energia;​
                        </li>
                        <li>Software para comunicação e controle de energia e renováveis;
                        </li>
                        <li>Reconhecimento de ativos de rede elétrica;
                        </li>
                        <li>Reconhecimento de objetos em 3D utilizando sinais lidar;
                        </li>
                        <li>Simulador de falhas ajuda na detecção e prevenção de falhas em aerogeradores;
                        </li>
                        <li>Inteligência computacional aplicada para detecção de padrões em corrente elétrica;
                        </li>
                        <li>Predição de geração de consumo;
                        </li>
                        <li>Desenvolvimento de microinversores;
                        </li>
                    </ul>
                </div>
            </div>

            <div class=" flex flex-col md:w-1/2">
                <h1
                    class="text-[#8B47FE] md:text-6xl font-bold md:text-left text-4xl text-center pt-10 md:pl-20 md:pb-5">
                    Tecnologias</h1>
                <div class="flex flex-wrap justify-center md:text-xl">
                    <ul
                        class="md:h-[375px] md:mb-10 list-disc list-inside md:mx-10 bg-slate-100 rounded-xl p-5 shadow-lg my-4 md:w-[700px]">
                        <li>Sistemas Embarcados;
                        </li>
                        <li>Visão Computacional;
                        </li>
                        <li>Eletrônica Aplicada;
                        </li>
                        <li>IoT;
                        </li>
                        <li>Realidade Virtual;
                        </li>
                        <li>Manufatura aditiva;
                        </li>
                        <li>Big Data.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
