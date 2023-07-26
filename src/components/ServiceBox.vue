<script setup lang="ts">
const props = defineProps({
    iconFilename: String,
    title: String,
    body: String,
    price: String
})
</script>

<template>
    <div class="service-box">
        <div class="box-header">
            <img :src="`/public/icons/${props.iconFilename}`" alt="">
            <h3>{{ title }}</h3>
        </div>
        <p>{{ body }}</p>
        <h3 class="price">Priser fra: <span>{{ price }} kr</span></h3>
    </div>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

.service-box
    padding: 1rem
    background: $white
    border-radius: 28px
    border: 1px solid #25252525
    max-width: 264px
    height: 264px
    position: relative
    transition: 0.2s
    cursor: default

    &:hover
        box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.25)

    .box-header
        display: flex
        gap: 2rem
        align-items: center

        img
            width: 50px !important
            height: 50px !important

    h3
        margin: 0
        color: $black
        font-weight: 500

    p
        margin: 1rem 0 0 0
        color: #25252590
        line-height: 1.2

    .price
        position: absolute
        bottom: 1rem

        span
            color: $red
            display: inline-block
            margin-left: auto
</style>