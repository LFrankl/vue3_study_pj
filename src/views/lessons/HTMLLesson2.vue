<template>
  <LessonLayout
    :lesson-number="2"
    title="基础标签"
    duration="20分钟"
    :topics="['标题标签', '段落与换行', '文本格式化', '链接标签']"
    :prev-lesson="{ path: '/lessons/html/lesson-1', title: '认识 HTML' }"
    :next-lesson="null"
  >
    <!-- 第一部分：标题标签 -->
    <section class="content-section">
      <h2 class="section-title">📌 标题标签 (h1-h6)</h2>
      <div class="section-content">
        <p>HTML 提供了 6 个级别的标题标签，从 <code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code>，数字越小，标题级别越高。</p>

        <div class="code-block">
          <pre>&lt;h1&gt;一级标题 - 最重要&lt;/h1&gt;
&lt;h2&gt;二级标题&lt;/h2&gt;
&lt;h3&gt;三级标题&lt;/h3&gt;
&lt;h4&gt;四级标题&lt;/h4&gt;
&lt;h5&gt;五级标题&lt;/h5&gt;
&lt;h6&gt;六级标题 - 最小&lt;/h6&gt;</pre>
        </div>

        <div class="demo-box">
          <h4 style="margin-bottom: 16px;">效果预览：</h4>
          <div class="heading-preview">
            <div class="heading-item">
              <span class="heading-tag">&lt;h1&gt;</span>
              <h1 class="preview-h1">一级标题</h1>
            </div>
            <div class="heading-item">
              <span class="heading-tag">&lt;h2&gt;</span>
              <h2 class="preview-h2">二级标题</h2>
            </div>
            <div class="heading-item">
              <span class="heading-tag">&lt;h3&gt;</span>
              <h3 class="preview-h3">三级标题</h3>
            </div>
            <div class="heading-item">
              <span class="heading-tag">&lt;h4&gt;</span>
              <h4 class="preview-h4">四级标题</h4>
            </div>
            <div class="heading-item">
              <span class="heading-tag">&lt;h5&gt;</span>
              <h5 class="preview-h5">五级标题</h5>
            </div>
            <div class="heading-item">
              <span class="heading-tag">&lt;h6&gt;</span>
              <h6 class="preview-h6">六级标题</h6>
            </div>
          </div>
        </div>

        <div class="tips-box">
          <h4>💡 使用建议：</h4>
          <ul>
            <li>每个页面通常只有一个 <code>&lt;h1&gt;</code>，作为主标题</li>
            <li>按层级使用，不要跳级（比如 h1 后直接用 h3）</li>
            <li>标题对 SEO（搜索引擎优化）很重要</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 第二部分：段落与换行 -->
    <section class="content-section">
      <h2 class="section-title">📝 段落与换行</h2>
      <div class="section-content">
        <h3 class="subsection-title">段落标签 &lt;p&gt;</h3>
        <p><code>&lt;p&gt;</code> 标签用于定义段落，浏览器会自动在段落前后添加空白。</p>

        <div class="code-block">
          <pre>&lt;p&gt;这是第一个段落。&lt;/p&gt;
&lt;p&gt;这是第二个段落。&lt;/p&gt;</pre>
        </div>

        <h3 class="subsection-title" style="margin-top: 32px;">换行标签 &lt;br&gt;</h3>
        <p><code>&lt;br&gt;</code> 标签用于强制换行，它是一个自闭合标签。</p>

        <div class="comparison-container">
          <div class="comparison-item">
            <h4>不使用 &lt;br&gt;</h4>
            <div class="code-block">
              <pre>&lt;p&gt;
  第一行
  第二行
  第三行
&lt;/p&gt;</pre>
            </div>
            <div class="result-box">
              <p>第一行 第二行 第三行</p>
              <small>（浏览器会忽略代码中的换行）</small>
            </div>
          </div>

          <div class="comparison-item">
            <h4>使用 &lt;br&gt;</h4>
            <div class="code-block">
              <pre>&lt;p&gt;
  第一行&lt;br&gt;
  第二行&lt;br&gt;
  第三行
&lt;/p&gt;</pre>
            </div>
            <div class="result-box">
              <p>第一行<br>第二行<br>第三行</p>
              <small>（成功换行）</small>
            </div>
          </div>
        </div>

        <CodeEditor
          :initial-html="`<p>这是一个普通段落。</p>
<p>这是另一个段落。</p>
<p>这是一个带换行的段落：<br>
第一行内容<br>
第二行内容<br>
第三行内容</p>`"
          :tabs="['html']"
        />
      </div>
    </section>

    <!-- 第三部分：文本格式化 -->
    <section class="content-section">
      <h2 class="section-title">✨ 文本格式化标签</h2>
      <div class="section-content">
        <p>HTML 提供了多种标签来格式化文本，让内容更有层次和重点。</p>

        <div class="format-grid">
          <div class="format-card">
            <div class="format-header">
              <code>&lt;strong&gt;</code>
              <span class="format-badge">重要</span>
            </div>
            <p class="format-desc">定义重要文本，通常显示为<strong>粗体</strong></p>
            <div class="format-example">
              <strong>这是重要内容</strong>
            </div>
          </div>

          <div class="format-card">
            <div class="format-header">
              <code>&lt;em&gt;</code>
              <span class="format-badge">强调</span>
            </div>
            <p class="format-desc">定义强调文本，通常显示为<em>斜体</em></p>
            <div class="format-example">
              <em>这是强调内容</em>
            </div>
          </div>

          <div class="format-card">
            <div class="format-header">
              <code>&lt;mark&gt;</code>
              <span class="format-badge">标记</span>
            </div>
            <p class="format-desc">定义标记文本，通常显示为<mark>高亮</mark></p>
            <div class="format-example">
              <mark>这是高亮内容</mark>
            </div>
          </div>

          <div class="format-card">
            <div class="format-header">
              <code>&lt;del&gt;</code>
              <span class="format-badge">删除</span>
            </div>
            <p class="format-desc">定义删除文本，显示为<del>删除线</del></p>
            <div class="format-example">
              <del>这是删除内容</del>
            </div>
          </div>

          <div class="format-card">
            <div class="format-header">
              <code>&lt;ins&gt;</code>
              <span class="format-badge">插入</span>
            </div>
            <p class="format-desc">定义插入文本，显示为<ins>下划线</ins></p>
            <div class="format-example">
              <ins>这是插入内容</ins>
            </div>
          </div>

          <div class="format-card">
            <div class="format-header">
              <code>&lt;small&gt;</code>
              <span class="format-badge">小字</span>
            </div>
            <p class="format-desc">定义较小文本</p>
            <div class="format-example">
              <small>这是小号文字</small>
            </div>
          </div>

          <div class="format-card">
            <div class="format-header">
              <code>&lt;sub&gt;</code>
              <span class="format-badge">下标</span>
            </div>
            <p class="format-desc">定义下标文本</p>
            <div class="format-example">
              H<sub>2</sub>O 水分子
            </div>
          </div>

          <div class="format-card">
            <div class="format-header">
              <code>&lt;sup&gt;</code>
              <span class="format-badge">上标</span>
            </div>
            <p class="format-desc">定义上标文本</p>
            <div class="format-example">
              X<sup>2</sup> + Y<sup>2</sup> = Z<sup>2</sup>
            </div>
          </div>
        </div>

        <!-- 标签对比工具 -->
        <div class="interactive-tool">
          <h4>🎮 交互式标签对比工具</h4>
          <p>选择不同的标签，看看它们的效果：</p>

          <div class="tag-selector">
            <button
              v-for="tag in formatTags"
              :key="tag.name"
              :class="['tag-btn', { active: selectedTag === tag.name }]"
              @click="selectedTag = tag.name"
            >
              &lt;{{ tag.name }}&gt;
            </button>
          </div>

          <div class="tag-display">
            <div class="tag-info">
              <h5>{{ getCurrentTag.label }}</h5>
              <p>{{ getCurrentTag.description }}</p>
            </div>
            <div class="tag-demo">
              <div class="demo-label">效果预览：</div>
              <div class="demo-result" v-html="getCurrentTag.example"></div>
            </div>
          </div>
        </div>

        <CodeEditor
          :initial-html="`<p>这是一段<strong>非常重要</strong>的文本。</p>
<p>我们<em>强调</em>这一点。</p>
<p><mark>这段文字被标记了</mark>，请注意。</p>
<p>原价：<del>¥100</del>，现价：¥80</p>
<p>水的化学式是 H<sub>2</sub>O</p>
<p>勾股定理：a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>`"
          :tabs="['html']"
        />
      </div>
    </section>

    <!-- 第四部分：链接标签 -->
    <section class="content-section">
      <h2 class="section-title">🔗 链接标签 &lt;a&gt;</h2>
      <div class="section-content">
        <p><code>&lt;a&gt;</code> 标签（anchor，锚点）用于创建超链接，是网页互联的基础。</p>

        <h3 class="subsection-title">基本语法</h3>
        <div class="code-block">
          <pre>&lt;a href="https://www.example.com"&gt;点击访问&lt;/a&gt;</pre>
        </div>

        <div class="attribute-list">
          <div class="attribute-item">
            <code>href</code>
            <span>链接目标地址（必需）</span>
          </div>
          <div class="attribute-item">
            <code>target="_blank"</code>
            <span>在新标签页打开链接</span>
          </div>
          <div class="attribute-item">
            <code>title</code>
            <span>鼠标悬停时显示的提示文字</span>
          </div>
        </div>

        <h3 class="subsection-title" style="margin-top: 32px;">链接类型示例</h3>

        <div class="link-examples">
          <div class="link-example-card">
            <div class="link-type">外部链接</div>
            <div class="code-block">
              <pre>&lt;a href="https://www.baidu.com" target="_blank"&gt;
  访问百度
&lt;/a&gt;</pre>
            </div>
            <div class="link-result">
              <a href="https://www.baidu.com" target="_blank">访问百度</a>
            </div>
          </div>

          <div class="link-example-card">
            <div class="link-type">页面内跳转</div>
            <div class="code-block">
              <pre>&lt;a href="#section1"&gt;跳转到章节1&lt;/a&gt;

&lt;h2 id="section1"&gt;章节1&lt;/h2&gt;</pre>
            </div>
            <div class="link-result">
              <a href="#section1">跳转到章节1</a>
            </div>
          </div>

          <div class="link-example-card">
            <div class="link-type">邮件链接</div>
            <div class="code-block">
              <pre>&lt;a href="mailto:example@email.com"&gt;
  发送邮件
&lt;/a&gt;</pre>
            </div>
            <div class="link-result">
              <a href="mailto:example@email.com">发送邮件</a>
            </div>
          </div>

          <div class="link-example-card">
            <div class="link-type">电话链接</div>
            <div class="code-block">
              <pre>&lt;a href="tel:13800138000"&gt;
  拨打电话
&lt;/a&gt;</pre>
            </div>
            <div class="link-result">
              <a href="tel:13800138000">拨打电话</a>
            </div>
          </div>
        </div>

        <CodeEditor
          :initial-html="`<h3>导航菜单</h3>
<p>
  <a href='https://www.baidu.com' target='_blank'>百度</a> |
  <a href='https://www.google.com' target='_blank'>谷歌</a> |
  <a href='mailto:hello@example.com'>联系我们</a>
</p>

<h3>了解更多</h3>
<p>访问 <a href='https://developer.mozilla.org' target='_blank' title='MDN Web 文档'>MDN</a> 学习更多 HTML 知识。</p>`"
          :tabs="['html']"
        />
      </div>
    </section>

    <!-- 综合练习 -->
    <section class="content-section">
      <h2 class="section-title">✏️ 综合练习</h2>
      <div class="section-content">
        <p>创建一篇简单的博客文章，要求包含：</p>

        <div class="task-checklist">
          <label class="task-checkbox">
            <input type="checkbox">
            <span>文章标题（使用 h1）</span>
          </label>
          <label class="task-checkbox">
            <input type="checkbox">
            <span>作者和日期（使用 small 标签）</span>
          </label>
          <label class="task-checkbox">
            <input type="checkbox">
            <span>多个段落（使用 p 标签）</span>
          </label>
          <label class="task-checkbox">
            <input type="checkbox">
            <span>重点内容（使用 strong 或 em）</span>
          </label>
          <label class="task-checkbox">
            <input type="checkbox">
            <span>至少一个外部链接</span>
          </label>
        </div>

        <CodeEditor
          :initial-html="`<!-- 在这里创建你的博客文章 -->
<h1>我的第一篇博客</h1>
<p><small>作者：你的名字 | 日期：2024-02-27</small></p>

<p>这是文章的第一段...</p>`"
          :tabs="['html']"
        />
      </div>
    </section>

    <!-- 知识总结 -->
    <section class="content-section">
      <h2 class="section-title">📚 本课总结</h2>
      <div class="summary-grid">
        <div class="summary-card">
          <div class="summary-icon">📌</div>
          <h4>标题标签</h4>
          <p>h1-h6 六个级别，按层级使用</p>
        </div>
        <div class="summary-card">
          <div class="summary-icon">📝</div>
          <h4>段落换行</h4>
          <p>&lt;p&gt; 定义段落，&lt;br&gt; 强制换行</p>
        </div>
        <div class="summary-card">
          <div class="summary-icon">✨</div>
          <h4>文本格式化</h4>
          <p>strong, em, mark, del 等格式标签</p>
        </div>
        <div class="summary-card">
          <div class="summary-icon">🔗</div>
          <h4>链接</h4>
          <p>&lt;a&gt; 标签创建超链接，href 指定目标</p>
        </div>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'

const selectedTag = ref('strong')

const formatTags = [
  { name: 'strong', label: '重要文本', description: '表示内容的重要性，通常以粗体显示', example: '<strong>这是重要内容</strong>' },
  { name: 'em', label: '强调文本', description: '表示内容的强调，通常以斜体显示', example: '<em>这是强调内容</em>' },
  { name: 'mark', label: '标记文本', description: '突出显示文本，通常有黄色背景', example: '<mark>这是高亮内容</mark>' },
  { name: 'del', label: '删除文本', description: '表示已删除的内容，显示删除线', example: '<del>这是删除的内容</del>' },
  { name: 'ins', label: '插入文本', description: '表示新插入的内容，显示下划线', example: '<ins>这是插入的内容</ins>' },
  { name: 'small', label: '小号文本', description: '显示较小的文本', example: '<small>这是小号文字</small>' },
  { name: 'sub', label: '下标', description: '将文本显示为下标', example: 'H<sub>2</sub>O' },
  { name: 'sup', label: '上标', description: '将文本显示为上标', example: 'X<sup>2</sup>' }
]

const getCurrentTag = computed(() => {
  return formatTags.find(tag => tag.name === selectedTag.value) || formatTags[0]
})
</script>

<style scoped>
.content-section {
  margin-bottom: 48px;
}

.section-title {
  font-size: 24px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--border);
}

.subsection-title {
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary);
  margin: 24px 0 12px;
}

.section-content {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-primary);
}

.section-content p {
  margin-bottom: 16px;
}

.section-content code {
  padding: 2px 6px;
  background: var(--surface);
  color: var(--error-text);
  border-radius: 3px;
  font-size: 13px;
  font-family: 'Consolas', monospace;
}

/* 代码块 */
.code-block {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 20px;
  border-radius: 8px;
  margin: 16px 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.6;
}

/* 演示盒子 */
.demo-box {
  padding: 24px;
  background: var(--surface);
  border-radius: 8px;
  margin: 24px 0;
}

.heading-preview {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.heading-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  background: white;
  border-radius: 6px;
}

.heading-tag {
  flex-shrink: 0;
  padding: 4px 8px;
  background: var(--primary-blue);
  color: white;
  border-radius: 4px;
  font-size: 12px;
  font-family: monospace;
}

.preview-h1 { font-size: 32px; margin: 0; }
.preview-h2 { font-size: 28px; margin: 0; }
.preview-h3 { font-size: 24px; margin: 0; }
.preview-h4 { font-size: 20px; margin: 0; }
.preview-h5 { font-size: 18px; margin: 0; }
.preview-h6 { font-size: 16px; margin: 0; }

/* 提示盒子 */
.tips-box {
  padding: 20px;
  background: var(--info-bg);
  border-radius: 8px;
  border-left: 4px solid var(--info-text);
  margin: 24px 0;
}

.tips-box h4 {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
  color: var(--info-text);
}

.tips-box ul {
  margin: 0;
  padding-left: 24px;
}

.tips-box li {
  margin-bottom: 8px;
  font-size: 14px;
}

/* 对比容器 */
.comparison-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.comparison-item h4 {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.result-box {
  padding: 16px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 6px;
  margin-top: 12px;
}

.result-box p {
  margin: 0 0 8px 0;
}

.result-box small {
  color: var(--text-secondary);
  font-size: 12px;
}

/* 格式化标签网格 */
.format-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.format-card {
  padding: 20px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: all 0.3s;
}

.format-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.format-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.format-header code {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-blue);
}

.format-badge {
  padding: 2px 8px;
  background: var(--info-bg);
  color: var(--info-text);
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
}

.format-desc {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.format-example {
  padding: 12px;
  background: var(--surface);
  border-radius: 6px;
  font-size: 14px;
}

/* 交互工具 */
.interactive-tool {
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  margin: 32px 0;
}

.interactive-tool h4 {
  font-size: 18px;
  margin-bottom: 8px;
}

.interactive-tool > p {
  margin-bottom: 20px;
  opacity: 0.9;
}

.tag-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag-btn {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-family: monospace;
  transition: all 0.2s;
}

.tag-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.tag-btn.active {
  background: white;
  color: #667eea;
  border-color: white;
}

.tag-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  color: var(--text-primary);
}

.tag-info h5 {
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--primary-blue);
}

.tag-info p {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
}

.tag-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.demo-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
}

.demo-result {
  padding: 16px;
  background: var(--surface);
  border-radius: 6px;
  font-size: 16px;
  min-height: 50px;
  display: flex;
  align-items: center;
}

/* 属性列表 */
.attribute-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
}

.attribute-item {
  display: flex;
  gap: 16px;
  padding: 12px 16px;
  background: var(--surface);
  border-radius: 6px;
}

.attribute-item code {
  flex-shrink: 0;
  min-width: 140px;
  font-weight: 600;
}

.attribute-item span {
  color: var(--text-secondary);
  font-size: 14px;
}

/* 链接示例 */
.link-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.link-example-card {
  padding: 20px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 8px;
}

.link-type {
  display: inline-block;
  padding: 4px 12px;
  background: var(--primary-blue);
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 16px;
}

.link-result {
  padding: 16px;
  background: var(--surface);
  border-radius: 6px;
  margin-top: 12px;
  text-align: center;
}

.link-result a {
  color: var(--primary-blue);
  text-decoration: none;
  font-weight: 500;
}

.link-result a:hover {
  text-decoration: underline;
}

/* 任务清单 */
.task-checklist {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
  padding: 20px;
  background: var(--surface);
  border-radius: 8px;
}

.task-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.task-checkbox:hover {
  box-shadow: var(--shadow);
}

.task-checkbox input {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.task-checkbox span {
  font-size: 14px;
}

/* 总结网格 */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.summary-card {
  padding: 24px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 12px;
  text-align: center;
}

.summary-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.summary-card h4 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.summary-card p {
  font-size: 13px;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .tag-display {
    grid-template-columns: 1fr;
  }

  .comparison-container,
  .link-examples {
    grid-template-columns: 1fr;
  }
}
</style>
