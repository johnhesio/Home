<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "saude_card" })
</script>

<template>
    <div class="">
        <div class="flex flex-wrap justify-center md:text-xl bg-zinc-100">
            <div class="w-4/5 md:w-2/5 md:mb-10 md:mx-10 my-2">
                <h1
                    class="text-[#8B47FE] md:text-6xl font-bold md:text-left text-4xl text-center md:pt-10 pt-3 md:pl-5 md:pb-5">
                    Saúde</h1>
                <h2
                    class="text-[#8B47FE] md:text-4xl font-medium md:text-left text-2xl text-center py-3 md:pl-5 md:pb-5">
                    Projeto</h2>
                <ul class="list-disc list-inside">
                    <li>Comparação de Imagens de mamografia, aumentando precisão de diagnóstico precoce;
                    </li>
                    <li>Inteligência artificial na realização de avaliação corporal realizada por foto;​
                    </li>
                    <li>Realidade aumentada em simulações biomédicas; ​
                    </li>
                    <li>Treinamentos Médicos em ambiente imersivo;
                    </li>
                    <li>Reconhecimento de objetos em 3D utilizando sinais lidar;
                    </li>
                </ul>
                <h2
                    class="text-[#8B47FE] md:text-4xl font-medium md:text-left text-2xl text-center py-3 md:pl-5 md:pb-5">
                    Tecnologia</h2>
                <ul class="list-disc list-inside">
                    <li>Inteligência Artificial;
                    </li>
                    <li>Visão Computacional;
                    </li>
                    <li>Big Data;
                    </li>
                    <li>Realidade Aumentada;
                    </li>
                    <li> Deep Learn;
                    </li>
                    <li> Robô Autônomos;
                    </li>
                    <li> IoT;
                    </li>
                    <li> Realidade Virtual;
                    </li>
                </ul>
            </div>
            <div class="w-2/5 md:mb-10 md:mx-10 my-2 pt-10 hidden md:block">
                <img src="../../../assets/Imagens/pdi/pdi/competencias_por_segmento_saude_img01_vert.jpg" alt="Segmento saúde imagem 01" class="rounded-3xl">
            </div>
            <a href="https://api.whatsapp.com/send?phone=558538795344"
                    class="bg-black text-white md:px-8 px-6 md:py-3 md:mb-5 mb-2 py-1 md:text-xl rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                    com a gente</a>
        </div>
    </div>
</template>

<style scoped></style>
