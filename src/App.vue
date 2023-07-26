<script setup>
import GlobalHeader from './components/GlobalHeader.vue';
import GlobalFooter from './components/GlobalFooter.vue';
import ContactBar from './components/ContactBar.vue';
</script>

<template>
  <GlobalHeader />
  <RouterView />
  <ContactBar />
  <GlobalFooter />
</template>
