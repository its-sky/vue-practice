<script setup>
  import { onMounted, ref, watch } from 'vue';
  import ChildComp from './components/ChildComp.vue';

  let count = ref(0);
  let title = "Hello Vue";
  let color = ref('green');

  onMounted(() => {
    console.log('mounted');
  })

  const increaseCount = () => {
    ++count.value;
  }

  watch(color, () => {
    console.log('color 변경');
  })
</script>

<template>
  <h1>{{ title }}</h1>
  <button @click="increaseCount">count</button>
  <p>{{ count }}</p>
  <ChildComp :color="color" bgColor="yellow" />
  <button @click="color='red'">change color</button>

</template>

<style>

</style>
