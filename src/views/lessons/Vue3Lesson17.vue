<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第69课：性能优化技巧</h1>
      <p class="lesson-subtitle">掌握 Vue3 应用性能优化策略，打造高性能 Web 应用</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 60 分钟</span>
        <span class="difficulty">📊 难度：高级</span>
      </div>
    </div>

    <div class="lesson-content">

      <!-- 1. 为什么需要性能优化 -->
      <section class="content-section">
        <h2>1️⃣ 为什么需要性能优化？</h2>
        <p>性能优化不仅能提升用户体验，还直接影响应用的成功率。数据显示，页面加载时间每增加1秒，转化率降低7%。</p>

        <div class="performance-stats">
          <div class="stat-card">
            <div class="stat-icon">⚡</div>
            <div class="stat-number">53%</div>
            <div class="stat-label">用户会放弃加载超过3秒的页面</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📱</div>
            <div class="stat-number">70%</div>
            <div class="stat-label">移动端用户期望页面在2秒内加载完成</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div class="stat-number">7%</div>
            <div class="stat-label">页面每慢1秒，转化率下降7%</div>
          </div>
        </div>

        <div class="info-box">
          <h3>性能优化的核心指标</h3>
          <div class="metrics-grid">
            <div class="metric-item">
              <strong>FCP (First Contentful Paint)</strong>
              <p>首次内容绘制时间 - 用户首次看到内容的时间</p>
              <div class="metric-target">目标: &lt; 1.8s</div>
            </div>
            <div class="metric-item">
              <strong>LCP (Largest Contentful Paint)</strong>
              <p>最大内容绘制时间 - 主要内容加载完成的时间</p>
              <div class="metric-target">目标: &lt; 2.5s</div>
            </div>
            <div class="metric-item">
              <strong>FID (First Input Delay)</strong>
              <p>首次输入延迟 - 用户首次交互到响应的时间</p>
              <div class="metric-target">目标: &lt; 100ms</div>
            </div>
            <div class="metric-item">
              <strong>CLS (Cumulative Layout Shift)</strong>
              <p>累积布局偏移 - 页面视觉稳定性</p>
              <div class="metric-target">目标: &lt; 0.1</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. 虚拟滚动 -->
      <section class="content-section">
        <h2>2️⃣ 虚拟滚动 - 渲染大列表</h2>
        <p>当需要渲染成千上万条数据时，虚拟滚动只渲染可视区域的元素，大幅提升性能。</p>

        <div class="comparison-demo">
          <div class="demo-section">
            <h3>❌ 传统渲染 ({{ normalListItems.length }} 项)</h3>
            <div class="performance-indicator bad">
              <span>🐌 性能：差</span>
              <span>内存：{{ (normalListItems.length * 0.05).toFixed(1) }}MB</span>
            </div>
            <button @click="renderNormalList" class="btn btn-secondary">
              {{ showNormalList ? '隐藏' : '渲染' }} {{ normalListItems.length }} 项
            </button>
            <div v-if="showNormalList" class="normal-list-container">
              <div v-for="item in normalListItems" :key="item.id" class="list-item">
                <div class="item-avatar" :style="{ background: item.color }">
                  {{ item.emoji }}
                </div>
                <div class="item-info">
                  <div class="item-title">{{ item.title }}</div>
                  <div class="item-desc">{{ item.description }}</div>
                </div>
                <div class="item-id">#{{ item.id }}</div>
              </div>
            </div>
            <p class="hint-text" v-if="showNormalList">
              ⚠️ 渲染了 {{ normalListItems.length }} 个 DOM 节点，滚动会很卡顿
            </p>
          </div>

          <div class="demo-section highlight">
            <h3>✅ 虚拟滚动 (10000 项)</h3>
            <div class="performance-indicator good">
              <span>⚡ 性能：优秀</span>
              <span>内存：~0.5MB</span>
            </div>
            <div class="virtual-list-container" ref="virtualContainer" @scroll="handleVirtualScroll">
              <div class="virtual-list-phantom" :style="{ height: virtualListHeight + 'px' }"></div>
              <div class="virtual-list-content" :style="{ transform: `translateY(${startOffset}px)` }">
                <div
                  v-for="item in visibleItems"
                  :key="item.id"
                  class="list-item"
                  :style="{ height: itemHeight + 'px' }"
                >
                  <div class="item-avatar" :style="{ background: item.color }">
                    {{ item.emoji }}
                  </div>
                  <div class="item-info">
                    <div class="item-title">{{ item.title }}</div>
                    <div class="item-desc">{{ item.description }}</div>
                  </div>
                  <div class="item-id">#{{ item.id }}</div>
                </div>
              </div>
            </div>
            <p class="hint-text">
              ✅ 只渲染了 {{ visibleItems.length }} 个 DOM 节点，滚动流畅
            </p>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 虚拟滚动实现</span>
          </div>
          <pre><code>// 虚拟滚动核心逻辑
const itemHeight = 80 // 每项高度
const containerHeight = 400 // 容器高度
const visibleCount = Math.ceil(containerHeight / itemHeight)
const bufferCount = 3 // 缓冲区项数

const virtualListHeight = computed(() => {
  return allItems.length * itemHeight
})

const visibleItems = computed(() => {
  const start = Math.max(0, startIndex.value - bufferCount)
  const end = Math.min(
    allItems.length,
    startIndex.value + visibleCount + bufferCount
  )
  return allItems.slice(start, end)
})

const startOffset = computed(() => {
  return Math.max(0, startIndex.value - bufferCount) * itemHeight
})

function handleScroll(e) {
  const scrollTop = e.target.scrollTop
  startIndex.value = Math.floor(scrollTop / itemHeight)
}</code></pre>
        </div>
      </section>

      <!-- 3. 组件懒加载 -->
      <section class="content-section">
        <h2>3️⃣ 组件懒加载 - 按需加载</h2>
        <p>通过路由懒加载和异步组件，减少首屏加载时间，提升应用启动速度。</p>

        <div class="demo-box">
          <h3>🎯 异步组件演示</h3>
          <div class="lazy-load-demo">
            <div class="demo-controls">
              <button
                v-for="tab in lazyTabs"
                :key="tab.id"
                @click="activeLazyTab = tab.id"
                :class="['tab-btn', { active: activeLazyTab === tab.id }]"
              >
                {{ tab.icon }} {{ tab.name }}
                <span v-if="loadedComponents.includes(tab.id)" class="loaded-indicator">✓</span>
              </button>
            </div>

            <div class="lazy-content">
              <Suspense>
                <template #default>
                  <component :is="currentLazyComponent" />
                </template>
                <template #fallback>
                  <div class="loading-state">
                    <div class="loading-spinner"></div>
                    <p>组件加载中...</p>
                  </div>
                </template>
              </Suspense>
            </div>

            <div class="load-info">
              <p><strong>已加载组件：</strong>{{ loadedComponents.length }} / {{ lazyTabs.length }}</p>
              <p class="hint-text">💡 组件只在首次点击时加载，之后直接使用缓存</p>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 组件懒加载实现</span>
          </div>
          <pre><code>// 1. 路由懒加载
const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue')
  },
  {
    path: '/profile',
    component: () => import('./views/Profile.vue')
  }
]

// 2. 异步组件
import { defineAsyncComponent } from 'vue'

const AsyncChart = defineAsyncComponent({
  loader: () => import('./components/Chart.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorDisplay,
  delay: 200, // 延迟显示 loading
  timeout: 3000 // 超时时间
})

// 3. 配合 Suspense 使用
&lt;Suspense&gt;
  &lt;template #default&gt;
    &lt;AsyncChart /&gt;
  &lt;/template&gt;
  &lt;template #fallback&gt;
    &lt;LoadingSpinner /&gt;
  &lt;/template&gt;
&lt;/Suspense&gt;</code></pre>
        </div>

        <div class="info-box">
          <h3>路由懒加载最佳实践</h3>
          <ul>
            <li><strong>分包策略：</strong>将不同功能模块打包成独立的 chunk</li>
            <li><strong>预加载：</strong>使用 webpackPrefetch 预加载可能访问的路由</li>
            <li><strong>预获取：</strong>使用 webpackPreload 预获取关键资源</li>
            <li><strong>命名 chunk：</strong>使用 magic comments 为 chunk 命名便于调试</li>
          </ul>
          <pre><code>// 使用 magic comments
const Dashboard = () => import(
  /* webpackChunkName: "dashboard" */
  /* webpackPrefetch: true */
  './views/Dashboard.vue'
)</code></pre>
        </div>
      </section>

      <!-- 4. 响应式优化 -->
      <section class="content-section">
        <h2>4️⃣ 响应式优化 - 减少不必要的更新</h2>
        <p>合理使用 shallowRef、shallowReactive、readonly 等 API，避免深层响应式带来的性能开销。</p>

        <div class="demo-box">
          <h3>🎯 响应式性能对比</h3>

          <div class="reactivity-demo">
            <div class="demo-card">
              <h4>❌ 深层响应式（性能较差）</h4>
              <button @click="updateDeepReactive" class="btn btn-secondary">
                更新深层数据
              </button>
              <div class="update-time">更新耗时: {{ deepUpdateTime }}ms</div>
              <pre class="data-display">{{ deepReactiveData }}</pre>
            </div>

            <div class="demo-card highlight">
              <h4>✅ 浅层响应式（性能优秀）</h4>
              <button @click="updateShallowReactive" class="btn btn-primary">
                更新浅层数据
              </button>
              <div class="update-time good">更新耗时: {{ shallowUpdateTime }}ms</div>
              <pre class="data-display">{{ shallowReactiveData }}</pre>
            </div>
          </div>

          <div class="performance-comparison">
            <div class="comparison-result">
              <span class="result-label">性能提升：</span>
              <span class="result-value">{{ performanceImprovement }}x</span>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 响应式优化技巧</span>
          </div>
          <pre><code>import {
  ref, shallowRef,
  reactive, shallowReactive,
  readonly, shallowReadonly
} from 'vue'

// 1. 使用 shallowRef - 只有 .value 的赋值会触发更新
const state = shallowRef({
  count: 0,
  nested: { value: 0 }
})

// ❌ 不会触发更新
state.value.count++

// ✅ 会触发更新
state.value = { ...state.value, count: state.value.count + 1 }

// 2. 使用 shallowReactive - 只有根级别属性的修改会触发更新
const state = shallowReactive({
  count: 0,
  nested: { value: 0 }
})

// ✅ 会触发更新
state.count++

// ❌ 不会触发更新
state.nested.value++

// 3. 使用 readonly - 创建只读代理，避免意外修改
const original = reactive({ count: 0 })
const copy = readonly(original)

// ❌ 修改会发出警告
copy.count++

// 4. 使用 markRaw - 标记永远不需要响应式的对象
import { markRaw } from 'vue'

const state = reactive({
  // 第三方库实例不需要响应式
  chart: markRaw(new Chart()),
  map: markRaw(new GoogleMap())
})</code></pre>
        </div>

        <div class="tips-box">
          <h4>💡 响应式优化建议</h4>
          <div class="tips-grid">
            <div class="tip-item">
              <span class="tip-icon">1️⃣</span>
              <strong>大型数据结构</strong>
              <p>使用 shallowRef/shallowReactive 处理大型数据结构</p>
            </div>
            <div class="tip-item">
              <span class="tip-icon">2️⃣</span>
              <strong>第三方库实例</strong>
              <p>使用 markRaw 标记第三方库实例</p>
            </div>
            <div class="tip-item">
              <span class="tip-icon">3️⃣</span>
              <strong>只读数据</strong>
              <p>使用 readonly 防止意外修改</p>
            </div>
            <div class="tip-item">
              <span class="tip-icon">4️⃣</span>
              <strong>computed 缓存</strong>
              <p>充分利用 computed 的缓存特性</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. 组件优化 -->
      <section class="content-section">
        <h2>5️⃣ 组件优化 - 减少渲染次数</h2>
        <p>通过 v-once、v-memo、KeepAlive 等特性，避免不必要的组件重新渲染。</p>

        <div class="demo-box">
          <h3>🎯 v-memo 优化演示</h3>

          <div class="memo-demo">
            <div class="demo-controls">
              <button @click="updateCounter" class="btn btn-primary">
                更新计数器 ({{ counter }})
              </button>
              <button @click="updateFilter" class="btn btn-secondary">
                切换过滤器 ({{ filter }})
              </button>
            </div>

            <div class="comparison-grid">
              <div class="demo-section">
                <h4>❌ 无优化（每次都重新渲染）</h4>
                <div class="render-count">渲染次数: {{ normalRenderCount }}</div>
                <div class="item-list">
                  <div
                    v-for="item in memoItems"
                    :key="item.id"
                    class="memo-item"
                  >
                    <span class="item-emoji">{{ item.emoji }}</span>
                    <span class="item-text">{{ item.text }}</span>
                    <span class="item-counter">{{ counter }}</span>
                  </div>
                </div>
              </div>

              <div class="demo-section highlight">
                <h4>✅ 使用 v-memo（智能缓存）</h4>
                <div class="render-count good">渲染次数: {{ memoRenderCount }}</div>
                <div class="item-list">
                  <div
                    v-for="item in memoItems"
                    :key="item.id"
                    v-memo="[filter]"
                    class="memo-item"
                  >
                    <span class="item-emoji">{{ item.emoji }}</span>
                    <span class="item-text">{{ item.text }}</span>
                    <span class="item-counter">{{ counter }}</span>
                  </div>
                </div>
              </div>
            </div>

            <p class="hint-text">
              💡 v-memo 可以根据依赖项智能缓存组件，减少不必要的渲染
            </p>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 组件优化技巧</span>
          </div>
          <pre><code>// 1. v-once - 只渲染一次，永不更新
&lt;div v-once&gt;
  &lt;h1&gt;{{ title }}&lt;/h1&gt;
  &lt;p&gt;{{ description }}&lt;/p&gt;
&lt;/div&gt;

// 2. v-memo - 缓存组件，只在依赖变化时更新
&lt;div v-for="item in list" :key="item.id" v-memo="[item.id, item.selected]"&gt;
  &lt;!-- 只有 item.id 或 item.selected 变化时才重新渲染 --&gt;
  &lt;ItemComponent :item="item" /&gt;
&lt;/div&gt;

// 3. KeepAlive - 缓存组件实例
&lt;KeepAlive :max="10"&gt;
  &lt;component :is="currentComponent" /&gt;
&lt;/KeepAlive&gt;

// 4. 使用 computed 缓存计算结果
const filteredList = computed(() => {
  return list.value.filter(item => item.active)
})

// 5. 事件处理器优化
// ❌ 每次渲染都创建新函数
&lt;button @click="() => handleClick(item)"&gt;

// ✅ 使用稳定的函数引用
&lt;button @click="handleClick(item)"&gt;

const handleClick = (item) => {
  // 处理逻辑
}</code></pre>
        </div>

        <div class="optimization-checklist">
          <h4>🎯 组件优化清单</h4>
          <div class="checklist-grid">
            <div class="checklist-item">
              <input type="checkbox" id="check1" />
              <label for="check1">使用 v-once 优化静态内容</label>
            </div>
            <div class="checklist-item">
              <input type="checkbox" id="check2" />
              <label for="check2">使用 v-memo 优化列表渲染</label>
            </div>
            <div class="checklist-item">
              <input type="checkbox" id="check3" />
              <label for="check3">使用 KeepAlive 缓存路由组件</label>
            </div>
            <div class="checklist-item">
              <input type="checkbox" id="check4" />
              <label for="check4">避免在模板中使用复杂表达式</label>
            </div>
            <div class="checklist-item">
              <input type="checkbox" id="check5" />
              <label for="check5">使用 computed 替代 method</label>
            </div>
            <div class="checklist-item">
              <input type="checkbox" id="check6" />
              <label for="check6">合理使用 key 属性</label>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. 打包优化 -->
      <section class="content-section">
        <h2>6️⃣ 打包优化 - 减小包体积</h2>
        <p>通过代码分割、Tree Shaking、压缩等手段，减小最终打包体积。</p>

        <div class="bundle-analysis">
          <h3>📊 打包分析对比</h3>
          <div class="analysis-grid">
            <div class="bundle-card before">
              <div class="card-header">
                <span class="status-badge bad">优化前</span>
                <span class="bundle-size">2.8 MB</span>
              </div>
              <div class="card-body">
                <div class="bundle-item">
                  <span class="item-name">vendor.js</span>
                  <div class="size-bar" style="width: 80%"></div>
                  <span class="item-size">1.2 MB</span>
                </div>
                <div class="bundle-item">
                  <span class="item-name">app.js</span>
                  <div class="size-bar" style="width: 60%"></div>
                  <span class="item-size">900 KB</span>
                </div>
                <div class="bundle-item">
                  <span class="item-name">styles.css</span>
                  <div class="size-bar" style="width: 40%"></div>
                  <span class="item-size">600 KB</span>
                </div>
                <div class="bundle-item">
                  <span class="item-name">assets</span>
                  <div class="size-bar" style="width: 30%"></div>
                  <span class="item-size">450 KB</span>
                </div>
              </div>
            </div>

            <div class="bundle-card after">
              <div class="card-header">
                <span class="status-badge good">优化后</span>
                <span class="bundle-size">890 KB</span>
              </div>
              <div class="card-body">
                <div class="bundle-item">
                  <span class="item-name">vendor.js</span>
                  <div class="size-bar good" style="width: 25%"></div>
                  <span class="item-size">380 KB</span>
                </div>
                <div class="bundle-item">
                  <span class="item-name">app.js</span>
                  <div class="size-bar good" style="width: 18%"></div>
                  <span class="item-size">270 KB</span>
                </div>
                <div class="bundle-item">
                  <span class="item-name">styles.css</span>
                  <div class="size-bar good" style="width: 12%"></div>
                  <span class="item-size">180 KB</span>
                </div>
                <div class="bundle-item">
                  <span class="item-name">assets</span>
                  <div class="size-bar good" style="width: 10%"></div>
                  <span class="item-size">150 KB</span>
                </div>
              </div>
            </div>
          </div>

          <div class="optimization-result">
            <div class="result-item">
              <span class="result-icon">📉</span>
              <strong>体积减少</strong>
              <span class="result-value">68%</span>
            </div>
            <div class="result-item">
              <span class="result-icon">⚡</span>
              <strong>加载提速</strong>
              <span class="result-value">3.2x</span>
            </div>
            <div class="result-item">
              <span class="result-icon">💾</span>
              <strong>节省流量</strong>
              <span class="result-value">1.9 MB</span>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 Vite 打包优化配置</span>
          </div>
          <pre><code>// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  build: {
    // 1. 代码分割
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 Vue 相关库打包到一起
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          // 将 UI 库单独打包
          'ui-vendor': ['element-plus'],
          // 将工具库单独打包
          'utils': ['lodash-es', 'dayjs']
        }
      }
    },

    // 2. 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 删除 console
        drop_debugger: true // 删除 debugger
      }
    },

    // 3. CSS 代码分割
    cssCodeSplit: true,

    // 4. 生成 sourcemap (生产环境建议关闭)
    sourcemap: false,

    // 5. chunk 大小警告
    chunkSizeWarningLimit: 500
  },

  // 6. 优化依赖预构建
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia'],
    exclude: ['your-local-package']
  }
})</code></pre>
        </div>

        <div class="optimization-strategies">
          <h4>🎯 打包优化策略</h4>
          <div class="strategies-grid">
            <div class="strategy-card">
              <div class="strategy-icon">📦</div>
              <h5>Tree Shaking</h5>
              <p>移除未使用的代码</p>
              <ul>
                <li>使用 ES modules 导入</li>
                <li>避免导入整个库</li>
                <li>配置 sideEffects</li>
              </ul>
            </div>
            <div class="strategy-card">
              <div class="strategy-icon">✂️</div>
              <h5>代码分割</h5>
              <p>按需加载代码</p>
              <ul>
                <li>路由懒加载</li>
                <li>组件异步加载</li>
                <li>动态 import</li>
              </ul>
            </div>
            <div class="strategy-card">
              <div class="strategy-icon">🗜️</div>
              <h5>压缩优化</h5>
              <p>减小文件体积</p>
              <ul>
                <li>JavaScript 压缩</li>
                <li>CSS 压缩</li>
                <li>图片压缩</li>
              </ul>
            </div>
            <div class="strategy-card">
              <div class="strategy-icon">🔄</div>
              <h5>缓存策略</h5>
              <p>利用浏览器缓存</p>
              <ul>
                <li>文件名 hash</li>
                <li>长期缓存</li>
                <li>CDN 加速</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. 性能监控 -->
      <section class="content-section">
        <h2>7️⃣ 性能监控 - 持续优化</h2>
        <p>使用性能监控工具，持续跟踪应用性能，及时发现和解决问题。</p>

        <div class="monitoring-dashboard">
          <h3>📊 性能监控面板</h3>
          <div class="metrics-dashboard">
            <div class="metric-card">
              <div class="metric-header">
                <span class="metric-name">页面加载时间</span>
                <span class="metric-trend up">↑ 12%</span>
              </div>
              <div class="metric-value">1.2s</div>
              <div class="metric-chart">
                <div class="chart-bar" style="height: 40%"></div>
                <div class="chart-bar" style="height: 60%"></div>
                <div class="chart-bar" style="height: 45%"></div>
                <div class="chart-bar" style="height: 75%"></div>
                <div class="chart-bar" style="height: 55%"></div>
                <div class="chart-bar" style="height: 30%"></div>
                <div class="chart-bar" style="height: 50%"></div>
              </div>
            </div>

            <div class="metric-card">
              <div class="metric-header">
                <span class="metric-name">首次内容绘制</span>
                <span class="metric-trend down">↓ 8%</span>
              </div>
              <div class="metric-value good">0.8s</div>
              <div class="metric-chart">
                <div class="chart-bar" style="height: 70%"></div>
                <div class="chart-bar" style="height: 50%"></div>
                <div class="chart-bar" style="height: 55%"></div>
                <div class="chart-bar" style="height: 40%"></div>
                <div class="chart-bar" style="height: 35%"></div>
                <div class="chart-bar" style="height: 30%"></div>
                <div class="chart-bar" style="height: 25%"></div>
              </div>
            </div>

            <div class="metric-card">
              <div class="metric-header">
                <span class="metric-name">交互响应时间</span>
                <span class="metric-trend down">↓ 15%</span>
              </div>
              <div class="metric-value good">45ms</div>
              <div class="metric-chart">
                <div class="chart-bar" style="height: 60%"></div>
                <div class="chart-bar" style="height: 55%"></div>
                <div class="chart-bar" style="height: 45%"></div>
                <div class="chart-bar" style="height: 40%"></div>
                <div class="chart-bar" style="height: 35%"></div>
                <div class="chart-bar" style="height: 30%"></div>
                <div class="chart-bar" style="height: 28%"></div>
              </div>
            </div>

            <div class="metric-card">
              <div class="metric-header">
                <span class="metric-name">内存使用</span>
                <span class="metric-trend stable">→ 0%</span>
              </div>
              <div class="metric-value">45 MB</div>
              <div class="metric-chart">
                <div class="chart-bar" style="height: 50%"></div>
                <div class="chart-bar" style="height: 52%"></div>
                <div class="chart-bar" style="height: 48%"></div>
                <div class="chart-bar" style="height: 51%"></div>
                <div class="chart-bar" style="height: 49%"></div>
                <div class="chart-bar" style="height: 50%"></div>
                <div class="chart-bar" style="height: 50%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 性能监控实现</span>
          </div>
          <pre><code>// 使用 Performance API
const performance = window.performance

// 1. 页面加载性能
const timing = performance.timing
const loadTime = timing.loadEventEnd - timing.navigationStart
console.log('页面加载时间:', loadTime, 'ms')

// 2. 使用 PerformanceObserver 监控
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.name, entry.startTime)

    // 上报到监控服务
    reportToAnalytics({
      metric: entry.entryType,
      value: entry.startTime,
      name: entry.name
    })
  }
})

observer.observe({
  entryTypes: ['navigation', 'paint', 'resource', 'measure']
})

// 3. 监控 FCP (First Contentful Paint)
new PerformanceObserver((list) => {
  const entries = list.getEntries()
  const fcp = entries.find(entry => entry.name === 'first-contentful-paint')
  if (fcp) {
    console.log('FCP:', fcp.startTime, 'ms')
  }
}).observe({ entryTypes: ['paint'] })

// 4. 监控 LCP (Largest Contentful Paint)
new PerformanceObserver((list) => {
  const entries = list.getEntries()
  const lastEntry = entries[entries.length - 1]
  console.log('LCP:', lastEntry.startTime, 'ms')
}).observe({ entryTypes: ['largest-contentful-paint'] })

// 5. 自定义性能标记
performance.mark('component-mount-start')
// ... 组件挂载逻辑
performance.mark('component-mount-end')
performance.measure(
  'component-mount',
  'component-mount-start',
  'component-mount-end'
)</code></pre>
        </div>

        <div class="monitoring-tools">
          <h4>🔧 推荐的性能监控工具</h4>
          <div class="tools-grid">
            <div class="tool-card">
              <div class="tool-icon">🔍</div>
              <h5>Chrome DevTools</h5>
              <p>强大的开发者工具，提供性能分析、内存分析等功能</p>
            </div>
            <div class="tool-card">
              <div class="tool-icon">💡</div>
              <h5>Lighthouse</h5>
              <p>自动化性能测试工具，提供详细的优化建议</p>
            </div>
            <div class="tool-card">
              <div class="tool-icon">📊</div>
              <h5>Web Vitals</h5>
              <p>Google 提供的核心性能指标库</p>
            </div>
            <div class="tool-card">
              <div class="tool-icon">🎯</div>
              <h5>Bundle Analyzer</h5>
              <p>可视化分析打包体积</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 课程总结 -->
      <section class="content-section">
        <h2>📚 课程总结</h2>

        <div class="summary-grid">
          <div class="summary-card">
            <div class="summary-icon">🚀</div>
            <h3>渲染优化</h3>
            <ul>
              <li>虚拟滚动处理大列表</li>
              <li>组件懒加载按需引入</li>
              <li>v-memo 智能缓存</li>
              <li>KeepAlive 缓存组件</li>
            </ul>
          </div>

          <div class="summary-card">
            <div class="summary-icon">⚡</div>
            <h3>响应式优化</h3>
            <ul>
              <li>shallowRef/shallowReactive</li>
              <li>readonly 防止修改</li>
              <li>markRaw 标记非响应式</li>
              <li>computed 缓存计算</li>
            </ul>
          </div>

          <div class="summary-card">
            <div class="summary-icon">📦</div>
            <h3>打包优化</h3>
            <ul>
              <li>Tree Shaking 移除无用代码</li>
              <li>代码分割按需加载</li>
              <li>压缩优化减小体积</li>
              <li>缓存策略提升速度</li>
            </ul>
          </div>
        </div>

        <div class="best-practices">
          <h3>💡 性能优化最佳实践</h3>
          <div class="practices-grid">
            <div class="practice-item">
              <strong>1. 测量优先</strong>
              <p>先测量后优化，找到真正的性能瓶颈</p>
            </div>
            <div class="practice-item">
              <strong>2. 渐进增强</strong>
              <p>保证基本功能，逐步添加增强特性</p>
            </div>
            <div class="practice-item">
              <strong>3. 持续监控</strong>
              <p>建立性能监控体系，及时发现问题</p>
            </div>
            <div class="practice-item">
              <strong>4. 用户优先</strong>
              <p>优化用户感知的性能，提升体验</p>
            </div>
          </div>
        </div>

        <div class="next-lesson">
          <div class="next-lesson-badge">下节课预告</div>
          <h3>🎓 第70课：响应式原理深入</h3>
          <p>深入理解 Vue3 响应式系统的实现原理，掌握 Proxy、Reflect、依赖收集等核心概念</p>
          <div class="next-topics">
            <span class="topic-tag">Proxy vs defineProperty</span>
            <span class="topic-tag">依赖收集</span>
            <span class="topic-tag">派发更新</span>
            <span class="topic-tag">响应式 API</span>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, onMounted } from 'vue'

// 虚拟滚动
const showNormalList = ref(false)
const normalListItems = ref([])
const itemHeight = 80
const containerHeight = 400
const visibleCount = Math.ceil(containerHeight / itemHeight)
const bufferCount = 3
const startIndex = ref(0)

// 生成虚拟列表数据
const allVirtualItems = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  title: `数据项 ${i + 1}`,
  description: `这是第 ${i + 1} 项的描述信息`,
  emoji: ['📊', '📝', '🎯', '💼', '🎨', '🔥', '⚡', '✨'][i % 8],
  color: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a', '#fee140', '#30cfd0'][i % 8]
}))

const virtualListHeight = computed(() => allVirtualItems.length * itemHeight)

const visibleItems = computed(() => {
  const start = Math.max(0, startIndex.value - bufferCount)
  const end = Math.min(allVirtualItems.length, startIndex.value + visibleCount + bufferCount)
  return allVirtualItems.slice(start, end)
})

const startOffset = computed(() => {
  return Math.max(0, startIndex.value - bufferCount) * itemHeight
})

function handleVirtualScroll(e) {
  const scrollTop = e.target.scrollTop
  startIndex.value = Math.floor(scrollTop / itemHeight)
}

function renderNormalList() {
  if (!showNormalList.value) {
    normalListItems.value = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      title: `数据项 ${i + 1}`,
      description: `这是第 ${i + 1} 项的描述信息`,
      emoji: ['📊', '📝', '🎯', '💼'][i % 4],
      color: ['#667eea', '#764ba2', '#f093fb', '#4facfe'][i % 4]
    }))
  }
  showNormalList.value = !showNormalList.value
}

// 组件懒加载
const lazyTabs = [
  { id: 'chart', name: '图表', icon: '📊' },
  { id: 'table', name: '表格', icon: '📋' },
  { id: 'form', name: '表单', icon: '📝' }
]

const activeLazyTab = ref('chart')
const loadedComponents = ref([])

const lazyComponents = {
  chart: defineAsyncComponent(() => {
    loadedComponents.value.push('chart')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          template: '<div class="lazy-component"><h3>📊 图表组件</h3><p>这是一个异步加载的图表组件</p><div class="chart-placeholder"></div></div>'
        })
      }, 500)
    })
  }),
  table: defineAsyncComponent(() => {
    loadedComponents.value.push('table')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          template: '<div class="lazy-component"><h3>📋 表格组件</h3><p>这是一个异步加载的表格组件</p><div class="table-placeholder"></div></div>'
        })
      }, 500)
    })
  }),
  form: defineAsyncComponent(() => {
    loadedComponents.value.push('form')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          template: '<div class="lazy-component"><h3>📝 表单组件</h3><p>这是一个异步加载的表单组件</p><div class="form-placeholder"></div></div>'
        })
      }, 500)
    })
  })
}

const currentLazyComponent = computed(() => lazyComponents[activeLazyTab.value])

// 响应式优化
const deepUpdateTime = ref(0)
const shallowUpdateTime = ref(0)
const deepReactiveData = ref({ level1: { level2: { level3: { value: 0 } } } })
const shallowReactiveData = ref({ level1: { level2: { level3: { value: 0 } } } })

const performanceImprovement = computed(() => {
  if (shallowUpdateTime.value === 0) return 0
  return (deepUpdateTime.value / shallowUpdateTime.value).toFixed(1)
})

function updateDeepReactive() {
  const start = performance.now()
  for (let i = 0; i < 1000; i++) {
    deepReactiveData.value = {
      level1: {
        level2: {
          level3: { value: deepReactiveData.value.level1.level2.level3.value + 1 }
        }
      }
    }
  }
  deepUpdateTime.value = (performance.now() - start).toFixed(2)
}

function updateShallowReactive() {
  const start = performance.now()
  for (let i = 0; i < 1000; i++) {
    shallowReactiveData.value = {
      level1: {
        level2: {
          level3: { value: shallowReactiveData.value.level1.level2.level3.value + 1 }
        }
      }
    }
  }
  shallowUpdateTime.value = (performance.now() - start).toFixed(2)
}

// v-memo 演示
const counter = ref(0)
const filter = ref('all')
const normalRenderCount = ref(0)
const memoRenderCount = ref(0)

const memoItems = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  text: `列表项 ${i + 1}`,
  emoji: ['🎯', '⚡', '🔥', '✨', '💡'][i % 5]
}))

function updateCounter() {
  counter.value++
  normalRenderCount.value += memoItems.length
}

function updateFilter() {
  filter.value = filter.value === 'all' ? 'active' : 'all'
  normalRenderCount.value += memoItems.length
  memoRenderCount.value += memoItems.length
}

onMounted(() => {
  normalRenderCount.value = memoItems.length
  memoRenderCount.value = memoItems.length
})
</script>

<style scoped>
/* 性能统计卡片 */
.performance-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 24px 0;
}

.stat-card {
  padding: 32px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.stat-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 12px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.6;
}

/* 性能指标 */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.metric-item {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #4285f4;
}

.metric-item strong {
  display: block;
  font-size: 15px;
  color: #333;
  margin-bottom: 8px;
}

.metric-item p {
  margin: 0 0 12px 0;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

.metric-target {
  padding: 8px 12px;
  background: linear-gradient(135deg, #16a34a 0%, #10b981 100%);
  color: white;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
}

/* 对比演示 */
.comparison-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin: 24px 0;
}

.demo-section {
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.demo-section.highlight {
  background: linear-gradient(135deg, #e8f0fe 0%, #f0e6ff 100%);
  border-color: #4285f4;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #333;
}

.performance-indicator {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(234, 67, 53, 0.1);
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 600;
  color: #ea4335;
}

.performance-indicator.good {
  background: rgba(22, 163, 74, 0.1);
  color: #16a34a;
}

/* 普通列表 */
.normal-list-container {
  max-height: 400px;
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  margin-top: 16px;
  padding: 12px;
}

/* 虚拟列表 */
.virtual-list-container {
  height: 400px;
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  margin-top: 16px;
  position: relative;
}

.virtual-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.virtual-list-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  margin-bottom: 8px;
  background: white;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s;
}

.normal-list-container .list-item {
  background: #f8f9fa;
}

.list-item:hover {
  border-color: #4285f4;
  transform: translateX(4px);
}

.item-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.item-info {
  flex: 1;
  min-width: 0;
}

.item-title {
  font-weight: 600;
  font-size: 15px;
  color: #333;
  margin-bottom: 4px;
}

.item-desc {
  font-size: 13px;
  color: #666;
}

.item-id {
  padding: 4px 10px;
  background: #e8f0fe;
  color: #4285f4;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.hint-text {
  margin-top: 12px;
  font-size: 13px;
  color: #666;
  font-style: italic;
}

/* 懒加载演示 */
.lazy-load-demo {
  margin-top: 20px;
}

.demo-controls {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.tab-btn {
  padding: 12px 24px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tab-btn:hover {
  border-color: #4285f4;
}

.tab-btn.active {
  background: linear-gradient(135deg, #4285f4 0%, #9333ea 100%);
  color: white;
  border-color: transparent;
}

.loaded-indicator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: rgba(22, 163, 74, 0.2);
  color: #16a34a;
  border-radius: 50%;
  font-size: 12px;
}

.tab-btn.active .loaded-indicator {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.lazy-content {
  min-height: 200px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 2px solid #e0e0e0;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 16px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4285f4;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.lazy-component {
  text-align: center;
}

.lazy-component h3 {
  margin: 0 0 12px 0;
  color: #333;
}

.lazy-component p {
  margin: 0 0 24px 0;
  color: #666;
}

.chart-placeholder,
.table-placeholder,
.form-placeholder {
  height: 150px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 8px;
  margin: 0 auto;
  max-width: 400px;
}

.load-info {
  margin-top: 20px;
  padding: 16px;
  background: #e8f0fe;
  border-radius: 8px;
}

.load-info p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.load-info strong {
  color: #4285f4;
}

/* 响应式演示 */
.reactivity-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.demo-card {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.demo-card.highlight {
  background: linear-gradient(135deg, #e8f0fe 0%, #f0e6ff 100%);
  border-color: #4285f4;
}

.demo-card h4 {
  margin: 0 0 16px 0;
  font-size: 16px;
  color: #333;
}

.update-time {
  padding: 8px 12px;
  background: rgba(234, 67, 53, 0.1);
  color: #ea4335;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  margin: 12px 0;
}

.update-time.good {
  background: rgba(22, 163, 74, 0.1);
  color: #16a34a;
}

.data-display {
  background: white;
  padding: 12px;
  border-radius: 6px;
  font-size: 12px;
  max-height: 100px;
  overflow: auto;
  margin: 12px 0 0 0;
}

.performance-comparison {
  margin-top: 20px;
  padding: 24px;
  background: linear-gradient(135deg, #fff8e1 0%, #ffe8a1 100%);
  border-radius: 12px;
  text-align: center;
}

.comparison-result {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.result-label {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.result-value {
  font-size: 32px;
  font-weight: 700;
  color: #16a34a;
}

/* 提示框 */
.tips-box {
  margin: 24px 0;
  padding: 24px;
  background: linear-gradient(135deg, #e8f0fe 0%, #f0e6ff 100%);
  border-radius: 12px;
}

.tips-box h4 {
  margin: 0 0 20px 0;
  font-size: 18px;
  color: #333;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.tip-item {
  padding: 16px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tip-icon {
  font-size: 24px;
}

.tip-item strong {
  font-size: 15px;
  color: #333;
}

.tip-item p {
  margin: 0;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

/* v-memo 演示 */
.memo-demo {
  margin-top: 20px;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.render-count {
  padding: 8px 16px;
  background: rgba(234, 67, 53, 0.1);
  color: #ea4335;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
}

.render-count.good {
  background: rgba(22, 163, 74, 0.1);
  color: #16a34a;
}

.item-list {
  max-height: 300px;
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  padding: 12px;
}

.memo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 8px;
}

.item-emoji {
  font-size: 24px;
}

.item-text {
  flex: 1;
  font-size: 14px;
  color: #333;
}

.item-counter {
  padding: 4px 10px;
  background: #e8f0fe;
  color: #4285f4;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

/* 优化清单 */
.optimization-checklist {
  margin: 24px 0;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
}

.optimization-checklist h4 {
  margin: 0 0 20px 0;
  font-size: 18px;
  color: #333;
}

.checklist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: white;
  border-radius: 6px;
}

.checklist-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.checklist-item label {
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

/* 打包分析 */
.bundle-analysis {
  margin: 24px 0;
}

.bundle-analysis h3 {
  margin: 0 0 24px 0;
  font-size: 20px;
  color: #333;
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.bundle-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #e0e0e0;
}

.bundle-card.before {
  border-color: #ea4335;
}

.bundle-card.after {
  border-color: #16a34a;
}

.card-header {
  padding: 16px 20px;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-badge {
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.status-badge.bad {
  background: rgba(234, 67, 53, 0.1);
  color: #ea4335;
}

.status-badge.good {
  background: rgba(22, 163, 74, 0.1);
  color: #16a34a;
}

.bundle-size {
  font-size: 24px;
  font-weight: 700;
  color: #333;
}

.card-body {
  padding: 20px;
}

.bundle-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.bundle-item:last-child {
  margin-bottom: 0;
}

.item-name {
  min-width: 100px;
  font-size: 13px;
  color: #666;
}

.size-bar {
  flex: 1;
  height: 24px;
  background: linear-gradient(90deg, #ea4335 0%, #fbbc04 100%);
  border-radius: 4px;
}

.size-bar.good {
  background: linear-gradient(90deg, #16a34a 0%, #10b981 100%);
}

.item-size {
  min-width: 80px;
  text-align: right;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}

.optimization-result {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 24px;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 12px;
}

.result-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.result-icon {
  font-size: 32px;
}

.result-item strong {
  font-size: 14px;
  color: #333;
}

.result-value {
  font-size: 28px;
  font-weight: 700;
  color: #16a34a;
}

/* 优化策略 */
.optimization-strategies {
  margin: 24px 0;
}

.optimization-strategies h4 {
  margin: 0 0 20px 0;
  font-size: 18px;
  color: #333;
}

.strategies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.strategy-card {
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f0fe 100%);
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.strategy-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.strategy-card h5 {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #333;
}

.strategy-card p {
  margin: 0 0 12px 0;
  font-size: 13px;
  color: #666;
}

.strategy-card ul {
  margin: 0;
  padding-left: 20px;
  line-height: 1.8;
  font-size: 13px;
  color: #666;
}

/* 性能监控面板 */
.monitoring-dashboard {
  margin: 24px 0;
}

.monitoring-dashboard h3 {
  margin: 0 0 20px 0;
  font-size: 20px;
  color: #333;
}

.metrics-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.metric-card {
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.metric-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.metric-name {
  font-size: 13px;
  color: #666;
  font-weight: 600;
}

.metric-trend {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.metric-trend.up {
  background: rgba(234, 67, 53, 0.1);
  color: #ea4335;
}

.metric-trend.down {
  background: rgba(22, 163, 74, 0.1);
  color: #16a34a;
}

.metric-trend.stable {
  background: #f0f0f0;
  color: #666;
}

.metric-value {
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
}

.metric-value.good {
  color: #16a34a;
}

.metric-chart {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 60px;
}

.chart-bar {
  flex: 1;
  background: linear-gradient(180deg, #4285f4 0%, #357ae8 100%);
  border-radius: 2px 2px 0 0;
  transition: height 0.3s;
}

/* 监控工具 */
.monitoring-tools {
  margin: 24px 0;
}

.monitoring-tools h4 {
  margin: 0 0 20px 0;
  font-size: 18px;
  color: #333;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.tool-card {
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  text-align: center;
  transition: all 0.3s;
}

.tool-card:hover {
  border-color: #4285f4;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tool-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.tool-card h5 {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #333;
}

.tool-card p {
  margin: 0;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

/* 总结部分 */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.summary-card {
  padding: 28px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f0fe 100%);
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.summary-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.summary-card h3 {
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #333;
}

.summary-card ul {
  margin: 0;
  padding-left: 20px;
  line-height: 2;
}

.best-practices {
  margin-bottom: 32px;
  padding: 28px;
  background: linear-gradient(135deg, #fff8e1 0%, #ffe8a1 100%);
  border-radius: 12px;
  border: 2px solid #ffd54f;
}

.best-practices h3 {
  margin: 0 0 20px 0;
  font-size: 20px;
  color: #333;
}

.practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.practice-item {
  padding: 20px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #ffd54f;
}

.practice-item strong {
  display: block;
  font-size: 15px;
  color: #333;
  margin-bottom: 8px;
}

.practice-item p {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.next-lesson {
  padding: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  text-align: center;
}

.next-lesson-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 16px;
}

.next-lesson h3 {
  margin: 0 0 12px 0;
  font-size: 24px;
}

.next-lesson p {
  margin: 0 0 20px 0;
  opacity: 0.9;
  line-height: 1.6;
}

.next-topics {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.topic-tag {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

/* 代码盒子 */
.code-box {
  margin: 24px 0;
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
}

.code-header {
  padding: 12px 20px;
  background: #2d2d2d;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid #3d3d3d;
}

.code-box pre {
  margin: 0;
  padding: 24px;
  color: #d4d4d4;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}
</style>
