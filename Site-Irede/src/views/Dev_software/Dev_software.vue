<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const capa = defineAsyncComponent(() => import("../../views/Dev_software/capa_dev_soft/capa_dev_soft.vue"));
const capacitacao_massiva = defineAsyncComponent(() => import("../../views/Dev_software/capacitacao_massiva/capacitacao_massiva.vue"));
const duracao = defineAsyncComponent(() => import("../../views/Dev_software/duracao/duracao.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));


export default defineComponent({ name: "dev_software", components: { topbar, capa, capacitacao_massiva, duracao, rodape }})
</script>

<template>
    <topbar />
    <capa />
    <capacitacao_massiva />
    <duracao />
    <rodape />
</template>

<style scoped></style>
