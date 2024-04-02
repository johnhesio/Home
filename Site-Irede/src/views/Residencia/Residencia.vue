<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const restic_10 = defineAsyncComponent(() => import("../../views/Residencia/restic_10/restic_10.vue"));
const restic_capa = defineAsyncComponent(() => import("../../views/Residencia/restic_capa/restic_capa.vue"));
const residencia_seletiva = defineAsyncComponent(() => import("../../views/Residencia/residencia_seletiva/residencia_seletiva.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));


export default defineComponent({ name: "residencia", components: { topbar, restic_10, restic_capa, residencia_seletiva, rodape } })
</script>

<template>
    <topbar />
    <restic_10 />
    <restic_capa />
    <residencia_seletiva />
    <rodape />
</template>

<style scoped></style>
