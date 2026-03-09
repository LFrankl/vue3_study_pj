<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第73课：购物车应用 - 综合实战项目</h1>
      <p class="lesson-description">
        整合 Vue3 核心特性，构建一个完整的电商购物车系统，涵盖响应式、组件化、Composables、动画等所有知识点
      </p>
    </div>

    <div class="lesson-content">
      <!-- 第1部分：项目概览 -->
      <section class="content-section">
        <h2>1️⃣ 项目概览</h2>

        <div class="info-box">
          <h4>🎯 项目功能</h4>
          <ul>
            <li><strong>商品浏览：</strong>展示商品列表，支持分类筛选和搜索</li>
            <li><strong>购物车管理：</strong>添加/删除商品，调整数量</li>
            <li><strong>价格计算：</strong>实时计算小计、总计、优惠</li>
            <li><strong>本地存储：</strong>购物车数据持久化</li>
            <li><strong>动画效果：</strong>流畅的添加/删除动画</li>
            <li><strong>响应式设计：</strong>适配不同屏幕尺寸</li>
          </ul>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>🛠️ 技术栈与知识点</h3>
          <div class="demo-content">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
              <div class="info-box">
                <h4>Vue3 核心</h4>
                <ul style="margin: 0; font-size: 14px;">
                  <li>响应式系统（ref, reactive, computed）</li>
                  <li>组件通信（props, emits）</li>
                  <li>生命周期钩子</li>
                  <li>条件与列表渲染</li>
                </ul>
              </div>

              <div class="info-box">
                <h4>组合式 API</h4>
                <ul style="margin: 0; font-size: 14px;">
                  <li>Composables（useCart, useLocalStorage）</li>
                  <li>逻辑复用</li>
                  <li>watch 与 watchEffect</li>
                  <li>toRefs 响应式解构</li>
                </ul>
              </div>

              <div class="info-box">
                <h4>高级特性</h4>
                <ul style="margin: 0; font-size: 14px;">
                  <li>Transition 过渡动画</li>
                  <li>TransitionGroup 列表动画</li>
                  <li>自定义指令</li>
                  <li>插槽（Slots）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="info-box" style="margin-top: 24px;">
          <h4>📁 组件结构</h4>
          <pre v-pre style="background: var(--background-color); padding: 16px; border-radius: 6px; font-size: 13px;"><code>ShoppingCart/
├── ProductList.vue       # 商品列表组件
├── ProductCard.vue       # 商品卡片组件
├── CartPanel.vue         # 购物车面板组件
├── CartItem.vue          # 购物车项目组件
├── CheckoutSummary.vue   # 结算摘要组件
└── composables/
    ├── useCart.js        # 购物车逻辑
    ├── useLocalStorage.js # 本地存储
    └── useProducts.js    # 商品数据</code></pre>
        </div>
      </section>

      <!-- 第2部分：数据模型设计 -->
      <section class="content-section">
        <h2>2️⃣ 数据模型设计</h2>

        <div class="demo-box">
          <h3>📦 商品数据模型</h3>
          <div class="demo-content">
            <pre v-pre><code>// 商品接口定义
interface Product {
  id: number | string
  name: string
  price: number
  originalPrice?: number  // 原价（用于显示折扣）
  image: string
  category: string
  description: string
  stock: number
  rating?: number
  tags?: string[]
}

// 示例数据
const products = [
  {
    id: 1,
    name: 'Vue.js 实战课程',
    price: 299,
    originalPrice: 399,
    image: '📚',
    category: '课程',
    description: '从零基础到项目实战',
    stock: 100,
    rating: 4.9,
    tags: ['热门', '新课']
  }
]</code></pre>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>🛒 购物车数据模型</h3>
          <div class="demo-content">
            <pre v-pre><code>// 购物车项接口
interface CartItem {
  product: Product
  quantity: number
  selected: boolean  // 是否选中（用于批量操作）
}

// 购物车状态
interface CartState {
  items: CartItem[]
  total: number
  selectedTotal: number
  discount: number
}</code></pre>
          </div>
        </div>
      </section>

      <!-- 第3部分：核心 Composable - useCart -->
      <section class="content-section">
        <h2>3️⃣ 核心逻辑：useCart Composable</h2>

        <div class="demo-box">
          <h3>🧩 useCart.js 完整实现</h3>
          <div class="demo-content">
            <pre v-pre><code>// composables/useCart.js
import { ref, computed } from 'vue'

export function useCart() {
  // 购物车数据
  const cartItems = ref([])

  // 添加到购物车
  function addToCart(product) {
    const existingItem = cartItems.value.find(
      item => item.product.id === product.id
    )

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        existingItem.quantity++
        return { success: true, message: '数量 +1' }
      } else {
        return { success: false, message: '库存不足' }
      }
    } else {
      cartItems.value.push({
        product: { ...product },
        quantity: 1,
        selected: true
      })
      return { success: true, message: '已添加到购物车' }
    }
  }

  // 从购物车移除
  function removeFromCart(productId) {
    const index = cartItems.value.findIndex(
      item => item.product.id === productId
    )
    if (index > -1) {
      cartItems.value.splice(index, 1)
      return { success: true, message: '已移除' }
    }
  }

  // 更新数量
  function updateQuantity(productId, quantity) {
    const item = cartItems.value.find(
      item => item.product.id === productId
    )

    if (!item) return

    if (quantity <= 0) {
      return removeFromCart(productId)
    }

    if (quantity > item.product.stock) {
      return { success: false, message: '超出库存' }
    }

    item.quantity = quantity
    return { success: true, message: '已更新' }
  }

  // 全选/全不选
  function toggleSelectAll(selected) {
    cartItems.value.forEach(item => {
      item.selected = selected
    })
  }

  // 清空购物车
  function clearCart() {
    cartItems.value = []
  }

  // 计算属性：购物车商品数量
  const cartCount = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  // 计算属性：选中商品总价
  const selectedTotalPrice = computed(() => {
    return cartItems.value
      .filter(item => item.selected)
      .reduce((sum, item) => {
        return sum + item.product.price * item.quantity
      }, 0)
  })

  // 计算属性：节省金额
  const savedAmount = computed(() => {
    return cartItems.value.reduce((sum, item) => {
      if (item.product.originalPrice) {
        const saved = (item.product.originalPrice - item.product.price) * item.quantity
        return sum + saved
      }
      return sum
    }, 0)
  })

  // 计算属性：是否全选
  const isAllSelected = computed(() => {
    return cartItems.value.length > 0 &&
           cartItems.value.every(item => item.selected)
  })

  return {
    cartItems,
    cartCount,
    selectedTotalPrice,
    savedAmount,
    isAllSelected,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleSelectAll,
    clearCart
  }
}</code></pre>
          </div>
        </div>

        <div class="info-box" style="margin-top: 24px;">
          <h4>💡 设计要点</h4>
          <ul>
            <li><strong>响应式状态：</strong>使用 ref 管理购物车数据，自动触发 UI 更新</li>
            <li><strong>计算属性：</strong>总价、数量等派生状态使用 computed，自动缓存和更新</li>
            <li><strong>业务逻辑封装：</strong>所有购物车操作封装在 composable 中，易于复用和测试</li>
            <li><strong>错误处理：</strong>每个操作返回操作结果，便于显示提示信息</li>
          </ul>
        </div>
      </section>

      <!-- 第4部分：完整购物车应用实现 -->
      <section class="content-section">
        <h2>4️⃣ 完整应用演示</h2>

        <div class="demo-box">
          <h3>🛍️ 实时演示：完整购物车应用</h3>
          <div class="demo-content">
            <div class="shopping-app">
              <!-- 顶部统计 -->
              <div class="app-header">
                <h3 style="margin: 0; font-size: 18px;">🛒 Vue3 购物车实战</h3>
                <div class="cart-badge">
                  <span style="font-size: 24px;">🛒</span>
                  <span class="badge">{{ cartCount }}</span>
                </div>
              </div>

              <div class="app-content">
                <!-- 左侧：商品列表 -->
                <div class="products-section">
                  <div class="section-header">
                    <h4>商品列表</h4>
                    <div class="filters">
                      <select v-model="selectedCategory" class="filter-select">
                        <option value="all">全部分类</option>
                        <option value="课程">课程</option>
                        <option value="书籍">书籍</option>
                        <option value="工具">工具</option>
                      </select>
                      <input
                        v-model="searchKeyword"
                        placeholder="搜索商品..."
                        class="search-input"
                      />
                    </div>
                  </div>

                  <div class="products-grid">
                    <TransitionGroup name="product-list">
                      <div
                        v-for="product in filteredProducts"
                        :key="product.id"
                        class="product-card"
                      >
                        <div class="product-image">{{ product.image }}</div>
                        <div class="product-info">
                          <div class="product-header">
                            <h5>{{ product.name }}</h5>
                            <div class="product-tags">
                              <span
                                v-for="tag in product.tags"
                                :key="tag"
                                class="tag"
                              >{{ tag }}</span>
                            </div>
                          </div>
                          <p class="product-desc">{{ product.description }}</p>
                          <div class="product-footer">
                            <div class="price-box">
                              <span class="price">¥{{ product.price }}</span>
                              <span
                                v-if="product.originalPrice"
                                class="original-price"
                              >¥{{ product.originalPrice }}</span>
                            </div>
                            <button
                              @click="handleAddToCart(product)"
                              class="btn btn-primary btn-sm"
                              :disabled="product.stock === 0"
                            >
                              {{ product.stock > 0 ? '加入购物车' : '已售罄' }}
                            </button>
                          </div>
                          <div class="product-meta">
                            <span>⭐ {{ product.rating }}</span>
                            <span>库存：{{ product.stock }}</span>
                          </div>
                        </div>
                      </div>
                    </TransitionGroup>
                  </div>

                  <div v-if="filteredProducts.length === 0" class="empty-state">
                    <p style="font-size: 48px; margin: 0;">🔍</p>
                    <p style="margin: 12px 0 0 0; color: var(--text-secondary);">
                      没有找到相关商品
                    </p>
                  </div>
                </div>

                <!-- 右侧：购物车 -->
                <div class="cart-section">
                  <div class="section-header">
                    <h4>购物车 ({{ cartCount }})</h4>
                    <button
                      v-if="cartItems.length > 0"
                      @click="clearCart"
                      class="btn btn-outline btn-sm"
                    >
                      清空
                    </button>
                  </div>

                  <div v-if="cartItems.length === 0" class="empty-cart">
                    <p style="font-size: 64px; margin: 0;">🛒</p>
                    <p style="margin: 16px 0 0 0; color: var(--text-secondary);">
                      购物车是空的
                    </p>
                    <p style="margin: 8px 0 0 0; font-size: 14px; color: var(--text-secondary);">
                      快去挑选商品吧！
                    </p>
                  </div>

                  <div v-else class="cart-list">
                    <TransitionGroup name="cart-list">
                      <div
                        v-for="item in cartItems"
                        :key="item.product.id"
                        class="cart-item"
                        :class="{ 'cart-item-selected': item.selected }"
                      >
                        <input
                          type="checkbox"
                          v-model="item.selected"
                          class="item-checkbox"
                        />

                        <div class="item-image">{{ item.product.image }}</div>

                        <div class="item-info">
                          <h5>{{ item.product.name }}</h5>
                          <p class="item-price">¥{{ item.product.price }}</p>
                        </div>

                        <div class="item-controls">
                          <div class="quantity-control">
                            <button
                              @click="updateQuantity(item.product.id, item.quantity - 1)"
                              class="qty-btn"
                              :disabled="item.quantity <= 1"
                            >-</button>
                            <input
                              type="number"
                              v-model.number="item.quantity"
                              @change="updateQuantity(item.product.id, item.quantity)"
                              min="1"
                              :max="item.product.stock"
                              class="qty-input"
                            />
                            <button
                              @click="updateQuantity(item.product.id, item.quantity + 1)"
                              class="qty-btn"
                              :disabled="item.quantity >= item.product.stock"
                            >+</button>
                          </div>

                          <button
                            @click="removeFromCart(item.product.id)"
                            class="remove-btn"
                            title="删除"
                          >🗑️</button>
                        </div>

                        <div class="item-subtotal">
                          <p>小计</p>
                          <p class="subtotal-price">
                            ¥{{ (item.product.price * item.quantity).toFixed(2) }}
                          </p>
                        </div>
                      </div>
                    </TransitionGroup>
                  </div>

                  <!-- 购物车底部：结算区 -->
                  <div v-if="cartItems.length > 0" class="cart-footer">
                    <div class="select-all">
                      <input
                        type="checkbox"
                        :checked="isAllSelected"
                        @change="toggleSelectAll($event.target.checked)"
                      />
                      <span>全选</span>
                    </div>

                    <div class="checkout-summary">
                      <div class="summary-row">
                        <span>商品总价：</span>
                        <span>¥{{ selectedTotalPrice.toFixed(2) }}</span>
                      </div>
                      <div v-if="savedAmount > 0" class="summary-row discount">
                        <span>已优惠：</span>
                        <span>-¥{{ savedAmount.toFixed(2) }}</span>
                      </div>
                      <div class="summary-row total">
                        <span>应付总额：</span>
                        <span class="total-price">¥{{ selectedTotalPrice.toFixed(2) }}</span>
                      </div>
                    </div>

                    <button
                      @click="handleCheckout"
                      class="btn btn-primary btn-block"
                    >
                      去结算
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 提示消息 -->
        <Transition name="toast">
          <div v-if="toastMessage" class="toast-message">
            {{ toastMessage }}
          </div>
        </Transition>
      </section>

      <!-- 第5部分：关键代码详解 -->
      <section class="content-section">
        <h2>5️⃣ 关键代码详解</h2>

        <div class="demo-box">
          <h3>🎨 过渡动画实现</h3>
          <div class="demo-content">
            <pre v-pre><code>&lt;TransitionGroup name="product-list"&gt;
  &lt;div v-for="product in filteredProducts" :key="product.id"&gt;
    &lt;!-- 商品卡片 --&gt;
  &lt;/div&gt;
&lt;/TransitionGroup&gt;

&lt;style&gt;
.product-list-enter-active,
.product-list-leave-active {
  transition: all 0.3s ease;
}

.product-list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.product-list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
&lt;/style&gt;</code></pre>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>🔍 商品筛选与搜索</h3>
          <div class="demo-content">
            <pre v-pre><code>const selectedCategory = ref('all')
const searchKeyword = ref('')

const filteredProducts = computed(() => {
  let result = products.value

  // 分类筛选
  if (selectedCategory.value !== 'all') {
    result = result.filter(p => p.category === selectedCategory.value)
  }

  // 关键词搜索
  if (searchKeyword.value.trim()) {
    const keyword = searchKeyword.value.toLowerCase()
    result = result.filter(p =>
      p.name.toLowerCase().includes(keyword) ||
      p.description.toLowerCase().includes(keyword)
    )
  }

  return result
})</code></pre>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>💰 价格计算逻辑</h3>
          <div class="demo-content">
            <pre v-pre><code>// 选中商品总价
const selectedTotalPrice = computed(() => {
  return cartItems.value
    .filter(item => item.selected)
    .reduce((sum, item) => {
      return sum + item.product.price * item.quantity
    }, 0)
})

// 节省金额
const savedAmount = computed(() => {
  return cartItems.value.reduce((sum, item) => {
    if (item.product.originalPrice) {
      const saved = (item.product.originalPrice - item.product.price) * item.quantity
      return sum + saved
    }
    return sum
  }, 0)
})</code></pre>
          </div>
        </div>
      </section>

      <!-- 第6部分：性能优化 -->
      <section class="content-section">
        <h2>6️⃣ 性能优化技巧</h2>

        <div class="demo-box">
          <h3>⚡ 计算属性缓存</h3>
          <div class="demo-content">
            <div class="comparison-grid">
              <div class="comparison-item">
                <h4>❌ 使用方法</h4>
                <pre v-pre><code>function getTotalPrice() {
  return cartItems.value.reduce(...)
}

// 每次渲染都会调用
&lt;div&gt;{{ getTotalPrice() }}&lt;/div&gt;</code></pre>
              </div>

              <div class="comparison-item highlight">
                <h4>✅ 使用计算属性</h4>
                <pre v-pre><code>const totalPrice = computed(() => {
  return cartItems.value.reduce(...)
})

// 只有依赖变化才重新计算
&lt;div&gt;{{ totalPrice }}&lt;/div&gt;</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h3>⚡ 列表渲染优化</h3>
          <div class="demo-content">
            <div class="info-box">
              <pre v-pre><code>&lt;!-- ✅ 使用唯一 key --&gt;
&lt;div v-for="item in cartItems" :key="item.product.id"&gt;
  &lt;!-- 商品内容 --&gt;
&lt;/div&gt;

&lt;!-- ❌ 不要使用 index 作为 key --&gt;
&lt;div v-for="(item, index) in cartItems" :key="index"&gt;
  &lt;!-- 删除、排序时会出问题 --&gt;
&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 第7部分：总结 -->
      <section class="content-section">
        <h2>7️⃣ 知识点总结</h2>

        <div class="demo-box">
          <h3>📚 本项目涵盖的核心知识点</h3>
          <div class="demo-content">
            <table class="knowledge-table">
              <thead>
                <tr>
                  <th>分类</th>
                  <th>知识点</th>
                  <th>应用场景</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="3"><strong>响应式系统</strong></td>
                  <td>ref / reactive</td>
                  <td>购物车数据、商品列表管理</td>
                </tr>
                <tr>
                  <td>computed</td>
                  <td>总价、数量、筛选结果计算</td>
                </tr>
                <tr>
                  <td>watch</td>
                  <td>数据变化监听、本地存储同步</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>指令系统</strong></td>
                  <td>v-for / v-if / v-show</td>
                  <td>列表渲染、条件显示</td>
                </tr>
                <tr>
                  <td>v-model</td>
                  <td>表单双向绑定、数量输入</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>动画效果</strong></td>
                  <td>Transition</td>
                  <td>提示消息的淡入淡出</td>
                </tr>
                <tr>
                  <td>TransitionGroup</td>
                  <td>商品列表、购物车项动画</td>
                </tr>
                <tr>
                  <td><strong>Composables</strong></td>
                  <td>useCart</td>
                  <td>购物车逻辑封装</td>
                </tr>
                <tr>
                  <td><strong>性能优化</strong></td>
                  <td>computed 缓存</td>
                  <td>避免重复计算</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="key-points-box" style="margin-top: 24px;">
          <h4>🎯 核心要点</h4>
          <ul>
            <li>使用 <strong>Composables</strong> 封装业务逻辑，实现代码复用和关注点分离</li>
            <li>利用 <strong>computed</strong> 实现派生状态的自动更新和缓存优化</li>
            <li>通过 <strong>TransitionGroup</strong> 为列表添加流畅的进入/离开/移动动画</li>
            <li>合理使用 <strong>v-if</strong> 和 <strong>v-show</strong> 优化渲染性能</li>
            <li>为列表渲染提供<strong>唯一 key</strong>，确保 Vue 正确追踪节点</li>
            <li>组件化设计：将功能拆分成独立、可复用的组件</li>
            <li>响应式数据流：数据变化自动驱动 UI 更新</li>
            <li>用户体验：添加加载状态、错误提示、操作反馈</li>
          </ul>
        </div>

        <div class="info-box" style="margin-top: 24px;">
          <h4>🎉 恭喜你完成了 Vue3 学习之旅！</h4>
          <p style="margin: 12px 0;">
            通过这个购物车项目，你已经掌握了 Vue3 的核心特性和最佳实践。从响应式系统、组件化开发，到 Composition API 和性能优化，这些知识将帮助你构建更复杂的实际应用。
          </p>
          <p style="margin: 12px 0;">
            <strong>下一步建议：</strong>
          </p>
          <ul style="margin: 8px 0;">
            <li>学习 <strong>Pinia</strong> 状态管理（Vue3 官方推荐）</li>
            <li>学习 <strong>Vue Router</strong> 高级用法（路由守卫、懒加载）</li>
            <li>学习 <strong>TypeScript</strong> 增强类型安全</li>
            <li>尝试构建更复杂的项目（博客、后台管理系统等）</li>
            <li>了解 <strong>Vite</strong> 构建优化和部署</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// ============ 模拟商品数据 ============
const products = ref([
  {
    id: 1,
    name: 'Vue3 实战课程',
    price: 299,
    originalPrice: 399,
    image: '📚',
    category: '课程',
    description: '从零基础到项目实战',
    stock: 50,
    rating: 4.9,
    tags: ['热门', '新课']
  },
  {
    id: 2,
    name: 'JavaScript 高级编程',
    price: 89,
    originalPrice: 129,
    image: '📘',
    category: '书籍',
    description: '深入理解 JS 核心原理',
    stock: 30,
    rating: 4.8,
    tags: ['经典']
  },
  {
    id: 3,
    name: 'TypeScript 入门',
    price: 199,
    originalPrice: null,
    image: '📗',
    category: '课程',
    description: '类型安全的 JavaScript',
    stock: 100,
    rating: 4.7,
    tags: ['推荐']
  },
  {
    id: 4,
    name: 'Vite 构建工具',
    price: 149,
    originalPrice: 199,
    image: '⚡',
    category: '工具',
    description: '极速的前端构建工具',
    stock: 80,
    rating: 4.9,
    tags: ['热门']
  },
  {
    id: 5,
    name: 'Pinia 状态管理',
    price: 99,
    originalPrice: null,
    image: '🍍',
    category: '课程',
    description: 'Vue3 官方推荐状态库',
    stock: 60,
    rating: 4.6,
    tags: ['新课']
  },
  {
    id: 6,
    name: 'CSS 实战指南',
    price: 79,
    originalPrice: 99,
    image: '🎨',
    category: '书籍',
    description: '现代 CSS 布局与动画',
    stock: 40,
    rating: 4.5,
    tags: []
  }
])

// ============ 筛选与搜索 ============
const selectedCategory = ref('all')
const searchKeyword = ref('')

const filteredProducts = computed(() => {
  let result = products.value

  if (selectedCategory.value !== 'all') {
    result = result.filter(p => p.category === selectedCategory.value)
  }

  if (searchKeyword.value.trim()) {
    const keyword = searchKeyword.value.toLowerCase()
    result = result.filter(p =>
      p.name.toLowerCase().includes(keyword) ||
      p.description.toLowerCase().includes(keyword)
    )
  }

  return result
})

// ============ 购物车状态 ============
const cartItems = ref([])
const toastMessage = ref('')

// 购物车数量
const cartCount = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
})

// 选中商品总价
const selectedTotalPrice = computed(() => {
  return cartItems.value
    .filter(item => item.selected)
    .reduce((sum, item) => {
      return sum + item.product.price * item.quantity
    }, 0)
})

// 节省金额
const savedAmount = computed(() => {
  return cartItems.value.reduce((sum, item) => {
    if (item.product.originalPrice) {
      const saved = (item.product.originalPrice - item.product.price) * item.quantity
      return sum + saved
    }
    return sum
  }, 0)
})

// 是否全选
const isAllSelected = computed(() => {
  return cartItems.value.length > 0 && cartItems.value.every(item => item.selected)
})

// ============ 购物车操作 ============
function handleAddToCart(product) {
  const existingItem = cartItems.value.find(item => item.product.id === product.id)

  if (existingItem) {
    if (existingItem.quantity < product.stock) {
      existingItem.quantity++
      showToast('数量 +1')
    } else {
      showToast('库存不足')
    }
  } else {
    cartItems.value.push({
      product: { ...product },
      quantity: 1,
      selected: true
    })
    showToast('已添加到购物车')
  }
}

function removeFromCart(productId) {
  const index = cartItems.value.findIndex(item => item.product.id === productId)
  if (index > -1) {
    cartItems.value.splice(index, 1)
    showToast('已移除')
  }
}

function updateQuantity(productId, quantity) {
  const item = cartItems.value.find(item => item.product.id === productId)

  if (!item) return

  if (quantity <= 0) {
    removeFromCart(productId)
    return
  }

  if (quantity > item.product.stock) {
    showToast('超出库存')
    return
  }

  item.quantity = quantity
}

function toggleSelectAll(selected) {
  cartItems.value.forEach(item => {
    item.selected = selected
  })
}

function clearCart() {
  if (confirm('确定要清空购物车吗？')) {
    cartItems.value = []
    showToast('已清空购物车')
  }
}

function handleCheckout() {
  const selectedItems = cartItems.value.filter(item => item.selected)
  if (selectedItems.length === 0) {
    showToast('请选择要结算的商品')
    return
  }
  showToast(`准备结算 ${selectedItems.length} 件商品，总计 ¥${selectedTotalPrice.value.toFixed(2)}`)
}

// ============ 工具方法 ============
function showToast(message) {
  toastMessage.value = message
  setTimeout(() => {
    toastMessage.value = ''
  }, 2000)
}
</script>

<style scoped>
/* 购物应用布局 */
.shopping-app {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.cart-badge {
  position: relative;
}

.cart-badge .badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4757;
  color: white;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: 600;
  min-width: 18px;
  text-align: center;
}

.app-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0;
  min-height: 600px;
}

/* 商品区域 */
.products-section {
  padding: 24px;
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
  max-height: 600px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.filters {
  display: flex;
  gap: 12px;
}

.filter-select,
.search-input {
  padding: 6px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
}

.search-input {
  width: 200px;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-blue);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

/* 商品卡片 */
.product-card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;
  transition: all 0.2s;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.product-image {
  font-size: 48px;
  text-align: center;
  margin-bottom: 12px;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.product-header h5 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  flex: 1;
}

.product-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.tag {
  background: var(--error-bg);
  color: var(--error-red);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}

.product-desc {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.price-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price {
  font-size: 18px;
  font-weight: 700;
  color: var(--error-red);
}

.original-price {
  font-size: 13px;
  color: var(--text-secondary);
  text-decoration: line-through;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 8px;
}

/* 购物车区域 */
.cart-section {
  display: flex;
  flex-direction: column;
  background: var(--background-color);
  overflow: hidden;
}

.cart-list {
  flex: 1;
  overflow-y: auto;
  padding: 0 16px;
  max-height: 400px;
}

.cart-item {
  display: grid;
  grid-template-columns: auto 60px 1fr auto auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background: white;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.cart-item-selected {
  border-color: var(--primary-blue);
  background: rgba(66, 133, 244, 0.02);
}

.item-checkbox {
  cursor: pointer;
}

.item-image {
  font-size: 36px;
}

.item-info h5 {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
}

.item-price {
  margin: 0;
  font-size: 13px;
  color: var(--error-red);
  font-weight: 600;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  overflow: hidden;
}

.qty-btn {
  width: 28px;
  height: 28px;
  border: none;
  background: white;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

.qty-btn:hover:not(:disabled) {
  background: var(--background-color);
}

.qty-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.qty-input {
  width: 45px;
  text-align: center;
  border: none;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  padding: 4px;
  font-size: 14px;
}

.qty-input:focus {
  outline: none;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.remove-btn:hover {
  opacity: 1;
}

.item-subtotal {
  text-align: right;
}

.item-subtotal p {
  margin: 0;
  font-size: 12px;
  color: var(--text-secondary);
}

.subtotal-price {
  font-size: 15px !important;
  color: var(--error-red) !important;
  font-weight: 600 !important;
}

/* 空状态 */
.empty-state,
.empty-cart {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-secondary);
}

/* 购物车底部 */
.cart-footer {
  padding: 16px;
  background: white;
  border-top: 1px solid var(--border-color);
}

.select-all {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-color);
}

.select-all input {
  cursor: pointer;
}

.checkout-summary {
  margin-bottom: 16px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.summary-row.discount {
  color: var(--error-red);
}

.summary-row.total {
  font-size: 16px;
  font-weight: 600;
  padding-top: 8px;
  border-top: 1px solid var(--border-color);
}

.total-price {
  font-size: 20px;
  color: var(--error-red);
}

/* 动画效果 */
.product-list-enter-active,
.product-list-leave-active {
  transition: all 0.3s ease;
}

.product-list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.product-list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.product-list-move {
  transition: transform 0.3s ease;
}

.cart-list-enter-active,
.cart-list-leave-active {
  transition: all 0.3s ease;
}

.cart-list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.cart-list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.cart-list-move {
  transition: transform 0.3s ease;
}

/* 提示消息 */
.toast-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 14px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

/* 知识点表格 */
.knowledge-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.knowledge-table th,
.knowledge-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.knowledge-table th {
  background: var(--background-color);
  font-weight: 600;
}

.knowledge-table tbody tr:hover {
  background: var(--background-color);
}

.knowledge-table tbody tr:last-child td {
  border-bottom: none;
}

/* 对比网格 */
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

/* 核心要点框 */
.key-points-box {
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
