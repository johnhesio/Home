<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "iosi" })
</script>

<template>
    <div class="md:h-[400px] bg-[#8B47FE]">
        <div class="flex justify-center">
            <div class="md:w-2/3 w-full md:h-[180px] md:mt-4 flex md:flex-row flex-col">
                <div class="md:w-1/2 flex justify-center items-center">
                    <img src="../../../assets/Imagens/capacitacao/iosi_logo.png" alt="Logotipo IOSI Tech Academy" class="w-[220px] pt-5">
                </div>
                <div class="md:w-1/2 flex justify-center items-center text-2xl md:px-0 px-2">
                    <p class="font-bold text-white md:text-left text-center ">Desenvolvimento de APPS para iPhone, iPad,
                        Apple Watch e Apple TV. </p>
                </div>
            </div>
        </div>
        <div class="flex md:flex-row flex-col md:w-full py-5">
            <div class="px-8 py-2 md:w-1/2">
                <img src="../../../assets/Imagens/capacitacao/capacitacao_iosi_img_01.jpg" alt="Capacitação IOSI 01" class="rounded-2xl" />
            </div>
            <div class="px-8 py-2 md:w-1/2">
                <img src="../../../assets/Imagens/capacitacao/capacitacao_iosi_img_02.jpg" alt="Capacitação IOSI 02" class="rounded-2xl" />
            </div>
        </div>
    </div>

</template>

<style scoped></style>
