<script>
import Carousel from 'primevue/carousel';
import image1 from "../../assets/Imagens/Residencia-em-Desen-de-Aplicativos.jpg"
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
    name: "cases",
    components: { Carousel },
    setup() {
        const carouselSlides = [
            {
                image: image1,
                imageAlt: "text alt",
                imageTitle: "text title",
                imageText: "text text",
            },
            {
                image: image1,
                imageAlt: "text alt",
                imageTitle: "text title",
                imageText: "text text",
            },
            {
                image: image1,
                imageAlt: "text alt",
                imageTitle: "text title",
                imageText: "text text",
            },
            {
                image: image1,
                imageAlt: "text alt",
                imageTitle: "text title",
                imageText: "text text",
            },
            {
                image: image1,
                imageAlt: "text alt",
                imageTitle: "text title",
                imageText: "text text",
            },
            {
                image: image1,
                imageAlt: "text alt",
                imageTitle: "text title",
                imageText: "text text",
            },
            {
                image: image1,
                imageAlt: "text alt",
                imageTitle: "text title",
                imageText: "text text",
            },
            {
                image: image1,
                imageAlt: "text alt",
                imageTitle: "text title",
                imageText: "text text",
            },
            {
                image: image1,
                imageAlt: "text alt",
                imageTitle: "text title",
                imageText: "text text",
            },
        ];
        return { carouselSlides };
    },
});

</script>

<template>
    <Carousel :value="carouselSlides" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions"
        :autoplayInterval="3000">
        <template #item="slotProps">
            <div class="bg-black h-screen">
                <div class=" border border-surface-200 dark:border-surface-700 rounded-md m-2 p-3">
                    <div class="mb-3">

                    </div>
                </div>

                <div></div>

                <div>
                    <div></div>
                    <span>
                        <button></button>
                    </span>
                </div>
            </div>
        </template>

    </Carousel>
</template>

<style scoped></style>
