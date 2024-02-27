<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "cati" })
</script>

<template>
    <div class="section-main">
        <img src="../../assets/Imagens/bg_agentesoftex.png" alt="" class="section-bg d-block w-100">
        <div class="section-main-content">
            <p class="section-text roboto-bold ">Credenciada ao:</p>
            <img src="../../assets/Imagens/cati.svg" alt="" class="section-img-1">
            <p class="section-text roboto-bold">Agente Excluisvo no Ceará</p>
            <img src="../../assets/Imagens/softex.svg" alt="" class="section-img-2">
        </div>
    </div>
</template>

<style scoped>
.section-main-content{
    padding-left: 4rem;
    flex-direction: column;
    height: 100vh;
    display: flex;
    justify-content: center;    
}
.section-bg {
    position: absolute;
    left: 0;
    z-index: -1;
}

.section-text {
    font-size: 2rem;

}

.section-img-1 {
    width: 25rem;
}

.section-img-2 {
    width: 25rem;
}
</style>
