<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第68课：自定义指令</h1>
      <p class="lesson-subtitle">掌握 Vue3 自定义指令，封装可复用的 DOM 操作逻辑</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 50 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <div class="lesson-content">

      <!-- 1. 什么是自定义指令 -->
      <section class="content-section">
        <h2>1️⃣ 什么是自定义指令？</h2>
        <p>自定义指令是 Vue 提供的一种直接操作 DOM 的机制。当你需要对底层 DOM 进行直接控制时，自定义指令就派上用场了。</p>

        <div class="info-box">
          <h3>为什么需要自定义指令</h3>
          <ul>
            <li><strong>封装 DOM 操作：</strong>将常用的 DOM 操作逻辑封装成可复用的指令</li>
            <li><strong>提高代码复用：</strong>一次定义，多处使用，避免重复代码</li>
            <li><strong>语义化：</strong>通过指令名称清晰表达意图，提升代码可读性</li>
            <li><strong>简化开发：</strong>常用功能如聚焦、权限控制、懒加载等一次封装永久受益</li>
          </ul>
        </div>

        <div class="comparison-grid">
          <div class="comparison-card">
            <h4>❌ 不使用指令</h4>
            <pre><code>// 每个组件都要写
onMounted(() => {
  inputRef.value?.focus()
})

// 权限控制重复代码
if (!hasPermission('admin')) {
  element.remove()
}</code></pre>
            <p class="comparison-note">代码重复，难以维护</p>
          </div>

          <div class="comparison-card highlight">
            <h4>✅ 使用指令</h4>
            <pre><code>// 一次定义
const vFocus = {
  mounted: (el) => el.focus()
}

// 到处使用
&lt;input v-focus /&gt;
&lt;button v-permission="['admin']"&gt;</code></pre>
            <p class="comparison-note">简洁优雅，易于复用</p>
          </div>
        </div>

        <div class="info-box">
          <h3>指令注册方式</h3>
          <div class="registration-methods">
            <div class="method-card">
              <h4>全局注册</h4>
              <pre><code>// main.js
const app = createApp(App)

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

// 所有组件都可以使用
&lt;input v-focus /&gt;</code></pre>
            </div>

            <div class="method-card">
              <h4>局部注册 (script setup)</h4>
              <pre><code>// 组件内
&lt;script setup&gt;
// 必须使用 v 前缀
const vFocus = {
  mounted(el) {
    el.focus()
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;input v-focus /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. 指令生命周期钩子 -->
      <section class="content-section">
        <h2>2️⃣ 指令生命周期钩子</h2>
        <p>自定义指令有 7 个生命周期钩子，它们在元素的不同阶段被调用。</p>

        <div class="lifecycle-diagram">
          <div class="lifecycle-phase">
            <div class="phase-title">创建阶段</div>
            <div class="hook-card created">
              <strong>created</strong>
              <span>在绑定元素的属性或事件监听器被应用之前调用</span>
            </div>
            <div class="hook-card before-mount">
              <strong>beforeMount</strong>
              <span>在元素被插入到 DOM 之前调用</span>
            </div>
            <div class="hook-card mounted">
              <strong>mounted</strong>
              <span>在绑定元素的父组件挂载后调用</span>
            </div>
          </div>

          <div class="lifecycle-phase">
            <div class="phase-title">更新阶段</div>
            <div class="hook-card before-update">
              <strong>beforeUpdate</strong>
              <span>在包含组件的 VNode 更新之前调用</span>
            </div>
            <div class="hook-card updated">
              <strong>updated</strong>
              <span>在包含组件的 VNode 及其子组件的 VNode 更新后调用</span>
            </div>
          </div>

          <div class="lifecycle-phase">
            <div class="phase-title">销毁阶段</div>
            <div class="hook-card before-unmount">
              <strong>beforeUnmount</strong>
              <span>在绑定元素的父组件卸载之前调用</span>
            </div>
            <div class="hook-card unmounted">
              <strong>unmounted</strong>
              <span>在绑定元素的父组件卸载后调用</span>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 生命周期演示</h3>
          <div class="demo-controls">
            <button @click="showLifecycle = !showLifecycle" class="btn btn-primary">
              {{ showLifecycle ? '卸载元素' : '挂载元素' }}
            </button>
            <button @click="lifecycleCount++" class="btn btn-secondary">
              更新元素 ({{ lifecycleCount }})
            </button>
            <button @click="lifecycleLogs = []" class="btn btn-secondary">清空日志</button>
          </div>

          <div class="lifecycle-demo-container">
            <div class="demo-element-wrapper">
              <transition name="fade">
                <div v-if="showLifecycle" v-lifecycle:[lifecycleCount] class="lifecycle-element">
                  <div class="element-icon">🎯</div>
                  <h4>监听元素</h4>
                  <p>计数值: {{ lifecycleCount }}</p>
                </div>
              </transition>
            </div>

            <div class="lifecycle-logger">
              <div class="logger-header">
                <span>📋 生命周期日志</span>
                <span class="log-count">{{ lifecycleLogs.length }} 条记录</span>
              </div>
              <div class="logger-content">
                <div v-if="lifecycleLogs.length === 0" class="logger-empty">
                  <div class="empty-icon">⏳</div>
                  <p>等待生命周期事件...</p>
                </div>
                <div v-else class="log-list">
                  <div v-for="(log, index) in lifecycleLogs" :key="index" class="log-entry">
                    <span class="log-index">{{ index + 1 }}</span>
                    <span class="log-time">{{ log.time }}</span>
                    <span class="log-hook" :style="{ color: getLogColor(log.hook) }">
                      {{ log.hook }}
                    </span>
                    <span class="log-message">{{ log.message }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="info-box">
          <h3>钩子函数参数</h3>
          <p>所有钩子函数都接收以下参数：</p>
          <div class="params-grid">
            <div class="param-card">
              <code>el</code>
              <span>指令绑定的 DOM 元素</span>
            </div>
            <div class="param-card">
              <code>binding</code>
              <span>包含指令信息的对象（value, arg, modifiers 等）</span>
            </div>
            <div class="param-card">
              <code>vnode</code>
              <span>当前元素的虚拟节点</span>
            </div>
            <div class="param-card">
              <code>prevVnode</code>
              <span>上一个虚拟节点（仅在更新钩子中可用）</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. v-focus：自动聚焦指令 -->
      <section class="content-section">
        <h2>3️⃣ v-focus - 自动聚焦指令</h2>
        <p>最简单也最实用的自定义指令之一，让输入框在挂载时自动获得焦点。</p>

        <div class="demo-box">
          <h3>🎯 效果演示</h3>
          <div class="demo-controls">
            <button @click="showFocusDemo = !showFocusDemo" class="btn btn-primary">
              {{ showFocusDemo ? '隐藏演示' : '显示演示' }}
            </button>
          </div>

          <transition name="slide-fade">
            <div v-if="showFocusDemo" class="focus-demo-grid">
              <div class="focus-demo-card">
                <div class="demo-label">
                  <span class="status-badge normal">普通输入框</span>
                </div>
                <input
                  type="text"
                  placeholder="需要手动点击才能聚焦"
                  class="demo-input"
                />
                <p class="demo-hint">点击输入框才能输入</p>
              </div>

              <div class="focus-demo-card highlight">
                <div class="demo-label">
                  <span class="status-badge auto">v-focus 输入框</span>
                </div>
                <input
                  v-focus
                  type="text"
                  placeholder="自动聚焦，立即可输入！"
                  class="demo-input focused"
                />
                <p class="demo-hint success">✨ 自动获得焦点，立即可输入</p>
              </div>
            </div>
          </transition>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 实现代码</span>
          </div>
          <pre><code>// 定义指令
const vFocus = {
  mounted(el) {
    // 元素挂载后自动聚焦
    el.focus()
  }
}

// 使用指令
&lt;template&gt;
  &lt;input v-focus type="text" placeholder="自动聚焦" /&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div class="use-cases">
          <h4>📌 使用场景</h4>
          <div class="cases-grid">
            <div class="case-item">
              <span class="case-icon">🔍</span>
              <strong>搜索框</strong>
              <p>页面加载后立即可以搜索</p>
            </div>
            <div class="case-item">
              <span class="case-icon">✍️</span>
              <strong>表单首项</strong>
              <p>提升表单填写效率</p>
            </div>
            <div class="case-item">
              <span class="case-icon">💬</span>
              <strong>聊天输入</strong>
              <p>打开聊天框立即输入</p>
            </div>
            <div class="case-item">
              <span class="case-icon">🎫</span>
              <strong>弹窗输入</strong>
              <p>模态框打开后自动聚焦</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. v-loading：加载状态指令 -->
      <section class="content-section">
        <h2>4️⃣ v-loading - 加载状态指令</h2>
        <p>为任何元素添加加载遮罩层，提供统一的加载体验。</p>

        <div class="demo-box">
          <h3>🎯 效果演示</h3>
          <div class="demo-controls">
            <button @click="isLoading = !isLoading" class="btn btn-primary">
              {{ isLoading ? '停止加载' : '开始加载' }}
            </button>
            <button @click="simulateRequest" class="btn btn-secondary">
              模拟 API 请求
            </button>
          </div>

          <div class="loading-demo-wrapper">
            <div v-loading="isLoading" class="data-container">
              <div class="data-header">
                <h4>📊 数据列表</h4>
                <span class="data-count">{{ dataItems.length }} 项</span>
              </div>
              <div class="data-list">
                <div v-for="item in dataItems" :key="item.id" class="data-item">
                  <div class="item-avatar">{{ item.emoji }}</div>
                  <div class="item-content">
                    <div class="item-title">{{ item.title }}</div>
                    <div class="item-desc">{{ item.description }}</div>
                  </div>
                  <div class="item-badge">{{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 实现代码</span>
          </div>
          <pre><code>// 定义指令
const vLoading = {
  mounted(el, binding) {
    if (binding.value) {
      appendLoading(el)
    }
  },
  updated(el, binding) {
    if (binding.value && !el.querySelector('.loading-mask')) {
      appendLoading(el)
    } else if (!binding.value) {
      removeLoading(el)
    }
  },
  unmounted(el) {
    removeLoading(el)
  }
}

function appendLoading(el) {
  const mask = document.createElement('div')
  mask.className = 'loading-mask'
  mask.innerHTML = `
    &lt;div class="loading-spinner"&gt;&lt;/div&gt;
    &lt;div class="loading-text"&gt;加载中...&lt;/div&gt;
  `
  el.style.position = 'relative'
  el.appendChild(mask)
}

function removeLoading(el) {
  const mask = el.querySelector('.loading-mask')
  if (mask) mask.remove()
}

// 使用指令
&lt;div v-loading="isLoading"&gt;
  &lt;!-- 你的内容 --&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 5. v-clickoutside：点击外部指令 -->
      <section class="content-section">
        <h2>5️⃣ v-clickoutside - 点击外部检测</h2>
        <p>检测用户点击元素外部的行为，常用于关闭下拉菜单、弹窗等交互。</p>

        <div class="demo-box">
          <h3>🎯 效果演示</h3>
          <p class="demo-hint">💡 点击菜单外部的任意位置会自动关闭菜单</p>

          <div class="clickoutside-demo">
            <div class="dropdown-wrapper">
              <button @click="showDropdown = !showDropdown" class="dropdown-trigger">
                <span>{{ selectedOption || '选择一个选项' }}</span>
                <span class="dropdown-arrow">{{ showDropdown ? '▲' : '▼' }}</span>
              </button>

              <transition name="dropdown">
                <div
                  v-if="showDropdown"
                  v-clickoutside="() => showDropdown = false"
                  class="dropdown-menu"
                >
                  <div class="dropdown-header">
                    <span>选择选项</span>
                    <button @click="showDropdown = false" class="close-btn">✕</button>
                  </div>
                  <div class="dropdown-body">
                    <div
                      v-for="option in dropdownOptions"
                      :key="option.value"
                      @click="handleSelect(option); showDropdown = false"
                      class="dropdown-item"
                      :class="{ active: selectedOption === option.label }"
                    >
                      <span class="option-icon">{{ option.icon }}</span>
                      <div class="option-content">
                        <div class="option-label">{{ option.label }}</div>
                        <div class="option-desc">{{ option.desc }}</div>
                      </div>
                      <span v-if="selectedOption === option.label" class="check-icon">✓</span>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <transition name="fade">
              <div v-if="selectedOption" class="selection-result">
                <span class="result-icon">✅</span>
                <span>当前选择：<strong>{{ selectedOption }}</strong></span>
              </div>
            </transition>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 实现代码</span>
          </div>
          <pre><code>// 定义指令
const vClickoutside = {
  mounted(el, binding) {
    el._clickOutside = (event) => {
      // 检查点击是否在元素外部
      if (!(el === event.target || el.contains(event.target))) {
        // 执行传入的回调函数
        binding.value()
      }
    }
    // 延迟绑定，避免立即触发
    setTimeout(() => {
      document.addEventListener('click', el._clickOutside)
    }, 0)
  },
  unmounted(el) {
    // 清理事件监听
    document.removeEventListener('click', el._clickOutside)
    delete el._clickOutside
  }
}

// 使用指令
&lt;div v-clickoutside="handleClose"&gt;
  &lt;!-- 下拉菜单内容 --&gt;
&lt;/div&gt;</code></pre>
        </div>

        <div class="use-cases">
          <h4>📌 使用场景</h4>
          <div class="cases-grid">
            <div class="case-item">
              <span class="case-icon">📋</span>
              <strong>下拉菜单</strong>
              <p>点击外部关闭菜单</p>
            </div>
            <div class="case-item">
              <span class="case-icon">🎨</span>
              <strong>颜色选择器</strong>
              <p>选择完成后自动关闭</p>
            </div>
            <div class="case-item">
              <span class="case-icon">📅</span>
              <strong>日期选择器</strong>
              <p>点击外部收起面板</p>
            </div>
            <div class="case-item">
              <span class="case-icon">🔔</span>
              <strong>通知面板</strong>
              <p>点击其他区域关闭</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. v-permission：权限控制指令 -->
      <section class="content-section">
        <h2>6️⃣ v-permission - 权限控制指令</h2>
        <p>根据用户权限动态控制元素的显示与隐藏，实现细粒度的权限管理。</p>

        <div class="demo-box">
          <h3>🎯 效果演示</h3>
          <div class="role-switcher">
            <span class="switcher-label">当前角色：</span>
            <div class="role-options">
              <label
                v-for="role in roles"
                :key="role.value"
                class="role-option"
                :class="{ active: userRole === role.value }"
              >
                <input type="radio" v-model="userRole" :value="role.value" />
                <span class="role-icon">{{ role.icon }}</span>
                <span class="role-name">{{ role.name }}</span>
              </label>
            </div>
          </div>

          <div class="permission-showcase">
            <div class="permission-card public">
              <div class="card-badge">🌍 公开</div>
              <div class="card-icon">📖</div>
              <h4>公开内容</h4>
              <p>所有人都可以看到这个内容区域</p>
              <div class="card-footer">
                <span class="access-info">✓ 无需权限</span>
              </div>
            </div>

            <div v-permission="['user', 'admin']" class="permission-card user">
              <div class="card-badge">👤 用户</div>
              <div class="card-icon">📝</div>
              <h4>用户内容</h4>
              <p>需要登录用户权限才能看到</p>
              <div class="card-footer">
                <button class="card-action">编辑资料</button>
              </div>
            </div>

            <div v-permission="['admin']" class="permission-card admin">
              <div class="card-badge">⚡ 管理员</div>
              <div class="card-icon">⚙️</div>
              <h4>管理员内容</h4>
              <p>仅管理员可见的危险操作区域</p>
              <div class="card-footer">
                <button class="card-action danger">删除数据</button>
                <button class="card-action danger">重置系统</button>
              </div>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 实现代码</span>
          </div>
          <pre><code>// 定义指令
const vPermission = {
  mounted(el, binding) {
    checkPermission(el, binding)
  },
  updated(el, binding) {
    checkPermission(el, binding)
  }
}

function checkPermission(el, binding) {
  const requiredPermissions = binding.value
  const userRole = getCurrentUserRole() // 从 store 获取用户角色

  // 检查用户是否有所需权限
  const hasPermission = requiredPermissions.includes(userRole)

  if (!hasPermission) {
    // 方式1：移除元素（完全隐藏）
    el.parentNode?.removeChild(el)

    // 方式2：display: none（保留在 DOM 中）
    // el.style.display = 'none'
  }
}

// 使用指令
&lt;button v-permission="['admin']"&gt;删除&lt;/button&gt;
&lt;div v-permission="['user', 'admin']"&gt;用户内容&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 7. v-copy：复制指令 -->
      <section class="content-section">
        <h2>7️⃣ v-copy - 一键复制指令</h2>
        <p>点击元素即可将指定文本复制到剪贴板，提升用户体验。</p>

        <div class="demo-box">
          <h3>🎯 效果演示</h3>

          <div class="copy-showcase">
            <div class="copy-section">
              <h4>命令行指令</h4>
              <div class="copy-item">
                <code class="copy-code">npm install vue@next</code>
                <button v-copy="'npm install vue@next'" class="copy-btn">
                  <span class="copy-icon">📋</span>
                  <span>复制</span>
                </button>
              </div>
              <div class="copy-item">
                <code class="copy-code">yarn add vue@next</code>
                <button v-copy="'yarn add vue@next'" class="copy-btn">
                  <span class="copy-icon">📋</span>
                  <span>复制</span>
                </button>
              </div>
            </div>

            <div class="copy-section">
              <h4>代码片段</h4>
              <div class="copy-item code-block">
                <pre class="copy-code">{{ sampleCode }}</pre>
                <button v-copy="sampleCode" class="copy-btn">
                  <span class="copy-icon">📋</span>
                  <span>复制代码</span>
                </button>
              </div>
            </div>

            <div class="copy-section">
              <h4>链接地址</h4>
              <div class="copy-item">
                <code class="copy-code">https://vuejs.org/guide/introduction.html</code>
                <button v-copy="'https://vuejs.org/guide/introduction.html'" class="copy-btn">
                  <span class="copy-icon">🔗</span>
                  <span>复制链接</span>
                </button>
              </div>
            </div>
          </div>

          <transition name="fade">
            <div v-if="copySuccess" class="copy-toast">
              <span class="toast-icon">✅</span>
              <span>{{ copySuccess }}</span>
            </div>
          </transition>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 实现代码</span>
          </div>
          <pre><code>// 定义指令
const vCopy = {
  mounted(el, binding) {
    el.addEventListener('click', async () => {
      const text = binding.value

      try {
        // 优先使用现代 Clipboard API
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(text)
          showMessage('复制成功！')
        } else {
          // 降级方案
          fallbackCopy(text)
        }
      } catch (err) {
        fallbackCopy(text)
      }
    })
  }
}

// 降级复制方案（兼容旧浏览器）
function fallbackCopy(text) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()

  try {
    document.execCommand('copy')
    showMessage('复制成功！')
  } catch (err) {
    showMessage('复制失败！')
  }

  document.body.removeChild(textarea)
}

// 使用指令
&lt;button v-copy="textContent"&gt;复制&lt;/button&gt;</code></pre>
        </div>
      </section>

      <!-- 8. v-lazy：图片懒加载指令 -->
      <section class="content-section">
        <h2>8️⃣ v-lazy - 图片懒加载指令</h2>
        <p>使用 Intersection Observer API 实现图片懒加载，只有当图片进入视口时才开始加载，大幅提升页面性能。</p>

        <div class="info-box">
          <h3>懒加载的优势</h3>
          <div class="advantages-grid">
            <div class="advantage-item">
              <span class="advantage-icon">⚡</span>
              <strong>加载速度快</strong>
              <p>首屏只加载可见图片</p>
            </div>
            <div class="advantage-item">
              <span class="advantage-icon">💰</span>
              <strong>节省流量</strong>
              <p>未查看的图片不消耗流量</p>
            </div>
            <div class="advantage-item">
              <span class="advantage-icon">📱</span>
              <strong>性能优化</strong>
              <p>减少同时加载的资源数量</p>
            </div>
            <div class="advantage-item">
              <span class="advantage-icon">✨</span>
              <strong>用户体验</strong>
              <p>渐进式加载，体验更流畅</p>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 效果演示</h3>
          <p class="demo-hint">👇 向下滚动查看图片懒加载效果（图片进入视口时才会加载）</p>

          <div class="lazy-container">
            <div v-for="i in 8" :key="i" class="lazy-item">
              <div class="lazy-header">
                <h4>图片 {{ i }}</h4>
                <span v-if="lazyLoadedImages[i]" class="loaded-badge">✅ 已加载</span>
                <span v-else class="loading-badge">⏳ 等待加载</span>
              </div>
              <img
                v-lazy="`https://picsum.photos/600/400?random=${i}`"
                :alt="`示例图片 ${i}`"
                class="lazy-image"
              />
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>💻 实现代码</span>
          </div>
          <pre><code>// 定义指令
const vLazy = {
  mounted(el, binding) {
    // 创建 Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 图片进入视口，加载真实图片
            el.src = binding.value

            // 加载完成后添加淡入效果
            el.onload = () => {
              el.classList.add('loaded')
            }

            // 停止观察
            observer.unobserve(el)
          }
        })
      },
      {
        // 提前 100px 开始加载
        rootMargin: '100px',
        // 10% 进入视口就触发
        threshold: 0.1
      }
    )

    // 开始观察
    observer.observe(el)

    // 保存 observer 以便卸载时清理
    el._lazyObserver = observer
  },
  unmounted(el) {
    if (el._lazyObserver) {
      el._lazyObserver.disconnect()
      delete el._lazyObserver
    }
  }
}

// 使用指令
&lt;img v-lazy="imageUrl" alt="图片" /&gt;

// CSS 淡入效果
&lt;style&gt;
img {
  opacity: 0;
  transition: opacity 0.3s;
}
img.loaded {
  opacity: 1;
}
&lt;/style&gt;</code></pre>
        </div>
      </section>

      <!-- 课程总结 -->
      <section class="content-section">
        <h2>📚 课程总结</h2>

        <div class="summary-grid">
          <div class="summary-card">
            <div class="summary-icon">🎯</div>
            <h3>核心概念</h3>
            <ul>
              <li>自定义指令用于封装 DOM 操作</li>
              <li>使用 v 前缀命名局部指令</li>
              <li>支持参数和修饰符</li>
              <li>提高代码复用性和可维护性</li>
            </ul>
          </div>

          <div class="summary-card">
            <div class="summary-icon">🔄</div>
            <h3>生命周期</h3>
            <ul>
              <li><code>created</code> - 元素创建时</li>
              <li><code>mounted</code> - 挂载后（常用）</li>
              <li><code>updated</code> - 更新后（常用）</li>
              <li><code>unmounted</code> - 卸载后（清理）</li>
            </ul>
          </div>

          <div class="summary-card">
            <div class="summary-icon">💡</div>
            <h3>实用指令</h3>
            <ul>
              <li><code>v-focus</code> - 自动聚焦</li>
              <li><code>v-loading</code> - 加载状态</li>
              <li><code>v-clickoutside</code> - 点击外部</li>
              <li><code>v-permission</code> - 权限控制</li>
              <li><code>v-copy</code> - 复制文本</li>
              <li><code>v-lazy</code> - 图片懒加载</li>
            </ul>
          </div>
        </div>

        <div class="key-points">
          <h3>💡 关键要点</h3>
          <div class="points-grid">
            <div class="point-card">
              <strong>1. 何时使用</strong>
              <p>需要直接操作 DOM 且逻辑可复用时</p>
            </div>
            <div class="point-card">
              <strong>2. 生命周期</strong>
              <p>mounted 和 updated 最常用，unmounted 用于清理</p>
            </div>
            <div class="point-card">
              <strong>3. 内存泄漏</strong>
              <p>在 unmounted 中清理事件监听和定时器</p>
            </div>
            <div class="point-card">
              <strong>4. 性能优化</strong>
              <p>避免在指令中执行耗时操作</p>
            </div>
          </div>
        </div>

        <div class="next-lesson">
          <div class="next-lesson-badge">下节课预告</div>
          <h3>🎓 第69课：性能优化技巧</h3>
          <p>学习 Vue3 应用的性能优化策略，包括虚拟滚动、组件懒加载、响应式优化、打包优化等高级技巧</p>
          <div class="next-topics">
            <span class="topic-tag">虚拟滚动</span>
            <span class="topic-tag">组件懒加载</span>
            <span class="topic-tag">响应式优化</span>
            <span class="topic-tag">打包优化</span>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 生命周期演示
const showLifecycle = ref(false)
const lifecycleCount = ref(0)
const lifecycleLogs = ref([])

const vLifecycle = {
  created() { addLog('created', '元素创建') },
  beforeMount() { addLog('beforeMount', '即将挂载到 DOM') },
  mounted() { addLog('mounted', '已挂载到 DOM') },
  beforeUpdate() { addLog('beforeUpdate', '即将更新') },
  updated() { addLog('updated', '更新完成') },
  beforeUnmount() { addLog('beforeUnmount', '即将卸载') },
  unmounted() { addLog('unmounted', '已从 DOM 卸载') }
}

function addLog(hook, message) {
  const time = new Date().toLocaleTimeString('zh-CN', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  lifecycleLogs.value.push({ hook, message, time })
  if (lifecycleLogs.value.length > 30) {
    lifecycleLogs.value.shift()
  }
}

function getLogColor(hook) {
  const colors = {
    created: '#9333ea',
    beforeMount: '#ea580c',
    mounted: '#16a34a',
    beforeUpdate: '#0891b2',
    updated: '#2563eb',
    beforeUnmount: '#dc2626',
    unmounted: '#64748b'
  }
  return colors[hook] || '#666'
}

// v-focus 演示
const showFocusDemo = ref(false)
const vFocus = {
  mounted: (el) => el.focus()
}

// v-loading 演示
const isLoading = ref(false)
const dataItems = ref([
  { id: 1, emoji: '📊', title: '数据分析报告', description: '2024年第一季度业绩分析', status: '已完成' },
  { id: 2, emoji: '📝', title: '项目文档', description: 'Vue3 学习平台开发文档', status: '进行中' },
  { id: 3, emoji: '🎯', title: '任务清单', description: '本周待办事项列表', status: '待处理' },
  { id: 4, emoji: '💼', title: '会议记录', description: '团队周例会纪要', status: '已完成' }
])

const vLoading = {
  mounted(el, binding) {
    if (binding.value) appendLoading(el)
  },
  updated(el, binding) {
    if (binding.value && !el.querySelector('.loading-mask')) {
      appendLoading(el)
    } else if (!binding.value) {
      removeLoading(el)
    }
  },
  unmounted(el) {
    removeLoading(el)
  }
}

function appendLoading(el) {
  const mask = document.createElement('div')
  mask.className = 'loading-mask'
  mask.innerHTML = `
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <div class="loading-text">加载中...</div>
    </div>
  `
  el.style.position = 'relative'
  el.appendChild(mask)
}

function removeLoading(el) {
  el.querySelector('.loading-mask')?.remove()
}

function simulateRequest() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}

// v-clickoutside 演示
const showDropdown = ref(false)
const selectedOption = ref('')
const dropdownOptions = [
  { value: '1', label: '选项 1', icon: '🎯', desc: '这是第一个选项' },
  { value: '2', label: '选项 2', icon: '⚡', desc: '这是第二个选项' },
  { value: '3', label: '选项 3', icon: '🔥', desc: '这是第三个选项' },
  { value: '4', label: '选项 4', icon: '✨', desc: '这是第四个选项' }
]

const vClickoutside = {
  mounted(el, binding) {
    el._clickOutside = (e) => {
      if (!el.contains(e.target)) binding.value()
    }
    setTimeout(() => document.addEventListener('click', el._clickOutside), 0)
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutside)
    delete el._clickOutside
  }
}

function handleSelect(option) {
  selectedOption.value = option.label
}

// v-permission 演示
const userRole = ref('guest')
const roles = [
  { value: 'guest', name: '访客', icon: '👤' },
  { value: 'user', name: '用户', icon: '👨‍💼' },
  { value: 'admin', name: '管理员', icon: '👑' }
]

const vPermission = {
  mounted(el, binding) { checkPermission(el, binding) },
  updated(el, binding) { checkPermission(el, binding) }
}

function checkPermission(el, binding) {
  el.style.display = binding.value.includes(userRole.value) ? '' : 'none'
}

// v-copy 演示
const copySuccess = ref('')
const sampleCode = `const app = createApp({
  setup() {
    return { message: 'Hello Vue3!' }
  }
})`

const vCopy = {
  mounted(el, binding) {
    el.addEventListener('click', async () => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(binding.value)
          showCopyMessage('复制成功！')
        } else {
          fallbackCopy(binding.value)
        }
      } catch (err) {
        fallbackCopy(binding.value)
      }
    })
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()

  try {
    document.execCommand('copy')
    showCopyMessage('复制成功！')
  } catch {
    showCopyMessage('复制失败！')
  }

  document.body.removeChild(textarea)
}

function showCopyMessage(msg) {
  copySuccess.value = msg
  setTimeout(() => copySuccess.value = '', 2000)
}

// v-lazy 演示
const lazyLoadedImages = reactive({})

const vLazy = {
  mounted(el, binding) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        el.src = binding.value
        const index = binding.value.match(/random=(\d+)/)?.[1]
        if (index) lazyLoadedImages[index] = true
        el.classList.add('loaded')
        observer.unobserve(el)
      }
    }, {
      rootMargin: '100px',
      threshold: 0.1
    })

    observer.observe(el)
    el._lazyObserver = observer
  },
  unmounted(el) {
    if (el._lazyObserver) {
      el._lazyObserver.disconnect()
      delete el._lazyObserver
    }
  }
}
</script>

<style scoped>
/* 对比卡片 */
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.comparison-card {
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.comparison-card.highlight {
  background: linear-gradient(135deg, #e8f0fe 0%, #f0e6ff 100%);
  border-color: #4285f4;
}

.comparison-card h4 {
  margin: 0 0 16px 0;
  font-size: 16px;
  color: #333;
}

.comparison-card pre {
  background: rgba(0,0,0,0.05);
  padding: 16px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

.comparison-note {
  margin: 12px 0 0 0;
  font-size: 14px;
  color: #666;
  font-style: italic;
}

/* 注册方式 */
.registration-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.method-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.method-card h4 {
  margin: 0 0 16px 0;
  color: #4285f4;
  font-size: 16px;
}

.method-card pre {
  background: rgba(0,0,0,0.05);
  padding: 16px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

/* 生命周期图示 */
.lifecycle-diagram {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 24px 0;
}

.lifecycle-phase {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.phase-title {
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
  padding-bottom: 12px;
  border-bottom: 2px solid #e0e0e0;
}

.hook-card {
  padding: 16px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid;
  margin-bottom: 12px;
}

.hook-card:last-child {
  margin-bottom: 0;
}

.hook-card strong {
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
}

.hook-card span {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

.hook-card.created { border-left-color: #9333ea; }
.hook-card.before-mount { border-left-color: #ea580c; }
.hook-card.mounted { border-left-color: #16a34a; }
.hook-card.before-update { border-left-color: #0891b2; }
.hook-card.updated { border-left-color: #2563eb; }
.hook-card.before-unmount { border-left-color: #dc2626; }
.hook-card.unmounted { border-left-color: #64748b; }

/* 生命周期演示 */
.demo-controls {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.lifecycle-demo-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .lifecycle-demo-container {
    grid-template-columns: 1fr;
  }
}

.demo-element-wrapper {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
}

.lifecycle-element {
  width: 100%;
  max-width: 300px;
  padding: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.element-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.lifecycle-element h4 {
  margin: 0 0 8px 0;
  font-size: 20px;
}

.lifecycle-element p {
  margin: 0;
  opacity: 0.9;
  font-size: 14px;
}

.lifecycle-logger {
  background: white;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  overflow: hidden;
}

.logger-header {
  padding: 16px 20px;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
}

.log-count {
  font-size: 12px;
  opacity: 0.8;
}

.logger-content {
  max-height: 300px;
  overflow-y: auto;
}

.logger-empty {
  padding: 60px 20px;
  text-align: center;
  color: #999;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.logger-empty p {
  margin: 0;
  font-style: italic;
}

.log-list {
  padding: 12px;
}

.log-entry {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 12px;
  font-family: 'Monaco', 'Menlo', monospace;
}

.log-entry:last-child {
  margin-bottom: 0;
}

.log-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #4285f4;
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: 11px;
}

.log-time {
  color: #666;
  min-width: 70px;
}

.log-hook {
  font-weight: 600;
  min-width: 120px;
}

.log-message {
  color: #666;
  flex: 1;
}

/* 参数网格 */
.params-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.param-card {
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #4285f4;
}

.param-card code {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #4285f4;
  margin-bottom: 8px;
}

.param-card span {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

/* Focus 演示 */
.focus-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 20px;
}

.focus-demo-card {
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.focus-demo-card.highlight {
  background: linear-gradient(135deg, #e8f0fe 0%, #f0e6ff 100%);
  border-color: #4285f4;
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.15);
}

.demo-label {
  margin-bottom: 16px;
}

.status-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.status-badge.normal {
  background: #e0e0e0;
  color: #666;
}

.status-badge.auto {
  background: linear-gradient(135deg, #4285f4 0%, #9333ea 100%);
  color: white;
}

.demo-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s;
  margin-bottom: 12px;
}

.demo-input:focus {
  outline: none;
  border-color: #4285f4;
  box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
}

.demo-input.focused {
  border-color: #4285f4;
  background: white;
}

.demo-hint {
  margin: 0;
  font-size: 13px;
  color: #666;
}

.demo-hint.success {
  color: #16a34a;
  font-weight: 500;
}

/* 代码盒子 */
.code-box {
  margin: 24px 0;
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
}

.code-header {
  padding: 12px 20px;
  background: #2d2d2d;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid #3d3d3d;
}

.code-box pre {
  margin: 0;
  padding: 24px;
  color: #d4d4d4;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

/* 使用场景 */
.use-cases {
  margin-top: 24px;
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f0fe 100%);
  border-radius: 12px;
}

.use-cases h4 {
  margin: 0 0 20px 0;
  font-size: 18px;
  color: #333;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.case-item {
  padding: 20px;
  background: white;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e0e0e0;
  transition: all 0.3s;
}

.case-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: #4285f4;
}

.case-icon {
  display: block;
  font-size: 32px;
  margin-bottom: 12px;
}

.case-item strong {
  display: block;
  font-size: 15px;
  color: #333;
  margin-bottom: 8px;
}

.case-item p {
  margin: 0;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

/* Loading 演示 */
.loading-demo-wrapper {
  margin-top: 20px;
}

.data-container {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  min-height: 300px;
  position: relative;
}

.data-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e0e0e0;
}

.data-header h4 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.data-count {
  padding: 4px 12px;
  background: #4285f4;
  color: white;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
}

.data-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.data-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s;
}

.data-item:hover {
  border-color: #4285f4;
  transform: translateX(4px);
}

.item-avatar {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.item-content {
  flex: 1;
}

.item-title {
  font-weight: 600;
  font-size: 15px;
  color: #333;
  margin-bottom: 4px;
}

.item-desc {
  font-size: 13px;
  color: #666;
}

.item-badge {
  padding: 6px 12px;
  background: #e8f0fe;
  color: #4285f4;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  z-index: 10;
  backdrop-filter: blur(4px);
}

.loading-content {
  text-align: center;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4285f4;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

/* Clickoutside 演示 */
.clickoutside-demo {
  margin-top: 20px;
  padding: 40px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.dropdown-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.dropdown-trigger {
  width: 100%;
  padding: 14px 20px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
}

.dropdown-trigger:hover {
  border-color: #4285f4;
}

.dropdown-arrow {
  color: #666;
  font-size: 12px;
  transition: transform 0.3s;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  overflow: hidden;
  z-index: 100;
}

.dropdown-header {
  padding: 16px 20px;
  background: linear-gradient(135deg, #4285f4 0%, #9333ea 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.close-btn {
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.close-btn:hover {
  background: rgba(255,255,255,0.3);
}

.dropdown-body {
  max-height: 300px;
  overflow-y: auto;
}

.dropdown-item {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid #f0f0f0;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #f8f9fa;
}

.dropdown-item.active {
  background: #e8f0fe;
}

.option-icon {
  font-size: 24px;
}

.option-content {
  flex: 1;
}

.option-label {
  font-weight: 600;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.option-desc {
  font-size: 12px;
  color: #666;
}

.check-icon {
  color: #16a34a;
  font-size: 18px;
  font-weight: 600;
}

.selection-result {
  padding: 16px 24px;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #2e7d32;
}

.result-icon {
  font-size: 20px;
}

/* Permission 演示 */
.role-switcher {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
}

.switcher-label {
  font-weight: 600;
  color: #333;
}

.role-options {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.role-option {
  position: relative;
  padding: 12px 20px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}

.role-option:hover {
  border-color: #4285f4;
  transform: translateY(-2px);
}

.role-option.active {
  background: linear-gradient(135deg, #4285f4 0%, #9333ea 100%);
  color: white;
  border-color: transparent;
}

.role-option input {
  position: absolute;
  opacity: 0;
}

.role-icon {
  font-size: 20px;
}

.role-name {
  font-weight: 600;
  font-size: 14px;
}

.permission-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.permission-card {
  padding: 24px;
  border-radius: 12px;
  border: 2px solid;
  position: relative;
  transition: all 0.3s;
}

.permission-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.permission-card.public {
  background: #f8f9fa;
  border-color: #e0e0e0;
}

.permission-card.user {
  background: linear-gradient(135deg, #e8f0fe 0%, #f0e6ff 100%);
  border-color: #4285f4;
}

.permission-card.admin {
  background: linear-gradient(135deg, #fce8e6 0%, #ffe6e6 100%);
  border-color: #ea4335;
}

.card-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 10px;
  background: rgba(0,0,0,0.1);
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.card-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.permission-card h4 {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #333;
}

.permission-card p {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.card-footer {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(0,0,0,0.1);
  padding-top: 16px;
}

.card-action {
  padding: 8px 16px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.card-action:hover {
  background: #357ae8;
}

.card-action.danger {
  background: #ea4335;
}

.card-action.danger:hover {
  background: #d33828;
}

.access-info {
  padding: 8px 16px;
  background: rgba(0,0,0,0.05);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: #666;
}

/* Copy 演示 */
.copy-showcase {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
}

.copy-section h4 {
  margin: 0 0 16px 0;
  font-size: 16px;
  color: #333;
}

.copy-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  margin-bottom: 12px;
}

.copy-item:last-child {
  margin-bottom: 0;
}

.copy-item.code-block {
  flex-direction: column;
  align-items: flex-start;
}

.copy-code {
  flex: 1;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  color: #333;
  word-break: break-all;
}

.copy-item.code-block .copy-code {
  width: 100%;
  background: rgba(0,0,0,0.05);
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 12px;
  line-height: 1.6;
}

.copy-btn {
  padding: 8px 16px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  transition: all 0.3s;
}

.copy-btn:hover {
  background: #357ae8;
  transform: scale(1.05);
}

.copy-btn:active {
  transform: scale(0.95);
}

.copy-icon {
  font-size: 16px;
}

.copy-toast {
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 16px 24px;
  background: linear-gradient(135deg, #16a34a 0%, #10b981 100%);
  color: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(22, 163, 74, 0.3);
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  z-index: 1000;
}

.toast-icon {
  font-size: 20px;
}

/* Lazy 演示 */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.advantage-item {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e0e0e0;
}

.advantage-icon {
  display: block;
  font-size: 32px;
  margin-bottom: 12px;
}

.advantage-item strong {
  display: block;
  font-size: 15px;
  color: #333;
  margin-bottom: 8px;
}

.advantage-item p {
  margin: 0;
  font-size: 13px;
  color: #666;
}

.lazy-container {
  max-height: 600px;
  overflow-y: auto;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin-top: 20px;
}

.lazy-item {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  border: 2px solid #e0e0e0;
}

.lazy-item:last-child {
  margin-bottom: 0;
}

.lazy-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.lazy-header h4 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.loaded-badge {
  padding: 4px 10px;
  background: linear-gradient(135deg, #16a34a 0%, #10b981 100%);
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.loading-badge {
  padding: 4px 10px;
  background: #e0e0e0;
  color: #666;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.lazy-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  opacity: 0;
  transition: opacity 0.5s;
}

.lazy-image.loaded {
  opacity: 1;
  background: none;
  animation: none;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* 总结部分 */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.summary-card {
  padding: 28px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f0fe 100%);
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.summary-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.summary-card h3 {
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #333;
}

.summary-card ul {
  margin: 0;
  padding-left: 20px;
  line-height: 2;
}

.summary-card code {
  background: rgba(0,0,0,0.05);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 13px;
}

.key-points {
  margin-bottom: 32px;
  padding: 28px;
  background: linear-gradient(135deg, #fff8e1 0%, #ffe8a1 100%);
  border-radius: 12px;
  border: 2px solid #ffd54f;
}

.key-points h3 {
  margin: 0 0 20px 0;
  font-size: 20px;
  color: #333;
}

.points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.point-card {
  padding: 20px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #ffd54f;
}

.point-card strong {
  display: block;
  font-size: 15px;
  color: #333;
  margin-bottom: 8px;
}

.point-card p {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.next-lesson {
  padding: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  text-align: center;
}

.next-lesson-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(255,255,255,0.2);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 16px;
}

.next-lesson h3 {
  margin: 0 0 12px 0;
  font-size: 24px;
}

.next-lesson p {
  margin: 0 0 20px 0;
  opacity: 0.9;
  line-height: 1.6;
}

.next-topics {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.topic-tag {
  padding: 8px 16px;
  background: rgba(255,255,255,0.2);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>
