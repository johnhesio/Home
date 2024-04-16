<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "automatizacao" })
</script>

<template>
    <!--Web-->
    <div class="hidden md:block relative">
        <div class="absolute top-0">
            <!--Automatização Industrial-->
            <div class="mb-5">
                <div class="flex justify-center w-full pb-5">
                    <h2 class="text-[#8B47FE] md:text-7xl font-bold md:pt-16 text-4xl text-center">
                        Desafios da Atualidade</h2>
                </div>
                <div class="flex flex-row w-full">
                    <div class="my-2 w-[50%] flex justify-end ">
                        <img src="../../../assets/Imagens/empreendedorismo/empreendedorismo_automatização_industrial.jpg"
                            alt="Empreendedorismo Automatização Industrial" class="rounded-3xl w-[60%]">
                    </div>
                    <div class="w-[50%] text-xl grid content-center ml-10">
                        <h3 class="text-[#8b47fe] text-4xl font-bold pb-2">Automatização Industrial</h3>
                        <p class="text-center md:text-left w-[50%] pt-2 text-black">
                            Aprimore seus processos industriais com soluções inovadoras de automatização para maximizar
                            a
                            eficiência e a produtividade.
                        </p>
                    </div>
                </div>
            </div>
            <!--Saúde-->
            <div class="mb-5">
                <div class="flex flex-row w-full">
                    <div class="w-[50%] text-xl grid content-center mr-10 justify-items-end">
                        <h3 class="text-[#8b47fe] w-[50%] text-4xl font-bold pb-2">Saúde</h3>
                        <p class="w-[50%] pt-2 text-black">
                            Transforme a indústria da saúde com tecnologias disruptivas que melhoram diagnósticos,
                            tratamentos e a experiência do paciente.
                        </p>
                    </div>
                    <div class="my-2 w-[50%] flex justify-start ">
                        <img src="../../../assets/Imagens/empreendedorismo/empreendedorismo_saude.jpg"
                            alt="Médico usando tablet" class="rounded-3xl w-[60%]">
                    </div>
                </div>
            </div>
            <!--Energia-->
            <div class="mb-5">
                <div class="flex flex-row w-full">
                    <div class="my-2 w-[50%] flex justify-end ">
                        <img src="../../../assets/Imagens/empreendedorismo/empreendedorismo_energia.jpg"
                            alt="Empreendedorismo Energia" class="rounded-3xl w-[60%]">
                    </div>
                    <div class="w-[50%] text-xl grid content-center ml-10">
                        <h3 class="text-[#8b47fe] text-4xl font-bold pb-2">Energia</h3>
                        <p class="text-center md:text-left w-[50%] pt-2 text-black">
                            Enfrente os desafios energéticos com inovações que impulsionam a eficiência e a
                            sustentabilidade no setor.
                        </p>
                    </div>
                </div>
            </div>
            <!--Sustentabilidade-->
            <div class="mb-5">
                <div class="flex flex-row w-full">
                    <div class="w-[50%] text-xl grid content-center mr-10 justify-items-end">
                        <h3 class="text-[#8b47fe] w-[50%] text-4xl font-bold pb-2">Sustentabilidade</h3>
                        <p class="w-[50%] pt-2">
                            Comprometa-se com práticas sustentáveis e colabore para um futuro mais verde com soluções
                            tecnológicas conscientes.
                        </p>
                    </div>
                    <div class="my-2 w-[50%] flex justify-start ">
                        <img src="../../../assets/Imagens/empreendedorismo//empreendedorismo_sustentabilidade.jpg"
                            alt="Empreendedorismo Sustentabilidade" class="rounded-3xl w-[60%]">
                    </div>
                </div>
            </div>
        </div>

        <img src="../../../assets/Imagens/empreendedorismo/desafios_da_atualidade_fundo_2.png"
            alt="Desafio da atualidade" class="w-full">

    </div>
    <!--Mobile-->
    <div class="md:hidden">
        <div class="w-full flex flex-col items-center bg-slate-100 h-[260px]">
            <h3 class="text-center pt-3 text-[#8b47fe] text-xl font-bold ">Desafios da Atualidade</h3>
            <div class="bg-slate-100 w-70 h-[200px] mt-3 rounded-xl relative">
                <img src="../../../assets/Imagens/empreendedorismo/mobile/empreendedorismo_automatização_industrial_mobile.png"
                    alt="Empreendedorismo Automatização Industrial Mobile" class="">
                <div class="absolute top-3 left-6">
                    <h3 class="text-xl font-bold text-[#8b47fe] w-[80%]">Automatização Industrial</h3>
                    <p class="text-[16px] w-[90%]">Aprimore seus processos industriais com soluções inovadoras de
                        automatização para maximizar a eficiência e a produtividade.</p>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col items-center bg-slate-100 h-[220px]">
            <div class="bg-slate-100 w-70 h-[200px] mt-3 rounded-xl relative">
                <img src="../../../assets/Imagens/empreendedorismo/mobile/empreendedorismo_saude_mobile.png"
                    alt="Empreendedorismo Saude Mobile" class="">
                <div class="absolute top-3 left-6">
                    <h3 class="text-xl font-bold text-[#8b47fe] w-[80%]">Saúde</h3>
                    <p class="text-[16px] w-[90%]">Transforme a indústria da saúde com tecnologias disruptivas que
                        melhoram diagnósticos, tratamentos e a experiência do paciente.</p>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col items-center bg-slate-100 h-[220px]">
            <div class="bg-slate-100 w-70 h-[200px] mt-3 rounded-xl relative">
                <img src="../../../assets/Imagens/empreendedorismo/mobile/empreendedorismo_energia_mobile.png"
                    alt="Empreendedorismo Energia Mobile" class="">
                <div class="absolute top-3 left-6">
                    <h3 class="text-xl font-bold text-[#8b47fe] w-[80%]">Energia</h3>
                    <p class="text-[16px] w-[90%]">Enfrente os desafios energéticos com inovações que impulsionam a
                        eficiência e a sustentabilidade no setor.</p>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col items-center bg-slate-100 h-[260px]">
            <div class="bg-slate-100 w-70 h-[200px] mt-3 rounded-xl relative">
                <img src="../../../assets/Imagens/empreendedorismo/mobile/empreendedorismo_sustentabilidade_mobile.png"
                    alt="Empreendedorismo Sustentabilidade" class="">
                <div class="absolute top-3 left-6">
                    <h3 class="text-xl font-bold text-[#8b47fe] w-[80%]">Sustentabilidade</h3>
                    <p class="text-[16px] w-[90%]">Comprometa-se com práticas sustentáveis e colabore para um futuro
                        mais verde com soluções tecnológicas conscientes.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
