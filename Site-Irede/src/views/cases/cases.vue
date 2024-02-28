<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
import image1 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image2 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image3 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image4 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image5 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image6 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image7 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image8 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image9 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image10 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image11 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image12 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image13 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image14 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import image15 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
export default defineComponent({
    data() {
        return {
            cardList: [
                {
                    title: "Residência em Desenvolvimento de Aplicativos",
                    image: image1,
                    description: "Apps que Elevam Experiências e conectam Ideias Atividade",
                    link: "#"
                },
                {
                    title: "Residência em Desenvolvimento de Aplicativos",
                    image: image2,
                    description: "Apps que Elevam Experiências e conectam Ideias Atividade",
                    link: "#"
                },
                {
                    title: "Residência em Desenvolvimento de Aplicativos",
                    image: image3,
                    description: "Apps que Elevam Experiências e conectam Ideias Atividade",
                    link: "#"
                },
                {
                    title: "Residência em Desenvolvimento de Aplicativos",
                    image: image4,
                    description: "Apps que Elevam Experiências e conectam Ideias Atividade",
                    link: "#"
                },

            ]
        }
    }
})
</script>

<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <img src="../../assets/Imagens/bg_cases.png" alt="" class="cases-bg d-block w-100">
        <h1 class="cases-title roboto-bold"></h1>
        <div class="teste">
        <div class="carousel-inner">
            <div v-for="card in cardList" :key="card" class="color carousel-item active">
                <img :src="card.image" width="200px" class="cases-img">
                <p>{{ card.title }}</p>
                <p>{{ card.description }}</p>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
</template>

<style>
.cases-bg {
    position: absolute;
    left: 0;
    z-index: -1;
}

</style>


