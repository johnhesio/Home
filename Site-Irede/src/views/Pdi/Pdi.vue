<script>
import { defineComponent, defineAsyncComponent } from "vue";
import Projeto_energia from "../../views/Pdi/projeto_energia/projeto_energia.vue";
const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const desenvolvimento = defineAsyncComponent(() => import("../../views/Pdi/desenvolvimento/desenvolvimento.vue"));
const educacao = defineAsyncComponent(() => import("../../views/Pdi/Educacao/educacao.vue"));
const energia = defineAsyncComponent(() => import("../../views/Pdi/energia/energia.vue"));
const projeto_energia = defineAsyncComponent(() => import("../../views/Pdi/projeto_energia/projeto_energia.vue"));
const industria = defineAsyncComponent(() => import("../../views/Pdi/industria/industria.vue"));
const projeto_industria = defineAsyncComponent(() => import("../../views/Pdi/projeto_industria/projeto_industria.vue"));
const saude = defineAsyncComponent(() => import("../../views/Pdi/saude/saude.vue"));
const sustentabilidade = defineAsyncComponent(() => import("../../views/Pdi/sustentabilidade/sustentabilidade.vue"));
const tecnologias = defineAsyncComponent(() => import("../../views/Pdi/tecnologias/tecnologias.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "Pdi", components: { topbar, desenvolvimento, educacao, energia, projeto_energia, industria, projeto_industria, saude, sustentabilidade, tecnologias, rodape } })
</script>

<template>
  <topbar />
  <desenvolvimento />
  <educacao />
  <energia />
  <projeto_energia />
  <industria />
  <projeto_industria />
  <saude />
  <sustentabilidade />
  <tecnologias />
  <rodape />
</template>

<style scoped></style>
