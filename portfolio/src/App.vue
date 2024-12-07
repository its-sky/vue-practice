<script setup>
  import NavbarComp from './components/Navbar.vue'
  import data from './assets/portfolio';
</script>

<template>
  <NavbarComp />
  <router-view :data="data" />
</template>

<style scoped lang="scss">

</style>
