<template>
    <div>
        <div class="container px-3 py-6 prose">
            <h1 class="text-center">
                {{ $t("pyramid.pyramidOutput") }}

            </h1>
            <input v-model="pyInput" type="number" :placeholder="$t('pyramid.height')"
                class="input input-bordered input-secondary w-full max-w-xs mb-3" />
            <button @click="generatePyramid" class="btn btn-info ms-3">{{ $t("pyramid.generate") }}</button>
            <div v-if="pyramidOutput" class="mt-3 text-left">
                <pre>{{ pyramidOutput }}</pre>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const pyInput = ref("");
const pyramidOutput = ref("");

const generatePyramid = () => {
    const num = pyInput.value
    pyramidOutput.value = createPyramid(num)
}

const createPyramid = (num) => {
    let pyramid = "";

    for (let i = 1; i <= num; i++) {
        let spaces = "";
        for (let j = 0; j < num - i; j++) {
            spaces += " ";
        }

        let stars = "";
        for (let j = 0; j < 2 * i - 1; j++) {
            stars += "*";
        }

        let row = spaces + stars + "\n";
        pyramid += row;
    }

    return pyramid;
}


</script>
