<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "inovacao",

})
</script>

<template>
    <div class="relative">
        <img src="../../../assets/Imagens/consultoria/consultoria_capa.jpg" alt="Consultoria de Inovação para o Futuro"
            class="w-full hidden md:block">
        <img src="../../../assets/Imagens/consultoria/consultoria_capa_mobile.jpg" alt="" class="md:hidden block">
        <div class="absolute md:top-16 md:w-[50%] top-3 md:pl-32 pl-5 w-[70%]">
            <h1 class="md:text-6xl font-bold text-[#8B47FE] text-xl">Consultoria de Inovação para o Futuro</h1>
            <p class="md:pt-5 pt-1 md:text-2xl">Transforme Seu Negócio com Estratégias Inovadoras e Projetos
                Subvencionados</p>
            <div class="md:pt-8 pt-2">
                <a href="#"
                    class="bg-black text-white md:w-[50%] w-[90%] text-center md:py-2 md:px-5 px-2 py-1 md:text-xl text-sm rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                    com a gente</a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>