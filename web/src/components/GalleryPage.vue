

<template>
    <div>
      Type a number: <input v-model.number="number" />
      <p class="big-number">{{ tweened.number.toFixed(0) }}</p>
    </div>

    <p>Title: {{ list.title }}</p>
    <p>Body: {{ list.body }}</p>
  </template>
  
  <script setup>
  import { ref, reactive, watch, onMounted } from 'vue'
  import gsap from 'gsap'
  
  const list = ref([])
  const number = ref(0)
  const tweened = reactive({
    number: 0
  })

  const fetchData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    list.value = data
    console.log(data)
  }
  
  watch(number, (n) => {
      gsap.to(tweened, { duration: 1, number: Number(n) || 0 })
    }
  )

onMounted(() => {
    fetchData();
});
  </script>
  
  <style>
  .big-number {
    font-weight: bold;
    font-size: 2em;
  }
  </style>
  