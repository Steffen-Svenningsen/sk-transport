<script setup>
import ServiceBox from '../components/ServiceBox.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'

const changeSlide = () => {
  return {
    modules: [Navigation]
  }
}
</script>

<template>
  <main>
    <section class="hero-section">
      <swiper class="my-swiper" css-mode="true" :navigation="true" :modules="changeSlide().modules" space-between="32px" :slides-per-view="1">
        <swiper-slide><img src="@/assets/images/brand-image.webp" width="1440" height="760" alt="Truck"></swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
      </swiper>
    </section>
    <section class="service-section">
      <h1 class="title">Vi klarer alt!</h1>
      <p class="subtitle">Som entreprenør og vognmandsfirma kan vi hos SK Transport klare en bred vifte af opgaver.</p>
      <img class="truck-img" src="@/assets/images/cargo-truck.png" width="180" height="180" alt="Lastbil">
      <div class="flex-row">
        <ServiceBox 
          title="Leje af container" 
          icon-filename="truck.png" 
          body="Står du midt i at renovere udehus eller andet der kræver en container at smide murbrokker eller lign. i?" 
          price="299" 
        />
        <ServiceBox 
          title="Leje af container" 
          icon-filename="truck.png" 
          body="Står du midt i at renovere udehus eller andet der kræver en container at smide murbrokker eller lign. i?" 
          price="299" 
        />
        <ServiceBox 
          title="Leje af container" 
          icon-filename="truck.png" 
          body="Står du midt i at renovere udehus eller andet der kræver en container at smide murbrokker eller lign. i?" 
          price="299" 
        />
        <ServiceBox 
          title="Leje af container" 
          icon-filename="truck.png" 
          body="Står du midt i at renovere udehus eller andet der kræver en container at smide murbrokker eller lign. i?" 
          price="299" 
        />
        <ServiceBox 
          title="Leje af container" 
          icon-filename="truck.png" 
          body="Står du midt i at renovere udehus eller andet der kræver en container at smide murbrokker eller lign. i?" 
          price="299" 
        />
        <ServiceBox 
          title="Leje af container" 
          icon-filename="truck.png" 
          body="Står du midt i at renovere udehus eller andet der kræver en container at smide murbrokker eller lign. i?" 
          price="299" 
        />
        <ServiceBox 
          title="Leje af container" 
          icon-filename="truck.png" 
          body="Står du midt i at renovere udehus eller andet der kræver en container at smide murbrokker eller lign. i?" 
          price="299" 
        />
        <ServiceBox 
          title="Leje af container" 
          icon-filename="truck.png" 
          body="Står du midt i at renovere udehus eller andet der kræver en container at smide murbrokker eller lign. i?" 
          price="299" 
        />
      </div>
      <p class="note">Kontakt os for et uforpligtende tilbud så finder vi den perfekte løsning til dig!</p>
    </section>
  </main>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

.hero-section
  padding-top: 16px !important

  .my-swiper
    height: auto
    max-width: 1440px
    margin: 0 auto

    .swiper-slide
      width: 100%
      height: auto
      display: grid
      place-items: center

.service-section
  position: relative

  h1
    font-weight: 700

  p
    margin: 2rem 0 6rem 0
    max-width: 50ch
    line-height: 1.2

  .truck-img
    position: absolute
    top: 64px
    right: 64px

  .flex-row
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    gap: 2rem

  .note
    color: #25252590
    text-align: center
    font-size: 14px
    margin: 3rem auto

@media (max-width: 780px)

  .title, .subtitle
    text-align: center

  .subtitle
    max-width: 100% !important

  .truck-img
    display: none

  .flex-row
    justify-content: center !important
</style>