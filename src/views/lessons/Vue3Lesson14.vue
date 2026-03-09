<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第66课：动态组件</h1>
      <p class="lesson-subtitle">学习动态组件的使用，掌握组件缓存和异步加载技术</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 40 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <div class="lesson-content">
      <!-- 1. 什么是动态组件 -->
      <section class="content-section">
        <h2>1️⃣ 什么是动态组件？</h2>
        <p>动态组件允许我们在同一个挂载点动态切换不同的组件，非常适合实现选项卡、多步骤表单等场景。</p>

        <div class="info-box">
          <h3>动态组件的应用场景</h3>
          <ul>
            <li><strong>选项卡界面：</strong>在多个视图之间切换</li>
            <li><strong>多步骤表单：</strong>根据进度显示不同步骤</li>
            <li><strong>条件渲染：</strong>根据状态显示不同组件</li>
            <li><strong>模态对话框：</strong>动态加载不同内容</li>
          </ul>
        </div>

        <div class="demo-box">
          <h3>🎯 对比：传统方式 vs 动态组件</h3>
          <div class="demo-content">
            <div class="comparison-grid">
              <div class="comparison-item">
                <h4>传统方式：使用 v-if</h4>
                <pre v-pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="current = 'home'"&gt;首页&lt;/button&gt;
    &lt;button @click="current = 'about'"&gt;关于&lt;/button&gt;
    &lt;button @click="current = 'contact'"&gt;联系&lt;/button&gt;

    &lt;!-- 需要写很多 v-if --&gt;
    &lt;Home v-if="current === 'home'" /&gt;
    &lt;About v-if="current === 'about'" /&gt;
    &lt;Contact v-if="current === 'contact'" /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
                <p class="comparison-note">❌ 代码重复，难以维护</p>
              </div>

              <div class="comparison-item">
                <h4>动态组件：使用 component :is</h4>
                <pre v-pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="current = 'Home'"&gt;首页&lt;/button&gt;
    &lt;button @click="current = 'About'"&gt;关于&lt;/button&gt;
    &lt;button @click="current = 'Contact'"&gt;联系&lt;/button&gt;

    &lt;!-- 一行代码搞定 --&gt;
    &lt;component :is="current" /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
                <p class="comparison-note">✅ 简洁优雅，易于扩展</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. component :is 基础用法 -->
      <section class="content-section">
        <h2>2️⃣ component :is 基础用法</h2>
        <p>使用 &lt;component :is="componentName"&gt; 可以动态渲染组件，componentName 可以是组件名称或组件对象。</p>

        <div class="info-box">
          <h3>基本语法</h3>
          <pre v-pre><code>&lt;script setup&gt;
import { ref } from 'vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const currentTab = ref('Home')
const tabs = {
  Home,
  About,
  Contact
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;button
      v-for="(_, tab) in tabs"
      :key="tab"
      @click="currentTab = tab"
    &gt;
      {{ tab }}
    &lt;/button&gt;

    &lt;!-- 动态组件 --&gt;
    &lt;component :is="tabs[currentTab]" /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：简单的选项卡</h3>
          <div class="demo-content">
            <div class="tabs-demo">
              <div class="tabs-nav">
                <button
                  v-for="tab in simpleTabs"
                  :key="tab.name"
                  @click="simpleCurrentTab = tab.name"
                  :class="{ active: simpleCurrentTab === tab.name }"
                  class="tab-button"
                >
                  {{ tab.icon }} {{ tab.label }}
                </button>
              </div>

              <div class="tabs-content">
                <transition name="fade" mode="out-in">
                  <div v-if="simpleCurrentTab === 'dashboard'" key="dashboard" class="tab-panel">
                    <h3>📊 控制台</h3>
                    <div class="dashboard-grid">
                      <div class="stat-card">
                        <div class="stat-value">1,234</div>
                        <div class="stat-label">总用户</div>
                      </div>
                      <div class="stat-card">
                        <div class="stat-value">567</div>
                        <div class="stat-label">活跃用户</div>
                      </div>
                      <div class="stat-card">
                        <div class="stat-value">89</div>
                        <div class="stat-label">今日新增</div>
                      </div>
                    </div>
                  </div>

                  <div v-else-if="simpleCurrentTab === 'profile'" key="profile" class="tab-panel">
                    <h3>👤 个人资料</h3>
                    <div class="profile-info">
                      <div class="avatar">👨‍💻</div>
                      <div class="info">
                        <h4>张三</h4>
                        <p>前端工程师</p>
                        <p>📧 zhangsan@example.com</p>
                      </div>
                    </div>
                  </div>

                  <div v-else-if="simpleCurrentTab === 'settings'" key="settings" class="tab-panel">
                    <h3>⚙️ 设置</h3>
                    <div class="settings-list">
                      <div class="setting-item">
                        <span>通知提醒</span>
                        <input type="checkbox" checked />
                      </div>
                      <div class="setting-item">
                        <span>自动保存</span>
                        <input type="checkbox" checked />
                      </div>
                      <div class="setting-item">
                        <span>暗色模式</span>
                        <input type="checkbox" />
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;script setup&gt;
import { ref } from 'vue'

const currentTab = ref('dashboard')
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="tabs"&gt;
    &lt;button
      @click="currentTab = 'dashboard'"
      :class="{ active: currentTab === 'dashboard' }"
    &gt;
      控制台
    &lt;/button&gt;
    &lt;button
      @click="currentTab = 'profile'"
      :class="{ active: currentTab === 'profile' }"
    &gt;
      个人资料
    &lt;/button&gt;

    &lt;component :is="currentTab" /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. keep-alive 组件缓存 -->
      <section class="content-section">
        <h2>3️⃣ keep-alive 组件缓存</h2>
        <p>默认情况下，切换组件会销毁旧组件并创建新组件。使用 keep-alive 可以缓存组件状态，避免重复渲染。</p>

        <div class="info-box">
          <h3>keep-alive 用法</h3>
          <pre v-pre><code>&lt;!-- 缓存所有组件 --&gt;
&lt;keep-alive&gt;
  &lt;component :is="currentTab" /&gt;
&lt;/keep-alive&gt;

&lt;!-- 只缓存指定组件 --&gt;
&lt;keep-alive :include="['Home', 'About']"&gt;
  &lt;component :is="currentTab" /&gt;
&lt;/keep-alive&gt;

&lt;!-- 排除指定组件 --&gt;
&lt;keep-alive :exclude="['Contact']"&gt;
  &lt;component :is="currentTab" /&gt;
&lt;/keep-alive&gt;

&lt;!-- 限制缓存数量 --&gt;
&lt;keep-alive :max="3"&gt;
  &lt;component :is="currentTab" /&gt;
&lt;/keep-alive&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：对比缓存效果</h3>
          <div class="demo-content">
            <div class="cache-comparison">
              <div class="comparison-section">
                <h4>❌ 未使用 keep-alive</h4>
                <p class="hint">切换标签时，表单数据会丢失</p>
                <div class="tabs-nav">
                  <button
                    @click="noCacheTab = 'form'"
                    :class="{ active: noCacheTab === 'form' }"
                    class="tab-button"
                  >
                    📝 表单
                  </button>
                  <button
                    @click="noCacheTab = 'list'"
                    :class="{ active: noCacheTab === 'list' }"
                    class="tab-button"
                  >
                    📋 列表
                  </button>
                </div>

                <div class="tab-content">
                  <div v-if="noCacheTab === 'form'" class="form-panel">
                    <input v-model="noCacheFormData.name" placeholder="姓名" class="form-input" />
                    <input v-model="noCacheFormData.email" placeholder="邮箱" class="form-input" />
                    <p class="warning">⚠️ 切换到列表再回来，数据会丢失</p>
                  </div>
                  <div v-else class="list-panel">
                    <p>这是列表内容</p>
                    <ul>
                      <li>项目 1</li>
                      <li>项目 2</li>
                      <li>项目 3</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="comparison-section">
                <h4>✅ 使用 keep-alive</h4>
                <p class="hint">切换标签时，表单数据会保留</p>
                <div class="tabs-nav">
                  <button
                    @click="cacheTab = 'form'"
                    :class="{ active: cacheTab === 'form' }"
                    class="tab-button"
                  >
                    📝 表单
                  </button>
                  <button
                    @click="cacheTab = 'list'"
                    :class="{ active: cacheTab === 'list' }"
                    class="tab-button"
                  >
                    📋 列表
                  </button>
                </div>

                <div class="tab-content">
                  <keep-alive>
                    <div v-if="cacheTab === 'form'" key="form" class="form-panel">
                      <input v-model="cacheFormData.name" placeholder="姓名" class="form-input" />
                      <input v-model="cacheFormData.email" placeholder="邮箱" class="form-input" />
                      <p class="success">✅ 切换到列表再回来，数据会保留</p>
                    </div>
                    <div v-else key="list" class="list-panel">
                      <p>这是列表内容</p>
                      <ul>
                        <li>项目 1</li>
                        <li>项目 2</li>
                        <li>项目 3</li>
                      </ul>
                    </div>
                  </keep-alive>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- 未使用 keep-alive --&gt;
&lt;component :is="currentTab" /&gt;
&lt;!-- 每次切换都会重新创建组件，状态丢失 --&gt;

&lt;!-- 使用 keep-alive --&gt;
&lt;keep-alive&gt;
  &lt;component :is="currentTab" /&gt;
&lt;/keep-alive&gt;
&lt;!-- 组件被缓存，状态保留 --&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. 生命周期钩子 -->
      <section class="content-section">
        <h2>4️⃣ keep-alive 生命周期钩子</h2>
        <p>被 keep-alive 缓存的组件有特殊的生命周期钩子：activated 和 deactivated。</p>

        <div class="info-box">
          <h3>生命周期钩子</h3>
          <pre v-pre><code>&lt;script setup&gt;
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue'

// 组件首次挂载时调用
onMounted(() => {
  console.log('组件挂载')
})

// 组件被激活时调用（从缓存中恢复）
onActivated(() => {
  console.log('组件激活')
  // 适合刷新数据、启动定时器等
})

// 组件被停用时调用（进入缓存）
onDeactivated(() => {
  console.log('组件停用')
  // 适合清理定时器、取消请求等
})

// 组件卸载时调用（从 DOM 移除）
onUnmounted(() => {
  console.log('组件卸载')
})
&lt;/script&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：生命周期钩子执行顺序</h3>
          <div class="demo-content">
            <div class="lifecycle-demo">
              <div class="tabs-nav">
                <button
                  @click="lifecycleTab = 'timer'"
                  :class="{ active: lifecycleTab === 'timer' }"
                  class="tab-button"
                >
                  ⏱️ 计时器
                </button>
                <button
                  @click="lifecycleTab = 'counter'"
                  :class="{ active: lifecycleTab === 'counter' }"
                  class="tab-button"
                >
                  🔢 计数器
                </button>
              </div>

              <div class="lifecycle-content">
                <keep-alive>
                  <div v-if="lifecycleTab === 'timer'" key="timer" class="lifecycle-panel">
                    <h4>计时器组件</h4>
                    <div class="timer-display">{{ timerSeconds }}s</div>
                    <p class="lifecycle-hint">💡 切换到其他标签，计时器会暂停（deactivated）</p>
                    <p class="lifecycle-hint">💡 切换回来，计时器会继续（activated）</p>
                  </div>

                  <div v-else key="counter" class="lifecycle-panel">
                    <h4>计数器组件</h4>
                    <div class="counter-display">{{ counterValue }}</div>
                    <button @click="counterValue++" class="btn btn-primary">+1</button>
                    <p class="lifecycle-hint">💡 状态会被保留在缓存中</p>
                  </div>
                </keep-alive>
              </div>

              <div class="lifecycle-log">
                <h4>📋 生命周期日志</h4>
                <div class="log-container">
                  <div v-for="(log, index) in lifecycleLogs" :key="index" class="log-item">
                    <span class="log-time">{{ log.time }}</span>
                    <span :class="'log-type log-' + log.type">{{ log.message }}</span>
                  </div>
                </div>
                <button @click="lifecycleLogs = []" class="btn btn-secondary">清空日志</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. 异步组件 -->
      <section class="content-section">
        <h2>5️⃣ 异步组件与懒加载</h2>
        <p>异步组件可以按需加载，减少初始包体积，提升应用性能。</p>

        <div class="info-box">
          <h3>异步组件定义</h3>
          <pre v-pre><code>&lt;script setup&gt;
import { defineAsyncComponent } from 'vue'

// 基础用法
const AsyncComponent = defineAsyncComponent(() =>
  import('./components/HeavyComponent.vue')
)

// 带配置选项
const AsyncComponentWithOptions = defineAsyncComponent({
  loader: () => import('./components/HeavyComponent.vue'),

  // 加载中显示的组件
  loadingComponent: LoadingSpinner,

  // 加载失败显示的组件
  errorComponent: ErrorComponent,

  // 延迟显示加载组件的时间（ms）
  delay: 200,

  // 超时时间
  timeout: 3000
})
&lt;/script&gt;

&lt;template&gt;
  &lt;AsyncComponent /&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：异步组件加载</h3>
          <div class="demo-content">
            <div class="async-demo">
              <div class="async-controls">
                <button @click="loadAsyncComponent('chart')" class="btn btn-primary">
                  加载图表组件 📊
                </button>
                <button @click="loadAsyncComponent('editor')" class="btn btn-primary">
                  加载编辑器组件 📝
                </button>
                <button @click="loadAsyncComponent('video')" class="btn btn-primary">
                  加载视频播放器 🎬
                </button>
              </div>

              <div class="async-content">
                <transition name="fade" mode="out-in">
                  <div v-if="asyncLoading" key="loading" class="loading-state">
                    <div class="spinner"></div>
                    <p>加载中...</p>
                  </div>

                  <div v-else-if="loadedComponent === 'chart'" key="chart" class="component-panel">
                    <h4>📊 图表组件</h4>
                    <div class="mock-chart">
                      <div class="chart-bar" style="height: 60%"></div>
                      <div class="chart-bar" style="height: 80%"></div>
                      <div class="chart-bar" style="height: 40%"></div>
                      <div class="chart-bar" style="height: 90%"></div>
                      <div class="chart-bar" style="height: 70%"></div>
                    </div>
                    <p class="component-info">✅ 组件已异步加载</p>
                  </div>

                  <div v-else-if="loadedComponent === 'editor'" key="editor" class="component-panel">
                    <h4>📝 编辑器组件</h4>
                    <div class="mock-editor">
                      <div class="editor-toolbar">
                        <button>B</button>
                        <button>I</button>
                        <button>U</button>
                      </div>
                      <textarea placeholder="开始编辑..." class="editor-area"></textarea>
                    </div>
                    <p class="component-info">✅ 组件已异步加载</p>
                  </div>

                  <div v-else-if="loadedComponent === 'video'" key="video" class="component-panel">
                    <h4>🎬 视频播放器</h4>
                    <div class="mock-video">
                      <div class="video-screen">🎬</div>
                      <div class="video-controls">
                        <button>▶️</button>
                        <div class="progress-bar">
                          <div class="progress" style="width: 35%"></div>
                        </div>
                        <button>🔊</button>
                      </div>
                    </div>
                    <p class="component-info">✅ 组件已异步加载</p>
                  </div>

                  <div v-else key="empty" class="empty-state">
                    <p>👆 点击上方按钮加载组件</p>
                  </div>
                </transition>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;script setup&gt;
import { defineAsyncComponent, ref } from 'vue'

// 定义异步组件
const ChartComponent = defineAsyncComponent(() =>
  import('./components/Chart.vue')
)

const EditorComponent = defineAsyncComponent(() =>
  import('./components/Editor.vue')
)

const currentComponent = ref(null)

const loadComponent = (name) => {
  if (name === 'chart') {
    currentComponent.value = ChartComponent
  } else if (name === 'editor') {
    currentComponent.value = EditorComponent
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="loadComponent('chart')"&gt;加载图表&lt;/button&gt;
  &lt;button @click="loadComponent('editor')"&gt;加载编辑器&lt;/button&gt;

  &lt;component :is="currentComponent" /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. 实战：完整选项卡组件 -->
      <section class="content-section">
        <h2>6️⃣ 实战：完整的选项卡组件</h2>
        <p>结合动态组件、keep-alive 和过渡动画，构建一个功能完整的选项卡系统。</p>

        <div class="demo-box">
          <h3>🎯 综合示例：项目管理面板</h3>
          <div class="demo-content">
            <div class="project-panel">
              <div class="panel-header">
                <h4>📁 项目管理系统</h4>
                <div class="panel-tabs">
                  <button
                    v-for="tab in projectTabs"
                    :key="tab.name"
                    @click="projectCurrentTab = tab.name"
                    :class="{ active: projectCurrentTab === tab.name }"
                    class="panel-tab"
                  >
                    {{ tab.icon }} {{ tab.label }}
                  </button>
                </div>
              </div>

              <div class="panel-body">
                <keep-alive>
                  <transition name="slide-fade" mode="out-in">
                    <div v-if="projectCurrentTab === 'tasks'" key="tasks" class="panel-content">
                      <h5>📋 任务列表</h5>
                      <div class="task-list">
                        <div v-for="task in tasks" :key="task.id" class="task-item">
                          <input type="checkbox" v-model="task.completed" />
                          <span :class="{ completed: task.completed }">{{ task.title }}</span>
                          <span :class="'priority priority-' + task.priority">{{ task.priority }}</span>
                        </div>
                      </div>
                      <button @click="addTask" class="btn btn-primary">+ 新增任务</button>
                    </div>

                    <div v-else-if="projectCurrentTab === 'team'" key="team" class="panel-content">
                      <h5>👥 团队成员</h5>
                      <div class="team-grid">
                        <div v-for="member in teamMembers" :key="member.id" class="team-card">
                          <div class="member-avatar">{{ member.avatar }}</div>
                          <div class="member-name">{{ member.name }}</div>
                          <div class="member-role">{{ member.role }}</div>
                        </div>
                      </div>
                    </div>

                    <div v-else-if="projectCurrentTab === 'files'" key="files" class="panel-content">
                      <h5>📁 文件管理</h5>
                      <div class="file-list">
                        <div v-for="file in files" :key="file.id" class="file-item">
                          <span class="file-icon">{{ file.icon }}</span>
                          <span class="file-name">{{ file.name }}</span>
                          <span class="file-size">{{ file.size }}</span>
                        </div>
                      </div>
                    </div>

                    <div v-else-if="projectCurrentTab === 'analytics'" key="analytics" class="panel-content">
                      <h5>📊 数据分析</h5>
                      <div class="analytics-grid">
                        <div class="analytics-card">
                          <div class="analytics-value">{{ tasks.filter(t => t.completed).length }}</div>
                          <div class="analytics-label">已完成任务</div>
                        </div>
                        <div class="analytics-card">
                          <div class="analytics-value">{{ tasks.filter(t => !t.completed).length }}</div>
                          <div class="analytics-label">进行中任务</div>
                        </div>
                        <div class="analytics-card">
                          <div class="analytics-value">{{ teamMembers.length }}</div>
                          <div class="analytics-label">团队成员</div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </keep-alive>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. 知识总结 -->
      <section class="content-section">
        <h2>📚 知识总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>💡 核心概念</h3>
            <ul>
              <li><strong>component :is:</strong> 动态渲染组件</li>
              <li><strong>keep-alive:</strong> 缓存组件状态</li>
              <li><strong>异步组件:</strong> 按需加载组件</li>
              <li><strong>生命周期:</strong> activated/deactivated</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🎯 使用场景</h3>
            <ul>
              <li>选项卡界面切换</li>
              <li>多步骤表单流程</li>
              <li>模态对话框内容</li>
              <li>懒加载重型组件</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>✨ 最佳实践</h3>
            <ul>
              <li>合理使用 keep-alive 缓存</li>
              <li>大组件使用异步加载</li>
              <li>添加过渡动画提升体验</li>
              <li>使用 include/exclude 控制缓存</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 下一课预告 -->
      <section class="content-section next-lesson-preview">
        <h2>🎯 下一课预告</h2>
        <div class="next-lesson-card">
          <h3>第67课：过渡与动画</h3>
          <p>学习 Vue3 的过渡和动画系统，为应用添加精美的动效。</p>
          <ul>
            <li>⚡ Transition 组件使用</li>
            <li>🔄 TransitionGroup 列表过渡</li>
            <li>🎨 自定义过渡类名</li>
            <li>💡 动画效果库实战</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

// 简单选项卡演示
const simpleTabs = [
  { name: 'dashboard', label: '控制台', icon: '📊' },
  { name: 'profile', label: '个人资料', icon: '👤' },
  { name: 'settings', label: '设置', icon: '⚙️' }
]
const simpleCurrentTab = ref('dashboard')

// keep-alive 对比演示
const noCacheTab = ref('form')
const noCacheFormData = ref({ name: '', email: '' })

const cacheTab = ref('form')
const cacheFormData = ref({ name: '', email: '' })

// 监听未缓存标签切换，重置数据
watch(noCacheTab, (newTab) => {
  if (newTab === 'form') {
    noCacheFormData.value = { name: '', email: '' }
  }
})

// 生命周期演示
const lifecycleTab = ref('timer')
const timerSeconds = ref(0)
const counterValue = ref(0)
const lifecycleLogs = ref([])
let timerInterval = null

const addLifecycleLog = (type, message) => {
  const now = new Date()
  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
  lifecycleLogs.value.push({ time, type, message })
  if (lifecycleLogs.value.length > 10) {
    lifecycleLogs.value.shift()
  }
}

// 监听标签切换，模拟生命周期
watch(lifecycleTab, (newTab, oldTab) => {
  if (oldTab === 'timer') {
    clearInterval(timerInterval)
    timerInterval = null
    addLifecycleLog('deactivated', '⏸️ 计时器组件已停用')
  } else if (oldTab === 'counter') {
    addLifecycleLog('deactivated', '⏸️ 计数器组件已停用')
  }

  if (newTab === 'timer') {
    timerInterval = setInterval(() => {
      timerSeconds.value++
    }, 1000)
    addLifecycleLog('activated', '▶️ 计时器组件已激活')
  } else if (newTab === 'counter') {
    addLifecycleLog('activated', '▶️ 计数器组件已激活')
  }
})

onMounted(() => {
  // 初始化计时器
  if (lifecycleTab.value === 'timer') {
    timerInterval = setInterval(() => {
      timerSeconds.value++
    }, 1000)
    addLifecycleLog('mounted', '🎬 计时器组件已挂载')
  }
})

// 异步组件演示
const asyncLoading = ref(false)
const loadedComponent = ref(null)

const loadAsyncComponent = (componentName) => {
  asyncLoading.value = true
  loadedComponent.value = null

  // 模拟异步加载延迟
  setTimeout(() => {
    loadedComponent.value = componentName
    asyncLoading.value = false
  }, 800)
}

// 项目管理面板
const projectTabs = [
  { name: 'tasks', label: '任务', icon: '📋' },
  { name: 'team', label: '团队', icon: '👥' },
  { name: 'files', label: '文件', icon: '📁' },
  { name: 'analytics', label: '分析', icon: '📊' }
]
const projectCurrentTab = ref('tasks')

const tasks = ref([
  { id: 1, title: '完成首页设计', completed: true, priority: 'high' },
  { id: 2, title: '实现用户登录', completed: false, priority: 'high' },
  { id: 3, title: '编写单元测试', completed: false, priority: 'medium' },
  { id: 4, title: '优化性能', completed: false, priority: 'low' }
])

const addTask = () => {
  const newTask = {
    id: tasks.value.length + 1,
    title: `新任务 ${tasks.value.length + 1}`,
    completed: false,
    priority: 'medium'
  }
  tasks.value.push(newTask)
}

const teamMembers = ref([
  { id: 1, name: '张三', role: '前端工程师', avatar: '👨‍💻' },
  { id: 2, name: '李四', role: '后端工程师', avatar: '👩‍💻' },
  { id: 3, name: '王五', role: 'UI 设计师', avatar: '🎨' },
  { id: 4, name: '赵六', role: '产品经理', avatar: '📊' }
])

const files = ref([
  { id: 1, name: 'design.fig', size: '2.5 MB', icon: '🎨' },
  { id: 2, name: 'report.pdf', size: '1.2 MB', icon: '📄' },
  { id: 3, name: 'data.xlsx', size: '856 KB', icon: '📊' },
  { id: 4, name: 'image.png', size: '423 KB', icon: '🖼️' }
])
</script>

<style scoped>
/* 页面头部 */
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
  font-size: 14px;
  line-height: 1.6;
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

.comparison-item pre {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
  margin: 16px 0;
}

.comparison-note {
  margin-top: 16px;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
}

/* 选项卡演示 */
.tabs-demo {
  margin-bottom: 20px;
}

.tabs-nav {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  border-bottom: 2px solid #e0e0e0;
  flex-wrap: wrap;
}

.tab-button {
  padding: 12px 24px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: #666;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s ease;
}

.tab-button:hover {
  color: #4285f4;
}

.tab-button.active {
  color: #4285f4;
  border-bottom-color: #4285f4;
}

.tabs-content {
  min-height: 300px;
}

.tab-panel {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tab-panel h3 {
  margin-top: 0;
  color: #333;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.stat-value {
  font-size: 32px;
  font-weight: bold;
  color: #4285f4;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 24px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  margin-top: 20px;
}

.avatar {
  font-size: 64px;
}

.info h4 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 20px;
}

.info p {
  margin: 4px 0;
  color: #666;
  font-size: 15px;
}

.settings-list {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-top: 20px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

/* 缓存对比 */
.cache-comparison {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.comparison-section h4 {
  margin-top: 0;
  margin-bottom: 8px;
  color: #333;
}

.hint {
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
}

.tab-content {
  min-height: 250px;
}

.form-panel,
.list-panel {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
}

.form-input {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 12px;
  box-sizing: border-box;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #4285f4;
}

.warning {
  background: rgba(234,67,53,0.1);
  color: #c5221f;
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
  margin-top: 12px;
}

.success {
  background: rgba(52,168,83,0.1);
  color: #188038;
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
  margin-top: 12px;
}

.list-panel ul {
  margin: 16px 0;
  padding-left: 20px;
}

.list-panel li {
  padding: 8px 0;
  color: #333;
}

/* 生命周期演示 */
.lifecycle-demo {
  margin-bottom: 20px;
}

.lifecycle-content {
  min-height: 300px;
  margin-bottom: 20px;
}

.lifecycle-panel {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}

.lifecycle-panel h4 {
  margin-top: 0;
  color: #333;
}

.timer-display,
.counter-display {
  font-size: 48px;
  font-weight: bold;
  color: #4285f4;
  margin: 24px 0;
}

.lifecycle-hint {
  font-size: 14px;
  color: #666;
  margin: 8px 0;
}

.lifecycle-log {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
}

.lifecycle-log h4 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
}

.log-container {
  background: white;
  border-radius: 8px;
  padding: 12px;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 12px;
}

.log-item {
  display: flex;
  gap: 12px;
  padding: 8px;
  font-size: 13px;
  border-bottom: 1px solid #e0e0e0;
}

.log-item:last-child {
  border-bottom: none;
}

.log-time {
  color: #999;
  font-family: monospace;
}

.log-type {
  flex: 1;
}

.log-mounted {
  color: #4285f4;
}

.log-activated {
  color: #34a853;
}

.log-deactivated {
  color: #fbbc04;
}

/* 异步组件演示 */
.async-demo {
  margin-bottom: 20px;
}

.async-controls {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.async-content {
  min-height: 350px;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-state {
  text-align: center;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e0e0e0;
  border-top-color: #4285f4;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-state p {
  color: #666;
  font-size: 15px;
}

.component-panel {
  width: 100%;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.component-panel h4 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
}

.component-info {
  margin-top: 16px;
  color: #34a853;
  font-weight: 500;
}

.mock-chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 200px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  gap: 16px;
}

.chart-bar {
  flex: 1;
  background: linear-gradient(135deg, #4285f4 0%, #1a73e8 100%);
  border-radius: 4px 4px 0 0;
  transition: all 0.3s ease;
}

.chart-bar:hover {
  opacity: 0.8;
}

.mock-editor {
  background: white;
  border-radius: 12px;
  padding: 16px;
  text-align: left;
}

.editor-toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
}

.editor-toolbar button {
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.editor-toolbar button:hover {
  background: #f8f9fa;
}

.editor-area {
  width: 100%;
  min-height: 150px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  resize: vertical;
  box-sizing: border-box;
}

.editor-area:focus {
  outline: none;
  border-color: #4285f4;
}

.mock-video {
  background: white;
  border-radius: 12px;
  padding: 16px;
}

.video-screen {
  background: #000;
  color: white;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  border-radius: 8px;
  margin-bottom: 12px;
}

.video-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.video-controls button {
  padding: 8px 12px;
  border: none;
  background: #f8f9fa;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.video-controls button:hover {
  background: #e8eaed;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #4285f4;
  transition: width 0.3s ease;
}

.empty-state {
  text-align: center;
  color: #999;
  font-size: 16px;
}

/* 项目管理面板 */
.project-panel {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
}

.panel-header {
  background: linear-gradient(135deg, #4285f4 0%, #1a73e8 100%);
  color: white;
  padding: 20px;
}

.panel-header h4 {
  margin: 0 0 16px 0;
  font-size: 20px;
}

.panel-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.panel-tab {
  padding: 10px 20px;
  border: 2px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.1);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.panel-tab:hover {
  background: rgba(255,255,255,0.2);
}

.panel-tab.active {
  background: white;
  color: #4285f4;
  border-color: white;
}

.panel-body {
  padding: 24px;
  min-height: 400px;
}

.panel-content {
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.panel-content h5 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  font-size: 18px;
}

.task-list {
  margin-bottom: 20px;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.2s ease;
}

.task-item:hover {
  background: #e8eaed;
}

.task-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.task-item span {
  flex: 1;
}

.task-item .completed {
  text-decoration: line-through;
  color: #999;
}

.priority {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.priority-high {
  background: rgba(234,67,53,0.1);
  color: #c5221f;
}

.priority-medium {
  background: rgba(251,188,4,0.1);
  color: #f29900;
}

.priority-low {
  background: rgba(66,133,244,0.1);
  color: #1a73e8;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}

.team-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.2s ease;
}

.team-card:hover {
  background: #e8eaed;
  transform: translateY(-2px);
}

.member-avatar {
  font-size: 48px;
  margin-bottom: 12px;
}

.member-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.member-role {
  font-size: 13px;
  color: #666;
}

.file-list {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 12px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.2s ease;
}

.file-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.file-icon {
  font-size: 24px;
}

.file-name {
  flex: 1;
  color: #333;
  font-size: 14px;
}

.file-size {
  color: #999;
  font-size: 13px;
}

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

.analytics-card {
  background: linear-gradient(135deg, #e8f0fe 0%, #f1f3f4 100%);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}

.analytics-value {
  font-size: 48px;
  font-weight: bold;
  color: #4285f4;
  margin-bottom: 8px;
}

.analytics-label {
  font-size: 14px;
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

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66,133,244,0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background: #f1f3f4;
  color: #333;
}

.btn-secondary:hover {
  background: #e8eaed;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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

/* 响应式 */
@media (max-width: 768px) {
  .comparison-grid,
  .cache-comparison {
    grid-template-columns: 1fr;
  }

  .demo-counter {
    grid-template-columns: 1fr;
  }

  .dashboard-grid,
  .team-grid,
  .analytics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
