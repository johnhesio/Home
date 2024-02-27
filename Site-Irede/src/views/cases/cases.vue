<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "cases" })
lista = [
    {
        title:  ,
        image: ,
        description: ,
        link: ,
    },
]
</script>

<template>
    <div v-for="card in lista">
        <img :src="card.image" />
        <p>{{ card.title }}</p>
    </div>
</template>

<style scoped></style>
