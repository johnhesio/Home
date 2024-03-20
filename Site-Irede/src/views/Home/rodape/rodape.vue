<script>
import { createApp, ref } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
  name: "rodape",
  setup() {

    let links = [
      {
        buttonName: "Inicío",
        buttonLink: "#",
      },
      {
        buttonName: "Nós",
        buttonLink: "#",
      },
      {
        buttonName: "Cases",
        buttonLink: "#",
      },
      {
        buttonName: "Atuação",
        buttonLink: "#",
      },
      {
        buttonName: "Contato",
        buttonLink: "#",
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
    <div class="md:flex p-4 shadow px-6 py-8 justify-between bg-purple-700">
      <div class="flex justify-center items-center md:items-start ml-[-30px] ">
        <img src="../../../assets/Imagens/irede_branca.png" alt="" class="h-20 pl-5">
      </div>
      <div class="md:flex md:items-center md:justify-between">
        <ul class="flex flex-col justify-center items-center md:items-start mb-6 sm:mb-0" v-for="link in links">
          <li>
            <a :href="link.buttonLink" class="text-xl text-white hover:underline md:mr-6">{{ link.buttonName }}</a>
          </li>
        </ul>
      </div>
      <div class="flex md:items-center justify-center">
        <a href="#">
          <img src="../../../assets/Imagens/icon_instagram.svg" alt="" class="w-[50px] mx-2">
        </a>
        <a href="#">
          <img src="../../../assets/Imagens/icon_facebook.svg" alt="" class="w-[50px] mx-2">
        </a>
        <a href="#">
          <img src="../../../assets/Imagens/icon_linkedin.svg" alt=""class="w-[50px] mx-2">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
