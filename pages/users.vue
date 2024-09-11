<script setup>
const { data, error } = await useFetch('https://jsonplaceholder.typicode.com/users')

if (error.value) {
  console.error('Error fetching data:', error.value)
}
</script>

<template>
  <div>
    <h1>Users {{ useRoute().params.isMobile }}:</h1>
    <ul v-for="users in data" :key="users.id">
      <li>{{ users.id }} || {{ users.name }}</li>
    </ul>
  </div>
</template>