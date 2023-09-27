<template>
    <div class="flex justify-center items-center mt-12">
        <div class="form-control w-full max-w-xs">
            <label class="label">
                <span class="label-text">{{ $t("guessNumber.guessBetween") }}</span>
            </label>
            <input v-model="number" type="number" :placeholder="$t('calculator.typeHere')"
                class="input input-bordered w-full max-w-xs" />
            <button class="btn" @click="prooveNumber">{{ $t("guessNumber.proove") }}</button>
        </div>
        <p>{{ resultMessage }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const number = ref("")
const targetNumber = ref(0)
const resultMessage = ref("")

const randomNumber = () => {
    targetNumber.value = Math.floor(Math.random() * 101)
    console.log(targetNumber.value);
}

const prooveNumber = () => {
    if (number.value === "") return
    const guessedNumber = parseInt(number.value)

    if (guessedNumber === targetNumber.value) {
        resultMessage.value = 'Glückwunsch! Du hast die richtige Zahl geraten.'
    } else if (guessedNumber < targetNumber.value) {
        resultMessage.value = 'Die geratene Zahl ist zu niedrig.'
    } else {
        resultMessage.value = 'Die geratene Zahl ist zu hoch.'

    }
}

onMounted(() => {
    randomNumber()
})
</script>