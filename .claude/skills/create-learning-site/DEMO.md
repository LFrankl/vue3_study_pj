# 🎬 演示：5分钟创建 Rust 学习网站

快速演示如何使用 Learning Site Generator。

## 🎯 目标

创建一个完整的 Rust 学习网站，包含：
- 🦀 Rust 基础（15课）
- 🔒 所有权系统（12课）
- ⚡ Rust 进阶（10课）

## 📝 步骤

### 1️⃣ 生成项目（30秒）

```bash
cd .claude/skills/create-learning-site

node generator.js \
  --topic="Rust" \
  --topicIcon="🦀" \
  --outputDir="../../../../rust-learning"
```

**输出示例**：
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📚 Learning Site Generator v1.0.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 正在生成 Rust 学习网站...

  主题: Rust
  图标: 🦀
  输出: ../../../../rust-learning
  模块: 3 个

📁 创建目录结构...
✓ 创建目录: /path/to/rust-learning
✓ 创建目录: /path/to/rust-learning/src
...

⚙️  生成配置文件...
✓ 生成 package.json
✓ 生成 vite.config.js
✓ 生成 index.html

🚀 生成应用文件...
✓ 生成 main.js
✓ 生成 App.vue

🎨 生成组件...
✓ 生成 Navbar.vue
✓ 生成 Sidebar.vue
✓ 复制组件: CodeEditor.vue
✓ 复制组件: LessonLayout.vue

📊 生成数据配置...
✓ 生成 curriculum.js
✓ 生成 router/index.js

📄 生成页面...
✓ 生成 Home.vue

🎨 复制样式文件...
✓ 复制 global.css

📝 生成文档...
✓ 生成 README.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅ 项目生成成功！
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

下一步操作:
  cd ../../../../rust-learning
  npm install
  npm run dev
```

### 2️⃣ 安装依赖（2分钟）

```bash
cd ../../../../rust-learning
npm install
```

**输出示例**：
```
added 45 packages in 1m
```

### 3️⃣ 启动开发服务器（10秒）

```bash
npm run dev
```

**输出示例**：
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### 4️⃣ 浏览器预览

访问 http://localhost:3000

**首页展示**：
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          🦀 Rust 学习平台
   交互式学习体验，从零开始掌握 Rust
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────┐
│  🦀 Rust 基础                       │
│  共 15 课，循序渐进学习              │
│  [ 开始学习 ]                       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  🔒 所有权系统                       │
│  共 12 课，循序渐进学习              │
│  [ 开始学习 ]                       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  ⚡ Rust 进阶                        │
│  共 10 课，循序渐进学习              │
│  [ 开始学习 ]                       │
└─────────────────────────────────────┘
```

## 🎨 界面预览

### 导航栏
```
┌────────────────────────────────────────────┐
│ ☰  🦀 Rust 学习平台           🌙        │
└────────────────────────────────────────────┘
```

### 侧边栏
```
┌──────────────────┐
│ 🦀 Rust 课程     │
├──────────────────┤
│ 🦀 RUST 基础  ▼  │
│   1  第 1 课     │
│   2  第 2 课     │
│   ...            │
│   15 第 15 课    │
├──────────────────┤
│ 🔒 所有权系统 ▼  │
│   16 第 16 课    │
│   ...            │
└──────────────────┘
```

## 📝 添加第一个课程（2分钟）

### 创建课程文件

`src/views/lessons/RustLesson1.vue`

```vue
<script setup>
import LessonLayout from '../../components/LessonLayout.vue'
import CodeEditor from '../../components/CodeEditor.vue'

const rustCode = `fn main() {
    let greeting = "Hello, Rust!";
    println!("{}", greeting);
}`
</script>

<template>
  <LessonLayout
    :lesson-number="1"
    title="Rust 入门"
    duration="15分钟"
    :topics="['Rust 简介', '环境搭建', 'Hello World']"
  >
    <section class="content-section">
      <h2 class="section-title">1. Rust 简介</h2>
      <p>Rust 是一门系统编程语言，注重安全、并发和性能。</p>

      <div class="grid-2">
        <div class="card">
          <h3>🔒 内存安全</h3>
          <p>无需垃圾回收即可保证内存安全</p>
        </div>
        <div class="card">
          <h3>⚡ 高性能</h3>
          <p>零成本抽象，性能媲美C/C++</p>
        </div>
        <div class="card">
          <h3>🔀 并发编程</h3>
          <p>无数据竞争的并发</p>
        </div>
        <div class="card">
          <h3>🎯 类型安全</h3>
          <p>强大的类型系统和模式匹配</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2 class="section-title">2. Hello World</h2>
      <div class="code-block">
        <pre>{{ rustCode }}</pre>
      </div>
    </section>

    <section class="content-section">
      <h2 class="section-title">3. 交互练习</h2>
      <div class="demo-box">
        <p>💡 试试用 JavaScript 实现类似的输出：</p>
        <CodeEditor
          :html-code="'<div id=\"output\"></div>'"
          :js-code="'const greeting = \"Hello, Rust!\";\\ndocument.getElementById(\"output\").textContent = greeting;'"
          :auto-run="true"
        />
      </div>
    </section>

    <section class="content-section">
      <h2 class="section-title">4. 本课总结</h2>
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 24px; border-radius: 8px;">
        <ul style="margin: 0;">
          <li>✓ 了解 Rust 的核心特性</li>
          <li>✓ 认识 Rust 的优势</li>
          <li>✓ 编写第一个 Rust 程序</li>
        </ul>
      </div>
    </section>
  </LessonLayout>
</template>
```

### 添加路由

编辑 `src/router/index.js`，在 routes 数组中添加：

```javascript
import RustLesson1 from '../views/lessons/RustLesson1.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' }
  },
  {
    path: '/lessons/rust/lesson-1',
    name: 'RustLesson1',
    component: RustLesson1,
    meta: { title: 'Rust 入门' }
  }
]
```

### 查看效果

访问 http://localhost:3000/lessons/rust/lesson-1

## 📊 生成的项目统计

```
Rust 学习网站
├── 文件总数: 17 个
├── 代码行数: ~2,500 行
├── 组件数量: 4 个核心组件
├── CSS 变量: 45+ 个
├── 课程配置: 37 课
├── 模块数量: 3 个
└── 支持特性:
    ✓ 响应式设计
    ✓ 在线代码编辑
    ✓ 课程导航
    ✓ 进度追踪
    ✓ Material Design
```

## 🎯 下一步

### 继续添加课程

复制 `RustLesson1.vue`，创建更多课程：
- `RustLesson2.vue` - 变量和可变性
- `RustLesson3.vue` - 数据类型
- `RustLesson4.vue` - 函数
- ...

### 自定义样式

编辑 `src/styles/global.css`，修改 Rust 主题色：

```css
:root {
  --primary-blue: #ce422b;  /* Rust 橙色 */
  --primary-blue-hover: #a33422;
  --primary-blue-light: #ffeae6;
}
```

### 部署上线

```bash
# 构建
npm run build

# 部署到 Vercel
vercel

# 或部署到 Netlify
netlify deploy --prod --dir=dist
```

## ✅ 完成！

恭喜！你已经成功创建了一个完整的 Rust 学习网站！

**总用时**: ~5 分钟
**成果**: 一个完全可用的、设计精美的学习平台

---

## 🔄 尝试其他主题

### Python
```bash
node generator.js --topic="Python" --topicIcon="🐍" --outputDir="../../../../python-learning"
```

### Go
```bash
node generator.js --topic="Go" --topicIcon="🔵" --outputDir="../../../../go-learning"
```

### Docker
```bash
node generator.js --topic="Docker" --topicIcon="🐳" --outputDir="../../../../docker-learning"
```

**每个项目都包含相同的强大功能！** 🚀
