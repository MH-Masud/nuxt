<script setup>
import { ref, onMounted } from 'vue'

const data = ref([])
const error = ref(null)

const fetchData = async () => {
  try {
    data.value = await $fetch('https://jsonplaceholder.typicode.com/albums')
  } catch (err) {
    error.value = err
  }
}

onMounted(() => {
  fetchData()
})

if (error.value) {
  console.error('Error fetching data:', error.value)
}
</script>

<template>
  <div>
    <h1>Albums {{ useRoute().params.isMobile }}:</h1>
    <ul v-for="album in data" :key="album.id">
      <li>{{ album.id }} || {{ album.title }}</li>
    </ul>
  </div>
</template>