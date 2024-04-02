<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "ambientes_imersivos", })

</script>

<template>
    <div class="w-full flex md:flex-row flex-col">
        <div class="md:w-[50%] flex justify-center py-5">
            <img src="../../../assets/Imagens/cases_de_sucesso/educacao_imersiva/educacao_imersiva_img01.png"
                alt="" class="w-[50%] rounded-2xl hidden md:block">
            <img src="../../../assets/Imagens/cases_de_sucesso/educacao_imersiva/educacao_imersiva_img01_mobile.png"
                alt="" class="w-[80%] rounded-2xl md:hidden">
        </div>
        <div class="md:w-1/2 md:py-5 md:text-left text-center">
            <div class="md:pb-8 pb-4">
                <h2 class="font-bold md:text-4xl text-2xl pb-4 text-[#8b47fe]">Ambientes Imersivos</h2>
                <p class="md:text-xl md:w-[80%] md:px-0 px-4">O METACLASSROOM transporta os alunos para além das limitações da sala de
                    aula convencional, imergindo-os em ambientes virtuais envolventes e interativos. A utilização de
                    tecnologias como realidade virtual e aumentada cria cenários educacionais que vão além do simples
                    aprendizado, proporcionando uma experiência que estimula a criatividade, a colaboração e a
                    compreensão profunda dos conceitos.</p>
            </div>
            <div class="">
                <h2 class="font-bold md:text-4xl text-2xl pb-4 text-[#8b47fe]">Gameficação na Educação</h2>
                <p class="md:text-xl md:w-[80%] md:px-0 px-4">A gameficação é incorporada de forma integral ao METACLASSROOM,
                    transformando a jornada educacional em uma experiência lúdica. Elementos de jogos, como missões,
                    desafios e recompensas, são habilmente entrelaçados ao conteúdo curricular. Isso não apenas mantém
                    os alunos engajados, mas também promove a autonomia, a resolução de problemas e a aplicação prática
                    do conhecimento de maneira divertida e motivadora.</p>
            </div>
        </div>
    </div>
</template>


<style scoped></style>
