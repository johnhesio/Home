<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "capacitacoes" })
</script>

<template>
    <div class="hidden md:block">
        <div class="flex flex-wrap justify-center md:text-xl bg-[#8b47fe]">
            <div class="w-4/5 md:w-2/5 h-[420px] md:mb-10 md:mx-10 my-2 ">
                <h1
                    class="text-[#fff] md:text-6xl font-bold md:text-left text-4xl text-center md:pt-10 pt-3 md:pl-5 md:pb-5">
                    Capacitações</h1>
                <div class="md:ml-6">
                    <p class="text-white px-6 border-l-4 border-[#43EAE8] my-5"> RESTIC 12 - Tecnologias Imersivas </p>
                    <p class="text-white px-6 border-l-4 border-[#43EAE8] my-5"> HP IT Talent </p>
                    <p class="text-white px-6 border-l-4 border-[#43EAE8] my-5"> RESTIC 10 Plataforma EAD Adaptativa
                    </p>
                    <p class="text-white px-6 border-l-4 border-[#43EAE8] my-5"> IOS Tech Academy </p>
                    <p class="text-white px-6 border-l-4 border-[#43EAE8] my-5"> NNT - Novos Negócios em TIC </p>
                    <p class="text-white px-6 border-l-4 border-[#43EAE8] my-5"> RESTIC 20 - Capacita Brasil </p>
                    <p class="text-white px-6 border-l-4 border-[#43EAE8] my-5"> CI Brasil - Microeletrônica </p>
                </div>
            </div>
            <div class="w-4/5 md:w-2/5 md:mb-10 md:mx-10 md:my-2 pt-10 hidden md:block">
                <img src="../../../assets/Imagens/capacitacao/capacitacao_img.png" alt="Capacitação" class="rounded-3xl">
            </div>
        </div>
    </div>
</template>

<style scoped></style>
