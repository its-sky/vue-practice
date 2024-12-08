<script setup>
  import Navbar from './components/Navbar.vue'
  import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <h1>App</h1>
  <Navbar />
  <SearchBar />
  <font-awesome-icon :icon="['fas', 'location-dot']" />
</template>

<style scoped lang="scss">

</style>
