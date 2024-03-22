<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "hp"
})
</script>

<template>
     <!--Web-->
    <div class="relative hidden md:block">
        <div class="top-0 md:absolute md:left-[600px]">
            <h1
                class="text-[#8B47FE] md:text-7xl font-bold md:py-8 md:text-left text-4xl text-center md:pt-[100px] pb-5">
                HP IT Talent</h1>
            <div class="flex flex-row flex-wrap mb-10">
                <div class="md:w-4/6 md:h-[420px]">
                    <div class="">
                        <p class="px-6 border-l-4 border-[#43EAE8] my-5"> Implantado em 2023; </p>
                        <p class="px-6 border-l-4 border-[#43EAE8] my-5"> ITurmas anuais; </p>
                        <p class="px-6 border-l-4 border-[#43EAE8] my-5"> Curso de 40 horas de “Introdução a Programação
                            em Java com Git e API”, 600 alunos;​
                        </p>
                        <p class="px-6 border-l-4 border-[#43EAE8] my-5"> 120 desses alunos são selecionados para
                            aprofundar o conhecimento em uma das
                            trilhas tecnológicas (“Quality Assurance” ou “DevOps”), 240 horas; </p>
                        <p class="px-6 border-l-4 border-[#43EAE8] my-5">Os 10 alunos com melhor desempenho, 5 de cada
                            trilha, obtêm vaga no programa de
                            Residência Tecnológica Profissional, remunerado, com duração de 5 meses;​
                        </p>
                        <p class="px-6 border-l-4 border-[#43EAE8] my-5">Os residentes são então divididos em times
                            (squads) e alocados em projetos de P&D
                            reais dos parceiros.
                        </p>
                    </div>
                </div>
            </div>
            <div class="">
                <a href="#"
                    class="bg-black text-white md:px-8 px-6 md:py-3 py-3 mb-5 md:text-xl rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                    com a gente</a>
            </div>
        </div>
        <img src="../../../assets/Imagens/capacitacao/capacitacao_hp_it_talent.png" alt=""
            class="hidden md:block w-[50%] md:hover:scale-105 transition delay-150 duration-300 ease-in-out">
    </div>
     <!--Mobile-->
    <div class="md:hidden relative">
        <div class="absolute top-10 w-full">
            <h1 class="pl-32 pt-5 text-[#8B47FE] font-bold text-4xl">HP IT Talent</h1>

        </div>
        <img src="../../../assets/Imagens/capacitacao/capacitacao_hp_it_talent.png" alt="" class="w-[150px]">
    </div>
</template>

<style scoped></style>
