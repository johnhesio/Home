<script>
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "negocio",

});

</script>


<template>
    <!--Web-->
    <div class="md:mt-28 hidden md:block">
        <h1 class="text-[#8B47FE] md:text-7xl font-bold md:pt-16 pt-8 md:text-left text-4xl text-center md:pl-10">
            NNT</h1>
        <h2
            class="text-[#8B47FE] md:text-4xl font-regular md:pt-3  pt-8 md:text-left text-4xl text-center md:pl-10 pb-3">
            Novos Negócios em TIC</h2>
        <div class="flex flex-row px-5">
            <div class="w-1/3 mx-2 px-3.5 text-xl">
                <p class="py-2 w-[80%]">Implantado em 2021 com objetivo de “Promover o empreendedorismo e a inovação
                    tecnológica
                    para o
                    desenvolvendo de software Android e iOS, visando atender demandas atuais do setor produtivo”.</p>
                <p class="py-2 w-[80%]">Programa de âmbito federal, vinculado à Secretaria de Educação Profissional e
                    Tecnológica – SETEC do Ministério da Educação – MEC.</p>
                <p class="py-2 w-[80%]">Modelo inicialmente implantado, testado e melhorado no IFCE, replicável para
                    toda rede
                    de educação tecnológica nacional (IFs).</p>
                <p class="py-2 w-[80%]">Acesso remoto à infraestrutura computacional.</p>
            </div>
            <div class="w-2/3 mx-2 flex flex-row mb-10">
                <div class="w-1/3 bg-[#8B47FE] mx-2 rounded-2xl">
                    <img src="../../../assets/Imagens/capacitacao/capacitacao_nnt_card1.jpg" alt=""
                        class="rounded-t-2xl">
                    <h1 class="py-3 px-4 text-white font-bold text-2xl w-[80%]">Curso de Andoid ou IOS</h1>
                    <p class="py-3 px-4 text-white text-sm">Já pensou em se tornar desenvolvedor de aplicativos Android
                        ou OS? Esse profissional é
                        extremamente demandado pelo mercado de trabalho, com chances de empregabilidade praticamente
                        garantidas e altos salários.</p>
                </div>
                <div class="w-1/3 bg-[#8B47FE] mx-2 rounded-2xl">
                    <img src="../../../assets/Imagens/capacitacao/capacitacao_nnt_card2.jpg" alt=""
                        class="rounded-t-2xl">
                    <h1 class="py-3 px-4 text-white font-bold text-2xl w-[80%]">Formação Anual de 400 Horas</h1>
                    <p class="py-3 px-4 text-white text-sm">Durante 1 ano, você aprenderá a desenvolver aplicativos
                        Android ou iOS e participarăo de uma turma que agrega grandes mentes escolhidas entre mais de 1
                        milhão de alunos dos institutos Federais do Brasil.</p>
                </div>
                <div class="w-1/3 bg-[#8B47FE] mx-2 rounded-2xl">
                    <img src="../../../assets/Imagens/capacitacao/capacitacao_nnt_card3.jpg" alt=""
                        class="rounded-t-2xl">
                    <h1 class="py-3 px-4 text-white font-bold text-2xl w-[80%]">Empreendedorismo e Design</h1>
                    <p class="py-3 px-4 text-white text-sm">Mas tudo isso não se dará de forma individualizada. Os
                        alunos ingressam no curso Android (nDroid) ou IOS (nOS) e formam equipes com o objetivo de criar
                        um negócio. Assim, também receberão toda a formação de design e empreendedorismo.</p>
                </div>

            </div>
        </div>
    </div>
    <!--Mobile-->
    <div class="md:hidden relative">
        <div class="absolute top-4 w-[60%]">
            <h1 class="pl-5 pt-5 text-[#8B47FE] font-bold text-2xl">NNT</h1>
            <h2 class="pl-5 pt-1 text-[#8B47FE] font-bold">Novos Negócios em TIC</h2>
        </div>
        <img src="../../../assets/Imagens/capacitacao/capacitacao_nnt_mobile.png" alt="" class="">
    </div>
</template>
<style></style>