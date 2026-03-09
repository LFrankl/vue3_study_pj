<template>
  <LessonLayout
    :lesson-number="1"
    title="认识 HTML"
    duration="15分钟"
    :topics="['什么是 HTML', 'HTML 的作用', 'HTML 文档结构', '第一个网页']"
    :prev-lesson="null"
    :next-lesson="{ path: '/lessons/html/lesson-2', title: '基础标签' }"
  >
    <!-- 第一部分：什么是 HTML -->
    <section class="content-section">
      <h2 class="section-title">📖 什么是 HTML？</h2>
      <div class="section-content">
        <p><strong>HTML</strong> 全称是 <strong>HyperText Markup Language</strong>（超文本标记语言）。</p>

        <div class="info-box">
          <div class="info-item">
            <span class="info-icon">📝</span>
            <div>
              <h4>超文本（HyperText）</h4>
              <p>不仅包含文本，还可以包含图片、链接、视频等多媒体内容</p>
            </div>
          </div>
          <div class="info-item">
            <span class="info-icon">🏷️</span>
            <div>
              <h4>标记（Markup）</h4>
              <p>使用标签（Tag）来标记和组织内容</p>
            </div>
          </div>
          <div class="info-item">
            <span class="info-icon">🌐</span>
            <div>
              <h4>语言（Language）</h4>
              <p>一种用于创建网页的标准语言</p>
            </div>
          </div>
        </div>

        <p style="margin-top: 20px;">HTML 是所有网页的基础，就像房子的骨架一样，为网页提供结构和内容。</p>
      </div>
    </section>

    <!-- 第二部分：HTML 的作用 -->
    <section class="content-section">
      <h2 class="section-title">🎯 HTML 的作用</h2>
      <div class="section-content">
        <div class="role-grid">
          <div class="role-card">
            <div class="role-icon">📄</div>
            <h4>定义网页结构</h4>
            <p>使用标签组织标题、段落、列表等内容元素</p>
          </div>
          <div class="role-card">
            <div class="role-icon">🔗</div>
            <h4>创建链接</h4>
            <p>连接不同页面，构建网站导航系统</p>
          </div>
          <div class="role-card">
            <div class="role-icon">🖼️</div>
            <h4>嵌入媒体</h4>
            <p>在网页中插入图片、视频、音频等</p>
          </div>
          <div class="role-card">
            <div class="role-icon">📋</div>
            <h4>创建表单</h4>
            <p>收集用户输入的信息和数据</p>
          </div>
          <div class="role-card">
            <div class="role-icon">🎨</div>
            <h4>与 CSS 配合</h4>
            <p>提供样式化的基础，美化页面外观</p>
          </div>
          <div class="role-card">
            <div class="role-icon">⚙️</div>
            <h4>与 JS 交互</h4>
            <p>提供可操作的DOM元素，实现动态效果</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 第三部分：HTML 文档结构 -->
    <section class="content-section">
      <h2 class="section-title">🏗️ HTML 文档结构</h2>
      <div class="section-content">
        <p>一个标准的 HTML 文档包含以下几个部分：</p>

        <div class="code-block">
          <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;网页标题&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;这是网页内容&lt;/h1&gt;
    &lt;p&gt;这是一个段落。&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
        </div>

        <div class="structure-explanation">
          <div class="explanation-item">
            <code>&lt;!DOCTYPE html&gt;</code>
            <p>声明文档类型，告诉浏览器这是一个 HTML5 文档</p>
          </div>
          <div class="explanation-item">
            <code>&lt;html&gt;</code>
            <p>根元素，包含整个网页的所有内容</p>
          </div>
          <div class="explanation-item">
            <code>&lt;head&gt;</code>
            <p>头部信息，包含元数据、标题、引入的CSS等（不显示在页面上）</p>
          </div>
          <div class="explanation-item">
            <code>&lt;meta charset="UTF-8"&gt;</code>
            <p>设置字符编码，支持中文等多语言</p>
          </div>
          <div class="explanation-item">
            <code>&lt;title&gt;</code>
            <p>网页标题，显示在浏览器标签页上</p>
          </div>
          <div class="explanation-item">
            <code>&lt;body&gt;</code>
            <p>主体内容，包含所有显示在页面上的内容</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 第四部分：第一个网页 -->
    <section class="content-section">
      <h2 class="section-title">🎉 创建你的第一个网页</h2>
      <div class="section-content">
        <p>现在，让我们在在线编辑器中创建第一个网页！试试修改下面的代码，看看效果的变化。</p>

        <CodeEditor
          :initial-html="`<h1>欢迎来到我的网页！</h1>
<p>这是我的第一个HTML网页。</p>
<p>HTML很简单，也很有趣！</p>`"
          :tabs="['html']"
        />

        <div class="practice-tips">
          <h4>💡 试试这些修改：</h4>
          <ul>
            <li>修改 <code>&lt;h1&gt;</code> 标签中的文字</li>
            <li>在 <code>&lt;p&gt;</code> 标签中添加更多段落</li>
            <li>添加一个新的标题 <code>&lt;h2&gt;关于我&lt;/h2&gt;</code></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 第五部分：HTML 标签的基本规则 -->
    <section class="content-section">
      <h2 class="section-title">📏 HTML 标签的基本规则</h2>
      <div class="section-content">
        <div class="rules-grid">
          <div class="rule-card">
            <div class="rule-number">1</div>
            <div class="rule-content">
              <h4>标签成对出现</h4>
              <p>大多数标签有开始标签和结束标签</p>
              <code>&lt;p&gt;内容&lt;/p&gt;</code>
            </div>
          </div>

          <div class="rule-card">
            <div class="rule-number">2</div>
            <div class="rule-content">
              <h4>标签可以嵌套</h4>
              <p>标签内部可以包含其他标签</p>
              <code>&lt;div&gt;&lt;p&gt;文本&lt;/p&gt;&lt;/div&gt;</code>
            </div>
          </div>

          <div class="rule-card">
            <div class="rule-number">3</div>
            <div class="rule-content">
              <h4>正确嵌套</h4>
              <p>先开的标签后关，后开的标签先关</p>
              <code>&lt;p&gt;&lt;strong&gt;粗体&lt;/strong&gt;&lt;/p&gt;</code>
            </div>
          </div>

          <div class="rule-card">
            <div class="rule-number">4</div>
            <div class="rule-content">
              <h4>自闭合标签</h4>
              <p>有些标签不需要结束标签</p>
              <code>&lt;img src="image.jpg"&gt;</code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 互动练习 -->
    <section class="content-section">
      <h2 class="section-title">✏️ 互动练习</h2>
      <div class="section-content">
        <p>尝试创建一个简单的自我介绍页面，包含以下内容：</p>

        <div class="task-list">
          <div class="task-item">
            <span class="task-icon">✓</span>
            <span>使用 <code>&lt;h1&gt;</code> 标签写你的名字</span>
          </div>
          <div class="task-item">
            <span class="task-icon">✓</span>
            <span>使用 <code>&lt;h2&gt;</code> 标签写一个副标题（如"关于我"）</span>
          </div>
          <div class="task-item">
            <span class="task-icon">✓</span>
            <span>使用 <code>&lt;p&gt;</code> 标签写2-3段自我介绍</span>
          </div>
        </div>

        <CodeEditor
          :initial-html="`<!-- 在这里编写你的代码 -->
<h1>你的名字</h1>
<h2>关于我</h2>
<p>我是...</p>`"
          :tabs="['html']"
        />
      </div>
    </section>

    <!-- 知识总结 -->
    <section class="content-section">
      <h2 class="section-title">📚 本课总结</h2>
      <div class="summary-box">
        <div class="summary-item">
          <strong>HTML 是什么：</strong>
          <span>超文本标记语言，用于创建网页的标准语言</span>
        </div>
        <div class="summary-item">
          <strong>HTML 的作用：</strong>
          <span>定义网页结构、组织内容、嵌入媒体</span>
        </div>
        <div class="summary-item">
          <strong>基本结构：</strong>
          <span>DOCTYPE声明、html元素、head头部、body主体</span>
        </div>
        <div class="summary-item">
          <strong>标签规则：</strong>
          <span>成对出现、可以嵌套、正确闭合</span>
        </div>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'
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

.section-content {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-primary);
}

.section-content p {
  margin-bottom: 16px;
}

/* 信息盒子 */
.info-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0;
}

.info-item {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--surface);
  border-radius: 8px;
  border-left: 4px solid var(--primary-blue);
}

.info-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.info-item h4 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.info-item p {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
}

/* 作用网格 */
.role-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.role-card {
  padding: 24px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.role-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.role-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.role-card h4 {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.role-card p {
  font-size: 13px;
  color: var(--text-secondary);
  margin: 0;
}

/* 代码块 */
.code-block {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 20px;
  border-radius: 8px;
  margin: 24px 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.6;
}

/* 结构说明 */
.structure-explanation {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;
}

.explanation-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: var(--surface);
  border-radius: 6px;
}

.explanation-item code {
  flex-shrink: 0;
  padding: 4px 8px;
  background: white;
  color: var(--error-text);
  border-radius: 4px;
  font-size: 13px;
  font-family: 'Consolas', monospace;
}

.explanation-item p {
  margin: 0;
  font-size: 14px;
  color: var(--text-secondary);
}

/* 练习提示 */
.practice-tips {
  margin-top: 20px;
  padding: 20px;
  background: var(--info-bg);
  border-radius: 8px;
  border-left: 4px solid var(--info-text);
}

.practice-tips h4 {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
  color: var(--info-text);
}

.practice-tips ul {
  margin: 0;
  padding-left: 24px;
}

.practice-tips li {
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--text-primary);
}

.practice-tips code {
  padding: 2px 6px;
  background: white;
  color: var(--error-text);
  border-radius: 3px;
  font-size: 13px;
}

/* 规则网格 */
.rules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.rule-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 8px;
}

.rule-number {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-blue);
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: 16px;
}

.rule-content h4 {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.rule-content p {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.rule-content code {
  display: block;
  padding: 8px;
  background: var(--surface);
  border-radius: 4px;
  font-size: 12px;
  font-family: 'Consolas', monospace;
}

/* 任务列表 */
.task-list {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--surface);
  border-radius: 6px;
}

.task-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--success-bg);
  color: var(--success-text);
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
}

.task-item code {
  padding: 2px 6px;
  background: white;
  color: var(--error-text);
  border-radius: 3px;
  font-size: 13px;
}

/* 总结盒子 */
.summary-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.summary-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.summary-item strong {
  font-size: 15px;
  font-weight: 600;
}

.summary-item span {
  font-size: 14px;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .role-grid,
  .rules-grid {
    grid-template-columns: 1fr;
  }
}
</style>
