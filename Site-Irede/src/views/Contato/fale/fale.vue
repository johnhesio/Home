<script>
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "fale",
})
</script>

<template>
    <img src="../../../assets/Imagens/contato/contato_capa.jpg" alt="">
    <div class="w-full h-screen bg-slate-50">
        <h1 class="font-bold text-[#8b47fe] text-6xl text-center md:pt-10">Fale Conosco</h1>
        <div class="flex md:flex-row flex-col justify-center md:pt-10 ">
            <div class="md:w-[45%] md:mx-2">
                <p class="md:w-[80%] text-2xl ">Entre em contato conosco através do formulário ou através dos contatos</p>
                <div class="bg-[#f8F8F8] md:w-[48%] flex md:px-5 md:py-2 rounded-2xl md:mt-2">
                    <img src="../../../assets/Imagens/contato/icones_contato/telefone.svg" alt="" class="w-[60px]">
                    <div class="flex flex-col text-xl md:pl-2">
                        <h2 class="font-bold">Telefone (Whatsapp)</h2>
                        <p>+55 (85) 3879-5344</p>
                    </div>
                </div>
                <div class="bg-[#f8F8F8] md:w-[48%] flex md:px-5 md:py-2 rounded-2xl md:mt-2">
                    <img src="../../../assets/Imagens/contato/icones_contato/email.svg" alt="" class="w-[60px]">
                    <div class="flex flex-col text-xl md:pl-2">
                        <h2 class="font-bold">Email</h2>
                        <p>contato@irede.org.br</p>
                    </div>
                </div>
            </div>
            <div class="md:w-[45%] bg-blue-100 h-[200px] mx-2">
                
            </div>
        </div>
    </div>
</template>

<style scoped></style>