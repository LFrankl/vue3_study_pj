# 🎁 独立使用指南

本 skill 现在是**完全独立**的，可以复制到任何地方使用！

## ✅ 独立性说明

这个 Learning Site Generator 现在：

- ✅ **完全独立** - 不依赖任何外部项目
- ✅ **自包含模板** - 所有核心组件已内置在 `templates/` 目录
- ✅ **可移植** - 复制到任何地方都能正常工作
- ✅ **零配置** - 开箱即用，无需额外设置

## 📦 目录结构

```
create-learning-site/              # 整个目录可以随意复制
├── generator.js                   # ✅ 主生成器（独立运行）
├── skill.json                     # Skill 配置
├── templates/                     # ✅ 自包含模板文件
│   ├── CodeEditor.vue            # 代码编辑器组件
│   ├── LessonLayout.vue          # 课程布局组件
│   └── global.css                # 全局样式（45+ CSS 变量）
├── README.md                      # 完整文档
├── QUICK_START.md                 # 快速开始
├── DEMO.md                        # 演示教程
├── examples.md                    # 使用示例
├── test.sh                        # 测试脚本
└── STANDALONE.md                  # 本文件
```

## 🚀 如何复制和使用

### 方法 1: 直接复制整个目录

```bash
# 1. 复制整个 skill 目录到任意位置
cp -r .claude/skills/create-learning-site ~/my-tools/learning-site-generator

# 2. 进入目录
cd ~/my-tools/learning-site-generator

# 3. 直接使用！
node generator.js --topic="Rust" --topicIcon="🦀" --outputDir="/path/to/output"
```

### 方法 2: 在其他项目中使用

```bash
# 1. 复制到新项目的 .claude/skills/ 目录
cp -r /path/to/create-learning-site /path/to/new-project/.claude/skills/

# 2. 在新项目中使用
cd /path/to/new-project/.claude/skills/create-learning-site
node generator.js --topic="Python" --topicIcon="🐍" --outputDir="../../../../python-learning"
```

### 方法 3: 作为全局工具

```bash
# 1. 复制到用户目录
cp -r .claude/skills/create-learning-site ~/.learning-site-generator

# 2. 创建全局命令（可选）
echo 'alias gen-learning-site="node ~/.learning-site-generator/generator.js"' >> ~/.zshrc
source ~/.zshrc

# 3. 在任何地方使用
gen-learning-site --topic="Go" --topicIcon="🔵" --outputDir="./go-learning"
```

## 🧪 验证独立性

运行测试脚本验证所有功能正常：

```bash
./test.sh
```

测试内容：
- ✅ 生成 Rust 项目
- ✅ 生成 Python 项目
- ✅ 生成自定义主题项目
- ✅ 验证文件完整性
- ✅ 检查模板文件存在

## 📋 使用检查清单

复制到新位置后，确认以下文件存在：

```bash
# 核心文件
✓ generator.js              # 主生成器
✓ skill.json                # 配置文件

# 模板文件（必需）
✓ templates/CodeEditor.vue
✓ templates/LessonLayout.vue
✓ templates/global.css

# 文档文件（推荐）
✓ README.md
✓ QUICK_START.md
✓ DEMO.md
✓ examples.md
✓ STANDALONE.md

# 工具脚本（可选）
✓ test.sh
```

## 🎯 快速测试

复制后立即测试：

```bash
# 生成一个测试项目
node generator.js \
  --topic="Test" \
  --topicIcon="🧪" \
  --outputDir="/tmp/test-learning"

# 检查输出
ls -la /tmp/test-learning

# 清理测试
rm -rf /tmp/test-learning
```

## 💡 使用场景

### 场景 1: 分享给团队成员

```bash
# 打包整个目录
tar -czf learning-site-generator.tar.gz create-learning-site/

# 发送给团队成员
# 团队成员解压后即可使用
tar -xzf learning-site-generator.tar.gz
cd create-learning-site
node generator.js --help
```

### 场景 2: 作为项目模板工具

```bash
# 在项目根目录创建 tools 文件夹
mkdir -p ~/projects/my-project/tools
cp -r create-learning-site ~/projects/my-project/tools/

# 使用
cd ~/projects/my-project/tools/create-learning-site
node generator.js --topic="ProjectDocs" --outputDir="../../docs-site"
```

### 场景 3: 集成到 CI/CD

```yaml
# .github/workflows/generate-docs.yml
name: Generate Learning Site

on:
  push:
    branches: [ main ]

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Generate Site
        run: |
          cd tools/create-learning-site
          node generator.js \
            --topic="API Docs" \
            --topicIcon="📚" \
            --outputDir="../../generated-site"

      - name: Deploy
        # ... 部署步骤
```

## 🔧 自定义模板

如果需要修改生成的内容，编辑模板文件：

### 修改代码编辑器

```bash
# 编辑 CodeEditor 组件
vim templates/CodeEditor.vue
```

### 修改课程布局

```bash
# 编辑 LessonLayout 组件
vim templates/LessonLayout.vue
```

### 修改样式系统

```bash
# 编辑全局样式
vim templates/global.css

# 例如修改主色调
# 查找并修改: --primary-blue: #1a73e8;
```

## 📦 打包分发

### 创建发布包

```bash
# 创建压缩包
tar -czf learning-site-generator-v1.0.0.tar.gz \
  --exclude='node_modules' \
  --exclude='.DS_Store' \
  create-learning-site/

# 或使用 zip
zip -r learning-site-generator-v1.0.0.zip \
  create-learning-site/ \
  -x "*/node_modules/*" "*/.DS_Store"
```

### 发布到 GitHub

```bash
# 1. 创建独立仓库
git init
git add .
git commit -m "Initial commit: Learning Site Generator v1.0.0"

# 2. 推送到 GitHub
git remote add origin https://github.com/yourusername/learning-site-generator.git
git push -u origin main

# 3. 创建 Release
# 在 GitHub 上创建 Release 并上传压缩包
```

## 🔗 依赖说明

### 运行时依赖

生成器本身只需要：
- **Node.js** 18+ （仅用于运行 generator.js）
- **npm** （生成的项目需要）

### 生成项目的依赖

生成的学习网站项目包含：
- Vue 3.4+
- Vue Router 4.2+
- Vite 5.0+

这些依赖会自动写入生成项目的 `package.json`。

## ⚠️ 注意事项

### ✅ 可以做的

- ✅ 复制到任何目录
- ✅ 重命名目录
- ✅ 修改模板文件
- ✅ 添加新的模板
- ✅ 修改 generator.js
- ✅ 分享给他人
- ✅ 用于商业项目

### ❌ 不要做的

- ❌ 删除 `templates/` 目录
- ❌ 删除核心模板文件（CodeEditor.vue, LessonLayout.vue, global.css）
- ❌ 修改 generator.js 中的路径逻辑（除非你知道在做什么）

## 🆘 故障排除

### 问题 1: "模板文件不存在"

**原因**: `templates/` 目录或文件缺失

**解决**:
```bash
# 检查模板文件
ls -la templates/

# 应该看到：
# CodeEditor.vue
# LessonLayout.vue
# global.css
```

### 问题 2: "生成的项目缺少组件"

**原因**: 模板文件损坏或不完整

**解决**:
```bash
# 重新复制模板文件
# 从原始项目复制或从备份恢复
```

### 问题 3: "node: command not found"

**原因**: 未安装 Node.js

**解决**:
```bash
# macOS
brew install node

# Ubuntu/Debian
sudo apt install nodejs npm

# 验证安装
node --version
npm --version
```

## 📊 版本信息

- **版本**: v1.0.0
- **发布日期**: 2026-02-28
- **Node.js 要求**: 18+
- **许可证**: MIT

## 🎉 开始使用

现在你可以：

1. **复制整个目录** 到任何位置
2. **运行 generator.js** 生成学习网站
3. **自定义模板** 满足特定需求
4. **分享给他人** 帮助更多人

```bash
# 立即开始
node generator.js --topic="YourTopic" --topicIcon="🚀" --outputDir="./output"
```

---

**完全独立，随处可用！** 🎁
