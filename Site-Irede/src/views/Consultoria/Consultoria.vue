<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const inovacao = defineAsyncComponent(() => import("../../views/Consultoria/inovacao/inovacao.vue"));
const servicos = defineAsyncComponent(() => import("../../views/Consultoria/servicos/servicos.vue"));
const estrategia = defineAsyncComponent(() => import("../../views/Consultoria/estrategia/estrategia.vue"));
const relacionamento = defineAsyncComponent(() => import("../../views/Consultoria/relacionamento/relacionamento.vue"));
const escolher = defineAsyncComponent(() => import("../../views/Consultoria/escolher/escolher.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "Consultoria", components: { topbar, inovacao, servicos, estrategia, relacionamento, escolher, rodape } })
</script>

<template>
  <topbar />
  <inovacao />
  <servicos />
  <estrategia />
  <relacionamento />
  <escolher />
  <rodape />
</template>

<style scoped></style>
