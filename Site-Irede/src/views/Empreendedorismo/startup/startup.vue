<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "academy" })
</script>

<template>
    <div class="relative">
        <img src="../../../assets/Imagens/empreendedorismo/empreendedorismo_startups_transformadoras.jpg" alt="Empreendedorismo na Indústria de TIC"
            class="w-full">
        <div class="absolute md:top-48 md:w-[50%] top-2 md:pl-32 pl-5 w-[65%] md:h-[500px] flex flex-col">
            <h2 class="md:text-7xl font-bold text-[#8B47FE] text-xl">Startups Transformadoras</h2>
            <p class="md:text-2xl md:mt-10 text-sm pt-2 text-black">Descubra startups inovadoras que estão revolucionando a indústria de TIC</p>
            <a href="https://api.whatsapp.com/send?phone=558538795344"
                class="bg-black text-white md:w-[50%] mt-2 w-[90%] text-center md:py-2 md:text-xl md:mt-10 rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                com a gente</a>
        </div>
    </div>
</template>

<style scoped></style>
