<script setup>

</script>

<template>
    <footer>
        <div class="logo">
            <img src="@/assets/images/sklogo.png" alt="SK Transport">
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
                <router-link :to="{ name: 'vognmand' }">Vognmand</router-link>
                <router-link :to="{ name: 'entreprenuer' }">Entreprenør</router-link>
                <router-link :to="{ name: 'sandoggrus' }">Sand & grus</router-link>
                <router-link :to="{ name: 'container' }">Containerkørsel</router-link>
                <router-link :to="{ name: 'maskinudlejning' }">Maskinudlejning</router-link>
                <router-link :to="{ name: 'kontakt' }">Kontakt</router-link>
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
            max-width: 440px
            justify-content: space-between
            display: flex
            gap: 2rem
            flex-wrap: wrap
            margin-left: 10rem

            a
                font-size: 24px
                font-weight: 600
                color: $black
                text-decoration: none

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