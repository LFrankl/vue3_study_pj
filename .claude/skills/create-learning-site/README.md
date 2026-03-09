# 🎓 Learning Site Generator

一个基于 Vue3 的交互式学习网站生成器，可以快速创建任何编程语言或技术主题的学习平台。

## ✨ 特性

- 🚀 **一键生成** - 使用命令行快速生成完整项目
- 🎨 **Material Design** - 遵循 Google Material Design 设计规范
- 💡 **交互式组件** - 内置 CodeEditor、LessonLayout 等核心组件
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎯 **多主题支持** - 预设 Rust、Python、Go、TypeScript 等主题配置
- ⚡ **Vue3 + Vite** - 现代化的开发体验
- 🔧 **高度可定制** - 基于模板系统，易于扩展

## 📦 快速开始

### 1. 生成新项目

```bash
# 进入 skill 目录
cd .claude/skills/create-learning-site

# 生成 Rust 学习网站
node generator.js --topic="Rust" --topicIcon="🦀" --outputDir="../../../../rust-learning"

# 生成 Python 学习网站
node generator.js --topic="Python" --topicIcon="🐍" --outputDir="../../../../python-learning"

# 生成 Go 学习网站
node generator.js --topic="Go" --topicIcon="🔵" --outputDir="../../../../go-learning"

# 生成 TypeScript 学习网站
node generator.js --topic="TypeScript" --topicIcon="📘" --outputDir="../../../../ts-learning"
```

### 2. 安装依赖并启动

```bash
# 进入生成的项目目录
cd ../../../../rust-learning

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看生成的学习网站！

## 🎯 使用示例

### 示例 1: 创建 Rust 学习网站

```bash
node generator.js \
  --topic="Rust" \
  --topicIcon="🦀" \
  --outputDir="../../../rust-learning-site"
```

生成的网站将包含：
- 🦀 **Rust 基础** (15课)
- 🔒 **所有权系统** (12课)
- ⚡ **Rust 进阶** (10课)

### 示例 2: 创建 Python 学习网站

```bash
node generator.js \
  --topic="Python" \
  --topicIcon="🐍" \
  --outputDir="../../../python-learning-site"
```

生成的网站将包含：
- 🐍 **Python 基础** (15课)
- 🎯 **面向对象编程** (10课)
- ⚡ **Python 进阶** (12课)

### 示例 3: 创建自定义主题

```bash
node generator.js \
  --topic="Docker" \
  --topicIcon="🐳" \
  --outputDir="../../../docker-learning"
```

对于未预设的主题，会自动生成通用的模块结构：
- 📚 **Docker 基础** (15课)
- 📖 **Docker 进阶** (12课)
- ⚡ **Docker 高级** (10课)

## 📋 命令行参数

| 参数 | 类型 | 必需 | 默认值 | 说明 |
|------|------|------|--------|------|
| `--topic` | String | ✅ | - | 学习主题名称（如：Rust, Python, Go） |
| `--topicIcon` | String | ❌ | 📚 | 主题图标（emoji） |
| `--outputDir` | String | ✅ | - | 输出目录路径 |

## 🏗️ 生成的项目结构

```
your-learning-site/
├── index.html                  # HTML 入口
├── package.json                # 依赖配置
├── vite.config.js              # Vite 配置
├── README.md                   # 项目文档
├── src/
│   ├── main.js                # 应用入口
│   ├── App.vue                # 根组件
│   ├── router/
│   │   └── index.js          # 路由配置
│   ├── components/
│   │   ├── Navbar.vue        # 顶部导航栏
│   │   ├── Sidebar.vue       # 侧边栏（可折叠）
│   │   ├── CodeEditor.vue    # 在线代码编辑器
│   │   └── LessonLayout.vue  # 课程页面模板
│   ├── views/
│   │   ├── Home.vue          # 首页
│   │   └── lessons/          # 课程页面（需手动添加）
│   ├── data/
│   │   └── curriculum.js     # 课程数据配置
│   └── styles/
│       └── global.css        # 全局样式（45+ CSS变量）
```

## 🎨 核心组件说明

### 1. CodeEditor.vue - 在线代码编辑器

**功能**：
- 支持 HTML、CSS、JavaScript 三标签编辑
- 实时预览运行结果
- iframe 沙箱隔离
- 错误捕获和显示
- 重置功能

**使用示例**：
```vue
<CodeEditor
  :html-code="'<h1>Hello World</h1>'"
  :css-code="'h1 { color: blue; }'"
  :js-code="'console.log(\"Hello\")'"
  :auto-run="true"
/>
```

### 2. LessonLayout.vue - 课程页面模板

**功能**：
- 统一的课程页面结构
- 课程头部（课程号、标题、主题标签）
- 课程内容插槽
- 课程导航（上一课/下一课）
- 完成状态标记

**使用示例**：
```vue
<LessonLayout
  :lesson-number="1"
  title="Rust 基础语法"
  duration="15分钟"
  :topics="['变量', '数据类型', '函数']"
  :prev-lesson="prevLesson"
  :next-lesson="nextLesson"
>
  <section class="content-section">
    <!-- 课程内容 -->
  </section>
</LessonLayout>
```

### 3. Navbar.vue - 导航栏

**功能**：
- 品牌展示
- 侧边栏切换按钮
- 主题切换（预留）

### 4. Sidebar.vue - 侧边栏

**功能**：
- 课程模块展示
- 展开/折叠动画
- 课程列表导航
- 活跃状态高亮
- 响应式设计（移动端滑出）

## 🎨 设计系统

### CSS 变量系统

生成的项目包含完整的设计系统，基于 45+ CSS 变量：

```css
/* 主色系统 */
--primary-blue: #1a73e8;
--primary-blue-hover: #1557b0;
--primary-blue-light: #e8f0fe;

/* 语义化颜色 */
--success-bg: #e6f4ea;
--success-text: #137333;
--warning-bg: #fef7e0;
--warning-text: #b06000;
--error-bg: #fce8e6;
--error-text: #c5221f;
--info-bg: #e8f0fe;
--info-text: #1967d2;

/* 间距系统（8px 基础） */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;

/* 阴影层级 */
--shadow: 0 1px 2px ...;
--shadow-hover: 0 1px 3px ...;
--shadow-raised: 0 2px 4px ...;
--shadow-deep: 0 4px 8px ...;

/* 动画系统 */
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
```

### 组件样式类

```css
/* 按钮 */
.btn, .btn-primary, .btn-secondary, .btn-icon

/* 卡片 */
.card, .card-interactive, .card-header

/* 徽章 */
.badge, .badge-success, .badge-warning, .badge-error, .badge-info

/* 工具类 */
.flex, .flex-col, .items-center, .justify-between
.gap-sm, .gap-md, .gap-lg
.p-sm, .p-md, .p-lg
```

## 📚 预设主题配置

### Rust

```javascript
{
  modules: [
    { id: 'basics', title: 'Rust 基础', icon: '🦀', lessons: 15 },
    { id: 'ownership', title: '所有权系统', icon: '🔒', lessons: 12 },
    { id: 'advanced', title: 'Rust 进阶', icon: '⚡', lessons: 10 }
  ]
}
```

### Python

```javascript
{
  modules: [
    { id: 'basics', title: 'Python 基础', icon: '🐍', lessons: 15 },
    { id: 'oop', title: '面向对象编程', icon: '🎯', lessons: 10 },
    { id: 'advanced', title: 'Python 进阶', icon: '⚡', lessons: 12 }
  ]
}
```

### Go

```javascript
{
  modules: [
    { id: 'basics', title: 'Go 基础', icon: '🔵', lessons: 15 },
    { id: 'concurrency', title: '并发编程', icon: '🔀', lessons: 10 },
    { id: 'advanced', title: 'Go 进阶', icon: '⚡', lessons: 12 }
  ]
}
```

### TypeScript

```javascript
{
  modules: [
    { id: 'basics', title: 'TypeScript 基础', icon: '📘', lessons: 12 },
    { id: 'types', title: '类型系统', icon: '🔧', lessons: 10 },
    { id: 'advanced', title: 'TypeScript 进阶', icon: '⚡', lessons: 10 }
  ]
}
```

## 🔧 自定义开发

### 1. 添加新课程

在 `src/views/lessons/` 目录下创建新的课程文件：

```vue
<!-- BasicLesson1.vue -->
<script setup>
import LessonLayout from '../../components/LessonLayout.vue'
import CodeEditor from '../../components/CodeEditor.vue'
import { getPrevLesson, getNextLesson } from '../../data/curriculum.js'

const prevLesson = getPrevLesson('lesson-1')
const nextLesson = getNextLesson('lesson-1')
</script>

<template>
  <LessonLayout
    :lesson-number="1"
    title="第一课：基础入门"
    duration="15分钟"
    :topics="['主题1', '主题2', '主题3']"
    :prev-lesson="prevLesson"
    :next-lesson="nextLesson"
  >
    <section class="content-section">
      <h2 class="section-title">1. 课程介绍</h2>
      <p>课程内容...</p>

      <CodeEditor
        :html-code="'<h1>示例代码</h1>'"
        :auto-run="true"
      />
    </section>
  </LessonLayout>
</template>
```

### 2. 添加路由

在 `src/router/index.js` 中添加路由配置：

```javascript
import BasicLesson1 from '../views/lessons/BasicLesson1.vue'

const routes = [
  // ... 其他路由
  {
    path: '/lessons/basics/lesson-1',
    name: 'BasicLesson1',
    component: BasicLesson1,
    meta: { title: '第一课：基础入门' }
  }
]
```

### 3. 自定义主题样式

修改 `src/styles/global.css` 中的 CSS 变量：

```css
:root {
  --primary-blue: #your-color;  /* 修改主色 */
  /* ... 其他变量 */
}
```

## 🚀 部署

### 构建生产版本

```bash
npm run build
```

生成的 `dist/` 目录可以部署到：
- Vercel
- Netlify
- GitHub Pages
- 任何静态网站托管服务

### Vercel 部署

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel
```

### Netlify 部署

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 部署
netlify deploy --prod --dir=dist
```

## 📖 完整工作流程

### 1. 生成项目

```bash
node generator.js --topic="Rust" --topicIcon="🦀" --outputDir="../rust-learning"
```

### 2. 安装依赖

```bash
cd ../rust-learning
npm install
```

### 3. 开发第一个课程

创建 `src/views/lessons/BasicLesson1.vue`

### 4. 添加路由

编辑 `src/router/index.js`

### 5. 启动开发服务器

```bash
npm run dev
```

### 6. 预览和调试

访问 http://localhost:3000

### 7. 构建和部署

```bash
npm run build
vercel
```

## 🎯 最佳实践

### 课程内容组织

```vue
<template>
  <LessonLayout>
    <!-- 1. 课程介绍 -->
    <section class="content-section">
      <h2 class="section-title">1. 什么是XXX</h2>
      <p>概念介绍...</p>
    </section>

    <!-- 2. 核心概念 -->
    <section class="content-section">
      <h2 class="section-title">2. 核心概念</h2>
      <div class="grid-2">
        <div class="card">概念1</div>
        <div class="card">概念2</div>
      </div>
    </section>

    <!-- 3. 代码演示 -->
    <section class="content-section">
      <h2 class="section-title">3. 代码演示</h2>
      <CodeEditor :html-code="demo" />
    </section>

    <!-- 4. 练习 -->
    <section class="content-section">
      <h2 class="section-title">4. 动手练习</h2>
      <div class="demo-box">
        <p>任务：...</p>
        <CodeEditor />
      </div>
    </section>

    <!-- 5. 总结 -->
    <section class="content-section">
      <h2 class="section-title">5. 本课总结</h2>
      <ul>
        <li>要点1</li>
        <li>要点2</li>
      </ul>
    </section>
  </LessonLayout>
</template>
```

### 交互式示例

```vue
<script setup>
import { ref } from 'vue'

const userInput = ref('')
const result = ref('')

const runExample = () => {
  result.value = processInput(userInput.value)
}
</script>

<template>
  <div class="demo-box">
    <input v-model="userInput" placeholder="输入内容" />
    <button @click="runExample" class="btn btn-primary">运行</button>
    <div class="demo-result">{{ result }}</div>
  </div>
</template>
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT

---

## 🔗 相关资源

- [Vue3 官方文档](https://cn.vuejs.org/)
- [Vite 官方文档](https://cn.vitejs.dev/)
- [Material Design 指南](https://material.io/design)
- [原始项目仓库](../../../)

## 📮 技术支持

如果您在使用过程中遇到问题：

1. 查看本文档的常见问题部分
2. 查看生成项目的 README.md
3. 参考原始项目的实现
4. 提交 Issue

---

**由 Learning Site Generator 生成 | 基于 Vue3 + Material Design**
