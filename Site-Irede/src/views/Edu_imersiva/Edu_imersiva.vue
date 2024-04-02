<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const metaclassroom = defineAsyncComponent(() => import("../../views/Edu_imersiva/metaclassroom/metaclassroom.vue"));
const ambiente_imersivo = defineAsyncComponent(() => import("../../views/Edu_imersiva/ambiente_imersivo/ambiente_imersivo.vue"));
const interacao = defineAsyncComponent(() => import("../../views/Edu_imersiva/interacao/interacao.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));


export default defineComponent({ name: "edu_imersiva", components: { topbar, metaclassroom, ambiente_imersivo, interacao, rodape } })
</script>

<template>
    <topbar />
    <metaclassroom />
    <ambiente_imersivo />
    <interacao />
    <rodape />
</template>

<style scoped></style>
