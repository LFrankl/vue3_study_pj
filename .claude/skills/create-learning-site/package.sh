#!/bin/bash

# Learning Site Generator 打包脚本
# 用于创建可分发的压缩包

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  📦 Learning Site Generator 打包工具"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 获取当前目录
CURRENT_DIR=$(pwd)
SKILL_NAME="learning-site-generator"
VERSION="v1.0.0"
OUTPUT_DIR="$CURRENT_DIR"

# 临时目录
TEMP_DIR="/tmp/${SKILL_NAME}-package"

echo -e "${BLUE}📁 准备打包...${NC}"

# 检查必要文件
required_files=(
  "generator.js"
  "skill.json"
  "templates/CodeEditor.vue"
  "templates/LessonLayout.vue"
  "templates/global.css"
  "README.md"
)

echo -e "${BLUE}🔍 检查必要文件...${NC}"
all_exist=true
for file in "${required_files[@]}"; do
  if [ -f "$file" ]; then
    echo -e "${GREEN}✓${NC} $file"
  else
    echo -e "${YELLOW}✗${NC} $file 不存在"
    all_exist=false
  fi
done

if [ "$all_exist" = false ]; then
  echo ""
  echo -e "${YELLOW}❌ 部分必要文件缺失，无法打包${NC}"
  exit 1
fi

# 清理旧的临时目录
if [ -d "$TEMP_DIR" ]; then
  rm -rf "$TEMP_DIR"
fi

# 创建临时目录
mkdir -p "$TEMP_DIR/$SKILL_NAME"

echo ""
echo -e "${BLUE}📋 复制文件...${NC}"

# 复制核心文件
cp generator.js "$TEMP_DIR/$SKILL_NAME/"
cp skill.json "$TEMP_DIR/$SKILL_NAME/"

# 复制模板目录
mkdir -p "$TEMP_DIR/$SKILL_NAME/templates"
cp templates/* "$TEMP_DIR/$SKILL_NAME/templates/"

# 复制文档
cp README.md "$TEMP_DIR/$SKILL_NAME/" 2>/dev/null || true
cp QUICK_START.md "$TEMP_DIR/$SKILL_NAME/" 2>/dev/null || true
cp DEMO.md "$TEMP_DIR/$SKILL_NAME/" 2>/dev/null || true
cp examples.md "$TEMP_DIR/$SKILL_NAME/" 2>/dev/null || true
cp STANDALONE.md "$TEMP_DIR/$SKILL_NAME/" 2>/dev/null || true

# 复制工具脚本
cp test.sh "$TEMP_DIR/$SKILL_NAME/" 2>/dev/null || true
chmod +x "$TEMP_DIR/$SKILL_NAME/test.sh" 2>/dev/null || true

echo -e "${GREEN}✓${NC} 文件复制完成"

# 创建压缩包
echo ""
echo -e "${BLUE}🗜️  创建压缩包...${NC}"

cd /tmp

# 创建 tar.gz
TAR_FILE="${SKILL_NAME}-${VERSION}.tar.gz"
tar -czf "$TAR_FILE" \
  --exclude='.DS_Store' \
  --exclude='node_modules' \
  "${SKILL_NAME}"

echo -e "${GREEN}✓${NC} 创建 $TAR_FILE"

# 创建 zip
ZIP_FILE="${SKILL_NAME}-${VERSION}.zip"
zip -rq "$ZIP_FILE" \
  "${SKILL_NAME}" \
  -x "*/node_modules/*" "*/.DS_Store"

echo -e "${GREEN}✓${NC} 创建 $ZIP_FILE"

# 移动到输出目录
mv "$TAR_FILE" "$OUTPUT_DIR/"
mv "$ZIP_FILE" "$OUTPUT_DIR/"

# 清理临时目录
rm -rf "$TEMP_DIR"

# 获取文件大小
TAR_SIZE=$(du -h "$OUTPUT_DIR/$TAR_FILE" | cut -f1)
ZIP_SIZE=$(du -h "$OUTPUT_DIR/$ZIP_FILE" | cut -f1)

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}  ✅ 打包完成！${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📦 生成的文件："
echo ""
echo -e "  ${BLUE}tar.gz 格式:${NC}"
echo "    文件: $TAR_FILE"
echo "    大小: $TAR_SIZE"
echo "    路径: $OUTPUT_DIR/$TAR_FILE"
echo ""
echo -e "  ${BLUE}zip 格式:${NC}"
echo "    文件: $ZIP_FILE"
echo "    大小: $ZIP_SIZE"
echo "    路径: $OUTPUT_DIR/$ZIP_FILE"
echo ""
echo -e "${BLUE}📖 使用方法:${NC}"
echo ""
echo "  解压 tar.gz:"
echo "    tar -xzf $TAR_FILE"
echo ""
echo "  解压 zip:"
echo "    unzip $ZIP_FILE"
echo ""
echo "  使用生成器:"
echo "    cd $SKILL_NAME"
echo "    node generator.js --topic=\"Rust\" --topicIcon=\"🦀\" --outputDir=\"./output\""
echo ""
echo -e "${BLUE}📤 分享:${NC}"
echo ""
echo "  可以将这些压缩包分享给任何人使用！"
echo "  完全独立，无需任何依赖。"
echo ""
