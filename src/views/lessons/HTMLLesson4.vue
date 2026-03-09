<template>
  <LessonLayout
    lesson-id="html-lesson-4"
    title="第4课：图片与多媒体"
    :duration="25"
    :prev-lesson="{ path: '/lessons/html/lesson-3', title: '第3课：列表与表格' }"
    :next-lesson="{ path: '/lessons/html/lesson-5', title: '第5课：表单基础' }"
  >
    <!-- 课程介绍 -->
    <section class="intro-section">
      <div class="intro-card">
        <h2>🖼️ 本课学习内容</h2>
        <p>在这一课中，我们将学习如何在网页中使用图片、音频、视频等多媒体元素，让网页更加生动有趣。</p>
        <div class="learning-goals">
          <div class="goal-item">
            <span class="goal-icon">🖼️</span>
            <span>掌握图片标签的使用和属性</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">📱</span>
            <span>了解响应式图片技术</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">🎵</span>
            <span>学会嵌入音频和视频</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">🎨</span>
            <span>掌握常见图片格式的选择</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 第一部分：图片标签基础 -->
    <section class="content-section">
      <h2>1️⃣ 图片标签 &lt;img&gt;</h2>

      <div class="info-box">
        <p><strong>&lt;img&gt;</strong> 标签用于在网页中嵌入图片，它是一个<strong>自闭合标签</strong>（不需要结束标签）。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;img src="图片路径" alt="图片描述"&gt;</pre>
      </div>

      <div class="attribute-cards">
        <div class="attr-card required">
          <div class="attr-name">src</div>
          <div class="attr-badge">必需</div>
          <div class="attr-desc">图片的 URL 路径</div>
          <code>src="images/photo.jpg"</code>
        </div>

        <div class="attr-card required">
          <div class="attr-name">alt</div>
          <div class="attr-badge">必需</div>
          <div class="attr-desc">图片的替代文本（无障碍访问）</div>
          <code>alt="美丽的风景照片"</code>
        </div>

        <div class="attr-card">
          <div class="attr-name">width / height</div>
          <div class="attr-badge">可选</div>
          <div class="attr-desc">设置图片的宽度和高度（像素）</div>
          <code>width="300" height="200"</code>
        </div>

        <div class="attr-card">
          <div class="attr-name">title</div>
          <div class="attr-badge">可选</div>
          <div class="attr-desc">鼠标悬停时显示的提示文本</div>
          <code>title="点击查看大图"</code>
        </div>
      </div>

      <div class="demo-section">
        <h4>💡 图片示例</h4>
        <CodeEditor
          initial-html="<h3>我的照片</h3>

<!-- 图片示例 1 -->
<div class='image-placeholder landscape'>
  <span>🌄 风景照片</span>
</div>
<p>这是一张风景照片</p>

<!-- 图片示例 2 -->
<div class='image-placeholder avatar'>
  <span>👤</span>
</div>
<p>用户头像示例</p>

<!-- 实际使用时的代码：
<img src='images/photo.jpg' alt='美丽的风景' width='400' height='300'>
<img src='images/avatar.jpg' alt='用户头像' width='150' height='150'>
-->"
          initial-css="h3 {
  color: #2196F3;
  margin-bottom: 16px;
}
.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: transform 0.3s;
  font-size: 32px;
}
.landscape {
  width: 400px;
  height: 300px;
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
}
.avatar {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #2196F3 0%, #64B5F6 100%);
  border-radius: 50%;
}
.image-placeholder:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
p {
  color: #666;
  font-size: 14px;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>

      <div class="warning-box">
        <strong>⚠️ 重要提示：</strong>
        <ul>
          <li><code>alt</code> 属性对于无障碍访问非常重要，屏幕阅读器会读取它</li>
          <li>图片加载失败时，会显示 <code>alt</code> 文本</li>
          <li>建议使用 CSS 控制图片尺寸，而不是 width/height 属性</li>
        </ul>
      </div>
    </section>

    <!-- 第二部分：图片格式 -->
    <section class="content-section">
      <h2>2️⃣ 常见图片格式对比</h2>

      <div class="info-box">
        <p>不同的图片格式有不同的特点和适用场景，选择合适的格式可以优化网页性能。</p>
      </div>

      <div class="interactive-card">
        <h4>🎮 选择图片格式，了解其特点</h4>

        <div class="format-selector">
          <button
            v-for="format in imageFormats"
            :key="format.name"
            :class="['format-btn', { active: selectedFormat === format.name }]"
            @click="selectedFormat = format.name"
          >
            {{ format.name }}
          </button>
        </div>

        <div class="format-detail">
          <div class="format-header">
            <h3>{{ currentFormat.name }}</h3>
            <span class="format-ext">{{ currentFormat.ext }}</span>
          </div>
          <p class="format-description">{{ currentFormat.description }}</p>

          <div class="format-features">
            <div class="feature-group">
              <h5>✅ 优点</h5>
              <ul>
                <li v-for="pro in currentFormat.pros" :key="pro">{{ pro }}</li>
              </ul>
            </div>
            <div class="feature-group">
              <h5>❌ 缺点</h5>
              <ul>
                <li v-for="con in currentFormat.cons" :key="con">{{ con }}</li>
              </ul>
            </div>
          </div>

          <div class="format-usage">
            <h5>💡 适用场景</h5>
            <p>{{ currentFormat.usage }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 第三部分：响应式图片 -->
    <section class="content-section">
      <h2>3️⃣ 响应式图片</h2>

      <div class="info-box">
        <p>响应式图片可以根据设备屏幕大小加载不同尺寸的图片，优化性能和用户体验。</p>
      </div>

      <div class="concept-cards">
        <div class="concept-card">
          <h4>方法一：srcset 属性</h4>
          <p>为不同屏幕密度提供不同图片</p>
          <div class="code-example">
            <pre>&lt;img
  src="small.jpg"
  srcset="small.jpg 300w,
          medium.jpg 600w,
          large.jpg 1200w"
  sizes="(max-width: 600px) 300px,
         (max-width: 1200px) 600px,
         1200px"
  alt="响应式图片"
&gt;</pre>
          </div>
        </div>

        <div class="concept-card">
          <h4>方法二：&lt;picture&gt; 元素</h4>
          <p>根据媒体查询选择不同图片源</p>
          <div class="code-example">
            <pre>&lt;picture&gt;
  &lt;source
    media="(max-width: 600px)"
    srcset="mobile.jpg"
  &gt;
  &lt;source
    media="(max-width: 1200px)"
    srcset="tablet.jpg"
  &gt;
  &lt;img
    src="desktop.jpg"
    alt="响应式图片"
  &gt;
&lt;/picture&gt;</pre>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h4>💡 响应式图片示例</h4>
        <CodeEditor
          initial-html="<h3>响应式图片演示</h3>

<!-- 响应式容器 -->
<div class='responsive-demo'>
  <div class='device-view mobile'>
    📱 移动端视图<br>300x200
  </div>
  <div class='device-view tablet'>
    📱 平板视图<br>600x300
  </div>
  <div class='device-view desktop'>
    🖥️ 桌面视图<br>900x400
  </div>
</div>

<p class='tip'>💡 使用 picture 元素可以根据屏幕大小加载不同图片</p>

<!-- 实际代码示例：
<picture>
  <source media='(max-width: 400px)' srcset='mobile.jpg'>
  <source media='(max-width: 800px)' srcset='tablet.jpg'>
  <img src='desktop.jpg' alt='响应式图片'>
</picture>
-->"
          initial-css="h3 {
  color: #673AB7;
  margin-bottom: 16px;
}
.responsive-demo {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 16px 0;
}
.device-view {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
}
.mobile {
  width: 150px;
  height: 100px;
  background: linear-gradient(135deg, #FF5722 0%, #FF8A65 100%);
}
.tablet {
  width: 250px;
  height: 120px;
  background: linear-gradient(135deg, #2196F3 0%, #64B5F6 100%);
}
.desktop {
  width: 350px;
  height: 140px;
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
}
.tip {
  padding: 12px;
  background: #fff3e0;
  border-left: 4px solid #FF9800;
  color: #e65100;
  margin-top: 16px;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第四部分：音频标签 -->
    <section class="content-section">
      <h2>4️⃣ 音频 &lt;audio&gt;</h2>

      <div class="info-box">
        <p><strong>&lt;audio&gt;</strong> 标签用于在网页中嵌入音频文件。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  &lt;source src="audio.ogg" type="audio/ogg"&gt;
  您的浏览器不支持音频播放。
&lt;/audio&gt;</pre>
      </div>

      <div class="attribute-grid">
        <div class="attr-item">
          <code>controls</code>
          <p>显示播放控件（播放、暂停、音量等）</p>
        </div>
        <div class="attr-item">
          <code>autoplay</code>
          <p>自动播放（需谨慎使用）</p>
        </div>
        <div class="attr-item">
          <code>loop</code>
          <p>循环播放</p>
        </div>
        <div class="attr-item">
          <code>muted</code>
          <p>静音播放</p>
        </div>
        <div class="attr-item">
          <code>preload</code>
          <p>预加载策略（none/metadata/auto）</p>
        </div>
      </div>

      <div class="demo-section">
        <h4>💡 音频播放器示例</h4>
        <CodeEditor
          initial-html="<h3>音频播放器</h3>

<div class='audio-player'>
  <h4>🎵 音频控件演示</h4>
  <audio controls>
    <source src='https://www.w3schools.com/html/horse.mp3' type='audio/mpeg'>
    <source src='https://www.w3schools.com/html/horse.ogg' type='audio/ogg'>
    您的浏览器不支持音频播放。
  </audio>
  <p class='audio-info'>完整的音频播放控件</p>
</div>

<div class='audio-player'>
  <h4>🎤 循环播放示例</h4>
  <audio controls loop>
    <source src='https://actions.google.com/sounds/v1/alarms/beep_short.ogg' type='audio/ogg'>
    您的浏览器不支持音频播放。
  </audio>
  <p class='audio-info'>短音频循环播放演示</p>
</div>

<!-- 实际使用代码：
<audio controls>
  <source src='your-audio.mp3' type='audio/mpeg'>
  <source src='your-audio.ogg' type='audio/ogg'>
  您的浏览器不支持音频播放。
</audio>
-->"
          initial-css="h3 {
  color: #E91E63;
  margin-bottom: 20px;
}
.audio-player {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  margin: 16px 0;
}
.audio-player h4 {
  color: white;
  margin: 0 0 12px 0;
  font-size: 16px;
}
audio {
  width: 100%;
  margin: 12px 0;
  border-radius: 8px;
}
.audio-info {
  color: rgba(255,255,255,0.9);
  font-size: 13px;
  margin: 8px 0 0 0;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第五部分：视频标签 -->
    <section class="content-section">
      <h2>5️⃣ 视频 &lt;video&gt;</h2>

      <div class="info-box">
        <p><strong>&lt;video&gt;</strong> 标签用于在网页中嵌入视频文件。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;video width="640" height="360" controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  您的浏览器不支持视频播放。
&lt;/video&gt;</pre>
      </div>

      <div class="attribute-grid">
        <div class="attr-item">
          <code>controls</code>
          <p>显示播放控件</p>
        </div>
        <div class="attr-item">
          <code>poster</code>
          <p>视频封面图片</p>
        </div>
        <div class="attr-item">
          <code>autoplay</code>
          <p>自动播放</p>
        </div>
        <div class="attr-item">
          <code>loop</code>
          <p>循环播放</p>
        </div>
        <div class="attr-item">
          <code>muted</code>
          <p>静音</p>
        </div>
        <div class="attr-item">
          <code>width/height</code>
          <p>视频尺寸</p>
        </div>
      </div>

      <div class="demo-section">
        <h4>💡 视频播放器示例</h4>
        <CodeEditor
          initial-html="<h3>视频播放器</h3>

<div class='video-container'>
  <video
    width='100%'
    controls
    preload='metadata'
  >
    <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4'>
    您的浏览器不支持视频播放。
  </video>
  <div class='video-info'>
    <h4>🎬 Big Buck Bunny</h4>
    <p>开源短片 - 视频播放演示</p>
  </div>
</div>

<!-- 实际使用代码：
<video width='640' height='360' controls>
  <source src='your-video.mp4' type='video/mp4'>
  <source src='your-video.webm' type='video/webm'>
  您的浏览器不支持视频播放。
</video>
-->"
          initial-css="h3 {
  color: #3F51B5;
  margin-bottom: 20px;
}
.video-container {
  max-width: 800px;
  margin: 20px auto;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
video {
  display: block;
  width: 100%;
  height: auto;
  background: #000;
}
.video-info {
  padding: 20px;
  background: #f5f5f5;
}
.video-info h4 {
  margin: 0 0 8px 0;
  color: #333;
}
.video-info p {
  margin: 0;
  color: #666;
  font-size: 14px;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>

      <div class="tip-box">
        <strong>💡 视频格式兼容性：</strong>
        <ul>
          <li><strong>MP4 (H.264)</strong> - 最广泛支持的格式</li>
          <li><strong>WebM (VP8/VP9)</strong> - 开源格式，Chrome/Firefox 支持</li>
          <li><strong>Ogg (Theora)</strong> - 开源格式，Firefox 支持</li>
        </ul>
        <p>建议提供多种格式以确保兼容性！</p>
      </div>
    </section>

    <!-- 第六部分：iframe 嵌入 -->
    <section class="content-section">
      <h2>6️⃣ iframe 嵌入外部内容</h2>

      <div class="info-box">
        <p><strong>&lt;iframe&gt;</strong> 标签用于在网页中嵌入另一个 HTML 页面或外部内容（如 YouTube 视频、地图等）。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;iframe
  src="外部网页地址"
  width="800"
  height="600"
  title="页面描述"
  frameborder="0"
&gt;
&lt;/iframe&gt;</pre>
      </div>

      <div class="demo-section">
        <h4>💡 iframe 嵌入示例</h4>
        <CodeEditor
          initial-html="<h3>iframe 嵌入 Bilibili 视频</h3>

<div class='iframe-container'>
  <iframe
    src='//player.bilibili.com/player.html?bvid=BV1uT4y1P7CX&page=1&high_quality=1'
    scrolling='no'
    border='0'
    frameborder='no'
    framespacing='0'
    allowfullscreen='true'
  >
  </iframe>
</div>

<p class='note'>📺 Bilibili 视频嵌入示例（Vue3 教程）</p>

<!-- 其他常用嵌入示例：

1. 嵌入网页：
<iframe src='https://www.example.com' width='800' height='600'></iframe>

2. 嵌入 YouTube（需科学上网）：
<iframe src='https://www.youtube.com/embed/视频ID'></iframe>

3. 嵌入地图：
<iframe src='地图嵌入链接'></iframe>
-->"
          initial-css="h3 {
  color: #F44336;
  margin-bottom: 20px;
}
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 比例 */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  background: #000;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.note {
  margin-top: 16px;
  padding: 12px;
  background: #e3f2fd;
  border-left: 4px solid #2196F3;
  color: #1565c0;
  font-size: 14px;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>

      <div class="warning-box">
        <strong>⚠️ 安全提示：</strong>
        <ul>
          <li>只嵌入来自可信来源的内容</li>
          <li>使用 <code>sandbox</code> 属性限制 iframe 权限</li>
          <li>考虑使用 <code>loading="lazy"</code> 延迟加载</li>
        </ul>
      </div>
    </section>

    <!-- 第七部分：图标和 Emoji -->
    <section class="content-section">
      <h2>7️⃣ 图标和 Emoji</h2>

      <div class="info-box">
        <p>除了传统图片，我们还可以使用 Emoji、图标字体和 SVG 来美化网页。</p>
      </div>

      <div class="demo-section">
        <h4>💡 多种图标方案</h4>
        <CodeEditor
          initial-html="<h3>图标展示</h3>

<!-- 方法1：Unicode Emoji -->
<div class='icon-section'>
  <h4>🎨 Unicode Emoji</h4>
  <p class='emoji-line'>
    😀 😃 😄 😁 😆 😅 😂 🤣
  </p>
  <p class='emoji-line'>
    ❤️ 💙 💚 💛 💜 🧡 🖤 🤍
  </p>
  <p class='emoji-line'>
    ⭐ 🌟 ✨ 💫 ⚡ 🔥 💧 🌈
  </p>
</div>

<!-- 方法2：HTML 实体 -->
<div class='icon-section'>
  <h4>📝 HTML 实体</h4>
  <p class='symbol-line'>
    &copy; &reg; &trade; &euro; &pound; &yen;
  </p>
  <p class='symbol-line'>
    &hearts; &spades; &clubs; &diams;
  </p>
  <p class='symbol-line'>
    &larr; &uarr; &rarr; &darr; &harr;
  </p>
</div>

<!-- 方法3：SVG 图标 -->
<div class='icon-section'>
  <h4>🎯 SVG 图标</h4>
  <svg width='40' height='40' viewBox='0 0 24 24' fill='#4CAF50'>
    <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/>
  </svg>
  <svg width='40' height='40' viewBox='0 0 24 24' fill='#2196F3'>
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'/>
  </svg>
  <svg width='40' height='40' viewBox='0 0 24 24' fill='#FF9800'>
    <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/>
  </svg>
</div>"
          initial-css="h3 {
  color: #9C27B0;
  margin-bottom: 20px;
}
.icon-section {
  padding: 24px;
  background: white;
  border-radius: 12px;
  margin: 16px 0;
  border: 2px solid #eee;
}
.icon-section h4 {
  margin: 0 0 16px 0;
  color: #555;
}
.emoji-line {
  font-size: 32px;
  margin: 12px 0;
  text-align: center;
}
.symbol-line {
  font-size: 28px;
  margin: 12px 0;
  text-align: center;
  color: #666;
}
svg {
  margin: 0 8px;
  transition: transform 0.3s;
}
svg:hover {
  transform: scale(1.2);
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
        <h3>练习任务：创建个人作品集页面</h3>
        <p>请创建一个展示个人作品的页面，要求包含：</p>
        <ul>
          <li>使用 <code>&lt;img&gt;</code> 展示至少 3 张作品图片</li>
          <li>添加图片悬停效果（使用 CSS transform）</li>
          <li>嵌入一个介绍视频（可以使用占位符）</li>
          <li>使用 Emoji 美化标题和文本</li>
          <li>确保所有图片都有 <code>alt</code> 属性</li>
        </ul>

        <div class="practice-editor">
          <CodeEditor
            initial-html="<!-- 在这里创建你的作品集页面 -->
<div class='portfolio'>
  <h1>✨ 我的作品集</h1>
  <p class='subtitle'>展示我最优秀的设计作品</p>

  <!-- 作品画廊 -->
  <div class='gallery'>
    <div class='work-item'>
      <div class='work-img design'>🎨</div>
      <div class='work-content'>
        <h3>网页设计作品</h3>
        <p>响应式电商网站设计，采用现代简约风格</p>
        <div class='work-tags'>
          <span>UI设计</span>
          <span>网页</span>
        </div>
      </div>
    </div>

    <div class='work-item'>
      <div class='work-img photo'>📸</div>
      <div class='work-content'>
        <h3>摄影作品</h3>
        <p>城市夜景系列摄影，捕捉都市繁华瞬间</p>
        <div class='work-tags'>
          <span>摄影</span>
          <span>风光</span>
        </div>
      </div>
    </div>

    <div class='work-item'>
      <div class='work-img illustration'>🖼️</div>
      <div class='work-content'>
        <h3>插画作品</h3>
        <p>手绘数字插画，展现独特的艺术风格</p>
        <div class='work-tags'>
          <span>插画</span>
          <span>手绘</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 介绍视频区域 -->
  <div class='video-section'>
    <h2>🎬 作品介绍视频</h2>
    <div class='video-placeholder'>
      <div class='play-button'>▶</div>
      <p>点击播放介绍视频</p>
    </div>
  </div>

  <!-- 联系方式 -->
  <div class='contact'>
    <h2>📧 联系我</h2>
    <p>如果您对我的作品感兴趣，欢迎联系我！</p>
  </div>
</div>

<!-- 💡 这是一个完整的作品集示例，尝试修改内容创建你自己的作品集！ -->"
            initial-css="* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}
.portfolio {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}
h1 {
  text-align: center;
  color: #333;
  font-size: 48px;
  margin-bottom: 8px;
}
.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 48px;
  font-size: 18px;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}
.work-item {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s;
}
.work-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
.work-img {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
}
.design {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.photo {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
.illustration {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
.work-content {
  padding: 20px;
}
.work-content h3 {
  color: #333;
  margin-bottom: 8px;
}
.work-content p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 12px;
}
.work-tags {
  display: flex;
  gap: 8px;
}
.work-tags span {
  padding: 4px 12px;
  background: #f0f0f0;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
}
.video-section {
  background: white;
  padding: 40px;
  border-radius: 16px;
  margin-bottom: 32px;
  text-align: center;
}
.video-section h2 {
  color: #333;
  margin-bottom: 24px;
}
.video-placeholder {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: transform 0.3s;
}
.video-placeholder:hover {
  transform: scale(1.02);
}
.play-button {
  width: 80px;
  height: 80px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 16px;
}
.contact {
  background: white;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
}
.contact h2 {
  color: #333;
  margin-bottom: 16px;
}
.contact p {
  color: #666;
  font-size: 16px;
}"
            :tabs="['html', 'css']"
            :auto-run="false"
          />
        </div>

        <div class="tip-box" style="margin-top: 20px;">
          <strong>💡 练习提示：</strong>
          <ul>
            <li>上面提供了一个完整的作品集页面示例</li>
            <li>尝试修改作品内容和描述，创建你自己的作品集</li>
            <li>可以添加更多作品卡片，展示更多内容</li>
            <li>在实际项目中，可以替换为真实的图片和视频</li>
            <li>尝试添加悬停效果和过渡动画</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 知识总结 -->
    <section class="content-section summary-section">
      <h2>📚 知识总结</h2>

      <div class="summary-grid">
        <div class="summary-card">
          <h4>🖼️ 图片标签</h4>
          <ul>
            <li><code>&lt;img&gt;</code> - 嵌入图片</li>
            <li><code>src</code> - 图片路径（必需）</li>
            <li><code>alt</code> - 替代文本（必需）</li>
            <li><code>width/height</code> - 尺寸</li>
            <li><code>srcset</code> - 响应式图片</li>
            <li><code>&lt;picture&gt;</code> - 多源图片</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>🎵 音频视频</h4>
          <ul>
            <li><code>&lt;audio&gt;</code> - 音频播放</li>
            <li><code>&lt;video&gt;</code> - 视频播放</li>
            <li><code>&lt;source&gt;</code> - 媒体源</li>
            <li><code>controls</code> - 显示控件</li>
            <li><code>autoplay</code> - 自动播放</li>
            <li><code>loop</code> - 循环播放</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>📊 图片格式</h4>
          <ul>
            <li><strong>JPG</strong> - 照片，有损压缩</li>
            <li><strong>PNG</strong> - 透明图，无损压缩</li>
            <li><strong>GIF</strong> - 动画，256色</li>
            <li><strong>WebP</strong> - 现代格式，体积小</li>
            <li><strong>SVG</strong> - 矢量图，可缩放</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>💡 最佳实践</h4>
          <ul>
            <li>始终添加 alt 属性</li>
            <li>优化图片大小和格式</li>
            <li>使用响应式图片技术</li>
            <li>考虑延迟加载（lazy loading）</li>
            <li>提供多种媒体格式</li>
            <li>注意版权和授权</li>
          </ul>
        </div>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'

// 图片格式选择器
const selectedFormat = ref('JPG')

const imageFormats = [
  { name: 'JPG' },
  { name: 'PNG' },
  { name: 'GIF' },
  { name: 'WebP' },
  { name: 'SVG' }
]

const formatDetails = {
  'JPG': {
    name: 'JPG / JPEG',
    ext: '.jpg / .jpeg',
    description: 'Joint Photographic Experts Group - 最常用的有损压缩图片格式',
    pros: [
      '文件体积小，适合网络传输',
      '支持数百万种颜色',
      '几乎所有设备和浏览器都支持',
      '适合存储照片和复杂图像'
    ],
    cons: [
      '有损压缩，每次保存都会损失质量',
      '不支持透明度',
      '不适合文字和图形（会模糊）',
      '不支持动画'
    ],
    usage: '📸 照片、背景图、复杂图像、社交媒体图片'
  },
  'PNG': {
    name: 'PNG',
    ext: '.png',
    description: 'Portable Network Graphics - 支持透明度的无损压缩格式',
    pros: [
      '无损压缩，质量不会降低',
      '支持透明度（Alpha通道）',
      '适合文字、图标、截图',
      '支持数百万种颜色'
    ],
    cons: [
      '文件体积较大',
      '不适合存储照片（体积过大）',
      '不支持动画',
      '压缩效率不如 WebP'
    ],
    usage: '🎨 Logo、图标、需要透明背景的图片、截图、设计稿'
  },
  'GIF': {
    name: 'GIF',
    ext: '.gif',
    description: 'Graphics Interchange Format - 支持动画的图片格式',
    pros: [
      '支持动画效果',
      '文件体积小',
      '广泛支持',
      '可以设置透明色'
    ],
    cons: [
      '只支持 256 种颜色',
      '不适合照片（颜色太少）',
      '动画文件体积会很大',
      '压缩算法较老'
    ],
    usage: '🎬 简单动画、表情包、Loading 动画、低色彩图标'
  },
  'WebP': {
    name: 'WebP',
    ext: '.webp',
    description: 'Google 开发的现代图片格式，兼具质量和体积优势',
    pros: [
      '比 JPG/PNG 体积小 25-35%',
      '支持有损和无损压缩',
      '支持透明度',
      '支持动画'
    ],
    cons: [
      '旧版浏览器不支持（需要降级方案）',
      '编辑工具支持较少',
      '转换需要额外工具'
    ],
    usage: '🚀 现代网站首选格式、需要高性能的场景、移动端优化'
  },
  'SVG': {
    name: 'SVG',
    ext: '.svg',
    description: 'Scalable Vector Graphics - 可缩放的矢量图形格式',
    pros: [
      '无限缩放不失真',
      '文件体积极小（简单图形）',
      '可以用代码编辑和动画',
      '支持透明度'
    ],
    cons: [
      '不适合复杂图像和照片',
      '复杂 SVG 文件可能很大',
      '渲染性能取决于复杂度'
    ],
    usage: '🎯 Logo、图标、插图、图表、地图、简单图形'
  }
}

const currentFormat = computed(() => formatDetails[selectedFormat.value])
</script>

<style scoped>
/* 属性卡片 */
.attribute-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.attr-card {
  padding: 20px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  transition: all 0.3s;
}

.attr-card.required {
  border-color: #FF5722;
  background: linear-gradient(135deg, #fff5f5 0%, #ffffff 100%);
}

.attr-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.attr-name {
  font-family: 'Consolas', monospace;
  font-size: 16px;
  font-weight: bold;
  color: #2196F3;
  margin-bottom: 8px;
}

.attr-badge {
  display: inline-block;
  padding: 4px 12px;
  background: #FF5722;
  color: white;
  border-radius: 12px;
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 12px;
}

.attr-card:not(.required) .attr-badge {
  background: #9E9E9E;
}

.attr-desc {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 12px;
}

.attr-card code {
  display: block;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 12px;
  color: #e91e63;
}

/* 格式选择器 */
.format-selector {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.format-btn {
  padding: 10px 24px;
  background: white;
  border: 2px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s;
}

.format-btn:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
}

.format-btn.active {
  background: var(--primary-blue);
  color: white;
  border-color: var(--primary-blue);
}

.format-detail {
  padding: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  margin-top: 24px;
}

.format-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.format-header h3 {
  margin: 0;
  font-size: 28px;
}

.format-ext {
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 14px;
  font-family: 'Consolas', monospace;
}

.format-description {
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.95;
  margin-bottom: 24px;
}

.format-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 24px 0;
}

.feature-group h5 {
  margin: 0 0 12px 0;
  font-size: 18px;
}

.feature-group ul {
  margin: 0;
  padding-left: 20px;
}

.feature-group li {
  margin: 8px 0;
  line-height: 1.6;
  font-size: 14px;
}

.format-usage {
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  margin-top: 20px;
}

.format-usage h5 {
  margin: 0 0 12px 0;
  font-size: 16px;
}

.format-usage p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
}

/* 概念卡片 */
.concept-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.concept-card {
  padding: 24px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 12px;
}

.concept-card h4 {
  margin: 0 0 12px 0;
  font-size: 18px;
}

.concept-card p {
  margin: 8px 0 16px 0;
  opacity: 0.9;
  font-size: 14px;
}

.code-example pre {
  margin: 0;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

/* 属性网格 */
.attribute-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.attr-item {
  padding: 16px;
  background: #f8f9fa;
  border-left: 4px solid var(--primary-blue);
  border-radius: 6px;
}

.attr-item code {
  display: block;
  margin-bottom: 8px;
  color: #e91e63;
  font-weight: 600;
  font-size: 14px;
}

.attr-item p {
  margin: 0;
  color: #666;
  font-size: 13px;
  line-height: 1.5;
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
  .format-features {
    grid-template-columns: 1fr;
  }

  .concept-cards {
    grid-template-columns: 1fr;
  }

  .attribute-grid {
    grid-template-columns: 1fr;
  }
}
</style>
