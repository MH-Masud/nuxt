<template>
  <div>
    <h1>Data from API:</h1>
    <ul v-for="post in data" :key="post.id">
      <li>
        <NuxtLink :to="`/post/`+post.id">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>

const { data, error } = await useAsyncData('fetch-data', () =>
  $fetch('https://jsonplaceholder.typicode.com/posts'),
  {
    // Disable caching by setting a unique key or configuring options
    key: () => Math.random().toString() + "-" + Date.now() // Generates a unique key for each request
  }
)
if (error.value) {
  console.error('Error fetching data:', error.value)
}
</script>
