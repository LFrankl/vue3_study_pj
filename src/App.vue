<template>
  <div id="app">
    <Navbar />
    <Sidebar :isOpen="sidebarOpen" @close="sidebarOpen = false" />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const sidebarOpen = ref(false)
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>
