<template>
  <LessonLayout
    lesson-id="html-lesson-7"
    title="第7课：语义化标签"
    :duration="25"
    :prev-lesson="{ path: '/lessons/html/lesson-6', title: '第6课：表单进阶' }"
    :next-lesson="{ path: '/lessons/html/lesson-8', title: '第8课：HTML5 新特性' }"
  >
    <!-- 课程介绍 -->
    <section class="intro-section">
      <div class="intro-card">
        <h2>🎯 本课学习内容</h2>
        <p>语义化标签让 HTML 代码更具可读性和可维护性，对 SEO 和无障碍访问也有重要意义。</p>
        <div class="learning-goals">
          <div class="goal-item">
            <span class="goal-icon">📐</span>
            <span>理解语义化的重要性</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">🏗️</span>
            <span>掌握页面结构标签</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">📰</span>
            <span>学会内容分区标签</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">✨</span>
            <span>学习文本级语义标签</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 第一部分：什么是语义化 -->
    <section class="content-section">
      <h2>1️⃣ 什么是语义化？</h2>

      <div class="info-box">
        <p><strong>语义化</strong>是指使用恰当的 HTML 标签来表达内容的含义，而不是仅仅为了样式效果。</p>
      </div>

      <div class="comparison-cards">
        <div class="comparison-card bad">
          <h4>❌ 非语义化</h4>
          <pre>&lt;div class="header"&gt;...&lt;/div&gt;
&lt;div class="nav"&gt;...&lt;/div&gt;
&lt;div class="content"&gt;...&lt;/div&gt;
&lt;div class="footer"&gt;...&lt;/div&gt;</pre>
          <p>仅用 div，无法表达内容含义</p>
        </div>

        <div class="comparison-card good">
          <h4>✅ 语义化</h4>
          <pre>&lt;header&gt;...&lt;/header&gt;
&lt;nav&gt;...&lt;/nav&gt;
&lt;main&gt;...&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;</pre>
          <p>标签名称直接表达内容含义</p>
        </div>
      </div>

      <div class="benefit-grid">
        <div class="benefit-card">
          <h4>🔍 利于 SEO</h4>
          <p>搜索引擎更容易理解页面结构和内容重要性</p>
        </div>

        <div class="benefit-card">
          <h4>♿ 无障碍访问</h4>
          <p>屏幕阅读器能更好地为视障用户朗读内容</p>
        </div>

        <div class="benefit-card">
          <h4>📖 代码可读性</h4>
          <p>开发者能快速理解页面结构和各部分功能</p>
        </div>

        <div class="benefit-card">
          <h4>🛠️ 易于维护</h4>
          <p>清晰的结构便于后期修改和团队协作</p>
        </div>
      </div>
    </section>

    <!-- 第二部分：页面结构标签 -->
    <section class="content-section">
      <h2>2️⃣ 页面结构标签</h2>

      <div class="info-box">
        <p>HTML5 提供了一组用于定义页面结构的语义化标签。</p>
      </div>

      <div class="tag-showcase">
        <div class="tag-item">
          <div class="tag-icon">📌</div>
          <h4>&lt;header&gt;</h4>
          <p>页面或区块的头部</p>
          <div class="tag-usage">
            <span class="badge">导航栏</span>
            <span class="badge">Logo</span>
            <span class="badge">标题</span>
          </div>
        </div>

        <div class="tag-item">
          <div class="tag-icon">🧭</div>
          <h4>&lt;nav&gt;</h4>
          <p>导航链接区域</p>
          <div class="tag-usage">
            <span class="badge">主导航</span>
            <span class="badge">面包屑</span>
            <span class="badge">侧边栏导航</span>
          </div>
        </div>

        <div class="tag-item">
          <div class="tag-icon">📄</div>
          <h4>&lt;main&gt;</h4>
          <p>页面主要内容</p>
          <div class="tag-usage">
            <span class="badge">唯一性</span>
            <span class="badge">核心内容</span>
          </div>
        </div>

        <div class="tag-item">
          <div class="tag-icon">📰</div>
          <h4>&lt;article&gt;</h4>
          <p>独立的内容单元</p>
          <div class="tag-usage">
            <span class="badge">文章</span>
            <span class="badge">博客</span>
            <span class="badge">评论</span>
          </div>
        </div>

        <div class="tag-item">
          <div class="tag-icon">📦</div>
          <h4>&lt;section&gt;</h4>
          <p>文档中的区块</p>
          <div class="tag-usage">
            <span class="badge">章节</span>
            <span class="badge">分组</span>
          </div>
        </div>

        <div class="tag-item">
          <div class="tag-icon">📎</div>
          <h4>&lt;aside&gt;</h4>
          <p>侧边栏/附加内容</p>
          <div class="tag-usage">
            <span class="badge">广告</span>
            <span class="badge">相关链接</span>
            <span class="badge">侧边栏</span>
          </div>
        </div>

        <div class="tag-item">
          <div class="tag-icon">⬇️</div>
          <h4>&lt;footer&gt;</h4>
          <p>页面或区块的底部</p>
          <div class="tag-usage">
            <span class="badge">版权信息</span>
            <span class="badge">联系方式</span>
            <span class="badge">友情链接</span>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h4>💡 页面结构示例</h4>
        <CodeEditor
          initial-html="<!-- 完整的语义化页面结构 -->
<header>
  <h1>我的博客</h1>
  <nav>
    <a href='#'>首页</a>
    <a href='#'>文章</a>
    <a href='#'>关于</a>
  </nav>
</header>

<main>
  <article>
    <header>
      <h2>文章标题</h2>
      <p>作者：张三 | 发布于：2024-01-01</p>
    </header>

    <section>
      <h3>第一部分</h3>
      <p>这是文章的第一部分内容...</p>
    </section>

    <section>
      <h3>第二部分</h3>
      <p>这是文章的第二部分内容...</p>
    </section>

    <footer>
      <p>标签：HTML, CSS, JavaScript</p>
    </footer>
  </article>

  <aside>
    <h3>相关文章</h3>
    <ul>
      <li><a href='#'>相关文章1</a></li>
      <li><a href='#'>相关文章2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 我的博客. 版权所有.</p>
</footer>"
          initial-css="/* 全局样式 */
body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* 页头 */
header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

header h1 {
  margin: 0 0 10px 0;
}

header nav a {
  color: white;
  margin-right: 20px;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
}

header nav a:hover {
  background: rgba(255,255,255,0.2);
}

/* 主内容区 */
main {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  margin-bottom: 20px;
}

/* 文章 */
article {
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

article header {
  background: none;
  padding: 0;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 16px;
}

article header h2 {
  color: #333;
  margin: 0 0 8px 0;
}

article header p {
  color: #666;
  font-size: 14px;
  margin: 0;
}

article section {
  margin: 20px 0;
}

article section h3 {
  color: #667eea;
  margin-bottom: 12px;
}

article footer {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 4px;
  margin-top: 20px;
}

/* 侧边栏 */
aside {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

aside h3 {
  margin: 0 0 16px 0;
  color: #333;
}

aside ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

aside li {
  margin: 8px 0;
}

aside a {
  color: #667eea;
  text-decoration: none;
}

aside a:hover {
  text-decoration: underline;
}

/* 页脚 */
body > footer {
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}

body > footer p {
  margin: 0;
}

@media (max-width: 768px) {
  main {
    grid-template-columns: 1fr;
  }
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第三部分：article vs section -->
    <section class="content-section">
      <h2>3️⃣ &lt;article&gt; vs &lt;section&gt;</h2>

      <div class="info-box">
        <p>这两个标签经常让人困惑，理解它们的区别很重要。</p>
      </div>

      <div class="comparison-detailed">
        <div class="compare-item">
          <h4>&lt;article&gt; - 独立内容</h4>
          <ul>
            <li>✅ 可以独立存在和分发</li>
            <li>✅ 内容完整且有意义</li>
            <li>✅ 适合用于博客文章、新闻报道、论坛帖子</li>
            <li>✅ 可以包含多个 <code>&lt;section&gt;</code></li>
          </ul>
          <div class="code-example">
            <pre>&lt;article&gt;
  &lt;h2&gt;文章标题&lt;/h2&gt;
  &lt;section&gt;
    &lt;h3&gt;章节1&lt;/h3&gt;
    &lt;p&gt;内容...&lt;/p&gt;
  &lt;/section&gt;
  &lt;section&gt;
    &lt;h3&gt;章节2&lt;/h3&gt;
    &lt;p&gt;内容...&lt;/p&gt;
  &lt;/section&gt;
&lt;/article&gt;</pre>
          </div>
        </div>

        <div class="compare-item">
          <h4>&lt;section&gt; - 主题区块</h4>
          <ul>
            <li>✅ 按主题划分的内容区块</li>
            <li>✅ 通常包含标题</li>
            <li>✅ 适合用于章节划分</li>
            <li>✅ 可以包含在 <code>&lt;article&gt;</code> 中</li>
          </ul>
          <div class="code-example">
            <pre>&lt;section&gt;
  &lt;h2&gt;产品特性&lt;/h2&gt;
  &lt;article&gt;
    &lt;h3&gt;特性1&lt;/h3&gt;
    &lt;p&gt;描述...&lt;/p&gt;
  &lt;/article&gt;
  &lt;article&gt;
    &lt;h3&gt;特性2&lt;/h3&gt;
    &lt;p&gt;描述...&lt;/p&gt;
  &lt;/article&gt;
&lt;/section&gt;</pre>
          </div>
        </div>
      </div>

      <div class="tip-box">
        <strong>💡 判断技巧：</strong>
        <p>如果内容可以单独作为一个完整的单元（比如可以独立发布到其他网站），使用 <code>&lt;article&gt;</code>；如果只是内容的一个主题区块，使用 <code>&lt;section&gt;</code>。</p>
      </div>
    </section>

    <!-- 第四部分：文本级语义标签 -->
    <section class="content-section">
      <h2>4️⃣ 文本级语义标签</h2>

      <div class="info-box">
        <p>这些标签用于标记文本的特殊含义，而不仅仅是样式。</p>
      </div>

      <div class="text-semantics-grid">
        <div class="semantic-item">
          <code>&lt;strong&gt;</code>
          <p>重要内容（语气强调）</p>
          <div class="example">
            <strong>这很重要</strong>
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;em&gt;</code>
          <p>强调内容（语调强调）</p>
          <div class="example">
            <em>强调这一点</em>
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;mark&gt;</code>
          <p>高亮标记</p>
          <div class="example">
            <mark>高亮文本</mark>
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;time&gt;</code>
          <p>时间/日期</p>
          <div class="example">
            <time datetime="2024-01-01">2024年1月1日</time>
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;abbr&gt;</code>
          <p>缩写</p>
          <div class="example">
            <abbr title="HyperText Markup Language">HTML</abbr>
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;code&gt;</code>
          <p>代码片段</p>
          <div class="example">
            <code>console.log()</code>
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;kbd&gt;</code>
          <p>键盘输入</p>
          <div class="example">
            按 <kbd>Ctrl</kbd> + <kbd>C</kbd>
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;samp&gt;</code>
          <p>程序输出</p>
          <div class="example">
            <samp>Error: File not found</samp>
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;var&gt;</code>
          <p>变量</p>
          <div class="example">
            <var>x</var> = 10
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;cite&gt;</code>
          <p>引用作品标题</p>
          <div class="example">
            <cite>三体</cite>
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;q&gt;</code>
          <p>短引用</p>
          <div class="example">
            <q>生存还是毁灭</q>
          </div>
        </div>

        <div class="semantic-item">
          <code>&lt;blockquote&gt;</code>
          <p>长引用块</p>
          <div class="example" style="font-size: 12px;">
            <blockquote>这是一段引用...</blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- 第五部分：其他语义标签 -->
    <section class="content-section">
      <h2>5️⃣ 其他实用语义标签</h2>

      <div class="demo-section">
        <h4>💡 实用标签示例</h4>
        <CodeEditor
          initial-html="<h3>其他语义标签演示</h3>

<article>
  <!-- 时间标签 -->
  <p>发布时间：<time datetime='2024-01-01T10:00:00'>2024年1月1日 上午10:00</time></p>

  <!-- 进度条 -->
  <p>任务完成度：</p>
  <progress value='70' max='100'>70%</progress>

  <!-- 计量器 -->
  <p>磁盘使用：</p>
  <meter value='0.6' min='0' max='1'>60%</meter>

  <!-- 详情折叠 -->
  <details>
    <summary>查看更多信息</summary>
    <p>这里是隐藏的详细内容...</p>
    <p>点击上方可以展开或折叠。</p>
  </details>

  <!-- 图形和说明 -->
  <figure>
    <div style='width:200px;height:150px;background:#667eea;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;'>
      示例图片
    </div>
    <figcaption>图1：示例图形的说明文字</figcaption>
  </figure>

  <!-- 地址信息 -->
  <address>
    联系我们：<br>
    Email: contact@example.com<br>
    地址：北京市朝阳区xxx路xxx号
  </address>
</article>"
          initial-css="h3 {
  color: #4CAF50;
  margin-bottom: 24px;
}

article {
  max-width: 800px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

p {
  margin: 16px 0;
  line-height: 1.6;
}

time {
  color: #667eea;
  font-weight: 500;
}

progress, meter {
  width: 100%;
  height: 24px;
  margin: 8px 0;
}

details {
  margin: 20px 0;
  padding: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
}

summary {
  cursor: pointer;
  font-weight: bold;
  color: #667eea;
  padding: 8px;
}

summary:hover {
  background: #f5f5f5;
  border-radius: 4px;
}

details[open] {
  background: #f8f9fa;
}

figure {
  margin: 24px 0;
  text-align: center;
}

figcaption {
  margin-top: 12px;
  color: #666;
  font-size: 14px;
  font-style: italic;
}

address {
  margin: 24px 0;
  padding: 16px;
  background: #e3f2fd;
  border-left: 4px solid #2196F3;
  font-style: normal;
  line-height: 1.8;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 综合练习 -->
    <section class="content-section practice-section">
      <h2>🎯 综合练习</h2>

      <div class="practice-card">
        <h3>练习任务：创建语义化博客页面</h3>
        <p>请使用语义化标签创建一个完整的博客文章页面，要求包含：</p>
        <ul>
          <li>使用 <code>&lt;header&gt;</code> 包含网站标题和导航</li>
          <li>使用 <code>&lt;main&gt;</code> 包含主要内容</li>
          <li>使用 <code>&lt;article&gt;</code> 包含文章内容</li>
          <li>文章内使用 <code>&lt;section&gt;</code> 划分章节</li>
          <li>使用 <code>&lt;aside&gt;</code> 添加相关推荐</li>
          <li>使用 <code>&lt;footer&gt;</code> 添加页脚信息</li>
          <li>使用 <code>&lt;time&gt;</code> 标记发布时间</li>
          <li>使用 <code>&lt;figure&gt;</code> 和 <code>&lt;figcaption&gt;</code></li>
        </ul>

        <div class="practice-editor">
          <CodeEditor
            initial-html="<!-- 在这里创建语义化博客页面 -->
<header>
  <h1>技术博客</h1>
  <nav>
    <!-- 导航链接 -->
  </nav>
</header>

<main>
  <article>
    <!-- 文章内容 -->
  </article>

  <aside>
    <!-- 侧边栏 -->
  </aside>
</main>

<footer>
  <!-- 页脚信息 -->
</footer>"
            initial-css="/* 在这里添加样式 */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  padding: 20px;
}

article {
  background: white;
  padding: 24px;
  border-radius: 8px;
}

aside {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

footer {
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
}"
            :tabs="['html', 'css']"
            :auto-run="false"
          />
        </div>
      </div>
    </section>

    <!-- 知识总结 -->
    <section class="content-section summary-section">
      <h2>📚 知识总结</h2>

      <div class="summary-grid">
        <div class="summary-card">
          <h4>🏗️ 页面结构</h4>
          <ul>
            <li><code>&lt;header&gt;</code> - 页头</li>
            <li><code>&lt;nav&gt;</code> - 导航</li>
            <li><code>&lt;main&gt;</code> - 主内容</li>
            <li><code>&lt;article&gt;</code> - 独立内容</li>
            <li><code>&lt;section&gt;</code> - 区块</li>
            <li><code>&lt;aside&gt;</code> - 侧边栏</li>
            <li><code>&lt;footer&gt;</code> - 页脚</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>✍️ 文本语义</h4>
          <ul>
            <li><code>&lt;strong&gt;</code> - 重要</li>
            <li><code>&lt;em&gt;</code> - 强调</li>
            <li><code>&lt;mark&gt;</code> - 高亮</li>
            <li><code>&lt;time&gt;</code> - 时间</li>
            <li><code>&lt;abbr&gt;</code> - 缩写</li>
            <li><code>&lt;code&gt;</code> - 代码</li>
            <li><code>&lt;cite&gt;</code> - 引用</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>🎯 其他标签</h4>
          <ul>
            <li><code>&lt;figure&gt;</code> - 图形</li>
            <li><code>&lt;figcaption&gt;</code> - 说明</li>
            <li><code>&lt;details&gt;</code> - 折叠</li>
            <li><code>&lt;summary&gt;</code> - 摘要</li>
            <li><code>&lt;progress&gt;</code> - 进度</li>
            <li><code>&lt;meter&gt;</code> - 计量</li>
            <li><code>&lt;address&gt;</code> - 地址</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>💡 最佳实践</h4>
          <ul>
            <li>✅ 优先使用语义化标签</li>
            <li>✅ 一个页面只有一个 main</li>
            <li>✅ article 可以独立存在</li>
            <li>✅ section 用于主题划分</li>
            <li>✅ 标签嵌套要合理</li>
            <li>✅ 提升 SEO 和可访问性</li>
          </ul>
        </div>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import { ref } from 'vue'
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'
</script>

<style scoped>
/* 对比卡片 */
.comparison-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.comparison-card {
  padding: 24px;
  border-radius: 12px;
  color: white;
}

.comparison-card.bad {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.comparison-card.good {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.comparison-card h4 {
  margin: 0 0 16px 0;
  font-size: 18px;
}

.comparison-card pre {
  margin: 16px 0;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

.comparison-card p {
  margin: 12px 0 0 0;
  opacity: 0.95;
}

/* 优势网格 */
.benefit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.benefit-card {
  padding: 24px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  transition: all 0.3s;
}

.benefit-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.benefit-card h4 {
  margin: 0 0 12px 0;
  color: var(--primary-blue);
  font-size: 16px;
}

.benefit-card p {
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-size: 14px;
}

/* 标签展示 */
.tag-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.tag-item {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s;
}

.tag-item:hover {
  transform: translateY(-4px);
}

.tag-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.tag-item h4 {
  margin: 0 0 8px 0;
  font-family: 'Consolas', monospace;
  font-size: 16px;
}

.tag-item p {
  margin: 8px 0 12px 0;
  opacity: 0.9;
  font-size: 13px;
}

.tag-usage {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}

.badge {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 11px;
}

/* 详细对比 */
.comparison-detailed {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin: 24px 0;
}

.compare-item {
  padding: 24px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
}

.compare-item h4 {
  margin: 0 0 16px 0;
  color: var(--primary-blue);
  font-size: 18px;
}

.compare-item ul {
  margin: 16px 0;
  padding-left: 20px;
}

.compare-item li {
  margin: 8px 0;
  line-height: 1.6;
}

.code-example {
  margin-top: 16px;
}

.code-example pre {
  margin: 0;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

/* 文本语义网格 */
.text-semantics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.semantic-item {
  padding: 16px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.semantic-item:hover {
  border-color: var(--primary-blue);
  transform: translateY(-2px);
}

.semantic-item code {
  display: block;
  margin-bottom: 8px;
  color: #e91e63;
  font-size: 14px;
  font-weight: bold;
}

.semantic-item p {
  margin: 8px 0;
  color: #666;
  font-size: 12px;
}

.semantic-item .example {
  margin-top: 12px;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 13px;
}

/* 练习部分 */
.practice-section {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 32px;
  border-radius: 12px;
}

.practice-card h3 {
  color: #d84315;
  margin-bottom: 16px;
}

.practice-card ul {
  margin: 16px 0;
  padding-left: 24px;
}

.practice-card li {
  margin: 8px 0;
  line-height: 1.6;
}

.practice-editor {
  margin-top: 24px;
}

/* 总结部分 */
.summary-section {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 32px;
  border-radius: 12px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.summary-card {
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.summary-card h4 {
  margin: 0 0 16px 0;
  color: var(--primary-blue);
  font-size: 16px;
}

.summary-card ul {
  margin: 0;
  padding-left: 20px;
}

.summary-card li {
  margin: 8px 0;
  line-height: 1.5;
  font-size: 14px;
}

.summary-card code {
  color: #e91e63;
  font-weight: 500;
}

@media (max-width: 768px) {
  .comparison-cards,
  .benefit-grid,
  .tag-showcase,
  .comparison-detailed,
  .text-semantics-grid,
  .summary-grid {
    grid-template-columns: 1fr;
  }
}
</style>
