<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const industria = defineAsyncComponent(() => import("../../views/Empreendedorismo/industria/industria.vue"));
const automatizacao = defineAsyncComponent(() => import("../../views/Empreendedorismo/automatizacao/automatizacao.vue"));
const startup = defineAsyncComponent(() => import("../../views/Empreendedorismo/startup/startup.vue"));
const uece = defineAsyncComponent(() => import("../../views/Empreendedorismo/uece/uece.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "Pdi", components: { topbar, industria, automatizacao,startup, uece, rodape } })
</script>

<template>
  <topbar />
  <industria />
  <automatizacao />
  <startup />
  <uece />
  <rodape />
</template>

<style scoped></style>
