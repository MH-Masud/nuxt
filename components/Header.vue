<!-- components/Header.vue -->
<template>
    <header>
      <div class="header-container">
        <div class="logo">
          <NuxtLink to="/">MySite</NuxtLink>
        </div>
        <nav class="desktop-nav">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/albums">Albums</NuxtLink>
          <NuxtLink to="/todos">Todos</NuxtLink>
          <NuxtLink to="/users">Users</NuxtLink>
        </nav>
        <button class="mobile-menu-button" @click="toggleMenu">
          <span class="hamburger-icon"></span>
        </button>
        <nav v-if="isMenuOpen" class="mobile-nav">
          <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
          <NuxtLink to="/albums" @click="closeMenu">Albums</NuxtLink>
          <NuxtLink to="/todos" @click="closeMenu">Todos</NuxtLink>
          <NuxtLink to="/users" @click="closeMenu">Users</NuxtLink>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isMenuOpen = ref(false)
  
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  function closeMenu() {
    isMenuOpen.value = false
  }
  </script>
  
  <style scoped>
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }
  
  .logo a {
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;
  }
  
  .desktop-nav {
    display: flex;
    gap: 1rem;
  }
  
  .mobile-menu-button {
    display: none;
  }
  
  .mobile-nav {
    display: none;
  }
  
  /* Mobile styles */
  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }
  
    .mobile-menu-button {
      display: block;
      background: none;
      border: none;
      cursor: pointer;
    }
  
    .hamburger-icon::before {
      content: '';
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      position: relative;
    }
  
    .hamburger-icon::after {
      content: '';
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      top: 8px;
    }
  
    .mobile-nav {
      display: block;
      position: absolute;
      top: 60px;
      right: 0;
      background-color: #333;
      color: #fff;
      width: 200px;
      padding: 1rem;
    }
  
    .mobile-nav a {
      display: block;
      margin-bottom: 1rem;
    }
  }
  </style>
  