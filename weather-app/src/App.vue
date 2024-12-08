<script setup>
  import Navbar from './components/Navbar.vue'
  import MainComp from './components/MainComp.vue'
  import About from './components/About.vue'
  import { onMounted, ref } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore();

  onMounted(() => {
    store.dispatch('getWeather');
  })

  const onSearchCity = (city) => {
    weatherData.value.city = city;
    getWeather();
  };
</script>

<template>
  <Navbar />
  <div v-if="$store.state.toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<style scoped lang="scss">

</style>
