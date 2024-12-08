<script setup>
  import Navbar from './components/Navbar.vue'
  import MainComp from './components/MainComp.vue'
  import { onMounted, ref } from 'vue'

  // 날씨 데이터 가져오기
  function getWeather() {
    console.log('mounted')
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=${API_KEY}`
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        weatherData.value.icon = data.weather[0].icon;
        weatherData.value.temp = data.main.temp;
        weatherData.value.text = data.weather[0].description;
        weatherData.value.location = data.sys.country;
        weatherData.value.city = data.name;
        console.log(weatherData.value);
      })
      .catch(err => {
        alert('에러가 발생했습니다.')
      })
  }

  // 날씨 데이터 상태변수
  const weatherData = ref({
    icon: 'icon',
    temp: 0,
    text: 'text',
    location: 'location',
    city: 'Seoul',
  });
  const API_KEY = "";
  onMounted(() => {
    getWeather();
  })

  const onSearchCity = (city) => {
    weatherData.value.city = city;
    getWeather();
  };
</script>

<template>
  <Navbar />
  <MainComp
    :weatherData="weatherData"
    @onSearchCity="onSearchCity" />
  <font-awesome-icon :icon="['fas', 'location-dot']" />
</template>

<style scoped lang="scss">

</style>
