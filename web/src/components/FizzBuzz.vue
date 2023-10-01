<template>
  <div class="flex flex-col items-center">
    <button class="btn btn-secondary" @click="fizzBuzz">{{ $t("fizzBuzz.show") }}</button>
    <button class="btn btn-accent" @click="fizzBuzzHide">{{ $t("fizzBuzz.hide") }}</button>
    <div v-if="isClicked">
      <div class="overflow-x-auto h-96">
        <table class="table table-pin-rows">
          <thead>
            <tr>
              <th>{{ $t("fizzBuzz.list") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="index">
              <td>{{ item }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const list = ref([]);
const isClicked = ref(false);

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      list.value.push("FizzBuzz");
    } else if (i % 3 === 0) {
      list.value.push("Fizz");
    } else if (i % 5 === 0) {
      list.value.push("Buzz");
    } else {
      list.value.push(i.toString());
    }
  }
  isClicked.value = true;
}

function fizzBuzzHide() {
  isClicked.value = false;
}
</script>
