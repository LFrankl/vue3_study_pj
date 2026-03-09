<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第65课：Vue Router 基础</h1>
      <p class="lesson-subtitle">学习 Vue Router 路由系统，掌握单页应用的路由管理和页面导航</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 40 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <div class="lesson-content">
      <!-- 1. 什么是路由 -->
      <section class="content-section">
        <h2>1️⃣ 什么是 Vue Router？</h2>
        <p>Vue Router 是 Vue.js 的官方路由管理器，用于构建单页应用（SPA）。它允许我们根据 URL 的不同显示不同的组件。</p>

        <div class="info-box">
          <h3>路由的核心概念</h3>
          <ul>
            <li><strong>路由（Route）：</strong>URL 路径与组件的映射关系</li>
            <li><strong>路由器（Router）：</strong>管理所有路由的容器</li>
            <li><strong>导航（Navigation）：</strong>在不同路由之间切换</li>
            <li><strong>单页应用：</strong>页面不刷新，通过 JavaScript 动态更新内容</li>
          </ul>
        </div>

        <div class="demo-box">
          <h3>🎯 对比：传统多页 vs 单页应用</h3>
          <div class="demo-content">
            <div class="comparison-grid">
              <div class="comparison-item">
                <h4>传统多页应用</h4>
                <div class="flow-diagram">
                  <div class="flow-step">点击链接</div>
                  <div class="flow-arrow">↓</div>
                  <div class="flow-step">向服务器请求</div>
                  <div class="flow-arrow">↓</div>
                  <div class="flow-step">返回整个 HTML</div>
                  <div class="flow-arrow">↓</div>
                  <div class="flow-step">页面刷新 ⚠️</div>
                </div>
                <p class="comparison-note">✗ 页面会闪烁<br>✗ 体验不够流畅</p>
              </div>

              <div class="comparison-item">
                <h4>单页应用 (SPA)</h4>
                <div class="flow-diagram">
                  <div class="flow-step">点击链接</div>
                  <div class="flow-arrow">↓</div>
                  <div class="flow-step">更新 URL</div>
                  <div class="flow-arrow">↓</div>
                  <div class="flow-step">切换组件</div>
                  <div class="flow-arrow">↓</div>
                  <div class="flow-step">无需刷新 ✓</div>
                </div>
                <p class="comparison-note">✓ 流畅切换<br>✓ 用户体验好</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. 路由配置 -->
      <section class="content-section">
        <h2>2️⃣ 基础路由配置</h2>
        <p>在 Vue 项目中安装和配置 Vue Router，定义路由映射关系。</p>

        <div class="info-box">
          <h3>安装和配置步骤</h3>
          <pre v-pre><code># 1. 安装 Vue Router
npm install vue-router@4

# 2. 创建路由配置文件 router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

# 3. 在 main.js 中使用路由
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：基础路由导航</h3>
          <div class="demo-content">
            <div class="router-demo">
              <div class="demo-nav">
                <button
                  @click="currentPage = 'home'"
                  :class="{ active: currentPage === 'home' }"
                  class="nav-btn"
                >
                  🏠 首页
                </button>
                <button
                  @click="currentPage = 'about'"
                  :class="{ active: currentPage === 'about' }"
                  class="nav-btn"
                >
                  ℹ️ 关于
                </button>
                <button
                  @click="currentPage = 'contact'"
                  :class="{ active: currentPage === 'contact' }"
                  class="nav-btn"
                >
                  📧 联系
                </button>
              </div>

              <div class="demo-page">
                <div class="url-bar">
                  <span class="url-protocol">https://</span>
                  <span class="url-domain">example.com</span>
                  <span class="url-path">{{ currentPath }}</span>
                </div>

                <transition name="page-fade" mode="out-in">
                  <div v-if="currentPage === 'home'" key="home" class="page-content">
                    <h3>🏠 首页</h3>
                    <p>欢迎来到我们的网站！这是首页内容。</p>
                    <div class="page-features">
                      <div class="feature-card">特性 1</div>
                      <div class="feature-card">特性 2</div>
                      <div class="feature-card">特性 3</div>
                    </div>
                  </div>

                  <div v-else-if="currentPage === 'about'" key="about" class="page-content">
                    <h3>ℹ️ 关于我们</h3>
                    <p>了解更多关于我们的信息。</p>
                    <ul>
                      <li>公司成立于 2020 年</li>
                      <li>专注于前端技术</li>
                      <li>服务全球用户</li>
                    </ul>
                  </div>

                  <div v-else-if="currentPage === 'contact'" key="contact" class="page-content">
                    <h3>📧 联系我们</h3>
                    <p>与我们取得联系。</p>
                    <div class="contact-info">
                      <p>📧 Email: contact@example.com</p>
                      <p>📱 电话: 123-456-7890</p>
                      <p>🏢 地址: 北京市朝阳区</p>
                    </div>
                  </div>
                </transition>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- App.vue --&gt;
&lt;template&gt;
  &lt;nav&gt;
    &lt;router-link to="/"&gt;首页&lt;/router-link&gt;
    &lt;router-link to="/about"&gt;关于&lt;/router-link&gt;
    &lt;router-link to="/contact"&gt;联系&lt;/router-link&gt;
  &lt;/nav&gt;

  &lt;!-- 路由视图：显示当前路由对应的组件 --&gt;
  &lt;router-view&gt;&lt;/router-view&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. 路由跳转 -->
      <section class="content-section">
        <h2>3️⃣ 路由跳转方式</h2>
        <p>Vue Router 提供了多种方式进行路由跳转，包括声明式导航和编程式导航。</p>

        <div class="info-box">
          <h3>两种跳转方式</h3>
          <pre v-pre><code>&lt;!-- 1. 声明式导航：使用 router-link --&gt;
&lt;router-link to="/about"&gt;关于页面&lt;/router-link&gt;
&lt;router-link :to="{ name: 'About' }"&gt;关于页面&lt;/router-link&gt;
&lt;router-link :to="{ path: '/about' }"&gt;关于页面&lt;/router-link&gt;

&lt;!-- 2. 编程式导航：使用 router.push --&gt;
&lt;script setup&gt;
import { useRouter } from 'vue-router'

const router = useRouter()

// 字符串路径
router.push('/about')

// 对象形式
router.push({ name: 'About' })
router.push({ path: '/about' })

// 带查询参数
router.push({ path: '/search', query: { q: 'vue' } })
// 结果：/search?q=vue
&lt;/script&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：不同跳转方式</h3>
          <div class="demo-content">
            <div class="navigation-demo">
              <div class="nav-methods">
                <h4>声明式导航 (router-link)</h4>
                <div class="nav-buttons">
                  <button @click="simulateRouterLink('/products')" class="demo-link">
                    跳转到产品页
                  </button>
                  <button @click="simulateRouterLink('/services')" class="demo-link">
                    跳转到服务页
                  </button>
                </div>

                <h4>编程式导航 (router.push)</h4>
                <div class="nav-buttons">
                  <button @click="navigateTo('/dashboard')" class="btn btn-primary">
                    进入控制台
                  </button>
                  <button @click="navigateWithQuery()" class="btn btn-primary">
                    搜索 Vue (带参数)
                  </button>
                  <button @click="goBack()" class="btn btn-secondary">
                    ← 返回上一页
                  </button>
                </div>
              </div>

              <div class="nav-history">
                <h4>📜 导航历史</h4>
                <div class="history-list">
                  <div
                    v-for="(item, index) in navigationHistory"
                    :key="index"
                    class="history-item"
                    :class="{ current: index === navigationHistory.length - 1 }"
                  >
                    <span class="history-index">{{ index + 1 }}</span>
                    <span class="history-path">{{ item.path }}</span>
                    <span v-if="item.query" class="history-query">{{ item.query }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;script setup&gt;
import { useRouter } from 'vue-router'

const router = useRouter()

// 编程式跳转
const goToDashboard = () =&gt; {
  router.push('/dashboard')
}

// 带查询参数跳转
const searchVue = () =&gt; {
  router.push({
    path: '/search',
    query: { q: 'vue', category: 'frontend' }
  })
}

// 返回上一页
const goBack = () =&gt; {
  router.back()  // 或 router.go(-1)
}

// 前进到下一页
const goForward = () =&gt; {
  router.forward()  // 或 router.go(1)
}
&lt;/script&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. 动态路由 -->
      <section class="content-section">
        <h2>4️⃣ 动态路由参数</h2>
        <p>动态路由允许我们在路径中使用参数，实现灵活的页面导航，如用户详情页、文章页等。</p>

        <div class="info-box">
          <h3>动态路由配置</h3>
          <pre v-pre><code>// 路由配置
const routes = [
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/post/:id/:slug?',  // slug 是可选参数
    name: 'Post',
    component: Post
  }
]

// 在组件中获取参数
&lt;script setup&gt;
import { useRoute } from 'vue-router'

const route = useRoute()

// 访问路由参数
console.log(route.params.id)
console.log(route.params.slug)

// 访问查询参数
console.log(route.query.page)
&lt;/script&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：用户列表和详情页</h3>
          <div class="demo-content">
            <div class="dynamic-route-demo">
              <div class="user-list-section">
                <h4>👥 用户列表</h4>
                <div class="user-grid">
                  <div
                    v-for="user in users"
                    :key="user.id"
                    @click="viewUser(user)"
                    class="user-item"
                  >
                    <div class="user-avatar">{{ user.avatar }}</div>
                    <div class="user-name">{{ user.name }}</div>
                    <div class="user-role">{{ user.role }}</div>
                    <button class="view-btn">查看详情 →</button>
                  </div>
                </div>
              </div>

              <div class="user-detail-section">
                <div v-if="selectedUser" class="user-detail">
                  <div class="detail-header">
                    <button @click="selectedUser = null" class="back-btn">← 返回列表</button>
                    <div class="detail-url">
                      <span class="url-label">当前路由：</span>
                      <code>/user/{{ selectedUser.id }}</code>
                    </div>
                  </div>

                  <div class="detail-content">
                    <div class="detail-avatar">{{ selectedUser.avatar }}</div>
                    <h3>{{ selectedUser.name }}</h3>
                    <p class="detail-role">{{ selectedUser.role }}</p>

                    <div class="detail-info">
                      <div class="info-row">
                        <span class="info-label">用户 ID:</span>
                        <span class="info-value">{{ selectedUser.id }}</span>
                      </div>
                      <div class="info-row">
                        <span class="info-label">邮箱:</span>
                        <span class="info-value">{{ selectedUser.email }}</span>
                      </div>
                      <div class="info-row">
                        <span class="info-label">加入时间:</span>
                        <span class="info-value">{{ selectedUser.joinDate }}</span>
                      </div>
                      <div class="info-row">
                        <span class="info-label">项目数:</span>
                        <span class="info-value">{{ selectedUser.projects }}</span>
                      </div>
                    </div>

                    <div class="detail-actions">
                      <button class="btn btn-primary">编辑资料</button>
                      <button class="btn btn-secondary">发送消息</button>
                    </div>
                  </div>
                </div>

                <div v-else class="no-selection">
                  <p>👈 请从左侧选择一个用户查看详情</p>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- UserList.vue --&gt;
&lt;template&gt;
  &lt;div v-for="user in users" :key="user.id"&gt;
    &lt;router-link :to="`/user/${user.id}`"&gt;
      {{ user.name }}
    &lt;/router-link&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- UserProfile.vue --&gt;
&lt;script setup&gt;
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const user = ref(null)

// 根据路由参数加载用户数据
const loadUser = async (id) =&gt; {
  const response = await fetch(`/api/users/${id}`)
  user.value = await response.json()
}

// 监听路由参数变化
watch(
  () =&gt; route.params.id,
  (newId) =&gt; loadUser(newId),
  { immediate: true }
)
&lt;/script&gt;

&lt;template&gt;
  &lt;div v-if="user"&gt;
    &lt;h2&gt;{{ user.name }}&lt;/h2&gt;
    &lt;p&gt;ID: {{ route.params.id }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. 嵌套路由 -->
      <section class="content-section">
        <h2>5️⃣ 嵌套路由</h2>
        <p>嵌套路由允许在父路由组件中渲染子路由组件，适合构建复杂的布局结构。</p>

        <div class="info-box">
          <h3>嵌套路由配置</h3>
          <pre v-pre><code>const routes = [
  {
    path: '/settings',
    component: Settings,
    children: [
      {
        path: '',  // 默认子路由
        component: SettingsHome
      },
      {
        path: 'profile',  // /settings/profile
        component: SettingsProfile
      },
      {
        path: 'security',  // /settings/security
        component: SettingsSecurity
      }
    ]
  }
]

&lt;!-- Settings.vue 父组件 --&gt;
&lt;template&gt;
  &lt;div class="settings"&gt;
    &lt;nav&gt;
      &lt;router-link to="/settings/profile"&gt;个人资料&lt;/router-link&gt;
      &lt;router-link to="/settings/security"&gt;安全设置&lt;/router-link&gt;
    &lt;/nav&gt;

    &lt;!-- 子路由渲染位置 --&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：设置页面（嵌套路由）</h3>
          <div class="demo-content">
            <div class="nested-route-demo">
              <div class="settings-layout">
                <div class="settings-sidebar">
                  <h4>⚙️ 设置</h4>
                  <div class="settings-menu">
                    <button
                      @click="settingsTab = 'profile'"
                      :class="{ active: settingsTab === 'profile' }"
                      class="menu-item"
                    >
                      👤 个人资料
                    </button>
                    <button
                      @click="settingsTab = 'security'"
                      :class="{ active: settingsTab === 'security' }"
                      class="menu-item"
                    >
                      🔒 安全设置
                    </button>
                    <button
                      @click="settingsTab = 'notifications'"
                      :class="{ active: settingsTab === 'notifications' }"
                      class="menu-item"
                    >
                      🔔 通知偏好
                    </button>
                    <button
                      @click="settingsTab = 'privacy'"
                      :class="{ active: settingsTab === 'privacy' }"
                      class="menu-item"
                    >
                      🛡️ 隐私设置
                    </button>
                  </div>
                </div>

                <div class="settings-content">
                  <div class="content-url">
                    <code>/settings/{{ settingsTab }}</code>
                  </div>

                  <transition name="slide-fade" mode="out-in">
                    <div v-if="settingsTab === 'profile'" key="profile" class="settings-panel">
                      <h3>👤 个人资料</h3>
                      <div class="form-group">
                        <label>用户名</label>
                        <input type="text" value="张三" class="form-input" />
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input type="email" value="zhangsan@example.com" class="form-input" />
                      </div>
                      <div class="form-group">
                        <label>个人简介</label>
                        <textarea class="form-input" rows="3">热爱前端开发</textarea>
                      </div>
                      <button class="btn btn-primary">保存更改</button>
                    </div>

                    <div v-else-if="settingsTab === 'security'" key="security" class="settings-panel">
                      <h3>🔒 安全设置</h3>
                      <div class="form-group">
                        <label>当前密码</label>
                        <input type="password" class="form-input" />
                      </div>
                      <div class="form-group">
                        <label>新密码</label>
                        <input type="password" class="form-input" />
                      </div>
                      <div class="form-group">
                        <label>确认密码</label>
                        <input type="password" class="form-input" />
                      </div>
                      <button class="btn btn-primary">更新密码</button>
                    </div>

                    <div v-else-if="settingsTab === 'notifications'" key="notifications" class="settings-panel">
                      <h3>🔔 通知偏好</h3>
                      <div class="toggle-group">
                        <label class="toggle-item">
                          <input type="checkbox" checked />
                          <span>邮件通知</span>
                        </label>
                        <label class="toggle-item">
                          <input type="checkbox" checked />
                          <span>系统推送</span>
                        </label>
                        <label class="toggle-item">
                          <input type="checkbox" />
                          <span>短信通知</span>
                        </label>
                      </div>
                      <button class="btn btn-primary">保存设置</button>
                    </div>

                    <div v-else-if="settingsTab === 'privacy'" key="privacy" class="settings-panel">
                      <h3>🛡️ 隐私设置</h3>
                      <div class="toggle-group">
                        <label class="toggle-item">
                          <input type="checkbox" checked />
                          <span>公开个人资料</span>
                        </label>
                        <label class="toggle-item">
                          <input type="checkbox" checked />
                          <span>允许搜索</span>
                        </label>
                        <label class="toggle-item">
                          <input type="checkbox" />
                          <span>显示在线状态</span>
                        </label>
                      </div>
                      <button class="btn btn-primary">保存设置</button>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. 知识总结 -->
      <section class="content-section">
        <h2>📚 知识总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>💡 核心概念</h3>
            <ul>
              <li><strong>router-link:</strong> 声明式导航组件</li>
              <li><strong>router-view:</strong> 路由视图出口</li>
              <li><strong>useRouter:</strong> 编程式导航</li>
              <li><strong>useRoute:</strong> 获取路由信息</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🎯 路由类型</h3>
            <ul>
              <li>基础路由（静态路径）</li>
              <li>动态路由（带参数）</li>
              <li>嵌套路由（父子关系）</li>
              <li>命名路由（通过名称跳转）</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>✨ 最佳实践</h3>
            <ul>
              <li>使用命名路由提高可维护性</li>
              <li>路由参数变化时重新加载数据</li>
              <li>使用路由懒加载优化性能</li>
              <li>合理使用嵌套路由组织页面</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 下一课预告 -->
      <section class="content-section next-lesson-preview">
        <h2>🎯 下一课预告</h2>
        <div class="next-lesson-card">
          <h3>第66课：动态组件</h3>
          <p>学习动态组件的使用，掌握组件缓存和异步加载技术。</p>
          <ul>
            <li>⚡ component :is 动态切换</li>
            <li>🔄 keep-alive 组件缓存</li>
            <li>📦 异步组件按需加载</li>
            <li>💡 选项卡组件实战</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 基础路由演示
const currentPage = ref('home')
const currentPath = computed(() => {
  const paths = {
    home: '/',
    about: '/about',
    contact: '/contact'
  }
  return paths[currentPage.value]
})

// 路由跳转演示
const navigationHistory = ref([
  { path: '/', query: '' }
])

const simulateRouterLink = (path) => {
  navigationHistory.value.push({ path, query: '' })
}

const navigateTo = (path) => {
  navigationHistory.value.push({ path, query: '' })
}

const navigateWithQuery = () => {
  navigationHistory.value.push({
    path: '/search',
    query: '?q=vue&category=frontend'
  })
}

const goBack = () => {
  if (navigationHistory.value.length > 1) {
    navigationHistory.value.pop()
  }
}

// 动态路由演示
const users = ref([
  {
    id: 1,
    name: '张三',
    role: '前端工程师',
    avatar: '👨‍💻',
    email: 'zhangsan@example.com',
    joinDate: '2023-01-15',
    projects: 12
  },
  {
    id: 2,
    name: '李四',
    role: '后端工程师',
    avatar: '👩‍💻',
    email: 'lisi@example.com',
    joinDate: '2023-03-20',
    projects: 8
  },
  {
    id: 3,
    name: '王五',
    role: 'UI 设计师',
    avatar: '🎨',
    email: 'wangwu@example.com',
    joinDate: '2023-02-10',
    projects: 15
  },
  {
    id: 4,
    name: '赵六',
    role: '产品经理',
    avatar: '📊',
    email: 'zhaoliu@example.com',
    joinDate: '2023-04-05',
    projects: 20
  }
])

const selectedUser = ref(null)

const viewUser = (user) => {
  selectedUser.value = user
}

// 嵌套路由演示
const settingsTab = ref('profile')
</script>

<style scoped>
/* 增强页面头部 */
.lesson-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 32px;
  color: white;
  box-shadow: 0 4px 16px rgba(102,126,234,0.3);
}

.lesson-header h1 {
  color: white;
  margin-bottom: 12px;
  font-size: 36px;
}

.lesson-subtitle {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 20px;
  line-height: 1.6;
}

.lesson-meta {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 15px;
}

.lesson-meta span {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.2);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

/* 内容区块 */
.content-section {
  margin-bottom: 48px;
}

.content-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #4285f4 0%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content-section > p {
  font-size: 16px;
  line-height: 1.8;
  color: #5f6368;
  margin-bottom: 20px;
}

/* Info Box */
.info-box {
  background: linear-gradient(135deg, #e8f0fe 0%, #f1f3f4 100%);
  border-left: 4px solid #4285f4;
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
}

.info-box h3 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #1a73e8;
  font-size: 18px;
}

.info-box ul {
  margin: 0;
  padding-left: 24px;
}

.info-box li {
  padding: 6px 0;
  line-height: 1.8;
  color: #333;
}

.info-box pre {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  margin-top: 12px;
}

/* Demo Box */
.demo-box {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
  border: 2px solid #e8eaed;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: all 0.3s ease;
}

.demo-box:hover {
  border-color: #4285f4;
  box-shadow: 0 4px 16px rgba(66,133,244,0.1);
}

.demo-box h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  font-size: 20px;
}

.demo-content {
  margin-top: 16px;
}

.code-example {
  margin-top: 20px;
}

.code-example pre {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  overflow-x: auto;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

.code-example code {
  color: #333;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* 对比网格 */
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 20px;
}

.comparison-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.comparison-item:hover {
  border-color: #4285f4;
  background: white;
  box-shadow: 0 4px 16px rgba(66,133,244,0.1);
}

.comparison-item h4 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #4285f4;
  font-size: 18px;
}

.flow-diagram {
  margin: 20px 0;
}

.flow-step {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  margin: 8px 0;
  font-size: 14px;
}

.flow-arrow {
  text-align: center;
  font-size: 20px;
  color: #666;
  margin: 4px 0;
}

.comparison-note {
  margin-top: 16px;
  padding: 12px;
  background: rgba(66,133,244,0.1);
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.8;
}

/* 路由演示 */
.router-demo {
  margin-bottom: 20px;
}

.demo-nav {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.nav-btn {
  padding: 12px 24px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  border-color: #4285f4;
  background: #f8f9fa;
}

.nav-btn.active {
  border-color: #4285f4;
  background: #4285f4;
  color: white;
}

.demo-page {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
}

.url-bar {
  background: #f8f9fa;
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  font-family: monospace;
  font-size: 14px;
}

.url-protocol {
  color: #999;
}

.url-domain {
  color: #333;
}

.url-path {
  color: #4285f4;
  font-weight: bold;
}

.page-content {
  padding: 32px;
  min-height: 200px;
}

.page-content h3 {
  margin-top: 0;
  color: #333;
}

.page-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 20px;
}

.feature-card {
  background: linear-gradient(135deg, #e8f0fe 0%, #f1f3f4 100%);
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
}

.contact-info {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-top: 16px;
}

.contact-info p {
  margin: 8px 0;
}

/* 页面切换动画 */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.3s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* 导航演示 */
.navigation-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 20px;
}

.nav-methods h4 {
  margin-top: 20px;
  margin-bottom: 12px;
  color: #333;
}

.nav-methods h4:first-child {
  margin-top: 0;
}

.nav-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.demo-link {
  padding: 10px 16px;
  background: white;
  border: 2px solid #4285f4;
  color: #4285f4;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
}

.demo-link:hover {
  background: #4285f4;
  color: white;
}

.nav-history h4 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
}

.history-list {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 12px;
  max-height: 300px;
  overflow-y: auto;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  background: white;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 14px;
}

.history-item.current {
  background: linear-gradient(135deg, #e8f0fe 0%, #f1f3f4 100%);
  border-left: 3px solid #4285f4;
}

.history-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #e0e0e0;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
}

.history-item.current .history-index {
  background: #4285f4;
  color: white;
}

.history-path {
  flex: 1;
  font-family: monospace;
  color: #333;
}

.history-query {
  font-family: monospace;
  font-size: 12px;
  color: #666;
}

/* 按钮样式 */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #4285f4 0%, #1a73e8 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(66,133,244,0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66,133,244,0.4);
}

.btn-secondary {
  background: #f1f3f4;
  color: #333;
}

.btn-secondary:hover {
  background: #e8eaed;
}

/* 动态路由演示 */
.dynamic-route-demo {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 24px;
  margin-bottom: 20px;
  min-height: 400px;
}

.user-list-section h4,
.user-detail-section h4 {
  margin-top: 0;
  color: #333;
}

.user-grid {
  display: grid;
  gap: 12px;
}

.user-item {
  background: #f8f9fa;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.user-item:hover {
  border-color: #4285f4;
  background: white;
  box-shadow: 0 2px 8px rgba(66,133,244,0.1);
}

.user-avatar {
  font-size: 32px;
  text-align: center;
  margin-bottom: 8px;
}

.user-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  text-align: center;
}

.user-role {
  font-size: 13px;
  color: #666;
  text-align: center;
  margin-bottom: 12px;
}

.view-btn {
  width: 100%;
  padding: 8px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s ease;
}

.view-btn:hover {
  background: #1a73e8;
}

.user-detail {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  height: 100%;
}

.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.back-btn {
  padding: 8px 16px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.back-btn:hover {
  border-color: #4285f4;
  color: #4285f4;
}

.detail-url {
  font-size: 13px;
}

.detail-url code {
  background: white;
  padding: 4px 12px;
  border-radius: 4px;
  color: #4285f4;
  font-weight: 500;
}

.detail-content {
  background: white;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
}

.detail-avatar {
  font-size: 80px;
  margin-bottom: 16px;
}

.detail-content h3 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 24px;
}

.detail-role {
  color: #666;
  margin-bottom: 24px;
}

.detail-info {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin: 24px 0;
  text-align: left;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  color: #666;
  font-size: 14px;
}

.info-value {
  color: #333;
  font-weight: 500;
  font-size: 14px;
}

.detail-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
}

.no-selection {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #f8f9fa;
  border-radius: 12px;
  color: #999;
  font-size: 16px;
}

/* 嵌套路由演示 */
.nested-route-demo {
  margin-bottom: 20px;
}

.settings-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 0;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  min-height: 400px;
}

.settings-sidebar {
  background: #f8f9fa;
  border-right: 2px solid #e0e0e0;
  padding: 24px;
}

.settings-sidebar h4 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
}

.settings-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu-item {
  padding: 12px 16px;
  background: white;
  border: 2px solid transparent;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.menu-item:hover {
  background: #e8eaed;
}

.menu-item.active {
  border-color: #4285f4;
  background: #e8f0fe;
  color: #1a73e8;
  font-weight: 500;
}

.settings-content {
  padding: 24px;
  background: white;
}

.content-url {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e8eaed;
}

.content-url code {
  background: #f8f9fa;
  padding: 6px 12px;
  border-radius: 4px;
  color: #4285f4;
  font-weight: 500;
  font-size: 14px;
}

.settings-panel {
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.settings-panel h3 {
  margin-top: 0;
  margin-bottom: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
}

.form-input {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #4285f4;
}

.toggle-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.toggle-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  cursor: pointer;
}

.toggle-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

/* 总结网格 */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.summary-card {
  background: white;
  border: 2px solid var(--primary-blue);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}

.summary-card:hover {
  box-shadow: 0 4px 16px rgba(66,133,244,0.2);
  transform: translateY(-2px);
}

.summary-card h3 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 18px;
}

.summary-card ul {
  margin: 0;
  padding-left: 20px;
}

.summary-card li {
  padding: 6px 0;
  line-height: 1.6;
}

/* 下一课预告 */
.next-lesson-preview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  padding: 32px;
}

.next-lesson-preview h2 {
  color: white;
  border-bottom-color: rgba(255,255,255,0.3);
}

.next-lesson-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 24px;
}

.next-lesson-card h3 {
  margin-top: 0;
  color: white;
  font-size: 24px;
}

.next-lesson-card p {
  font-size: 16px;
  opacity: 0.95;
}

.next-lesson-card ul {
  margin-top: 16px;
  padding-left: 20px;
}

.next-lesson-card li {
  padding: 6px 0;
  font-size: 15px;
}

/* 滑动渐变动画 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* 响应式 */
@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .navigation-demo {
    grid-template-columns: 1fr;
  }

  .dynamic-route-demo {
    grid-template-columns: 1fr;
  }

  .settings-layout {
    grid-template-columns: 1fr;
  }

  .settings-sidebar {
    border-right: none;
    border-bottom: 2px solid #e0e0e0;
  }

  .page-features {
    grid-template-columns: 1fr;
  }
}
</style>
