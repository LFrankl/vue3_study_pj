# 📚 使用示例集

完整的使用示例和模板代码。

## 基础示例

### 1. 生成 Rust 学习网站

```bash
node generator.js \
  --topic="Rust" \
  --topicIcon="🦀" \
  --outputDir="../../../../rust-learning-site"
```

**生成的模块**：
- 🦀 Rust 基础 (15课)
- 🔒 所有权系统 (12课)
- ⚡ Rust 进阶 (10课)

### 2. 生成 Python 学习网站

```bash
node generator.js \
  --topic="Python" \
  --topicIcon="🐍" \
  --outputDir="../../../../python-learning-site"
```

**生成的模块**：
- 🐍 Python 基础 (15课)
- 🎯 面向对象编程 (10课)
- ⚡ Python 进阶 (12课)

### 3. 生成 Go 学习网站

```bash
node generator.js \
  --topic="Go" \
  --topicIcon="🔵" \
  --outputDir="../../../../go-learning-site"
```

**生成的模块**：
- 🔵 Go 基础 (15课)
- 🔀 并发编程 (10课)
- ⚡ Go 进阶 (12课)

### 4. 生成 TypeScript 学习网站

```bash
node generator.js \
  --topic="TypeScript" \
  --topicIcon="📘" \
  --outputDir="../../../../ts-learning-site"
```

**生成的模块**：
- 📘 TypeScript 基础 (12课)
- 🔧 类型系统 (10课)
- ⚡ TypeScript 进阶 (10课)

---

## 高级示例

### 5. 自定义主题 - Docker

```bash
node generator.js \
  --topic="Docker" \
  --topicIcon="🐳" \
  --outputDir="../../../../docker-learning"
```

### 6. 自定义主题 - Kubernetes

```bash
node generator.js \
  --topic="Kubernetes" \
  --topicIcon="☸️" \
  --outputDir="../../../../k8s-learning"
```

### 7. 自定义主题 - Machine Learning

```bash
node generator.js \
  --topic="机器学习" \
  --topicIcon="🤖" \
  --outputDir="../../../../ml-learning"
```

### 8. 自定义主题 - Web3

```bash
node generator.js \
  --topic="Web3" \
  --topicIcon="🔗" \
  --outputDir="../../../../web3-learning"
```

---

## 课程模板示例

### 基础课程模板

```vue
<!-- src/views/lessons/Lesson1.vue -->
<script setup>
import LessonLayout from '../../components/LessonLayout.vue'
import CodeEditor from '../../components/CodeEditor.vue'

const prevLesson = null
const nextLesson = {
  path: '/lessons/module/lesson-2',
  title: '第2课：下一主题'
}
</script>

<template>
  <LessonLayout
    :lesson-number="1"
    title="课程标题"
    duration="15分钟"
    :topics="['主题1', '主题2', '主题3']"
    :prev-lesson="prevLesson"
    :next-lesson="nextLesson"
  >
    <!-- 1. 课程介绍 -->
    <section class="content-section">
      <h2 class="section-title">1. 课程介绍</h2>
      <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 24px;">
        <h3 style="margin-bottom: 12px;">📚 学习目标</h3>
        <ul style="list-style: none; padding: 0;">
          <li>✓ 目标1</li>
          <li>✓ 目标2</li>
          <li>✓ 目标3</li>
        </ul>
      </div>
    </section>

    <!-- 2. 核心概念 -->
    <section class="content-section">
      <h2 class="section-title">2. 核心概念</h2>
      <div class="grid-2">
        <div class="card">
          <h3>概念1</h3>
          <p>说明...</p>
        </div>
        <div class="card">
          <h3>概念2</h3>
          <p>说明...</p>
        </div>
      </div>
    </section>

    <!-- 3. 代码示例 -->
    <section class="content-section">
      <h2 class="section-title">3. 代码示例</h2>
      <div class="code-block">
        <pre>// 示例代码
const example = "Hello World";</pre>
      </div>
    </section>

    <!-- 4. 交互演示 -->
    <section class="content-section">
      <h2 class="section-title">4. 交互演示</h2>
      <CodeEditor
        :html-code="'<h1>Hello World</h1>'"
        :css-code="'h1 { color: #1a73e8; }'"
        :js-code="'console.log(\\'Demo\\')'"
        :auto-run="true"
      />
    </section>

    <!-- 5. 练习 -->
    <section class="content-section">
      <h2 class="section-title">5. 动手练习</h2>
      <div class="demo-box">
        <h3>📝 任务</h3>
        <p>完成以下练习...</p>
        <CodeEditor />
      </div>
    </section>

    <!-- 6. 总结 -->
    <section class="content-section">
      <h2 class="section-title">6. 本课总结</h2>
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 24px; border-radius: 8px;">
        <ul>
          <li>✓ 要点1</li>
          <li>✓ 要点2</li>
          <li>✓ 要点3</li>
        </ul>
      </div>
    </section>
  </LessonLayout>
</template>
```

### 高级交互课程模板

```vue
<!-- src/views/lessons/InteractiveLesson.vue -->
<script setup>
import { ref, computed } from 'vue'
import LessonLayout from '../../components/LessonLayout.vue'
import CodeEditor from '../../components/CodeEditor.vue'

// 交互状态
const userInput = ref('')
const selectedOption = ref('option1')
const checkboxes = ref([])
const result = ref('')

// 计算属性
const processedResult = computed(() => {
  return userInput.value.toUpperCase()
})

// 方法
const runExample = () => {
  result.value = `处理结果: ${processedResult.value}`
}
</script>

<template>
  <LessonLayout
    :lesson-number="5"
    title="交互式课程"
    duration="20分钟"
    :topics="['交互', '状态管理', '实时反馈']"
  >
    <!-- 表单交互 -->
    <section class="content-section">
      <h2 class="section-title">1. 表单交互</h2>

      <div class="demo-box">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
          <!-- 左侧：控制面板 -->
          <div>
            <h3>控制面板</h3>

            <!-- 文本输入 -->
            <div style="margin-bottom: 16px;">
              <label>输入文本：</label>
              <input
                v-model="userInput"
                type="text"
                placeholder="输入内容..."
                style="width: 100%; padding: 8px; margin-top: 8px;"
              />
            </div>

            <!-- 下拉选择 -->
            <div style="margin-bottom: 16px;">
              <label>选择选项：</label>
              <select
                v-model="selectedOption"
                style="width: 100%; padding: 8px; margin-top: 8px;"
              >
                <option value="option1">选项1</option>
                <option value="option2">选项2</option>
                <option value="option3">选项3</option>
              </select>
            </div>

            <!-- 复选框 -->
            <div style="margin-bottom: 16px;">
              <label>多选：</label>
              <div style="margin-top: 8px;">
                <label style="display: block;">
                  <input type="checkbox" value="feature1" v-model="checkboxes" />
                  功能1
                </label>
                <label style="display: block;">
                  <input type="checkbox" value="feature2" v-model="checkboxes" />
                  功能2
                </label>
                <label style="display: block;">
                  <input type="checkbox" value="feature3" v-model="checkboxes" />
                  功能3
                </label>
              </div>
            </div>

            <button @click="runExample" class="btn btn-primary">
              运行
            </button>
          </div>

          <!-- 右侧：实时预览 -->
          <div>
            <h3>实时预览</h3>
            <div class="demo-result">
              <div class="card">
                <h4>输入内容</h4>
                <p>{{ userInput || '(空)' }}</p>
              </div>
              <div class="card">
                <h4>选择的选项</h4>
                <p>{{ selectedOption }}</p>
              </div>
              <div class="card">
                <h4>勾选的功能</h4>
                <p>{{ checkboxes.join(', ') || '(无)' }}</p>
              </div>
              <div class="card">
                <h4>处理结果</h4>
                <p>{{ result || '点击运行按钮' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 代码编辑器 -->
    <section class="content-section">
      <h2 class="section-title">2. 实时代码编辑</h2>
      <CodeEditor
        :html-code="`<div id='app'>
  <h1>{{ title }}</h1>
  <p>{{ message }}</p>
</div>`"
        :js-code="`const app = {
  title: '标题',
  message: '这是一条消息'
}
document.getElementById('app').innerHTML =
  '<h1>' + app.title + '</h1>' +
  '<p>' + app.message + '</p>'`"
        :auto-run="true"
      />
    </section>

    <!-- 诊断面板 -->
    <section class="content-section">
      <h2 class="section-title">3. 状态诊断</h2>
      <div class="code-block">
        <pre>{{ {
  userInput: userInput,
  selectedOption: selectedOption,
  checkboxes: checkboxes,
  processedResult: processedResult,
  result: result
} }}</pre>
      </div>
    </section>
  </LessonLayout>
</template>
```

---

## 样式自定义示例

### 自定义主题色

```css
/* src/styles/global.css */

/* Rust 主题 - 橙色 */
:root {
  --primary-blue: #ce422b;
  --primary-blue-hover: #a33422;
  --primary-blue-light: #ffeae6;
}

/* Python 主题 - 蓝黄 */
:root {
  --primary-blue: #3776ab;
  --primary-blue-hover: #2b5f8a;
  --primary-blue-light: #e8f4fd;
}

/* Go 主题 - 青色 */
:root {
  --primary-blue: #00add8;
  --primary-blue-hover: #008bad;
  --primary-blue-light: #e6f7fb;
}
```

### 自定义卡片样式

```vue
<template>
  <div class="custom-card">
    <div class="custom-card-icon">🚀</div>
    <h3>标题</h3>
    <p>内容...</p>
  </div>
</template>

<style scoped>
.custom-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
}

.custom-card-icon {
  font-size: 48px;
  margin-bottom: 16px;
}
</style>
```

---

## 路由配置示例

### 自动路由生成

```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { curriculum } from '../data/curriculum.js'

// 自动生成路由
const generateRoutes = () => {
  const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' }
  }]

  // 遍历课程数据生成路由
  Object.keys(curriculum).forEach(topicKey => {
    const topic = curriculum[topicKey]
    topic.modules.forEach(module => {
      module.lessons.forEach(lesson => {
        routes.push({
          path: lesson.path,
          name: lesson.id,
          component: () => import(`../views/lessons/${lesson.id}.vue`),
          meta: { title: lesson.title }
        })
      })
    })
  })

  return routes
}

const router = createRouter({
  history: createWebHistory(),
  routes: generateRoutes()
})

export default router
```

---

## 课程数据自定义

### 扩展课程配置

```javascript
// src/data/curriculum.js

export const curriculum = {
  rust: {
    title: 'Rust 编程',
    icon: '🦀',
    color: '#ce422b',
    description: '系统编程语言，安全、并发、高性能',
    modules: [
      {
        id: 'rust-basics',
        title: 'Rust 基础',
        description: '从零开始学习 Rust',
        lessons: [
          {
            id: 'rust-lesson-1',
            number: 1,
            title: '认识 Rust',
            path: '/lessons/rust/lesson-1',
            duration: '15分钟',
            topics: ['Rust 简介', '环境搭建', 'Hello World'],
            difficulty: 'beginner', // 新增：难度等级
            completed: false,
            prerequisites: [], // 新增：前置课程
            exercises: 3, // 新增：练习题数量
            videoUrl: '', // 新增：视频链接
            codeExamples: 5 // 新增：代码示例数量
          }
        ]
      }
    ],
    resources: [ // 新增：学习资源
      { title: 'Rust 官方文档', url: 'https://doc.rust-lang.org/' },
      { title: 'Rust By Example', url: 'https://doc.rust-lang.org/rust-by-example/' }
    ]
  }
}
```

---

## 部署配置示例

### Vercel 配置

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### Netlify 配置

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Actions 自动部署

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install and Build
        run: |
          npm install
          npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

**更多示例和模板持续更新中...**
