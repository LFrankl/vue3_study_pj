<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第61课：组件基础</h1>
      <p class="lesson-subtitle">学习 Vue3 组件化开发，掌握组件注册、Props 和 Emits 通信机制</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 35 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <div class="lesson-content">
      <!-- 1. 组件概念 -->
      <section class="content-section">
        <h2>1️⃣ 什么是组件？</h2>
        <p>组件是 Vue 应用的基本构建块。它允许我们将 UI 拆分成独立、可复用的部分。</p>

        <div class="info-box">
          <h3>组件的优势</h3>
          <div class="advantage-grid">
            <div class="advantage-item">
              <span class="advantage-icon">🔄</span>
              <h4>可复用性</h4>
              <p>同一个组件可以在不同地方多次使用</p>
            </div>
            <div class="advantage-item">
              <span class="advantage-icon">🧩</span>
              <h4>模块化</h4>
              <p>将复杂界面拆分成小的、易于管理的部分</p>
            </div>
            <div class="advantage-item">
              <span class="advantage-icon">🔒</span>
              <h4>封装性</h4>
              <p>每个组件拥有自己的数据和逻辑</p>
            </div>
            <div class="advantage-item">
              <span class="advantage-icon">🛠️</span>
              <h4>易维护</h4>
              <p>代码组织清晰，修改和测试更容易</p>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 概念演示：组件树结构</h3>
          <div class="component-tree">
            <div class="tree-node root">
              <div class="node-label">App (根组件)</div>
              <div class="tree-children">
                <div class="tree-node">
                  <div class="node-label">Header</div>
                </div>
                <div class="tree-node">
                  <div class="node-label">Main</div>
                  <div class="tree-children">
                    <div class="tree-node">
                      <div class="node-label">Sidebar</div>
                    </div>
                    <div class="tree-node">
                      <div class="node-label">Content</div>
                    </div>
                  </div>
                </div>
                <div class="tree-node">
                  <div class="node-label">Footer</div>
                </div>
              </div>
            </div>
          </div>
          <p class="tree-description">Vue 应用是由嵌套的组件树构成的</p>
        </div>
      </section>

      <!-- 2. 组件定义 -->
      <section class="content-section">
        <h2>2️⃣ 创建组件</h2>
        <p>在 Vue3 中，我们使用 <code>&lt;script setup&gt;</code> 语法来定义组件。</p>

        <div class="info-box">
          <h3>组件基本结构</h3>
          <pre><code>&lt;!-- MyButton.vue --&gt;
&lt;template&gt;
  &lt;button class="custom-button"&gt;
    {{ text }}
  &lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Props 定义
const props = defineProps({
  text: String
})
&lt;/script&gt;

&lt;style scoped&gt;
.custom-button {
  /* 样式仅作用于此组件 */
}
&lt;/style&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：简单的按钮组件模拟</h3>
          <div class="component-showcase">
            <button class="simple-btn btn-primary">主要按钮</button>
            <button class="simple-btn btn-success">成功按钮</button>
            <button class="simple-btn btn-warning">警告按钮</button>
            <button class="simple-btn btn-danger">危险按钮</button>
          </div>
          <p class="demo-note">💡 每个按钮都可以是一个独立的组件，通过 Props 传递不同的类型和文本</p>
        </div>
      </section>

      <!-- 3. Props 父传子 -->
      <section class="content-section">
        <h2>3️⃣ Props - 父组件向子组件传值</h2>
        <p>Props 是父组件向子组件传递数据的方式。子组件通过 <code>defineProps()</code> 声明接收的 props。</p>

        <div class="info-box">
          <h3>Props 类型定义</h3>
          <pre><code>// 简单语法
defineProps(['title', 'count'])

// 带类型检查
defineProps({
  title: String,
  count: Number,
  isActive: Boolean,
  tags: Array,
  author: Object
})

// 完整定义
defineProps({
  title: {
    type: String,
    required: true,      // 必需
    default: '默认标题'  // 默认值
  },
  count: {
    type: Number,
    validator(value) {   // 自定义验证
      return value >= 0
    }
  }
})</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：用户卡片（Props 模拟）</h3>
          <div class="cards-grid">
            <div class="user-card">
              <div class="avatar">👨‍💻</div>
              <h3>张三</h3>
              <p class="role">前端工程师</p>
              <p class="email">zhangsan@example.com</p>
              <p class="experience">工作经验: 3 年</p>
            </div>
            <div class="user-card">
              <div class="avatar">👩‍💻</div>
              <h3>李四</h3>
              <p class="role">后端工程师</p>
              <p class="email">lisi@example.com</p>
              <p class="experience">工作经验: 5 年</p>
            </div>
            <div class="user-card">
              <div class="avatar">🎨</div>
              <h3>王五</h3>
              <p class="role">UI 设计师</p>
              <p class="email">wangwu@example.com</p>
              <p class="experience">工作经验: 2 年</p>
            </div>
          </div>
          <p class="demo-note">💡 每个卡片都接收 name、role、email、avatar、experience 等 Props</p>

          <div class="code-example">
            <pre><code>&lt;!-- 父组件使用 --&gt;
&lt;UserCard
  name="张三"
  role="前端工程师"
  email="zhangsan@example.com"
  avatar="👨‍💻"
  :experience="3"
/&gt;</code></pre>
            <p class="note">💡 注意：传递数字、布尔值、数组、对象时需要使用 <code>v-bind</code> 或 <code>:</code></p>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 交互演示：动态 Props</h3>
          <div class="props-demo">
            <div class="props-controller">
              <h4>控制面板（父组件数据）</h4>
              <div class="control-group">
                <label>用户名：</label>
                <input v-model="dynamicUser.name" class="input-field" />
              </div>
              <div class="control-group">
                <label>职位：</label>
                <input v-model="dynamicUser.role" class="input-field" />
              </div>
              <div class="control-group">
                <label>经验年限：</label>
                <input v-model.number="dynamicUser.experience" type="number" class="input-field" />
              </div>
            </div>

            <div class="props-result">
              <h4>子组件接收的 Props（实时更新）：</h4>
              <div class="user-card">
                <div class="avatar">{{ dynamicUser.avatar }}</div>
                <h3>{{ dynamicUser.name }}</h3>
                <p class="role">{{ dynamicUser.role }}</p>
                <p class="email">{{ dynamicUser.email }}</p>
                <p class="experience">工作经验: {{ dynamicUser.experience }} 年</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Emits 子传父 -->
      <section class="content-section">
        <h2>4️⃣ Emits - 子组件向父组件传值</h2>
        <p>子组件通过触发事件的方式向父组件发送消息。使用 <code>defineEmits()</code> 声明要触发的事件。</p>

        <div class="info-box">
          <h3>Emits 基本用法</h3>
          <pre><code>&lt;!-- 子组件 --&gt;
&lt;script setup&gt;
// 声明要触发的事件
const emit = defineEmits(['update', 'delete'])

// 触发事件
const handleClick = () => {
  emit('update', { id: 1, name: '新数据' })
}
&lt;/script&gt;

&lt;!-- 父组件 --&gt;
&lt;template&gt;
  &lt;ChildComponent
    @update="handleUpdate"
    @delete="handleDelete"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleUpdate = (data) => {
  console.log('收到更新:', data)
}
&lt;/script&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：计数器组件通信</h3>
          <div class="emit-demo">
            <div class="parent-area">
              <h4>父组件状态：</h4>
              <div class="parent-status">
                <p>当前总数：<strong>{{ parentCount }}</strong></p>
                <p>最后操作：{{ lastAction || '暂无操作' }}</p>
              </div>
            </div>

            <div class="children-area">
              <h4>子组件（模拟两个计数器组件）：</h4>
              <div class="counters-grid">
                <!-- 计数器 A -->
                <div class="counter-component">
                  <h4>计数器 A</h4>
                  <div class="counter-buttons">
                    <button @click="handleIncrement('A')" class="btn btn-success">+1</button>
                    <button @click="handleDecrement('A')" class="btn btn-danger">-1</button>
                  </div>
                </div>
                <!-- 计数器 B -->
                <div class="counter-component">
                  <h4>计数器 B</h4>
                  <div class="counter-buttons">
                    <button @click="handleIncrement('B')" class="btn btn-success">+1</button>
                    <button @click="handleDecrement('B')" class="btn btn-danger">-1</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="code-example">
            <pre><code>&lt;!-- 子组件触发事件 --&gt;
&lt;button @click="emit('increment')"&gt;+1&lt;/button&gt;
&lt;button @click="emit('decrement')"&gt;-1&lt;/button&gt;

&lt;!-- 父组件监听事件 --&gt;
&lt;CounterComponent
  @increment="parentCount++"
  @decrement="parentCount--"
/&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 5. 组件复用 -->
      <section class="content-section">
        <h2>5️⃣ 组件复用</h2>
        <p>组件的最大优势之一就是可复用性。每个组件实例都维护自己独立的状态。</p>

        <div class="demo-box">
          <h3>🎯 演示：多个独立的待办列表</h3>
          <p class="demo-description">下面是三个独立的待办列表，它们使用同一个组件定义，但各自维护自己的数据：</p>

          <div class="todo-instances">
            <!-- 待办列表 1 -->
            <div class="todo-instance">
              <h4>📋 工作任务</h4>
              <div class="todo-list-component">
                <div class="todo-input-group">
                  <input
                    v-model="todo1Input"
                    @keyup.enter="addTodo1"
                    placeholder="添加任务..."
                    class="input-field"
                  />
                  <button @click="addTodo1" class="btn btn-primary btn-sm">添加</button>
                </div>
                <ul class="todo-list">
                  <li v-for="(item, index) in todo1List" :key="index" class="todo-item">
                    <span>{{ item }}</span>
                    <button @click="removeTodo1(index)" class="btn-remove">×</button>
                  </li>
                </ul>
                <p v-if="todo1List.length === 0" class="empty-message">暂无任务</p>
              </div>
            </div>

            <!-- 待办列表 2 -->
            <div class="todo-instance">
              <h4>📚 学习计划</h4>
              <div class="todo-list-component">
                <div class="todo-input-group">
                  <input
                    v-model="todo2Input"
                    @keyup.enter="addTodo2"
                    placeholder="添加任务..."
                    class="input-field"
                  />
                  <button @click="addTodo2" class="btn btn-primary btn-sm">添加</button>
                </div>
                <ul class="todo-list">
                  <li v-for="(item, index) in todo2List" :key="index" class="todo-item">
                    <span>{{ item }}</span>
                    <button @click="removeTodo2(index)" class="btn-remove">×</button>
                  </li>
                </ul>
                <p v-if="todo2List.length === 0" class="empty-message">暂无任务</p>
              </div>
            </div>

            <!-- 待办列表 3 -->
            <div class="todo-instance">
              <h4>🏠 生活琐事</h4>
              <div class="todo-list-component">
                <div class="todo-input-group">
                  <input
                    v-model="todo3Input"
                    @keyup.enter="addTodo3"
                    placeholder="添加任务..."
                    class="input-field"
                  />
                  <button @click="addTodo3" class="btn btn-primary btn-sm">添加</button>
                </div>
                <ul class="todo-list">
                  <li v-for="(item, index) in todo3List" :key="index" class="todo-item">
                    <span>{{ item }}</span>
                    <button @click="removeTodo3(index)" class="btn-remove">×</button>
                  </li>
                </ul>
                <p v-if="todo3List.length === 0" class="empty-message">暂无任务</p>
              </div>
            </div>
          </div>

          <div class="reuse-explanation">
            <p>🔑 <strong>关键点</strong>：虽然使用的是同一个组件，但每个实例都有：</p>
            <ul>
              <li>独立的数据状态</li>
              <li>独立的输入框和列表</li>
              <li>互不干扰的操作</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 6. 综合案例 -->
      <section class="content-section">
        <h2>6️⃣ 综合案例：购物车应用</h2>
        <p>结合 Props 和 Emits 创建一个完整的产品管理应用。</p>

        <div class="demo-box">
          <h3>🎯 实践：简易购物车</h3>
          <div class="shop-app">
            <div class="shop-header">
              <h3>商品列表</h3>
              <div class="cart-summary">
                <span>购物车：{{ cart.length }} 件商品</span>
                <span>总价：¥{{ totalPrice }}</span>
              </div>
            </div>

            <div class="products-grid">
              <div
                v-for="product in products"
                :key="product.id"
                class="product-card"
              >
                <div class="product-image">{{ product.emoji }}</div>
                <h4>{{ product.name }}</h4>
                <p class="product-price">¥{{ product.price }}</p>
                <button @click="addToCart(product)" class="btn btn-primary btn-sm">
                  加入购物车
                </button>
              </div>
            </div>

            <div class="cart-section">
              <h3>购物车</h3>
              <div v-if="cart.length === 0" class="empty-cart">
                购物车是空的
              </div>
              <div v-else class="cart-items">
                <div
                  v-for="item in cart"
                  :key="item.id"
                  class="cart-item"
                >
                  <div class="item-info">
                    <span class="item-emoji">{{ item.emoji }}</span>
                    <span class="item-name">{{ item.name }}</span>
                  </div>
                  <div class="item-controls">
                    <button @click="updateQuantity(item.id, item.quantity - 1)" class="btn-qty">-</button>
                    <span class="item-quantity">{{ item.quantity }}</span>
                    <button @click="updateQuantity(item.id, item.quantity + 1)" class="btn-qty">+</button>
                  </div>
                  <div class="item-price">¥{{ item.price * item.quantity }}</div>
                  <button @click="removeFromCart(item.id)" class="btn-remove">×</button>
                </div>
              </div>
            </div>
          </div>

          <div class="code-example">
            <h4>组件化思路：</h4>
            <pre><code>&lt;!-- 产品卡片组件 --&gt;
&lt;ProductCard
  :product="product"
  @add-to-cart="addToCart"
/&gt;

&lt;!-- 购物车项组件 --&gt;
&lt;CartItem
  :item="item"
  @remove="removeFromCart"
  @update-quantity="updateQuantity"
/&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 知识总结 -->
      <section class="content-section">
        <h2>📚 知识总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>🧩 组件概念</h3>
            <ul>
              <li>组件是可复用的 Vue 实例</li>
              <li>每个组件有独立的状态</li>
              <li>组件可以嵌套形成组件树</li>
              <li>使用 <code>&lt;script setup&gt;</code> 定义</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>📥 Props（父→子）</h3>
            <ul>
              <li>使用 <code>defineProps()</code> 接收</li>
              <li>支持类型检查和验证</li>
              <li>Props 是单向数据流</li>
              <li>子组件不应修改 Props</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>📤 Emits（子→父）</h3>
            <ul>
              <li>使用 <code>defineEmits()</code> 声明</li>
              <li>通过 <code>emit()</code> 触发事件</li>
              <li>可以传递数据给父组件</li>
              <li>父组件用 <code>@事件名</code> 监听</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔄 组件复用</h3>
            <ul>
              <li>同一组件可多次使用</li>
              <li>每个实例状态独立</li>
              <li>通过 Props 传递不同数据</li>
              <li>提高代码复用率</li>
            </ul>
          </div>
        </div>

        <div class="best-practices">
          <h3>💡 最佳实践</h3>
          <div class="practice-list">
            <div class="practice-item">
              <span class="practice-icon">✅</span>
              <div>
                <strong>单一职责</strong>
                <p>每个组件只负责一个功能</p>
              </div>
            </div>
            <div class="practice-item">
              <span class="practice-icon">✅</span>
              <div>
                <strong>Props 验证</strong>
                <p>始终为 Props 定义类型</p>
              </div>
            </div>
            <div class="practice-item">
              <span class="practice-icon">✅</span>
              <div>
                <strong>事件命名</strong>
                <p>使用 kebab-case 命名事件</p>
              </div>
            </div>
            <div class="practice-item">
              <span class="practice-icon">✅</span>
              <div>
                <strong>组件命名</strong>
                <p>使用 PascalCase 命名组件</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 下一课预告 -->
      <section class="content-section next-lesson-preview">
        <h2>🎯 下一课预告</h2>
        <div class="next-lesson-card">
          <h3>第62课：插槽（Slots）</h3>
          <p>学习如何使用插槽向组件传递内容，打造更灵活的组件。</p>
          <ul>
            <li>✨ 默认插槽</li>
            <li>🏷️ 具名插槽</li>
            <li>🔌 作用域插槽</li>
            <li>🎨 插槽的实际应用</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 动态 Props 演示
const dynamicUser = ref({
  name: '测试用户',
  role: 'Vue 开发者',
  email: 'test@example.com',
  avatar: '👨‍💻',
  experience: 2
})

// Emits 演示
const parentCount = ref(0)
const lastAction = ref('')

const handleIncrement = (name) => {
  parentCount.value++
  lastAction.value = `计数器 ${name} 增加了 1`
}

const handleDecrement = (name) => {
  parentCount.value--
  lastAction.value = `计数器 ${name} 减少了 1`
}

// 组件复用 - 待办列表 1
const todo1Input = ref('')
const todo1List = ref([])

const addTodo1 = () => {
  if (todo1Input.value.trim()) {
    todo1List.value.push(todo1Input.value.trim())
    todo1Input.value = ''
  }
}

const removeTodo1 = (index) => {
  todo1List.value.splice(index, 1)
}

// 组件复用 - 待办列表 2
const todo2Input = ref('')
const todo2List = ref([])

const addTodo2 = () => {
  if (todo2Input.value.trim()) {
    todo2List.value.push(todo2Input.value.trim())
    todo2Input.value = ''
  }
}

const removeTodo2 = (index) => {
  todo2List.value.splice(index, 1)
}

// 组件复用 - 待办列表 3
const todo3Input = ref('')
const todo3List = ref([])

const addTodo3 = () => {
  if (todo3Input.value.trim()) {
    todo3List.value.push(todo3Input.value.trim())
    todo3Input.value = ''
  }
}

const removeTodo3 = (index) => {
  todo3List.value.splice(index, 1)
}

// 购物车应用
const products = ref([
  { id: 1, name: 'Vue3 教程', emoji: '📘', price: 99 },
  { id: 2, name: 'React 指南', emoji: '📗', price: 89 },
  { id: 3, name: 'TypeScript 手册', emoji: '📙', price: 79 },
  { id: 4, name: 'Node.js 实战', emoji: '📕', price: 109 },
  { id: 5, name: 'CSS 秘籍', emoji: '🎨', price: 69 },
  { id: 6, name: 'JavaScript 高级', emoji: '⚡', price: 119 }
])

const cart = ref([])

const addToCart = (product) => {
  const existing = cart.value.find(item => item.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
}

const removeFromCart = (id) => {
  cart.value = cart.value.filter(item => item.id !== id)
}

const updateQuantity = (id, newQuantity) => {
  if (newQuantity <= 0) {
    removeFromCart(id)
  } else {
    const item = cart.value.find(item => item.id === id)
    if (item) {
      item.quantity = newQuantity
    }
  }
}

const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
})
</script>

<style scoped>
/* 基础样式 */
.lesson-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.lesson-header {
  text-align: center;
  margin-bottom: 48px;
  padding: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
}

.lesson-header h1 {
  font-size: 36px;
  margin-bottom: 12px;
}

.lesson-subtitle {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 16px;
}

.lesson-meta {
  display: flex;
  gap: 24px;
  justify-content: center;
  font-size: 14px;
}

.content-section {
  margin-bottom: 48px;
}

.content-section h2 {
  font-size: 28px;
  color: var(--primary-blue);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 3px solid var(--primary-blue);
}

/* 信息框 */
.info-box {
  background: var(--info-bg);
  border-left: 4px solid var(--primary-blue);
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
}

.info-box h3 {
  margin-top: 0;
  color: var(--primary-blue);
}

.info-box pre {
  background: white;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 12px 0 0 0;
}

/* 组件优势网格 */
.advantage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.advantage-item {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 8px;
}

.advantage-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 12px;
}

.advantage-item h4 {
  margin: 8px 0;
  color: var(--primary-blue);
}

.advantage-item p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* 组件树 */
.component-tree {
  padding: 32px;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  border-radius: 12px;
  overflow-x: auto;
}

.tree-node {
  position: relative;
  padding: 20px;
  margin: 16px 0;
}

.tree-node.root {
  padding: 0;
}

.node-label {
  display: inline-block;
  padding: 12px 24px;
  background: var(--primary-blue);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.tree-children {
  margin-left: 40px;
  padding-left: 40px;
  border-left: 2px dashed #ccc;
  margin-top: 16px;
}

.tree-children .node-label {
  background: #764ba2;
}

.tree-children .tree-children .node-label {
  background: #f093fb;
}

.tree-description {
  text-align: center;
  color: #666;
  font-style: italic;
  margin-top: 24px;
}

/* 演示框 */
.demo-box {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
}

.demo-box h3 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 20px;
}

.demo-note, .demo-description {
  color: #666;
  font-style: italic;
  margin: 16px 0;
}

/* 按钮展示 */
.component-showcase {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.simple-btn {
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
}

.btn-primary {
  background: var(--primary-blue);
}

.btn-primary:hover {
  background: var(--primary-blue-hover);
  transform: translateY(-1px);
}

.btn-success {
  background: var(--success-green);
}

.btn-success:hover {
  background: #28a745;
}

.btn-warning {
  background: #ffc107;
  color: #333;
}

.btn-warning:hover {
  background: #e0a800;
}

.btn-danger {
  background: #dc3545;
}

.btn-danger:hover {
  background: #c82333;
}

/* 用户卡片 */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.user-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.2s;
}

.user-card:hover {
  border-color: var(--primary-blue);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
  transform: translateY(-2px);
}

.user-card .avatar {
  font-size: 64px;
  margin-bottom: 16px;
}

.user-card h3 {
  margin: 12px 0;
  color: #333;
}

.user-card .role {
  color: var(--primary-blue);
  font-weight: 600;
  margin: 8px 0;
}

.user-card .email {
  color: #666;
  font-size: 14px;
  margin: 8px 0;
}

.user-card .experience {
  color: #999;
  font-size: 13px;
  margin-top: 12px;
}

/* Props 演示 */
.props-demo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.props-controller {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.control-group label {
  min-width: 80px;
  font-weight: 600;
  color: #666;
}

.input-field {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.input-field:focus {
  outline: none;
  border-color: var(--primary-blue);
}

.props-result {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid var(--primary-blue);
}

.props-result h4 {
  margin-top: 0;
  color: var(--primary-blue);
}

/* Emits 演示 */
.emit-demo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.parent-area {
  background: var(--info-bg);
  padding: 20px;
  border-radius: 8px;
}

.parent-area h4 {
  margin-top: 0;
}

.parent-status {
  background: white;
  padding: 16px;
  border-radius: 6px;
  margin-top: 12px;
}

.parent-status p {
  margin: 8px 0;
}

.parent-status strong {
  color: var(--primary-blue);
  font-size: 24px;
}

.children-area {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.children-area h4 {
  margin-top: 0;
}

.counters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 12px;
}

.counter-component {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}

.counter-component h4 {
  margin-top: 0;
  color: #666;
}

.counter-buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
}

.counter-buttons .btn {
  flex: 1;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
}

/* 待办列表 */
.todo-instances {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.todo-instance {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
}

.todo-instance h4 {
  margin-top: 0;
  color: var(--primary-blue);
  text-align: center;
}

.todo-list-component {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
}

.todo-input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 13px;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 6px;
}

.btn-remove {
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  transition: background 0.2s;
}

.btn-remove:hover {
  background: #c82333;
}

.empty-message {
  text-align: center;
  color: #999;
  font-style: italic;
  margin: 12px 0 0 0;
}

.reuse-explanation {
  background: var(--success-bg);
  padding: 20px;
  border-radius: 8px;
}

.reuse-explanation p {
  margin: 0 0 12px 0;
  font-weight: 600;
  color: var(--success-green);
}

.reuse-explanation ul {
  margin: 0;
  padding-left: 20px;
}

.reuse-explanation li {
  padding: 4px 0;
}

/* 购物车 */
.shop-app {
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
}

.shop-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e0e0e0;
}

.shop-header h3 {
  margin: 0;
}

.cart-summary {
  display: flex;
  gap: 24px;
  font-weight: 600;
  color: var(--primary-blue);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.product-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: all 0.2s;
}

.product-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.product-image {
  font-size: 48px;
  margin-bottom: 12px;
}

.product-card h4 {
  margin: 8px 0;
  color: #333;
}

.product-price {
  color: var(--primary-blue);
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
}

.cart-section {
  background: white;
  padding: 24px;
  border-radius: 8px;
  border: 2px solid var(--primary-blue);
}

.cart-section h3 {
  margin-top: 0;
  color: var(--primary-blue);
}

.empty-cart {
  text-align: center;
  color: #999;
  padding: 40px;
  font-style: italic;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
}

.item-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-emoji {
  font-size: 32px;
}

.item-name {
  font-weight: 600;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-qty {
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

.btn-qty:hover {
  background: var(--primary-blue-hover);
}

.item-quantity {
  min-width: 32px;
  text-align: center;
  font-weight: 600;
}

.item-price {
  min-width: 80px;
  text-align: right;
  font-weight: bold;
  color: var(--primary-blue);
}

/* 代码示例 */
.code-example {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
}

.code-example h4 {
  margin-top: 0;
  margin-bottom: 12px;
  color: var(--primary-blue);
}

.code-example pre {
  margin: 0;
  background: white;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
}

.code-example code {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.note {
  color: #666;
  font-style: italic;
  margin-top: 12px;
}

/* 知识总结 */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.summary-card {
  background: white;
  border: 2px solid var(--primary-blue);
  border-radius: 12px;
  padding: 20px;
}

.summary-card h3 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 16px;
}

.summary-card ul {
  margin: 0;
  padding-left: 20px;
}

.summary-card li {
  padding: 6px 0;
  line-height: 1.6;
}

/* 最佳实践 */
.best-practices {
  background: var(--success-bg);
  border-radius: 12px;
  padding: 24px;
  margin-top: 32px;
}

.best-practices h3 {
  color: var(--success-green);
  margin-top: 0;
  margin-bottom: 20px;
}

.practice-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.practice-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: white;
  padding: 16px;
  border-radius: 8px;
}

.practice-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.practice-item strong {
  display: block;
  color: var(--success-green);
  margin-bottom: 4px;
}

.practice-item p {
  margin: 0;
  font-size: 14px;
  color: #666;
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
  .lesson-container {
    padding: 16px;
  }

  .lesson-header h1 {
    font-size: 28px;
  }

  .advantage-grid,
  .cards-grid,
  .counters-grid,
  .todo-instances,
  .products-grid,
  .summary-grid,
  .practice-list {
    grid-template-columns: 1fr;
  }

  .shop-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .cart-item {
    flex-wrap: wrap;
  }
}
</style>
