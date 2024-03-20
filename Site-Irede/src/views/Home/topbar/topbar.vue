<script>
import { createApp, ref } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
  name: "topbar",
  setup() {
    let open = ref(false)
    let links = [
      { name: "Inicío", link: "/builder" },
      { name: "Nós", link: "/builder" },
      { name: "Cases", link: "/builder" },
      { name: "Atuação", link: "/builder" },
      { name: "Contato", link: "/builder" },
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
    <div class="flex items-center cursor-pointer">
      <img src="../../../assets/Imagens/logo_irede.jpg" alt="" class="h-16">
    </div>

    <span @click="menuopen()" class="absolute md:hidden items-center right-6 top-5 cursor-pointer text-4xl">
      <i :class="[open ? 'pi pi-times' : 'pi pi-bars']" style="font-size: 1.5rem"></i>
    </span>

    <ul
      class="md:flex md:items-center text-lg md:px-0 px-7 md:pb-0 md:static absolute bg-white md:w-auto w-[150px] duration-700 ease-in z-10"
      :class="[open ? 'left-0' : 'left-[-100%]']">
      <li class="md:mx-6 md:my-0 my-6" v-for="link in links">
        <router-link :to="link.link" class="text-x1 hover:text-purple-500">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
