<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const capa_saude = defineAsyncComponent(() => import("../../views/IA_saude/card_saude/card_saude.vue"));
const inteligencia_saude = defineAsyncComponent(() => import("../../views/IA_saude/inteligencia_saude/inteligencia_saude.vue"));
const agilidade = defineAsyncComponent(() => import("../../views/IA_saude/agilidade/agilidade.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));


export default defineComponent({ name: "ia_saude", components: { topbar, capa_saude, inteligencia_saude, agilidade, rodape } })
</script>

<template>
    <topbar />
    <capa_saude />
    <inteligencia_saude />
    <agilidade />
    <rodape />
</template>

<style scoped></style>
