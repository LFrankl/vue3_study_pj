# 🎓 Learning Site Generator - 学习网站生成器

基于当前项目的交互式学习网站生成器，可快速创建任何编程语言或技术主题的学习平台。

## 🎁 **现在是完全独立的！**

这个生成器已经**完全独立**，可以：
- ✅ 复制到任何地方使用
- ✅ 打包分发给他人
- ✅ 无需依赖源项目
- ✅ 包含所有核心组件和样式

## 📦 位置

```
.claude/skills/create-learning-site/
├── generator.js                   # ✅ 主生成器（独立）
├── package.json                   # ✅ Node.js 配置
├── skill.json                     # Skill 配置
├── templates/                     # ✅ 所有核心组件（独立）
│   ├── CodeEditor.vue            # 代码编辑器
│   ├── LessonLayout.vue          # 课程布局
│   └── global.css                # 45+ CSS 变量
├── README.md                      # 完整文档
├── README_STANDALONE.md           # 🆕 独立使用说明
├── STANDALONE.md                  # 🆕 独立使用指南
├── QUICK_START.md                 # 快速开始指南
├── DEMO.md                        # 5分钟演示
├── examples.md                    # 使用示例集
├── test.sh                        # 测试脚本
└── package.sh                     # 🆕 打包脚本
```

## ✨ 特性

本生成器继承了当前项目的所有优秀特性：

- ✅ **Vue3 + Vite** - 现代化开发环境
- ✅ **Material Design** - 45+ CSS 变量设计系统
- ✅ **CodeEditor 组件** - 实时代码编辑和预览
- ✅ **LessonLayout 模板** - 统一的课程页面结构
- ✅ **响应式设计** - 完美适配桌面和移动端
- ✅ **可折叠侧边栏** - 平滑的展开/折叠动画
- ✅ **主题切换支持** - 预留暗黑模式接口
- ✅ **课程导航系统** - 上一课/下一课快速切换
- ✅ **进度追踪** - 课程完成状态标记

## 🚀 快速使用

### 方式 1: 在当前项目使用

```bash
# 进入 skill 目录
cd .claude/skills/create-learning-site

# 生成 Rust 学习网站
node generator.js --topic="Rust" --topicIcon="🦀" --outputDir="../../../../rust-learning"

# 安装并启动
cd ../../../../rust-learning
npm install
npm run dev
```

### 方式 2: 复制到任何地方使用 🆕

```bash
# 复制整个目录
cp -r .claude/skills/create-learning-site ~/my-generator

# 在任何地方使用
cd ~/my-generator
node generator.js --topic="Python" --topicIcon="🐍" --outputDir="/path/to/output"
```

### 方式 3: 打包分发 🆕

```bash
cd .claude/skills/create-learning-site

# 运行打包脚本
./package.sh

# 生成压缩包：
# - learning-site-generator-v1.0.0.tar.gz
# - learning-site-generator-v1.0.0.zip
```

访问 http://localhost:3000 🎉

## 🎯 支持的主题

### 预设主题

生成器内置了以下主题的优化配置：

| 主题 | 图标 | 模块数 | 总课程 |
|------|------|--------|--------|
| **Rust** | 🦀 | 3 | 37 |
| **Python** | 🐍 | 3 | 37 |
| **Go** | 🔵 | 3 | 37 |
| **TypeScript** | 📘 | 3 | 32 |

### 自定义主题

支持任何主题，生成器会自动创建通用的课程结构：

```bash
# 示例：Docker 学习网站
node generator.js --topic="Docker" --topicIcon="🐳" --outputDir="../../../../docker-learning"

# 示例：Kubernetes 学习网站
node generator.js --topic="Kubernetes" --topicIcon="☸️" --outputDir="../../../../k8s-learning"

# 示例：机器学习网站
node generator.js --topic="机器学习" --topicIcon="🤖" --outputDir="../../../../ml-learning"
```

## 📋 生成的项目包含

### 核心组件

1. **CodeEditor.vue** - 在线代码编辑器
   - HTML/CSS/JavaScript 三标签编辑
   - 实时预览
   - iframe 沙箱隔离
   - 错误捕获

2. **LessonLayout.vue** - 课程页面模板
   - 统一的页面结构
   - 课程导航
   - 进度标记
   - 内容插槽

3. **Navbar.vue** - 顶部导航栏
   - 品牌展示
   - 侧边栏切换
   - 主题切换

4. **Sidebar.vue** - 侧边栏
   - 课程模块展示
   - 展开/折叠动画
   - 活跃状态高亮

### 配置文件

- `package.json` - 依赖配置
- `vite.config.js` - Vite 构建配置
- `index.html` - HTML 入口
- `src/main.js` - 应用入口
- `src/App.vue` - 根组件
- `src/router/index.js` - 路由配置
- `src/data/curriculum.js` - 课程数据
- `src/styles/global.css` - 全局样式（45+ CSS 变量）

## 🎨 设计系统

生成的项目包含完整的 Material Design 风格设计系统：

### CSS 变量系统（45+ 变量）

```css
/* 颜色系统 */
--primary-blue: #1a73e8
--success-bg: #e6f4ea
--warning-bg: #fef7e0
--error-bg: #fce8e6
--info-bg: #e8f0fe

/* 间距系统（8px 基础） */
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px

/* 阴影层级 */
--shadow: 0 1px 2px ...
--shadow-hover: 0 1px 3px ...
--shadow-raised: 0 2px 4px ...

/* 动画系统 */
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1)
--duration-fast: 150ms
--duration-normal: 200ms
```

### 组件样式类

- **按钮**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-icon`
- **卡片**: `.card`, `.card-interactive`, `.card-header`
- **徽章**: `.badge`, `.badge-success`, `.badge-warning`, `.badge-error`
- **工具类**: `.flex`, `.gap-md`, `.p-lg`, `.mt-lg`, 等

## 📖 详细文档

- **完整文档**: [.claude/skills/create-learning-site/README.md](.claude/skills/create-learning-site/README.md)
- **快速开始**: [.claude/skills/create-learning-site/QUICK_START.md](.claude/skills/create-learning-site/QUICK_START.md)
- **使用示例**: [.claude/skills/create-learning-site/examples.md](.claude/skills/create-learning-site/examples.md)

## 🧪 测试

运行测试脚本验证生成器功能：

```bash
cd .claude/skills/create-learning-site
./test.sh
```

测试内容：
- ✅ 生成 Rust、Python、Docker 三个主题
- ✅ 验证项目结构完整性
- ✅ 检查必要文件是否存在
- ✅ 验证配置文件内容

## 🔧 参数说明

| 参数 | 类型 | 必需 | 默认值 | 说明 |
|------|------|------|--------|------|
| `--topic` | String | ✅ | - | 学习主题名称 |
| `--topicIcon` | String | ❌ | 📚 | 主题图标（emoji） |
| `--outputDir` | String | ✅ | - | 输出目录路径 |

## 📊 生成统计

每个生成的项目包含：

- 📁 **目录**: 8 个核心目录
- 📄 **文件**: 15+ 个文件
- 🎨 **组件**: 4 个核心组件
- 🎯 **CSS变量**: 45+ 个设计变量
- 📚 **示例课程**: 根据主题 30-40 课
- 💾 **代码行数**: ~2000+ 行

## 🌟 使用场景

1. **编程语言学习** - Rust, Python, Go, TypeScript, Java, C++
2. **框架教程** - React, Vue, Angular, Next.js, Nuxt
3. **工具学习** - Docker, Kubernetes, Git, Linux
4. **技术专题** - 算法, 数据结构, 设计模式, 系统设计
5. **前端技术** - HTML, CSS, JavaScript, WebAssembly
6. **后端技术** - Node.js, Spring Boot, Django, Rails
7. **数据科学** - 机器学习, 数据分析, 深度学习
8. **区块链** - Web3, Solidity, Smart Contracts

## 🎁 示例项目

### 示例 1: Rust 学习网站

```bash
node generator.js --topic="Rust" --topicIcon="🦀" --outputDir="../rust-learning"
```

**课程模块**:
- 🦀 Rust 基础 (15课) - 变量、数据类型、控制流
- 🔒 所有权系统 (12课) - 借用、生命周期、智能指针
- ⚡ Rust 进阶 (10课) - 并发、宏、不安全代码

### 示例 2: Python 学习网站

```bash
node generator.js --topic="Python" --topicIcon="🐍" --outputDir="../python-learning"
```

**课程模块**:
- 🐍 Python 基础 (15课) - 语法、数据结构、函数
- 🎯 面向对象编程 (10课) - 类、继承、多态
- ⚡ Python 进阶 (12课) - 装饰器、生成器、异步

## 🚀 未来规划

- [ ] 支持多语言（英文、日文等）
- [ ] 内置更多主题预设
- [ ] 自动生成示例课程内容
- [ ] 集成练习题系统
- [ ] 添加视频教程支持
- [ ] 学习进度云同步
- [ ] 社区讨论功能
- [ ] AI 助手集成

## 💡 贡献

欢迎贡献新的主题预设或功能改进！

## 📄 License

MIT

---

## 🔗 相关链接

- **当前项目**: Vue3 前端学习平台
- **Skill 位置**: `.claude/skills/create-learning-site/`
- **原始样式系统**: `src/styles/global.css`
- **核心组件**: `src/components/`

---

**快速开始**: 进入 `.claude/skills/create-learning-site/` 查看详细文档

**问题反馈**: 如有问题，请查看 README.md 或运行测试脚本

**Happy Learning! 🎉**
