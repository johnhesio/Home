<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "saude_card", })

</script>

<template>
    <div>
        <div class="relative flex flex-col">
            <div class="absolute md:w-[60%] md:top-24 md:left-20 left-5 top-5">
                <h1 class="font-bold md:text-6xl text-[25px] text-[#8b47fe] md:pb-10 w-[80%] pb-2">IA Aplicada à Saúde
                </h1>
                <p class="md:pb-10 md:text-xl md:w-[80%] hidden md:block">A IA aplicada à saúde se destaca como um <i>case</i> exemplar,
                    empregando inteligência artificial (IA) para transformar a abordagem tradicional de diagnósticos de
                    mamografias. Este projeto inovador não apenas agiliza o processo de análise, mas também eleva a
                    precisão na identificação precoce de possíveis diagnósticos, marcando um avanço significativo na
                    área da saúde.</p>
                <a href="https://api.whatsapp.com/send?phone=558538795344"
                    class="bg-black text-white md:w-[50%] w-[90%] text-center md:py-2 md:px-5 px-2 py-1 md:text-xl text-sm rounded-full hover:bg-[#479FA8] ease-in duration-200">Converse
                    com a gente</a>
            </div>
        </div>
        <img src="../../../assets/Imagens/cases_de_sucesso/ia_aplicada_a_saude/ia_aplicada_a_saude_capa.jpg" alt=""
            class="Ia aplicada a saude capa">
        <p class="md:pb-10 md:text-xl md:w-[80%] md:hidden px-4 text-center py-2">O VMI MÉDICA se destaca como um case exemplar,
                    empregando inteligência artificial (IA) para transformar a abordagem tradicional de diagnósticos de
                    mamografias. Este projeto inovador não apenas agiliza o processo de análise, mas também eleva a
                    precisão na identificação precoce de possíveis diagnósticos, marcando um avanço significativo na
                    área da saúde.</p>
    </div>
</template>


<style scoped></style>
