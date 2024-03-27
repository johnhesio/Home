<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const energia_card = defineAsyncComponent(() => import("../../views/Energia/energia_card/energia_card.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "Pdi", components: { topbar, energia_card, rodape } })
</script>

<template>
  <topbar />
  <energia_card />
  <rodape />
</template>

<style scoped></style>
