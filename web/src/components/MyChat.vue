<template>
    <div>
        <p>Moin Albert, hier ist die Ausgabe:</p>
        <ul v-if="data">
            <li><strong>ID:</strong> {{ data.id }}</li>
            <li><strong>Title:</strong> {{ data.title }}</li>
            <li><strong>User ID:</strong> {{ data.userId }}</li>
            <li><strong>Completed:</strong> {{ data.completed }}</li>
        </ul>
        <p v-else>Daten werden geladen...</p>
    </div>
    <button class="btn btn-success" @click="completed">Completd</button>
    <button class="btn btn-error" @click="notCompleted">Not Completd</button>

    <div>
        <p>Moin Albert, hier sind die Daten der Bilder:</p>
        <ul v-if="pictures">
            <li v-for="picture in pictures.slice(lastIndex, lastIndex + 10)" :key="picture.id">
                <strong>ID:</strong> {{ picture.id }}<br>
                <strong>Title:</strong> {{ picture.title }}<br>
                <strong>User ID:</strong> {{ picture.albumId }}<br>
                <strong>URL:</strong> {{ picture.url }}<br>
                <strong>Thumbnail URL:</strong> {{ picture.thumbnailUrl }}
            </li>
        </ul>
        <p v-else>Daten werden geladen...</p>
    </div>

    <button class="btn btn-ghost" @click="showPictures">Show Pictures</button>
    <button class="btn btn-ghost" @click="showMorePictures">Show More Pictures</button>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const data = ref({})
const pictures = ref([])
const lastIndex = ref(0)

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const responseData = await response.json()
        console.log('Haas:', responseData);
        data.value = responseData
    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error)
    }
}

const fetchPics = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const responseData = await response.json()
        console.log('sfargwad', responseData);
        pictures.value = responseData
    } catch (error) {
        console.error(error)
    }
}

function showPictures() {
    fetchPics()
}

function showMorePictures() {
    lastIndex.value += 10
}

function completed() {
    if (data.value && data.value.completed === false) {
        data.value.completed = true
    }
}

function notCompleted() {
    if (data.value && data.value.completed === true) {
        data.value.completed = false
    }
}

onMounted(() => {
    fetchData()
})
// function findPrimes(n) {
//     const primes = [];

//     for (let i = 2; i <= n; i++) {
//         let isPrime = true;

//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             primes.push(i);
//         }
//     }

//     console.log(primes);
// }

// findPrimes(11);

// function factorial(n) {
//     if (n === 0) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }

// console.log(factorial(0)); // sollte 1 zurückgeben
// console.log(factorial(5)); // sollte 120 zurückgeben
// console.log(factorial(10)); // sollte 3628800 zurückgeben


// function factorial(n, accumulator = 1) {
//     if (n === 0) {
//         return accumulator
//     } else {
//         return factorial(n - 1, n * accumulator)
//     }
// }

// console.log(factorial(0)); // sollte 1 zurückgeben
// console.log(factorial(5)); // sollte 120 zurückgeben
// console.log(factorial(10)); // sollte 3628800 zurückgeben
</script>
