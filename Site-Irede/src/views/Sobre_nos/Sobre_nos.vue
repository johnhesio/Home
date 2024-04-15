<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const nos = defineAsyncComponent(() => import("../../views/Sobre_nos/nos/nos.vue"));
const video_irede = defineAsyncComponent(() => import("../../views/Sobre_nos/video_irede/video_irede.vue"));
const missao = defineAsyncComponent(() => import("../../views/Sobre_nos/missao/missao.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "Sobre_nos", components: { topbar, nos, video_irede, missao, rodape } })
</script>

<template>
  <topbar />
  <nos />
  <video_irede />
  <missao />
  <rodape />
</template>

<style scoped></style>
