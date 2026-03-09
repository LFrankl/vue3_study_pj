# 前端学习平台

一个基于 Vue3 的交互式前端学习网站，提供**系统化课程**和**快速教程**两种学习模式。

## ✨ 特性

- ⚡ **Vue3 + Vite** - 快速的开发体验
- 🎨 **Material Design** - 精美的 UI 设计系统
- 📚 **双模式学习** - 系统课程 + 快速教程
- 💡 **交互式组件** - 70+ 交互式学习组件
- 📝 **在线编辑器** - 实时预览代码效果
- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🎯 **进度追踪** - 学习进度可视化

## 🎓 学习模式

### 📘 系统化课程（73课）
循序渐进，从零开始的完整学习路径：

- **HTML 基础** (12课) - ✅ 已完成 4/12
  - ✅ 第1课：认识 HTML
  - ✅ 第2课：基础标签
  - ✅ 第3课：列表与表格
  - ✅ 第4课：图片与多媒体
  - 🚧 第5-12课开发中...

- **CSS 基础** (16课) - 🚧 开发中
- **JavaScript 基础** (15课) - 🚧 开发中
- **JavaScript 进阶** (10课) - 🚧 开发中
- **Vue3 基础** (12课) - ✅ 已完成 6/12 ⭐
  - ✅ 第54课：Vue3 简介
  - ✅ 第55课：模板语法
  - ✅ 第56课：计算属性与侦听器
  - ✅ 第57课：条件渲染
  - ✅ 第58课：列表渲染
  - ✅ 第59课：表单绑定
  - 🚧 第60-65课开发中...
- **Vue3 进阶** (8课) - 🚧 开发中

## 学习内容

### Vue3 框架
- **Vue3 简介** - Vue3 特性、优势、核心概念
- **模板语法** - 插值语法、指令系统、事件绑定
- **响应式系统** - ref、reactive、computed、watch
- **条件与列表** - v-if/v-show、v-for、key 属性
- **表单处理** - v-model、表单控件、修饰符
- **组件系统** - Props、Emits、插槽、生命周期（开发中）

### HTML 基础
- **HTML 结构** - 文档结构、基础标签、语义化
- **列表与表格** - ul/ol/dl、table 结构
- **多媒体** - 图片、音频、视频、iframe
- **表单元素** - input、select、textarea（开发中）

### CSS 基础（规划中）
- **选择器** - 基础选择器、伪类、伪元素
- **盒模型** - margin、padding、border
- **布局** - Flexbox、Grid
- **动画** - Transition、Animation

### JavaScript（规划中）
- **基础语法** - 变量、数据类型、函数、循环
- **ES6+** - 解构、箭头函数、模板字符串
- **异步编程** - Promise、async/await

## 快速开始

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

访问 http://localhost:3000 查看网站

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览生产版本

\`\`\`bash
npm run preview
\`\`\`

## 项目结构

\`\`\`
vue3_paper_search/
├── index.html              # HTML 入口
├── package.json            # 依赖配置
├── vite.config.js          # Vite 配置
├── src/
│   ├── main.js            # 应用入口
│   ├── App.vue            # 根组件
│   ├── router/
│   │   └── index.js       # 路由配置
│   ├── components/
│   │   ├── Navbar.vue     # 导航栏
│   │   └── Sidebar.vue    # 侧边栏（支持展开/折叠）
│   ├── views/
│   │   ├── Home.vue       # 首页
│   │   └── lessons/       # 系统化课程
│   │       ├── HTMLLesson1-12.vue    # HTML 课程
│   │       └── Vue3Lesson1-6.vue     # Vue3 课程
│   └── styles/
│       └── global.css     # 全局样式
└── STYLE.md              # UI 设计规范
\`\`\`

## 设计规范

本项目遵循 Google Material Design 设计原则，详细的设计规范请查看 [STYLE.md](./STYLE.md)

## 技术栈

- **框架**: Vue 3.4+
- **路由**: Vue Router 4.2+
- **构建工具**: Vite 5.0+
- **语言**: JavaScript (ES6+)
- **样式**: CSS3 + CSS Variables

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 🎯 课程开发进度

查看详细进度：[LESSON_PROGRESS.md](./LESSON_PROGRESS.md)

完整课程大纲：[CURRICULUM.md](./CURRICULUM.md)

- **已完成**: 6/73 课 (8.2%)
- **Vue3 基础**: 已完成第54-59课（6/12课，50%进度）
- **下一批**: Vue3第60-61课（事件处理、组件基础）
- **更新节奏**: 每次发布 2 课

## 🚀 开发计划

### 近期目标
- [x] 系统化课程框架
- [x] 在线代码编辑器
- [x] 课程导航系统
- [x] 第1-2课完整内容（HTML）
- [x] 第3-4课完整内容（HTML）
- [x] Vue3 第1-6课完整内容（Vue3基础模块已完成50%）
- [ ] Vue3 第7-8课开发（事件处理、组件基础）
- [ ] 学习进度本地存储

### 长期目标
- [ ] 完成全部73课
- [ ] 支持暗黑模式
- [ ] 添加练习题测验系统
- [ ] 添加笔记功能
- [ ] 社区讨论功能

## License

MIT

## 作者

基于 Vue3 和 Material Design 构建
