<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "projeto_energia" })
</script>

<template>
    <div class="">
        <h3 class="text-[#8B47FE] md:text-6xl font-bold md:text-left text-4xl text-center pt-10 md:pl-20 md:pb-5">
            Projeto</h3>
        <div class="flex flex-wrap justify-center md:text-xl">
            <ul
                class="w-4/5 md:w-2/5 h-[270px] md:mb-10 list-disc list-inside md:mx-10 bg-slate-100 rounded-xl p-5 shadow-lg my-4 ">
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
            </ul>
            <ul
                class="w-4/5 md:w-2/5 h-[270px] md:mb-10 list-disc list-inside md:mx-10 bg-slate-100 rounded-xl p-5 shadow-lg my-4">
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
</template>

<style scoped></style>
