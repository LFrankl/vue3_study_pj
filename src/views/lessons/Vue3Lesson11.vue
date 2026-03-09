<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第64课：状态管理基础</h1>
      <p class="lesson-subtitle">学习如何使用 provide/inject 进行跨组件状态管理，实现响应式数据共享</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 35 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <div class="lesson-content">
      <!-- 1. 什么是状态管理 -->
      <section class="content-section">
        <h2>1️⃣ 什么是状态管理？</h2>
        <p>状态管理是指在应用中管理和共享数据的方式。当组件层级较深时，使用 props 逐层传递数据会变得繁琐，这时就需要状态管理解决方案。</p>

        <div class="info-box">
          <h3>为什么需要状态管理</h3>
          <ul>
            <li>避免 props 逐层传递（prop drilling）</li>
            <li>让深层嵌套的组件能访问共享数据</li>
            <li>集中管理应用状态，便于维护</li>
            <li>实现跨组件的数据通信</li>
          </ul>
        </div>

        <div class="demo-box">
          <h3>🎯 问题演示：Props 逐层传递</h3>
          <div class="demo-content">
            <div class="props-drilling-demo">
              <div class="component-box level-1">
                <h4>祖父组件 (数据源)</h4>
                <p>用户名: {{ userName }}</p>
                <div class="arrow">↓ props</div>
                <div class="component-box level-2">
                  <h4>父组件 (中间层)</h4>
                  <p>仅仅用于传递 props，自己不使用</p>
                  <div class="arrow">↓ props</div>
                  <div class="component-box level-3">
                    <h4>子组件 (使用数据)</h4>
                    <p>显示用户: {{ userName }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- 祖父组件 --&gt;
&lt;template&gt;
  &lt;Parent :userName="userName" /&gt;
&lt;/template&gt;

&lt;!-- 父组件（只是传递，自己不用）--&gt;
&lt;template&gt;
  &lt;Child :userName="userName" /&gt;
&lt;/template&gt;

&lt;!-- 子组件（最终使用）--&gt;
&lt;template&gt;
  &lt;p&gt;用户: {{ userName }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. provide/inject 基础 -->
      <section class="content-section">
        <h2>2️⃣ provide/inject 基础</h2>
        <p>provide 和 inject 是 Vue 提供的依赖注入机制，允许祖先组件向所有后代组件提供数据，无论层级多深。</p>

        <div class="info-box">
          <h3>基本语法</h3>
          <pre v-pre><code>&lt;!-- 祖先组件：提供数据 --&gt;
&lt;script setup&gt;
import { provide, ref } from 'vue'

const userName = ref('张三')

// 提供数据给后代组件
provide('userName', userName)
&lt;/script&gt;

&lt;!-- 后代组件：注入数据 --&gt;
&lt;script setup&gt;
import { inject } from 'vue'

// 注入祖先组件提供的数据
const userName = inject('userName')
&lt;/script&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：基础用法</h3>
          <div class="demo-content">
            <div class="provide-inject-demo">
              <div class="ancestor-box">
                <h4>🏢 祖先组件（提供者）</h4>
                <p>主题颜色: <span class="color-badge" :style="{ background: theme }">{{ theme }}</span></p>
                <button @click="toggleTheme" class="btn btn-primary">切换主题</button>

                <div class="children-wrapper">
                  <div class="descendant-box" :style="{ borderColor: theme }">
                    <h4>👶 后代组件 1（注入者）</h4>
                    <p>使用注入的主题: <span class="color-badge" :style="{ background: theme }">{{ theme }}</span></p>
                  </div>

                  <div class="descendant-box" :style="{ borderColor: theme }">
                    <h4>👶 后代组件 2（注入者）</h4>
                    <p>使用注入的主题: <span class="color-badge" :style="{ background: theme }">{{ theme }}</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- 祖先组件 --&gt;
&lt;script setup&gt;
import { provide, ref } from 'vue'

const theme = ref('#4285f4')

provide('theme', theme)

const toggleTheme = () =&gt; {
  theme.value = theme.value === '#4285f4' ? '#ea4335' : '#4285f4'
}
&lt;/script&gt;

&lt;!-- 后代组件 --&gt;
&lt;script setup&gt;
import { inject } from 'vue'

const theme = inject('theme')
&lt;/script&gt;

&lt;template&gt;
  &lt;div :style="{ borderColor: theme }"&gt;
    主题颜色: {{ theme }}
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. 响应式状态共享 -->
      <section class="content-section">
        <h2>3️⃣ 响应式状态共享</h2>
        <p>使用 provide/inject 传递响应式数据时，后代组件会自动响应数据变化，实现真正的状态共享。</p>

        <div class="info-box">
          <h3>响应式数据共享要点</h3>
          <ul>
            <li>使用 ref 或 reactive 创建响应式数据</li>
            <li>provide 提供响应式对象，而非普通值</li>
            <li>inject 注入的数据会保持响应性</li>
            <li>所有注入该数据的组件都会同步更新</li>
          </ul>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：购物车状态共享</h3>
          <div class="demo-content">
            <div class="cart-demo">
              <!-- 商品列表 -->
              <div class="products-section">
                <h4>📦 商品列表</h4>
                <div class="product-grid">
                  <div v-for="product in products" :key="product.id" class="product-card">
                    <div class="product-icon">{{ product.icon }}</div>
                    <h5>{{ product.name }}</h5>
                    <p class="price">¥{{ product.price }}</p>
                    <button @click="addToCart(product)" class="btn btn-sm btn-primary">
                      加入购物车
                    </button>
                  </div>
                </div>
              </div>

              <!-- 购物车 -->
              <div class="cart-section">
                <h4>🛒 购物车 <span class="cart-badge">{{ cartItems.length }}</span></h4>
                <div v-if="cartItems.length === 0" class="empty-cart">
                  购物车是空的
                </div>
                <div v-else>
                  <div v-for="item in cartItems" :key="item.id" class="cart-item">
                    <span>{{ item.icon }} {{ item.name }}</span>
                    <span class="price">¥{{ item.price }}</span>
                    <button @click="removeFromCart(item.id)" class="btn-remove">×</button>
                  </div>
                  <div class="cart-total">
                    总计: ¥{{ cartTotal }}
                  </div>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- 根组件：提供购物车状态 --&gt;
&lt;script setup&gt;
import { provide, ref, computed } from 'vue'

const cartItems = ref([])

const addToCart = (product) =&gt; {
  cartItems.value.push(product)
}

const removeFromCart = (id) =&gt; {
  const index = cartItems.value.findIndex(item =&gt; item.id === id)
  cartItems.value.splice(index, 1)
}

const cartTotal = computed(() =&gt;
  cartItems.value.reduce((sum, item) =&gt; sum + item.price, 0)
)

// 提供购物车状态和方法
provide('cart', {
  items: cartItems,
  addToCart,
  removeFromCart,
  total: cartTotal
})
&lt;/script&gt;

&lt;!-- 商品列表组件 --&gt;
&lt;script setup&gt;
import { inject } from 'vue'

const { addToCart } = inject('cart')
&lt;/script&gt;

&lt;!-- 购物车组件 --&gt;
&lt;script setup&gt;
import { inject } from 'vue'

const { items, removeFromCart, total } = inject('cart')
&lt;/script&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. 默认值和类型安全 -->
      <section class="content-section">
        <h2>4️⃣ 默认值和类型安全</h2>
        <p>为了让代码更健壮，我们可以为 inject 提供默认值，并使用 Symbol 作为 key 来保证类型安全。</p>

        <div class="info-box">
          <h3>最佳实践</h3>
          <pre v-pre><code>&lt;!-- 使用 Symbol 作为注入 key --&gt;
&lt;script setup&gt;
import { provide, inject, ref } from 'vue'

// 定义唯一的注入 key
export const UserKey = Symbol('user')

// 提供数据
const user = ref({ name: '张三', role: 'admin' })
provide(UserKey, user)

// 注入数据，带默认值
const user = inject(UserKey, { name: '游客', role: 'guest' })
&lt;/script&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：用户认证状态</h3>
          <div class="demo-content">
            <div class="auth-demo">
              <div class="auth-control">
                <button v-if="!currentUser.isLoggedIn" @click="login" class="btn btn-primary">
                  登录
                </button>
                <button v-else @click="logout" class="btn btn-secondary">
                  退出登录
                </button>
              </div>

              <div class="user-info-card">
                <h4>👤 当前用户信息</h4>
                <div v-if="currentUser.isLoggedIn">
                  <p><strong>用户名:</strong> {{ currentUser.name }}</p>
                  <p><strong>角色:</strong> <span class="role-badge">{{ currentUser.role }}</span></p>
                  <p><strong>邮箱:</strong> {{ currentUser.email }}</p>
                </div>
                <div v-else class="not-logged-in">
                  <p>未登录</p>
                  <p class="text-secondary">请先登录以查看用户信息</p>
                </div>
              </div>

              <div class="protected-content">
                <h4>🔒 受保护的内容</h4>
                <div v-if="currentUser.isLoggedIn && currentUser.role === 'admin'" class="admin-panel">
                  <p>✅ 管理员面板</p>
                  <p>您拥有完整的管理权限</p>
                </div>
                <div v-else-if="currentUser.isLoggedIn" class="user-panel">
                  <p>✅ 用户面板</p>
                  <p>您拥有基本访问权限</p>
                </div>
                <div v-else class="access-denied">
                  <p>❌ 访问被拒绝</p>
                  <p>请登录后访问</p>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- keys.js: 定义注入 key --&gt;
export const UserKey = Symbol('user')

&lt;!-- App.vue: 提供用户状态 --&gt;
&lt;script setup&gt;
import { provide, ref } from 'vue'
import { UserKey } from './keys'

const currentUser = ref({
  isLoggedIn: false,
  name: '',
  role: 'guest',
  email: ''
})

const login = () =&gt; {
  currentUser.value = {
    isLoggedIn: true,
    name: '张三',
    role: 'admin',
    email: 'zhangsan@example.com'
  }
}

provide(UserKey, currentUser)
&lt;/script&gt;

&lt;!-- UserInfo.vue: 注入用户状态 --&gt;
&lt;script setup&gt;
import { inject } from 'vue'
import { UserKey } from './keys'

// 提供默认值
const user = inject(UserKey, {
  isLoggedIn: false,
  name: '游客',
  role: 'guest'
})
&lt;/script&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. 实战：主题切换系统 -->
      <section class="content-section">
        <h2>5️⃣ 实战：主题切换系统</h2>
        <p>使用 provide/inject 实现一个完整的主题切换系统，展示状态管理在实际项目中的应用。</p>

        <div class="demo-box">
          <h3>🎯 完整示例：主题切换</h3>
          <div class="demo-content">
            <div class="theme-system-demo">
              <div class="theme-controls">
                <h4>🎨 主题设置</h4>
                <div class="theme-options">
                  <button
                    v-for="t in availableThemes"
                    :key="t.name"
                    @click="setTheme(t.name)"
                    class="theme-btn"
                    :class="{ active: activeTheme === t.name }"
                    :style="{ background: t.primary }"
                  >
                    {{ t.label }}
                  </button>
                </div>
              </div>

              <div class="themed-content" :style="themeStyles">
                <h4>📄 内容区域</h4>
                <p>这是应用主题的内容区域</p>
                <div class="themed-card">
                  <h5>卡片标题</h5>
                  <p>这个卡片会根据主题自动改变样式</p>
                  <button class="themed-button">主题按钮</button>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- ThemeProvider.vue: 主题提供者 --&gt;
&lt;script setup&gt;
import { provide, ref, computed } from 'vue'

const themes = {
  light: {
    primary: '#4285f4',
    background: '#ffffff',
    text: '#333333'
  },
  dark: {
    primary: '#bb86fc',
    background: '#1e1e1e',
    text: '#ffffff'
  },
  blue: {
    primary: '#0066cc',
    background: '#e8f4f8',
    text: '#003d66'
  }
}

const activeTheme = ref('light')

const currentTheme = computed(() =&gt; themes[activeTheme.value])

const setTheme = (themeName) =&gt; {
  activeTheme.value = themeName
}

provide('theme', {
  current: currentTheme,
  setTheme,
  activeTheme
})
&lt;/script&gt;

&lt;!-- 任意后代组件都可以使用主题 --&gt;
&lt;script setup&gt;
import { inject } from 'vue'

const { current, setTheme } = inject('theme')
&lt;/script&gt;

&lt;template&gt;
  &lt;div :style="{
    background: current.background,
    color: current.text
  }"&gt;
    &lt;button
      :style="{ background: current.primary }"
      @click="setTheme('dark')"
    &gt;
      切换到暗色主题
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. 知识总结 -->
      <section class="content-section">
        <h2>📚 知识总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>💡 核心概念</h3>
            <ul>
              <li><strong>provide:</strong> 祖先组件提供数据给后代组件</li>
              <li><strong>inject:</strong> 后代组件注入祖先提供的数据</li>
              <li><strong>响应式:</strong> 使用 ref/reactive 保持数据响应性</li>
              <li><strong>Symbol key:</strong> 使用 Symbol 确保类型安全</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🎯 使用场景</h3>
            <ul>
              <li>深层组件树的数据传递</li>
              <li>全局主题配置</li>
              <li>用户认证状态</li>
              <li>多语言国际化</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>✨ 最佳实践</h3>
            <ul>
              <li>使用 Symbol 作为注入 key</li>
              <li>为 inject 提供默认值</li>
              <li>提供方法而不仅是数据</li>
              <li>大型应用考虑 Pinia 或 Vuex</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 下一课预告 -->
      <section class="content-section next-lesson-preview">
        <h2>🎯 下一课预告</h2>
        <div class="next-lesson-card">
          <h3>第65课：Vue Router 基础</h3>
          <p>学习 Vue Router 路由系统，掌握单页应用的路由管理和页面导航。</p>
          <ul>
            <li>⚡ 路由配置与使用</li>
            <li>🔀 路由跳转和导航</li>
            <li>📊 动态路由和参数</li>
            <li>💡 路由守卫和权限控制</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 示例数据
const userName = ref('张三')

// 主题切换
const theme = ref('#4285f4')
const toggleTheme = () => {
  theme.value = theme.value === '#4285f4' ? '#ea4335' : '#4285f4'
}

// 购物车
const products = ref([
  { id: 1, name: 'Vue3 教程', price: 99, icon: '📚' },
  { id: 2, name: 'React 指南', price: 89, icon: '📘' },
  { id: 3, name: 'TypeScript', price: 79, icon: '📗' },
  { id: 4, name: 'Node.js', price: 109, icon: '📙' }
])

const cartItems = ref([])

const addToCart = (product) => {
  cartItems.value.push({ ...product, cartId: Date.now() })
}

const removeFromCart = (id) => {
  const index = cartItems.value.findIndex(item => item.cartId === id)
  if (index > -1) {
    cartItems.value.splice(index, 1)
  }
}

const cartTotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price, 0)
)

// 用户认证
const currentUser = ref({
  isLoggedIn: false,
  name: '',
  role: 'guest',
  email: ''
})

const login = () => {
  currentUser.value = {
    isLoggedIn: true,
    name: '张三',
    role: 'admin',
    email: 'zhangsan@example.com'
  }
}

const logout = () => {
  currentUser.value = {
    isLoggedIn: false,
    name: '',
    role: 'guest',
    email: ''
  }
}

// 主题系统
const availableThemes = [
  { name: 'light', label: '浅色', primary: '#4285f4' },
  { name: 'dark', label: '深色', primary: '#bb86fc' },
  { name: 'blue', label: '蓝色', primary: '#0066cc' }
]

const activeTheme = ref('light')

const themes = {
  light: {
    primary: '#4285f4',
    background: '#ffffff',
    text: '#333333',
    border: '#e0e0e0'
  },
  dark: {
    primary: '#bb86fc',
    background: '#1e1e1e',
    text: '#ffffff',
    border: '#444444'
  },
  blue: {
    primary: '#0066cc',
    background: '#e8f4f8',
    text: '#003d66',
    border: '#b3d9e6'
  }
}

const themeStyles = computed(() => {
  const t = themes[activeTheme.value]
  return {
    background: t.background,
    color: t.text,
    borderColor: t.border
  }
})

const setTheme = (themeName) => {
  activeTheme.value = themeName
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

.code-example {
  margin-top: 20px;
}

.code-example pre {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  overflow-x: auto;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

.code-example code {
  color: #333;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* Props Drilling Demo */
.props-drilling-demo {
  margin-bottom: 20px;
}

.component-box {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  margin: 10px 0;
}

.component-box h4 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 16px;
}

.component-box p {
  margin: 8px 0;
  color: #666;
  font-size: 14px;
}

.level-1 {
  background: linear-gradient(135deg, #e3f2fd 0%, #f5f5f5 100%);
  border-color: #2196f3;
}

.level-2 {
  background: linear-gradient(135deg, #fff3e0 0%, #f5f5f5 100%);
  border-color: #ff9800;
}

.level-3 {
  background: linear-gradient(135deg, #e8f5e9 0%, #f5f5f5 100%);
  border-color: #4caf50;
}

.arrow {
  text-align: center;
  color: #666;
  font-weight: bold;
  margin: 8px 0;
  font-size: 14px;
}

/* Provide/Inject Demo */
.provide-inject-demo {
  margin-bottom: 20px;
}

.ancestor-box {
  background: linear-gradient(135deg, #e8f0fe 0%, #f1f3f4 100%);
  border: 2px solid #4285f4;
  border-radius: 12px;
  padding: 24px;
}

.ancestor-box h4 {
  margin-top: 0;
  color: #1a73e8;
}

.color-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  margin-left: 8px;
}

.children-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.descendant-box {
  background: white;
  border: 2px solid;
  border-radius: 8px;
  padding: 16px;
  transition: all 0.3s ease;
}

.descendant-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.descendant-box h4 {
  margin-top: 0;
  font-size: 15px;
}

/* 购物车演示 */
.cart-demo {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  margin-bottom: 20px;
}

.products-section,
.cart-section {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
}

.products-section h4,
.cart-section h4 {
  margin-top: 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.product-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: all 0.2s ease;
}

.product-card:hover {
  border-color: #4285f4;
  box-shadow: 0 2px 8px rgba(66,133,244,0.1);
}

.product-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.product-card h5 {
  margin: 8px 0;
  font-size: 14px;
  color: #333;
}

.price {
  color: #ea4335;
  font-weight: bold;
  margin: 8px 0;
}

.cart-badge {
  background: #ea4335;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
}

.empty-cart {
  text-align: center;
  padding: 40px 20px;
  color: #999;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: white;
  border-radius: 6px;
  margin-bottom: 8px;
}

.btn-remove {
  background: #ea4335;
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  transition: all 0.2s ease;
}

.btn-remove:hover {
  background: #d33;
  transform: scale(1.1);
}

.cart-total {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #e0e0e0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: right;
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

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66,133,244,0.4);
}

.btn-secondary {
  background: #f1f3f4;
  color: #333;
}

.btn-secondary:hover {
  background: #e8eaed;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 13px;
}

/* 用户认证演示 */
.auth-demo {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

.auth-control {
  text-align: center;
  padding: 20px;
}

.user-info-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
}

.user-info-card h4 {
  margin-top: 0;
  color: #333;
}

.role-badge {
  display: inline-block;
  padding: 4px 12px;
  background: #4285f4;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.not-logged-in {
  text-align: center;
  padding: 20px;
  color: #666;
}

.text-secondary {
  color: #999;
  font-size: 14px;
}

.protected-content {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
}

.protected-content h4 {
  margin-top: 0;
  color: #333;
}

.admin-panel {
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%);
  border-left: 4px solid #34a853;
  padding: 16px;
  border-radius: 8px;
}

.user-panel {
  background: linear-gradient(135deg, #e3f2fd 0%, #e8eaf6 100%);
  border-left: 4px solid #4285f4;
  padding: 16px;
  border-radius: 8px;
}

.access-denied {
  background: linear-gradient(135deg, #fce8e6 0%, #fff3e0 100%);
  border-left: 4px solid #ea4335;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
}

/* 主题系统演示 */
.theme-system-demo {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

.theme-controls {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
}

.theme-controls h4 {
  margin-top: 0;
  color: #333;
}

.theme-options {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.theme-btn {
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.theme-btn.active {
  border-color: #333;
  box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
}

.themed-content {
  border: 2px solid;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
}

.themed-content h4 {
  margin-top: 0;
}

.themed-card {
  background: rgba(0,0,0,0.05);
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
}

.themed-card h5 {
  margin-top: 0;
}

.themed-button {
  padding: 8px 16px;
  background: currentColor;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 12px;
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
  .cart-demo {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .theme-options {
    flex-direction: column;
  }

  .theme-btn {
    width: 100%;
  }
}
</style>
