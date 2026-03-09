<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-brand">
      <span>📚</span>
      <span>前端学习平台</span>
    </router-link>
    <div class="navbar-menu">
      <button class="btn-icon" @click="toggleTheme" title="切换主题">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  // 主题切换功能可以后续实现
}
</script>
