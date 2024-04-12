<script>
import { createApp, ref } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
  name: "rodape",
  setup() {

    let links = [
      {
        buttonName: "Início",
        link: "/home",
      },
      {
        buttonName: "Nós",
        link: "/sobre",
      },
      {
        buttonName: "Cases",
        link: "/cases",
      },
      {
        buttonName: "Atuação",
        link: "/pdi",
      },
      {
        buttonName: "Contato",
        link: "/contato",
      },
    ]

    return {
      links
    }
  }
})

</script>

<template>
  <div class="w-full mx-auto relative">
    <div class="md:flex p-4 shadow px-6 py-2 justify-between bg-[#8B47FE]">
      <div class="flex justify-center items-center md:items-start ml-[-30px] ">
        <img src="../../../assets/Imagens/irede_branca.png" alt="Logo Irede" class="h-20 pl-5">
      </div>
      <div class="md:flex md:items-center md:justify-between">
        <ul class="flex flex-col justify-center items-center md:items-start mb-6 sm:mb-0" v-for="link in links">
          <li>
            <router-link :to="link.link" class="text-xl text-white hover:underline md:mr-6">{{ link.buttonName }}</router-link>
          </li>
        </ul>
      </div>
      <div class="flex md:items-center justify-center">
        <a href="https://www.instagram.com/institutoirede/">
          <img src="../../../assets/Imagens/icon_instagram.svg" alt="Logo Instagram" class="w-[50px] mx-2">
        </a>
        <a href="https://www.facebook.com/institutoirede">
          <img src="../../../assets/Imagens/icon_facebook.svg" alt="Logo Facebook" class="w-[50px] mx-2">
        </a>
        <a href="https://www.linkedin.com/company/irede-instituto-de-gestão-redes-tecnológicas-e-energias/mycompany/">
          <img src="../../../assets/Imagens/icon_linkedin.svg" alt="Logo Linkedin"class="w-[50px] mx-2">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
