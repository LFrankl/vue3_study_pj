<template>
  <div class="lesson-container">
    <!-- 课程头部 -->
    <div class="lesson-header">
      <h1>第70课：Teleport 与 Suspense</h1>
      <p class="lesson-subtitle">掌握 Vue3 的传送门和异步组件处理，实现更灵活的组件渲染</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 45 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <!-- 课程内容 -->
    <div class="lesson-content">

      <!-- 第一部分：Teleport 传送门 -->
      <section class="content-section">
        <h2>1️⃣ Teleport 传送门</h2>
        <p>Teleport 允许我们将组件的 HTML 内容"传送"到 DOM 的其他位置，即使这个位置在 Vue 应用的 DOM 结构之外。</p>

        <div class="info-box">
          <h3>💡 为什么需要 Teleport？</h3>
          <ul>
            <li><strong>模态框/弹窗：</strong>需要渲染在 body 根节点，避免 z-index 和 overflow 问题</li>
            <li><strong>全屏通知：</strong>Toast、Notification 需要脱离组件层级</li>
            <li><strong>样式隔离：</strong>某些组件需要渲染到特定容器中</li>
            <li><strong>第三方集成：</strong>需要将内容渲染到外部 DOM 节点</li>
          </ul>
        </div>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
              ✅
            </div>
            <h4>使用场景</h4>
            <ul>
              <li>模态框 (Modal)</li>
              <li>抽屉 (Drawer)</li>
              <li>消息提示 (Toast)</li>
              <li>下拉菜单 (Dropdown)</li>
            </ul>
          </div>

          <div class="feature-card">
            <div class="feature-icon" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
              ⚙️
            </div>
            <h4>核心属性</h4>
            <ul>
              <li><code>to</code>：目标容器选择器</li>
              <li><code>disabled</code>：禁用传送</li>
              <li>保持组件逻辑关系</li>
              <li>支持响应式切换</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 第二部分：基础 Teleport 示例 -->
      <section class="content-section">
        <h2>2️⃣ 基础 Teleport 用法</h2>
        <p>使用 <code>&lt;Teleport to="selector"&gt;</code> 将内容传送到指定位置。</p>

        <div class="demo-box" style="margin-top: 20px;">
          <h4>📱 基础模态框示例</h4>
          <div style="margin-top: 16px;">
            <button @click="showBasicModal = true" class="btn-primary">
              打开模态框
            </button>
          </div>

          <!-- 模态框内容将被传送到 body -->
          <Teleport to="body">
            <div v-if="showBasicModal" class="modal-overlay" @click="showBasicModal = false">
              <div class="modal-content" @click.stop>
                <div class="modal-header">
                  <h3>基础模态框</h3>
                  <button @click="showBasicModal = false" class="close-btn">✕</button>
                </div>
                <div class="modal-body">
                  <p>这个模态框的内容已经被传送到 &lt;body&gt; 标签下，不受父组件样式和层级影响。</p>
                  <p style="margin-top: 12px; padding: 12px; background: var(--info-bg); border-radius: 6px;">
                    <strong>💡 提示：</strong> 打开浏览器开发者工具，查看 DOM 结构，你会发现这个模态框直接渲染在 &lt;body&gt; 下。
                  </p>
                </div>
                <div class="modal-footer">
                  <button @click="showBasicModal = false" class="btn-secondary">取消</button>
                  <button @click="showBasicModal = false" class="btn-primary">确认</button>
                </div>
              </div>
            </div>
          </Teleport>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>Vue 组件代码</span>
          </div>
          <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="showModal = true"&gt;打开模态框&lt;/button&gt;

    &lt;!-- 内容传送到 body --&gt;
    &lt;Teleport to="body"&gt;
      &lt;div v-if="showModal" class="modal-overlay" @click="showModal = false"&gt;
        &lt;div class="modal-content" @click.stop&gt;
          &lt;h3&gt;模态框标题&lt;/h3&gt;
          &lt;p&gt;模态框内容&lt;/p&gt;
          &lt;button @click="showModal = false"&gt;关闭&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/Teleport&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const showModal = ref(false)
&lt;/script&gt;

&lt;style scoped&gt;
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 24px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
}
&lt;/style&gt;</code></pre>
        </div>
      </section>

      <!-- 第三部分：多个 Teleport -->
      <section class="content-section">
        <h2>3️⃣ 多个 Teleport 到同一目标</h2>
        <p>多个 Teleport 可以将内容传送到同一个目标容器，它们会按照顺序依次渲染。</p>

        <div class="demo-box" style="margin-top: 20px;">
          <h4>📢 通知系统示例</h4>
          <div style="margin-top: 16px; display: flex; gap: 12px; flex-wrap: wrap;">
            <button @click="addNotification('success', '操作成功！')" class="btn-success">
              成功通知
            </button>
            <button @click="addNotification('warning', '请注意检查！')" class="btn-warning">
              警告通知
            </button>
            <button @click="addNotification('error', '操作失败！')" class="btn-danger">
              错误通知
            </button>
            <button @click="addNotification('info', '这是一条消息。')" class="btn-info">
              信息通知
            </button>
          </div>

          <!-- 通知容器 ID -->
          <div id="notification-container" style="position: fixed; top: 20px; right: 20px; z-index: 2000; pointer-events: none;"></div>

          <!-- 多个通知 Teleport 到同一容器 -->
          <Teleport to="#notification-container" v-if="notifications.length > 0">
            <TransitionGroup name="notification" tag="div">
              <div
                v-for="notification in notifications"
                :key="notification.id"
                :class="['notification', `notification-${notification?.type || 'info'}`]"
                style="pointer-events: auto;"
              >
                <div class="notification-icon">
                  {{ notification?.type === 'success' ? '✓' : notification?.type === 'warning' ? '⚠' : notification?.type === 'error' ? '✕' : 'ℹ' }}
                </div>
                <div class="notification-content">{{ notification?.message || '' }}</div>
                <button @click="removeNotification(notification?.id)" class="notification-close">✕</button>
              </div>
            </TransitionGroup>
          </Teleport>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>多 Teleport 实现</span>
          </div>
          <pre><code>&lt;template&gt;
  &lt;!-- 在 HTML 中添加通知容器 --&gt;
  &lt;div id="notification-container"&gt;&lt;/div&gt;

  &lt;!-- 组件中使用 Teleport --&gt;
  &lt;Teleport to="#notification-container"&gt;
    &lt;TransitionGroup name="notification" tag="div"&gt;
      &lt;div
        v-for="notification in notifications"
        :key="notification.id"
        :class="['notification', 'notification-' + notification.type]"
      &gt;
        &#123;&#123; notification.message &#125;&#125;
      &lt;/div&gt;
    &lt;/TransitionGroup&gt;
  &lt;/Teleport&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const notifications = ref([])
let notificationId = 0

function addNotification(type, message) {
  const id = notificationId++
  notifications.value.push({ id, type, message })

  // 3秒后自动移除
  setTimeout(() =&gt; {
    removeNotification(id)
  }, 3000)
}

function removeNotification(id) {
  const index = notifications.value.findIndex(n =&gt; n.id === id)
  if (index &gt; -1) {
    notifications.value.splice(index, 1)
  }
}
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <!-- 第四部分：条件 Teleport -->
      <section class="content-section">
        <h2>4️⃣ 禁用 Teleport (disabled)</h2>
        <p>使用 <code>disabled</code> 属性可以条件性地启用或禁用传送功能，在移动端和桌面端使用不同的渲染策略。</p>

        <div class="demo-box" style="margin-top: 20px;">
          <h4>📱 响应式侧边栏示例</h4>
          <div style="margin-top: 16px; padding: 16px; background: var(--info-bg); border-radius: 8px;">
            <label style="display: flex; align-items: center; cursor: pointer;">
              <input type="checkbox" v-model="isMobile" style="margin-right: 8px;">
              <span>模拟移动设备（启用 Teleport）</span>
            </label>
            <p style="margin-top: 12px; font-size: 14px; color: var(--text-secondary);">
              {{ isMobile ? '✅ 移动模式：侧边栏传送到 body（全屏覆盖）' : '❌ 桌面模式：侧边栏在原位置渲染' }}
            </p>
          </div>

          <div style="margin-top: 16px;">
            <button @click="showSidebar = true" class="btn-primary">
              打开侧边栏
            </button>
          </div>

          <!-- 条件传送 -->
          <Teleport to="body" :disabled="!isMobile">
            <Transition name="slide">
              <div v-if="showSidebar" :class="['sidebar-demo', { mobile: isMobile }]">
                <div class="sidebar-header">
                  <h3>侧边栏</h3>
                  <button @click="showSidebar = false" class="close-btn">✕</button>
                </div>
                <div class="sidebar-body">
                  <p>当前模式：{{ isMobile ? '移动端（Teleport 启用）' : '桌面端（Teleport 禁用）' }}</p>
                  <ul style="margin-top: 16px; line-height: 2;">
                    <li>📌 菜单项 1</li>
                    <li>📌 菜单项 2</li>
                    <li>📌 菜单项 3</li>
                    <li>📌 菜单项 4</li>
                  </ul>
                </div>
              </div>
            </Transition>
          </Teleport>

          <!-- 移动端背景遮罩 -->
          <Teleport to="body">
            <Transition name="fade">
              <div v-if="showSidebar && isMobile" class="sidebar-overlay" @click="showSidebar = false"></div>
            </Transition>
          </Teleport>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>disabled 属性用法</span>
          </div>
          <pre><code>&lt;template&gt;
  &lt;!-- 根据条件决定是否传送 --&gt;
  &lt;Teleport to="body" :disabled="!isMobile"&gt;
    &lt;div v-if="showSidebar" class="sidebar"&gt;
      侧边栏内容
    &lt;/div&gt;
  &lt;/Teleport&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const isMobile = ref(window.innerWidth &lt; 768)
const showSidebar = ref(false)

// 监听窗口大小变化
window.addEventListener('resize', () =&gt; {
  isMobile.value = window.innerWidth &lt; 768
})
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <!-- 第五部分：Suspense 基础 -->
      <section class="content-section">
        <h2>5️⃣ Suspense 异步组件处理</h2>
        <p>Suspense 是 Vue3 的实验性特性，用于优雅地处理异步组件的加载状态，提供统一的加载和错误处理。</p>

        <div class="info-box">
          <h3>💡 Suspense 解决的问题</h3>
          <ul>
            <li><strong>异步组件加载：</strong>统一处理 defineAsyncComponent 的加载状态</li>
            <li><strong>异步 setup：</strong>支持在 setup 中使用 await（实验性）</li>
            <li><strong>嵌套加载：</strong>自动等待所有嵌套异步组件</li>
            <li><strong>声明式UI：</strong>用插槽声明加载和错误状态，代码更清晰</li>
          </ul>
        </div>

        <div class="warning-box">
          <div class="warning-icon">⚠️</div>
          <div>
            <h4>实验性特性</h4>
            <p>Suspense 目前是 <strong>实验性 API</strong>，在未来版本中可能会有变化。建议在生产环境中谨慎使用，或使用成熟的替代方案。</p>
          </div>
        </div>

        <div class="highlight-box">
          <h4>✨ Suspense 基本结构</h4>
          <div class="code-box" style="margin-top: 12px;">
            <pre><code>&lt;Suspense&gt;
  &lt;!-- 默认插槽：异步组件 --&gt;
  &lt;template #default&gt;
    &lt;AsyncComponent /&gt;
  &lt;/template&gt;

  &lt;!-- fallback 插槽：加载状态 --&gt;
  &lt;template #fallback&gt;
    &lt;LoadingSpinner /&gt;
  &lt;/template&gt;
&lt;/Suspense&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 第六部分：Suspense 实战示例 -->
      <section class="content-section">
        <h2>6️⃣ Suspense 实战示例</h2>
        <p>使用 Suspense 优雅地处理异步数据加载和组件渲染。</p>

        <div class="demo-box" style="margin-top: 20px;">
          <h4>👤 用户信息加载示例</h4>

          <div style="margin-top: 16px;">
            <button @click="refreshUser" class="btn-primary">
              {{ isRefreshing ? '加载中...' : '重新加载用户数据' }}
            </button>
          </div>

          <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
            <Suspense @resolve="onAsyncResolved" @pending="onAsyncPending">
              <template #default>
                <AsyncUserProfile :key="userKey" />
              </template>
              <template #fallback>
                <div class="loading-state">
                  <div class="spinner"></div>
                  <p style="margin-top: 12px; color: var(--text-secondary);">正在加载用户信息...</p>
                </div>
              </template>
            </Suspense>
          </div>

          <div style="margin-top: 16px; padding: 12px; background: var(--info-bg); border-radius: 6px; font-size: 14px;">
            <strong>💡 原理：</strong> AsyncUserProfile 组件使用 async setup()，Suspense 会自动显示 fallback 内容直到数据加载完成。
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>父组件使用 Suspense</span>
          </div>
          <pre><code>&lt;template&gt;
  &lt;Suspense&gt;
    &lt;template #default&gt;
      &lt;AsyncUserProfile /&gt;
    &lt;/template&gt;
    &lt;template #fallback&gt;
      &lt;div class="loading"&gt;加载中...&lt;/div&gt;
    &lt;/template&gt;
  &lt;/Suspense&gt;
&lt;/template&gt;

&lt;script setup&gt;
import AsyncUserProfile from './AsyncUserProfile.vue'
&lt;/script&gt;</code></pre>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>AsyncUserProfile.vue - 异步组件</span>
          </div>
          <pre><code>&lt;template&gt;
  &lt;div class="user-profile"&gt;
    &lt;img :src="user.avatar" :alt="user.name"&gt;
    &lt;h3&gt;&#123;&#123; user.name &#125;&#125;&lt;/h3&gt;
    &lt;p&gt;&#123;&#123; user.bio &#125;&#125;&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// async setup 会被 Suspense 捕获
const user = await fetchUserData()

async function fetchUserData() {
  const response = await fetch('/api/user')
  return response.json()
}
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <!-- 第七部分：错误处理 -->
      <section class="content-section">
        <h2>7️⃣ Suspense 错误处理</h2>
        <p>使用 <code>onErrorCaptured</code> 钩子捕获异步组件的错误，提供优雅的错误提示。</p>

        <div class="demo-box" style="margin-top: 20px;">
          <h4>🎲 数据加载与错误处理</h4>

          <div style="margin-top: 16px; display: flex; gap: 12px;">
            <button @click="loadData(true)" class="btn-success">
              加载成功数据
            </button>
            <button @click="loadData(false)" class="btn-danger">
              模拟加载失败
            </button>
          </div>

          <div v-if="dataError" style="margin-top: 20px; padding: 16px; background: var(--error-bg); border-left: 4px solid var(--error-red); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 24px;">❌</span>
              <div>
                <strong>加载失败</strong>
                <p style="margin-top: 4px; font-size: 14px;">{{ dataError }}</p>
              </div>
            </div>
            <button @click="retryLoad" class="btn-primary" style="margin-top: 12px;">
              重试
            </button>
          </div>

          <div v-else-if="dataLoading" style="margin-top: 20px; padding: 40px; text-align: center; background: white; border-radius: 8px;">
            <div class="spinner"></div>
            <p style="margin-top: 12px; color: var(--text-secondary);">正在加载数据...</p>
          </div>

          <div v-else-if="loadedData" style="margin-top: 20px; padding: 20px; background: var(--success-bg); border-left: 4px solid var(--success-green); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 24px;">✅</span>
              <div>
                <strong>数据加载成功</strong>
                <p style="margin-top: 8px; font-size: 14px;">{{ loadedData }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>错误处理实现</span>
          </div>
          <pre><code>&lt;template&gt;
  &lt;div v-if="error"&gt;
    &lt;p&gt;加载失败: &#123;&#123; error.message &#125;&#125;&lt;/p&gt;
    &lt;button @click="retry"&gt;重试&lt;/button&gt;
  &lt;/div&gt;
  &lt;Suspense v-else&gt;
    &lt;template #default&gt;
      &lt;AsyncDataComponent :key="retryCount" /&gt;
    &lt;/template&gt;
    &lt;template #fallback&gt;
      &lt;div&gt;加载中...&lt;/div&gt;
    &lt;/template&gt;
  &lt;/Suspense&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onErrorCaptured } from 'vue'

const error = ref(null)
const retryCount = ref(0)

// 捕获子组件错误
onErrorCaptured((err) =&gt; {
  error.value = err
  return false // 阻止错误继续传播
})

function retry() {
  error.value = null
  retryCount.value++
}
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <!-- 第八部分：组合使用 -->
      <section class="content-section">
        <h2>8️⃣ Teleport + Suspense 组合使用</h2>
        <p>结合 Teleport 和 Suspense，实现更强大的异步模态框和弹窗系统。</p>

        <div class="demo-box" style="margin-top: 20px;">
          <h4>🎭 异步数据模态框</h4>

          <div style="margin-top: 16px;">
            <button @click="showAsyncModal = true" class="btn-primary">
              打开异步数据模态框
            </button>
          </div>

          <Teleport to="body">
            <Transition name="modal">
              <div v-if="showAsyncModal" class="modal-overlay" @click="showAsyncModal = false">
                <div class="modal-content modal-lg" @click.stop>
                  <div class="modal-header">
                    <h3>📊 产品统计数据</h3>
                    <button @click="showAsyncModal = false" class="close-btn">✕</button>
                  </div>
                  <div class="modal-body">
                    <Suspense>
                      <template #default>
                        <AsyncProductStats />
                      </template>
                      <template #fallback>
                        <div class="loading-state" style="padding: 40px;">
                          <div class="spinner"></div>
                          <p style="margin-top: 12px;">正在加载统计数据...</p>
                        </div>
                      </template>
                    </Suspense>
                  </div>
                </div>
              </div>
            </Transition>
          </Teleport>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>Teleport + Suspense 组合</span>
          </div>
          <pre><code>&lt;template&gt;
  &lt;button @click="showModal = true"&gt;打开模态框&lt;/button&gt;

  &lt;!-- 结合 Teleport 和 Suspense --&gt;
  &lt;Teleport to="body"&gt;
    &lt;div v-if="showModal" class="modal-overlay"&gt;
      &lt;div class="modal-content"&gt;
        &lt;Suspense&gt;
          &lt;template #default&gt;
            &lt;AsyncModalContent /&gt;
          &lt;/template&gt;
          &lt;template #fallback&gt;
            &lt;LoadingSpinner /&gt;
          &lt;/template&gt;
        &lt;/Suspense&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/Teleport&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import AsyncModalContent from './AsyncModalContent.vue'

const showModal = ref(false)
&lt;/script&gt;</code></pre>
        </div>

        <div class="advantage-box">
          <h4>💡 组合优势</h4>
          <ul>
            <li>Teleport 确保模态框渲染在正确的 DOM 位置</li>
            <li>Suspense 优雅处理模态框内容的异步加载</li>
            <li>用户体验更好：避免空白或闪烁</li>
            <li>代码更简洁：声明式处理加载状态</li>
          </ul>
        </div>
      </section>

      <!-- 第九部分：最佳实践 -->
      <section class="content-section">
        <h2>9️⃣ 最佳实践与注意事项</h2>

        <div class="best-practices-grid">
          <div class="practice-card success">
            <div class="practice-header">
              <span class="practice-icon">✅</span>
              <h4>推荐做法</h4>
            </div>
            <ul>
              <li><strong>Teleport to body：</strong>模态框、抽屉、Toast 等</li>
              <li><strong>保持响应式：</strong>Teleport 内的数据依然是响应式的</li>
              <li><strong>清理资源：</strong>组件卸载时自动清理 Teleport 内容</li>
              <li><strong>禁用传送：</strong>使用 disabled 实现响应式布局</li>
              <li><strong>错误边界：</strong>为 Suspense 添加错误处理</li>
              <li><strong>加载状态：</strong>提供友好的 fallback UI</li>
            </ul>
          </div>

          <div class="practice-card danger">
            <div class="practice-header">
              <span class="practice-icon">❌</span>
              <h4>避免踩坑</h4>
            </div>
            <ul>
              <li><strong>目标不存在：</strong>确保 to 选择器对应的元素存在</li>
              <li><strong>样式丢失：</strong>scoped 样式不会应用到 Teleport 内容</li>
              <li><strong>事件冒泡：</strong>注意事件在 DOM 树中的传播路径</li>
              <li><strong>过度使用：</strong>不要为普通组件使用 Teleport</li>
              <li><strong>生产环境：</strong>Suspense 是实验性的，谨慎使用</li>
              <li><strong>嵌套深度：</strong>避免过深的异步组件嵌套</li>
            </ul>
          </div>
        </div>

        <div class="comparison-table">
          <h4>🎯 使用场景对比</h4>
          <table>
            <thead>
              <tr>
                <th>特性</th>
                <th>使用场景</th>
                <th>替代方案</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Teleport</strong></td>
                <td>模态框、抽屉、全局通知</td>
                <td>Portal、固定定位 + z-index</td>
              </tr>
              <tr>
                <td><strong>Suspense</strong></td>
                <td>异步数据加载、代码分割</td>
                <td>手动 loading 状态管理</td>
              </tr>
              <tr>
                <td><strong>组合使用</strong></td>
                <td>异步模态框、延迟加载弹窗</td>
                <td>第三方组件库（如 Element Plus）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="code-box" style="margin-top: 24px;">
          <div class="code-header">
            <span>Teleport 样式处理技巧</span>
          </div>
          <pre><code>&lt;!-- 方案1: 使用全局样式 --&gt;
&lt;style&gt;
/* 不使用 scoped，全局生效 */
.modal-overlay {
  position: fixed;
  /* ... */
}
&lt;/style&gt;

&lt;!-- 方案2: 使用 :deep() --&gt;
&lt;style scoped&gt;
:deep(.modal-overlay) {
  position: fixed;
  /* ... */
}
&lt;/style&gt;

&lt;!-- 方案3: 使用内联样式 --&gt;
&lt;Teleport to="body"&gt;
  &lt;div :style="{ position: 'fixed', ... }"&gt;
    Modal Content
  &lt;/div&gt;
&lt;/Teleport&gt;</code></pre>
        </div>
      </section>

      <!-- 课程总结 -->
      <section class="content-section">
        <h2>📚 课程总结</h2>
        <div class="summary-grid">
          <div class="summary-item">
            <div class="summary-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">🎯</div>
            <h4>Teleport 传送门</h4>
            <p>将组件内容传送到 DOM 的任意位置，解决模态框、通知等组件的渲染问题</p>
          </div>
          <div class="summary-item">
            <div class="summary-icon" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">⏳</div>
            <h4>Suspense 异步处理</h4>
            <p>优雅处理异步组件和数据加载，提供统一的加载状态和错误处理</p>
          </div>
          <div class="summary-item">
            <div class="summary-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">🔄</div>
            <h4>条件传送</h4>
            <p>使用 disabled 属性实现响应式布局，桌面端和移动端不同的渲染策略</p>
          </div>
          <div class="summary-item">
            <div class="summary-icon" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">🎭</div>
            <h4>组合使用</h4>
            <p>Teleport + Suspense 实现强大的异步模态框系统</p>
          </div>
        </div>

        <div style="margin-top: 24px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px;">
          <h4 style="margin-bottom: 12px;">🎓 核心要点</h4>
          <ul style="line-height: 2; padding-left: 20px;">
            <li>Teleport 解决 DOM 层级问题，将内容渲染到指定位置</li>
            <li>使用 <code style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px;">to</code> 属性指定目标容器，<code style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px;">disabled</code> 控制传送行为</li>
            <li>Suspense 提供声明式的异步组件加载处理</li>
            <li>使用 <code style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px;">onErrorCaptured</code> 捕获异步组件错误</li>
            <li>注意 Teleport 内容的样式处理（scoped 样式不生效）</li>
            <li>Suspense 是实验性 API，生产环境需谨慎使用</li>
          </ul>
        </div>
      </section>

      <!-- 下一课预告 -->
      <div class="next-lesson">
        <h3>🎯 下一课预告</h3>
        <p>第71课：响应式原理深入</p>
        <p class="next-lesson-desc">深入理解 Vue3 的响应式系统原理，掌握 Proxy、Reflect 和依赖收集机制</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onErrorCaptured, defineAsyncComponent } from 'vue'

// ============ 基础模态框 ============
const showBasicModal = ref(false)

// ============ 通知系统 ============
const notifications = ref([])
let notificationId = 0

function addNotification(type, message) {
  const id = notificationId++
  notifications.value.push({ id, type, message })

  setTimeout(() => {
    removeNotification(id)
  }, 3000)
}

function removeNotification(id) {
  const index = notifications.value.findIndex(n => n.id === id)
  if (index > -1) {
    notifications.value.splice(index, 1)
  }
}

// ============ 条件 Teleport ============
const isMobile = ref(false)
const showSidebar = ref(false)

// ============ Suspense 示例 ============
const userKey = ref(0)
const isRefreshing = ref(false)

function refreshUser() {
  isRefreshing.value = true
  userKey.value++
}

function onAsyncResolved() {
  isRefreshing.value = false
}

function onAsyncPending() {
  isRefreshing.value = true
}

// 异步用户组件
const AsyncUserProfile = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'AsyncUserProfile',
          template: `
            <div style="display: flex; align-items: center; gap: 16px;">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%234facfe' width='80' height='80' rx='40'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='32' fill='white'%3E👤%3C/text%3E%3C/svg%3E" alt="Avatar" style="width: 80px; height: 80px; border-radius: 50%;">
              <div>
                <h3 style="margin-bottom: 8px;">张三</h3>
                <p style="color: var(--text-secondary); margin-bottom: 4px;">前端工程师</p>
                <p style="font-size: 14px; line-height: 1.6;">热爱技术，专注于 Vue.js 和前端性能优化。5年+前端开发经验。</p>
                <div style="margin-top: 12px; display: flex; gap: 8px;">
                  <span style="padding: 4px 12px; background: var(--primary-blue); color: white; border-radius: 12px; font-size: 12px;">Vue3</span>
                  <span style="padding: 4px 12px; background: var(--success-green); color: white; border-radius: 12px; font-size: 12px;">TypeScript</span>
                  <span style="padding: 4px 12px; background: var(--warning-orange); color: white; border-radius: 12px; font-size: 12px;">React</span>
                </div>
              </div>
            </div>
          `
        })
      }, 1500)
    })
  }
})

// ============ 错误处理示例 ============
const dataError = ref(null)
const dataLoading = ref(false)
const loadedData = ref(null)

function loadData(shouldSucceed) {
  dataError.value = null
  dataLoading.value = true
  loadedData.value = null

  setTimeout(() => {
    dataLoading.value = false
    if (shouldSucceed) {
      loadedData.value = '用户数据加载成功：共获取 1,234 条记录，耗时 1.2 秒'
    } else {
      dataError.value = '网络请求失败：服务器返回 500 错误'
    }
  }, 1200)
}

function retryLoad() {
  loadData(true)
}

// ============ 异步模态框 ============
const showAsyncModal = ref(false)

const AsyncProductStats = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'AsyncProductStats',
          template: `
            <div>
              <div class="grid-2" style="gap: 16px; margin-bottom: 20px;">
                <div style="padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px;">
                  <div style="font-size: 32px; font-weight: 700;">1,234</div>
                  <div style="margin-top: 8px; opacity: 0.9;">总产品数</div>
                </div>
                <div style="padding: 20px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 12px;">
                  <div style="font-size: 32px; font-weight: 700;">8,567</div>
                  <div style="margin-top: 8px; opacity: 0.9;">总订单数</div>
                </div>
              </div>
              <div class="grid-2" style="gap: 16px;">
                <div style="padding: 20px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; border-radius: 12px;">
                  <div style="font-size: 32px; font-weight: 700;">¥456K</div>
                  <div style="margin-top: 8px; opacity: 0.9;">月销售额</div>
                </div>
                <div style="padding: 20px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; border-radius: 12px;">
                  <div style="font-size: 32px; font-weight: 700;">95.8%</div>
                  <div style="margin-top: 8px; opacity: 0.9;">客户满意度</div>
                </div>
              </div>
            </div>
          `
        })
      }, 1800)
    })
  }
})
</script>

<style scoped>
/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

.modal-content {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  max-height: 85vh;
  overflow: auto;
  animation: slideUp 0.3s ease;
}

.modal-lg {
  max-width: 700px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-color);
}

.modal-header h3 {
  margin: 0;
  font-size: 18px;
}

.modal-body {
  padding: 24px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid var(--border-color);
}

.close-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: var(--text-secondary);
}

.close-btn:hover {
  background: var(--error-bg);
  color: var(--error-red);
}

/* 通知样式 */
.notification {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 12px;
  min-width: 300px;
  animation: slideInRight 0.3s ease;
}

.notification-success {
  border-left: 4px solid var(--success-green);
}

.notification-warning {
  border-left: 4px solid var(--warning-orange);
}

.notification-error {
  border-left: 4px solid var(--error-red);
}

.notification-info {
  border-left: 4px solid var(--primary-blue);
}

.notification-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.notification-success .notification-icon {
  background: var(--success-green);
  color: white;
}

.notification-warning .notification-icon {
  background: var(--warning-orange);
  color: white;
}

.notification-error .notification-icon {
  background: var(--error-red);
  color: white;
}

.notification-info .notification-icon {
  background: var(--primary-blue);
  color: white;
}

.notification-content {
  flex: 1;
  font-size: 14px;
}

.notification-close {
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}

.notification-close:hover {
  background: var(--error-bg);
  color: var(--error-red);
}

/* 通知动画 */
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.notification-move {
  transition: transform 0.3s ease;
}

/* 侧边栏样式 */
.sidebar-demo {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.sidebar-demo.mobile {
  position: fixed;
  z-index: 1001;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
}

.sidebar-header h3 {
  margin: 0;
  font-size: 16px;
}

.sidebar-body {
  padding: 20px;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

/* 侧边栏动画 */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* 加载状态 */
.loading-state {
  text-align: center;
  padding: 40px 20px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border-color);
  border-top-color: var(--primary-blue);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 模态框过渡 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 按钮样式 */
.btn-primary {
  padding: 10px 20px;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: var(--primary-blue-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
}

.btn-secondary {
  padding: 10px 20px;
  background: white;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: var(--background-color);
  border-color: var(--primary-blue);
}

.btn-success {
  padding: 10px 20px;
  background: var(--success-green);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-success:hover {
  background: #27ae60;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3);
}

.btn-warning {
  padding: 10px 20px;
  background: var(--warning-orange);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-warning:hover {
  background: #e67e22;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(230, 126, 34, 0.3);
}

.btn-danger {
  padding: 10px 20px;
  background: var(--error-red);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-danger:hover {
  background: #c0392b;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
}

.btn-info {
  padding: 10px 20px;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-info:hover {
  background: var(--primary-blue-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
}

/* 新增样式 - 功能卡片网格 */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.feature-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 16px;
  color: white;
}

.feature-card h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
}

.feature-card ul {
  margin: 0;
  padding-left: 20px;
  line-height: 2;
  font-size: 14px;
  color: var(--text-secondary);
}

/* 警告框 */
.warning-box {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--warning-bg);
  border-left: 4px solid var(--warning-orange);
  border-radius: 8px;
  margin-top: 24px;
}

.warning-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.warning-box h4 {
  margin: 0 0 8px 0;
  color: var(--warning-orange);
  font-size: 16px;
}

.warning-box p {
  margin: 0;
  line-height: 1.8;
  color: var(--text-primary);
}

/* 高亮框 */
.highlight-box {
  padding: 20px;
  background: var(--success-bg);
  border-left: 4px solid var(--success-green);
  border-radius: 8px;
  margin-top: 24px;
}

.highlight-box h4 {
  margin: 0 0 12px 0;
  color: var(--success-green);
  font-size: 16px;
}

/* 优势框 */
.advantage-box {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin-top: 20px;
}

.advantage-box h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
}

.advantage-box ul {
  margin: 0;
  padding-left: 20px;
  line-height: 2;
}

/* 最佳实践网格 */
.best-practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.practice-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.practice-card.success {
  border-left: 4px solid var(--success-green);
}

.practice-card.danger {
  border-left: 4px solid var(--error-red);
}

.practice-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.practice-icon {
  font-size: 24px;
}

.practice-card h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.practice-card.success h4 {
  color: var(--success-green);
}

.practice-card.danger h4 {
  color: var(--error-red);
}

.practice-card ul {
  margin: 0;
  padding-left: 20px;
  line-height: 2;
  font-size: 14px;
}

/* 对比表格 */
.comparison-table {
  margin-top: 32px;
  padding: 24px;
  background: var(--info-bg);
  border-radius: 12px;
}

.comparison-table h4 {
  margin: 0 0 16px 0;
  color: var(--primary-blue);
  font-size: 16px;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table thead tr {
  background: var(--primary-blue);
  color: white;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 16px;
  text-align: left;
}

.comparison-table tbody tr {
  border-bottom: 1px solid var(--border-color);
}

.comparison-table tbody tr:last-child {
  border-bottom: none;
}

.comparison-table tbody tr:hover {
  background: var(--background-color);
}
</style>
