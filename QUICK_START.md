# 🚀 快速开始指南

## 📦 安装依赖

```bash
npm install
```

## 🏃 运行项目

### 开发模式
```bash
npm run dev
```

访问: http://localhost:3000

### 生产构建
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

---

## 📚 访问课程

### 系统化课程

#### HTML 课程
- **第1课**: http://localhost:3000/lessons/html/lesson-1
  - 主题: 认识 HTML
  - 时长: 15分钟
  - 内容: HTML 简介、文档结构、第一个网页

- **第2课**: http://localhost:3000/lessons/html/lesson-2
  - 主题: 基础标签
  - 时长: 20分钟
  - 内容: 标题、段落、文本格式化、链接

### 快速教程
- Vue3 基础: http://localhost:3000/vue3/basics
- Vue3 组件: http://localhost:3000/vue3/components
- Vue3 响应式: http://localhost:3000/vue3/reactivity
- JavaScript 基础: http://localhost:3000/javascript/basics
- JavaScript 进阶: http://localhost:3000/javascript/advanced
- HTML & CSS: http://localhost:3000/html-css

---

## 🎯 学习路径推荐

### 新手路径（从零开始）
1. 第1课：认识 HTML ⭐推荐起点
2. 第2课：基础标签
3. 更多课程开发中...

### 快速复习路径
直接访问快速教程部分，适合已有基础的学习者。

---

## 📖 课程特色

### 交互式学习
- ✅ 在线代码编辑器（实时预览）
- ✅ 可视化效果对比
- ✅ 交互式标签选择器
- ✅ 综合练习项目

### 精美设计
- ✅ Material Design 风格
- ✅ 响应式布局
- ✅ 流畅动画效果
- ✅ 清晰的层次结构

### 学习辅助
- ✅ 课程导航（上一课/下一课）
- ✅ 学习进度标记
- ✅ 知识点总结
- ✅ 实践练习

---

## 🎨 项目结构

```
vue3_paper_search/
├── src/
│   ├── components/          # 通用组件
│   │   ├── Navbar.vue      # 导航栏
│   │   ├── Sidebar.vue     # 侧边栏
│   │   ├── CodeEditor.vue  # 代码编辑器
│   │   └── LessonLayout.vue # 课程布局
│   │
│   ├── views/
│   │   ├── Home.vue        # 首页
│   │   ├── lessons/        # 系统课程目录
│   │   │   ├── HTMLLesson1.vue
│   │   │   └── HTMLLesson2.vue
│   │   └── [快速教程...]
│   │
│   ├── router/
│   │   └── index.js        # 路由配置
│   │
│   ├── data/
│   │   └── curriculum.js   # 课程数据
│   │
│   └── styles/
│       └── global.css      # 全局样式
│
├── index.html              # HTML 入口
├── vite.config.js          # Vite 配置
├── package.json            # 依赖配置
├── CURRICULUM.md           # 完整课程大纲
├── LESSON_PROGRESS.md      # 课程开发进度
└── TEST_REPORT.md          # 测试报告
```

---

## 💡 使用技巧

### 1. 使用代码编辑器
每个课程都包含在线代码编辑器：
- 修改代码后会自动预览
- 点击"运行"按钮手动刷新
- 点击"重置"恢复初始代码

### 2. 课程导航
- 左侧边栏：浏览所有课程
- 页面底部：快速跳转上一课/下一课
- 首页：查看推荐的学习路径

### 3. 标记学习进度
- 每课底部有"标记为已完成"按钮
- 帮助追踪学习进度（即将支持持久化）

### 4. 实践练习
- 每课包含互动练习
- 在代码编辑器中完成任务
- 实时查看效果

---

## 🐛 问题排查

### 端口已被占用
```bash
# 修改 vite.config.js 中的端口号
server: {
  port: 3001  // 改为其他端口
}
```

### 依赖安装失败
```bash
# 清除缓存重新安装
rm -rf node_modules package-lock.json
npm install
```

### 页面无法访问
1. 确认开发服务器正在运行
2. 检查控制台是否有错误
3. 尝试刷新浏览器（Ctrl/Cmd + Shift + R）

---

## 📞 获取帮助

- 查看 [CURRICULUM.md](./CURRICULUM.md) 了解完整课程规划
- 查看 [LESSON_PROGRESS.md](./LESSON_PROGRESS.md) 了解开发进度
- 查看 [TEST_REPORT.md](./TEST_REPORT.md) 了解测试状态

---

## 🎉 开始学习

现在就访问 http://localhost:3000 开始你的前端学习之旅吧！

推荐从 **第1课：认识 HTML** 开始 🚀
