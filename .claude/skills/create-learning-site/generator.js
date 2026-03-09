#!/usr/bin/env node

/**
 * Learning Site Generator
 * 基于Vue3的交互式学习网站生成器
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 颜色输出工具
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 解析命令行参数
function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    topic: '',
    topicIcon: '📚',
    outputDir: '',
    modules: []
  };

  args.forEach(arg => {
    if (arg.startsWith('--topic=')) {
      config.topic = arg.split('=')[1].replace(/['"]/g, '');
    } else if (arg.startsWith('--topicIcon=')) {
      config.topicIcon = arg.split('=')[1].replace(/['"]/g, '');
    } else if (arg.startsWith('--outputDir=')) {
      config.outputDir = arg.split('=')[1].replace(/['"]/g, '');
    }
  });

  return config;
}

// 获取默认模块配置
function getDefaultModules(topic) {
  const moduleConfigs = {
    'Rust': [
      { id: 'basics', title: 'Rust 基础', icon: '🦀', lessons: 15 },
      { id: 'ownership', title: '所有权系统', icon: '🔒', lessons: 12 },
      { id: 'advanced', title: 'Rust 进阶', icon: '⚡', lessons: 10 }
    ],
    'Python': [
      { id: 'basics', title: 'Python 基础', icon: '🐍', lessons: 15 },
      { id: 'oop', title: '面向对象编程', icon: '🎯', lessons: 10 },
      { id: 'advanced', title: 'Python 进阶', icon: '⚡', lessons: 12 }
    ],
    'Go': [
      { id: 'basics', title: 'Go 基础', icon: '🔵', lessons: 15 },
      { id: 'concurrency', title: '并发编程', icon: '🔀', lessons: 10 },
      { id: 'advanced', title: 'Go 进阶', icon: '⚡', lessons: 12 }
    ],
    'TypeScript': [
      { id: 'basics', title: 'TypeScript 基础', icon: '📘', lessons: 12 },
      { id: 'types', title: '类型系统', icon: '🔧', lessons: 10 },
      { id: 'advanced', title: 'TypeScript 进阶', icon: '⚡', lessons: 10 }
    ]
  };

  return moduleConfigs[topic] || [
    { id: 'basics', title: `${topic} 基础`, icon: '📚', lessons: 15 },
    { id: 'intermediate', title: `${topic} 进阶`, icon: '📖', lessons: 12 },
    { id: 'advanced', title: `${topic} 高级`, icon: '⚡', lessons: 10 }
  ];
}

// 创建目录结构
function createDirectoryStructure(outputDir) {
  const dirs = [
    outputDir,
    path.join(outputDir, 'src'),
    path.join(outputDir, 'src/components'),
    path.join(outputDir, 'src/views'),
    path.join(outputDir, 'src/views/lessons'),
    path.join(outputDir, 'src/router'),
    path.join(outputDir, 'src/data'),
    path.join(outputDir, 'src/styles'),
    path.join(outputDir, 'public')
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      log(`✓ 创建目录: ${dir}`, 'green');
    }
  });
}

// 复制核心组件
function copyComponent(componentName, outputDir, templatesDir) {
  const sourcePath = path.join(templatesDir, `${componentName}.vue`);
  const targetPath = path.join(outputDir, 'src/components', `${componentName}.vue`);

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    log(`✓ 复制组件: ${componentName}.vue`, 'green');
  } else {
    log(`⚠ 模板文件不存在: ${componentName}.vue`, 'yellow');
  }
}

// 生成 package.json
function generatePackageJson(config, outputDir) {
  const packageJson = {
    name: `${config.topic.toLowerCase()}-learning-site`,
    version: '1.0.0',
    description: `${config.topic} 交互式学习网站`,
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview'
    },
    dependencies: {
      vue: '^3.4.0',
      'vue-router': '^4.2.0'
    },
    devDependencies: {
      '@vitejs/plugin-vue': '^5.0.0',
      vite: '^5.0.0'
    }
  };

  fs.writeFileSync(
    path.join(outputDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  log('✓ 生成 package.json', 'green');
}

// 生成 vite.config.js
function generateViteConfig(outputDir) {
  const viteConfig = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
`;

  fs.writeFileSync(path.join(outputDir, 'vite.config.js'), viteConfig);
  log('✓ 生成 vite.config.js', 'green');
}

// 生成 index.html
function generateIndexHtml(config, outputDir) {
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.topicIcon} ${config.topic} 学习平台</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${config.topicIcon}</text></svg>">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
`;

  fs.writeFileSync(path.join(outputDir, 'index.html'), html);
  log('✓ 生成 index.html', 'green');
}

// 生成 main.js
function generateMainJs(outputDir) {
  const mainJs = `import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/global.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
`;

  fs.writeFileSync(path.join(outputDir, 'src/main.js'), mainJs);
  log('✓ 生成 main.js', 'green');
}

// 生成 App.vue
function generateAppVue(config, outputDir) {
  const appVue = `<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="app">
    <Navbar @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    <Sidebar :open="sidebarOpen" @close="sidebarOpen = false" />
    <main class="main-content">
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
}
</style>
`;

  fs.writeFileSync(path.join(outputDir, 'src/App.vue'), appVue);
  log('✓ 生成 App.vue', 'green');
}

// 生成课程数据配置
function generateCurriculumData(config, outputDir) {
  const modules = config.modules.length > 0 ? config.modules : getDefaultModules(config.topic);

  const curriculumData = `export const curriculum = {
  ${modules.map((module, idx) => `
  ${module.id}: {
    title: '${module.title}',
    icon: '${module.icon}',
    color: getModuleColor(${idx}),
    modules: [
      {
        id: '${module.id}-module-1',
        title: '${module.title}',
        lessons: generateLessons('${module.id}', ${module.lessons})
      }
    ]
  }`).join(',\n')}
}

function getModuleColor(index) {
  const colors = ['#e34c26', '#1a73e8', '#48b884', '#f39c12', '#9b59b6'];
  return colors[index % colors.length];
}

function generateLessons(moduleId, count) {
  return Array.from({ length: count }, (_, i) => ({
    id: \`lesson-\${i + 1}\`,
    number: i + 1,
    title: \`第 \${i + 1} 课\`,
    path: \`/lessons/\${moduleId}/lesson-\${i + 1}\`,
    duration: '15分钟',
    topics: ['课程内容'],
    completed: false
  }));
}

export function getAllLessons() {
  const allLessons = [];
  Object.values(curriculum).forEach(topic => {
    topic.modules.forEach(module => {
      allLessons.push(...module.lessons);
    });
  });
  return allLessons;
}

export function getLessonById(id) {
  return getAllLessons().find(lesson => lesson.id === id);
}

export function getNextLesson(currentId) {
  const lessons = getAllLessons();
  const currentIndex = lessons.findIndex(l => l.id === currentId);
  return lessons[currentIndex + 1] || null;
}

export function getPrevLesson(currentId) {
  const lessons = getAllLessons();
  const currentIndex = lessons.findIndex(l => l.id === currentId);
  return lessons[currentIndex - 1] || null;
}
`;

  fs.writeFileSync(path.join(outputDir, 'src/data/curriculum.js'), curriculumData);
  log('✓ 生成 curriculum.js', 'green');
}

// 生成路由配置
function generateRouter(config, outputDir) {
  const modules = config.modules.length > 0 ? config.modules : getDefaultModules(config.topic);

  const routerCode = `import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' }
  }
  // TODO: 添加课程路由
  // 可以通过遍历 curriculum.js 自动生成
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = \`${config.topicIcon} ${config.topic}学习 - \${to.meta.title || '课程'}\`
  next()
})

export default router
`;

  fs.writeFileSync(path.join(outputDir, 'src/router/index.js'), routerCode);
  log('✓ 生成 router/index.js', 'green');
}

// 生成 Navbar 组件
function generateNavbar(config, outputDir) {
  const navbarVue = `<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineEmits(['toggle-sidebar'])

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  // TODO: 实现主题切换
}
</script>

<template>
  <nav class="navbar">
    <button class="btn-icon" @click="$emit('toggle-sidebar')">
      ☰
    </button>
    <RouterLink to="/" class="navbar-brand">
      <span>${config.topicIcon}</span>
      <span>${config.topic} 学习平台</span>
    </RouterLink>
    <div class="navbar-menu">
      <button class="btn-icon" @click="toggleTheme" title="切换主题">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
/* 样式继承自 global.css */
</style>
`;

  fs.writeFileSync(path.join(outputDir, 'src/components/Navbar.vue'), navbarVue);
  log('✓ 生成 Navbar.vue', 'green');
}

// 生成 Sidebar 组件
function generateSidebar(config, outputDir) {
  const modules = config.modules.length > 0 ? config.modules : getDefaultModules(config.topic);

  const sidebarVue = `<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { curriculum } from '../data/curriculum.js'

defineProps({
  open: Boolean
})

defineEmits(['close'])

const expanded = ref({
  ${modules.map(m => `${m.id}: true`).join(',\n  ')}
})

const toggleSection = (section) => {
  expanded.value[section] = !expanded.value[section]
}
</script>

<template>
  <aside class="sidebar" :class="{ open }">
    <div class="sidebar-header">
      <h2>${config.topicIcon} ${config.topic} 课程</h2>
    </div>

    ${modules.map(module => `
    <div class="sidebar-section">
      <div class="sidebar-section-header" @click="toggleSection('${module.id}')">
        <span>${module.icon} ${module.title}</span>
        <span>{{ expanded.${module.id} ? '▼' : '▶' }}</span>
      </div>
      <transition name="slide">
        <div v-show="expanded.${module.id}" class="sidebar-section-content">
          <RouterLink
            v-for="lesson in curriculum.${module.id}.modules[0].lessons"
            :key="lesson.id"
            :to="lesson.path"
            class="sidebar-item"
            active-class="active"
            @click="$emit('close')"
          >
            <span class="lesson-number">{{ lesson.number }}</span>
            <span>{{ lesson.title }}</span>
          </RouterLink>
        </div>
      </transition>
    </div>`).join('\n')}
  </aside>
</template>

<style scoped>
.sidebar-section-header {
  padding: 12px 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  transition: background var(--duration-normal) var(--ease-standard);
}

.sidebar-section-header:hover {
  background: var(--surface);
}

.lesson-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--primary-blue-light);
  color: var(--primary-blue);
  font-size: 12px;
  font-weight: 600;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 2000px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
</style>
`;

  fs.writeFileSync(path.join(outputDir, 'src/components/Sidebar.vue'), sidebarVue);
  log('✓ 生成 Sidebar.vue', 'green');
}

// 生成 Home 页面
function generateHomePage(config, outputDir) {
  const modules = config.modules.length > 0 ? config.modules : getDefaultModules(config.topic);

  const homeVue = `<script setup>
import { curriculum } from '../data/curriculum.js'
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">${config.topicIcon} ${config.topic} 学习平台</h1>
      <p class="hero-subtitle">交互式学习体验，从零开始掌握 ${config.topic}</p>
    </div>

    <div class="course-modules">
      ${modules.map(module => `
      <div class="module-card">
        <div class="module-header">
          <span class="module-icon">${module.icon}</span>
          <h2>${module.title}</h2>
        </div>
        <p class="module-description">共 ${module.lessons} 课，循序渐进学习</p>
        <RouterLink
          :to="curriculum.${module.id}.modules[0].lessons[0].path"
          class="btn btn-primary"
        >
          开始学习
        </RouterLink>
      </div>`).join('\n      ')}
    </div>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, var(--primary-blue-light) 0%, var(--surface) 100%);
  border-radius: 12px;
  margin-bottom: 48px;
}

.hero-title {
  font-size: 48px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--text-secondary);
}

.course-modules {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.module-card {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 32px;
  transition: all var(--duration-slow) var(--ease-standard);
}

.module-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.module-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.module-icon {
  font-size: 48px;
}

.module-header h2 {
  font-size: 24px;
  font-weight: 500;
  color: var(--text-primary);
}

.module-description {
  color: var(--text-secondary);
  margin-bottom: 24px;
}
</style>
`;

  fs.writeFileSync(path.join(outputDir, 'src/views/Home.vue'), homeVue);
  log('✓ 生成 Home.vue', 'green');
}

// 复制全局样式
function copyGlobalStyles(outputDir, templatesDir) {
  const sourcePath = path.join(templatesDir, 'global.css');
  const targetPath = path.join(outputDir, 'src/styles/global.css');

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    log('✓ 复制 global.css', 'green');
  } else {
    log('⚠ 模板文件不存在: global.css', 'yellow');
  }
}

// 生成 README
function generateReadme(config, outputDir) {
  const modules = config.modules.length > 0 ? config.modules : getDefaultModules(config.topic);

  const readme = `# ${config.topicIcon} ${config.topic} 学习平台

一个基于 Vue3 的交互式 ${config.topic} 学习网站。

## 特性

- ⚡ **Vue3 + Vite** - 快速的开发体验
- 🎨 **Material Design** - 精美的 UI 设计系统
- 💡 **交互式组件** - 丰富的学习组件
- 📝 **在线编辑器** - 实时预览代码效果
- 📱 **响应式设计** - 适配各种屏幕尺寸

## 课程模块

${modules.map(m => `- **${m.icon} ${m.title}** (${m.lessons}课)`).join('\n')}

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

## 技术栈

- **框架**: Vue 3.4+
- **路由**: Vue Router 4.2+
- **构建工具**: Vite 5.0+
- **语言**: JavaScript (ES6+)
- **样式**: CSS3 + CSS Variables

## 项目结构

\`\`\`
${config.topic.toLowerCase()}-learning-site/
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
│   │   ├── Sidebar.vue    # 侧边栏
│   │   ├── CodeEditor.vue # 代码编辑器
│   │   └── LessonLayout.vue # 课程模板
│   ├── views/
│   │   ├── Home.vue       # 首页
│   │   └── lessons/       # 课程页面
│   ├── data/
│   │   └── curriculum.js  # 课程数据
│   └── styles/
│       └── global.css     # 全局样式
\`\`\`

## License

MIT

---

由 Learning Site Generator 生成
`;

  fs.writeFileSync(path.join(outputDir, 'README.md'), readme);
  log('✓ 生成 README.md', 'green');
}

// 主函数
async function main() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('  📚 Learning Site Generator v1.0.0', 'bright');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  // 解析配置
  const config = parseArgs();

  if (!config.topic || !config.outputDir) {
    log('❌ 错误: 缺少必要参数', 'yellow');
    log('\n使用方法:', 'bright');
    log('  node generator.js --topic="Rust" --topicIcon="🦀" --outputDir="../rust-learning"', 'cyan');
    log('\n参数说明:', 'bright');
    log('  --topic        学习主题（必需）', 'cyan');
    log('  --topicIcon    主题图标（可选，默认📚）', 'cyan');
    log('  --outputDir    输出目录（必需）\n', 'cyan');
    process.exit(1);
  }

  // 准备模块配置
  config.modules = getDefaultModules(config.topic);

  log(`📦 正在生成 ${config.topic} 学习网站...\n`, 'bright');
  log(`  主题: ${config.topic}`, 'blue');
  log(`  图标: ${config.topicIcon}`, 'blue');
  log(`  输出: ${config.outputDir}`, 'blue');
  log(`  模块: ${config.modules.length} 个\n`, 'blue');

  // 获取模板目录
  const templatesDir = path.join(__dirname, 'templates');
  const outputDir = path.resolve(config.outputDir);

  try {
    // 1. 创建目录结构
    log('📁 创建目录结构...', 'bright');
    createDirectoryStructure(outputDir);

    // 2. 生成配置文件
    log('\n⚙️  生成配置文件...', 'bright');
    generatePackageJson(config, outputDir);
    generateViteConfig(outputDir);
    generateIndexHtml(config, outputDir);

    // 3. 生成应用入口
    log('\n🚀 生成应用文件...', 'bright');
    generateMainJs(outputDir);
    generateAppVue(config, outputDir);

    // 4. 生成组件
    log('\n🎨 生成组件...', 'bright');
    generateNavbar(config, outputDir);
    generateSidebar(config, outputDir);

    // 复制 CodeEditor 和 LessonLayout
    copyComponent('CodeEditor', outputDir, templatesDir);
    copyComponent('LessonLayout', outputDir, templatesDir);

    // 5. 生成数据和路由
    log('\n📊 生成数据配置...', 'bright');
    generateCurriculumData(config, outputDir);
    generateRouter(config, outputDir);

    // 6. 生成页面
    log('\n📄 生成页面...', 'bright');
    generateHomePage(config, outputDir);

    // 7. 复制样式
    log('\n🎨 复制样式文件...', 'bright');
    copyGlobalStyles(outputDir, templatesDir);

    // 8. 生成文档
    log('\n📝 生成文档...', 'bright');
    generateReadme(config, outputDir);

    // 9. 安装依赖
    log('\n📦 安装依赖...', 'bright');
    log('  提示: 请手动运行 npm install', 'yellow');

    // 完成
    log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
    log('  ✅ 项目生成成功！', 'green');
    log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

    log('下一步操作:', 'bright');
    log(`  cd ${config.outputDir}`, 'cyan');
    log(`  npm install`, 'cyan');
    log(`  npm run dev\n`, 'cyan');

  } catch (error) {
    log(`\n❌ 生成失败: ${error.message}`, 'yellow');
    process.exit(1);
  }
}

// 运行主函数
if (require.main === module) {
  main();
}

module.exports = { parseArgs, getDefaultModules };
