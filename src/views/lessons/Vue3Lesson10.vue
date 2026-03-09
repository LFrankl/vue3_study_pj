<template>
  <div class="container fade-in">
    <h1 class="page-title">第63课：生命周期</h1>
    <p class="page-subtitle">
      深入理解 Vue3 组件的生命周期钩子函数，掌握组件从创建到销毁的完整过程
    </p>

    <!-- 什么是生命周期 -->
    <section class="section">
      <h2 class="section-title">🔄 什么是生命周期</h2>
      <p class="text-secondary" style="margin-bottom: 20px;">
        生命周期是指 Vue 组件从创建、挂载、更新到销毁的整个过程。Vue 提供了生命周期钩子函数，让我们能在特定阶段执行代码。
      </p>

      <div class="grid-2">
        <div class="card" style="background: var(--info-bg); border-color: var(--primary-blue);">
          <div class="card-header" style="border-bottom-color: var(--primary-blue);">
            <span style="font-size: 32px;">📍</span>
          </div>
          <h3 class="card-title">关键时机</h3>
          <p class="text-secondary" style="margin-top: 12px; line-height: 1.8;">
            在组件的不同阶段执行特定代码，如数据初始化、DOM 操作、资源清理等
          </p>
        </div>

        <div class="card" style="background: var(--success-bg); border-color: var(--success-green);">
          <div class="card-header" style="border-bottom-color: var(--success-green);">
            <span style="font-size: 32px;">🎯</span>
          </div>
          <h3 class="card-title">精确控制</h3>
          <p class="text-secondary" style="margin-top: 12px; line-height: 1.8;">
            通过生命周期钩子，我们可以精确控制组件行为，优化性能和用户体验
          </p>
        </div>

        <div class="card" style="background: var(--warning-bg); border-color: var(--warning-orange);">
          <div class="card-header" style="border-bottom-color: var(--warning-orange);">
            <span style="font-size: 32px;">⚡</span>
          </div>
          <h3 class="card-title">响应式集成</h3>
          <p class="text-secondary" style="margin-top: 12px; line-height: 1.8;">
            生命周期钩子与响应式系统紧密集成，让数据变化和 UI 更新完美配合
          </p>
        </div>

        <div class="card" style="background: var(--error-bg); border-color: var(--error-red);">
          <div class="card-header" style="border-bottom-color: var(--error-red);">
            <span style="font-size: 32px;">🔧</span>
          </div>
          <h3 class="card-title">资源管理</h3>
          <p class="text-secondary" style="margin-top: 12px; line-height: 1.8;">
            在适当的时机创建和清理资源，避免内存泄漏和性能问题
          </p>
        </div>
      </div>
    </section>

    <!-- 生命周期钩子 -->
    <section class="section">
      <h2 class="section-title">🎣 Composition API 生命周期钩子</h2>
      <p class="text-secondary" style="margin-bottom: 20px;">
        在 Vue3 的 Composition API 中，生命周期钩子以 on 开头的函数形式提供：
      </p>

      <div class="card">
        <div class="code-block">
          <pre><code>&lt;script setup&gt;
import { onMounted, onUpdated, onUnmounted } from 'vue'

// 组件挂载后执行
onMounted(() => {
  console.log('组件已挂载到 DOM')
})

// 组件更新后执行
onUpdated(() => {
  console.log('组件已更新')
})

// 组件卸载前执行
onUnmounted(() => {
  console.log('组件即将卸载')
})
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <div class="card" style="background: var(--info-bg); margin-top: 16px;">
        <h3 style="font-size: 16px; font-weight: 500; margin-bottom: 12px;">📋 主要生命周期钩子</h3>
        <ul style="padding-left: 20px; line-height: 2;">
          <li><code style="background: rgba(66,133,244,0.1); padding: 2px 8px; border-radius: 4px;">onBeforeMount</code> - 挂载前调用</li>
          <li><code style="background: rgba(66,133,244,0.1); padding: 2px 8px; border-radius: 4px;">onMounted</code> - 挂载后调用（可访问 DOM）</li>
          <li><code style="background: rgba(66,133,244,0.1); padding: 2px 8px; border-radius: 4px;">onBeforeUpdate</code> - 更新前调用</li>
          <li><code style="background: rgba(66,133,244,0.1); padding: 2px 8px; border-radius: 4px;">onUpdated</code> - 更新后调用（DOM 已更新）</li>
          <li><code style="background: rgba(66,133,244,0.1); padding: 2px 8px; border-radius: 4px;">onBeforeUnmount</code> - 卸载前调用</li>
          <li><code style="background: rgba(66,133,244,0.1); padding: 2px 8px; border-radius: 4px;">onUnmounted</code> - 卸载后调用（清理资源）</li>
        </ul>
      </div>
    </section>

    <!-- 生命周期可视化 -->
    <section class="section">
      <h2 class="section-title">👁️ 生命周期执行顺序</h2>
      <p class="text-secondary" style="margin-bottom: 20px;">
        点击按钮查看组件的生命周期钩子执行顺序：
      </p>

      <div class="card">
        <div style="margin-bottom: 16px;">
          <button
            v-if="!showLifecycleDemo"
            @click="showLifecycleDemo = true"
            class="btn btn-primary"
          >
            挂载组件
          </button>
          <div v-else style="display: flex; gap: 8px;">
            <button @click="lifecycleCounter++" class="btn btn-primary">
              更新组件 ({{ lifecycleCounter }})
            </button>
            <button @click="showLifecycleDemo = false" class="btn btn-error">
              卸载组件
            </button>
          </div>
        </div>

        <div v-if="showLifecycleDemo" class="demo-box" style="padding: 20px; background: var(--success-bg); border: 2px solid var(--success-green); border-radius: 8px; margin-bottom: 16px;">
          <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 8px;">
            生命周期演示组件
          </h4>
          <p class="text-secondary">计数器: {{ lifecycleCounter }}</p>
        </div>

        <div class="code-block" style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; max-height: 400px; overflow-y: auto;">
          <div v-for="(log, index) in lifecycleLogs" :key="index" style="font-family: 'Consolas', monospace; font-size: 13px; line-height: 1.8;">
            <span :style="{ color: getLogColor(log) }">{{ log }}</span>
          </div>
          <div v-if="lifecycleLogs.length === 0" style="color: #888; font-style: italic;">
            等待生命周期事件...
          </div>
        </div>
      </div>

      <div class="card" style="background: var(--warning-bg); margin-top: 16px;">
        <h3 style="font-size: 16px; font-weight: 500; margin-bottom: 12px;">💡 执行顺序说明</h3>
        <ol style="padding-left: 20px; line-height: 2;">
          <li><strong>挂载阶段</strong>：onBeforeMount → onMounted</li>
          <li><strong>更新阶段</strong>：onBeforeUpdate → onUpdated（数据变化时触发）</li>
          <li><strong>卸载阶段</strong>：onBeforeUnmount → onUnmounted</li>
        </ol>
      </div>
    </section>

    <!-- onMounted 实战 -->
    <section class="section">
      <h2 class="section-title">🚀 onMounted - 组件挂载后</h2>
      <p class="text-secondary" style="margin-bottom: 20px;">
        onMounted 是最常用的生命周期钩子，在组件挂载到 DOM 后调用。适合进行 DOM 操作、数据获取等操作。
      </p>

      <div class="card">
        <h3 style="font-size: 16px; font-weight: 500; margin-bottom: 16px;">示例：数据加载</h3>

        <div class="demo-box" style="padding: 20px; background: var(--bg-secondary); border-radius: 8px; margin-bottom: 16px;">
          <div v-if="loading" class="text-center">
            <div class="spinner"></div>
            <p class="text-secondary" style="margin-top: 12px;">加载中...</p>
          </div>
          <div v-else>
            <h4 style="font-size: 15px; font-weight: 500; margin-bottom: 12px;">用户列表</h4>
            <div class="user-list">
              <div v-for="user in users" :key="user.id" class="user-card">
                <div class="user-avatar">{{ user.avatar }}</div>
                <div>
                  <div style="font-weight: 500;">{{ user.name }}</div>
                  <div class="text-secondary" style="font-size: 13px;">{{ user.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="code-block">
          <pre><code>&lt;script setup&gt;
import { ref, onMounted } from 'vue'

const loading = ref(true)
const users = ref([])

// 模拟数据加载
onMounted(async () => {
  console.log('组件已挂载，开始加载数据')

  // 模拟 API 请求
  await new Promise(resolve => setTimeout(resolve, 1500))

  users.value = [
    { id: 1, name: '张三', role: '前端工程师', avatar: '👨‍💻' },
    { id: 2, name: '李四', role: '后端工程师', avatar: '👩‍💻' },
    { id: 3, name: '王五', role: 'UI 设计师', avatar: '🎨' }
  ]

  loading.value = false
  console.log('数据加载完成')
})
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- onUpdated 实战 -->
    <section class="section">
      <h2 class="section-title">🔄 onUpdated - 组件更新后</h2>
      <p class="text-secondary" style="margin-bottom: 20px;">
        onUpdated 在组件因响应式数据变化而重新渲染后调用。可以在这里访问更新后的 DOM。
      </p>

      <div class="card">
        <h3 style="font-size: 16px; font-weight: 500; margin-bottom: 16px;">示例：DOM 更新监听</h3>

        <div class="demo-box" style="padding: 20px; background: var(--bg-secondary); border-radius: 8px; margin-bottom: 16px;">
          <div style="margin-bottom: 16px;">
            <input
              v-model="message"
              type="text"
              placeholder="输入内容..."
              class="input"
              style="width: 100%;"
            />
          </div>

          <div class="message-display" ref="messageDisplayRef" style="padding: 16px; background: var(--info-bg); border: 2px solid var(--primary-blue); border-radius: 8px; min-height: 60px;">
            <p style="margin-bottom: 8px;">{{ message || '暂无内容' }}</p>
            <p class="text-secondary" style="font-size: 13px;">
              字符数: {{ message.length }}
            </p>
          </div>

          <div class="card" style="margin-top: 16px; background: var(--warning-bg);">
            <p style="font-size: 13px;">
              <strong>更新次数:</strong> {{ updateCount }}
            </p>
          </div>
        </div>

        <div class="code-block">
          <pre><code>&lt;script setup&gt;
import { ref, onUpdated } from 'vue'

const message = ref('')
const updateCount = ref(0)

onUpdated(() => {
  updateCount.value++
  console.log('组件已更新，当前消息:', message.value)
})
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <div class="card" style="background: var(--warning-bg);">
        <h3 style="font-size: 16px; font-weight: 500; margin-bottom: 12px;">⚠️ 注意事项</h3>
        <ul style="padding-left: 20px; line-height: 2;">
          <li>避免在 onUpdated 中修改响应式数据，可能导致无限循环</li>
          <li>如果需要监听特定数据变化，使用 watch 更合适</li>
          <li>onUpdated 会在任何响应式数据变化后调用</li>
        </ul>
      </div>
    </section>

    <!-- onUnmounted 实战 -->
    <section class="section">
      <h2 class="section-title">🧹 onUnmounted - 清理资源</h2>
      <p class="text-secondary" style="margin-bottom: 20px;">
        onUnmounted 在组件卸载后调用，是清理定时器、取消订阅、移除事件监听器的最佳时机。
      </p>

      <div class="card">
        <h3 style="font-size: 16px; font-weight: 500; margin-bottom: 16px;">示例：定时器管理</h3>

        <div class="demo-box" style="padding: 20px; background: var(--bg-secondary); border-radius: 8px; margin-bottom: 16px;">
          <button
            v-if="!showTimer"
            @click="mountTimer"
            class="btn btn-primary"
          >
            启动计时器
          </button>
          <div v-else>
            <div style="text-align: center; margin-bottom: 16px;">
              <div style="font-size: 48px; font-weight: 600; color: var(--primary-blue);">
                {{ timerSeconds }}
              </div>
              <p class="text-secondary">秒</p>
            </div>
            <button @click="unmountTimer" class="btn btn-error" style="width: 100%;">
              停止计时器
            </button>
          </div>
        </div>

        <div class="code-block">
          <pre><code>&lt;script setup&gt;
import { ref, onMounted, onUnmounted } from 'vue'

const seconds = ref(0)
let timerId = null

onMounted(() => {
  console.log('启动定时器')
  timerId = setInterval(() => {
    seconds.value++
  }, 1000)
})

onUnmounted(() => {
  console.log('清理定时器')
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
})
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <div class="card" style="background: var(--error-bg);">
        <h3 style="font-size: 16px; font-weight: 500; margin-bottom: 12px;">🚨 必须清理的资源</h3>
        <ul style="padding-left: 20px; line-height: 2;">
          <li>定时器（setTimeout、setInterval）</li>
          <li>事件监听器（addEventListener）</li>
          <li>WebSocket 连接</li>
          <li>第三方库实例</li>
          <li>DOM 引用（避免内存泄漏）</li>
        </ul>
      </div>
    </section>

    <!-- 实战：图片懒加载 -->
    <section class="section">
      <h2 class="section-title">🖼️ 实战案例：图片懒加载</h2>
      <p class="text-secondary" style="margin-bottom: 20px;">
        使用生命周期钩子实现图片懒加载功能，优化页面性能：
      </p>

      <div class="card">
        <div class="demo-box" style="padding: 20px; background: var(--bg-secondary); border-radius: 8px; margin-bottom: 16px;">
          <h4 style="font-size: 15px; font-weight: 500; margin-bottom: 16px;">图片列表（模拟懒加载）</h4>

          <div class="image-grid">
            <div v-for="img in lazyImages" :key="img.id" class="image-card">
              <div
                class="image-placeholder"
                :style="{
                  background: img.loaded ? `linear-gradient(135deg, ${img.color}, ${img.color}dd)` : '#f0f0f0'
                }"
              >
                <div v-if="!img.loaded" class="spinner-small"></div>
                <div v-else style="font-size: 48px;">{{ img.icon }}</div>
              </div>
              <p style="margin-top: 8px; font-size: 13px; text-align: center;">
                {{ img.loaded ? img.name : '加载中...' }}
              </p>
            </div>
          </div>

          <button
            @click="resetLazyImages"
            class="btn btn-secondary"
            style="width: 100%; margin-top: 16px;"
          >
            重新加载
          </button>
        </div>

        <div class="code-block">
          <pre><code>&lt;script setup&gt;
import { ref, onMounted, onUnmounted } from 'vue'

const images = ref([
  { id: 1, src: 'image1.jpg', loaded: false },
  { id: 2, src: 'image2.jpg', loaded: false },
  // ...
])

let observer = null

onMounted(() => {
  // 创建 IntersectionObserver
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        // 加载图片
        img.src = img.dataset.src
        observer.unobserve(img)
      }
    })
  })

  // 观察所有图片
  document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img)
  })
})

onUnmounted(() => {
  // 清理观察器
  if (observer) {
    observer.disconnect()
  }
})
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- 最佳实践 -->
    <section class="section">
      <h2 class="section-title">✨ 最佳实践</h2>

      <div class="grid-2">
        <div class="card" style="background: var(--success-bg); border-color: var(--success-green);">
          <div class="card-header" style="border-bottom-color: var(--success-green);">
            <span style="font-size: 24px;">✅</span>
          </div>
          <h3 class="card-title">正确使用</h3>
          <ul style="margin-top: 12px; padding-left: 20px; line-height: 2; font-size: 14px;">
            <li>在 onMounted 中进行 DOM 操作</li>
            <li>在 onMounted 中发起数据请求</li>
            <li>在 onUnmounted 中清理资源</li>
            <li>使用 watch 监听特定数据变化</li>
          </ul>
        </div>

        <div class="card" style="background: var(--error-bg); border-color: var(--error-red);">
          <div class="card-header" style="border-bottom-color: var(--error-red);">
            <span style="font-size: 24px;">❌</span>
          </div>
          <h3 class="card-title">避免错误</h3>
          <ul style="margin-top: 12px; padding-left: 20px; line-height: 2; font-size: 14px;">
            <li>在 onUpdated 中修改响应式数据</li>
            <li>忘记在 onUnmounted 中清理定时器</li>
            <li>在 onBeforeMount 中访问 DOM</li>
            <li>过度使用 onUpdated 钩子</li>
          </ul>
        </div>

        <div class="card" style="background: var(--info-bg); border-color: var(--primary-blue);">
          <div class="card-header" style="border-bottom-color: var(--primary-blue);">
            <span style="font-size: 24px;">💡</span>
          </div>
          <h3 class="card-title">性能优化</h3>
          <ul style="margin-top: 12px; padding-left: 20px; line-height: 2; font-size: 14px;">
            <li>避免在钩子中进行耗时操作</li>
            <li>合理使用异步操作</li>
            <li>及时清理不需要的监听器</li>
            <li>使用防抖节流优化频繁更新</li>
          </ul>
        </div>

        <div class="card" style="background: var(--warning-bg); border-color: var(--warning-orange);">
          <div class="card-header" style="border-bottom-color: var(--warning-orange);">
            <span style="font-size: 24px;">🎯</span>
          </div>
          <h3 class="card-title">常见场景</h3>
          <ul style="margin-top: 12px; padding-left: 20px; line-height: 2; font-size: 14px;">
            <li>数据获取：onMounted</li>
            <li>DOM 操作：onMounted</li>
            <li>事件监听：onMounted + onUnmounted</li>
            <li>资源清理：onUnmounted</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 知识总结 -->
    <section class="section">
      <div class="card" style="background: linear-gradient(135deg, var(--primary-blue), var(--primary-blue-hover));">
        <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: white;">
          📚 知识总结
        </h2>
        <div style="color: rgba(255,255,255,0.95); line-height: 2;">
          <p style="margin-bottom: 12px;">
            <strong>1. 生命周期概念：</strong>组件从创建到销毁的完整过程，Vue 提供钩子函数让我们在特定阶段执行代码
          </p>
          <p style="margin-bottom: 12px;">
            <strong>2. 主要钩子：</strong>onBeforeMount、onMounted、onBeforeUpdate、onUpdated、onBeforeUnmount、onUnmounted
          </p>
          <p style="margin-bottom: 12px;">
            <strong>3. onMounted：</strong>组件挂载后调用，适合 DOM 操作和数据获取
          </p>
          <p style="margin-bottom: 12px;">
            <strong>4. onUpdated：</strong>组件更新后调用，可访问更新后的 DOM
          </p>
          <p style="margin-bottom: 12px;">
            <strong>5. onUnmounted：</strong>组件卸载前调用，必须清理定时器、事件监听等资源
          </p>
          <p>
            <strong>6. 最佳实践：</strong>正确使用各生命周期钩子，及时清理资源，避免内存泄漏
          </p>
        </div>
      </div>
    </section>

    <!-- 下一课预告 -->
    <section class="section">
      <div class="card" style="background: var(--success-bg); border: 2px solid var(--success-green);">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 12px; color: var(--success-green);">
          🎉 下一课预告
        </h3>
        <p class="text-secondary" style="line-height: 1.8;">
          在下一课中，我们将学习 <strong>组件进阶</strong>，包括：
        </p>
        <ul style="margin-top: 12px; padding-left: 20px; line-height: 2; color: var(--text-secondary);">
          <li>Provide / Inject 依赖注入</li>
          <li>异步组件</li>
          <li>动态组件</li>
          <li>组件 v-model</li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, onUnmounted, watch } from 'vue'

// ===== 生命周期可视化 =====
const showLifecycleDemo = ref(false)
const lifecycleCounter = ref(0)
const lifecycleLogs = ref([])

// 监听组件的挂载和卸载
watch(showLifecycleDemo, (newVal) => {
  if (newVal) {
    lifecycleLogs.value.push(`[${new Date().toLocaleTimeString()}] ✅ onBeforeMount - 组件即将挂载`)
    setTimeout(() => {
      lifecycleLogs.value.push(`[${new Date().toLocaleTimeString()}] ✅ onMounted - 组件已挂载到 DOM`)
    }, 10)
  } else {
    lifecycleLogs.value.push(`[${new Date().toLocaleTimeString()}] 🔴 onBeforeUnmount - 组件即将卸载`)
    setTimeout(() => {
      lifecycleLogs.value.push(`[${new Date().toLocaleTimeString()}] 🔴 onUnmounted - 组件已卸载`)
    }, 10)
  }
})

// 监听计数器更新
watch(lifecycleCounter, (newVal, oldVal) => {
  if (oldVal !== undefined) {
    lifecycleLogs.value.push(`[${new Date().toLocaleTimeString()}] 🔄 onBeforeUpdate - 组件即将更新`)
    setTimeout(() => {
      lifecycleLogs.value.push(`[${new Date().toLocaleTimeString()}] 🔄 onUpdated - 组件已更新 (计数: ${newVal})`)
    }, 10)
  }
})

const getLogColor = (log) => {
  if (log.includes('onMounted') || log.includes('onBeforeMount')) return '#4ade80'
  if (log.includes('onUpdated') || log.includes('onBeforeUpdate')) return '#60a5fa'
  if (log.includes('onUnmounted') || log.includes('onBeforeUnmount')) return '#f87171'
  return '#d4d4d4'
}

// ===== onMounted 示例 - 数据加载 =====
const loading = ref(true)
const users = ref([])

onMounted(async () => {
  console.log('组件已挂载，开始加载数据')

  // 模拟 API 请求
  await new Promise(resolve => setTimeout(resolve, 1500))

  users.value = [
    { id: 1, name: '张三', role: '前端工程师', avatar: '👨‍💻' },
    { id: 2, name: '李四', role: '后端工程师', avatar: '👩‍💻' },
    { id: 3, name: '王五', role: 'UI 设计师', avatar: '🎨' }
  ]

  loading.value = false
  console.log('数据加载完成')
})

// ===== onUpdated 示例 =====
const message = ref('')
const updateCount = ref(0)
const messageDisplayRef = ref(null)

onUpdated(() => {
  updateCount.value++
  console.log('组件已更新，当前消息:', message.value)

  if (messageDisplayRef.value) {
    console.log('消息显示区域高度:', messageDisplayRef.value.offsetHeight)
  }
})

// ===== onUnmounted 示例 - 定时器 =====
const showTimer = ref(false)
const timerSeconds = ref(0)
let timerInterval = null

const mountTimer = () => {
  showTimer.value = true
  timerSeconds.value = 0

  console.log('启动定时器')
  timerInterval = setInterval(() => {
    timerSeconds.value++
  }, 1000)
}

const unmountTimer = () => {
  console.log('清理定时器')
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
  showTimer.value = false
  timerSeconds.value = 0
}

// 组件卸载时清理定时器
onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})

// ===== 图片懒加载示例 =====
const lazyImages = ref([
  { id: 1, name: '图片 1', loaded: false, icon: '🏔️', color: '#60a5fa' },
  { id: 2, name: '图片 2', loaded: false, icon: '🌅', color: '#f59e0b' },
  { id: 3, name: '图片 3', loaded: false, icon: '🌊', color: '#06b6d4' },
  { id: 4, name: '图片 4', loaded: false, icon: '🌲', color: '#10b981' },
  { id: 5, name: '图片 5', loaded: false, icon: '🏖️', color: '#f97316' },
  { id: 6, name: '图片 6', loaded: false, icon: '🌸', color: '#ec4899' }
])

const loadImagesSequentially = async () => {
  for (let i = 0; i < lazyImages.value.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 300))
    lazyImages.value[i].loaded = true
  }
}

const resetLazyImages = () => {
  lazyImages.value.forEach(img => {
    img.loaded = false
  })
  loadImagesSequentially()
}

// 初始加载图片
onMounted(() => {
  loadImagesSequentially()
})
</script>

<style scoped>
/* 用户卡片列表 */
.user-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.user-card:hover {
  border-color: var(--primary-blue);
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.1);
}

.user-avatar {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background: var(--bg-secondary);
  border-radius: 50%;
}

/* 加载动画 */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border-color);
  border-top-color: var(--primary-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

.spinner-small {
  width: 24px;
  height: 24px;
  border: 3px solid var(--border-color);
  border-top-color: var(--primary-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 图片网格 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
}

.image-card {
  display: flex;
  flex-direction: column;
}

.image-placeholder {
  aspect-ratio: 1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

/* 消息显示区域 */
.message-display {
  transition: all 0.3s ease;
}

/* 响应式 */
@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
