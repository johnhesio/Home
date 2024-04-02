<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const saude_card = defineAsyncComponent(() => import("../../views/Saude/saude_card/saude_card.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "Saude", components: { topbar, saude_card ,rodape } })
</script>

<template>
  <topbar />
  <saude_card />
  <rodape />
</template>

<style scoped></style>
