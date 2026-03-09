<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第62课：插槽（Slots）</h1>
      <p class="lesson-subtitle">学习如何使用插槽向组件传递内容，实现灵活的组件复用</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 30 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <div class="lesson-content">
      <!-- 1. 什么是插槽 -->
      <section class="content-section">
        <h2>1️⃣ 什么是插槽？</h2>
        <p>插槽（Slot）是 Vue 组件的内容分发机制，允许我们向组件传递任意内容。</p>

        <div class="info-box">
          <h3>插槽的优势</h3>
          <ul>
            <li>让组件接收动态内容，而不仅仅是数据</li>
            <li>同一组件可以展示不同的内容结构</li>
            <li>方便将多个组件组合在一起</li>
            <li>封装通用布局，内容由使用者提供</li>
          </ul>
        </div>

        <div class="demo-box">
          <h3>🎯 概念对比</h3>
          <div class="demo-content">
            <div class="comparison-grid">
              <div class="comparison-item">
                <h4>使用 Props 传递数据</h4>
                <div class="code-example">
                  <pre v-pre><code>&lt;UserCard
  name="张三"
  role="工程师"
/&gt;

// 组件只能按固定格式显示</code></pre>
                </div>
              </div>

              <div class="comparison-item">
                <h4>使用插槽传递内容</h4>
                <div class="code-example">
                  <pre v-pre><code>&lt;UserCard&gt;
  &lt;h3&gt;张三&lt;/h3&gt;
  &lt;p&gt;工程师&lt;/p&gt;
  &lt;button&gt;查看详情&lt;/button&gt;
&lt;/UserCard&gt;

// 可以传递任意 HTML 结构</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. 默认插槽 -->
      <section class="content-section">
        <h2>2️⃣ 默认插槽</h2>
        <p>最简单的插槽形式，组件标签之间的内容会被插入到 &lt;slot&gt; 标签的位置。</p>

        <div class="info-box">
          <h3>基本语法</h3>
          <pre v-pre><code>&lt;!-- 子组件定义 --&gt;
&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;slot&gt;&lt;/slot&gt;  &lt;!-- 插槽出口 --&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- 父组件使用 --&gt;
&lt;Card&gt;
  &lt;h3&gt;标题&lt;/h3&gt;
  &lt;p&gt;这是卡片内容&lt;/p&gt;
&lt;/Card&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：不同内容的卡片</h3>
          <div class="demo-content">
            <div class="slot-cards-grid">
              <div class="slot-card card-purple">
                <h3>欢迎使用</h3>
                <p>这是使用默认插槽的卡片内容</p>
              </div>

              <div class="slot-card card-pink">
                <h3>消息通知</h3>
                <p>你有 3 条新消息</p>
                <button class="slot-btn">查看</button>
              </div>

              <div class="slot-card card-blue">
                <div class="slot-icon">💡</div>
                <p>创意想法</p>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- 三个不同内容，但使用同一个 Card 组件 --&gt;
&lt;Card&gt;
  &lt;h3&gt;欢迎使用&lt;/h3&gt;
  &lt;p&gt;这是使用默认插槽的卡片内容&lt;/p&gt;
&lt;/Card&gt;

&lt;Card&gt;
  &lt;h3&gt;消息通知&lt;/h3&gt;
  &lt;p&gt;你有 3 条新消息&lt;/p&gt;
  &lt;button&gt;查看&lt;/button&gt;
&lt;/Card&gt;

&lt;Card&gt;
  &lt;div class="icon"&gt;💡&lt;/div&gt;
  &lt;p&gt;创意想法&lt;/p&gt;
&lt;/Card&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. 具名插槽 -->
      <section class="content-section">
        <h2>3️⃣ 具名插槽</h2>
        <p>当需要多个插槽时，可以使用具名插槽。每个插槽可以有自己的名字。</p>

        <div class="info-box">
          <h3>基本语法</h3>
          <pre v-pre><code>&lt;!-- 子组件定义 --&gt;
&lt;template&gt;
  &lt;div class="page"&gt;
    &lt;header&gt;
      &lt;slot name="header"&gt;&lt;/slot&gt;
    &lt;/header&gt;
    &lt;main&gt;
      &lt;slot&gt;&lt;/slot&gt;  &lt;!-- 默认插槽 --&gt;
    &lt;/main&gt;
    &lt;footer&gt;
      &lt;slot name="footer"&gt;&lt;/slot&gt;
    &lt;/footer&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- 父组件使用 (#header 是 v-slot:header 的简写) --&gt;
&lt;PageLayout&gt;
  &lt;template #header&gt;
    &lt;h1&gt;页面标题&lt;/h1&gt;
  &lt;/template&gt;

  &lt;p&gt;这是主要内容&lt;/p&gt;

  &lt;template #footer&gt;
    &lt;p&gt;版权信息&lt;/p&gt;
  &lt;/template&gt;
&lt;/PageLayout&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：页面布局</h3>
          <div class="demo-content">
            <div class="layout-demo-box">
              <div class="layout-demo-header">
                <h3>{{ layoutTitle }}</h3>
              </div>
              <div class="layout-demo-body">
                <div class="layout-demo-sidebar">
                  <h4>侧边栏</h4>
                  <ul>
                    <li>导航 1</li>
                    <li>导航 2</li>
                    <li>导航 3</li>
                  </ul>
                </div>
                <div class="layout-demo-main">
                  <h4>主要内容</h4>
                  <p>这是主要内容区域，演示了具名插槽的布局能力。</p>
                </div>
              </div>
              <div class="layout-demo-footer">
                © 2024 前端学习平台
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;PageLayout&gt;
  &lt;template #header&gt;
    &lt;h3&gt;Dashboard&lt;/h3&gt;
  &lt;/template&gt;

  &lt;template #sidebar&gt;
    &lt;ul&gt;
      &lt;li&gt;导航 1&lt;/li&gt;
      &lt;li&gt;导航 2&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/template&gt;

  &lt;template #default&gt;
    &lt;p&gt;主要内容&lt;/p&gt;
  &lt;/template&gt;

  &lt;template #footer&gt;
    &lt;p&gt;© 2024&lt;/p&gt;
  &lt;/template&gt;
&lt;/PageLayout&gt;</code></pre>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：对话框组件</h3>
          <div class="demo-content">
            <div class="button-group">
              <button @click="showDialog = true" class="btn btn-primary">
                打开对话框
              </button>
            </div>

            <!-- 对话框 -->
            <div v-if="showDialog" class="dialog-overlay" @click="showDialog = false">
              <div class="dialog-box" @click.stop>
                <div class="dialog-header">
                  <h3>📢 提示</h3>
                  <button class="dialog-close" @click="showDialog = false">×</button>
                </div>
                <div class="dialog-body">
                  <p>这是一个使用具名插槽实现的对话框。</p>
                  <p>header、body、footer 都是具名插槽。</p>
                </div>
                <div class="dialog-footer">
                  <button @click="showDialog = false" class="btn btn-secondary">取消</button>
                  <button @click="handleConfirm" class="btn btn-primary">确定</button>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;Dialog v-model="visible"&gt;
  &lt;template #header&gt;
    &lt;h3&gt;提示&lt;/h3&gt;
  &lt;/template&gt;

  &lt;template #body&gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/template&gt;

  &lt;template #footer&gt;
    &lt;button&gt;取消&lt;/button&gt;
    &lt;button&gt;确定&lt;/button&gt;
  &lt;/template&gt;
&lt;/Dialog&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. 作用域插槽 -->
      <section class="content-section">
        <h2>4️⃣ 作用域插槽</h2>
        <p>作用域插槽允许子组件向插槽传递数据，让父组件可以访问子组件的数据。</p>

        <div class="info-box">
          <h3>作用域插槽语法</h3>
          <pre v-pre><code>&lt;!-- 子组件：传递数据给插槽 --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;slot :user="currentUser" :count="itemCount"&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const currentUser = ref({ name: '张三', age: 25 })
const itemCount = ref(10)
&lt;/script&gt;

&lt;!-- 父组件：接收子组件数据 --&gt;
&lt;MyComponent&gt;
  &lt;template #default="slotProps"&gt;
    &lt;p&gt;用户：{{ slotProps.user.name }}&lt;/p&gt;
    &lt;p&gt;数量：{{ slotProps.count }}&lt;/p&gt;
  &lt;/template&gt;
&lt;/MyComponent&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：用户列表（不同渲染方式）</h3>
          <div class="demo-content">
            <div class="scope-demo">
              <h4>方式 1：卡片视图</h4>
              <div class="user-cards-grid">
                <div v-for="user in users" :key="user.id" class="user-card-item">
                  <div class="user-avatar">{{ user.avatar }}</div>
                  <div class="user-info">
                    <h5>{{ user.name }}</h5>
                    <p>{{ user.role }}</p>
                    <span class="user-badge">{{ user.level }}</span>
                  </div>
                </div>
              </div>

              <h4>方式 2：表格视图</h4>
              <table class="user-table-demo">
                <thead>
                  <tr>
                    <th>头像</th>
                    <th>姓名</th>
                    <th>职位</th>
                    <th>等级</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.avatar }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.role }}</td>
                    <td><span class="user-badge">{{ user.level }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- UserList 组件提供数据 --&gt;
&lt;UserList :users="users"&gt;
  &lt;!-- 方式1：卡片渲染 --&gt;
  &lt;template #default="{ user }"&gt;
    &lt;div class="user-card"&gt;
      &lt;h4&gt;{{ user.name }}&lt;/h4&gt;
      &lt;p&gt;{{ user.role }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/UserList&gt;

&lt;UserList :users="users"&gt;
  &lt;!-- 方式2：表格渲染 --&gt;
  &lt;template #default="{ user }"&gt;
    &lt;tr&gt;
      &lt;td&gt;{{ user.name }}&lt;/td&gt;
      &lt;td&gt;{{ user.role }}&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/template&gt;
&lt;/UserList&gt;</code></pre>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 实践：动态表格</h3>
          <div class="demo-content">
            <div class="table-controls">
              <label class="checkbox-label">
                <input type="checkbox" v-model="showStatus" />
                <span>显示状态</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" v-model="showActions" />
                <span>显示操作</span>
              </label>
            </div>

            <table class="dynamic-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>产品名称</th>
                  <th>价格</th>
                  <th v-if="showStatus">状态</th>
                  <th v-if="showActions">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>¥{{ product.price }}</td>
                  <td v-if="showStatus">
                    <span :class="product.status === 'available' ? 'badge-success' : 'badge-error'">
                      {{ product.status === 'available' ? '有货' : '缺货' }}
                    </span>
                  </td>
                  <td v-if="showActions">
                    <button class="btn btn-sm">编辑</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="code-example">
              <pre v-pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;ID&lt;/th&gt;
      &lt;th&gt;产品名称&lt;/th&gt;
      &lt;th&gt;价格&lt;/th&gt;
      &lt;th v-if="showStatus"&gt;状态&lt;/th&gt;
      &lt;th v-if="showActions"&gt;操作&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr v-for="product in products" :key="product.id"&gt;
      &lt;!-- 根据配置动态显示列 --&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. 知识总结 -->
      <section class="content-section">
        <h2>📚 知识总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>💡 核心概念</h3>
            <ul>
              <li><strong>默认插槽：</strong>最简单形式，直接在组件标签间传递内容</li>
              <li><strong>具名插槽：</strong>使用 name 属性命名，支持多个插槽</li>
              <li><strong>作用域插槽：</strong>子组件传递数据，父组件控制渲染</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🎯 使用场景</h3>
            <ul>
              <li>布局组件（页面、卡片、对话框）</li>
              <li>容器组件（列表、表格、网格）</li>
              <li>需要自定义渲染的组件</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>✨ 最佳实践</h3>
            <ul>
              <li>为插槽提供默认内容</li>
              <li>使用具名插槽组织复杂布局</li>
              <li>给插槽起有意义的名字</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 下一课预告 -->
      <section class="content-section next-lesson-preview">
        <h2>🎯 下一课预告</h2>
        <div class="next-lesson-card">
          <h3>第63课：生命周期</h3>
          <p>学习 Vue3 组件的生命周期钩子，掌握组件从创建到销毁的整个过程。</p>
          <ul>
            <li>⚡ 生命周期钩子函数</li>
            <li>🔄 Composition API 生命周期</li>
            <li>📊 生命周期执行顺序</li>
            <li>💡 实际应用场景</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 布局标题
const layoutTitle = ref('Dashboard')

// 对话框状态
const showDialog = ref(false)

const handleConfirm = () => {
  alert('已确认')
  showDialog.value = false
}

// 用户数据
const users = ref([
  { id: 1, name: '张三', role: '前端工程师', avatar: '👨‍💻', level: 'Senior' },
  { id: 2, name: '李四', role: '后端工程师', avatar: '👩‍💻', level: 'Junior' },
  { id: 3, name: '王五', role: 'UI 设计师', avatar: '🎨', level: 'Mid' },
  { id: 4, name: '赵六', role: '产品经理', avatar: '📊', level: 'Senior' }
])

// 动态表格
const showActions = ref(true)
const showStatus = ref(true)

const products = ref([
  { id: 1, name: 'Vue3 教程', price: 99, status: 'available' },
  { id: 2, name: 'React 指南', price: 89, status: 'available' },
  { id: 3, name: 'TypeScript 手册', price: 79, status: 'out-of-stock' },
  { id: 4, name: 'Node.js 实战', price: 109, status: 'available' }
])
</script>

<style scoped>
/* 基础样式继承自全局样式 */

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

/* 增强内容区块 */
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

/* 对比网格 */
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.comparison-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.comparison-item:hover {
  border-color: #4285f4;
  background: white;
  box-shadow: 0 4px 16px rgba(66,133,244,0.1);
}

.comparison-item h4 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #4285f4;
  font-size: 18px;
}

/* 插槽卡片网格 */
.slot-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.slot-card {
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  color: white;
  transition: all 0.3s ease;
}

.slot-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.slot-card h3 {
  margin-top: 0;
  margin-bottom: 12px;
  color: white;
  font-size: 20px;
}

.slot-card p {
  margin: 8px 0;
  opacity: 0.95;
  line-height: 1.6;
}

.card-purple {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-pink {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.card-blue {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  text-align: center;
}

.slot-icon {
  font-size: 56px;
  margin-bottom: 12px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.slot-btn {
  margin-top: 12px;
  padding: 10px 20px;
  background: white;
  color: #f5576c;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.slot-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* 增强 demo-box 和 info-box */
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
  display: flex;
  align-items: center;
  gap: 8px;
}

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

/* 增强代码示例 */
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

/* 演示内容区域 */
.demo-content {
  margin-top: 16px;
}

/* 按钮增强 */
.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

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

/* 布局演示 */
.layout-demo-box {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
}

.layout-demo-box:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.layout-demo-header {
  background: linear-gradient(135deg, #4285f4 0%, #1a73e8 100%);
  color: white;
  padding: 24px;
}

.layout-demo-header h3 {
  margin: 0;
  font-size: 20px;
}

.layout-demo-body {
  display: flex;
  min-height: 200px;
}

.layout-demo-sidebar {
  width: 200px;
  background: #f5f5f5;
  padding: 16px;
  border-right: 2px solid #e0e0e0;
}

.layout-demo-sidebar h4 {
  margin-top: 0;
}

.layout-demo-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.layout-demo-sidebar li {
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

.layout-demo-main {
  flex: 1;
  padding: 20px;
}

.layout-demo-main h4 {
  margin-top: 0;
}

.layout-demo-footer {
  background: #f5f5f5;
  padding: 16px;
  border-top: 2px solid #e0e0e0;
  text-align: center;
  font-size: 14px;
}

/* 对话框 */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dialog-box {
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 48px rgba(0,0,0,0.3);
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow: auto;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #e0e0e0;
}

.dialog-header h3 {
  margin: 0;
}

.dialog-close {
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.2s;
}

.dialog-close:hover {
  background: #f0f0f0;
}

.dialog-body {
  padding: 24px 20px;
}

.dialog-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 16px 20px;
  border-top: 2px solid #e0e0e0;
}

/* 用户卡片 */
.user-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.user-card-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.2s;
}

.user-card-item:hover {
  border-color: #4285f4;
  box-shadow: 0 2px 8px rgba(66,133,244,0.1);
}

.user-avatar {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background: #f5f5f5;
  border-radius: 50%;
  flex-shrink: 0;
}

.user-info h5 {
  margin: 0 0 4px 0;
  font-size: 16px;
}

.user-info p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.user-badge {
  display: inline-block;
  padding: 4px 8px;
  background: #4285f4;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  margin-top: 4px;
}

/* 表格 */
.user-table-demo,
.dynamic-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  margin-top: 16px;
}

.user-table-demo th,
.user-table-demo td,
.dynamic-table th,
.dynamic-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.user-table-demo th,
.dynamic-table th {
  background: #f5f5f5;
  font-weight: 600;
}

.user-table-demo tbody tr:hover,
.dynamic-table tbody tr:hover {
  background: #f9f9f9;
}

/* 表格控制 */
.table-controls {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  cursor: pointer;
}

/* 状态徽章 */
.badge-success {
  display: inline-block;
  padding: 4px 8px;
  background: #e6f4ea;
  color: #34a853;
  border-radius: 4px;
  font-size: 12px;
}

.badge-error {
  display: inline-block;
  padding: 4px 8px;
  background: #fce8e6;
  color: #ea4335;
  border-radius: 4px;
  font-size: 12px;
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

.scope-demo h4 {
  margin-top: 32px;
  margin-bottom: 16px;
  color: #1a73e8;
  font-size: 18px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e8eaed;
}

.scope-demo h4:first-child {
  margin-top: 0;
}

/* 增强段落 */
.content-section > p {
  font-size: 16px;
  line-height: 1.8;
  color: #5f6368;
  margin-bottom: 20px;
}

/* 响应式 */
@media (max-width: 768px) {
  .comparison-grid,
  .slot-cards-grid,
  .user-cards-grid {
    grid-template-columns: 1fr;
  }

  .layout-demo-body {
    flex-direction: column;
  }

  .layout-demo-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #e0e0e0;
  }

  .dialog-box {
    max-width: 95%;
  }

  .table-controls {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
