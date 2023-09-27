<template>
  <h1 class="text-2xl font-semibold mb-4">Zahlenzähler</h1>
  <div class="flex">
    <ul class="list-disc pl-6">
      <li v-for="(number, index) in numbers" :key="index" class="mb-2">
        {{ number }}
      </li>
    </ul>
    <button @click="showNextNumber" class="btn btn-primary mt-4">Loop + 1</button>
    <ul class="list-disc pl-6">
      <li v-for="(loo, index) in loop" :key="index" class="mb-2">
        {{ loo }}
      </li>
    </ul>
    <button @click="myLoop" class="btn btn-primary mt-4">Loop 1 - 100</button>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const loop = ref([])
const numbers = ref([])
const currentNumber = ref(0)

function showNextNumber() {
  if (currentNumber.value < 10) {
    currentNumber.value++
    numbers.value.push(currentNumber.value)
  }
}

function myLoop() {
  for (let i = 0; i < 11; i++) {
    console.log('i:', i);
    loop.value.push(i)
  }
}
</script>
  