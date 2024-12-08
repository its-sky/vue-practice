<template>
		<div class="container">
			<SearchBar @onSearchCity="onSearchCity" />
			<WeatherInfo :weatherData="props.weatherData" />
		</div>
</template>

<script setup>
	import SearchBar from './SearchBar.vue'
	import WeatherInfo from './WeatherInfo.vue'

	const emits = defineEmits(['onSearchCity']);

	const props = defineProps({
		weatherData: Object,
	})

	// 검색어 이벤트 함수
	const onSearchCity = (city) => {
		emits('onSearchCity', city);
	}
</script>
<style>

</style>