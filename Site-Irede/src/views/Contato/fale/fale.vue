<script>
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "fale",
})
</script>

<template>
    <img src="../../../assets/Imagens/contato/contato_capa.jpg" alt="">
    <div class="w-full ">
        <h1 class="font-bold text-[#8b47fe] md:text-6xl text-4xl text-center md:pt-10 pt-4">Fale Conosco</h1>
        <div class="flex md:flex-row flex-col justify-center md:pt-10 ">
            <div class=" md:mx-2">
                <p class=" md:text-2xl text-xl md:text-left text-center">Entre em contato conosco através do formulário ou através dos contatos</p>
                <div class="flex md:flex-row flex-col">
                    <div class="bg-[#f8F8F8] md:w-[48%] flex md:px-5 md:py-2 md:mx-2 rounded-2xl md:mt-2 my-4">
                        <img src="../../../assets/Imagens/contato/icones_contato/telefone.svg" alt="" class="w-[60px]">
                        <div class="flex flex-col text-xl md:pl-2">
                            <h2 class="font-bold">Telefone (Whatsapp)</h2>
                            <p>+55 (85) 3879-5344</p>
                        </div>
                    </div>
                    <div class="bg-[#f8F8F8] md:w-[48%] flex md:px-5 md:py-2 md:mx-2 rounded-2xl md:mt-2 my-4">
                        <img src="../../../assets/Imagens/contato/icones_contato/email.svg" alt="" class="w-[60px]">
                        <div class="flex flex-col text-xl md:pl-2">
                            <h2 class="font-bold">Email</h2>
                            <p>contato@irede.org.br</p>
                        </div>
                    </div>
                </div>
                <div class=" pb-5 pt-5 flex justify-center">
                    <a href="#"
                        class="bg-black text-white text-center md:py-2 md:px-5 px-2 py-1 md:text-xl text-sm rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                        com a gente</a>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped></style>