<script setup>

</script>

<template>
    <header>
        <router-link :to="{ name: 'home' }">SK Transport</router-link>
        <nav>
            <router-link :to="{ name: 'vognmand' }">Vognmand</router-link>
            <router-link :to="{ name: 'entreprenuer' }">Entreprenør</router-link>
            <router-link :to="{ name: 'sandoggrus' }">Sand & grus</router-link>
            <router-link :to="{ name: 'container' }">Containerkørsel</router-link>
            <router-link :to="{ name: 'maskinudlejning' }">Maskinudlejning</router-link>
            <router-link :to="{ name: 'kontakt' }">Kontakt</router-link>
        </nav>
    </header>
</template>

<style lang="sass" scoped>

</style>