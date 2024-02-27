<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "atuacao" })
</script>

<template>
    <div class="atuacao justify-content-center">
        <img src="../../assets/Imagens/bg_atuacao.png" alt="" class="atuacao-bg d-block w-100">
        <h1 class="atuacao-title roboto-bold">Área de Atuação</h1>
        <div class="atuacao-cards row justify-content-center">
            <div class="atuacao-card card col-sm-3" style="width: 18rem;">
                <div class="atuacao-img"><img src="../../assets/Imagens/pdi_icon.svg" class="card-img card-img-top"
                        alt="..."></div>
                <div class="card-body">
                    <h5 class="card-title roboto-bold">PD&I</h5>
                    <a href="#" class="button-slide roboto-regular btn btn-primary">Saiba Mais</a>
                </div>
            </div>
            <div class="atuacao-card card col-sm-3" style="width: 18rem;">
                <div class="atuacao-img"><img src="../../assets/Imagens/capacitacao_icon.svg" class="card-img-top"
                        alt="..."></div>
                <div class="card-body">
                    <h5 class="card-title roboto-bold">Capacitação</h5>
                    <a href="#" class="button-slide roboto-regular btn btn-primary">Saiba Mais</a>
                </div>
            </div>
            <div class="atuacao-card card col-sm-3" style="width: 18rem;">
                <div class="atuacao-img"><img src="../../assets/Imagens/empreendedorismo_icon.svg" class="card-img-top"
                        alt="..."></div>
                <div class="card-body">
                    <h5 class="card-title roboto-bold">Empreendedorismo</h5>
                    <a href="#" class="button-slide roboto-regular btn btn-primary">Saiba Mais</a>
                </div>
            </div>
            <div class="atuacao-card card col-sm-3 " style="width: 18rem;">
                <div class="atuacao-img"><img src="../../assets/Imagens/consultoria_icon.svg" class="card-img-top"
                        alt="..."></div>
                <div class="card-body">
                    <h5 class="card-title roboto-bold">Consultoria</h5>
                    <a href="#" class="button-slide roboto-regular btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

.atuacao-title {
    text-align: center;
    font-size: 3rem;
    padding: 2rem 0 2rem 0;
}

.atuacao-bg {
    position: absolute;
    left: 0;
    z-index: -1;
}

.atuacao-card {
    margin: 1rem 2rem;
    padding: 4rem 0 4rem 0;
    text-align: center;
    border: none;
    border-radius: 1rem;
}

.atuacao-img {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 150px;
}

.card-img-top {
    width: 7rem;
}

.card-title {
    font-size: larger;
    padding-bottom: 1.5rem;
}

.button-slide {
    text-decoration: none;
    padding: 0.3rem 2rem;
    color: #000;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 1px solid #000;
    border-radius: 50px;
    background-color: #fff;
}

.button-slide:hover {
    background-color: #8B47FE;
    border: 1px solid #8B47FE;
    border-radius: 50px;
    color: #fff;
}
</style>
