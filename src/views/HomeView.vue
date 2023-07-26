<script setup>
import ServiceBox from '../components/ServiceBox.vue';
</script>

<template>
  <main>
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