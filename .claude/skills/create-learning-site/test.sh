#!/bin/bash

# Learning Site Generator 测试脚本
# 用于验证生成器功能是否正常

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🧪 Learning Site Generator 测试"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 测试目录
TEST_DIR="/tmp/learning-site-test"

# 清理旧的测试目录
if [ -d "$TEST_DIR" ]; then
    echo -e "${YELLOW}清理旧的测试目录...${NC}"
    rm -rf "$TEST_DIR"
fi

# 创建测试目录
mkdir -p "$TEST_DIR"

echo -e "${BLUE}测试 1: 生成 Rust 学习网站${NC}"
node generator.js \
    --topic="Rust" \
    --topicIcon="🦀" \
    --outputDir="$TEST_DIR/rust-learning"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Rust 项目生成成功${NC}"
else
    echo -e "${YELLOW}✗ Rust 项目生成失败${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}测试 2: 验证项目结构${NC}"

# 检查必要的文件是否存在
files=(
    "$TEST_DIR/rust-learning/package.json"
    "$TEST_DIR/rust-learning/vite.config.js"
    "$TEST_DIR/rust-learning/index.html"
    "$TEST_DIR/rust-learning/src/main.js"
    "$TEST_DIR/rust-learning/src/App.vue"
    "$TEST_DIR/rust-learning/src/router/index.js"
    "$TEST_DIR/rust-learning/src/components/Navbar.vue"
    "$TEST_DIR/rust-learning/src/components/Sidebar.vue"
    "$TEST_DIR/rust-learning/src/components/CodeEditor.vue"
    "$TEST_DIR/rust-learning/src/components/LessonLayout.vue"
    "$TEST_DIR/rust-learning/src/views/Home.vue"
    "$TEST_DIR/rust-learning/src/data/curriculum.js"
    "$TEST_DIR/rust-learning/src/styles/global.css"
    "$TEST_DIR/rust-learning/README.md"
)

all_exist=true
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $(basename $file)"
    else
        echo -e "${YELLOW}✗${NC} $(basename $file) 不存在"
        all_exist=false
    fi
done

if [ "$all_exist" = true ]; then
    echo -e "${GREEN}✓ 所有必要文件已生成${NC}"
else
    echo -e "${YELLOW}⚠ 部分文件缺失${NC}"
fi

echo ""
echo -e "${BLUE}测试 3: 验证 package.json${NC}"

# 检查 package.json 内容
if grep -q "rust-learning-site" "$TEST_DIR/rust-learning/package.json"; then
    echo -e "${GREEN}✓ 项目名称正确${NC}"
else
    echo -e "${YELLOW}✗ 项目名称不正确${NC}"
fi

if grep -q "vue" "$TEST_DIR/rust-learning/package.json"; then
    echo -e "${GREEN}✓ Vue 依赖已添加${NC}"
else
    echo -e "${YELLOW}✗ Vue 依赖缺失${NC}"
fi

if grep -q "vite" "$TEST_DIR/rust-learning/package.json"; then
    echo -e "${GREEN}✓ Vite 依赖已添加${NC}"
else
    echo -e "${YELLOW}✗ Vite 依赖缺失${NC}"
fi

echo ""
echo -e "${BLUE}测试 4: 生成 Python 学习网站${NC}"
node generator.js \
    --topic="Python" \
    --topicIcon="🐍" \
    --outputDir="$TEST_DIR/python-learning"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Python 项目生成成功${NC}"
else
    echo -e "${YELLOW}✗ Python 项目生成失败${NC}"
fi

echo ""
echo -e "${BLUE}测试 5: 生成自定义主题${NC}"
node generator.js \
    --topic="Docker" \
    --topicIcon="🐳" \
    --outputDir="$TEST_DIR/docker-learning"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Docker 项目生成成功${NC}"
else
    echo -e "${YELLOW}✗ Docker 项目生成失败${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}  ✅ 测试完成！${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "生成的测试项目位于: $TEST_DIR"
echo ""
echo "查看生成的项目："
echo "  cd $TEST_DIR/rust-learning"
echo "  npm install"
echo "  npm run dev"
echo ""
echo "清理测试文件："
echo "  rm -rf $TEST_DIR"
echo ""
