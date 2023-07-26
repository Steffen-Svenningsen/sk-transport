<script setup>

</script>

<template>
    <section>
        <h1>Kontakt os</h1>
        <h3>Har du brug for vores hjælp eller har du spørgsmål? <br class="desktop-br"> Hiv endelig fat i os.</h3>
        <div class="contact-bar">
            <a href="mailto:sktransp@hotmail.com" class="mail">
                <div class="image-container">
                    <img src="@/assets/icons/mail.png" alt="Email">
                </div>
                <div class="text">
                    <p>Email</p>
                    <p>sktransp@hotmail.com</p>
                </div>
            </a>
            <a href="tel:24614037" class="phone">
                <div class="image-container">
                    <img src="@/assets/icons/phone.png" alt="Mobil">
                </div>
                <div class="text">
                    <p>Mobil</p>
                    <p>+45 24 61 40 37</p>
                </div>
            </a>
        </div>
    </section>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

section
    background: #1b1b1b
    display: grid
    place-items: center

    h1
        font-size: 48px
        color: $white
        font-weight: 700
        margin: 80px 0 28px 0

    h3
        font-weight: 500
        font-size: 20px
        color: #ffffff80
        line-height: 1.2

    h1, h3
        text-align: center

    .contact-bar
        margin-top: 4rem
        background: transparent
        border: 1px solid #ffffff80
        display: flex
        gap: 4rem
        width: fit-content
        flex-wrap: wrap
        padding: 2rem
        border-radius: 100px
        box-sizing: border-box
        justify-content: center
        margin-bottom: 80px

        a
            display: flex
            align-items: center
            text-decoration: none
            gap: 1.5rem

            &:last-of-type
                border-left: 1px solid #ffffff80
                padding-left: 4rem

            .image-container
                width: 80px
                height: 80px
                border-radius: 100px
                display: grid
                place-items: center
                background: $red

                img
                    width: 40px !important
                    height: 40px !important
                    filter: invert(100%)

            .text
                p
                    color: $white
                    line-height: 1.4

                    &:first-of-type
                        color: #ffffff80

@media (max-width: 760px)
    .desktop-br
        display: none

    .contact-bar
        border-radius: 50px !important
        justify-content: flex-start !important
        gap: 2rem !important

        a
            &:last-of-type
                border-left: none !important
                padding-left: 0 !important
</style>