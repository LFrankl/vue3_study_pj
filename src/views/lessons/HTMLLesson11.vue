<template>
  <LessonLayout
    :lesson-number="11"
    lesson-title="SEO 优化"
    :prev-lesson="{ name: 'HTMLLesson10', title: '第10课：可访问性' }"
    :next-lesson="{ name: 'HTMLLesson12', title: '第12课：HTML 综合项目' }"
  >
    <!-- 课程简介 -->
    <section class="lesson-section">
      <h2>本课内容</h2>
      <p>搜索引擎优化（SEO）让你的网站更容易被搜索引擎发现和索引。本课将学习：</p>
      <ul>
        <li>什么是 SEO 及其重要性</li>
        <li>HTML 中的 SEO 基础</li>
        <li>Meta 标签优化</li>
        <li>结构化数据（Schema.org）</li>
        <li>Open Graph 和 Twitter Cards</li>
        <li>性能与 SEO 的关系</li>
        <li>SEO 最佳实践和工具</li>
      </ul>

      <div class="info-box">
        <strong>🔍 为什么 SEO 重要？</strong>
        <ul>
          <li><strong>流量来源</strong>：超过 50% 的网站流量来自搜索引擎</li>
          <li><strong>用户信任</strong>：高排名的网站更容易获得用户信任</li>
          <li><strong>成本效益</strong>：有机搜索流量是免费的</li>
          <li><strong>长期效果</strong>：好的 SEO 带来持续的流量</li>
          <li><strong>用户体验</strong>：SEO 优化通常意味着更好的用户体验</li>
        </ul>
      </div>
    </section>

    <!-- HTML SEO 基础 -->
    <section class="lesson-section">
      <h2>1. HTML 中的 SEO 基础</h2>

      <div class="concept-box">
        <h3>语义化 HTML</h3>
        <p>搜索引擎依赖 HTML 结构来理解页面内容：</p>
        <ul>
          <li>使用正确的标题层级（h1-h6）</li>
          <li>使用语义化标签（article、section、nav 等）</li>
          <li>提供有意义的 alt 文本</li>
          <li>使用描述性的链接文本</li>
        </ul>
      </div>

      <div class="comparison-box">
        <h3>SEO 友好 vs 不友好的 HTML</h3>

        <div class="compare-item">
          <div class="bad">
            <h4>❌ SEO 不友好</h4>
            <pre><code>&lt;div class="title"&gt;产品名称&lt;/div&gt;
&lt;div class="content"&gt;
  &lt;div&gt;产品描述...&lt;/div&gt;
  &lt;div&gt;
    &lt;span onclick="buy()"&gt;点击这里&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;div&gt;&lt;img src="pic.jpg"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            <p class="explanation">搜索引擎难以理解页面结构和内容重要性</p>
          </div>
          <div class="good">
            <h4>✅ SEO 友好</h4>
            <pre><code>&lt;article&gt;
  &lt;h1&gt;产品名称&lt;/h1&gt;
  &lt;section&gt;
    &lt;h2&gt;产品描述&lt;/h2&gt;
    &lt;p&gt;详细的产品描述文本...&lt;/p&gt;
    &lt;a href="/buy" class="btn"&gt;
      立即购买产品名称
    &lt;/a&gt;
  &lt;/section&gt;
  &lt;figure&gt;
    &lt;img src="product.jpg"
         alt="产品名称展示图"&gt;
    &lt;figcaption&gt;产品展示&lt;/figcaption&gt;
  &lt;/figure&gt;
&lt;/article&gt;</code></pre>
            <p class="explanation">清晰的语义结构，搜索引擎易于理解</p>
          </div>
        </div>
      </div>

      <div class="tip-box">
        <strong>💡 HTML SEO 检查清单：</strong>
        <ul>
          <li>✅ 每页只有一个 h1 标签</li>
          <li>✅ 标题层级正确且不跳级</li>
          <li>✅ 所有图片都有描述性 alt 文本</li>
          <li>✅ 链接文本有意义（不只是"点击这里"）</li>
          <li>✅ 使用语义化标签而非 div</li>
          <li>✅ URL 简洁且包含关键词</li>
        </ul>
      </div>
    </section>

    <!-- Meta 标签 -->
    <section class="lesson-section">
      <h2>2. Meta 标签优化</h2>
      <p>Meta 标签提供关于网页的元数据，对 SEO 至关重要。</p>

      <div class="concept-box">
        <h3>核心 Meta 标签</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

  &lt;!-- 标题：50-60 字符最佳 --&gt;
  &lt;title&gt;产品名称 - 简短描述 | 品牌名&lt;/title&gt;

  &lt;!-- 描述：150-160 字符最佳 --&gt;
  &lt;meta name="description"
        content="吸引人的产品描述，包含关键词，激发用户点击兴趣。"&gt;

  &lt;!-- 关键词（已较少使用，但不影响添加）--&gt;
  &lt;meta name="keywords" content="关键词1, 关键词2, 关键词3"&gt;

  &lt;!-- 作者 --&gt;
  &lt;meta name="author" content="作者或公司名"&gt;

  &lt;!-- 搜索引擎指令 --&gt;
  &lt;meta name="robots" content="index, follow"&gt;

  &lt;!-- 规范链接（防止重复内容）--&gt;
  &lt;link rel="canonical" href="https://example.com/page"&gt;

  &lt;!-- 网站图标 --&gt;
  &lt;link rel="icon" type="image/png" href="/favicon.png"&gt;
&lt;/head&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>实例：优化的 Meta 标签</h3>
        <div class="meta-demo">
          <div class="meta-category">
            <h4>电商产品页</h4>
            <pre><code>&lt;title&gt;iPhone 15 Pro Max 256GB - 苹果旗舰手机 | Apple Store&lt;/title&gt;
&lt;meta name="description"
      content="iPhone 15 Pro Max，配备钛金属机身、A17 Pro芯片、专业相机系统。官方在线商店，正品保证，全国联保。"&gt;</code></pre>
          </div>

          <div class="meta-category">
            <h4>博客文章</h4>
            <pre><code>&lt;title&gt;2025年前端开发趋势：你需要知道的10件事 | 技术博客&lt;/title&gt;
&lt;meta name="description"
      content="深入分析2025年前端开发领域的最新趋势，包括框架演进、性能优化、AI集成等。适合前端开发者阅读。"&gt;</code></pre>
          </div>

          <div class="meta-category">
            <h4>公司主页</h4>
            <pre><code>&lt;title&gt;ABC科技 - 专业的企业数字化解决方案提供商&lt;/title&gt;
&lt;meta name="description"
      content="ABC科技为企业提供定制化数字化转型解决方案，包括云计算、大数据、AI应用。服务超过500家企业。"&gt;</code></pre>
          </div>
        </div>
      </div>

      <div class="warning-box">
        <strong>⚠️ Meta 标签注意事项：</strong>
        <ul>
          <li>标题和描述要独特，不要在多个页面重复</li>
          <li>标题长度控制在 50-60 字符内</li>
          <li>描述长度控制在 150-160 字符内</li>
          <li>自然地包含关键词，不要堆砌</li>
          <li>描述要吸引人，提高点击率</li>
          <li>每页都要有不同的 title 和 description</li>
        </ul>
      </div>
    </section>

    <!-- 结构化数据 -->
    <section class="lesson-section">
      <h2>3. 结构化数据（Schema.org）</h2>
      <p>结构化数据使用标准化格式描述页面内容，帮助搜索引擎更好地理解和展示你的内容（富文本摘要）。</p>

      <div class="concept-box">
        <h3>什么是结构化数据？</h3>
        <p>结构化数据使用 JSON-LD 格式，嵌入在 HTML 中：</p>
        <pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "文章标题",
  "author": {
    "@type": "Person",
    "name": "作者名"
  },
  "datePublished": "2025-01-15",
  "image": "https://example.com/image.jpg"
}
&lt;/script&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>常用结构化数据类型</h3>

        <div class="schema-tabs">
          <div class="schema-buttons">
            <button
              v-for="schema in schemaTypes"
              :key="schema.id"
              @click="selectedSchema = schema.id"
              :class="{ active: selectedSchema === schema.id }"
            >
              {{ schema.label }}
            </button>
          </div>

          <div class="schema-content">
            <div v-if="selectedSchema === 'article'" class="schema-example">
              <h4>📝 文章（Article）</h4>
              <pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "HTML SEO 优化完全指南",
  "description": "深入讲解 HTML 中的 SEO 优化技巧",
  "image": "https://example.com/article-image.jpg",
  "author": {
    "@type": "Person",
    "name": "张三",
    "url": "https://example.com/author/zhangsan"
  },
  "publisher": {
    "@type": "Organization",
    "name": "技术博客",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-20"
}
&lt;/script&gt;</code></pre>
            </div>

            <div v-if="selectedSchema === 'product'" class="schema-example">
              <h4>🛒 产品（Product）</h4>
              <pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "iPhone 15 Pro",
  "image": "https://example.com/iphone15pro.jpg",
  "description": "苹果最新旗舰手机",
  "brand": {
    "@type": "Brand",
    "name": "Apple"
  },
  "offers": {
    "@type": "Offer",
    "price": "9999",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock",
    "url": "https://example.com/product/iphone15pro"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "256"
  }
}
&lt;/script&gt;</code></pre>
            </div>

            <div v-if="selectedSchema === 'recipe'" class="schema-example">
              <h4>🍳 食谱（Recipe）</h4>
              <pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "经典番茄炒蛋",
  "image": "https://example.com/recipe.jpg",
  "author": {
    "@type": "Person",
    "name": "厨师李四"
  },
  "datePublished": "2025-01-15",
  "description": "简单美味的家常菜",
  "prepTime": "PT10M",
  "cookTime": "PT15M",
  "totalTime": "PT25M",
  "recipeYield": "2人份",
  "recipeIngredient": [
    "鸡蛋 3个",
    "番茄 2个",
    "盐 适量",
    "油 适量"
  ],
  "recipeInstructions": [
    "将番茄切块",
    "鸡蛋打散",
    "热油炒鸡蛋",
    "加入番茄翻炒"
  ]
}
&lt;/script&gt;</code></pre>
            </div>

            <div v-if="selectedSchema === 'organization'" class="schema-example">
              <h4>🏢 组织（Organization）</h4>
              <pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ABC科技公司",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "description": "专业的软件开发公司",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "中关村大街1号",
    "addressLocality": "北京",
    "addressRegion": "北京市",
    "postalCode": "100000",
    "addressCountry": "CN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-10-12345678",
    "contactType": "客户服务"
  },
  "sameAs": [
    "https://twitter.com/abctech",
    "https://weibo.com/abctech"
  ]
}
&lt;/script&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-box">
        <strong>💡 结构化数据的好处：</strong>
        <ul>
          <li><strong>富文本摘要</strong>：在搜索结果中显示评分、价格、图片等</li>
          <li><strong>知识图谱</strong>：可能出现在 Google 知识面板</li>
          <li><strong>语音搜索</strong>：更容易被语音助手理解和引用</li>
          <li><strong>点击率提升</strong>：丰富的搜索结果更吸引点击</li>
        </ul>
      </div>
    </section>

    <!-- Open Graph -->
    <section class="lesson-section">
      <h2>4. Open Graph 和 Twitter Cards</h2>
      <p>优化社交媒体分享时的展示效果。</p>

      <div class="concept-box">
        <h3>Open Graph（Facebook, LinkedIn 等）</h3>
        <pre><code>&lt;!-- Open Graph 基础标签 --&gt;
&lt;meta property="og:type" content="website"&gt;
&lt;meta property="og:url" content="https://example.com/page"&gt;
&lt;meta property="og:title" content="页面标题"&gt;
&lt;meta property="og:description" content="页面描述"&gt;
&lt;meta property="og:image" content="https://example.com/share-image.jpg"&gt;
&lt;meta property="og:image:width" content="1200"&gt;
&lt;meta property="og:image:height" content="630"&gt;
&lt;meta property="og:site_name" content="网站名称"&gt;
&lt;meta property="og:locale" content="zh_CN"&gt;

&lt;!-- 文章类型额外标签 --&gt;
&lt;meta property="article:published_time" content="2025-01-15T12:00:00+08:00"&gt;
&lt;meta property="article:author" content="作者名"&gt;
&lt;meta property="article:section" content="技术"&gt;
&lt;meta property="article:tag" content="HTML"&gt;</code></pre>
      </div>

      <div class="concept-box">
        <h3>Twitter Cards</h3>
        <pre><code>&lt;!-- Twitter Card 标签 --&gt;
&lt;meta name="twitter:card" content="summary_large_image"&gt;
&lt;meta name="twitter:site" content="@yourusername"&gt;
&lt;meta name="twitter:creator" content="@yourusername"&gt;
&lt;meta name="twitter:title" content="页面标题"&gt;
&lt;meta name="twitter:description" content="页面描述"&gt;
&lt;meta name="twitter:image" content="https://example.com/twitter-image.jpg"&gt;

&lt;!-- Card 类型 --&gt;
&lt;!-- summary: 小图卡片 --&gt;
&lt;!-- summary_large_image: 大图卡片 --&gt;
&lt;!-- app: 应用卡片 --&gt;
&lt;!-- player: 播放器卡片 --&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>完整的社交媒体 Meta 标签</h3>
        <CodeEditor
          :initial-html="`<!DOCTYPE html>
<html lang='zh-CN'>
<head>
  <meta charset='UTF-8'>
  <title>前端开发完全指南 | 技术博客</title>
  <meta name='description' content='从零开始学习前端开发的完整教程，涵盖HTML、CSS、JavaScript等核心技术。'>

  <!-- Open Graph -->
  <meta property='og:type' content='article'>
  <meta property='og:url' content='https://example.com/frontend-guide'>
  <meta property='og:title' content='前端开发完全指南'>
  <meta property='og:description' content='从零开始学习前端开发的完整教程，涵盖HTML、CSS、JavaScript等核心技术。'>
  <meta property='og:image' content='https://example.com/images/frontend-guide-og.jpg'>
  <meta property='og:image:width' content='1200'>
  <meta property='og:image:height' content='630'>
  <meta property='og:site_name' content='技术博客'>

  <!-- Twitter Card -->
  <meta name='twitter:card' content='summary_large_image'>
  <meta name='twitter:title' content='前端开发完全指南'>
  <meta name='twitter:description' content='从零开始学习前端开发的完整教程，涵盖HTML、CSS、JavaScript等核心技术。'>
  <meta name='twitter:image' content='https://example.com/images/frontend-guide-twitter.jpg'>
</head>
<body>
  <article style='max-width: 800px; margin: 40px auto; padding: 20px;'>
    <h1 style='color: #4285f4;'>前端开发完全指南</h1>
    <p style='color: #666;'>发布于 2025年1月15日</p>
    <div style='margin: 20px 0; padding: 15px; background: #e3f2fd; border-left: 4px solid #4285f4;'>
      <p style='margin: 0;'><strong>✨ 分享提示：</strong> 这个页面配置了 Open Graph 和 Twitter Cards，在社交媒体上分享会显示精美的卡片预览！</p>
    </div>
    <p>页面内容...</p>
  </article>
</body>
</html>`"
          :initial-css="''"
          :initial-js="''"
          :auto-run="true"
        />
      </div>

      <div class="tip-box">
        <strong>💡 社交媒体优化建议：</strong>
        <ul>
          <li>分享图片尺寸：Open Graph 1200×630px，Twitter 1200×600px</li>
          <li>图片格式：JPG 或 PNG，文件大小 &lt; 1MB</li>
          <li>标题长度：40-60 字符</li>
          <li>描述长度：120-150 字符</li>
          <li>使用在线工具测试：Facebook Sharing Debugger、Twitter Card Validator</li>
        </ul>
      </div>
    </section>

    <!-- 性能与 SEO -->
    <section class="lesson-section">
      <h2>5. 性能与 SEO</h2>
      <p>网站性能是 Google 的重要排名因素（Core Web Vitals）。</p>

      <div class="concept-box">
        <h3>Core Web Vitals（核心网页指标）</h3>
        <ul>
          <li><strong>LCP（最大内容绘制）</strong>：页面主要内容加载时间 &lt; 2.5秒</li>
          <li><strong>FID（首次输入延迟）</strong>：用户交互响应时间 &lt; 100毫秒</li>
          <li><strong>CLS（累积布局偏移）</strong>：视觉稳定性 &lt; 0.1</li>
        </ul>
      </div>

      <div class="example-box">
        <h3>性能优化的 HTML 技巧</h3>
        <pre><code>&lt;!-- 1. 预连接到外部域 --&gt;
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
&lt;link rel="dns-prefetch" href="https://cdn.example.com"&gt;

&lt;!-- 2. 预加载关键资源 --&gt;
&lt;link rel="preload" as="image" href="/hero-image.jpg"&gt;
&lt;link rel="preload" as="font" href="/font.woff2" crossorigin&gt;

&lt;!-- 3. 图片懒加载 --&gt;
&lt;img src="image.jpg" loading="lazy" alt="描述"&gt;

&lt;!-- 4. 脚本延迟加载 --&gt;
&lt;script src="script.js" defer&gt;&lt;/script&gt;

&lt;!-- 5. 设置图片尺寸避免布局偏移 --&gt;
&lt;img src="image.jpg" width="800" height="600" alt="描述"&gt;

&lt;!-- 6. 使用现代图片格式 --&gt;
&lt;picture&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;source srcset="image.avif" type="image/avif"&gt;
  &lt;img src="image.jpg" alt="描述"&gt;
&lt;/picture&gt;</code></pre>
      </div>

      <div class="warning-box">
        <strong>⚠️ 常见性能问题：</strong>
        <ul>
          <li>大量未压缩的图片</li>
          <li>阻塞渲染的 CSS 和 JavaScript</li>
          <li>未设置图片尺寸导致布局偏移</li>
          <li>过多的第三方脚本</li>
          <li>未启用 HTTP/2 或 HTTP/3</li>
          <li>未使用 CDN</li>
        </ul>
      </div>
    </section>

    <!-- SEO 最佳实践 -->
    <section class="lesson-section">
      <h2>6. SEO 最佳实践</h2>

      <div class="best-practices">
        <div class="practice-card">
          <div class="practice-icon">📱</div>
          <h3>移动友好</h3>
          <ul>
            <li>响应式设计</li>
            <li>viewport meta 标签</li>
            <li>适合触摸的按钮尺寸</li>
            <li>避免使用 Flash</li>
          </ul>
        </div>

        <div class="practice-card">
          <div class="practice-icon">🔒</div>
          <h3>HTTPS</h3>
          <ul>
            <li>使用 SSL 证书</li>
            <li>所有资源使用 HTTPS</li>
            <li>避免混合内容</li>
            <li>设置 HSTS</li>
          </ul>
        </div>

        <div class="practice-card">
          <div class="practice-icon">🗺️</div>
          <h3>站点地图</h3>
          <ul>
            <li>创建 XML sitemap</li>
            <li>提交到搜索引擎</li>
            <li>包含所有重要页面</li>
            <li>定期更新</li>
          </ul>
        </div>

        <div class="practice-card">
          <div class="practice-icon">🤖</div>
          <h3>robots.txt</h3>
          <ul>
            <li>指导爬虫行为</li>
            <li>屏蔽不需要索引的页面</li>
            <li>指定 sitemap 位置</li>
            <li>避免屏蔽重要内容</li>
          </ul>
        </div>

        <div class="practice-card">
          <div class="practice-icon">🔗</div>
          <h3>内部链接</h3>
          <ul>
            <li>使用描述性锚文本</li>
            <li>合理的链接结构</li>
            <li>避免过多链接</li>
            <li>修复死链</li>
          </ul>
        </div>

        <div class="practice-card">
          <div class="practice-icon">📝</div>
          <h3>内容质量</h3>
          <ul>
            <li>原创且有价值</li>
            <li>定期更新</li>
            <li>适当的长度</li>
            <li>自然使用关键词</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SEO 工具 -->
    <section class="lesson-section">
      <h2>7. SEO 工具推荐</h2>

      <div class="tools-grid">
        <div class="tool-card">
          <div class="tool-icon">🔍</div>
          <h3>Google Search Console</h3>
          <p>监控网站在 Google 搜索中的表现</p>
          <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
            search.google.com →
          </a>
        </div>

        <div class="tool-card">
          <div class="tool-icon">📊</div>
          <h3>Google Analytics</h3>
          <p>跟踪网站流量和用户行为</p>
          <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">
            analytics.google.com →
          </a>
        </div>

        <div class="tool-card">
          <div class="tool-icon">⚡</div>
          <h3>PageSpeed Insights</h3>
          <p>分析页面性能和 Core Web Vitals</p>
          <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">
            pagespeed.web.dev →
          </a>
        </div>

        <div class="tool-card">
          <div class="tool-icon">🧪</div>
          <h3>Rich Results Test</h3>
          <p>测试结构化数据是否正确</p>
          <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">
            Rich Results Test →
          </a>
        </div>

        <div class="tool-card">
          <div class="tool-icon">📱</div>
          <h3>Mobile-Friendly Test</h3>
          <p>测试网站移动友好性</p>
          <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noopener noreferrer">
            Mobile-Friendly Test →
          </a>
        </div>

        <div class="tool-card">
          <div class="tool-icon">🔗</div>
          <h3>Screaming Frog</h3>
          <p>网站爬虫工具，检查 SEO 问题</p>
          <a href="https://www.screamingfrog.co.uk/seo-spider/" target="_blank" rel="noopener noreferrer">
            screamingfrog.co.uk →
          </a>
        </div>
      </div>
    </section>

    <!-- 课程总结 -->
    <section class="lesson-section summary-section">
      <h2>课程总结</h2>

      <div class="summary-grid">
        <div class="summary-item">
          <div class="summary-icon">🏗️</div>
          <h3>HTML 基础</h3>
          <p>语义化标签、正确的结构</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">📋</div>
          <h3>Meta 标签</h3>
          <p>title、description、robots</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">📊</div>
          <h3>结构化数据</h3>
          <p>Schema.org、JSON-LD</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">📱</div>
          <h3>社交媒体</h3>
          <p>Open Graph、Twitter Cards</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">⚡</div>
          <h3>性能优化</h3>
          <p>Core Web Vitals、加载速度</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🛠️</div>
          <h3>工具使用</h3>
          <p>Search Console、Analytics</p>
        </div>
      </div>

      <div class="key-points">
        <h3>关键要点</h3>
        <ul>
          <li>SEO 是持续的过程，不是一次性任务</li>
          <li>内容质量永远是第一位的</li>
          <li>技术 SEO 是基础，但不是全部</li>
          <li>移动优先是必须的</li>
          <li>性能直接影响排名</li>
          <li>结构化数据提升搜索展示效果</li>
          <li>定期监控和优化 SEO 表现</li>
          <li>遵循搜索引擎指南，避免黑帽 SEO</li>
        </ul>
      </div>
    </section>

    <!-- 练习题 -->
    <section class="lesson-section practice-section">
      <h2>实践练习</h2>
      <div class="practice-list">
        <div class="practice-item">
          <h3>练习 1：Meta 标签优化</h3>
          <p>为一个电商产品页面编写完整的 meta 标签，包括 title、description、Open Graph 等。</p>
        </div>
        <div class="practice-item">
          <h3>练习 2：结构化数据</h3>
          <p>为一篇博客文章添加 Article 类型的结构化数据，并使用 Rich Results Test 测试。</p>
        </div>
        <div class="practice-item">
          <h3>练习 3：SEO 审计</h3>
          <p>使用 Google Search Console 和 PageSpeed Insights 审计一个网站，找出并修复 SEO 问题。</p>
        </div>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import { ref } from 'vue'
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'

const selectedSchema = ref('article')

const schemaTypes = [
  { id: 'article', label: '文章' },
  { id: 'product', label: '产品' },
  { id: 'recipe', label: '食谱' },
  { id: 'organization', label: '组织' }
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

.info-box {
  background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-box strong {
  color: white;
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
}

.info-box ul {
  margin: 12px 0 0 0;
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

.concept-box p {
  margin-bottom: 12px;
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

.compare-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.good {
  background: #d4edda;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.bad {
  background: #f8d7da;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #dc3545;
}

.good h4 {
  color: #155724;
  margin-top: 0;
}

.bad h4 {
  color: #721c24;
  margin-top: 0;
}

.explanation {
  font-size: 13px;
  font-style: italic;
  margin-top: 8px;
  opacity: 0.9;
}

.good pre,
.bad pre {
  background: rgba(255, 255, 255, 0.7);
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 8px 0;
}

.good code {
  color: #155724;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.bad code {
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

.meta-demo {
  display: grid;
  gap: 20px;
  margin-top: 16px;
}

.meta-category {
  background: white;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid var(--primary-blue);
}

.meta-category h4 {
  color: var(--primary-blue);
  margin-top: 0;
}

.meta-category pre {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 8px 0 0 0;
}

.meta-category code {
  color: #333;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.schema-tabs {
  margin-top: 16px;
}

.schema-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.schema-buttons button {
  padding: 10px 20px;
  background: white;
  border: 2px solid var(--primary-blue);
  border-radius: 8px;
  color: var(--primary-blue);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.schema-buttons button:hover {
  background: #e3f2fd;
}

.schema-buttons button.active {
  background: var(--primary-blue);
  color: white;
}

.schema-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.schema-example h4 {
  color: var(--primary-blue);
  margin-top: 0;
}

.schema-example pre {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 12px 0 0 0;
}

.schema-example code {
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

.warning-box strong {
  color: #f57c00;
}

.warning-box ul {
  margin: 12px 0 0 0;
}

.best-practices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.practice-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  transition: all 0.3s;
}

.practice-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-blue);
}

.practice-icon {
  font-size: 48px;
  text-align: center;
  margin-bottom: 16px;
}

.practice-card h3 {
  color: var(--primary-blue);
  margin: 12px 0;
  text-align: center;
}

.practice-card ul {
  margin: 12px 0 0 0;
  font-size: 14px;
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
  .compare-item {
    grid-template-columns: 1fr;
  }

  .schema-buttons {
    flex-direction: column;
  }

  .schema-buttons button {
    width: 100%;
  }

  .tools-grid,
  .best-practices {
    grid-template-columns: 1fr;
  }
}
</style>
