# 🎁 Learning Site Generator - 独立版本

完全独立的学习网站生成器 - 可以复制到任何地方使用！

## ✨ 现在是独立的！

这个生成器已经**完全独立**，包含所有必要的文件：

```
create-learning-site/              # ✅ 可以复制到任何地方
├── generator.js                   # ✅ 主生成器
├── package.json                   # ✅ Node.js 配置
├── skill.json                     # Skill 元数据
├── templates/                     # ✅ 所有模板文件
│   ├── CodeEditor.vue            # 代码编辑器组件
│   ├── LessonLayout.vue          # 课程布局组件
│   └── global.css                # 全局样式系统
├── README.md                      # 详细文档
├── QUICK_START.md                 # 快速开始
├── DEMO.md                        # 演示教程
├── examples.md                    # 使用示例
├── STANDALONE.md                  # 独立使用指南
├── test.sh                        # 测试脚本
└── package.sh                     # 打包脚本
```

## 🚀 三种使用方式

### 方式 1: 直接使用（推荐）

```bash
# 复制整个目录
cp -r .claude/skills/create-learning-site ~/my-generator

# 进入目录并使用
cd ~/my-generator
node generator.js --topic="Rust" --topicIcon="🦀" --outputDir="/path/to/output"
```

### 方式 2: 打包分发

```bash
# 进入 skill 目录
cd .claude/skills/create-learning-site

# 运行打包脚本
./package.sh

# 生成两个压缩包：
# - learning-site-generator-v1.0.0.tar.gz
# - learning-site-generator-v1.0.0.zip
```

然后可以：
- 📤 发送给团队成员
- ☁️ 上传到云盘
- 📦 发布到 GitHub
- 💾 备份归档

### 方式 3: 复制到其他项目

```bash
# 复制到新项目
cp -r create-learning-site /path/to/new-project/tools/

# 在新项目中使用
cd /path/to/new-project/tools/create-learning-site
node generator.js --topic="ProjectDocs" --outputDir="../../docs"
```

## ✅ 独立性验证

所有依赖都已内置：

- ✅ **CodeEditor.vue** - 从源项目复制
- ✅ **LessonLayout.vue** - 从源项目复制
- ✅ **global.css** - 从源项目复制（45+ CSS 变量）
- ✅ **generator.js** - 使用相对路径读取模板
- ✅ **package.json** - CommonJS 配置，避免模块冲突

运行测试验证：

```bash
./test.sh
```

## 📦 快速打包

```bash
# 一键打包
./package.sh

# 输出文件：
# learning-site-generator-v1.0.0.tar.gz  (~50KB)
# learning-site-generator-v1.0.0.zip     (~50KB)
```

## 🎯 使用示例

### 创建 Rust 学习网站

```bash
node generator.js \
  --topic="Rust" \
  --topicIcon="🦀" \
  --outputDir="../rust-learning"

cd ../rust-learning
npm install
npm run dev
```

### 创建 Python 学习网站

```bash
node generator.js \
  --topic="Python" \
  --topicIcon="🐍" \
  --outputDir="../python-learning"
```

### 创建任意主题

```bash
node generator.js \
  --topic="YourTopic" \
  --topicIcon="🚀" \
  --outputDir="/path/to/output"
```

## 📚 完整文档

- **STANDALONE.md** - 详细的独立使用指南
- **README.md** - 完整功能文档
- **QUICK_START.md** - 10分钟快速入门
- **DEMO.md** - 5分钟演示教程
- **examples.md** - 丰富的代码示例

## 🔧 系统要求

**唯一要求**：Node.js 18+

```bash
# 检查 Node.js 版本
node --version

# 应该显示 v18.0.0 或更高
```

不需要任何其他依赖！

## 📤 分享给他人

### 发送压缩包

```bash
# 1. 打包
./package.sh

# 2. 发送文件
# - learning-site-generator-v1.0.0.tar.gz

# 接收者使用：
tar -xzf learning-site-generator-v1.0.0.tar.gz
cd learning-site-generator
node generator.js --topic="Example" --topicIcon="📚" --outputDir="./output"
```

### 上传到 GitHub

```bash
# 创建新仓库
git init
git add .
git commit -m "Learning Site Generator v1.0.0"
git remote add origin https://github.com/username/learning-site-generator.git
git push -u origin main

# 其他人克隆使用：
git clone https://github.com/username/learning-site-generator.git
cd learning-site-generator
node generator.js --topic="Rust" --outputDir="./output"
```

## 🎨 自定义模板

所有模板文件都可以自定义：

### 修改代码编辑器

```bash
vim templates/CodeEditor.vue
```

### 修改课程布局

```bash
vim templates/LessonLayout.vue
```

### 修改设计系统

```bash
vim templates/global.css

# 修改主色调：
# --primary-blue: #1a73e8;  → #your-color
```

## 🆘 常见问题

### Q: 可以离线使用吗？

**A**: 可以！复制整个目录后，只需要 Node.js，不需要网络。

### Q: 可以修改吗？

**A**: 完全可以！所有文件都是开源的，随意修改。

### Q: 可以商用吗？

**A**: 可以！MIT 许可证，随意使用。

### Q: 文件会丢失吗？

**A**: 不会！所有模板都在 `templates/` 目录，永久保存。

## ⚡ 快速命令参考

```bash
# 生成项目
node generator.js --topic="Topic" --topicIcon="🎯" --outputDir="./output"

# 运行测试
./test.sh

# 打包分发
./package.sh

# 查看帮助
node generator.js
```

## 📊 生成统计

每次运行生成器，会创建：

- 📁 **9个目录**
- 📄 **15+个文件**
- 🎨 **4个核心组件**
- 💾 **~2500行代码**
- ⚡ **30秒完成**

## 🎉 开始使用

```bash
# 立即测试
node generator.js \
  --topic="Test" \
  --topicIcon="🧪" \
  --outputDir="/tmp/test-site"

# 查看结果
ls -la /tmp/test-site

# 清理
rm -rf /tmp/test-site
```

---

**完全独立 · 随处可用 · 开箱即用** 🎁

**问题反馈**: 查看 STANDALONE.md 或运行 `./test.sh` 测试
