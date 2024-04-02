<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const fale = defineAsyncComponent(() => import("../../views/Contato/fale/fale.vue"));

const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "Contato", components: { topbar, fale, rodape } })
</script>

<template>
  <topbar />
  <fale />
  <rodape />
</template>

<style scoped></style>
