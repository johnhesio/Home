<script>
import image1 from "../../../assets/Imagens/pdi/pdi/icones_industria/icon_industria_01.svg"
import image2 from "../../../assets/Imagens/pdi/pdi/icones_industria/icon_industria_02.svg"
import image3 from "../../../assets/Imagens/pdi/pdi/icones_industria/icon_industria_03.svg"
import image4 from "../../../assets/Imagens/pdi/pdi/icones_industria/icon_industria_04.svg"

import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "industria_card",
    setup() {
        let links = [
            {
                image: image1,
                imageAlt: "Processamento de imagens",
                imageText: "Processamento de imagens (controle de fluxos, linha de produção, pessoas, veículos, máquinas…).",
            },
            {
                image: image2,
                imageAlt: "Fabricação de hardware",
                imageText: "Fabricação de hardware para aplicação de IOT em ambientes industriais.",
            },
            {
                image: image3,
                imageAlt: "Gêmeos digitais em simulação",
                imageText: "Gêmeos digitais em simulações de usinagem mecânica, simulações de otimização em ambiente virtual.",
            },
            {
                image: image4,
                imageAlt: "Sistemas embarcados",
                imageText: "Sistemas Embarcados, desenvolvimento de firmware, protocolos de rede, etc.",
            },

        ]
        return {
            links
        }
    },
})
</script>

<template>
    <div class="relative w-full flex flex-col">
        <div class="top-0 md:absolute">
            <h1
                class="md:text-[#fff] text-[#8B47FE] md:text-7xl font-bold md:pt-16 md:pb-10 pt-8 pb-8 md:text-left text-4xl text-center md:pl-10">
                Indústria 4.0</h1>
            <div class="flex flex-row flex-wrap gap-4 md:ml-8 justify-center md:justify-start">
                <div class="w-[45%] md:w-1/6 md:h-[270px] md:mx-2 bg-[#8B47FE] rounded-xl md:hover:scale-105 transition delay-150 duration-300 ease-in-out"
                    v-for="link in links">
                    <div class="flex justify-center">
                        <img :src="link.image" :alt="link.imageAlt" class="w-[120px]">
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-center text-[16px] md:px-6 px-2 pb-2 text-white">{{ link.imageText }}</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="../../../assets/Imagens/pdi/pdi/pdi_industria.jpg" alt="Mulher usando EPI verificando tablet"
            class="hidden md:block w-full">
    </div>
    <div class="w-full">
        <div class="md:w-2/2 flex md:flex-row flex-col">
            <div class="flex flex-col md:w-1/2">
                <h2
                    class="text-[#8B47FE] md:text-6xl font-bold md:text-left text-4xl text-center pt-10 md:pl-20 md:pb-5">
                    Projeto</h2>
                <div class="flex flex-wrap justify-center md:text-xl">
                    <ul
                        class="md:mb-10 text-black list-disc list-inside md:mx-10 bg-slate-100 rounded-xl p-5 shadow-lg my-4 ">
                        <li>Protocolos de rede;
                        </li>
                        <li>IOT para Indústria 4.0;
                        </li>
                        <li>Gateways de comunicação;
                        </li>
                        <li>Firmware utilizando protocolos XMPP, MQTT, AMQP, CoAP, ZigBee, SigFox, LoRa, 6LoWPAN;
                        </li>
                        <li>Gerenciamento e monitoramento à distância de linhas de produção;
                        </li>
                        <li>Detecção proativa de falhas em linhas de produção;
                        </li>
                        <li>Processamento de imagens para controle de fluxos (pessoas, veículos, máquinas...);
                        </li>
                        <li>Sistema de reconhecimento facial;
                        </li>
                        <li>Sistema controle de quantitativo de peças de linha de produção; 
                        </li>
                        <li>Robôs autônomos para desempenhos de funções humanas;
                        </li>
                        <li>Sistemas de inspeção;
                        </li>
                        <li>Hardware para visão computacional;
                        </li>
                        <li>Realidade aumentada em usinagem mecânica e engenharia automotiva.
                        </li>
                    </ul>
                </div>
            </div>

            <div class=" flex flex-col md:w-1/2">
                <h2
                    class="text-[#8B47FE] md:text-6xl font-bold md:text-left text-4xl text-center pt-10 md:pl-20 md:pb-5">
                    Tecnologias</h2>
                <div class="flex flex-wrap justify-center md:text-xl">
                    <ul
                        class="md:h-[545px] text-black md:mb-10 list-disc list-inside md:mx-10 bg-slate-100 rounded-xl p-5 shadow-lg my-4 md:w-[700px]">
                        <li>Robôs Autônomos
                        </li>
                        <li>Redes & Computação em nuvem
                        </li>
                        <li>Internet das Coisas
                        </li>
                        <li>IoT
                        </li>
                        <li>Realidade Aumentada – Simulação Mecânicas & Autômotivas
                        </li>
                        <li>Integração Horizontal e Vertical
                        </li>
                        <li>Big Data
                        </li>
                        <li>Segurança Cibernética
                        </li>
                        <li>Blockchain
                        </li>
                        <li>Inteligência Artificial
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <a href="https://api.whatsapp.com/send?phone=558538795344"
                class="bg-black text-white md:px-8 px-6 md:py-3 md:my-5 my-2 py-1 md:text-xl rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                com a gente</a>
        </div>
    </div>
</template>

<style scoped></style>
