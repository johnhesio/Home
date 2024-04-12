<script>
import { createApp, ref } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
import { RouterLink } from "vue-router";
export default defineComponent({
  name: "topbar",
  setup() {
    let open = ref(false)
    let links = [
      { name: "Início", link: "/home" },
      { name: "Nós", link: "/sobre" },
      { name: "Cases", link: "/cases" },
      { name: "Atuação", link: "/pdi" },
      { name: "Contato", link: "/contato" },
    ]
    function menuopen() {
      open.value = !open.value
    }  
    return {
      links, open, menuopen
    }
  }
})

</script>

<template>
  <div class="bg-white text-black py-3.5 px-6 shadow md:flex justify-between items-center Prioridade">

    <router-Link to="/home">
      <div class="flex items-center">
        <img src="../../../assets/Imagens/logo_irede_home.png" alt="Logo Irede" class="h-16">
      </div>
    </router-Link>

    <span @click="menuopen()" class="absolute md:hidden items-center right-6 top-5 cursor-pointer text-4xl">
      <i :class="[open ? 'pi pi-times' : 'pi pi-bars']" style="font-size: 1.5rem"></i>
    </span>

    <ul
      class="md:flex md:items-center text-lg md:px-0 px-7 md:pb-0 md:static absolute bg-white md:w-auto w-[150px] duration-700 ease-in z-10"
      :class="[open ? 'left-0' : 'left-[-100%]']">
      <li class="md:mx-6 md:my-0 my-6" v-for="link in links">
        <router-link :to="link.link" class="rounded-full p-2 text-x1 hover:text-white hover:bg-[#8b47fe] hover:rounded-full hover:p-2 ">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
