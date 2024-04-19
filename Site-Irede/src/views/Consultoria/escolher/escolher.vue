<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "escolher",
})
</script>

<template>
    <div class="w-full relative">
        <div class="md:w-[90%] flex flex-col">
            <h2 class="md:text-6xl font-bold text-[#8B47FE] text-2xl md:pl-11 md:pt-8 pl-4 pt-2">Por Que Escolher o iREDE?</h2>
            <div class="flex flex-wrap md:items-center md:pl-10 md:py-5 py-2 pl-4">
                <img src="../../../assets/Imagens/consultoria/icones_por_que_escolher_o_irede/icon_expertise_comprovada.svg" alt="Icon Expertise" class="md:w-[80px] w-[50px]">
                <p class="md:text-2xl w-[70%] text-black"> <span class="font-bold">Expertise Comprovada:</span> Com anos de experiência, somos especialistas em guiar empresas rumo à inovação sustentável.</p>
            </div>
            <div class="flex flex-wrap md:items-center md:pl-10 md:py-5 py-2 pl-4">
                <img src="../../../assets/Imagens/consultoria/icones_por_que_escolher_o_irede/icon_resultados_tangiveis.svg" alt="Icon Resultados Tangiveis" class="md:w-[80px] w-[50px]">
                <p class="md:text-2xl w-[70%] text-black "> <span class="font-bold">Resultados Tangíveis:</span> Nossa abordagem prática resulta em soluções inovadoras e projetos bem-sucedidos.</p>
            </div>
            <div class="flex flex-wrap md:items-center md:pl-10 md:py-5 py-2 pl-4">
                <img src="../../../assets/Imagens/consultoria/icones_por_que_escolher_o_irede/icon_parceria_continua.svg" alt="Icon Parceria" class="md:w-[80px] w-[50px]">
                <p class="md:text-2xl w-[70%] text-black"> <span class="font-bold">Parceria Contínua:</span>Acreditamos em construir relacionamentos duradouros, apoiando sua empresa em cada fase do seu caminho de inovação.</p>
            </div>
        </div>
        <img src="../../../assets/Imagens/consultoria/icones_por_que_escolher_o_irede/icone_irede_2.png" alt="Logo da empresa IREDE" class="w-[250px] absolute top-0 right-0 hidden md:block">
    </div>

</template>

<style scoped></style>