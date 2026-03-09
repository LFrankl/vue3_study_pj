<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第58课：列表渲染</h1>
      <p class="lesson-subtitle">掌握 v-for 指令，学会渲染列表数据和理解 key 的重要性</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 20 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <div class="lesson-content">
      <!-- v-for 基础 -->
      <section class="content-section">
        <h2>1️⃣ v-for 基础用法</h2>
        <p><code>v-for</code> 指令用于基于数组或对象渲染列表。它是 Vue 中最常用的指令之一。</p>

        <div class="info-box">
          <h3>基本语法</h3>
          <pre v-pre><code>&lt;li v-for="item in items" :key="item.id"&gt;
  {{ item.name }}
&lt;/li&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 渲染数组</h3>
          <div class="demo-content">
            <div class="demo-result">
              <h4>水果列表：</h4>
              <ul class="fruit-list">
                <li v-for="(fruit, index) in fruits" :key="index" class="fruit-item">
                  <span class="index">{{ index + 1 }}.</span>
                  <span class="name">{{ fruit.name }}</span>
                  <span class="emoji">{{ fruit.emoji }}</span>
                  <span class="price">¥{{ fruit.price }}</span>
                </li>
              </ul>
            </div>
            <div class="code-display">
              <h4>代码：</h4>
              <pre v-pre><code>&lt;ul&gt;
  &lt;li v-for="(fruit, index) in fruits" :key="index"&gt;
    {{ index + 1 }}. {{ fruit.name }} {{ fruit.emoji }} ¥{{ fruit.price }}
  &lt;/li&gt;
&lt;/ul&gt;

&lt;script setup&gt;
const fruits = [
  { name: '苹果', emoji: '🍎', price: 5 },
  { name: '香蕉', emoji: '🍌', price: 3 },
  { name: '橙子', emoji: '🍊', price: 4 }
]
&lt;/script&gt;</code></pre>
            </div>
          </div>
        </div>

        <div class="tip-box">
          <strong>💡 解构语法：</strong>
          <ul>
            <li><code>item in items</code> - 遍历数组，item 是当前元素</li>
            <li><code>(item, index) in items</code> - 同时获取元素和索引</li>
            <li><code>(value, key) in object</code> - 遍历对象的值和键</li>
            <li><code>(value, key, index) in object</code> - 遍历对象，包含索引</li>
          </ul>
        </div>
      </section>

      <!-- v-for 遍历对象 -->
      <section class="content-section">
        <h2>2️⃣ 遍历对象</h2>
        <p><code>v-for</code> 不仅可以遍历数组，还可以遍历对象的属性。</p>

        <div class="demo-box">
          <h3>🎯 渲染用户信息</h3>
          <div class="demo-content">
            <div class="demo-result">
              <div class="user-card">
                <h4>用户信息</h4>
                <div class="info-grid">
                  <div v-for="(value, key) in userInfo" :key="key" class="info-row">
                    <span class="key">{{ key }}:</span>
                    <span class="value">{{ value }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="code-display">
              <h4>代码：</h4>
              <pre v-pre><code>&lt;div v-for="(value, key) in userInfo" :key="key"&gt;
  {{ key }}: {{ value }}
&lt;/div&gt;

&lt;script setup&gt;
const userInfo = {
  姓名: '张三',
  年龄: 25,
  职位: '前端工程师',
  城市: '北京'
}
&lt;/script&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- key 的作用 -->
      <section class="content-section highlight-section">
        <h2>3️⃣ key 的作用 ⭐</h2>
        <p><code>:key</code> 属性是 Vue 用来追踪每个节点身份的关键。<strong>始终使用 key 是最佳实践！</strong></p>

        <div class="warning-box">
          <strong>⚠️ 为什么需要 key？</strong>
          <ul>
            <li><strong>提高性能</strong>：帮助 Vue 识别哪些元素改变了，减少不必要的 DOM 操作</li>
            <li><strong>维护状态</strong>：在列表重新排序时保持组件状态</li>
            <li><strong>避免错误</strong>：防止列表项的数据混乱</li>
          </ul>
        </div>

        <div class="comparison-box">
          <h3>🔄 对比演示：有 key vs 无 key</h3>
          <div class="comparison-grid">
            <div class="comparison-item">
              <h4>❌ 没有 key（不推荐）</h4>
              <div class="list-demo">
                <ul>
                  <li v-for="item in demoItems1" class="demo-item">
                    {{ item.name }}
                    <input type="text" :placeholder="item.name" class="item-input">
                  </li>
                </ul>
                <button @click="shuffleDemoItems1" class="btn-shuffle">🔀 随机排序</button>
                <p class="warning-text">⚠️ 输入框内容会错位！</p>
              </div>
            </div>

            <div class="comparison-item">
              <h4>✅ 使用 key（推荐）</h4>
              <div class="list-demo">
                <ul>
                  <li v-for="item in demoItems2" :key="item.id" class="demo-item">
                    {{ item.name }}
                    <input type="text" :placeholder="item.name" class="item-input">
                  </li>
                </ul>
                <button @click="shuffleDemoItems2" class="btn-shuffle">🔀 随机排序</button>
                <p class="success-text">✅ 输入框内容跟随移动！</p>
              </div>
            </div>
          </div>
        </div>

        <div class="best-practice-box">
          <h3>✨ key 的最佳实践</h3>
          <div class="practice-grid">
            <div class="practice-item good">
              <div class="practice-icon">✅</div>
              <h4>推荐做法</h4>
              <pre v-pre><code>&lt;li v-for="item in items" :key="item.id"&gt;
  {{ item.name }}
&lt;/li&gt;</code></pre>
              <p>使用唯一标识符作为 key</p>
            </div>

            <div class="practice-item bad">
              <div class="practice-icon">❌</div>
              <h4>不推荐</h4>
              <pre v-pre><code>&lt;li v-for="(item, index) in items" :key="index"&gt;
  {{ item.name }}
&lt;/li&gt;</code></pre>
              <p>使用索引作为 key（除非列表是静态的）</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 数组变更检测 -->
      <section class="content-section">
        <h2>4️⃣ 数组变更检测</h2>
        <p>Vue 能够监听数组的变化并自动更新视图。以下方法会触发视图更新：</p>

        <div class="demo-box">
          <h3>🎯 数组操作演示</h3>
          <div class="demo-content">
            <div class="demo-controls">
              <button @click="addTodo" class="btn-primary">➕ 添加任务</button>
              <button @click="removeTodo" class="btn-danger">➖ 删除最后一个</button>
              <button @click="sortTodos" class="btn-info">🔄 排序</button>
              <button @click="reverseTodos" class="btn-warning">↕️ 反转</button>
            </div>

            <div class="demo-result">
              <h4>待办事项列表（{{ todos.length }} 项）</h4>
              <transition-group name="list" tag="ul" class="todo-list">
                <li v-for="todo in todos" :key="todo.id" class="todo-item">
                  <span class="todo-id">#{{ todo.id }}</span>
                  <span class="todo-text">{{ todo.text }}</span>
                  <button @click="toggleComplete(todo)" class="btn-toggle">
                    {{ todo.completed ? '✅' : '⭕' }}
                  </button>
                </li>
              </transition-group>
            </div>

            <div class="method-list">
              <h4>🔧 响应式数组方法</h4>
              <div class="method-grid">
                <div class="method-item">
                  <code>push()</code>
                  <span>在末尾添加</span>
                </div>
                <div class="method-item">
                  <code>pop()</code>
                  <span>删除最后一个</span>
                </div>
                <div class="method-item">
                  <code>shift()</code>
                  <span>删除第一个</span>
                </div>
                <div class="method-item">
                  <code>unshift()</code>
                  <span>在开头添加</span>
                </div>
                <div class="method-item">
                  <code>splice()</code>
                  <span>添加/删除元素</span>
                </div>
                <div class="method-item">
                  <code>sort()</code>
                  <span>排序</span>
                </div>
                <div class="method-item">
                  <code>reverse()</code>
                  <span>反转</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="warning-box">
          <strong>⚠️ 注意事项：</strong>
          <p>以下操作<strong>不会</strong>触发视图更新：</p>
          <pre v-pre><code>// ❌ 直接索引赋值
items[0] = newValue

// ✅ 使用 splice
items.splice(0, 1, newValue)

// ❌ 修改数组长度
items.length = 0

// ✅ 使用 splice 或重新赋值
items.splice(0)
items = []</code></pre>
        </div>
      </section>

      <!-- v-for 与 v-if -->
      <section class="content-section">
        <h2>5️⃣ v-for 与 v-if 结合使用</h2>

        <div class="warning-box">
          <strong>⚠️ 重要提醒：</strong>
          <p><code>v-if</code> 和 <code>v-for</code> 不建议在同一元素上使用！</p>
          <p>原因：<code>v-if</code> 的优先级更高，但它无法访问 <code>v-for</code> 作用域内定义的变量。</p>
        </div>

        <div class="comparison-box">
          <h3>推荐的做法</h3>
          <div class="comparison-grid">
            <div class="comparison-item bad">
              <h4>❌ 不推荐</h4>
              <pre v-pre><code>&lt;li v-for="user in users" v-if="user.isActive"&gt;
  {{ user.name }}
&lt;/li&gt;</code></pre>
            </div>

            <div class="comparison-item good">
              <h4>✅ 推荐方案1：使用计算属性</h4>
              <pre v-pre><code>&lt;li v-for="user in activeUsers" :key="user.id"&gt;
  {{ user.name }}
&lt;/li&gt;

&lt;script setup&gt;
const activeUsers = computed(() => {
  return users.filter(u => u.isActive)
})
&lt;/script&gt;</code></pre>
            </div>

            <div class="comparison-item good">
              <h4>✅ 推荐方案2：使用 template</h4>
              <pre v-pre><code>&lt;template v-for="user in users" :key="user.id"&gt;
  &lt;li v-if="user.isActive"&gt;
    {{ user.name }}
  &lt;/li&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 筛选演示</h3>
          <div class="demo-content">
            <div class="demo-controls">
              <label>
                <input type="checkbox" v-model="showActiveOnly">
                只显示在线用户
              </label>
            </div>

            <div class="demo-result">
              <div class="user-list">
                <div v-for="user in filteredUsers" :key="user.id" class="user-item">
                  <div class="user-avatar" :style="{ background: user.color }">
                    {{ user.name.charAt(0) }}
                  </div>
                  <div class="user-info">
                    <div class="user-name">{{ user.name }}</div>
                    <div class="user-status" :class="{ active: user.isActive }">
                      {{ user.isActive ? '🟢 在线' : '⚪ 离线' }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 综合实战 -->
      <section class="content-section practice-section">
        <h2>🎯 综合实战：购物车</h2>
        <p>让我们用 v-for 创建一个完整的购物车功能。</p>

        <div class="demo-box">
          <div class="cart-container">
            <h3>🛒 购物车</h3>

            <div class="cart-items">
              <div v-if="cartItems.length === 0" class="empty-cart">
                <div class="empty-icon">🛒</div>
                <p>购物车是空的</p>
                <button @click="addSampleItems" class="btn-primary">添加示例商品</button>
              </div>

              <div v-else>
                <div v-for="item in cartItems" :key="item.id" class="cart-item">
                  <img :src="item.image" :alt="item.name" class="item-image">
                  <div class="item-details">
                    <h4>{{ item.name }}</h4>
                    <p class="item-desc">{{ item.desc }}</p>
                    <div class="item-price">¥{{ item.price }}</div>
                  </div>
                  <div class="item-controls">
                    <button @click="decreaseQuantity(item)" class="btn-quantity">-</button>
                    <span class="quantity">{{ item.quantity }}</span>
                    <button @click="increaseQuantity(item)" class="btn-quantity">+</button>
                  </div>
                  <div class="item-total">
                    ¥{{ (item.price * item.quantity).toFixed(2) }}
                  </div>
                  <button @click="removeItem(item)" class="btn-remove">🗑️</button>
                </div>

                <div class="cart-summary">
                  <div class="summary-row">
                    <span>商品数量：</span>
                    <span>{{ totalItems }} 件</span>
                  </div>
                  <div class="summary-row total">
                    <span>总计：</span>
                    <span class="total-price">¥{{ totalPrice }}</span>
                  </div>
                  <button @click="checkout" class="btn-checkout">立即结算</button>
                  <button @click="clearCart" class="btn-clear">清空购物车</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 知识总结 -->
      <section class="content-section summary-section">
        <h2>📚 知识总结</h2>

        <div class="summary-grid">
          <div class="summary-card">
            <h4>🔑 核心要点</h4>
            <ul>
              <li>使用 <code>v-for</code> 渲染列表</li>
              <li>始终添加 <code>:key</code> 属性</li>
              <li>key 必须是唯一标识符</li>
              <li>避免使用索引作为 key</li>
            </ul>
          </div>

          <div class="summary-card">
            <h4>📖 语法格式</h4>
            <ul>
              <li><code>item in items</code></li>
              <li><code>(item, index) in items</code></li>
              <li><code>(value, key) in object</code></li>
              <li><code>(value, key, index) in object</code></li>
            </ul>
          </div>

          <div class="summary-card">
            <h4>🔧 数组方法</h4>
            <ul>
              <li>push、pop、shift、unshift</li>
              <li>splice、sort、reverse</li>
              <li>filter、map、concat</li>
              <li>计算属性返回新数组</li>
            </ul>
          </div>

          <div class="summary-card">
            <h4>⚠️ 注意事项</h4>
            <ul>
              <li>不要在同一元素上使用 v-for 和 v-if</li>
              <li>使用计算属性过滤数据</li>
              <li>避免直接修改数组索引</li>
              <li>key 要稳定且唯一</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 课程导航 -->
      <div class="lesson-nav">
        <router-link to="/lessons/vue3/lesson-4" class="nav-btn prev-btn">
          ← 上一课：条件渲染
        </router-link>
        <router-link to="/lessons/vue3/lesson-6" class="nav-btn next-btn">
          下一课：表单绑定 →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 水果列表数据
const fruits = ref([
  { name: '苹果', emoji: '🍎', price: 5 },
  { name: '香蕉', emoji: '🍌', price: 3 },
  { name: '橙子', emoji: '🍊', price: 4 },
  { name: '葡萄', emoji: '🍇', price: 8 },
  { name: '西瓜', emoji: '🍉', price: 12 }
])

// 用户信息对象
const userInfo = ref({
  姓名: '张三',
  年龄: 25,
  职位: '前端工程师',
  城市: '北京',
  邮箱: 'zhangsan@example.com'
})

// Key 演示数据
const demoItems1 = ref([
  { id: 1, name: '项目 A' },
  { id: 2, name: '项目 B' },
  { id: 3, name: '项目 C' }
])

const demoItems2 = ref([
  { id: 1, name: '项目 A' },
  { id: 2, name: '项目 B' },
  { id: 3, name: '项目 C' }
])

const shuffleDemoItems1 = () => {
  demoItems1.value = [...demoItems1.value].sort(() => Math.random() - 0.5)
}

const shuffleDemoItems2 = () => {
  demoItems2.value = [...demoItems2.value].sort(() => Math.random() - 0.5)
}

// 待办事项数据
let todoId = 4
const todos = ref([
  { id: 1, text: '学习 Vue3', completed: false },
  { id: 2, text: '完成项目', completed: true },
  { id: 3, text: '写技术博客', completed: false }
])

const addTodo = () => {
  todos.value.push({
    id: todoId++,
    text: `新任务 ${todoId}`,
    completed: false
  })
}

const removeTodo = () => {
  if (todos.value.length > 0) {
    todos.value.pop()
  }
}

const sortTodos = () => {
  todos.value.sort((a, b) => a.text.localeCompare(b.text))
}

const reverseTodos = () => {
  todos.value.reverse()
}

const toggleComplete = (todo) => {
  todo.completed = !todo.completed
}

// 用户列表筛选
const showActiveOnly = ref(false)
const users = ref([
  { id: 1, name: '张三', isActive: true, color: '#667eea' },
  { id: 2, name: '李四', isActive: false, color: '#764ba2' },
  { id: 3, name: '王五', isActive: true, color: '#f093fb' },
  { id: 4, name: '赵六', isActive: false, color: '#4facfe' },
  { id: 5, name: '钱七', isActive: true, color: '#43e97b' }
])

const filteredUsers = computed(() => {
  if (showActiveOnly.value) {
    return users.value.filter(u => u.isActive)
  }
  return users.value
})

// 购物车功能
const cartItems = ref([])

const addSampleItems = () => {
  cartItems.value = [
    {
      id: 1,
      name: 'MacBook Pro',
      desc: '14英寸 M3 芯片',
      price: 14999,
      quantity: 1,
      image: 'https://via.placeholder.com/80x80/667eea/ffffff?text=💻'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      desc: '256GB 深空黑色',
      price: 8999,
      quantity: 1,
      image: 'https://via.placeholder.com/80x80/764ba2/ffffff?text=📱'
    },
    {
      id: 3,
      name: 'AirPods Pro',
      desc: '第二代 无线降噪',
      price: 1899,
      quantity: 2,
      image: 'https://via.placeholder.com/80x80/f093fb/ffffff?text=🎧'
    }
  ]
}

const increaseQuantity = (item) => {
  item.quantity++
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  }
}

const removeItem = (item) => {
  const index = cartItems.value.findIndex(i => i.id === item.id)
  if (index > -1) {
    cartItems.value.splice(index, 1)
  }
}

const clearCart = () => {
  if (confirm('确定要清空购物车吗？')) {
    cartItems.value = []
  }
}

const checkout = () => {
  alert(`结算成功！总金额：¥${totalPrice.value}`)
}

const totalItems = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
})

const totalPrice = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
})
</script>

<style scoped>
.lesson-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  background: #f8f9fa;
}

.lesson-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 48px 40px;
  border-radius: 16px;
  margin-bottom: 32px;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.lesson-header h1 {
  margin: 0 0 12px 0;
  font-size: 36px;
}

.lesson-subtitle {
  font-size: 18px;
  opacity: 0.95;
  margin: 0 0 20px 0;
}

.lesson-meta {
  display: flex;
  gap: 24px;
  font-size: 14px;
  opacity: 0.9;
}

.content-section {
  background: white;
  padding: 32px;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.content-section h2 {
  color: #2c3e50;
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 3px solid #667eea;
}

.info-box, .warning-box, .tip-box {
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.info-box {
  background: #e3f2fd;
  border-left: 4px solid #2196F3;
}

.warning-box {
  background: #fff3e0;
  border-left: 4px solid #ff9800;
}

.tip-box {
  background: #e8f5e9;
  border-left: 4px solid #4caf50;
}

.info-box h3, .warning-box strong, .tip-box strong {
  color: #2c3e50;
  margin: 0 0 12px 0;
}

.demo-box {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  border: 2px solid #e0e0e0;
}

.demo-box h3 {
  margin: 0 0 20px 0;
  color: #667eea;
}

.demo-content {
  display: grid;
  gap: 20px;
}

.demo-result, .code-display {
  padding: 20px;
  background: white;
  border-radius: 8px;
}

.demo-result h4, .code-display h4 {
  margin: 0 0 16px 0;
  color: #2c3e50;
  font-size: 16px;
}

.fruit-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.fruit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid #eee;
  transition: background 0.2s;
}

.fruit-item:hover {
  background: #f5f5f5;
}

.fruit-item .index {
  font-weight: bold;
  color: #667eea;
  min-width: 30px;
}

.fruit-item .name {
  flex: 1;
  color: #2c3e50;
}

.fruit-item .emoji {
  font-size: 24px;
}

.fruit-item .price {
  color: #f44336;
  font-weight: bold;
}

.user-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
}

.user-card h4 {
  margin: 0 0 16px 0;
  font-size: 20px;
}

.info-grid {
  display: grid;
  gap: 12px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
}

.info-row .key {
  font-weight: bold;
  opacity: 0.9;
}

.info-row .value {
  font-weight: 600;
}

code {
  background: #f5f5f5;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Consolas', monospace;
  font-size: 14px;
  color: #e91e63;
}

pre code {
  display: block;
  padding: 16px;
  background: #2d2d2d;
  color: #f8f8f2;
  border-radius: 8px;
  overflow-x: auto;
  line-height: 1.6;
}

.comparison-box {
  margin: 24px 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.comparison-item {
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.comparison-item h4 {
  margin: 0 0 16px 0;
  color: #2c3e50;
}

.list-demo ul {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.demo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 8px;
}

.item-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-shuffle {
  padding: 8px 16px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.warning-text {
  color: #ff9800;
  font-size: 13px;
  margin: 8px 0 0 0;
}

.success-text {
  color: #4caf50;
  font-size: 13px;
  margin: 8px 0 0 0;
}

.best-practice-box {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
}

.best-practice-box h3 {
  margin: 0 0 20px 0;
  color: #2c3e50;
}

.practice-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
}

.practice-item {
  padding: 24px;
  border-radius: 12px;
  border: 3px solid;
}

.practice-item.good {
  background: #e8f5e9;
  border-color: #4caf50;
}

.practice-item.bad {
  background: #ffebee;
  border-color: #f44336;
}

.practice-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.practice-item h4 {
  margin: 0 0 12px 0;
  color: #2c3e50;
}

.practice-item p {
  margin: 12px 0 0 0;
  color: #666;
}

.demo-controls {
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary, .btn-danger, .btn-info, .btn-warning {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #2196F3;
}

.btn-danger {
  background: #f44336;
}

.btn-info {
  background: #00bcd4;
}

.btn-warning {
  background: #ff9800;
}

.btn-primary:hover {
  background: #1976D2;
}

.btn-danger:hover {
  background: #d32f2f;
}

.btn-info:hover {
  background: #0097a7;
}

.btn-warning:hover {
  background: #f57c00;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0 0;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s;
}

.todo-item:hover {
  border-color: #667eea;
  transform: translateX(4px);
}

.todo-id {
  font-weight: bold;
  color: #667eea;
  min-width: 40px;
}

.todo-text {
  flex: 1;
  color: #2c3e50;
}

.btn-toggle {
  padding: 6px 12px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.method-list {
  margin-top: 24px;
  padding: 20px;
  background: white;
  border-radius: 8px;
}

.method-list h4 {
  margin: 0 0 16px 0;
  color: #2c3e50;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
}

.method-item {
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #e0e0e0;
}

.method-item code {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: #667eea;
}

.method-item span {
  font-size: 12px;
  color: #666;
}

.user-list {
  display: grid;
  gap: 12px;
}

.user-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  transition: all 0.2s;
}

.user-item:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
}

.user-info {
  flex: 1;
}

.user-name {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.user-status {
  font-size: 13px;
  color: #999;
}

.user-status.active {
  color: #4caf50;
}

.cart-container {
  background: white;
  padding: 32px;
  border-radius: 12px;
}

.cart-container h3 {
  margin: 0 0 24px 0;
  color: #2c3e50;
  font-size: 24px;
}

.empty-cart {
  text-align: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 2px solid #e0e0e0;
  transition: all 0.2s;
}

.cart-item:hover {
  border-color: #667eea;
}

.item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}

.item-details {
  flex: 1;
}

.item-details h4 {
  margin: 0 0 6px 0;
  color: #2c3e50;
  font-size: 18px;
}

.item-desc {
  margin: 0 0 8px 0;
  color: #666;
  font-size: 14px;
}

.item-price {
  color: #f44336;
  font-weight: bold;
  font-size: 16px;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-quantity {
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

.btn-quantity:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.quantity {
  min-width: 40px;
  text-align: center;
  font-weight: 600;
  color: #2c3e50;
}

.item-total {
  min-width: 120px;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  color: #667eea;
}

.btn-remove {
  padding: 8px;
  background: #ffebee;
  border: 1px solid #f44336;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-remove:hover {
  background: #f44336;
  color: white;
}

.cart-summary {
  margin-top: 24px;
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 16px;
}

.summary-row.total {
  font-size: 24px;
  font-weight: bold;
  padding-top: 12px;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  margin-top: 12px;
}

.total-price {
  color: #fff;
  font-size: 28px;
}

.btn-checkout, .btn-clear {
  width: 100%;
  padding: 14px;
  margin-top: 12px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-checkout {
  background: white;
  color: #667eea;
}

.btn-clear {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.btn-checkout:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-clear:hover {
  background: rgba(255, 255, 255, 0.3);
}

.highlight-section {
  background: linear-gradient(135deg, #fff5f5 0%, #ffffff 100%);
  border-left: 5px solid #f44336;
}

.practice-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%);
  border: 3px solid #2196F3;
}

.summary-section {
  background: linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%);
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.summary-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  transition: all 0.2s;
}

.summary-card:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.summary-card h4 {
  margin: 0 0 16px 0;
  color: #667eea;
  font-size: 18px;
}

.summary-card ul {
  margin: 0;
  padding-left: 20px;
}

.summary-card li {
  margin: 10px 0;
  line-height: 1.6;
  color: #2c3e50;
}

.lesson-nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 48px;
}

.nav-btn {
  flex: 1;
  padding: 16px 24px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 12px;
  border: 2px solid #667eea;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s;
}

.nav-btn:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

@media (max-width: 768px) {
  .lesson-header {
    padding: 32px 24px;
  }

  .lesson-header h1 {
    font-size: 28px;
  }

  .content-section {
    padding: 20px;
  }

  .comparison-grid,
  .practice-grid {
    grid-template-columns: 1fr;
  }

  .lesson-nav {
    flex-direction: column;
  }

  .cart-item {
    flex-wrap: wrap;
  }

  .item-image {
    width: 60px;
    height: 60px;
  }
}
</style>
