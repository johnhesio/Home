<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const sus_card = defineAsyncComponent(() => import("../../views/Sustentabilidade/sus_card/sus_card.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "Pdi", components: { topbar, sus_card, rodape } })
</script>

<template>
  <topbar />
  <sus_card />
  <rodape />
</template>

<style scoped></style>
