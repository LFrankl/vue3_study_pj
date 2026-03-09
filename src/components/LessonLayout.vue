<template>
  <div class="lesson-layout">
    <!-- 课程头部 -->
    <div class="lesson-header">
      <div class="lesson-meta">
        <span class="lesson-number">第 {{ lessonNumber }} 课</span>
        <span class="lesson-duration">⏱ {{ duration }}</span>
      </div>
      <h1 class="lesson-title">{{ title }}</h1>
      <div class="lesson-topics">
        <span
          v-for="(topic, index) in topics"
          :key="index"
          class="topic-tag"
        >
          {{ topic }}
        </span>
      </div>
    </div>

    <!-- 课程内容 -->
    <div class="lesson-content">
      <slot></slot>
    </div>

    <!-- 课程导航 -->
    <div class="lesson-navigation">
      <router-link
        v-if="prevLesson"
        :to="prevLesson.path"
        class="nav-btn nav-prev"
      >
        <span class="nav-icon">←</span>
        <div class="nav-info">
          <span class="nav-label">上一课</span>
          <span class="nav-title">{{ prevLesson.title }}</span>
        </div>
      </router-link>

      <button
        @click="markAsCompleted"
        :class="['nav-btn', 'nav-complete', { completed: isCompleted }]"
      >
        <span class="nav-icon">{{ isCompleted ? '✓' : '○' }}</span>
        <span>{{ isCompleted ? '已完成' : '标记为已完成' }}</span>
      </button>

      <router-link
        v-if="nextLesson"
        :to="nextLesson.path"
        class="nav-btn nav-next"
      >
        <div class="nav-info">
          <span class="nav-label">下一课</span>
          <span class="nav-title">{{ nextLesson.title }}</span>
        </div>
        <span class="nav-icon">→</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  lessonNumber: Number,
  title: String,
  duration: String,
  topics: Array,
  prevLesson: Object,
  nextLesson: Object
})

const isCompleted = ref(false)

const markAsCompleted = () => {
  isCompleted.value = !isCompleted.value
  // TODO: 保存到本地存储
}
</script>

<style scoped>
.lesson-layout {
  max-width: 900px;
  margin: 0 auto;
}

.lesson-header {
  margin-bottom: 48px;
}

.lesson-meta {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 12px;
}

.lesson-number {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background: var(--primary-blue);
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.lesson-duration {
  font-size: 13px;
  color: var(--text-secondary);
}

.lesson-title {
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.lesson-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.topic-tag {
  padding: 6px 12px;
  background: var(--info-bg);
  color: var(--info-text);
  border-radius: 6px;
  font-size: 13px;
}

.lesson-content {
  margin-bottom: 64px;
}

.lesson-navigation {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  padding: 32px 0;
  border-top: 2px solid var(--border);
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.2s;
  cursor: pointer;
  font-size: 14px;
}

.nav-btn:hover {
  border-color: var(--primary-blue);
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.nav-prev {
  grid-column: 1;
}

.nav-next {
  grid-column: 3;
  justify-content: flex-end;
}

.nav-complete {
  grid-column: 2;
  background: var(--primary-blue);
  color: white;
  border-color: var(--primary-blue);
  font-weight: 500;
}

.nav-complete.completed {
  background: var(--success-bg);
  color: var(--success-text);
  border-color: var(--success-text);
}

.nav-icon {
  font-size: 20px;
}

.nav-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-label {
  font-size: 11px;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.nav-title {
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .lesson-navigation {
    grid-template-columns: 1fr;
  }

  .nav-prev,
  .nav-next,
  .nav-complete {
    grid-column: 1;
  }

  .lesson-title {
    font-size: 28px;
  }
}
</style>
