<script>
import { createApp } from "vue";
import Menubar from 'primevue/menubar';
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "topbar" })
const items = ref([
  {
    label: Inicío
  },
  {
    label: Nós
  },
  {
    label: cases
  },
  {
    label: Atuação
  },
  {
    label: Contato
  }
])
</script>

<template>
  <div class="Topbar-menu h-[90px] bg-slate-400 flex items-center">
    <Menubar :model="items">
      <div class="Topbar-img">
        <img src="../../assets/Imagens/logo_irede.jpg" alt="" width="220px">
      </div>
      <div v-for="items">
        
      </div>
    </Menubar>
  </div>
</template>

<style scoped></style>
