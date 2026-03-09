<template>
  <aside class="sidebar" :class="{ open: isOpen }">
    <div class="sidebar-header">
      <h2 style="font-size: 16px; font-weight: 600;">学习导航</h2>
    </div>

    <!-- HTML 系统课程 -->
    <div class="sidebar-section">
      <div class="sidebar-section-title" @click="toggleSection('html')" :class="{ collapsed: !expanded.html }">
        <span>📄 HTML 课程</span>
        <span class="toggle-icon">{{ expanded.html ? '▼' : '▶' }}</span>
      </div>
      <transition name="slide">
        <div v-show="expanded.html" class="sidebar-section-content">
          <router-link to="/lessons/html/lesson-1" class="sidebar-item" active-class="active">
            <span class="lesson-number">1</span>
            <span>认识 HTML</span>
          </router-link>
          <router-link to="/lessons/html/lesson-2" class="sidebar-item" active-class="active">
            <span class="lesson-number">2</span>
            <span>基础标签</span>
          </router-link>
          <router-link to="/lessons/html/lesson-3" class="sidebar-item" active-class="active">
            <span class="lesson-number">3</span>
            <span>列表与表格</span>
          </router-link>
          <router-link to="/lessons/html/lesson-4" class="sidebar-item" active-class="active">
            <span class="lesson-number">4</span>
            <span>图片与多媒体</span>
          </router-link>
          <router-link to="/lessons/html/lesson-5" class="sidebar-item" active-class="active">
            <span class="lesson-number">5</span>
            <span>表单基础</span>
          </router-link>
          <router-link to="/lessons/html/lesson-6" class="sidebar-item" active-class="active">
            <span class="lesson-number">6</span>
            <span>表单进阶</span>
          </router-link>
          <router-link to="/lessons/html/lesson-7" class="sidebar-item" active-class="active">
            <span class="lesson-number">7</span>
            <span>语义化标签</span>
          </router-link>
          <router-link to="/lessons/html/lesson-8" class="sidebar-item" active-class="active">
            <span class="lesson-number">8</span>
            <span>HTML5 新特性</span>
          </router-link>
          <router-link to="/lessons/html/lesson-9" class="sidebar-item" active-class="active">
            <span class="lesson-number">9</span>
            <span>HTML 最佳实践</span>
          </router-link>
          <router-link to="/lessons/html/lesson-10" class="sidebar-item" active-class="active">
            <span class="lesson-number">10</span>
            <span>可访问性</span>
          </router-link>
          <router-link to="/lessons/html/lesson-11" class="sidebar-item" active-class="active">
            <span class="lesson-number">11</span>
            <span>SEO 优化</span>
          </router-link>
          <router-link to="/lessons/html/lesson-12" class="sidebar-item" active-class="active">
            <span class="lesson-number">12</span>
            <span>HTML 综合项目</span>
          </router-link>
          <div class="coming-soon">HTML 课程已完结 ✨</div>
        </div>
      </transition>
    </div>

    <!-- Vue3 系统课程 -->
    <div class="sidebar-section">
      <div class="sidebar-section-title" @click="toggleSection('vue3')" :class="{ collapsed: !expanded.vue3 }">
        <span>💚 Vue3 基础课程</span>
        <span class="toggle-icon">{{ expanded.vue3 ? '▼' : '▶' }}</span>
      </div>
      <transition name="slide">
        <div v-show="expanded.vue3" class="sidebar-section-content">
          <router-link to="/lessons/vue3/lesson-1" class="sidebar-item" active-class="active">
            <span class="lesson-number">54</span>
            <span>Vue3 简介</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-2" class="sidebar-item" active-class="active">
            <span class="lesson-number">55</span>
            <span>模板语法</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-3" class="sidebar-item" active-class="active">
            <span class="lesson-number">56</span>
            <span>计算属性与侦听器</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-4" class="sidebar-item" active-class="active">
            <span class="lesson-number">57</span>
            <span>条件渲染</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-5" class="sidebar-item" active-class="active">
            <span class="lesson-number">58</span>
            <span>列表渲染</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-6" class="sidebar-item" active-class="active">
            <span class="lesson-number">59</span>
            <span>表单绑定</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-7" class="sidebar-item" active-class="active">
            <span class="lesson-number">60</span>
            <span>事件处理</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-8" class="sidebar-item" active-class="active">
            <span class="lesson-number">61</span>
            <span>组件基础</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-9" class="sidebar-item" active-class="active">
            <span class="lesson-number">62</span>
            <span>插槽</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-10" class="sidebar-item" active-class="active">
            <span class="lesson-number">63</span>
            <span>生命周期</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-11" class="sidebar-item" active-class="active">
            <span class="lesson-number">64</span>
            <span>状态管理基础</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-12" class="sidebar-item" active-class="active">
            <span class="lesson-number">65</span>
            <span>Vue Router 基础</span>
          </router-link>
          <router-link to="/lessons/vue3/composition-api" class="sidebar-item" active-class="active">
            <span class="lesson-number">💡</span>
            <span>组合式 API</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-14" class="sidebar-item" active-class="active">
            <span class="lesson-number">66</span>
            <span>动态组件</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-15" class="sidebar-item" active-class="active">
            <span class="lesson-number">67</span>
            <span>过渡与动画</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-16" class="sidebar-item" active-class="active">
            <span class="lesson-number">68</span>
            <span>自定义指令</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-17" class="sidebar-item" active-class="active">
            <span class="lesson-number">69</span>
            <span>性能优化技巧</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-18" class="sidebar-item" active-class="active">
            <span class="lesson-number">70</span>
            <span>Teleport 与 Suspense</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-19" class="sidebar-item" active-class="active">
            <span class="lesson-number">71</span>
            <span>响应式原理深入</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-20" class="sidebar-item" active-class="active">
            <span class="lesson-number">72</span>
            <span>组合式函数</span>
          </router-link>
          <router-link to="/lessons/vue3/lesson-21" class="sidebar-item" active-class="active">
            <span class="lesson-number">73</span>
            <span>购物车应用</span>
          </router-link>
          <div class="coming-soon">Vue3 课程已完结 ✨</div>
        </div>
      </transition>
    </div>

  </aside>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

// 展开状态管理
const expanded = ref({
  html: false,
  vue3: true  // 默认展开 Vue3 系统课程
})

// 切换展开/折叠
const toggleSection = (section) => {
  expanded.value[section] = !expanded.value[section]
}
</script>

<style scoped>
.sidebar-section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  padding: 12px 16px;
  transition: all 0.2s ease;
}

.sidebar-section-title:hover {
  background: rgba(66, 133, 244, 0.05);
}

.toggle-icon {
  font-size: 10px;
  color: var(--text-secondary);
  transition: transform 0.2s ease;
}

.sidebar-section-content {
  overflow: hidden;
}

/* 折叠/展开动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 2000px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.lesson-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--primary-blue);
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
}

.sidebar-item:hover .lesson-number {
  background: var(--primary-blue-hover);
}

.sidebar-item.active .lesson-number {
  background: white;
  color: var(--primary-blue);
}

.coming-soon {
  padding: 8px 24px;
  font-size: 12px;
  color: var(--text-secondary);
  font-style: italic;
}
</style>
