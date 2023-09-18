<script setup>

</script>

<template>
    <footer>
        <div class="logo">
            <img src="@/assets/images/sklogo.png" width="280" height="75" alt="SK Transport">
        </div>
        <div class="line"></div>
        <div class="info-container">
            <div class="contacts">
                <p>
                    Håndværkervej 6, Sejerslev <br>
                    7900 Nykøbing Mors
                </p> <br>
                <a href="tel:24614037">Tlf.: 24 61 40 37</a> <br>
                <a href="mailto:sktranp@hotmail.com">Email: sktransp@hotmail.com</a>
                <p>CVR: 27761518</p>
            </div>
            <div class="line line-mobile"></div>
            <div class="links">
                <h6>Genveje</h6>
                <nav>
                    <router-link :to="{ name: 'vognmand' }">Vognmand</router-link>
                    <router-link :to="{ name: 'entreprenuer' }">Entreprenør</router-link>
                    <router-link :to="{ name: 'sandoggrus' }">Sand & grus</router-link>
                    <router-link :to="{ name: 'container' }">Containerkørsel</router-link>
                    <router-link :to="{ name: 'maskinudlejning' }">Maskinudlejning</router-link>
                    <router-link :to="{ name: 'kontakt' }">Kontakt</router-link>
                </nav>
            </div>
        </div>
    </footer>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

footer
    background: $white

    .logo
        max-width: 280px

    .line
        margin: 32px 0
        background: #25252525
        height: 1px
        width: 100%

    .info-container
        display: flex
        gap: 2rem
        flex-wrap: wrap

        .contacts
            line-height: 1.4

            p, a
                font-size: 16px
                color: $black
                text-decoration: none

        .line-mobile
            display: none

        .links
            justify-content: space-between
            display: flex
            flex-direction: column
            gap: 1rem
            flex-wrap: wrap
            margin-left: 10rem

            h6
                font-size: 20px
                font-weight: 500
                position: relative
                width: fit-content

                &::after
                    position: absolute
                    content: ''
                    width: 32px
                    height: 3px
                    background: $red
                    bottom: -6px
                    left: 0
                    opacity: 0.65


            nav
                display: flex
                flex-direction: column
                gap: 16px
                flex-wrap: wrap
                max-height: 100px


                a
                    color: $black
                    text-decoration: none
                    opacity: 0.75
                    transition: 0.2s

                    &:hover
                        opacity: 1

@media (max-width: 950px)
    footer

        .info-container
            flex-direction: column-reverse
            gap: 0

            .links
                margin-left: 0 !important

            .line-mobile
                display: block !important
            
</style>