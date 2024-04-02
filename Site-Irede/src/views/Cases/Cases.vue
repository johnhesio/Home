<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const cases_de_sucesso = defineAsyncComponent(() => import("../../views/Cases/sucesso/cases_de_sucesso.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));


export default defineComponent({ name: "Cases", components: { topbar, cases_de_sucesso, rodape } })
</script>

<template>
    <topbar />
    <cases_de_sucesso />
    <rodape />
</template>

<style scoped></style>
