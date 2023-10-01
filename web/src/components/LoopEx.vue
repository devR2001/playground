<template>
  <div class="text-center flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-semibold mb-4">Zahlenzähler</h1>
    <div class="flex">
      <ul class="list-disc pl-6">
        <li v-for="(number, index) in numbers" :key="index" class="mb-2">
          {{ number }}
        </li>
      </ul>
      <div v-if="tilTen">
        <button @click="showNextNumber" class="btn btn-primary mt-4">
          Loop + 1
        </button>
      </div>
      <ul class="list-disc pl-6">
        <li v-for="(loo, index) in loop" :key="index" class="mb-2">
          {{ loo }}
        </li>
      </ul>
      <div v-if="onlyOnce">
        <button @click="myLoop" class="btn btn-primary mt-4">
          Loop 1 - 10
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const loop = ref([]);
const numbers = ref([]);
const currentNumber = ref(0);
const onlyOnce = ref(true);
const tilTen = ref(true);

function showNextNumber() {
  if (currentNumber.value < 10) {
    currentNumber.value++;
    numbers.value.push(currentNumber.value);
  } else {
    tilTen.value = false
  }
}

function myLoop() {
  for (let i = 0; i < 11; i++) {
    loop.value.push(i);
    onlyOnce.value = false;
  }
}
</script>
