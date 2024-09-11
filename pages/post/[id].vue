<!-- pages/[id].vue -->
<template>
    <div>
      <h1>Post Detail {{ useRoute().params.isMobile }}:</h1>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </template>
  
  <script setup>
  const route = useRoute()
  const { data: post, error } = await useAsyncData('fetch-post', () =>
    $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  )
  
  // Combine static and dynamic meta information
  useHead({
    title: post.value?.title || 'Default Title',
    meta: [
      { name: 'description', content: post.value?.body || 'Default Description' },
      { property: 'og:title', content: post.value?.title || 'Default Title' },
      { property: 'og:description', content: post.value?.body || 'Default Description' },
      // Additional meta tags
    ]
  })
  
  if (error.value) {
    console.error('Error fetching data:', error.value)
  }
  </script>
  