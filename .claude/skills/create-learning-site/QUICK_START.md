# 🚀 快速开始指南

10分钟内创建你的第一个学习网站！

## 📋 前置要求

- Node.js 18+
- npm 或 yarn

## ⚡ 3步创建网站

### 步骤 1: 生成项目

```bash
# 进入 skill 目录
cd .claude/skills/create-learning-site

# 选择一个主题并生成
node generator.js --topic="Rust" --topicIcon="🦀" --outputDir="../../../../rust-learning"
```

**可用主题**：
- `Rust` 🦀
- `Python` 🐍
- `Go` 🔵
- `TypeScript` 📘
- 或任何自定义主题！

### 步骤 2: 安装依赖

```bash
cd ../../../../rust-learning
npm install
```

### 步骤 3: 启动开发

```bash
npm run dev
```

访问 http://localhost:3000 🎉

## 📝 创建第一个课程

### 1. 创建课程文件

`src/views/lessons/RustLesson1.vue`

```vue
<script setup>
import LessonLayout from '../../components/LessonLayout.vue'
import CodeEditor from '../../components/CodeEditor.vue'

const prevLesson = null
const nextLesson = { path: '/lessons/rust/lesson-2', title: '第2课' }

const rustExample = `fn main() {
    println!("Hello, Rust!");
}`
</script>

<template>
  <LessonLayout
    :lesson-number="1"
    title="Rust 基础语法"
    duration="15分钟"
    :topics="['变量', '数据类型', '函数']"
    :prev-lesson="prevLesson"
    :next-lesson="nextLesson"
  >
    <!-- 课程介绍 -->
    <section class="content-section">
      <h2 class="section-title">1. Rust 简介</h2>
      <p>Rust 是一门系统编程语言...</p>
    </section>

    <!-- 代码示例 -->
    <section class="content-section">
      <h2 class="section-title">2. Hello World</h2>
      <div class="code-block">
        <pre>{{ rustExample }}</pre>
      </div>
    </section>

    <!-- 交互练习 -->
    <section class="content-section">
      <h2 class="section-title">3. 动手练习</h2>
      <CodeEditor
        :html-code="'<div id=\\'output\\'></div>'"
        :js-code="'document.getElementById(\\'output\\').innerHTML = \\'Rust学习开始！\\''"
        :auto-run="true"
      />
    </section>

    <!-- 总结 -->
    <section class="content-section">
      <h2 class="section-title">4. 本课总结</h2>
      <ul>
        <li>✓ 了解 Rust 基础语法</li>
        <li>✓ 学习变量和数据类型</li>
        <li>✓ 掌握函数定义</li>
      </ul>
    </section>
  </LessonLayout>
</template>
```

### 2. 添加路由

编辑 `src/router/index.js`：

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
    meta: { title: 'Rust 基础语法' }
  }
]
```

### 3. 查看效果

访问 http://localhost:3000/lessons/rust/lesson-1

## 🎨 常用组件示例

### CodeEditor - 代码编辑器

```vue
<CodeEditor
  :html-code="'<h1>Hello</h1>'"
  :css-code="'h1 { color: blue; }'"
  :js-code="'console.log(\\'test\\')'"
  :auto-run="true"
/>
```

### 卡片网格

```vue
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
```

### 徽章

```vue
<span class="badge badge-success">已完成</span>
<span class="badge badge-info">新功能</span>
<span class="badge badge-warning">注意</span>
<span class="badge badge-error">错误</span>
```

### 代码块

```vue
<div class="code-block">
  <pre>{{ codeExample }}</pre>
</div>
```

### 演示区域

```vue
<div class="demo-box">
  <p>任务说明...</p>
  <CodeEditor />
</div>
```

## 📦 项目脚本

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览生产版本
```

## 🎯 下一步

1. **添加更多课程** - 参考 `RustLesson1.vue` 创建更多课程
2. **自定义样式** - 修改 `src/styles/global.css` 中的 CSS 变量
3. **更新课程数据** - 编辑 `src/data/curriculum.js`
4. **部署上线** - 使用 Vercel、Netlify 等平台部署

## 💡 小贴士

- 每个课程遵循：介绍 → 示例 → 练习 → 总结
- 使用 `<section class="content-section">` 包裹内容块
- 使用 `<h2 class="section-title">` 作为章节标题
- 善用 CodeEditor 增加交互性
- 多使用卡片、徽章等组件美化页面

## 🆘 常见问题

### Q: 如何修改主色调？

A: 编辑 `src/styles/global.css`：

```css
:root {
  --primary-blue: #your-color;
}
```

### Q: 如何添加暗黑模式？

A: 在 `src/styles/global.css` 中添加：

```css
[data-theme="dark"] {
  --background: #1a1a1a;
  --text-primary: #ffffff;
  /* ... */
}
```

### Q: 如何自定义课程模块？

A: 编辑 `src/data/curriculum.js`，添加新的模块配置。

### Q: 如何持久化学习进度？

A: 在 `LessonLayout.vue` 中使用 `localStorage` 保存完成状态。

---

**Happy Coding! 🎉**
