<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const edu_card = defineAsyncComponent(() => import("../../views/Educacao/edu_card/edu_card.vue"));

const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "Pdi", components: { topbar, edu_card, rodape } })
</script>

<template>
  <topbar />
<edu_card />
  <rodape />
</template>

<style scoped></style>
