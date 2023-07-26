<script setup>
import { ref } from 'vue';

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var header = document.getElementById('header');

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (header) {
      header.style.borderBottom = '1px solid #25252525';
      header.style.padding = '16px 64px';
    }
  } else {
    if (header) {
      header.style.borderBottom = 'none';
      header.style.padding = '32px 64px';
    }
  }
}

const mobileMenu = ref(false)

const toggleMobileMenu = () => {
    mobileMenu.value = !mobileMenu.value
}
</script>

<template>
    <header id="header">
        <router-link class="logo" :to="{ name: 'home' }">SK Transport</router-link>
        <nav class="desktop-nav">
            <router-link :to="{ name: 'vognmand' }">Vognmand</router-link>
            <router-link :to="{ name: 'entreprenuer' }">Entreprenør</router-link>
            <router-link :to="{ name: 'sandoggrus' }">Sand & grus</router-link>
            <router-link :to="{ name: 'container' }">Containerkørsel</router-link>
            <router-link :to="{ name: 'maskinudlejning' }">Maskinudlejning</router-link>
            <router-link :to="{ name: 'kontakt' }">Kontakt</router-link>
        </nav>
        <button @click="toggleMobileMenu" class="hamburger">
            <img src="@/assets/icons/hamburger.png" alt="Menu">
        </button>
        <nav v-if="mobileMenu" class="mobile-nav">
            <button @click="toggleMobileMenu" class="close-btn">
                <img src="@/assets/icons/x.png" alt="Close">
            </button>
            <router-link @click="toggleMobileMenu" :to="{ name: 'vognmand' }">Vognmand</router-link>
            <router-link @click="toggleMobileMenu" :to="{ name: 'entreprenuer' }">Entreprenør</router-link>
            <router-link @click="toggleMobileMenu" :to="{ name: 'sandoggrus' }">Sand & grus</router-link>
            <router-link @click="toggleMobileMenu" :to="{ name: 'container' }">Containerkørsel</router-link>
            <router-link @click="toggleMobileMenu" :to="{ name: 'maskinudlejning' }">Maskinudlejning</router-link>
            <router-link @click="toggleMobileMenu" :to="{ name: 'kontakt' }">Kontakt</router-link>
            <div class="lines">
                <div class="line top"></div>
                <div class="line bottom"></div>
            </div>
        </nav>
    </header>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

header
    display: flex
    justify-content: space-between
    align-items: center
    gap: 2rem
    position: fixed
    top: 0
    left: 0
    width: 100%
    box-sizing: border-box
    background: $white
    z-index: 10
    transition: 0.2s

    .logo
        text-decoration: none
        color: $red
        font-weight: 700
        font-size: 24px

    .desktop-nav
        display: flex
        gap: 16px
        align-items: center

        a
            text-decoration: none
            color: $black
            padding: 4px 0

            &:last-of-type
                padding-left: 15px
                border-left: 1px solid #25252525
                border-bottom: none !important
                font-weight: 700

        .router-link-active
            border-bottom: 1px solid $red

    .hamburger
        display: none
        border: none
        background: none

    .mobile-nav
        display: flex
        flex-direction: column
        gap: 2.5rem
        padding: 8rem 2rem 2rem 2rem
        height: 100vh
        width: 100%
        position: fixed
        top: 0
        left: 0
        z-index: 20
        background: $black
        box-sizing: border-box

        .close-btn
            width: 50px
            height: 50px
            border-radius: 50px
            background: #ff0000
            display: grid
            place-items: center
            border: none
            position: absolute
            right: 2rem
            top: 2rem

            img
                height: 24px !important
                width: 24px !important
                filter: invert(100%)

        a
            text-decoration: none
            font-size: 28px
            font-weight: 600
            color: $white

        .lines
            margin-top: auto

            .line
                height: 1px
                background: $red

            .top
                margin-bottom: 8px
                width: 35%

            .bottom
                width: 65%

@media (max-width: 950px)
    .hamburger
        display: flex !important

    .desktop-nav
        display: none !important
</style>