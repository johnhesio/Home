<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "saude" })
</script>

<template>
    <div class="">
        <div class="flex flex-wrap justify-center md:text-xl bg-zinc-100">
            <div class="w-4/5 md:w-2/5 h-[370px] md:mb-10 md:mx-10 my-2">
                <h2
                    class="text-[#8B47FE] md:text-6xl font-bold md:text-left text-4xl text-center md:pt-10 pt-3 md:pl-5 md:pb-5">
                    Saúde</h2>
                <h3
                    class="text-[#8B47FE] md:text-4xl font-medium md:text-left text-2xl text-center py-3 md:pl-5 md:pb-5">
                    Projeto</h3>
                <ul class="list-disc list-inside text-black">
                    <li>Aperfeiçoamento da precisão do diagnóstico precoce através da comparação de imagens de mamografia;
                    </li>
                    <li>Inteligência artificial na realização de avaliação corporal realizada por foto;​
                    </li>
                    <li>Realidade aumentada em simulações biomédicas; ​
                    </li>
                    <li>Desenvolvimento de treinamentos médicos em ambiente imersivos, permitindo uma prática mais realista e eficaz;
                    </li>
                </ul>
                
            </div>
            <div class="w-4/5 md:w-2/5 md:mb-10 md:mx-10 my-2 pt-10 hidden md:block">
                <img src="../../../assets/Imagens/pdi/pdi/pdi_saude.jpg" alt="Médica atentendo outra mulher" class="rounded-3xl">
            </div>
        </div>
    </div>
</template>

<style scoped></style>
