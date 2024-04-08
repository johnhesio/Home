<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "missao",

})
</script>

<template>
    <div class="w-full flex">
        <div class="md:w-3/4 grid content-center">
            <div class=" md:w-full flex md:flex-row flex-col md:my-5 my-2 items-center md:justify-end">
                <img src="../../../assets/Imagens/sobre_nos/icones_sobre_nos/icon_missao.svg" alt="Icone Missão" class="md:w-[200px] w-[150px]">
                <div class="flex flex-col md:w-[50%] md:text-left text-center">
                    <h1 class="md:text-4xl font-bold text-[#8b47fe] text-2xl">Missão</h1>
                    <p class="w-full px-2 md:px-0">Promover a inovação, transformar vidas e liderar atividades de pesquisa,
                        desenvolvimento e inovação (PD&I) para contribuir com o avanço científico e tecnológico em TIC,
                        moldando indivíduos para um futuro marcado pelo progresso e excelência.</p>
                </div>
            </div>
            <div class="md:w-full flex md:flex-row flex-col md:my-5 my-2 items-center md:justify-end md:pr-44">
                <img src="../../../assets/Imagens/sobre_nos/icones_sobre_nos/icon_visao.svg" alt="Icone Visão" class="md:w-[200px] w-[150px]">
                <div class="flex flex-col md:w-[50%] md:text-left text-center">
                    <h1 class="md:text-4xl font-bold text-[#8b47fe] text-2xl">Visão</h1>
                    <p class="w-full px-2 md:px-0">Tornar-se uma instituição científica e tecnológica (ICT) reconhecida por sua
                        estrutura de excelência, estabelecendo parcerias sólidas com empresas e profissionais de
                        destaque, impactando positivamente mais de 100 mil vidas.</p>
                </div>
            </div>
            <div class="md:w-full flex md:flex-row flex-col md:my-5 my-2 items-center md:justify-end ">
                <img src="../../../assets/Imagens/sobre_nos/icones_sobre_nos/icon_valores.svg" alt="Icone Valores" class="md:w-[200px] w-[150px]">
                <div class="flex flex-col md:w-[50%] md:text-left text-center">
                    <h1 class="md:text-4xl font-bold text-[#8b47fe] text-2xl">Valor</h1>
                    <p class="w-full px-2 md:px-0">Valorização Incansável, Abraçamos a diversidade, Decisões Baseadas em Fatos, Foco
                        no Impacto do Cliente, Integridade e Resultados Excepcionais.</p>
                </div>
            </div>

        </div>
        <div class="md:w-[40%] hidden md:block">
            <img src="../../../assets/Imagens/sobre_nos/icone_irede_sobre_nos_2.png" alt="Icone Irede" class="w-full">
        </div>
    </div>
</template>

<style scoped></style>