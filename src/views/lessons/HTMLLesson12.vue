<template>
  <LessonLayout
    :lesson-number="12"
    lesson-title="HTML 综合项目"
    :prev-lesson="{ name: 'HTMLLesson11', title: '第11课：SEO 优化' }"
    :next-lesson="null"
  >
    <!-- 课程简介 -->
    <section class="lesson-section">
      <h2>本课内容</h2>
      <p>这是 HTML 课程的最后一课。我们将综合运用前面学到的所有知识，构建一个完整的响应式博客网站。</p>

      <div class="project-overview">
        <h3>🎯 项目目标</h3>
        <p>构建一个现代化的个人博客网站，包含以下特性：</p>
        <ul>
          <li>✅ 语义化 HTML 结构</li>
          <li>✅ 响应式设计（移动优先）</li>
          <li>✅ SEO 优化</li>
          <li>✅ 可访问性支持</li>
          <li>✅ 结构化数据</li>
          <li>✅ Open Graph 社交分享</li>
          <li>✅ 性能优化</li>
        </ul>
      </div>

      <div class="info-box">
        <strong>📚 知识点回顾</strong>
        <p>本项目将综合运用以下知识：</p>
        <div class="knowledge-grid">
          <div class="knowledge-item">
            <span class="emoji">📄</span>
            <span>语义化标签</span>
          </div>
          <div class="knowledge-item">
            <span class="emoji">📝</span>
            <span>表单与验证</span>
          </div>
          <div class="knowledge-item">
            <span class="emoji">🖼️</span>
            <span>图片与多媒体</span>
          </div>
          <div class="knowledge-item">
            <span class="emoji">🔍</span>
            <span>SEO 优化</span>
          </div>
          <div class="knowledge-item">
            <span class="emoji">♿</span>
            <span>可访问性</span>
          </div>
          <div class="knowledge-item">
            <span class="emoji">⚡</span>
            <span>性能优化</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目结构 -->
    <section class="lesson-section">
      <h2>1. 项目结构设计</h2>

      <div class="concept-box">
        <h3>页面结构</h3>
        <pre><code>个人博客网站
├── 首页（index.html）
│   ├── 头部导航
│   ├── Hero 区域
│   ├── 特色文章
│   ├── 最新文章列表
│   └── 页脚
│
├── 文章页（article.html）
│   ├── 文章标题和元信息
│   ├── 文章内容
│   ├── 作者信息
│   └── 相关文章
│
├── 关于页（about.html）
│   ├── 个人简介
│   ├── 技能展示
│   └── 联系方式
│
└── 联系页（contact.html）
    └── 联系表单</code></pre>
      </div>

      <div class="tip-box">
        <strong>💡 设计原则：</strong>
        <ul>
          <li>移动优先（Mobile First）</li>
          <li>内容优先（Content First）</li>
          <li>渐进增强（Progressive Enhancement）</li>
          <li>语义化 HTML</li>
          <li>可访问性第一</li>
        </ul>
      </div>
    </section>

    <!-- 完整示例 -->
    <section class="lesson-section">
      <h2>2. 完整的博客首页</h2>
      <p>下面是一个完整的响应式博客首页示例，整合了所有学到的 HTML 最佳实践。</p>

      <div class="example-box">
        <h3>博客首页完整代码</h3>
        <CodeEditor
          :initial-html="blogHTML"
          :initial-css="blogCSS"
          :initial-js="''"
          :auto-run="true"
        />
      </div>
    </section>

    <!-- 关键要点 -->
    <section class="lesson-section">
      <h2>3. 代码关键点解析</h2>

      <div class="concept-box">
        <h3>✅ HTML 最佳实践应用</h3>
        <ul>
          <li><strong>语义化标签</strong>：使用 header、nav、main、article、section、footer 等</li>
          <li><strong>ARIA 属性</strong>：role、aria-label、aria-labelledby、aria-current 等</li>
          <li><strong>SEO 优化</strong>：完整的 meta 标签、Open Graph、结构化数据</li>
          <li><strong>可访问性</strong>：Skip link、描述性链接文本、alt 属性、time 元素</li>
          <li><strong>性能优化</strong>：图片 loading="lazy"、preconnect、设置图片尺寸</li>
          <li><strong>响应式设计</strong>：viewport meta、移动优先 CSS</li>
        </ul>
      </div>

      <div class="highlight-box">
        <h3>🎯 特别注意的细节</h3>

        <div class="detail-item">
          <h4>1. Skip Navigation Link</h4>
          <pre><code>&lt;a href="#main" class="skip-link"&gt;跳转到主内容&lt;/a&gt;</code></pre>
          <p>键盘用户可以直接跳过导航，快速访问主内容</p>
        </div>

        <div class="detail-item">
          <h4>2. 描述性链接文本</h4>
          <pre><code>&lt;a href="/article/html" aria-label="阅读完整文章：HTML 最佳实践完全指南"&gt;
  阅读全文 →
&lt;/a&gt;</code></pre>
          <p>屏幕阅读器用户能准确理解链接指向</p>
        </div>

        <div class="detail-item">
          <h4>3. 图片优化</h4>
          <pre><code>&lt;img
  src="image.jpg"
  alt="描述性文本"
  width="800"
  height="400"
  loading="lazy"&gt;</code></pre>
          <p>设置尺寸避免布局偏移，懒加载提升性能</p>
        </div>

        <div class="detail-item">
          <h4>4. 时间标记</h4>
          <pre><code>&lt;time datetime="2025-01-15"&gt;2025年1月15日&lt;/time&gt;</code></pre>
          <p>机器可读的日期格式，有利于 SEO</p>
        </div>
      </div>
    </section>

    <!-- 扩展功能 -->
    <section class="lesson-section">
      <h2>4. 进一步扩展</h2>

      <div class="extension-grid">
        <div class="extension-card">
          <div class="card-icon">📝</div>
          <h3>表单页面</h3>
          <p>添加联系表单：</p>
          <ul>
            <li>完整的表单验证</li>
            <li>ARIA 错误提示</li>
            <li>字段分组</li>
            <li>提交反馈</li>
          </ul>
        </div>

        <div class="extension-card">
          <div class="card-icon">📄</div>
          <h3>文章页面</h3>
          <p>优化文章阅读体验：</p>
          <ul>
            <li>目录导航</li>
            <li>代码高亮</li>
            <li>分享按钮</li>
            <li>评论区</li>
          </ul>
        </div>

        <div class="extension-card">
          <div class="card-icon">🔍</div>
          <h3>搜索功能</h3>
          <p>添加站内搜索：</p>
          <ul>
            <li>搜索表单</li>
            <li>结果页面</li>
            <li>过滤选项</li>
            <li>无障碍搜索</li>
          </ul>
        </div>

        <div class="extension-card">
          <div class="card-icon">📱</div>
          <h3>PWA 支持</h3>
          <p>渐进式 Web 应用：</p>
          <ul>
            <li>manifest.json</li>
            <li>Service Worker</li>
            <li>离线支持</li>
            <li>安装提示</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 检查清单 -->
    <section class="lesson-section">
      <h2>5. 项目完成检查清单</h2>

      <div class="checklist-box">
        <h3>✅ HTML 质量检查</h3>
        <ul class="checklist">
          <li>✅ 通过 W3C HTML 验证器</li>
          <li>✅ 所有图片都有 alt 属性</li>
          <li>✅ 表单输入都有对应的 label</li>
          <li>✅ 正确的标题层级（只有一个 h1）</li>
          <li>✅ 使用语义化标签</li>
          <li>✅ 没有空的 href 或 src</li>
        </ul>

        <h3>✅ SEO 检查</h3>
        <ul class="checklist">
          <li>✅ 每页有唯一的 title</li>
          <li>✅ 每页有唯一的 description</li>
          <li>✅ Open Graph 标签完整</li>
          <li>✅ 添加了结构化数据</li>
          <li>✅ robots.txt 配置正确</li>
          <li>✅ 生成了 sitemap.xml</li>
        </ul>

        <h3>✅ 可访问性检查</h3>
        <ul class="checklist">
          <li>✅ 键盘可完全导航</li>
          <li>✅ 焦点样式清晰</li>
          <li>✅ 通过 WAVE 测试</li>
          <li>✅ 色彩对比度符合 WCAG AA</li>
          <li>✅ ARIA 属性使用正确</li>
          <li>✅ 屏幕阅读器测试通过</li>
        </ul>

        <h3>✅ 性能检查</h3>
        <ul class="checklist">
          <li>✅ Lighthouse 性能分数 &gt; 90</li>
          <li>✅ 图片已优化和懒加载</li>
          <li>✅ CSS 和 JS 已压缩</li>
          <li>✅ 启用了 HTTP/2</li>
          <li>✅ Core Web Vitals 通过</li>
          <li>✅ 移动端友好</li>
        </ul>
      </div>
    </section>

    <!-- 课程总结 -->
    <section class="lesson-section summary-section">
      <h2>🎉 HTML 课程完结</h2>

      <div class="completion-message">
        <div class="completion-icon">🏆</div>
        <h3>恭喜你完成了 HTML 课程的全部学习！</h3>
        <p>通过这 12 课的学习，你已经掌握了：</p>
      </div>

      <div class="summary-grid">
        <div class="summary-item">
          <div class="summary-icon">📄</div>
          <h3>HTML 基础</h3>
          <p>标签、属性、文档结构</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">📝</div>
          <h3>表单处理</h3>
          <p>输入类型、验证、提交</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🖼️</div>
          <h3>多媒体</h3>
          <p>图片、音频、视频</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🏗️</div>
          <h3>语义化</h3>
          <p>语义化标签、页面结构</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🎨</div>
          <h3>HTML5</h3>
          <p>Canvas、Storage、Geolocation</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">✨</div>
          <h3>最佳实践</h3>
          <p>代码规范、性能优化</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">♿</div>
          <h3>可访问性</h3>
          <p>ARIA、键盘导航</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🔍</div>
          <h3>SEO 优化</h3>
          <p>Meta 标签、结构化数据</p>
        </div>
      </div>

      <div class="next-steps">
        <h3>📚 下一步学习</h3>
        <p>你现在可以继续学习：</p>
        <div class="next-modules">
          <div class="next-module">
            <span class="module-icon">🎨</span>
            <h4>CSS 课程</h4>
            <p>学习样式、布局、动画</p>
          </div>
          <div class="next-module">
            <span class="module-icon">⚡</span>
            <h4>JavaScript 课程</h4>
            <p>掌握编程逻辑和交互</p>
          </div>
          <div class="next-module">
            <span class="module-icon">💚</span>
            <h4>Vue3 课程</h4>
            <p>构建现代 Web 应用</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 练习项目 -->
    <section class="lesson-section practice-section">
      <h2>🚀 实战项目建议</h2>
      <div class="practice-list">
        <div class="practice-item">
          <h3>项目 1：个人作品集网站</h3>
          <p>创建一个展示你的项目和技能的作品集网站，应用所有学到的 HTML 知识。</p>
        </div>
        <div class="practice-item">
          <h3>项目 2：在线简历</h3>
          <p>设计一个响应式的在线简历，优化 SEO 和打印样式。</p>
        </div>
        <div class="practice-item">
          <h3>项目 3：活动报名页面</h3>
          <p>创建一个包含复杂表单的活动报名页面，确保完全可访问。</p>
        </div>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'

// 博客首页HTML代码
const blogHTML = `<!DOCTYPE html>
<html lang='zh-CN'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>

  <!-- SEO Meta -->
  <title>技术博客 - 分享前端开发经验与技术洞察</title>
  <meta name='description' content='专注于前端开发、JavaScript、HTML、CSS等技术分享的个人博客。提供高质量的教程和实战经验。'>
  <meta name='keywords' content='前端开发,JavaScript,HTML,CSS,技术博客'>
  <meta name='author' content='张三'>
  <meta name='robots' content='index, follow'>

  <!-- Open Graph -->
  <meta property='og:type' content='website'>
  <meta property='og:title' content='技术博客 - 前端开发分享'>
  <meta property='og:description' content='专注于前端开发技术分享的个人博客'>
  <meta property='og:image' content='https://example.com/og-image.jpg'>
  <meta property='og:url' content='https://example.com'>

  <!-- Favicon -->
  <link rel='icon' type='image/png' href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>'>

  <!-- Preconnect -->
  <link rel='preconnect' href='https://fonts.googleapis.com'>
</head>

<body>
  <!-- Skip Navigation Link -->
  <a href='#main' class='skip-link'>跳转到主内容</a>

  <!-- Header -->
  <header role='banner'>
    <div class='container'>
      <div class='header-content'>
        <h1 class='logo'>
          <a href='/' aria-label='回到首页'>📝 技术博客</a>
        </h1>

        <nav role='navigation' aria-label='主导航'>
          <ul>
            <li><a href='/' aria-current='page'>首页</a></li>
            <li><a href='/articles'>文章</a></li>
            <li><a href='/about'>关于</a></li>
            <li><a href='/contact'>联系</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main id='main' role='main'>
    <!-- Hero Section -->
    <section class='hero' aria-labelledby='hero-title'>
      <div class='container'>
        <h2 id='hero-title'>欢迎来到我的技术博客</h2>
        <p>分享前端开发经验，探索技术的无限可能</p>
        <a href='/articles' class='btn-primary'>
          浏览文章
        </a>
      </div>
    </section>

    <!-- Featured Article -->
    <section class='featured' aria-labelledby='featured-title'>
      <div class='container'>
        <h2 id='featured-title'>精选文章</h2>

        <article class='featured-article'>
          <figure>
            <img
              src='https://via.placeholder.com/800x400/4285f4/ffffff?text=Featured+Article'
              alt='特色文章配图：HTML最佳实践示意图'
              width='800'
              height='400'
              loading='eager'>
            <figcaption class='sr-only'>文章配图</figcaption>
          </figure>

          <div class='article-content'>
            <header>
              <h3>
                <a href='/article/html-best-practices'>
                  HTML 最佳实践完全指南
                </a>
              </h3>
              <div class='article-meta'>
                <time datetime='2025-01-15'>2025年1月15日</time>
                <span aria-hidden='true'>·</span>
                <span>阅读时间 10分钟</span>
              </div>
            </header>

            <p>深入探讨编写高质量 HTML 代码的最佳实践，涵盖语义化、可访问性、SEO等多个方面...</p>

            <a href='/article/html-best-practices' class='read-more' aria-label='阅读完整文章：HTML 最佳实践完全指南'>
              阅读全文 →
            </a>
          </div>
        </article>
      </div>
    </section>

    <!-- Recent Articles -->
    <section class='recent-articles' aria-labelledby='recent-title'>
      <div class='container'>
        <h2 id='recent-title'>最新文章</h2>

        <div class='articles-grid'>
          <article class='article-card'>
            <img
              src='https://via.placeholder.com/400x200/ea4335/ffffff?text=Article+1'
              alt='文章配图：CSS Flexbox布局'
              width='400'
              height='200'
              loading='lazy'>

            <div class='card-content'>
              <h3>
                <a href='/article/css-flexbox'>CSS Flexbox 布局详解</a>
              </h3>
              <time datetime='2025-01-10'>2025年1月10日</time>
              <p>全面讲解 Flexbox 布局的各个属性和使用场景...</p>
            </div>
          </article>

          <article class='article-card'>
            <img
              src='https://via.placeholder.com/400x200/34a853/ffffff?text=Article+2'
              alt='文章配图：JavaScript ES6特性'
              width='400'
              height='200'
              loading='lazy'>

            <div class='card-content'>
              <h3>
                <a href='/article/js-es6'>JavaScript ES6 新特性</a>
              </h3>
              <time datetime='2025-01-05'>2025年1月5日</time>
              <p>探索 ES6 带来的新语法和功能改进...</p>
            </div>
          </article>

          <article class='article-card'>
            <img
              src='https://via.placeholder.com/400x200/fbbc04/ffffff?text=Article+3'
              alt='文章配图：Web性能优化'
              width='400'
              height='200'
              loading='lazy'>

            <div class='card-content'>
              <h3>
                <a href='/article/web-performance'>Web 性能优化实战</a>
              </h3>
              <time datetime='2025-01-01'>2025年1月1日</time>
              <p>从多个维度优化网站性能，提升用户体验...</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer role='contentinfo'>
    <div class='container'>
      <div class='footer-content'>
        <div class='footer-section'>
          <h3>关于本站</h3>
          <p>专注于前端开发技术分享</p>
        </div>

        <div class='footer-section'>
          <h3>快速链接</h3>
          <ul>
            <li><a href='/'>首页</a></li>
            <li><a href='/articles'>文章列表</a></li>
            <li><a href='/about'>关于我</a></li>
            <li><a href='/contact'>联系方式</a></li>
          </ul>
        </div>

        <div class='footer-section'>
          <h3>社交媒体</h3>
          <ul>
            <li><a href='https://github.com' rel='noopener noreferrer' target='_blank'>GitHub</a></li>
            <li><a href='https://twitter.com' rel='noopener noreferrer' target='_blank'>Twitter</a></li>
          </ul>
        </div>
      </div>

      <div class='footer-bottom'>
        <p>&copy; 2025 技术博客. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Structured Data -->
  <script type='application/ld+json'>
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "技术博客",
    "description": "专注于前端开发技术分享的个人博客",
    "url": "https://example.com",
    "author": {
      "@type": "Person",
      "name": "张三"
    }
  }
  <\/script>
</body>
</html>`

// 博客首页CSS代码
const blogCSS = `/* 基础样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Skip Link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #4285f4;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.logo a {
  text-decoration: none;
  color: #4285f4;
  font-size: 24px;
  font-weight: bold;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 24px;
}

nav a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.2s;
}

nav a:hover,
nav a[aria-current] {
  color: #4285f4;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.hero h2 {
  font-size: 48px;
  margin-bottom: 16px;
}

.hero p {
  font-size: 20px;
  margin-bottom: 32px;
  opacity: 0.9;
}

.btn-primary {
  display: inline-block;
  padding: 12px 32px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

/* Sections */
section {
  padding: 60px 0;
}

section h2 {
  font-size: 36px;
  margin-bottom: 32px;
  color: #4285f4;
}

/* Featured Article */
.featured {
  background: #f8f9fa;
}

.featured-article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.featured-article figure {
  margin: 0;
}

.featured-article img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  padding: 32px;
}

.article-content h3 {
  font-size: 28px;
  margin-bottom: 12px;
}

.article-content h3 a {
  text-decoration: none;
  color: #333;
}

.article-content h3 a:hover {
  color: #4285f4;
}

.article-meta {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
}

.article-content p {
  color: #666;
  margin-bottom: 16px;
}

.read-more {
  color: #4285f4;
  text-decoration: none;
  font-weight: 600;
}

.read-more:hover {
  text-decoration: underline;
}

/* Articles Grid */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.article-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.article-card img {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.card-content h3 a {
  text-decoration: none;
  color: #333;
}

.card-content h3 a:hover {
  color: #4285f4;
}

.card-content time {
  color: #666;
  font-size: 14px;
  display: block;
  margin-bottom: 12px;
}

.card-content p {
  color: #666;
  font-size: 14px;
}

/* Footer */
footer {
  background: #333;
  color: white;
  padding: 40px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  margin-bottom: 32px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 16px;
}

.footer-section ul {
  list-style: none;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  line-height: 2;
}

.footer-section a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #555;
  color: #999;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero h2 {
    font-size: 32px;
  }

  .hero p {
    font-size: 16px;
  }

  nav ul {
    gap: 12px;
  }

  .featured-article {
    grid-template-columns: 1fr;
  }

  section h2 {
    font-size: 28px;
  }
}`
</script>

<style scoped>
.lesson-section {
  margin-bottom: 48px;
}

.lesson-section h2 {
  color: var(--primary-blue);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 3px solid var(--primary-blue);
}

.lesson-section h3 {
  color: var(--text-primary);
  margin-top: 24px;
  margin-bottom: 12px;
}

.lesson-section h4 {
  margin: 12px 0 8px 0;
}

.lesson-section p {
  line-height: 1.8;
  margin-bottom: 16px;
}

.lesson-section ul,
.lesson-section ol {
  line-height: 1.8;
  margin-bottom: 16px;
  padding-left: 24px;
}

.lesson-section li {
  margin-bottom: 8px;
}

.project-overview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 32px;
  border-radius: 16px;
  margin: 24px 0;
}

.project-overview h3 {
  color: white;
  margin-top: 0;
}

.project-overview ul {
  margin: 16px 0 0 0;
}

.info-box {
  background: #e3f2fd;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  border-left: 4px solid var(--primary-blue);
}

.info-box strong {
  color: var(--primary-blue);
  display: block;
  margin-bottom: 16px;
  font-size: 18px;
}

.knowledge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.knowledge-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.knowledge-item .emoji {
  font-size: 32px;
  display: block;
  margin-bottom: 8px;
}

.concept-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.concept-box h3 {
  color: white;
  margin-top: 0;
}

.concept-box ul {
  margin: 12px 0 0 0;
}

.concept-box pre {
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 12px 0 0 0;
}

.concept-box code {
  color: #f0f0f0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.tip-box {
  background: #fff3e0;
  padding: 16px 20px;
  border-radius: 8px;
  margin: 24px 0;
  border-left: 4px solid #ff9800;
}

.tip-box strong {
  color: #f57c00;
}

.tip-box ul {
  margin: 12px 0 0 0;
}

.example-box {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  border: 2px solid #e9ecef;
}

.example-box h3 {
  color: var(--primary-blue);
  margin-top: 0;
}

.highlight-box {
  background: #f0f4f8;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
}

.highlight-box h3 {
  color: var(--primary-blue);
  margin-top: 0;
}

.detail-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-left: 4px solid var(--primary-blue);
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-item h4 {
  color: var(--primary-blue);
  margin-top: 0;
}

.detail-item pre {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 12px 0;
}

.detail-item code {
  color: #333;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.detail-item p {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.extension-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.extension-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  transition: all 0.3s;
}

.extension-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-blue);
}

.card-icon {
  font-size: 48px;
  text-align: center;
  margin-bottom: 16px;
}

.extension-card h3 {
  color: var(--primary-blue);
  text-align: center;
  margin: 12px 0;
}

.extension-card p {
  color: #666;
  margin-bottom: 12px;
}

.extension-card ul {
  font-size: 14px;
  margin: 0;
}

.checklist-box {
  background: #f8f9fa;
  padding: 32px;
  border-radius: 12px;
  margin: 24px 0;
}

.checklist-box h3 {
  color: var(--primary-blue);
  margin-top: 24px;
  margin-bottom: 12px;
}

.checklist-box h3:first-child {
  margin-top: 0;
}

.checklist {
  list-style: none;
  padding-left: 0;
}

.checklist li {
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
}

.checklist li:last-child {
  border-bottom: none;
}

.summary-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 16px;
  margin-top: 48px;
}

.summary-section h2 {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.3);
  text-align: center;
  font-size: 32px;
}

.completion-message {
  text-align: center;
  margin: 32px 0;
}

.completion-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.completion-message h3 {
  color: white;
  font-size: 24px;
  margin-bottom: 16px;
}

.completion-message p {
  font-size: 18px;
  opacity: 0.9;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 32px 0;
}

.summary-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.summary-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.summary-item h3 {
  color: white;
  margin: 12px 0;
  font-size: 18px;
}

.summary-item p {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

.next-steps {
  background: rgba(255, 255, 255, 0.1);
  padding: 32px;
  border-radius: 12px;
  margin-top: 32px;
  backdrop-filter: blur(10px);
}

.next-steps h3 {
  color: white;
  margin-top: 0;
  text-align: center;
}

.next-steps > p {
  text-align: center;
  margin-bottom: 24px;
}

.next-modules {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.next-module {
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.module-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 12px;
}

.next-module h4 {
  color: white;
  margin: 8px 0;
}

.next-module p {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

.practice-section {
  background: #f0f4f8;
  padding: 32px;
  border-radius: 16px;
}

.practice-list {
  display: grid;
  gap: 20px;
  margin-top: 24px;
}

.practice-item {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border-left: 4px solid var(--primary-blue);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.practice-item h3 {
  color: var(--primary-blue);
  margin-top: 0;
}

.practice-item p {
  color: var(--text-secondary);
  margin: 0;
}

code {
  background: rgba(66, 133, 244, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
  color: var(--primary-blue);
}

a {
  color: var(--primary-blue);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .knowledge-grid,
  .extension-grid,
  .next-modules {
    grid-template-columns: 1fr;
  }

  .summary-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .completion-icon {
    font-size: 60px;
  }

  .completion-message h3 {
    font-size: 20px;
  }
}
</style>
