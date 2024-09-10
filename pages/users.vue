<template>
    <div>
      <h1>Data from API:</h1>
      <ul v-for="users in data" :key="users.id">
        <li>{{ users.id }} || {{ users.name }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>

  const { data, error } = await useFetch('https://jsonplaceholder.typicode.com/users')
  
  if (error.value) {
    console.error('Error fetching data:', error.value)
  }
  </script>
  