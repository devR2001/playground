<template>
    <div>
      <input v-model="searchInput" placeholder="Wort eingeben" class="w-full p-2 border rounded" />
      <button class="button" @click="searchWord">Definition anzeigen</button>
      <div v-if="definition">
        <h2 class="font-semibold">{{ definition.word }}</h2>
        <div v-for="entry in definition.meanings" :key="entry.partOfSpeech">
          <h3 class="font-medium">{{ entry.partOfSpeech }}</h3>
          <ul>
            <li v-for="def in entry.definitions" :key="def.definition">{{ def.definition }}</li>
          </ul>
        </div>
      </div>
      <p v-else>Keine Definition gefunden.</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const searchInput = ref("")
  const definition = ref(null)
  
  const searchWord = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.value}`)
      const data = await response.json()
      if (Array.isArray(data)) {
        definition.value = data[0]
      } else {
        definition.value = null
      }
    } catch (error) {
      console.error(error)
    }
  }
  </script>
  