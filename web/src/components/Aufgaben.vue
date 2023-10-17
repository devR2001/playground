<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <input type="number" v-model="inputValue" @input="updateCounter"/>
    <button class="me-3 btn btn-secondary" @click="increment">Increment</button>
    <button class="me-3 btn btn-primary" @click="decrement">Decrement</button>
    <button class="me-3 btn btn-error" @click="reset">Reset</button>
    <p v-if="counter >= 10" class="message">{{ congratulationMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const counter = ref(0);
const congratulationMessage = "Herrvoragend! Der Zähler hat 10 erreicht!"
const inputValue = ref("")

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
    inputValue.value = ""
    localStorage.removeItem("counter")
}

function updateCounter(){
    const value = parseInt(inputValue.value)
    if (!isNaN(value)){
        counter.value = value
        localStorage.setItem("counter", counter.value)
    }
}

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp"){
        increment()
    } else if(event.key === "ArrowDown") {
        decrement()
    }
})

const validateCounter = (value) =>{
    if (value < 0){
        return 0 
    } 
    return value
}

watch(counter,(newVal) => {
    counter.value = validateCounter(newVal)
    localStorage.setItem("counter", counter.value)
})

watch(counter, (newVal, oldVal) => {
  console.log("Neuer Wert von counter: " + newVal);
  console.log("Alter Wert von counter: " + oldVal);
});
</script>


