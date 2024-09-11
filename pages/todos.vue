<script setup>
const { data: serverData, error } = await useAsyncData('fetch-data', () =>
  $fetch('https://jsonplaceholder.typicode.com/todos')
)

const data = ref(serverData.value)

onMounted(async () => {
  data.value = await $fetch('https://jsonplaceholder.typicode.com/todos')
})

if (error.value) {
  console.error('Error fetching data:', error.value)
}
</script>

<template>
  <div>
    <h1>Todos {{ useRoute().params.isMobile }}:</h1>
    <ul v-for="todo in data" :key="todo.id">
      <li>{{ todo.id }} || {{ todo.title }}</li>
    </ul>
  </div>
</template>