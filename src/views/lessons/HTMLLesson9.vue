<template>
  <LessonLayout
    :lesson-number="9"
    lesson-title="HTML 最佳实践"
    :prev-lesson="{ name: 'HTMLLesson8', title: '第8课：HTML5 新特性' }"
    :next-lesson="{ name: 'HTMLLesson10', title: '第10课：可访问性' }"
  >
    <!-- 课程简介 -->
    <section class="lesson-section">
      <h2>本课内容</h2>
      <p>编写高质量的 HTML 代码需要遵循一些最佳实践。本课将学习：</p>
      <ul>
        <li>代码规范与风格</li>
        <li>文档结构最佳实践</li>
        <li>性能优化技巧</li>
        <li>安全性考虑</li>
        <li>常见错误与避免</li>
      </ul>
    </section>

    <!-- 代码规范 -->
    <section class="lesson-section">
      <h2>1. 代码规范与风格</h2>

      <div class="comparison-box">
        <h3>✅ 推荐做法 vs ❌ 不推荐做法</h3>

        <div class="compare-item">
          <div class="good">
            <h4>✅ 使用小写标签名</h4>
            <pre><code>&lt;div class="container"&gt;
  &lt;h1&gt;标题&lt;/h1&gt;
  &lt;p&gt;段落内容&lt;/p&gt;
&lt;/div&gt;</code></pre>
          </div>
          <div class="bad">
            <h4>❌ 使用大写或混合大小写</h4>
            <pre><code>&lt;DIV class="container"&gt;
  &lt;H1&gt;标题&lt;/H1&gt;
  &lt;P&gt;段落内容&lt;/P&gt;
&lt;/DIV&gt;</code></pre>
          </div>
        </div>

        <div class="compare-item">
          <div class="good">
            <h4>✅ 属性值使用双引号</h4>
            <pre><code>&lt;img src="image.jpg" alt="描述"&gt;
&lt;a href="page.html" title="链接"&gt;</code></pre>
          </div>
          <div class="bad">
            <h4>❌ 不使用引号或单引号</h4>
            <pre><code>&lt;img src=image.jpg alt=描述&gt;
&lt;a href='page.html' title='链接'&gt;</code></pre>
          </div>
        </div>

        <div class="compare-item">
          <div class="good">
            <h4>✅ 正确的缩进和格式化</h4>
            <pre><code>&lt;ul&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;链接&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;链接&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
          </div>
          <div class="bad">
            <h4>❌ 无缩进或格式混乱</h4>
            <pre><code>&lt;ul&gt;
&lt;li&gt;
&lt;a href="#"&gt;链接&lt;/a&gt;
&lt;/li&gt;&lt;li&gt;&lt;a href="#"&gt;链接&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
          </div>
        </div>

        <div class="compare-item">
          <div class="good">
            <h4>✅ 自闭合标签使用 /&gt;</h4>
            <pre><code>&lt;img src="photo.jpg" alt="照片" /&gt;
&lt;br /&gt;
&lt;input type="text" /&gt;</code></pre>
          </div>
          <div class="bad">
            <h4>❌ 不统一的写法</h4>
            <pre><code>&lt;img src="photo.jpg" alt="照片"&gt;
&lt;br&gt;
&lt;input type="text"&gt;</code></pre>
          </div>
        </div>
      </div>

      <div class="tip-box">
        <strong>💡 代码风格建议：</strong>
        <ul>
          <li>使用 2 或 4 个空格缩进（团队统一）</li>
          <li>每行代码不超过 80-120 字符</li>
          <li>在块级元素前后添加空行提高可读性</li>
          <li>使用有意义的 class 和 id 命名</li>
          <li>保持一致的命名约定（如 kebab-case）</li>
        </ul>
      </div>
    </section>

    <!-- 文档结构 -->
    <section class="lesson-section">
      <h2>2. 文档结构最佳实践</h2>

      <div class="concept-box">
        <h3>完整的 HTML5 文档模板</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta name="description" content="页面描述，用于 SEO"&gt;
  &lt;meta name="keywords" content="关键词1, 关键词2"&gt;
  &lt;meta name="author" content="作者名"&gt;

  &lt;!-- Open Graph for social media --&gt;
  &lt;meta property="og:title" content="页面标题"&gt;
  &lt;meta property="og:description" content="页面描述"&gt;
  &lt;meta property="og:image" content="分享图片URL"&gt;

  &lt;title&gt;页面标题 - 网站名称&lt;/title&gt;

  &lt;link rel="icon" type="image/png" href="/favicon.png"&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;nav&gt;
      &lt;!-- 导航内容 --&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;!-- 主要内容 --&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;!-- 页脚内容 --&gt;
  &lt;/footer&gt;

  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>语义化标签的正确使用</h3>
        <CodeEditor
          :initial-html="`<!DOCTYPE html>
<html lang='zh-CN'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>博客文章</title>
</head>
<body>
  <header style='background: #4285f4; color: white; padding: 20px;'>
    <h1 style='margin: 0;'>我的博客</h1>
    <nav style='margin-top: 10px;'>
      <a href='#' style='color: white; margin-right: 15px;'>首页</a>
      <a href='#' style='color: white; margin-right: 15px;'>文章</a>
      <a href='#' style='color: white;'>关于</a>
    </nav>
  </header>

  <main style='max-width: 800px; margin: 20px auto; padding: 0 20px;'>
    <article style='background: #f5f5f5; padding: 20px; border-radius: 8px;'>
      <header>
        <h2 style='margin-top: 0;'>HTML 最佳实践</h2>
        <p style='color: #666;'>
          <time datetime='2025-01-15'>2025年1月15日</time> ·
          作者：<span>张三</span>
        </p>
      </header>

      <section>
        <h3>引言</h3>
        <p>编写高质量的 HTML 代码是前端开发的基础...</p>
      </section>

      <section>
        <h3>核心原则</h3>
        <ul>
          <li>使用语义化标签</li>
          <li>保持代码简洁</li>
          <li>注重可访问性</li>
        </ul>
      </section>

      <footer style='margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;'>
        <p style='margin: 0; color: #666;'>标签：HTML, 最佳实践, 前端</p>
      </footer>
    </article>

    <aside style='margin-top: 20px; background: #e3f2fd; padding: 15px; border-radius: 8px;'>
      <h3 style='margin-top: 0;'>相关文章</h3>
      <ul>
        <li><a href='#'>CSS 最佳实践</a></li>
        <li><a href='#'>JavaScript 编码规范</a></li>
      </ul>
    </aside>
  </main>

  <footer style='background: #333; color: white; text-align: center; padding: 20px; margin-top: 40px;'>
    <p style='margin: 0;'>&copy; 2025 我的博客. All rights reserved.</p>
  </footer>
</body>
</html>`"
          :initial-css="''"
          :initial-js="''"
          :auto-run="true"
        />
      </div>

      <div class="warning-box">
        <strong>⚠️ 避免的错误：</strong>
        <ul>
          <li>不要滥用 <code>&lt;div&gt;</code> 和 <code>&lt;span&gt;</code>，优先使用语义化标签</li>
          <li>不要跳过标题级别（h1 后直接 h3）</li>
          <li>每个页面只有一个 <code>&lt;h1&gt;</code></li>
          <li>不要使用表格做布局，表格只用于展示表格数据</li>
          <li><code>&lt;main&gt;</code> 标签在页面中只能出现一次</li>
        </ul>
      </div>
    </section>

    <!-- 性能优化 -->
    <section class="lesson-section">
      <h2>3. 性能优化</h2>

      <div class="concept-box">
        <h3>图片优化</h3>
        <pre><code>&lt;!-- 使用合适的图片格式 --&gt;
&lt;img src="photo.webp" alt="现代浏览器使用 WebP"&gt;

&lt;!-- 响应式图片 --&gt;
&lt;img
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
  src="medium.jpg"
  alt="响应式图片"
&gt;

&lt;!-- 懒加载 --&gt;
&lt;img src="image.jpg" alt="懒加载图片" loading="lazy"&gt;

&lt;!-- 预加载关键资源 --&gt;
&lt;link rel="preload" as="image" href="hero.jpg"&gt;</code></pre>
      </div>

      <div class="concept-box">
        <h3>脚本和样式优化</h3>
        <pre><code>&lt;!-- CSS 放在 head 中 --&gt;
&lt;head&gt;
  &lt;link rel="stylesheet" href="critical.css"&gt;
  &lt;link rel="preload" href="main.css" as="style"&gt;
&lt;/head&gt;

&lt;!-- JavaScript 放在 body 底部或使用 defer --&gt;
&lt;body&gt;
  &lt;!-- 页面内容 --&gt;

  &lt;script src="script.js" defer&gt;&lt;/script&gt;
  &lt;!-- 或 --&gt;
  &lt;script src="script.js" async&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;!-- defer: 按顺序执行，DOMContentLoaded 前执行 --&gt;
&lt;!-- async: 加载完立即执行，不保证顺序 --&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>实例：性能优化对比</h3>
        <div class="selector-demo">
          <div class="selector-buttons">
            <button
              v-for="opt in optimizationOptions"
              :key="opt.id"
              @click="selectedOptimization = opt.id"
              :class="{ active: selectedOptimization === opt.id }"
            >
              {{ opt.label }}
            </button>
          </div>
          <div class="selector-content">
            <div v-if="selectedOptimization === 'bad'" class="optimization-bad">
              <h4>❌ 未优化版本</h4>
              <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;!-- 阻塞渲染的 CSS --&gt;
  &lt;link rel="stylesheet" href="all-styles.css"&gt;

  &lt;!-- 阻塞渲染的 JavaScript --&gt;
  &lt;script src="jquery.js"&gt;&lt;/script&gt;
  &lt;script src="plugins.js"&gt;&lt;/script&gt;
  &lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- 大图片没有优化 --&gt;
  &lt;img src="huge-image-5mb.jpg"&gt;
  &lt;img src="banner-4k.png"&gt;

  &lt;!-- 所有图片立即加载 --&gt;
  &lt;img src="image1.jpg"&gt;
  &lt;img src="image2.jpg"&gt;
  &lt;!-- ... 100+ 张图片 --&gt;
&lt;/body&gt;
&lt;/html&gt;

结果：
• 首屏渲染时间：5-8 秒
• 总加载时间：15+ 秒
• 用户体验：差</code></pre>
            </div>

            <div v-if="selectedOptimization === 'good'" class="optimization-good">
              <h4>✅ 优化版本</h4>
              <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;!-- 关键 CSS 内联 --&gt;
  &lt;style&gt;
    /* 首屏关键样式 */
  &lt;/style&gt;

  &lt;!-- 非关键 CSS 异步加载 --&gt;
  &lt;link rel="preload" href="styles.css" as="style"
        onload="this.rel='stylesheet'"&gt;

  &lt;!-- 预连接到外部域 --&gt;
  &lt;link rel="preconnect" href="https://cdn.example.com"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- 优化后的图片 --&gt;
  &lt;img src="hero-optimized.webp"
       srcset="hero-480.webp 480w, hero-800.webp 800w"
       alt="Hero image"
       width="800" height="400"&gt;

  &lt;!-- 懒加载非首屏图片 --&gt;
  &lt;img src="image1.webp" loading="lazy" alt="Image 1"&gt;
  &lt;img src="image2.webp" loading="lazy" alt="Image 2"&gt;

  &lt;!-- JavaScript 延迟加载 --&gt;
  &lt;script src="app.js" defer&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

结果：
• 首屏渲染时间：1-2 秒 ⚡
• 总加载时间：4-6 秒 ⚡
• 用户体验：优秀 ✨</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-box">
        <strong>💡 性能优化清单：</strong>
        <ul>
          <li>✅ 压缩和优化图片（使用 WebP、AVIF 格式）</li>
          <li>✅ 使用 <code>loading="lazy"</code> 懒加载图片</li>
          <li>✅ 设置图片的 width 和 height 属性避免布局偏移</li>
          <li>✅ 使用 <code>defer</code> 或 <code>async</code> 加载脚本</li>
          <li>✅ 内联关键 CSS，异步加载非关键 CSS</li>
          <li>✅ 使用 CDN 加速静态资源</li>
          <li>✅ 启用 HTTP/2 或 HTTP/3</li>
          <li>✅ 压缩 HTML、CSS、JS 文件（gzip/brotli）</li>
        </ul>
      </div>
    </section>

    <!-- 安全性 -->
    <section class="lesson-section">
      <h2>4. 安全性考虑</h2>

      <div class="warning-box">
        <h3>⚠️ XSS（跨站脚本攻击）防护</h3>
        <pre><code>&lt;!-- ❌ 危险：直接插入用户输入 --&gt;
&lt;div&gt;&lt;%= userInput %&gt;&lt;/div&gt;

&lt;!-- ✅ 安全：转义 HTML 实体 --&gt;
&lt;div&gt;&lt;%= escapeHtml(userInput) %&gt;&lt;/div&gt;

&lt;!-- 用户输入： &lt;script&gt;alert('XSS')&lt;/script&gt; --&gt;
&lt;!-- 转义后显示： &amp;lt;script&amp;gt;alert('XSS')&amp;lt;/script&amp;gt; --&gt;</code></pre>
      </div>

      <div class="concept-box">
        <h3>安全的外部链接</h3>
        <pre><code>&lt;!-- 外部链接添加安全属性 --&gt;
&lt;a href="https://external-site.com"
   target="_blank"
   rel="noopener noreferrer"&gt;
  外部链接
&lt;/a&gt;

&lt;!-- rel="noopener": 防止新页面访问 window.opener --&gt;
&lt;!-- rel="noreferrer": 不发送 referer 信息 --&gt;</code></pre>
      </div>

      <div class="concept-box">
        <h3>内容安全策略（CSP）</h3>
        <pre><code>&lt;!-- 在 head 中设置 CSP --&gt;
&lt;meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline' https://trusted-cdn.com;
               style-src 'self' 'unsafe-inline';"&gt;

&lt;!-- 或通过 HTTP 响应头设置 --&gt;
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com</code></pre>
      </div>

      <div class="tip-box">
        <strong>💡 安全最佳实践：</strong>
        <ul>
          <li>始终验证和清理用户输入</li>
          <li>使用 HTTPS 传输敏感数据</li>
          <li>外部链接使用 <code>rel="noopener noreferrer"</code></li>
          <li>设置内容安全策略（CSP）</li>
          <li>使用 HttpOnly 和 Secure 标记的 Cookie</li>
          <li>定期更新依赖库和框架</li>
        </ul>
      </div>
    </section>

    <!-- 常见错误 -->
    <section class="lesson-section">
      <h2>5. 常见错误与避免</h2>

      <div class="comparison-box">
        <h3>典型错误示例</h3>

        <div class="error-item">
          <div class="error-bad">
            <h4>❌ 错误 1：滥用 div</h4>
            <pre><code>&lt;div class="header"&gt;
  &lt;div class="nav"&gt;
    &lt;div class="nav-item"&gt;首页&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="content"&gt;...&lt;/div&gt;
&lt;div class="footer"&gt;...&lt;/div&gt;</code></pre>
          </div>
          <div class="error-good">
            <h4>✅ 正确：使用语义化标签</h4>
            <pre><code>&lt;header&gt;
  &lt;nav&gt;
    &lt;a href="/"&gt;首页&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;...&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre>
          </div>
        </div>

        <div class="error-item">
          <div class="error-bad">
            <h4>❌ 错误 2：内联样式过多</h4>
            <pre><code>&lt;div style="color: red; font-size: 16px;
     margin: 10px; padding: 20px;
     background: #f0f0f0;"&gt;
  内容
&lt;/div&gt;</code></pre>
          </div>
          <div class="error-good">
            <h4>✅ 正确：使用 CSS 类</h4>
            <pre><code>&lt;!-- HTML --&gt;
&lt;div class="card"&gt;内容&lt;/div&gt;

&lt;!-- CSS --&gt;
.card {
  color: red;
  font-size: 16px;
  margin: 10px;
  padding: 20px;
  background: #f0f0f0;
}</code></pre>
          </div>
        </div>

        <div class="error-item">
          <div class="error-bad">
            <h4>❌ 错误 3：缺少 alt 属性</h4>
            <pre><code>&lt;img src="logo.png"&gt;
&lt;img src="product.jpg"&gt;</code></pre>
          </div>
          <div class="error-good">
            <h4>✅ 正确：提供描述性 alt</h4>
            <pre><code>&lt;img src="logo.png" alt="公司 Logo"&gt;
&lt;img src="product.jpg"
     alt="红色运动鞋，侧视图"&gt;</code></pre>
          </div>
        </div>

        <div class="error-item">
          <div class="error-bad">
            <h4>❌ 错误 4：按钮使用 div</h4>
            <pre><code>&lt;div onclick="submit()"&gt;
  提交
&lt;/div&gt;</code></pre>
          </div>
          <div class="error-good">
            <h4>✅ 正确：使用 button</h4>
            <pre><code>&lt;button type="submit"
        onclick="submit()"&gt;
  提交
&lt;/button&gt;</code></pre>
          </div>
        </div>
      </div>

      <div class="warning-box">
        <strong>⚠️ 检查清单：</strong>
        <ul>
          <li>所有图片都有 alt 属性</li>
          <li>表单输入都有对应的 label</li>
          <li>没有空的 href 或 src 属性</li>
          <li>标题层级正确（h1、h2、h3...）</li>
          <li>所有标签都正确闭合</li>
          <li>没有过时的标签（如 &lt;font&gt;、&lt;center&gt;）</li>
          <li>HTML 通过 W3C 验证器验证</li>
        </ul>
      </div>
    </section>

    <!-- 工具推荐 -->
    <section class="lesson-section">
      <h2>6. 开发工具推荐</h2>

      <div class="tools-grid">
        <div class="tool-card">
          <div class="tool-icon">🔍</div>
          <h3>W3C Validator</h3>
          <p>验证 HTML 代码是否符合标准</p>
          <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">
            validator.w3.org →
          </a>
        </div>

        <div class="tool-card">
          <div class="tool-icon">⚡</div>
          <h3>Lighthouse</h3>
          <p>性能、可访问性、SEO 综合测试</p>
          <p class="tool-note">Chrome DevTools 内置</p>
        </div>

        <div class="tool-card">
          <div class="tool-icon">📊</div>
          <h3>PageSpeed Insights</h3>
          <p>Google 网页性能分析工具</p>
          <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
            pagespeed.web.dev →
          </a>
        </div>

        <div class="tool-card">
          <div class="tool-icon">♿</div>
          <h3>axe DevTools</h3>
          <p>可访问性测试浏览器扩展</p>
          <p class="tool-note">Chrome/Firefox 扩展</p>
        </div>

        <div class="tool-card">
          <div class="tool-icon">🎨</div>
          <h3>Prettier</h3>
          <p>代码格式化工具，保持一致风格</p>
          <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">
            prettier.io →
          </a>
        </div>

        <div class="tool-card">
          <div class="tool-icon">✨</div>
          <h3>HTMLHint</h3>
          <p>HTML 代码检查工具</p>
          <a href="https://htmlhint.com/" target="_blank" rel="noopener noreferrer">
            htmlhint.com →
          </a>
        </div>
      </div>
    </section>

    <!-- 课程总结 -->
    <section class="lesson-section summary-section">
      <h2>课程总结</h2>

      <div class="summary-grid">
        <div class="summary-item">
          <div class="summary-icon">📝</div>
          <h3>代码规范</h3>
          <p>统一的命名、缩进、格式化</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🏗️</div>
          <h3>文档结构</h3>
          <p>语义化标签、完整的 meta 信息</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">⚡</div>
          <h3>性能优化</h3>
          <p>图片优化、懒加载、脚本延迟</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🔒</div>
          <h3>安全性</h3>
          <p>XSS 防护、CSP、安全链接</p>
        </div>
      </div>

      <div class="key-points">
        <h3>关键要点</h3>
        <ul>
          <li>遵循代码规范，保持风格一致</li>
          <li>使用语义化标签，提升可读性和可访问性</li>
          <li>优化性能，提升用户体验</li>
          <li>注重安全，防范常见攻击</li>
          <li>使用工具验证和优化代码</li>
          <li>持续学习，跟进最新标准</li>
        </ul>
      </div>
    </section>

    <!-- 练习题 -->
    <section class="lesson-section practice-section">
      <h2>实践练习</h2>
      <div class="practice-list">
        <div class="practice-item">
          <h3>练习 1：代码审查</h3>
          <p>找出以下代码的问题并改正：缺少 DOCTYPE、使用过时标签、没有语义化、缺少必要属性等。</p>
        </div>
        <div class="practice-item">
          <h3>练习 2：性能优化</h3>
          <p>优化一个包含大量图片的页面，使用响应式图片、懒加载等技术。</p>
        </div>
        <div class="practice-item">
          <h3>练习 3：W3C 验证</h3>
          <p>使用 W3C Validator 验证你的 HTML 代码，修复所有错误和警告。</p>
        </div>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import { ref } from 'vue'
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'

const selectedOptimization = ref('bad')

const optimizationOptions = [
  { id: 'bad', label: '❌ 未优化' },
  { id: 'good', label: '✅ 已优化' }
]
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

.comparison-box {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  border: 2px solid #e9ecef;
}

.comparison-box h3 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 24px;
}

.compare-item,
.error-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #dee2e6;
}

.compare-item:last-child,
.error-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.good,
.error-good {
  background: #d4edda;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.bad,
.error-bad {
  background: #f8d7da;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #dc3545;
}

.good h4,
.error-good h4 {
  color: #155724;
  margin-top: 0;
}

.bad h4,
.error-bad h4 {
  color: #721c24;
  margin-top: 0;
}

.good pre,
.bad pre,
.error-good pre,
.error-bad pre {
  background: rgba(255, 255, 255, 0.7);
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 8px 0 0 0;
}

.good code,
.error-good code {
  color: #155724;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.bad code,
.error-bad code {
  color: #721c24;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
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

.selector-demo {
  margin-top: 16px;
}

.selector-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.selector-buttons button {
  flex: 1;
  padding: 12px 24px;
  background: white;
  border: 2px solid var(--primary-blue);
  border-radius: 8px;
  color: var(--primary-blue);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.selector-buttons button:hover {
  background: #e3f2fd;
}

.selector-buttons button.active {
  background: var(--primary-blue);
  color: white;
}

.selector-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.optimization-bad pre,
.optimization-good pre {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 12px 0 0 0;
}

.optimization-bad code,
.optimization-good code {
  color: #333;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.tip-box {
  background: #e3f2fd;
  padding: 16px 20px;
  border-radius: 8px;
  margin: 24px 0;
  border-left: 4px solid var(--primary-blue);
}

.tip-box strong {
  color: var(--primary-blue);
}

.tip-box ul {
  margin: 12px 0 0 0;
}

.warning-box {
  background: #fff3e0;
  padding: 16px 20px;
  border-radius: 8px;
  margin: 24px 0;
  border-left: 4px solid #ff9800;
}

.warning-box strong,
.warning-box h3 {
  color: #f57c00;
}

.warning-box ul {
  margin: 12px 0 0 0;
}

.warning-box pre {
  background: rgba(255, 152, 0, 0.1);
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 12px 0 0 0;
}

.warning-box code {
  color: #e65100;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.tool-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  text-align: center;
  transition: all 0.3s;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-blue);
}

.tool-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.tool-card h3 {
  margin: 12px 0;
  color: var(--primary-blue);
}

.tool-card p {
  color: var(--text-secondary);
  font-size: 14px;
  margin: 8px 0;
}

.tool-note {
  font-size: 12px;
  color: #999;
  font-style: italic;
}

.tool-card a {
  display: inline-block;
  margin-top: 12px;
  color: var(--primary-blue);
  text-decoration: none;
  font-weight: 500;
}

.tool-card a:hover {
  text-decoration: underline;
}

.summary-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 32px;
  border-radius: 16px;
  margin-top: 48px;
}

.summary-section h2 {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.3);
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.summary-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
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
}

.summary-item p {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

.key-points {
  background: rgba(255, 255, 255, 0.1);
  padding: 24px;
  border-radius: 12px;
  margin-top: 24px;
  backdrop-filter: blur(10px);
}

.key-points h3 {
  color: white;
  margin-top: 0;
}

.key-points ul {
  margin: 16px 0 0 0;
}

.key-points li {
  margin-bottom: 8px;
  opacity: 0.95;
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
  .compare-item,
  .error-item {
    grid-template-columns: 1fr;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
