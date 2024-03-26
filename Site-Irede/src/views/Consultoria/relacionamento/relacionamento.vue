<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "relacionamento",

})
</script>

<template>
    <div class="relative">
        <img src="../../../assets/Imagens/consultoria/consultoria_relacionamento_com_orgaos_governamentais.jpg"
            alt="Consultoria de Inovação para o Futuro" class="w-full hidden md:block">
        <img src="../../../assets/Imagens/consultoria/consultoria_relacionamento_com_orgaos_governamentais_mobile.jpg" alt="" class="md:hidden block">
        <div class="absolute md:top-24 md:w-[60%] top-3 md:pl-28 pl-5 w-[70%]">
            <h1 class="md:text-6xl font-bold text-[#8B47FE] text-xl">Relacionamento com Órgãos Governamentais</h1>
            <h2 class="md:text-4xl md:pt-10 pt-2 text-[#8B47FE] text-xl">Parcerias Estratégicas</h2>
            <p class="md:pt-5 md:text-2xl md:w-[80%] text-sm pt-2">Estabelecemos e mantemos relações sólidas com órgãos
                governamentais,
                garantindo apoio contínuo para o desenvolvimento tecnológico do seu negócio.</p>
            <h2 class="md:text-4xl md:pt-10 text-[#8B47FE] text-xl pt-2">Compromisso com a Evolução Tecnológica</h2>
            <p class="md:pt-5 md:text-2xl md:w-[80%] text-sm pt-2">Nossa consultoria está comprometida em impulsionar a evolução
                tecnológica em nossos parceiros e clientes, proporcionando um ambiente propício para a inovação.</p>
            <div class="md:pt-8 pt-2">
                <a href="#"
                    class="bg-black text-white md:w-[50%] w-[90%] text-center md:py-2 md:px-5 px-2 py-1 md:text-xl text-sm rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                    com a gente</a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>