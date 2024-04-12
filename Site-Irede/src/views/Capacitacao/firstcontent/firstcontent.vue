<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "firstcontent",

})
</script>

<template>
    <div class="flex flex-wrap justify-center md:text-xl">
        <div class="w-4/5 md:w-2/5 md:mb-10 md:mx-10 my-2 pt-10">
            <img src="../../../assets/Imagens/capacitacao/capacitacao_capa.jpg" alt="Capa da Capacitação" class="rounded-3xl">
        </div>
        <div class="w-4/5 md:w-2/5 h-[370px] md:mb-10 md:mx-10 my-2 ">
            <h1
                class="text-[#8B47FE] md:text-6xl font-bold md:text-left text-4xl text-center md:pt-40 md:mb-5 pt-3 py-5">
                Capacitação</h1>
            <p class="mb-10 md:w-2/3 text-center md:text-left ">
                Promovemos através de nossas capacitações e residências tecnológicas, desenvolvimento econômico e
                social, garantindo maior competitividade, promoção de tecnologias, inovação, atração e retenção de
                talentos aos nossos clientes.
            </p>
            <a href="#"
                class="bg-black text-white md:px-8 px-6 md:py-3 py-1 md:text-xl rounded-full hover:bg-[#479FA8] ease-in duration-200 md:ml-0 ml-10">Converse
                com a gente</a>
        </div>

    </div>
</template>

<style scoped></style>
