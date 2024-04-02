<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const homero = defineAsyncComponent(() => import("../../views/EAD/homero/homero.vue"));
const cards = defineAsyncComponent(() => import("../../views/EAD/cards/cards.vue"));
const sucesso = defineAsyncComponent(() => import("../../views/EAD/sucesso/sucesso.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));


export default defineComponent({ name: "ead", components: { topbar, homero, cards, sucesso, rodape } })
</script>

<template>
    <topbar />
    <homero />
    <cards />
    <sucesso />
    <rodape />
</template>

<style scoped></style>
