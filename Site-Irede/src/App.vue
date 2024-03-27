<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
const home = defineAsyncComponent(() => import("./views/Home/Home.vue"));
const pdi = defineAsyncComponent(() => import("./views/Pdi/Pdi.vue"));
const empreendedorismo = defineAsyncComponent(() => import("./views/Empreendedorismo/Empreendedorismo.vue"));
const consultoria = defineAsyncComponent(() => import("./views/Consultoria/Consultoria.vue"));
const cases = defineAsyncComponent(() => import("./views/Cases/Cases.vue"));
const sobre_nos = defineAsyncComponent(() => import("./views/Sobre_nos/Sobre_nos.vue"));
const energia = defineAsyncComponent(() => import("./views/Energia/Energia.vue"));
const saude = defineAsyncComponent(() => import("./views/Saude/Saude.vue"));
const industria = defineAsyncComponent(() => import("./views/Industria/Industria.vue"));
const sustentabilidade = defineAsyncComponent(() => import("./views/Sustentabilidade/Sustentabilidade.vue"));
const educacao = defineAsyncComponent(() => import("./views/Educacao/Educacao.vue"));
export default defineComponent({ name: "App", components: { home } })
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped></style>
