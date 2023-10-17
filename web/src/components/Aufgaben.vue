<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button class="me-3 btn btn-secondary" @click="increment">Increment</button>
    <button class="me-3 btn btn-primary" @click="decrement">Decrement</button>
    <button class="me-3 btn btn-error" @click="reset">Reset</button>
    <p v-if="counter >= 10" class="message">{{ congratulationMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const counter = ref(0);
const congratulationMessage = "Herrvoragend! Der Zähler hat 10 erreicht!"

onMounted(() => {
    const savedCounter = localStorage.getItem("counter")
    if(savedCounter !== null){
        counter.value = parseInt(savedCounter)
    }
})

function increment() {
  counter.value++;
  localStorage.setItem("counter", counter.value)
}

function decrement() {
  if (counter.value <= 0) {
    counter.value == 0;
  } else {
    counter.value --
  }
  localStorage.setItem("counter", counter.value)
}

const reset = () => {
    counter.value = 0
    localStorage.removeItem("counter")
}
</script>


