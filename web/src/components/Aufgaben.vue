<template>
  <div class="flex justify-center items-center">
    <div>
      <p>Counter: {{ counter }}</p>
      <input
        placeholder="Type in number"
        class="me-3 input input-bordered input-primary max-w-xs"
        type="number"
        v-model="inputValue"
        @input="updateCounter"
      />
      <p v-if="inputError" class="text-danger">{{ inputError }}</p>
      <button class="me-3 btn btn-secondary" @click="increment">
        Increment
      </button>
      <button class="me-3 btn btn-primary" @click="decrement">Decrement</button>
      <button class="me-3 btn btn-error" @click="reset">Reset</button>
      <transition name="fade" mode="out-in">
        <p v-if="counter >= 10" class="message">{{ congratulationMessage }}</p>
      </transition>

      <div>
        <div class="justify-center items-center flex mt-5">
          <input
            v-model.number="number"
            placeholder="Type a number"
            class="input input-bordered input-primary max-w-xs mt-5"
          />
        </div>

        <div class="big-number-container">
          <p class="mt-4 text-5xl font-bold">{{ tweened.number.toFixed(0) }}</p>
        </div>
<div class="justify-center items-center flex mt-4" v-if="warningMessage">
  <div class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>{{ warningMessage }}</span>
</div>

</div>

        <div class="justify-center items-center flex mt-5">
          
          <button class="btn btn-error" @click="startTimer">Timer starten</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, warn } from "vue";

const counter = ref(0);
const congratulationMessage = "Hervorragend! Der Zähler hat 10 erreicht!";
const inputValue = ref("");
const inputError = ref("");
const warningMessage = ref("")

import gsap from "gsap";

const number = ref(0);
const tweened = reactive({
  number: 0,
});

watch(number, (n) => {
  gsap.to(tweened, { duration: 1, number: Number(n) || 0 });
});

onMounted(() => {
  const savedCounter = localStorage.getItem("counter");
  if (savedCounter !== null) {
    counter.value = parseInt(savedCounter);
  }
});

function increment() {
  counter.value++;
  localStorage.setItem("counter", counter.value);
}

function decrement() {
  if (counter.value <= 0) {
    counter.value = 0;
  } else {
    counter.value--;
  }
  localStorage.setItem("counter", counter.value);
}

const reset = () => {
  counter.value = 0;
  inputValue.value = "";
  localStorage.removeItem("counter");
};

function updateCounter() {
  const value = parseInt(inputValue.value);
  if (!isNaN(value) && value >= 0) {
    counter.value = value;
    localStorage.setItem("counter", counter.value);
    inputError.value = "";
  } else {
    inputError.value = "Bitte gib eine positive Zahl ein.";
  }
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    increment();
  } else if (event.key === "ArrowDown") {
    decrement();
  }
});

const validateCounter = (value) => {
  if (value < 0) {
    return 0;
  }
  return value;
};

function startTimer() {
  let currentValue = number.value;

  if (!isNaN(currentValue) && currentValue >= 0) {
    const interval = 1000;

    const reduceNumber = () => {
      currentValue--;
      if (currentValue >= 0) {
        number.value = currentValue;
      } else {
        clearInterval(timer);
      }
    };

    const timer = setInterval(reduceNumber, interval);

    console.log(currentValue);
  } else {
    console.error("Ungültige Eingabe. Bitte geben Sie eine positive Zahl ein.");
    warningMessage.value = "Ungültige Eingabe. Bitte geben Sie eine positive Zahl ein."
  }
}


watch(counter, (newVal) => {
  counter.value = validateCounter(newVal);
  localStorage.setItem("counter", counter.value);
});

watch(counter, (newVal, oldVal) => {
  console.log("Neuer Wert von counter: " + newVal);
  console.log("Alter Wert von counter: " + oldVal);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.big-number-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
