<template>
    <div :key="confettiKey">
      <ConfettiExplosion :duration="4000" :force="1" :stageHeight="840" :stageWidth="2600" :particleCount="300" />
    </div>
  
    <div>
      <div class="logo-container mt-24">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
        <img src="/vue.svg" class="logo vue" alt="Vue logo" />
      </div>
      
      <div class="text-center">
        <div class="flex justify-center">
          <button class="btn btn-secondary" @click="clickedConfetti">Willkommen</button>
          <label for="my-drawer-4" class="btn btn-info ml-2">
            Show Projects
          </label>
        </div>
        <a href="https://github.com/devR2001" target="_blank" rel="noopener noreferrer">
          <button class="btn btn-success mt-2">Look at my GitHub Profile: devR2001</button>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import ConfettiExplosion from "vue-confetti-explosion";
  import { ref } from 'vue'
  
  const confettiKey = ref(0);
  
  function clickedConfetti() {
    confettiKey.value++;
  }
  </script>
  