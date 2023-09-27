<template>
    <div style="margin-left: 165px;" class="prose text-center mb-4">
        <h1>
            {{ $t("mixin.mixin") }}

        </h1>
    </div>
    <div class="text-center">
        <button @click="addCount" class="btn btn-sm btn-primary">
            {{ count }}{{ $t("mixin.clicked") }}
        </button>
    </div>

    <div class="text-center mt-5">
        <h2 v-on:mouseover="hoverCounter">
            {{ hoverCount }}{{ $t("mixin.hovered") }}
        </h2>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const count = ref(0);
const hoverCount = ref(0);

const addCount = () => {
    count.value += 1;
};

const hoverCounter = () => {
    hoverCount.value += 1;
};
</script>
  