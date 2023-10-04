<template>
  <div class="flex justify-center">

    <div class="w-full max-w-xs">
      <div class="mt-5 prose">
        <div class="flex justify-center"> 
          <h1>
            {{ $t("inputInfo.inputInfo") }}
          </h1>
        </div>
      </div>
      <div>
        <input v-model="input" type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
      </div>
      <div>
        {{ $t("inputInfo.inputInfo") }}
        {{ invert(input) }}
      </div>
      <div>
        {{ $t("inputInfo.countWords") }}
        {{ countWords(input) }}
      </div>
      <div>
        {{ $t("inputInfo.input") }}
        {{ input }}
      </div>
      <div>
        {{ $t("inputInfo.lowerCase") }}
        {{ lowerCase(input) }}
      </div>
      <div>
        {{ $t("inputInfo.upperCase") }}
        {{ upperCase(input) }}
      </div>
      <div>
        {{ $t("inputInfo.withoutSpace") }}
        {{ withoutSpace(input) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const input = ref("")
const hmc = ref(0)

const invert = (input) => {
  return input.split('').reverse().join('');
}

const countWords = (input) => {
  hmc.value = input.length
  return hmc.value
}

const lowerCase = (input) => {
  return input.toLowerCase()
}

const upperCase = (input) => {
  return input.toUpperCase()
}

const withoutSpace = (input) => {
  return input.replace(/\s/g, "")
}
</script>