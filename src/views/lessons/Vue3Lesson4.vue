<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第57课：条件渲染</h1>
      <p class="lesson-subtitle">深入掌握 v-if 和 v-show 的使用场景、性能优化和最佳实践</p>
    </div>

    <div class="lesson-content">
      <!-- v-if 条件渲染 -->
      <section class="content-section">
        <h2>v-if 条件渲染</h2>
        <p><code>v-if</code> 指令用于条件性地渲染元素。当条件为真时，元素会被渲染；为假时，元素<strong>不会渲染到 DOM 中</strong>。</p>

        <div class="info-box">
          <h3>基础语法</h3>
          <pre v-pre><code>&lt;div v-if="condition"&gt;条件为真时显示&lt;/div&gt;
&lt;div v-else-if="otherCondition"&gt;另一个条件为真时显示&lt;/div&gt;
&lt;div v-else&gt;所有条件都为假时显示&lt;/div&gt;</code></pre>
        </div>

        <h3>基础示例</h3>
        <CodeEditor
          :initial-html="vifBasicHTML"
          :initial-css="''"
          :initial-js="''"
          :auto-run="true"
        />

        <div class="tip-box">
          <strong>💡 重要特性：</strong>
          <ul>
            <li>v-if 是"真实的"条件渲染 - 元素在条件为假时<strong>不存在于 DOM 中</strong></li>
            <li>v-else-if 和 v-else 必须<strong>紧跟</strong>在 v-if 或 v-else-if 元素后面</li>
            <li>切换时会<strong>销毁和重建</strong>元素及其内部组件</li>
          </ul>
        </div>
      </section>

      <!-- template 上的 v-if -->
      <section class="content-section">
        <h2>在 template 上使用 v-if</h2>
        <p>当需要切换多个元素时，可以在 <code>&lt;template&gt;</code> 元素上使用 v-if。<code>&lt;template&gt;</code> 不会被渲染到 DOM 中，只起到分组作用。</p>

        <CodeEditor
          :initial-html="vifTemplateHTML"
          :initial-css="''"
          :initial-js="''"
          :auto-run="true"
        />

        <div class="highlight-box">
          <h3>✨ 使用 template 的优势</h3>
          <ul>
            <li>可以一次性控制<strong>多个元素</strong>的显示/隐藏</li>
            <li><code>&lt;template&gt;</code> 不会渲染额外的 DOM 元素</li>
            <li>保持 DOM 结构清晰，避免不必要的包裹元素</li>
          </ul>
        </div>
      </section>

      <!-- v-show -->
      <section class="content-section">
        <h2>v-show 切换显示</h2>
        <p><code>v-show</code> 用于切换元素的显示状态。与 v-if 不同，v-show 的元素<strong>始终存在于 DOM 中</strong>，只是通过 CSS <code>display</code> 属性来控制显示/隐藏。</p>

        <div class="info-box">
          <h3>v-show 的特点</h3>
          <ul>
            <li>元素始终会被渲染，只是简单地切换 CSS <code>display</code> 属性</li>
            <li>不支持 <code>&lt;template&gt;</code> 元素</li>
            <li>不支持 <code>v-else</code></li>
          </ul>
        </div>

        <CodeEditor
          :initial-html="vshowHTML"
          :initial-css="''"
          :initial-js="''"
          :auto-run="true"
        />
      </section>

      <!-- v-if vs v-show 对比 -->
      <section class="content-section">
        <h2>v-if vs v-show 性能对比</h2>
        <p>选择使用 v-if 还是 v-show，取决于具体的使用场景。理解它们的差异对于性能优化至关重要。</p>

        <div class="comparison-grid">
          <div class="comparison-card if-card">
            <h3>v-if</h3>
            <div class="feature-item">
              <strong>渲染方式：</strong>
              <p>条件为假时，元素<strong>不会渲染</strong>到 DOM</p>
            </div>
            <div class="feature-item">
              <strong>切换开销：</strong>
              <p><span class="high">高</span> - 需要销毁和重建 DOM</p>
            </div>
            <div class="feature-item">
              <strong>初始渲染：</strong>
              <p><span class="low">低</span> - 条件为假时不渲染</p>
            </div>
            <div class="feature-item">
              <strong>适用场景：</strong>
              <p>条件<strong>很少改变</strong>的情况</p>
            </div>
            <div class="feature-item">
              <strong>特殊能力：</strong>
              <p>支持 v-else、v-else-if、<code>&lt;template&gt;</code></p>
            </div>
          </div>

          <div class="comparison-card show-card">
            <h3>v-show</h3>
            <div class="feature-item">
              <strong>渲染方式：</strong>
              <p>元素<strong>始终渲染</strong>，通过 CSS display 切换</p>
            </div>
            <div class="feature-item">
              <strong>切换开销：</strong>
              <p><span class="low">低</span> - 只需修改 CSS 属性</p>
            </div>
            <div class="feature-item">
              <strong>初始渲染：</strong>
              <p><span class="high">高</span> - 总是渲染，即使不显示</p>
            </div>
            <div class="feature-item">
              <strong>适用场景：</strong>
              <p>需要<strong>频繁切换</strong>的情况</p>
            </div>
            <div class="feature-item">
              <strong>特殊能力：</strong>
              <p>无额外功能，简单直接</p>
            </div>
          </div>
        </div>

        <h3>🎯 性能对比演示</h3>
        <p>点击下方按钮体验两种方式的性能差异：</p>

        <div class="perf-demo">
          <div class="demo-controls">
            <button @click="toggleIfContent" class="ctrl-button">
              切换 v-if 内容 ({{ showIfContent ? '显示' : '隐藏' }})
            </button>
            <button @click="toggleShowContent" class="ctrl-button">
              切换 v-show 内容 ({{ showShowContent ? '显示' : '隐藏' }})
            </button>
          </div>

          <div class="demo-results">
            <div class="demo-box">
              <h4>使用 v-if</h4>
              <div v-if="showIfContent" class="content-block">
                <p>这个内容块使用 v-if 控制</p>
                <p>切换时会完全销毁和重建 DOM</p>
                <p>打开开发者工具的 Elements 面板</p>
                <p>观察这个元素在切换时的变化</p>
              </div>
              <div v-else class="placeholder">
                内容已隐藏 (DOM 中不存在)
              </div>
            </div>

            <div class="demo-box">
              <h4>使用 v-show</h4>
              <div v-show="showShowContent" class="content-block">
                <p>这个内容块使用 v-show 控制</p>
                <p>切换时只修改 display 属性</p>
                <p>打开开发者工具的 Elements 面板</p>
                <p>观察这个元素始终存在于 DOM 中</p>
              </div>
              <div v-show="!showShowContent" class="placeholder">
                内容已隐藏 (但 DOM 中仍存在)
              </div>
            </div>
          </div>
        </div>

        <div class="decision-box">
          <h3>🤔 如何选择？</h3>
          <table class="decision-table">
            <thead>
              <tr>
                <th>场景</th>
                <th>推荐使用</th>
                <th>原因</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>选项卡切换</td>
                <td><strong>v-show</strong></td>
                <td>频繁切换，切换成本低</td>
              </tr>
              <tr>
                <td>模态框/对话框</td>
                <td><strong>v-show</strong></td>
                <td>可能频繁打开关闭</td>
              </tr>
              <tr>
                <td>权限控制</td>
                <td><strong>v-if</strong></td>
                <td>条件很少改变，节省初始渲染</td>
              </tr>
              <tr>
                <td>大型组件懒加载</td>
                <td><strong>v-if</strong></td>
                <td>避免初始化不需要的组件</td>
              </tr>
              <tr>
                <td>下拉菜单</td>
                <td><strong>v-show</strong></td>
                <td>需要快速响应，频繁交互</td>
              </tr>
              <tr>
                <td>复杂表单分步</td>
                <td><strong>v-if</strong></td>
                <td>每步只渲染当前需要的内容</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 综合实战 -->
      <section class="content-section">
        <h2>🎯 综合实战：多功能面板</h2>
        <p>结合 v-if 和 v-show 创建一个功能丰富的应用面板：</p>

        <CodeEditor
          :initial-html="appPanelHTML"
          :initial-css="''"
          :initial-js="''"
          :auto-run="true"
        />

        <div class="highlight-box">
          <h3>📌 这个例子展示了：</h3>
          <ul>
            <li>✅ 使用 <strong>v-if</strong> 控制登录状态相关的大块内容（权限控制）</li>
            <li>✅ 使用 <strong>v-if</strong> 控制登录表单的显示（偶尔使用）</li>
            <li>✅ 使用 <strong>v-show</strong> 实现选项卡切换（频繁切换）</li>
            <li>✅ 使用 <strong>template</strong> 分组多个相关元素</li>
            <li>✅ 根据实际场景合理选择 v-if 和 v-show</li>
          </ul>
        </div>
      </section>

      <!-- 总结 -->
      <section class="content-section">
        <h2>📚 本课总结</h2>
        <div class="summary-box">
          <h3>v-if 指令</h3>
          <ul>
            <li>"真实的"条件渲染，条件为假时元素不存在于 DOM 中</li>
            <li>支持 v-else-if 和 v-else 配合使用</li>
            <li>可以在 <code>&lt;template&gt;</code> 上使用，实现多元素分组</li>
            <li>切换时会触发组件的生命周期钩子</li>
            <li>适用于条件很少改变的场景</li>
          </ul>

          <h3>v-show 指令</h3>
          <ul>
            <li>通过 CSS display 属性控制显示/隐藏</li>
            <li>元素始终会被渲染到 DOM 中</li>
            <li>不支持 <code>&lt;template&gt;</code> 和 v-else</li>
            <li>切换开销很小，适合频繁切换</li>
            <li>初始渲染开销较大</li>
          </ul>

          <h3>性能优化原则</h3>
          <ul>
            <li><strong>频繁切换</strong>的内容 → 使用 v-show（如选项卡、下拉菜单）</li>
            <li><strong>条件很少改变</strong> → 使用 v-if（如权限控制、懒加载）</li>
            <li><strong>初始条件为假</strong>且很少为真 → 使用 v-if 避免不必要的渲染</li>
            <li><strong>需要配合 v-else</strong> → 只能使用 v-if</li>
            <li>需要<strong>控制多个元素</strong> → 使用 v-if + <code>&lt;template&gt;</code></li>
          </ul>

          <h3>最佳实践</h3>
          <ul>
            <li>优先考虑业务逻辑，再考虑性能优化</li>
            <li>避免在同一元素上同时使用 v-if 和 v-for</li>
            <li>大型组件使用 v-if 实现懒加载</li>
            <li>简单的显示/隐藏优先使用 v-show</li>
          </ul>
        </div>
      </section>

      <!-- 下一课预告 -->
      <div class="next-lesson">
        <h3>下一课预告</h3>
        <p>第58课：列表渲染 - 学习 v-for 指令和 key 属性的重要性</p>
        <router-link to="/lessons/vue3/lesson-5" class="next-button">
          前往下一课 →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeEditor from '../../components/CodeEditor.vue'

// 性能对比演示
const showIfContent = ref(true)
const showShowContent = ref(true)

const toggleIfContent = () => {
  showIfContent.value = !showIfContent.value
}

const toggleShowContent = () => {
  showShowContent.value = !showShowContent.value
}

// 提取的HTML字符串常量
const vifBasicHTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>v-if 基础示例</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
  <style>
    body { font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px; }
    .score-input { width: 100%; padding: 15px; font-size: 18px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 20px; }
    .result { padding: 30px; border-radius: 12px; text-align: center; font-size: 24px; font-weight: bold; color: white; animation: fadeIn 0.3s; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    .excellent { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    .good { background: linear-gradient(135deg, #42b983 0%, #2c7a5f 100%); }
    .pass { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }
    .fail { background: linear-gradient(135deg, #ff4757 0%, #e84118 100%); }
    .icon { font-size: 48px; margin-bottom: 10px; }
  </style>
</head>
<body>
  <div id="app">
    <h1>成绩评级系统</h1>
    <input v-model.number="score" type="number" class="score-input" placeholder="输入分数 (0-100)" min="0" max="100" />
    <div v-if="score >= 90" class="result excellent">
      <div class="icon">🏆</div>
      <div>优秀 ({{ score }}分)</div>
      <p style="font-size: 16px; margin-top: 10px; opacity: 0.9;">太棒了！继续保持！</p>
    </div>
    <div v-else-if="score >= 75" class="result good">
      <div class="icon">😊</div>
      <div>良好 ({{ score }}分)</div>
      <p style="font-size: 16px; margin-top: 10px; opacity: 0.9;">不错的成绩，再接再厉！</p>
    </div>
    <div v-else-if="score >= 60" class="result pass">
      <div class="icon">😐</div>
      <div>及格 ({{ score }}分)</div>
      <p style="font-size: 16px; margin-top: 10px; opacity: 0.9;">刚好及格，还有提升空间</p>
    </div>
    <div v-else-if="score >= 0" class="result fail">
      <div class="icon">😢</div>
      <div>不及格 ({{ score }}分)</div>
      <p style="font-size: 16px; margin-top: 10px; opacity: 0.9;">加油！下次一定能考好</p>
    </div>
    <div v-else style="text-align: center; padding: 30px; color: #999;">请输入有效的分数 (0-100)</div>
  </div>
  <script>
    const { createApp, ref } = Vue;
    createApp({ setup() { const score = ref(85); return { score }; } }).mount("#app");
  <\/script>
</body>
</html>`

const vifTemplateHTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>template 分组示例</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
  <style>
    body { font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px; }
    .card { background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 30px; margin-bottom: 20px; }
    .avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; font-size: 36px; margin: 0 auto 20px; }
    .info-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
    .label { font-weight: bold; color: #666; }
    .value { color: #333; }
    button { width: 100%; padding: 12px; background: #42b983; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; margin-top: 20px; }
    .guest-message { text-align: center; padding: 40px; color: #999; }
  </style>
</head>
<body>
  <div id="app">
    <h1>用户信息面板</h1>
    <div class="card">
      <template v-if="isLoggedIn">
        <div class="avatar">👤</div>
        <h2 style="text-align: center; margin: 0 0 20px;">{{ user.name }}</h2>
        <div class="info-row"><span class="label">邮箱：</span><span class="value">{{ user.email }}</span></div>
        <div class="info-row"><span class="label">等级：</span><span class="value">{{ user.level }}</span></div>
        <div class="info-row"><span class="label">积分：</span><span class="value">{{ user.points }}</span></div>
        <button @click="isLoggedIn = false">退出登录</button>
      </template>
      <template v-else>
        <div class="guest-message">
          <div style="font-size: 64px; margin-bottom: 20px;">🔒</div>
          <h3>尚未登录</h3>
          <p>请先登录以查看个人信息</p>
          <button @click="login">立即登录</button>
        </div>
      </template>
    </div>
  </div>
  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const isLoggedIn = ref(true);
        const user = ref({ name: "张三", email: "zhangsan@example.com", level: "VIP会员", points: 1580 });
        const login = () => { isLoggedIn.value = true; };
        return { isLoggedIn, user, login };
      }
    }).mount("#app");
  <\/script>
</body>
</html>`

const vshowHTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>v-show 示例</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
  <style>
    body { font-family: Arial; max-width: 700px; margin: 50px auto; padding: 20px; }
    .tabs { display: flex; gap: 10px; margin-bottom: 20px; }
    .tab { flex: 1; padding: 15px; background: #f0f0f0; border: none; border-radius: 8px 8px 0 0; cursor: pointer; font-size: 16px; font-weight: bold; color: #666; transition: all 0.3s; }
    .tab.active { background: #42b983; color: white; }
    .tab-content { background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); min-height: 200px; }
    .content-panel h3 { margin-top: 0; color: #333; }
    .content-panel p { line-height: 1.8; color: #666; }
    .feature-list { list-style: none; padding: 0; }
    .feature-list li { padding: 10px 0; border-bottom: 1px solid #eee; }
    .feature-list li:before { content: "✓ "; color: #42b983; font-weight: bold; margin-right: 10px; }
  </style>
</head>
<body>
  <div id="app">
    <h1>产品介绍选项卡</h1>
    <div class="tabs">
      <button class="tab" :class="{ active: activeTab === 'intro' }" @click="activeTab = 'intro'">产品介绍</button>
      <button class="tab" :class="{ active: activeTab === 'features' }" @click="activeTab = 'features'">功能特性</button>
      <button class="tab" :class="{ active: activeTab === 'pricing' }" @click="activeTab = 'pricing'">价格方案</button>
    </div>
    <div class="tab-content">
      <div v-show="activeTab === 'intro'" class="content-panel">
        <h3>📱 产品介绍</h3>
        <p>这是一款革命性的产品，专为现代用户设计。我们结合了最新的技术和最优秀的用户体验，为您带来前所未有的使用感受。</p>
        <p>产品采用先进的架构设计，确保高性能、高可靠性和高安全性。无论您是个人用户还是企业客户，都能找到适合的解决方案。</p>
      </div>
      <div v-show="activeTab === 'features'" class="content-panel">
        <h3>⚡ 功能特性</h3>
        <ul class="feature-list">
          <li>极速响应，毫秒级加载</li>
          <li>智能推荐算法</li>
          <li>多端同步，云端存储</li>
          <li>深色模式支持</li>
          <li>强大的数据分析</li>
          <li>企业级安全保障</li>
        </ul>
      </div>
      <div v-show="activeTab === 'pricing'" class="content-panel">
        <h3>💰 价格方案</h3>
        <p><strong>免费版：</strong>¥0/月 - 基础功能，适合个人用户</p>
        <p><strong>专业版：</strong>¥99/月 - 完整功能，适合专业用户</p>
        <p><strong>企业版：</strong>¥999/月 - 定制服务，适合企业团队</p>
        <p style="margin-top: 20px; color: #42b983;">💡 年付享受8折优惠！</p>
      </div>
    </div>
    <p style="margin-top: 20px; color: #999; text-align: center;">当前选中：{{ activeTab }} (DOM 中始终存在所有内容)</p>
  </div>
  <script>
    const { createApp, ref } = Vue;
    createApp({ setup() { const activeTab = ref("intro"); return { activeTab }; } }).mount("#app");
  <\/script>
</body>
</html>`

const appPanelHTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>多功能应用面板</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial; background: #f5f5f5; padding: 20px; }
    .app-container { max-width: 800px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; display: flex; justify-content: space-between; align-items: center; }
    .user-info { display: flex; align-items: center; gap: 12px; }
    .avatar { width: 40px; height: 40px; border-radius: 50%; background: white; color: #667eea; display: flex; align-items: center; justify-content: center; font-weight: bold; }
    .auth-buttons button { padding: 8px 16px; border: 2px solid white; background: transparent; color: white; border-radius: 6px; cursor: pointer; margin-left: 10px; font-weight: bold; }
    .nav { display: flex; background: #f9f9f9; border-bottom: 2px solid #eee; }
    .nav-item { flex: 1; padding: 15px; text-align: center; background: none; border: none; cursor: pointer; font-size: 14px; font-weight: bold; color: #666; }
    .nav-item.active { background: white; color: #667eea; border-bottom: 3px solid #667eea; }
    .content { padding: 30px; min-height: 300px; }
    .login-form { max-width: 400px; margin: 0 auto; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; margin-bottom: 8px; font-weight: bold; color: #333; }
    .form-group input { width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 6px; font-size: 16px; }
    .btn-primary { width: 100%; padding: 12px; background: #667eea; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; }
    .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
    .stat-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
    .stat-value { font-size: 32px; font-weight: bold; margin-bottom: 5px; }
    .stat-label { font-size: 14px; opacity: 0.9; }
  </style>
</head>
<body>
  <div id="app">
    <div class="app-container">
      <div class="header">
        <h1>💼 应用中心</h1>
        <div v-if="isLoggedIn" class="user-info">
          <div class="avatar">{{ userInitial }}</div>
          <span>{{ username }}</span>
          <button @click="logout" style="padding: 6px 12px; background: rgba(255,255,255,0.2); border: none; color: white; border-radius: 4px; cursor: pointer;">退出</button>
        </div>
        <div v-else class="auth-buttons">
          <button @click="showLogin = true">登录</button>
          <button @click="alert('注册功能开发中')">注册</button>
        </div>
      </div>
      <div v-if="showLogin && !isLoggedIn" style="padding: 30px; background: #f9f9f9;">
        <div class="login-form">
          <h2 style="text-align: center; margin-bottom: 20px;">用户登录</h2>
          <div class="form-group">
            <label>用户名：</label>
            <input v-model="loginForm.username" placeholder="请输入用户名" />
          </div>
          <div class="form-group">
            <label>密码：</label>
            <input v-model="loginForm.password" type="password" placeholder="请输入密码" />
          </div>
          <button @click="login" class="btn-primary">登录</button>
          <button @click="showLogin = false" style="width: 100%; padding: 12px; margin-top: 10px; background: #f0f0f0; border: none; border-radius: 6px; cursor: pointer;">取消</button>
        </div>
      </div>
      <div v-if="isLoggedIn" class="nav">
        <button v-for="tab in tabs" :key="tab.id" class="nav-item" :class="{ active: activeTab === tab.id }" @click="activeTab = tab.id">{{ tab.label }}</button>
      </div>
      <div class="content">
        <div v-if="!isLoggedIn && !showLogin" style="text-align: center; padding: 50px;">
          <div style="font-size: 64px; margin-bottom: 20px;">🔐</div>
          <h2>欢迎使用应用中心</h2>
          <p style="color: #666; margin: 15px 0;">请先登录以访问完整功能</p>
          <button @click="showLogin = true" class="btn-primary" style="max-width: 200px; margin: 0 auto;">立即登录</button>
        </div>
        <template v-if="isLoggedIn">
          <div v-show="activeTab === 'home'">
            <h2>📊 数据概览</h2>
            <div class="stats">
              <div class="stat-card"><div class="stat-value">1,234</div><div class="stat-label">总访问</div></div>
              <div class="stat-card"><div class="stat-value">567</div><div class="stat-label">今日访问</div></div>
              <div class="stat-card"><div class="stat-value">89</div><div class="stat-label">活跃用户</div></div>
            </div>
          </div>
          <div v-show="activeTab === 'features'"><h2>⚡ 功能列表</h2><p>功能内容...</p></div>
          <div v-show="activeTab === 'settings'"><h2>⚙️ 系统设置</h2><p>设置内容...</p></div>
        </template>
      </div>
    </div>
  </div>
  <script>
    const { createApp, ref, computed } = Vue;
    createApp({
      setup() {
        const isLoggedIn = ref(false);
        const showLogin = ref(false);
        const username = ref("张三");
        const activeTab = ref("home");
        const loginForm = ref({ username: "", password: "" });
        const tabs = [{ id: "home", label: "首页" }, { id: "features", label: "功能" }, { id: "settings", label: "设置" }];
        const userInitial = computed(() => username.value.charAt(0).toUpperCase());
        const login = () => {
          if (loginForm.value.username && loginForm.value.password) {
            username.value = loginForm.value.username;
            isLoggedIn.value = true;
            showLogin.value = false;
            loginForm.value = { username: "", password: "" };
          } else { alert("请输入用户名和密码"); }
        };
        const logout = () => { isLoggedIn.value = false; activeTab.value = "home"; };
        return { isLoggedIn, showLogin, username, activeTab, loginForm, tabs, userInitial, login, logout };
      }
    }).mount("#app");
  <\/script>
</body>
</html>`
</script>

<style scoped>
.lesson-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.lesson-header {
  margin-bottom: 32px;
}

.lesson-header h1 {
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}

.lesson-subtitle {
  font-size: 18px;
  color: #5d6d7e;
  line-height: 1.6;
}

.lesson-content {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.content-section {
  margin-bottom: 48px;
}

.content-section h2 {
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 3px solid #42b983;
}

.content-section h3 {
  font-size: 20px;
  font-weight: 600;
  color: #34495e;
  margin: 24px 0 12px;
}

.content-section p {
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 16px;
}

code {
  background: #f6f8fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9em;
  color: #e83e8c;
}

.info-box {
  background: #f0f9ff;
  border-left: 4px solid #3b82f6;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
}

.info-box h3 {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 12px;
  color: #1e40af;
}

.info-box pre {
  background: #1f2937;
  color: #f9fafb;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  margin: 12px 0 0;
}

.info-box code {
  background: none;
  color: inherit;
  padding: 0;
}

.info-box ul {
  margin: 8px 0 0;
  padding-left: 24px;
}

.info-box li {
  margin: 6px 0;
  line-height: 1.6;
}

.tip-box {
  background: #f0fdf4;
  border-left: 4px solid #22c55e;
  padding: 16px;
  margin: 20px 0;
  border-radius: 4px;
  color: #166534;
}

.tip-box ul {
  margin: 12px 0 0;
  padding-left: 24px;
}

.tip-box li {
  margin: 6px 0;
  line-height: 1.6;
}

.highlight-box {
  background: #fef3c7;
  padding: 24px;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
  margin: 24px 0;
}

.highlight-box h3 {
  margin-top: 0;
  color: #92400e;
}

.highlight-box ul {
  margin: 12px 0 0;
  padding-left: 24px;
}

.highlight-box li {
  margin: 8px 0;
  line-height: 1.6;
  color: #78350f;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 24px 0;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
}

.comparison-card {
  padding: 24px;
  border-radius: 12px;
  border: 2px solid;
}

.if-card {
  background: #fef3c7;
  border-color: #f59e0b;
}

.show-card {
  background: #f0f9ff;
  border-color: #3b82f6;
}

.comparison-card h3 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 22px;
}

.feature-item {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.feature-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.feature-item strong {
  display: block;
  margin-bottom: 6px;
  color: #1f2937;
}

.feature-item p {
  margin: 0;
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
}

.high {
  color: #dc2626;
  font-weight: bold;
}

.low {
  color: #22c55e;
  font-weight: bold;
}

.perf-demo {
  background: #f9fafb;
  padding: 24px;
  border-radius: 8px;
  margin: 24px 0;
}

.demo-controls {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .demo-controls {
    flex-direction: column;
  }
}

.ctrl-button {
  flex: 1;
  padding: 12px 24px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.ctrl-button:hover {
  background: #359268;
}

.demo-results {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .demo-results {
    grid-template-columns: 1fr;
  }
}

.demo-box {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
}

.demo-box h4 {
  margin: 0 0 16px;
  color: #1f2937;
}

.content-block {
  background: #f0fdf4;
  padding: 16px;
  border-radius: 6px;
  border: 2px solid #22c55e;
}

.content-block p {
  margin: 8px 0;
  font-size: 14px;
  color: #166534;
}

.placeholder {
  background: #f9fafb;
  padding: 16px;
  border-radius: 6px;
  border: 2px dashed #d1d5db;
  text-align: center;
  color: #9ca3af;
}

.decision-box {
  background: #fef3c7;
  padding: 24px;
  border-radius: 8px;
  margin: 24px 0;
}

.decision-box h3 {
  margin-top: 0;
  color: #92400e;
}

.decision-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 0;
  background: white;
}

.decision-table th,
.decision-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #e5e7eb;
}

.decision-table th {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
}

.decision-table td {
  color: #4b5563;
  font-size: 14px;
}

.summary-box {
  background: #f0f9ff;
  padding: 24px;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.summary-box h3 {
  font-size: 18px;
  margin: 16px 0 8px;
  color: #1e40af;
}

.summary-box h3:first-child {
  margin-top: 0;
}

.summary-box ul {
  margin: 0 0 16px;
  padding-left: 24px;
}

.summary-box li {
  margin: 8px 0;
  line-height: 1.6;
  color: #1e3a8a;
}

.next-lesson {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  margin-top: 48px;
}

.next-lesson h3 {
  margin: 0 0 12px;
  font-size: 20px;
}

.next-lesson p {
  margin: 0 0 20px;
  opacity: 0.9;
}

.next-button {
  display: inline-block;
  padding: 12px 32px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: transform 0.2s;
}

.next-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
