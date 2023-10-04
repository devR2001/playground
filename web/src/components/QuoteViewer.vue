<template>
  <div class="flex items-center justify-center h-screen">
    <div class="mockup-phone">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard artboard-demo phone-3">
          <div class="chat chat-start">
            <div v-if="loading">
              <div class="chat-bubble" v-for="quote in selectedQuote" :key="quote.text"
                style="margin-top: -300px; margin-left: 20px;">
                {{ quote.text }}
              </div>
            </div>
            <div v-else class="chat-bubble" style="margin-top: -300px;">
              <span class="loading loading-dots loading-md"></span>
            </div>
          </div>
          <div class="chat chat-end">
            <div class="chat-bubble" style="margin-bottom: -300px;">
              <button class="btn btn-primary" @click="loadNewQuote">{{ $t("quoteViewer.newQuote") }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const quotes = ref([]);
const selectedQuote = ref(null);
const loading = ref(true);

const selectRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.value.length);
  selectedQuote.value = [quotes.value[randomIndex]];
};

const loadNewQuote = async () => {
  loading.value = false;

  try {
    const response = await fetch('http://localhost:4000/quotes');
    const data = await response.json();
    quotes.value = data;
    console.log(quotes.value);

    setTimeout(() => {
      loading.value = true;
      selectRandomQuote(); 
    }, 1500);
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await loadNewQuote();
});
</script>
  