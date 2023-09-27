<template>
  <div class="container mx-auto text-center">
    <div class="container px-3 py-6 prose">
      <h1>
        {{ $t("calculator.calculator") }}
      </h1>
    </div>
    {{ $t("calculator.numInput") }}
    <input v-model="one" type="number" :placeholder="$t('calculator.typeHere')"
      class="input input-bordered input-primary w-full max-w-xs mx-auto" />

    {{ one }}
    <div>
      {{ $t("calculator.nextNumInput") }}
      <input v-model="two" type="number" :placeholder="$t('calculator.typeHere')"
        class="input input-bordered input-primary w-full max-w-xs mx-auto" />
      {{ two }}
    </div>
    <div>
      {{ $t("calculator.result") }}

      {{ addNums(one, two) }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import "@/locales/en.json"

const one = ref()
const sum = ref()
const two = ref()

const addNums = (one, two) => {
  sum.value = one + two
  return sum.value
}
</script>
