<template>
    <div class="flex justify-center">
        <button class="btn btn-secondary" @click="fizzBuzz">Show Fizz-Buzz</button>
        <button class="btn btn-accent" @click="fizzBuzzHide">Hide Fizz-Buzz</button>
        <div v-if="isClicked">
            <h1>FizzBuzz-Liste</h1>
            <ul>
                <li v-for="(item, index) in list" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const list = ref([])
const isClicked = ref(false)

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            list.value.push('FizzBuzz')
        } else if (i % 3 === 0) {
            list.value.push('Fizz')
        } else if (i % 5 === 0) {
            list.value.push('Buzz')
        } else {
            list.value.push(i.toString())
        }
    }
    isClicked.value = true
}

function fizzBuzzHide() {
    isClicked.value = false
}

</script>