<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第54课：Vue3 简介</h1>
      <p class="lesson-subtitle">了解 Vue3 是什么，它与 Vue2 的区别，以及如何创建第一个 Vue 应用</p>
    </div>

    <div class="lesson-content">
      <!-- 什么是 Vue3 -->
      <section class="content-section">
        <h2>什么是 Vue3？</h2>
        <p>Vue3 是一个<strong>渐进式 JavaScript 框架</strong>，用于构建用户界面。它由尤雨溪（Evan You）创建，于 2020 年 9 月正式发布。</p>

        <div class="info-box">
          <h3>Vue3 的核心特点</h3>
          <ul>
            <li><strong>声明式渲染</strong>：通过模板语法声明式地描述状态和 DOM 之间的关系</li>
            <li><strong>响应式系统</strong>：自动追踪 JavaScript 状态变化并响应式地更新 DOM</li>
            <li><strong>组件化</strong>：将界面拆分为可复用、可维护的组件</li>
            <li><strong>渐进式</strong>：可以逐步采用，既可以用于简单的页面增强，也可以构建复杂的单页应用</li>
          </ul>
        </div>

        <div class="example-box">
          <h3>为什么选择 Vue3？</h3>
          <div class="comparison-grid">
            <div class="comparison-item">
              <div class="comparison-icon">⚡</div>
              <h4>性能更好</h4>
              <p>更快的渲染速度，更小的打包体积</p>
            </div>
            <div class="comparison-item">
              <div class="comparison-icon">🎯</div>
              <h4>易于学习</h4>
              <p>简洁的 API，友好的学习曲线</p>
            </div>
            <div class="comparison-item">
              <div class="comparison-icon">🔧</div>
              <h4>灵活强大</h4>
              <p>组合式 API 提供更好的代码组织</p>
            </div>
            <div class="comparison-item">
              <div class="comparison-icon">🌍</div>
              <h4>生态丰富</h4>
              <p>丰富的工具链和第三方库</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Vue3 vs Vue2 -->
      <section class="content-section">
        <h2>Vue3 vs Vue2</h2>
        <p>Vue3 相比 Vue2 带来了许多重要改进：</p>

        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>特性</th>
                <th>Vue2</th>
                <th>Vue3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>响应式系统</strong></td>
                <td>Object.defineProperty</td>
                <td>Proxy (更强大，支持更多操作)</td>
              </tr>
              <tr>
                <td><strong>API 风格</strong></td>
                <td>Options API</td>
                <td>Composition API + Options API</td>
              </tr>
              <tr>
                <td><strong>性能</strong></td>
                <td>基准</td>
                <td>渲染速度提升 1.3-2 倍</td>
              </tr>
              <tr>
                <td><strong>打包体积</strong></td>
                <td>~22KB (min+gzip)</td>
                <td>~13KB (tree-shaking)</td>
              </tr>
              <tr>
                <td><strong>TypeScript</strong></td>
                <td>支持但不完善</td>
                <td>原生 TypeScript 支持</td>
              </tr>
              <tr>
                <td><strong>Fragment</strong></td>
                <td>不支持（必须单根节点）</td>
                <td>支持多根节点</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="tip-box">
          <strong>💡 提示：</strong>Vue3 向下兼容 Options API，学习 Vue2 的知识依然有效！
        </div>
      </section>

      <!-- 创建第一个 Vue 应用 -->
      <section class="content-section">
        <h2>创建第一个 Vue 应用</h2>

        <h3>方式一：通过 CDN 使用 Vue3</h3>
        <p>最简单的方式是通过 CDN 引入 Vue3：</p>

        <CodeEditor
          :initial-html='`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的第一个 Vue3 应用</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
</head>
<body>
  <div id="app">
    <h1>{{ message }}</h1>
    <p>计数器: {{ count }}</p>
    <button @click="count++">点击 +1</button>
  </div>

  <script>
    const { createApp } = Vue;

    createApp({
      data() {
        return {
          message: "Hello Vue3!",
          count: 0
        };
      }
    }).mount("#app");
  <\/script>
</body>
</html>`'
          :initial-css="''"
          :initial-js="''"
          :auto-run="true"
        />

        <h3>方式二：使用 Composition API</h3>
        <p>Vue3 推荐使用更灵活的 Composition API：</p>

        <CodeEditor
          :initial-html='`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Composition API 示例</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
</head>
<body>
  <div id="app">
    <h1>{{ message }}</h1>
    <p>你点击了 {{ count }} 次</p>
    <button @click="increment">点击 +1</button>
    <button @click="reset" style="margin-left: 10px;">重置</button>
  </div>

  <script>
    const { createApp, ref } = Vue;

    createApp({
      setup() {
        // 创建响应式数据
        const message = ref("欢迎使用 Composition API");
        const count = ref(0);

        // 定义方法
        const increment = () => {
          count.value++;
        };

        const reset = () => {
          count.value = 0;
        };

        // 返回数据和方法供模板使用
        return {
          message,
          count,
          increment,
          reset
        };
      }
    }).mount("#app");
  <\/script>
</body>
</html>`'
          :initial-css="''"
          :initial-js="''"
          :auto-run="true"
        />
      </section>

      <!-- Vue 响应式演示 -->
      <section class="content-section">
        <h2>🎯 交互：Vue 响应式演示</h2>
        <p>Vue 的核心特性是<strong>响应式</strong>：当数据变化时，视图会自动更新。试试下面的互动示例：</p>

        <div class="interactive-demo">
          <div class="demo-controls">
            <h3>控制面板</h3>
            <div class="control-group">
              <label>姓名：</label>
              <input v-model="demoName" type="text" class="demo-input" />
            </div>
            <div class="control-group">
              <label>年龄：</label>
              <input v-model.number="demoAge" type="number" class="demo-input" />
            </div>
            <div class="control-group">
              <label>职业：</label>
              <select v-model="demoJob" class="demo-input">
                <option value="学生">学生</option>
                <option value="工程师">工程师</option>
                <option value="设计师">设计师</option>
                <option value="教师">教师</option>
              </select>
            </div>
            <div class="control-group">
              <label>爱好：</label>
              <div class="checkbox-group">
                <label><input type="checkbox" value="编程" v-model="demoHobbies" /> 编程</label>
                <label><input type="checkbox" value="音乐" v-model="demoHobbies" /> 音乐</label>
                <label><input type="checkbox" value="运动" v-model="demoHobbies" /> 运动</label>
                <label><input type="checkbox" value="阅读" v-model="demoHobbies" /> 阅读</label>
              </div>
            </div>
          </div>

          <div class="demo-preview">
            <h3>实时预览</h3>
            <div class="preview-card">
              <h4>个人信息卡片</h4>
              <p><strong>姓名：</strong>{{ demoName }}</p>
              <p><strong>年龄：</strong>{{ demoAge }} 岁</p>
              <p><strong>职业：</strong>{{ demoJob }}</p>
              <p><strong>爱好：</strong>{{ demoHobbies.length > 0 ? demoHobbies.join('、') : '暂无' }}</p>
              <p class="preview-note">
                {{ demoName || '某人' }} 是一位 {{ demoAge }} 岁的{{ demoJob }}
                <span v-if="demoHobbies.length > 0">，喜欢{{ demoHobbies.join('、') }}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="tip-box">
          <strong>💡 看到了吗？</strong>当你修改输入框的值时，预览区域会<strong>立即自动更新</strong>。这就是 Vue 的响应式系统在工作！
        </div>
      </section>

      <!-- 代码解析 -->
      <section class="content-section">
        <h2>代码解析</h2>

        <div class="code-explanation">
          <h3>createApp() - 创建应用实例</h3>
          <pre><code>const app = createApp({
  // 组件选项
})
app.mount('#app')</code></pre>
          <p><code>createApp()</code> 创建一个 Vue 应用实例，<code>mount()</code> 将应用挂载到页面元素上。</p>
        </div>

        <div class="code-explanation">
          <h3>data() - 定义响应式数据 (Options API)</h3>
          <pre><code>data() {
  return {
    message: 'Hello',
    count: 0
  }
}</code></pre>
          <p><code>data()</code> 函数返回的对象会被 Vue 转换为响应式数据。</p>
        </div>

        <div class="code-explanation">
          <h3>ref() - 创建响应式引用 (Composition API)</h3>
          <pre><code>const count = ref(0)
count.value++  // 在 JS 中访问需要 .value
{{ count }}    // 在模板中自动解包，不需要 .value</code></pre>
          <p><code>ref()</code> 创建一个响应式引用，在 JavaScript 中访问需要 <code>.value</code>，但在模板中会自动解包。</p>
        </div>
      </section>

      <!-- 小练习 -->
      <section class="content-section">
        <h2>💪 小练习</h2>
        <div class="exercise-box">
          <h3>练习：创建一个简单的待办事项</h3>
          <p>尝试在下面的代码编辑器中创建一个待办事项应用，要求：</p>
          <ul>
            <li>显示待办事项列表</li>
            <li>有一个输入框和"添加"按钮</li>
            <li>点击按钮可以添加新的待办事项</li>
          </ul>

          <CodeEditor
            :initial-html='`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>待办事项练习</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: 50px auto;
      padding: 20px;
    }
    .todo-item {
      padding: 10px;
      margin: 5px 0;
      background: #f0f0f0;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div id="app">
    <h1>我的待办事项</h1>

    <!-- 这里添加你的代码 -->
    <input v-model="newTodo" placeholder="输入待办事项" />
    <button @click="addTodo">添加</button>

    <div v-for="(todo, index) in todos" :key="index" class="todo-item">
      {{ index + 1 }}. {{ todo }}
    </div>
  </div>

  <script>
    const { createApp, ref } = Vue;

    createApp({
      setup() {
        const todos = ref(["学习 Vue3", "写代码", "做练习"]);
        const newTodo = ref("");

        const addTodo = () => {
          if (newTodo.value.trim()) {
            todos.value.push(newTodo.value);
            newTodo.value = "";
          }
        };

        return { todos, newTodo, addTodo };
      }
    }).mount("#app");
  <\/script>
</body>
</html>`'
            :initial-css="''"
            :initial-js="''"
            :auto-run="true"
          />
        </div>
      </section>

      <!-- 总结 -->
      <section class="content-section">
        <h2>📚 本课总结</h2>
        <div class="summary-box">
          <ul>
            <li>Vue3 是一个渐进式 JavaScript 框架，用于构建用户界面</li>
            <li>Vue3 相比 Vue2 性能更好、体积更小、TypeScript 支持更完善</li>
            <li>可以通过 CDN 或构建工具使用 Vue3</li>
            <li>Vue3 支持 Options API 和 Composition API 两种风格</li>
            <li>Vue 的核心特性是<strong>响应式系统</strong>：数据变化，视图自动更新</li>
            <li><code>createApp()</code> 创建应用，<code>mount()</code> 挂载到 DOM</li>
            <li><code>ref()</code> 用于创建响应式数据（Composition API）</li>
          </ul>
        </div>
      </section>

      <!-- 下一课预告 -->
      <div class="next-lesson">
        <h3>下一课预告</h3>
        <p>第55课：模板语法 - 学习 Vue 模板中的插值、指令和表达式</p>
        <router-link to="/lessons/vue3/lesson-2" class="next-button">
          前往下一课 →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeEditor from '../../components/CodeEditor.vue'

// 响应式演示数据
const demoName = ref('李明')
const demoAge = ref(25)
const demoJob = ref('工程师')
const demoHobbies = ref(['编程', '音乐'])
</script>

<style scoped>
.lesson-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.lesson-header {
  margin-bottom: 32px;
}

.lesson-header h1 {
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}

.lesson-subtitle {
  font-size: 18px;
  color: #5d6d7e;
  line-height: 1.6;
}

.lesson-content {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.content-section {
  margin-bottom: 48px;
}

.content-section h2 {
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 3px solid #42b983;
}

.content-section h3 {
  font-size: 20px;
  font-weight: 600;
  color: #34495e;
  margin: 24px 0 12px;
}

.content-section p {
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 16px;
}

.info-box {
  background: #f0f9ff;
  border-left: 4px solid #3b82f6;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
}

.info-box h3 {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 12px;
  color: #1e40af;
}

.info-box ul {
  margin: 0;
  padding-left: 24px;
}

.info-box li {
  margin: 8px 0;
  line-height: 1.6;
}

.example-box {
  background: #fefce8;
  padding: 24px;
  border-radius: 8px;
  margin: 24px 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.comparison-item {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 8px;
}

.comparison-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.comparison-item h4 {
  font-size: 16px;
  font-weight: 600;
  margin: 12px 0 8px;
  color: #2c3e50;
}

.comparison-item p {
  font-size: 14px;
  color: #5d6d7e;
  margin: 0;
}

.comparison-table {
  overflow-x: auto;
  margin: 20px 0;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 16px;
  text-align: left;
  border: 1px solid #e5e7eb;
}

.comparison-table th {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
}

.comparison-table td {
  color: #4b5563;
}

.tip-box {
  background: #f0fdf4;
  border-left: 4px solid #22c55e;
  padding: 16px;
  margin: 20px 0;
  border-radius: 4px;
  color: #166534;
}

.interactive-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 24px 0;
}

@media (max-width: 768px) {
  .interactive-demo {
    grid-template-columns: 1fr;
  }
}

.demo-controls,
.demo-preview {
  background: #f9fafb;
  padding: 20px;
  border-radius: 8px;
}

.demo-controls h3,
.demo-preview h3 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 18px;
  color: #1f2937;
}

.control-group {
  margin-bottom: 16px;
}

.control-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 6px;
  color: #374151;
}

.demo-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
}

.demo-input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  font-weight: normal;
  margin: 0;
}

.checkbox-group input {
  margin-right: 8px;
}

.preview-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
}

.preview-card h4 {
  margin: 0 0 16px;
  font-size: 16px;
  color: #1f2937;
  border-bottom: 2px solid #42b983;
  padding-bottom: 8px;
}

.preview-card p {
  margin: 8px 0;
  color: #4b5563;
}

.preview-note {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
  font-style: italic;
  color: #6b7280;
}

.code-explanation {
  background: #f9fafb;
  padding: 20px;
  border-radius: 8px;
  margin: 16px 0;
}

.code-explanation h3 {
  margin-top: 0;
  font-size: 16px;
  color: #1f2937;
}

.code-explanation pre {
  background: #1f2937;
  color: #f9fafb;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  margin: 12px 0;
}

.code-explanation code {
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.exercise-box {
  background: #fef3c7;
  padding: 24px;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
}

.exercise-box h3 {
  margin-top: 0;
  color: #92400e;
}

.exercise-box ul {
  margin: 12px 0;
  padding-left: 24px;
  color: #78350f;
}

.summary-box {
  background: #f0f9ff;
  padding: 24px;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.summary-box ul {
  margin: 0;
  padding-left: 24px;
}

.summary-box li {
  margin: 12px 0;
  line-height: 1.6;
  color: #1e3a8a;
}

.next-lesson {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  margin-top: 48px;
}

.next-lesson h3 {
  margin: 0 0 12px;
  font-size: 20px;
}

.next-lesson p {
  margin: 0 0 20px;
  opacity: 0.9;
}

.next-button {
  display: inline-block;
  padding: 12px 32px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: transform 0.2s;
}

.next-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
