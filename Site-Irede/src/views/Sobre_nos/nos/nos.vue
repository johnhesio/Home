<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "nos",

})
</script>

<template>
    <div class="relative">
        <div class="">
            <img src="../../../assets/Imagens/sobre_nos/capa_sobre_nos.jpg" alt="Logo IREDE na parede"
                class="w-full hidden md:block">
            <img src="../../../assets/Imagens/sobre_nos/capa_sobre_nos_mobile_2.png" alt="Logo IREDE na parede"
                class="w-full md:hidden md:pb-0 pb-36">
            <div class="absolute md:top-24 md:w-[50%] top-3 md:pl-32 pl-5 w-[90%]">
                <h1 class="md:text-6xl font-bold text-[#8B47FE] text-2xl">Sobre Nós</h1>
                <p class="md:pt-7 pt-3 md:text-2xl hidden md:block text-black">Integramos um ecossistema
                    de inovação regional​</p>
                <p class="md:pt-7 pt-3 md:text-xl text-sm text-black">O IREDE é uma Instituição Científica, Tecnológica
                    e de
                    Inovação (ICT)
                    que atua na Execução e Gestão de projetos de Pesquisa, Desenvolvimento e Inovação (PD&I) na área de
                    TIC
                    – Tecnologia da Informação e Comunicação.</p>
                <p class="md:pt-7 pt-3 md:text-xl text-sm text-black"> O Instituto atende demandas de inovação em
                    empresas,
                    principalmente as
                    beneficiárias da Lei de
                    Informática, através de uma equipe composta por profissionais qualificados e pesquisadores com
                    vínculo
                    em universidades, sejam professores que sirvam como mentores e orientadores, alunos de pós-graduação
                    que
                    contribuam com suas pesquisas ou alunos de graduação que busquem ampliar seu conhecimento e sua
                    experiência com a participação em projetos de P&D.​</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>