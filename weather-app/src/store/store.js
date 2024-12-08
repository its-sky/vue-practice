import { createStore } from 'vuex';

// store 만들기
export default createStore({
  state: {
    // initial state
    count: 0,
		weatherData: {
			icon: 'icon',
			temp: 0,
			text: 'text',
			location: 'location',
			city: 'Seoul',
		},
		toggle: false, // true일 때 About페이지 보여줌
  },
  mutations: {
    // mutations(데이터 변경)
		addCount(state) {
			++state.count;
		},
		updateWeather(state, payload) {
			state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
		},
		onSearchCity(state, payload) {
			state.weatherData.city = payload;
		},
		toggleButton(state) {
			state.toggle = !state.toggle;
		}
  },
	actions: {
		getWeather(context) {
			const API_KEY = import.meta.env.VITE_API_KEY;
			const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`
			fetch(API_URL)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					// mutation 함수로 날씨 정보 업데이트
					context.commit('updateWeather', data);
				})
				.catch(err => {
					alert('에러가 발생했습니다.')
				})
		}
	}
})