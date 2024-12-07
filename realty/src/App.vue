<template>

  <div class="black-bg" v-if="modalOpenState == true">
    <div class="white-bg">
      <h4>상세페이지 제목</h4>
      <p>상세페이지 내용</p>
      <button @click="modalOpenState = false"></button>
    </div>
  </div>

  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">

  <div v-for="(product, i) in response" :key="i">
    <h4 @click="modalOpenState = true">{{ product.title }}</h4>
    <img :src="product.image" />
    <p>{{ product.content }}</p>
    <p>{{ product.price }}</p>
    <button @click="increaseReportCount(i)">허위매물 신고</button>
    <br>
    <span>신고 수 : {{ reportCounts[i] }}</span>
  </div>

</template>

<script>
import response from "./data/data.js"

export default {
  name: 'App',
  data() {
    return {
      modalOpenState: false,
      reportCounts: [0, 0, 0],
      menus: ['Home', 'Products', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      response: response
    }
  },
  methods: {
    increaseReportCount(i) {
      ++this.reportCounts[i];
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  background: yellowgreen;
  color: white;
  padding: 10px;
  margin: 3px;
  border-radius: 5px;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
