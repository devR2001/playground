<template>
    <div class="center">
        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs"
            v-model="isPalindrome" />
        <button class="btn btn-success" @click="checkIt">CHECK</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isPalindrome = ref("")

function checkIt() {
    const originalString = isPalindrome.value.toLowerCase().replace(/\s+/g, '');
    const reversedString = originalString.split("").reverse().join("")
    console.log(reversedString);

    if (originalString === reversedString) {
        alert('This string is a palindrome')
    } else {
        alert(`This isn't a Palindrome`)
    }
}
</script>