<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第72课：组合式函数（Composables）</h1>
      <p class="lesson-description">
        掌握 Vue3 组合式函数的设计模式，学会抽取和复用组件逻辑，构建可维护的应用架构
      </p>
    </div>

    <div class="lesson-content">
      <!-- 第1部分：什么是组合式函数 -->
      <section class="content-section">
        <h2>1️⃣ 什么是组合式函数</h2>

        <div class="info-box">
          <p><strong>组合式函数</strong>（Composables）是利用 Vue Composition API 来封装和复用<strong>有状态逻辑</strong>的函数。</p>
        </div>

        <div class="demo-box">
          <h3>🎯 核心概念</h3>
          <div class="demo-content">
            <div class="info-box">
              <h4>传统 Options API 的局限</h4>
              <ul>
                <li><strong>逻辑碎片化：</strong>相关逻辑分散在 data、methods、computed、watch 中</li>
                <li><strong>复用困难：</strong>需要使用 mixins，容易产生命名冲突</li>
                <li><strong>类型推导弱：</strong>TypeScript 支持不够友好</li>
              </ul>
            </div>

            <div class="info-box" style="margin-top: 16px;">
              <h4>Composables 的优势</h4>
              <ul>
                <li><strong>逻辑聚合：</strong>按功能组织代码，相关逻辑集中在一起</li>
                <li><strong>易于复用：</strong>纯函数形式，无副作用，可在多个组件中使用</li>
                <li><strong>类型安全：</strong>完美支持 TypeScript 类型推导</li>
                <li><strong>灵活组合：</strong>可以像搭积木一样组合多个 composables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 第2部分：基础示例 - 鼠标追踪 -->
      <section class="content-section">
        <h2>2️⃣ 基础示例：鼠标位置追踪</h2>

        <div class="demo-box">
          <h3>🎯 对比：组件内实现 vs Composable</h3>
          <div class="demo-content">
            <div class="comparison-grid">
              <div class="comparison-item">
                <h4>组件内实现（耦合）</h4>
                <pre v-pre><code>&lt;script setup&gt;
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => {
  window.addEventListener('mousemove', update)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', update)
})
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;鼠标位置: {{ x }}, {{ y }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
                <p class="comparison-note">❌ 逻辑无法复用到其他组件</p>
              </div>

              <div class="comparison-item highlight">
                <h4>Composable 实现（解耦）</h4>
                <pre v-pre><code>// composables/useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
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
}

// 组件中使用
&lt;script setup&gt;
import { useMouse } from './composables/useMouse'
const { x, y } = useMouse()
&lt;/script&gt;</code></pre>
                <p class="comparison-note">✅ 可在任意组件中复用</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 交互演示 -->
        <div class="demo-box" style="margin-top: 24px;">
          <h3>🖱️ 实时演示：鼠标位置追踪</h3>
          <div class="demo-content">
            <div class="mouse-tracker" @mousemove="handleMouseMove">
              <div class="mouse-info">
                <p><strong>鼠标位置：</strong></p>
                <p>X: {{ mouseX }}px</p>
                <p>Y: {{ mouseY }}px</p>
              </div>
              <div class="mouse-cursor" :style="{ left: mouseX + 'px', top: mouseY + 'px' }"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 第3部分：常用 Composables 模式 -->
      <section class="content-section">
        <h2>3️⃣ 常用 Composables 模式</h2>

        <div class="demo-box">
          <h3>📦 模式一：状态管理 - useCounter</h3>
          <div class="demo-content">
            <pre v-pre><code>// composables/useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const double = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = initialValue
  }

  return {
    count,
    double,
    increment,
    decrement,
    reset
  }
}</code></pre>

            <div style="margin-top: 16px;">
              <div class="interactive-demo">
                <div class="counter-display">
                  <p>Count: <strong>{{ count }}</strong></p>
                  <p>Double: <strong>{{ double }}</strong></p>
                </div>
                <div class="button-group">
                  <button @click="increment" class="btn btn-primary">+1</button>
                  <button @click="decrement" class="btn btn-secondary">-1</button>
                  <button @click="reset" class="btn btn-outline">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>📦 模式二：异步数据获取 - useFetch</h3>
          <div class="demo-content">
            <pre v-pre><code>// composables/useFetch.js
import { ref, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  async function fetchData() {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(url.value)
      data.value = await response.json()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, error, loading, refetch: fetchData }
}</code></pre>

            <div class="info-box" style="margin-top: 16px;">
              <h4>使用示例</h4>
              <pre v-pre><code>&lt;script setup&gt;
import { ref } from 'vue'
import { useFetch } from './composables/useFetch'

const userId = ref(1)
const url = computed(() => `https://api.example.com/users/${userId.value}`)
const { data, error, loading } = useFetch(url)
&lt;/script&gt;

&lt;template&gt;
  &lt;div v-if="loading"&gt;加载中...&lt;/div&gt;
  &lt;div v-else-if="error"&gt;错误: {{ error }}&lt;/div&gt;
  &lt;div v-else&gt;{{ data }}&lt;/div&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>📦 模式三：本地存储 - useLocalStorage</h3>
          <div class="demo-content">
            <pre v-pre><code>// composables/useLocalStorage.js
import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  // 从 localStorage 读取初始值
  const storedValue = localStorage.getItem(key)
  const data = ref(storedValue ? JSON.parse(storedValue) : defaultValue)

  // 监听数据变化，自动同步到 localStorage
  watch(data, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })

  // 删除存储
  function remove() {
    localStorage.removeItem(key)
    data.value = defaultValue
  }

  return { data, remove }
}</code></pre>

            <div style="margin-top: 16px;">
              <div class="interactive-demo">
                <div class="input-group">
                  <label>用户名（自动保存到 localStorage）：</label>
                  <input v-model="username" placeholder="输入用户名" />
                </div>
                <div class="input-group" style="margin-top: 12px;">
                  <label>邮箱（自动保存到 localStorage）：</label>
                  <input v-model="email" placeholder="输入邮箱" />
                </div>
                <button @click="clearStorage" class="btn btn-outline" style="margin-top: 12px;">清除存储</button>
                <p style="margin-top: 12px; font-size: 13px; color: var(--text-secondary);">
                  💡 刷新页面后数据仍然保留
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 第4部分：组合多个 Composables -->
      <section class="content-section">
        <h2>4️⃣ 组合多个 Composables</h2>

        <div class="info-box">
          <p>Composables 最大的优势在于可以像搭积木一样自由组合，构建复杂功能。</p>
        </div>

        <div class="demo-box">
          <h3>🎯 示例：用户管理系统</h3>
          <div class="demo-content">
            <pre v-pre><code>&lt;script setup&gt;
import { ref, computed } from 'vue'
import { useFetch } from './composables/useFetch'
import { useLocalStorage } from './composables/useLocalStorage'
import { useDebounce } from './composables/useDebounce'

// 1️⃣ 使用 localStorage 保存搜索历史
const { data: searchHistory } = useLocalStorage('searchHistory', [])

// 2️⃣ 搜索关键词（带防抖）
const keyword = ref('')
const debouncedKeyword = useDebounce(keyword, 500)

// 3️⃣ 使用 useFetch 获取用户数据
const url = computed(() =>
  debouncedKeyword.value
    ? `https://api.example.com/users?q=${debouncedKeyword.value}`
    : null
)
const { data: users, loading, error } = useFetch(url)

// 4️⃣ 保存搜索记录
watch(debouncedKeyword, (newKeyword) => {
  if (newKeyword && !searchHistory.value.includes(newKeyword)) {
    searchHistory.value.push(newKeyword)
  }
})
&lt;/script&gt;</code></pre>

            <div class="info-box" style="margin-top: 16px;">
              <h4>组合说明</h4>
              <ul>
                <li><strong>useLocalStorage：</strong>保存搜索历史到本地存储</li>
                <li><strong>useDebounce：</strong>延迟搜索，减少 API 请求</li>
                <li><strong>useFetch：</strong>获取用户数据</li>
                <li><strong>组合效果：</strong>一个完整的搜索功能，包含历史记录、防抖、数据获取</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 可视化示意图 -->
        <div class="demo-box" style="margin-top: 24px;">
          <h3>🔄 Composables 组合流程</h3>
          <div class="demo-content">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 20px;">
              <div style="padding: 16px 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; text-align: center;">
                <strong>Component</strong>
                <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">组件</p>
              </div>
              <div style="font-size: 24px; color: var(--primary-blue);">↓</div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; width: 100%;">
                <div style="padding: 16px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 8px; text-align: center;">
                  <strong>useFetch</strong>
                  <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.9;">数据获取</p>
                </div>
                <div style="padding: 16px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; border-radius: 8px; text-align: center;">
                  <strong>useLocalStorage</strong>
                  <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.9;">本地存储</p>
                </div>
                <div style="padding: 16px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; border-radius: 8px; text-align: center;">
                  <strong>useDebounce</strong>
                  <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.9;">防抖处理</p>
                </div>
              </div>
              <div style="font-size: 24px; color: var(--primary-blue);">↓</div>
              <div style="padding: 16px 32px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; border-radius: 8px; text-align: center;">
                <strong>Reactive State</strong>
                <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">响应式状态</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 第5部分：Composables 最佳实践 -->
      <section class="content-section">
        <h2>5️⃣ Composables 最佳实践</h2>

        <div class="demo-box">
          <h3>✅ 命名规范</h3>
          <div class="demo-content">
            <div class="info-box">
              <ul>
                <li><strong>以 "use" 开头：</strong>useMouse、useFetch、useCounter</li>
                <li><strong>驼峰命名：</strong>useLocalStorage（不是 use_local_storage）</li>
                <li><strong>语义化：</strong>名称应清晰表达功能</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>✅ 函数签名设计</h3>
          <div class="demo-content">
            <div class="comparison-grid">
              <div class="comparison-item">
                <h4>❌ 不推荐</h4>
                <pre v-pre><code>// 返回值不明确
export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  return [x, y]
}

// 使用时需要记住顺序
const [x, y] = useMouse()</code></pre>
              </div>

              <div class="comparison-item highlight">
                <h4>✅ 推荐</h4>
                <pre v-pre><code>// 返回对象，明确含义
export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  return { x, y }
}

// 使用时语义清晰
const { x, y } = useMouse()</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>✅ 副作用管理</h3>
          <div class="demo-content">
            <div class="info-box">
              <h4>自动清理副作用</h4>
              <pre v-pre><code>export function useEventListener(target, event, handler) {
  onMounted(() => {
    target.addEventListener(event, handler)
  })

  // ✅ 组件卸载时自动清理
  onUnmounted(() => {
    target.removeEventListener(event, handler)
  })
}</code></pre>
            </div>

            <div class="info-box" style="margin-top: 16px;">
              <h4>避免在 Composable 外部调用</h4>
              <pre v-pre><code>// ❌ 错误：在组件外调用
const { x, y } = useMouse()

export default {
  setup() {
    // ...
  }
}

// ✅ 正确：在 setup 或 script setup 中调用
export default {
  setup() {
    const { x, y } = useMouse()
    return { x, y }
  }
}</code></pre>
            </div>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>✅ 参数设计</h3>
          <div class="demo-content">
            <div class="comparison-grid">
              <div class="comparison-item">
                <h4>基础参数</h4>
                <pre v-pre><code>// 简单值
export function useCounter(initial = 0) {
  const count = ref(initial)
  return { count }
}

const { count } = useCounter(10)</code></pre>
              </div>

              <div class="comparison-item highlight">
                <h4>响应式参数（推荐）</h4>
                <pre v-pre><code>// 接受 ref 或响应式对象
export function useFetch(url) {
  const data = ref(null)

  // url 可以是 ref
  watchEffect(() => {
    fetch(unref(url)).then(...)
  })

  return { data }
}

const url = ref('/api/users')
const { data } = useFetch(url)
// 修改 url.value 会自动重新请求</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>✅ 返回值设计</h3>
          <div class="demo-content">
            <div class="info-box">
              <h4>返回对象而非数组</h4>
              <pre v-pre><code>// ✅ 推荐：返回对象
export function useMouse() {
  return {
    x: ref(0),
    y: ref(0),
    update: () => {},
    reset: () => {}
  }
}

// 使用时可以选择性解构
const { x, y } = useMouse()  // 只需要坐标
const { update, reset } = useMouse()  // 只需要方法</code></pre>
            </div>

            <div class="info-box" style="margin-top: 16px;">
              <h4>区分 ref 和 普通值</h4>
              <pre v-pre><code>export function useCounter() {
  const count = ref(0)
  const isEven = computed(() => count.value % 2 === 0)

  return {
    count,      // ref，需要 .value 访问
    isEven,     // computed，也是 ref
    increment() {  // 普通方法
      count.value++
    }
  }
}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 第6部分：实战案例 - 表单验证 -->
      <section class="content-section">
        <h2>6️⃣ 实战案例：表单验证 Composable</h2>

        <div class="demo-box">
          <h3>📝 useFormValidation 实现</h3>
          <div class="demo-content">
            <pre v-pre><code>// composables/useFormValidation.js
import { ref, computed } from 'vue'

export function useFormValidation(rules) {
  const errors = ref({})
  const touched = ref({})

  function validate(field, value) {
    const fieldRules = rules[field]
    if (!fieldRules) return true

    for (const rule of fieldRules) {
      const result = rule.validator(value)
      if (!result) {
        errors.value[field] = rule.message
        return false
      }
    }

    delete errors.value[field]
    return true
  }

  function validateAll(formData) {
    let isValid = true
    for (const field in rules) {
      if (!validate(field, formData[field])) {
        isValid = false
      }
    }
    return isValid
  }

  function touch(field) {
    touched.value[field] = true
  }

  function reset() {
    errors.value = {}
    touched.value = {}
  }

  const hasErrors = computed(() => Object.keys(errors.value).length > 0)

  return {
    errors,
    touched,
    validate,
    validateAll,
    touch,
    reset,
    hasErrors
  }
}</code></pre>

            <!-- 实际演示 -->
            <div style="margin-top: 24px; padding: 20px; background: var(--background-color); border-radius: 8px;">
              <h4>实际演示：用户注册表单</h4>

              <form @submit.prevent="handleSubmit" style="margin-top: 16px;">
                <div class="form-group">
                  <label>用户名：</label>
                  <input
                    v-model="formData.username"
                    @blur="touchField('username')"
                    :class="{ 'error': formErrors.username && formTouched.username }"
                  />
                  <p v-if="formErrors.username && formTouched.username" class="error-message">
                    {{ formErrors.username }}
                  </p>
                </div>

                <div class="form-group">
                  <label>邮箱：</label>
                  <input
                    v-model="formData.email"
                    @blur="touchField('email')"
                    :class="{ 'error': formErrors.email && formTouched.email }"
                  />
                  <p v-if="formErrors.email && formTouched.email" class="error-message">
                    {{ formErrors.email }}
                  </p>
                </div>

                <div class="form-group">
                  <label>密码：</label>
                  <input
                    type="password"
                    v-model="formData.password"
                    @blur="touchField('password')"
                    :class="{ 'error': formErrors.password && formTouched.password }"
                  />
                  <p v-if="formErrors.password && formTouched.password" class="error-message">
                    {{ formErrors.password }}
                  </p>
                </div>

                <div class="button-group">
                  <button type="submit" class="btn btn-primary">提交</button>
                  <button type="button" @click="resetForm" class="btn btn-outline">重置</button>
                </div>

                <p v-if="submitMessage" class="success-message" style="margin-top: 16px;">
                  {{ submitMessage }}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- 第7部分：性能优化 -->
      <section class="content-section">
        <h2>7️⃣ 性能优化技巧</h2>

        <div class="demo-box">
          <h3>⚡ 延迟初始化</h3>
          <div class="demo-content">
            <div class="comparison-grid">
              <div class="comparison-item">
                <h4>立即初始化</h4>
                <pre v-pre><code>export function useExpensive() {
  // ❌ 每次调用都执行昂贵操作
  const data = ref(expensiveOperation())
  return { data }
}</code></pre>
              </div>

              <div class="comparison-item highlight">
                <h4>延迟初始化（推荐）</h4>
                <pre v-pre><code>export function useExpensive() {
  const data = ref(null)
  const initialized = ref(false)

  function init() {
    if (!initialized.value) {
      data.value = expensiveOperation()
      initialized.value = true
    }
  }

  return { data, init }
}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>⚡ 使用 shallowRef 优化大对象</h3>
          <div class="demo-content">
            <div class="info-box">
              <pre v-pre><code>import { shallowRef } from 'vue'

export function useLargeData() {
  // ✅ 对于大型数据结构，使用 shallowRef
  const data = shallowRef({
    // 数千个对象...
  })

  // 更新时需要替换整个对象
  function update(newData) {
    data.value = newData  // 触发更新
  }

  return { data, update }
}</code></pre>
              <p style="margin-top: 12px; font-size: 14px; color: var(--text-secondary);">
                💡 shallowRef 只追踪 .value 的变化，不会深度追踪对象内部，适合大型数据
              </p>
            </div>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>⚡ 避免不必要的响应式</h3>
          <div class="demo-content">
            <div class="info-box">
              <pre v-pre><code>export function useConfig() {
  // ❌ 配置对象不需要响应式
  const config = reactive({
    apiUrl: 'https://api.example.com',
    timeout: 5000
  })

  // ✅ 使用普通对象
  const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000
  }

  return { config }
}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 第8部分：总结与对比 -->
      <section class="content-section">
        <h2>8️⃣ Composables vs Mixins vs Hooks</h2>

        <div class="demo-box">
          <h3>📊 对比表格</h3>
          <div class="demo-content">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>特性</th>
                  <th>Vue3 Composables</th>
                  <th>Vue2 Mixins</th>
                  <th>React Hooks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>命名冲突</strong></td>
                  <td>✅ 无冲突（显式返回）</td>
                  <td>❌ 容易冲突</td>
                  <td>✅ 无冲突</td>
                </tr>
                <tr>
                  <td><strong>逻辑来源</strong></td>
                  <td>✅ 清晰可追溯</td>
                  <td>❌ 难以追溯</td>
                  <td>✅ 清晰</td>
                </tr>
                <tr>
                  <td><strong>类型推导</strong></td>
                  <td>✅ 完美支持 TS</td>
                  <td>⚠️ 支持较弱</td>
                  <td>✅ 支持良好</td>
                </tr>
                <tr>
                  <td><strong>灵活性</strong></td>
                  <td>✅ 高度灵活</td>
                  <td>⚠️ 受限于选项</td>
                  <td>✅ 灵活</td>
                </tr>
                <tr>
                  <td><strong>组合能力</strong></td>
                  <td>✅ 可自由组合</td>
                  <td>⚠️ 组合困难</td>
                  <td>✅ 可组合</td>
                </tr>
                <tr>
                  <td><strong>调用限制</strong></td>
                  <td>⚠️ 需在 setup 中</td>
                  <td>✅ 无限制</td>
                  <td>⚠️ 有规则限制</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="info-box" style="margin-top: 24px;">
          <h4>📌 使用建议</h4>
          <ul>
            <li><strong>优先使用 Composables：</strong>在 Vue3 项目中，Composables 是最佳的逻辑复用方案</li>
            <li><strong>避免过度抽象：</strong>不是所有逻辑都需要封装成 Composable，只复用的才抽取</li>
            <li><strong>保持简单：</strong>一个 Composable 应该只做一件事，遵循单一职责原则</li>
            <li><strong>文档注释：</strong>为 Composable 添加 JSDoc 注释，说明参数和返回值</li>
          </ul>
        </div>
      </section>

      <!-- 总结 -->
      <section class="content-section">
        <div class="key-points-box">
          <h4>🎓 本课要点</h4>
          <ul>
            <li>Composables 是 Vue3 中封装和复用有状态逻辑的最佳方式</li>
            <li>以 "use" 开头命名，返回对象而非数组，便于使用和维护</li>
            <li>常用模式：状态管理、异步数据获取、本地存储、事件监听等</li>
            <li>可以自由组合多个 Composables，构建复杂功能</li>
            <li>注意副作用管理，在 onUnmounted 中清理资源</li>
            <li>支持响应式参数，增强灵活性和响应能力</li>
            <li>性能优化：延迟初始化、shallowRef、避免不必要的响应式</li>
            <li>相比 Mixins，Composables 更清晰、更安全、更易维护</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// ============ 鼠标追踪演示 ============
const mouseX = ref(0)
const mouseY = ref(0)

function handleMouseMove(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  mouseX.value = event.clientX - rect.left
  mouseY.value = event.clientY - rect.top
}

// ============ Counter 演示 ============
const count = ref(0)
const double = computed(() => count.value * 2)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
}

// ============ LocalStorage 演示 ============
const username = ref(localStorage.getItem('demo-username') || '')
const email = ref(localStorage.getItem('demo-email') || '')

// 监听并保存
import { watch } from 'vue'
watch(username, (newVal) => {
  localStorage.setItem('demo-username', newVal)
})

watch(email, (newVal) => {
  localStorage.setItem('demo-email', newVal)
})

function clearStorage() {
  localStorage.removeItem('demo-username')
  localStorage.removeItem('demo-email')
  username.value = ''
  email.value = ''
}

// ============ 表单验证演示 ============
const formData = ref({
  username: '',
  email: '',
  password: ''
})

const formErrors = ref({})
const formTouched = ref({})
const submitMessage = ref('')

const validationRules = {
  username: [
    {
      validator: (value) => value && value.length >= 3,
      message: '用户名至少 3 个字符'
    }
  ],
  email: [
    {
      validator: (value) => value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: '请输入有效的邮箱地址'
    }
  ],
  password: [
    {
      validator: (value) => value && value.length >= 6,
      message: '密码至少 6 个字符'
    }
  ]
}

function validateField(field, value) {
  const rules = validationRules[field]
  if (!rules) return true

  for (const rule of rules) {
    if (!rule.validator(value)) {
      formErrors.value[field] = rule.message
      return false
    }
  }

  delete formErrors.value[field]
  return true
}

function touchField(field) {
  formTouched.value[field] = true
  validateField(field, formData.value[field])
}

function handleSubmit() {
  // 验证所有字段
  let isValid = true
  for (const field in validationRules) {
    formTouched.value[field] = true
    if (!validateField(field, formData.value[field])) {
      isValid = false
    }
  }

  if (isValid) {
    submitMessage.value = '✅ 表单提交成功！'
    setTimeout(() => {
      submitMessage.value = ''
    }, 3000)
  }
}

function resetForm() {
  formData.value = {
    username: '',
    email: '',
    password: ''
  }
  formErrors.value = {}
  formTouched.value = {}
  submitMessage.value = ''
}
</script>

<style scoped>
/* 鼠标追踪器 */
.mouse-tracker {
  position: relative;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  overflow: hidden;
}

.mouse-info {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.mouse-info p {
  margin: 4px 0;
  font-size: 14px;
}

.mouse-cursor {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #fee140;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  box-shadow: 0 0 20px rgba(254, 225, 64, 0.8);
}

/* Counter 演示 */
.interactive-demo {
  padding: 20px;
  background: var(--background-color);
  border-radius: 8px;
}

.counter-display {
  text-align: center;
  margin-bottom: 20px;
}

.counter-display p {
  font-size: 18px;
  margin: 8px 0;
}

.counter-display strong {
  color: var(--primary-blue);
  font-size: 24px;
}

.button-group {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

/* 输入组 */
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-weight: 500;
  font-size: 14px;
  color: var(--text-primary);
}

.input-group input {
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
}

.input-group input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
}

/* 表单样式 */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-primary);
}

.form-group input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
}

.form-group input.error {
  border-color: var(--error-red);
}

.error-message {
  margin: 6px 0 0 0;
  font-size: 13px;
  color: var(--error-red);
}

.success-message {
  padding: 12px;
  background: var(--success-bg);
  color: var(--success-green);
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
}

/* 对比表格 */
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.comparison-table th {
  background: var(--background-color);
  font-weight: 600;
  color: var(--text-primary);
}

.comparison-table tbody tr:hover {
  background: var(--background-color);
}

.comparison-table tbody tr:last-child td {
  border-bottom: none;
}

/* 核心要点框 */
.key-points-box {
  margin-top: 24px;
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.key-points-box h4 {
  margin: 0 0 16px 0;
  font-size: 18px;
}

.key-points-box ul {
  margin: 0;
  padding-left: 24px;
  line-height: 2;
}

.key-points-box li {
  margin-bottom: 8px;
}
</style>
