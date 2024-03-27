<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const industria_card = defineAsyncComponent(() => import("../../views/Industria/industria_card/industria_card.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "Pdi", components: { topbar, industria_card , rodape } })
</script>

<template>
  <topbar />
  <industria_card />
  <rodape />
</template>

<style scoped></style>
