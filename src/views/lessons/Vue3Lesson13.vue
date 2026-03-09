<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>组合式 API (Composition API)</h1>
      <p class="lesson-subtitle">深入理解 Vue3 的 Composition API，掌握现代化的组件开发方式</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 45 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <div class="lesson-content">
      <!-- 1. 什么是 Composition API -->
      <section class="content-section">
        <h2>1️⃣ 什么是 Composition API？</h2>
        <p>Composition API 是 Vue3 引入的新特性，提供了一种更灵活的方式来组织组件逻辑。它解决了 Options API 在处理复杂组件时的一些痛点。</p>

        <div class="info-box">
          <h3>为什么需要 Composition API</h3>
          <ul>
            <li><strong>逻辑复用：</strong>更容易提取和复用组件逻辑</li>
            <li><strong>代码组织：</strong>相关逻辑可以放在一起，而不是分散在各个选项中</li>
            <li><strong>类型推导：</strong>更好的 TypeScript 支持</li>
            <li><strong>更小的打包体积：</strong>更好的 tree-shaking 支持</li>
          </ul>
        </div>

        <div class="demo-box">
          <h3>🎯 问题演示：Options API 的局限性</h3>
          <div class="demo-content">
            <div class="code-comparison">
              <div class="comparison-panel">
                <h4>Options API 的问题</h4>
                <div class="issue-diagram">
                  <div class="feature-block feature-a">
                    <h5>功能 A - 用户信息</h5>
                    <div class="code-parts">
                      <div class="part">data() { user: {} }</div>
                      <div class="separator">⬇️ 分散在不同位置</div>
                      <div class="part">methods: { fetchUser() }</div>
                      <div class="separator">⬇️</div>
                      <div class="part">computed: { userName() }</div>
                      <div class="separator">⬇️</div>
                      <div class="part">mounted() { this.fetchUser() }</div>
                    </div>
                  </div>

                  <div class="feature-block feature-b">
                    <h5>功能 B - 产品列表</h5>
                    <div class="code-parts">
                      <div class="part">data() { products: [] }</div>
                      <div class="separator">⬇️ 同样分散</div>
                      <div class="part">methods: { fetchProducts() }</div>
                      <div class="separator">⬇️</div>
                      <div class="part">computed: { total() }</div>
                      <div class="separator">⬇️</div>
                      <div class="part">mounted() { this.fetchProducts() }</div>
                    </div>
                  </div>
                </div>
                <p class="issue-note">❌ 同一功能的代码分散在多个选项中，难以维护</p>
              </div>

              <div class="comparison-panel">
                <h4>Composition API 的优势</h4>
                <div class="solution-diagram">
                  <div class="composable-block composable-a">
                    <h5>useUser() 组合函数</h5>
                    <div class="code-group">
                      <div class="grouped-code">
                        const user = ref({})<br>
                        const userName = computed(...)<br>
                        const fetchUser = () => {...}<br>
                        onMounted(fetchUser)
                      </div>
                    </div>
                  </div>

                  <div class="composable-block composable-b">
                    <h5>useProducts() 组合函数</h5>
                    <div class="code-group">
                      <div class="grouped-code">
                        const products = ref([])<br>
                        const total = computed(...)<br>
                        const fetchProducts = () => {...}<br>
                        onMounted(fetchProducts)
                      </div>
                    </div>
                  </div>
                </div>
                <p class="solution-note">✅ 相关逻辑组织在一起，可复用、易维护</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. setup 函数 -->
      <section class="content-section">
        <h2>2️⃣ setup 函数基础</h2>
        <p>setup 是 Composition API 的入口点，在组件创建之前执行，所有的组合式 API 都在这里使用。</p>

        <div class="info-box">
          <h3>setup 函数特点</h3>
          <pre v-pre><code>&lt;script setup&gt;
// 这是 setup 语法糖，更简洁
import { ref, computed, onMounted } from 'vue'

// 响应式数据
const count = ref(0)

// 计算属性
const double = computed(() => count.value * 2)

// 方法
const increment = () => {
  count.value++
}

// 生命周期
onMounted(() => {
  console.log('组件已挂载')
})

// 所有这些会自动暴露给模板
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;p&gt;Double: {{ double }}&lt;/p&gt;
    &lt;button @click="increment"&gt;+1&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：Options API vs Composition API</h3>
          <div class="demo-content">
            <div class="api-comparison-tabs">
              <div class="tabs-header">
                <button
                  @click="apiStyle = 'options'"
                  :class="{ active: apiStyle === 'options' }"
                  class="tab-btn"
                >
                  Options API
                </button>
                <button
                  @click="apiStyle = 'composition'"
                  :class="{ active: apiStyle === 'composition' }"
                  class="tab-btn"
                >
                  Composition API
                </button>
              </div>

              <div class="tabs-content">
                <div class="demo-counter">
                  <div class="counter-display">
                    <h4>计数器演示</h4>
                    <div class="count-value">{{ demoCount }}</div>
                    <div class="count-info">
                      <p>双倍值: {{ demoDouble }}</p>
                      <p>是否为偶数: {{ demoIsEven ? '是' : '否' }}</p>
                    </div>
                    <div class="counter-actions">
                      <button @click="demoDecrement" class="btn btn-secondary">-1</button>
                      <button @click="demoReset" class="btn btn-secondary">重置</button>
                      <button @click="demoIncrement" class="btn btn-primary">+1</button>
                    </div>
                  </div>

                  <div class="code-display">
                    <div class="code-label">{{ apiStyle === 'options' ? 'Options API' : 'Composition API' }} 代码</div>
                    <pre v-if="apiStyle === 'options'" v-pre><code>&lt;script&gt;
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    double() {
      return this.count * 2
    },
    isEven() {
      return this.count % 2 === 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
}
&lt;/script&gt;</code></pre>

                    <pre v-else v-pre><code>&lt;script setup&gt;
import { ref, computed } from 'vue'

const count = ref(0)

const double = computed(() =>
  count.value * 2
)

const isEven = computed(() =>
  count.value % 2 === 0
)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const reset = () => {
  count.value = 0
}
&lt;/script&gt;</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. 响应式 API -->
      <section class="content-section">
        <h2>3️⃣ 响应式 API：ref vs reactive</h2>
        <p>Composition API 提供了两种创建响应式数据的方式：ref 和 reactive。</p>

        <div class="info-box">
          <h3>ref 和 reactive 的区别</h3>
          <pre v-pre><code>import { ref, reactive } from 'vue'

// ref: 用于基本类型和对象
const count = ref(0)
const user = ref({ name: '张三' })

// 访问和修改需要 .value
count.value++
user.value.name = '李四'

// reactive: 只用于对象
const state = reactive({
  count: 0,
  user: { name: '张三' }
})

// 直接访问和修改
state.count++
state.user.name = '李四'

// 模板中，ref 会自动解包
&lt;template&gt;
  &lt;p&gt;{{ count }}&lt;/p&gt;  &lt;!-- 不需要 .value --&gt;
  &lt;p&gt;{{ state.count }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：ref vs reactive</h3>
          <div class="demo-content">
            <div class="reactive-demo">
              <div class="demo-section">
                <h4>使用 ref</h4>
                <div class="demo-card">
                  <div class="form-group">
                    <label>姓名 (ref)</label>
                    <input v-model="refUser.name" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label>年龄 (ref)</label>
                    <input v-model.number="refUser.age" type="number" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label>邮箱 (ref)</label>
                    <input v-model="refUser.email" class="form-input" />
                  </div>
                  <div class="preview-box">
                    <h5>数据预览</h5>
                    <pre>{{ JSON.stringify(refUser, null, 2) }}</pre>
                  </div>
                </div>
              </div>

              <div class="demo-section">
                <h4>使用 reactive</h4>
                <div class="demo-card">
                  <div class="form-group">
                    <label>姓名 (reactive)</label>
                    <input v-model="reactiveUser.name" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label>年龄 (reactive)</label>
                    <input v-model.number="reactiveUser.age" type="number" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label>邮箱 (reactive)</label>
                    <input v-model="reactiveUser.email" class="form-input" />
                  </div>
                  <div class="preview-box">
                    <h5>数据预览</h5>
                    <pre>{{ JSON.stringify(reactiveUser, null, 2) }}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="comparison-table">
              <h4>选择建议</h4>
              <table>
                <thead>
                  <tr>
                    <th>场景</th>
                    <th>推荐使用</th>
                    <th>原因</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>基本类型数据</td>
                    <td><code>ref</code></td>
                    <td>reactive 不支持基本类型</td>
                  </tr>
                  <tr>
                    <td>单个对象</td>
                    <td><code>reactive</code></td>
                    <td>不需要 .value，更简洁</td>
                  </tr>
                  <tr>
                    <td>需要替换整个对象</td>
                    <td><code>ref</code></td>
                    <td>可以直接赋值整个对象</td>
                  </tr>
                  <tr>
                    <td>组合函数返回值</td>
                    <td><code>ref</code></td>
                    <td>解构后不会丢失响应性</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. 组合式函数 (Composables) -->
      <section class="content-section">
        <h2>4️⃣ 组合式函数 (Composables)</h2>
        <p>组合式函数是利用 Composition API 来封装和复用有状态逻辑的函数，是 Vue3 中实现逻辑复用的推荐方式。</p>

        <div class="info-box">
          <h3>创建组合式函数</h3>
          <pre v-pre><code>// composables/useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const double = computed(() => count.value * 2)

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue

  return {
    count,
    double,
    increment,
    decrement,
    reset
  }
}

// 在组件中使用
&lt;script setup&gt;
import { useCounter } from './composables/useCounter'

const { count, double, increment, decrement, reset } = useCounter(10)
&lt;/script&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 实战：常用组合式函数</h3>
          <div class="demo-content">
            <div class="composables-demo">
              <div class="composable-example">
                <h4>1. useMouse - 鼠标位置追踪</h4>
                <div class="demo-card mouse-tracker">
                  <div class="mouse-display">
                    <p>鼠标位置：X = {{ mouseX }}, Y = {{ mouseY }}</p>
                    <div class="mouse-indicator" :style="{ left: indicatorX + 'px', top: indicatorY + 'px' }">
                      🖱️
                    </div>
                  </div>
                </div>
                <details class="code-details">
                  <summary>查看代码</summary>
                  <pre v-pre><code>// composables/useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  const update = (event) => {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}</code></pre>
                </details>
              </div>

              <div class="composable-example">
                <h4>2. useLocalStorage - 本地存储</h4>
                <div class="demo-card">
                  <div class="form-group">
                    <label>输入内容（自动保存到 localStorage）</label>
                    <input v-model="storedValue" class="form-input" placeholder="试试刷新页面..." />
                  </div>
                  <p class="hint">💡 数据已保存到 localStorage，刷新页面不会丢失</p>
                  <button @click="storedValue = ''" class="btn btn-secondary">清空</button>
                </div>
                <details class="code-details">
                  <summary>查看代码</summary>
                  <pre v-pre><code>// composables/useLocalStorage.js
import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  const value = ref(
    localStorage.getItem(key) || defaultValue
  )

  watch(value, (newValue) => {
    localStorage.setItem(key, newValue)
  })

  return value
}</code></pre>
                </details>
              </div>

              <div class="composable-example">
                <h4>3. useToggle - 开关切换</h4>
                <div class="demo-card">
                  <div class="toggle-display">
                    <div class="toggle-status" :class="{ active: isToggled }">
                      {{ isToggled ? '开启 ✅' : '关闭 ❌' }}
                    </div>
                    <button @click="toggle" class="btn btn-primary">切换</button>
                    <button @click="setTrue" class="btn btn-secondary">开启</button>
                    <button @click="setFalse" class="btn btn-secondary">关闭</button>
                  </div>
                </div>
                <details class="code-details">
                  <summary>查看代码</summary>
                  <pre v-pre><code>// composables/useToggle.js
import { ref } from 'vue'

export function useToggle(initialValue = false) {
  const value = ref(initialValue)

  const toggle = () => {
    value.value = !value.value
  }

  const setTrue = () => {
    value.value = true
  }

  const setFalse = () => {
    value.value = false
  }

  return {
    value,
    toggle,
    setTrue,
    setFalse
  }
}</code></pre>
                </details>
              </div>

              <div class="composable-example">
                <h4>4. useFetch - 数据请求</h4>
                <div class="demo-card">
                  <button @click="loadUsers" class="btn btn-primary" :disabled="loading">
                    {{ loading ? '加载中...' : '加载用户数据' }}
                  </button>

                  <div v-if="error" class="error-box">
                    错误: {{ error }}
                  </div>

                  <div v-if="users.length > 0" class="users-list">
                    <div v-for="user in users" :key="user.id" class="user-item">
                      {{ user.name }} - {{ user.email }}
                    </div>
                  </div>
                </div>
                <details class="code-details">
                  <summary>查看代码</summary>
                  <pre v-pre><code>// composables/useFetch.js
import { ref } from 'vue'

export function useFetch() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const execute = async (url) => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(url)
      data.value = await response.json()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, execute }
}</code></pre>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. 最佳实践 -->
      <section class="content-section">
        <h2>5️⃣ Composition API 最佳实践</h2>
        <p>掌握 Composition API 的最佳实践，写出更优雅、可维护的代码。</p>

        <div class="demo-box">
          <h3>✅ 推荐做法</h3>
          <div class="demo-content">
            <div class="best-practices">
              <div class="practice-item good">
                <h4>✅ 使用组合式函数封装逻辑</h4>
                <pre v-pre><code>// 好：可复用的组合式函数
function useUserManagement() {
  const users = ref([])
  const loading = ref(false)

  const fetchUsers = async () => {
    loading.value = true
    // ...
  }

  return { users, loading, fetchUsers }
}

// 在组件中使用
const { users, loading, fetchUsers } = useUserManagement()</code></pre>
              </div>

              <div class="practice-item bad">
                <h4>❌ 在组件中写所有逻辑</h4>
                <pre v-pre><code>// 不好：逻辑无法复用
&lt;script setup&gt;
const users = ref([])
const loading = ref(false)

const fetchUsers = async () => {
  loading.value = true
  // 大量代码...
  // 其他组件无法复用这些逻辑
}
&lt;/script&gt;</code></pre>
              </div>

              <div class="practice-item good">
                <h4>✅ 组合式函数以 use 开头命名</h4>
                <pre v-pre><code>// 好：清晰的命名约定
export function useCounter() { }
export function useMouse() { }
export function useLocalStorage() { }</code></pre>
              </div>

              <div class="practice-item bad">
                <h4>❌ 不规范的命名</h4>
                <pre v-pre><code>// 不好：难以识别
export function counter() { }
export function getMouse() { }
export function storage() { }</code></pre>
              </div>

              <div class="practice-item good">
                <h4>✅ 返回 ref 而不是 reactive</h4>
                <pre v-pre><code>// 好：解构后保持响应性
function useCounter() {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  return { count, double }
}

// 可以安全解构
const { count, double } = useCounter()</code></pre>
              </div>

              <div class="practice-item bad">
                <h4>❌ 返回 reactive 对象</h4>
                <pre v-pre><code>// 不好：解构会失去响应性
function useCounter() {
  const state = reactive({
    count: 0,
    double: computed(() => state.count * 2)
  })
  return state
}

// 解构会失去响应性
const { count } = useCounter() // ❌ 失去响应性</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. 知识总结 -->
      <section class="content-section">
        <h2>📚 知识总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>💡 核心优势</h3>
            <ul>
              <li>更好的逻辑复用和代码组织</li>
              <li>更好的 TypeScript 支持</li>
              <li>更灵活的组件组织方式</li>
              <li>更小的生产包体积</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🎯 核心 API</h3>
            <ul>
              <li><strong>ref:</strong> 创建响应式引用</li>
              <li><strong>reactive:</strong> 创建响应式对象</li>
              <li><strong>computed:</strong> 计算属性</li>
              <li><strong>watch:</strong> 侦听器</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>✨ 最佳实践</h3>
            <ul>
              <li>使用组合式函数封装逻辑</li>
              <li>组合函数以 use 开头命名</li>
              <li>返回 ref 而不是 reactive</li>
              <li>合理组织代码结构</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 下一课预告 -->
      <section class="content-section next-lesson-preview">
        <h2>🎯 下一课预告</h2>
        <div class="next-lesson-card">
          <h3>第66课：动态组件</h3>
          <p>学习动态组件的使用，掌握组件缓存和异步加载技术。</p>
          <ul>
            <li>⚡ component :is 动态切换</li>
            <li>🔄 keep-alive 组件缓存</li>
            <li>📦 异步组件按需加载</li>
            <li>💡 选项卡组件实战</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'

// API 风格切换
const apiStyle = ref('composition')

// 计数器演示
const demoCount = ref(0)
const demoDouble = computed(() => demoCount.value * 2)
const demoIsEven = computed(() => demoCount.value % 2 === 0)

const demoIncrement = () => demoCount.value++
const demoDecrement = () => demoCount.value--
const demoReset = () => demoCount.value = 0

// ref vs reactive 演示
const refUser = ref({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com'
})

const reactiveUser = reactive({
  name: '李四',
  age: 30,
  email: 'lisi@example.com'
})

// 鼠标追踪
const mouseX = ref(0)
const mouseY = ref(0)
const indicatorX = ref(0)
const indicatorY = ref(0)

const updateMouse = (event) => {
  mouseX.value = event.pageX
  mouseY.value = event.pageY
  // 相对于 tracker 容器的位置
  const tracker = event.currentTarget
  const rect = tracker.getBoundingClientRect()
  indicatorX.value = event.clientX - rect.left - 12
  indicatorY.value = event.clientY - rect.top - 12
}

// localStorage 演示
const storedValue = ref(localStorage.getItem('demo-storage') || '')

watch(storedValue, (newValue) => {
  localStorage.setItem('demo-storage', newValue)
})

// Toggle 演示
const isToggled = ref(false)
const toggle = () => isToggled.value = !isToggled.value
const setTrue = () => isToggled.value = true
const setFalse = () => isToggled.value = false

// Fetch 演示
const users = ref([])
const loading = ref(false)
const error = ref(null)

const loadUsers = () => {
  loading.value = true
  error.value = null

  // 模拟 API 请求
  setTimeout(() => {
    users.value = [
      { id: 1, name: '张三', email: 'zhangsan@example.com' },
      { id: 2, name: '李四', email: 'lisi@example.com' },
      { id: 3, name: '王五', email: 'wangwu@example.com' }
    ]
    loading.value = false
  }, 1000)
}
</script>

<style scoped>
/* 增强页面头部 */
.lesson-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 32px;
  color: white;
  box-shadow: 0 4px 16px rgba(102,126,234,0.3);
}

.lesson-header h1 {
  color: white;
  margin-bottom: 12px;
  font-size: 36px;
}

.lesson-subtitle {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 20px;
  line-height: 1.6;
}

.lesson-meta {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 15px;
}

.lesson-meta span {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.2);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

/* 内容区块 */
.content-section {
  margin-bottom: 48px;
}

.content-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #4285f4 0%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content-section > p {
  font-size: 16px;
  line-height: 1.8;
  color: #5f6368;
  margin-bottom: 20px;
}

/* Info Box */
.info-box {
  background: linear-gradient(135deg, #e8f0fe 0%, #f1f3f4 100%);
  border-left: 4px solid #4285f4;
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
}

.info-box h3 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #1a73e8;
  font-size: 18px;
}

.info-box ul {
  margin: 0;
  padding-left: 24px;
}

.info-box li {
  padding: 6px 0;
  line-height: 1.8;
  color: #333;
}

.info-box pre {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  margin-top: 12px;
}

/* Demo Box */
.demo-box {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
  border: 2px solid #e8eaed;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: all 0.3s ease;
}

.demo-box:hover {
  border-color: #4285f4;
  box-shadow: 0 4px 16px rgba(66,133,244,0.1);
}

.demo-box h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  font-size: 20px;
}

.demo-content {
  margin-top: 16px;
}

/* 代码对比 */
.code-comparison {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.comparison-panel {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
}

.comparison-panel h4 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
}

.issue-diagram,
.solution-diagram {
  margin: 20px 0;
}

.feature-block {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.feature-a {
  border-left: 4px solid #ea4335;
}

.feature-b {
  border-left: 4px solid #fbbc04;
}

.feature-block h5 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 14px;
}

.code-parts {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.part {
  background: #f8f9fa;
  padding: 8px 12px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
}

.separator {
  text-align: center;
  color: #999;
  font-size: 12px;
  margin: 4px 0;
}

.issue-note,
.solution-note {
  margin-top: 16px;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
}

.issue-note {
  background: rgba(234,67,53,0.1);
  color: #c5221f;
}

.solution-note {
  background: rgba(52,168,83,0.1);
  color: #188038;
}

.composable-block {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.composable-a {
  border-left: 4px solid #4285f4;
}

.composable-b {
  border-left: 4px solid #34a853;
}

.composable-block h5 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 14px;
}

.grouped-code {
  background: #f8f9fa;
  padding: 12px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  line-height: 1.8;
}

/* API 对比标签 */
.api-comparison-tabs {
  margin-bottom: 20px;
}

.tabs-header {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  border-bottom: 2px solid #e0e0e0;
}

.tab-btn {
  padding: 12px 24px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: #666;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  color: #4285f4;
}

.tab-btn.active {
  color: #4285f4;
  border-bottom-color: #4285f4;
}

.demo-counter {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 20px;
}

.counter-display {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}

.counter-display h4 {
  margin-top: 0;
  color: #333;
}

.count-value {
  font-size: 72px;
  font-weight: bold;
  color: #4285f4;
  margin: 20px 0;
}

.count-info {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin: 20px 0;
}

.count-info p {
  margin: 8px 0;
  color: #666;
  font-size: 15px;
}

.counter-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.code-display {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
}

.code-label {
  background: #2d2d2d;
  padding: 12px 20px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
}

.code-display pre {
  margin: 0;
  padding: 20px;
  background: #1e1e1e;
  color: #d4d4d4;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

/* 响应式演示 */
.reactive-demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.demo-section h4 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
}

.demo-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
}

.form-input {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #4285f4;
}

.preview-box {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
}

.preview-box h5 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #666;
  font-size: 13px;
}

.preview-box pre {
  margin: 0;
  font-size: 12px;
  color: #333;
}

.comparison-table {
  margin-top: 24px;
}

.comparison-table h4 {
  margin-bottom: 16px;
  color: #333;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.comparison-table th {
  background: #f8f9fa;
  font-weight: 600;
  color: #333;
}

.comparison-table code {
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 3px;
  color: #4285f4;
  font-size: 13px;
}

/* 组合式函数演示 */
.composables-demo {
  display: grid;
  gap: 24px;
}

.composable-example h4 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
}

.mouse-tracker {
  position: relative;
  min-height: 200px;
  background: linear-gradient(135deg, #e8f0fe 0%, #f1f3f4 100%);
  cursor: crosshair;
  overflow: hidden;
}

.mouse-display {
  padding: 20px;
}

.mouse-display p {
  margin: 0;
  font-weight: 500;
  color: #333;
}

.mouse-indicator {
  position: absolute;
  font-size: 24px;
  pointer-events: none;
  transition: all 0.1s ease;
}

.hint {
  color: #666;
  font-size: 13px;
  margin-top: 12px;
}

.toggle-display {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.toggle-status {
  flex: 1;
  padding: 20px;
  background: #f1f3f4;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #666;
  transition: all 0.3s ease;
}

.toggle-status.active {
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%);
  color: #34a853;
}

.error-box {
  background: #fce8e6;
  border-left: 4px solid #ea4335;
  padding: 12px 16px;
  border-radius: 6px;
  color: #c5221f;
  margin-top: 12px;
}

.users-list {
  margin-top: 16px;
}

.user-item {
  padding: 12px;
  background: white;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 14px;
}

.code-details {
  margin-top: 12px;
  cursor: pointer;
}

.code-details summary {
  padding: 10px 16px;
  background: #f8f9fa;
  border-radius: 6px;
  font-weight: 500;
  color: #4285f4;
  user-select: none;
}

.code-details summary:hover {
  background: #e8eaed;
}

.code-details pre {
  margin-top: 12px;
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 16px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

/* 最佳实践 */
.best-practices {
  display: grid;
  gap: 20px;
}

.practice-item {
  border-radius: 12px;
  padding: 20px;
  border-left: 4px solid;
}

.practice-item h4 {
  margin-top: 0;
  margin-bottom: 12px;
}

.practice-item.good {
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%);
  border-color: #34a853;
}

.practice-item.good h4 {
  color: #188038;
}

.practice-item.bad {
  background: linear-gradient(135deg, #fce8e6 0%, #fff3e0 100%);
  border-color: #ea4335;
}

.practice-item.bad h4 {
  color: #c5221f;
}

.practice-item pre {
  background: white;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 16px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
  margin: 0;
}

/* 按钮样式 */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #4285f4 0%, #1a73e8 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(66,133,244,0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66,133,244,0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background: #f1f3f4;
  color: #333;
}

.btn-secondary:hover {
  background: #e8eaed;
}

/* 总结网格 */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.summary-card {
  background: white;
  border: 2px solid var(--primary-blue);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}

.summary-card:hover {
  box-shadow: 0 4px 16px rgba(66,133,244,0.2);
  transform: translateY(-2px);
}

.summary-card h3 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 18px;
}

.summary-card ul {
  margin: 0;
  padding-left: 20px;
}

.summary-card li {
  padding: 6px 0;
  line-height: 1.6;
}

/* 下一课预告 */
.next-lesson-preview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  padding: 32px;
}

.next-lesson-preview h2 {
  color: white;
  border-bottom-color: rgba(255,255,255,0.3);
}

.next-lesson-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 24px;
}

.next-lesson-card h3 {
  margin-top: 0;
  color: white;
  font-size: 24px;
}

.next-lesson-card p {
  font-size: 16px;
  opacity: 0.95;
}

.next-lesson-card ul {
  margin-top: 16px;
  padding-left: 20px;
}

.next-lesson-card li {
  padding: 6px 0;
  font-size: 15px;
}

/* 响应式 */
@media (max-width: 768px) {
  .code-comparison,
  .reactive-demo,
  .demo-counter {
    grid-template-columns: 1fr;
  }

  .count-value {
    font-size: 48px;
  }
}
</style>
