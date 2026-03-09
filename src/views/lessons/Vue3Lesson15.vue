<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第67课：过渡与动画</h1>
      <p class="lesson-subtitle">学习 Vue3 的过渡和动画系统，为应用添加精美的动效</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 45 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <div class="lesson-content">
      <!-- 1. 什么是过渡与动画 -->
      <section class="content-section">
        <h2>1️⃣ 什么是过渡与动画？</h2>
        <p>过渡（Transition）和动画（Animation）可以让元素在显示、隐藏或状态变化时更加流畅自然，提升用户体验。</p>

        <div class="info-box">
          <h3>为什么需要动画</h3>
          <ul>
            <li><strong>视觉反馈：</strong>让用户知道发生了什么</li>
            <li><strong>引导注意力：</strong>将用户注意力引导到重要内容</li>
            <li><strong>提升体验：</strong>让界面感觉更流畅、更专业</li>
            <li><strong>减少突兀感：</strong>平滑的过渡比瞬间出现更舒适</li>
          </ul>
        </div>

        <div class="demo-box">
          <h3>🎯 对比：有无动画的区别</h3>
          <div class="demo-content">
            <div class="animation-comparison">
              <div class="comparison-section">
                <h4>❌ 无动画</h4>
                <button @click="noAnimVisible = !noAnimVisible" class="btn btn-primary">
                  {{ noAnimVisible ? '隐藏' : '显示' }}
                </button>
                <div v-if="noAnimVisible" class="demo-card no-anim">
                  <h5>突然出现！</h5>
                  <p>没有动画的元素会突然出现或消失，显得很生硬。</p>
                </div>
              </div>

              <div class="comparison-section">
                <h4>✅ 有动画</h4>
                <button @click="withAnimVisible = !withAnimVisible" class="btn btn-primary">
                  {{ withAnimVisible ? '隐藏' : '显示' }}
                </button>
                <transition name="fade">
                  <div v-if="withAnimVisible" class="demo-card with-anim">
                    <h5>平滑出现！</h5>
                    <p>有动画的元素会平滑地淡入淡出，体验更好。</p>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Transition 组件基础 -->
      <section class="content-section">
        <h2>2️⃣ Transition 组件基础</h2>
        <p>Transition 组件为单个元素或组件的进入/离开提供动画效果。</p>

        <div class="info-box">
          <h3>基本用法</h3>
          <pre v-pre><code>&lt;template&gt;
  &lt;button @click="show = !show"&gt;切换&lt;/button&gt;

  &lt;transition name="fade"&gt;
    &lt;p v-if="show"&gt;Hello!&lt;/p&gt;
  &lt;/transition&gt;
&lt;/template&gt;

&lt;style&gt;
/* 进入和离开的过渡状态 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

/* 进入的起始状态和离开的结束状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
&lt;/style&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：基础过渡效果</h3>
          <div class="demo-content">
            <div class="transitions-showcase">
              <div class="transition-demo">
                <h4>淡入淡出</h4>
                <button @click="fadeVisible = !fadeVisible" class="demo-btn">切换</button>
                <transition name="fade">
                  <div v-if="fadeVisible" class="transition-box fade-box">
                    Fade
                  </div>
                </transition>
              </div>

              <div class="transition-demo">
                <h4>滑动</h4>
                <button @click="slideVisible = !slideVisible" class="demo-btn">切换</button>
                <transition name="slide">
                  <div v-if="slideVisible" class="transition-box slide-box">
                    Slide
                  </div>
                </transition>
              </div>

              <div class="transition-demo">
                <h4>缩放</h4>
                <button @click="scaleVisible = !scaleVisible" class="demo-btn">切换</button>
                <transition name="scale">
                  <div v-if="scaleVisible" class="transition-box scale-box">
                    Scale
                  </div>
                </transition>
              </div>

              <div class="transition-demo">
                <h4>旋转</h4>
                <button @click="rotateVisible = !rotateVisible" class="demo-btn">切换</button>
                <transition name="rotate">
                  <div v-if="rotateVisible" class="transition-box rotate-box">
                    Rotate
                  </div>
                </transition>
              </div>
            </div>

            <div class="code-example">
              <pre v-pre><code>&lt;!-- 淡入淡出 --&gt;
&lt;transition name="fade"&gt;
  &lt;div v-if="show"&gt;内容&lt;/div&gt;
&lt;/transition&gt;

&lt;style&gt;
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
&lt;/style&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. 过渡模式 -->
      <section class="content-section">
        <h2>3️⃣ 过渡模式（Mode）</h2>
        <p>当有多个元素切换时，可以使用模式控制过渡的执行顺序。</p>

        <div class="info-box">
          <h3>过渡模式类型</h3>
          <pre v-pre><code>&lt;!-- in-out: 新元素先进入，完成后当前元素离开 --&gt;
&lt;transition name="fade" mode="in-out"&gt;
  &lt;component :is="currentView" /&gt;
&lt;/transition&gt;

&lt;!-- out-in: 当前元素先离开，完成后新元素进入 --&gt;
&lt;transition name="fade" mode="out-in"&gt;
  &lt;component :is="currentView" /&gt;
&lt;/transition&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：不同过渡模式</h3>
          <div class="demo-content">
            <div class="mode-comparison">
              <div class="mode-section">
                <h4>无模式（默认）</h4>
                <div class="mode-controls">
                  <button @click="noModeView = 'A'" :class="{ active: noModeView === 'A' }" class="mode-btn">
                    视图 A
                  </button>
                  <button @click="noModeView = 'B'" :class="{ active: noModeView === 'B' }" class="mode-btn">
                    视图 B
                  </button>
                </div>
                <div class="mode-container">
                  <transition name="mode-fade">
                    <div v-if="noModeView === 'A'" key="A" class="mode-view view-a">
                      <h5>视图 A</h5>
                      <p>进入和离开同时发生</p>
                    </div>
                    <div v-else key="B" class="mode-view view-b">
                      <h5>视图 B</h5>
                      <p>可能会出现重叠</p>
                    </div>
                  </transition>
                </div>
              </div>

              <div class="mode-section">
                <h4>out-in 模式</h4>
                <div class="mode-controls">
                  <button @click="outInView = 'A'" :class="{ active: outInView === 'A' }" class="mode-btn">
                    视图 A
                  </button>
                  <button @click="outInView = 'B'" :class="{ active: outInView === 'B' }" class="mode-btn">
                    视图 B
                  </button>
                </div>
                <div class="mode-container">
                  <transition name="mode-fade" mode="out-in">
                    <div v-if="outInView === 'A'" key="A" class="mode-view view-a">
                      <h5>视图 A</h5>
                      <p>先离开，再进入</p>
                    </div>
                    <div v-else key="B" class="mode-view view-b">
                      <h5>视图 B</h5>
                      <p>不会重叠，更流畅</p>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. TransitionGroup 列表过渡 -->
      <section class="content-section">
        <h2>4️⃣ TransitionGroup 列表过渡</h2>
        <p>TransitionGroup 用于为列表中的多个元素添加过渡效果。</p>

        <div class="info-box">
          <h3>TransitionGroup 用法</h3>
          <pre v-pre><code>&lt;transition-group name="list" tag="div"&gt;
  &lt;div
    v-for="item in items"
    :key="item.id"
    class="list-item"
  &gt;
    {{ item.text }}
  &lt;/div&gt;
&lt;/transition-group&gt;

&lt;style&gt;
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* 移动过渡 */
.list-move {
  transition: transform 0.5s ease;
}
&lt;/style&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：列表动画</h3>
          <div class="demo-content">
            <div class="list-demo">
              <div class="list-controls">
                <button @click="addItem" class="btn btn-primary">+ 添加</button>
                <button @click="shuffleItems" class="btn btn-secondary">🔀 随机排序</button>
                <button @click="clearItems" class="btn btn-secondary">🗑️ 清空</button>
              </div>

              <transition-group name="list" tag="div" class="list-container">
                <div
                  v-for="item in listItems"
                  :key="item.id"
                  class="list-item"
                >
                  <span class="item-icon">{{ item.icon }}</span>
                  <span class="item-text">{{ item.text }}</span>
                  <button @click="removeItem(item.id)" class="remove-btn">×</button>
                </div>
              </transition-group>

              <div v-if="listItems.length === 0" class="empty-message">
                列表为空，点击"添加"按钮添加项目
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. 自定义过渡类名 -->
      <section class="content-section">
        <h2>5️⃣ 自定义过渡类名</h2>
        <p>可以自定义过渡类名，配合第三方动画库（如 Animate.css）使用。</p>

        <div class="info-box">
          <h3>自定义类名</h3>
          <pre v-pre><code>&lt;transition
  enter-active-class="animate__animated animate__fadeInDown"
  leave-active-class="animate__animated animate__fadeOutUp"
&gt;
  &lt;div v-if="show"&gt;内容&lt;/div&gt;
&lt;/transition&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：常用动画效果</h3>
          <div class="demo-content">
            <div class="animation-library">
              <div class="animation-selector">
                <label>选择动画效果：</label>
                <select v-model="selectedAnimation" class="animation-select">
                  <option value="bounce">弹跳 (Bounce)</option>
                  <option value="flip">翻转 (Flip)</option>
                  <option value="shake">抖动 (Shake)</option>
                  <option value="swing">摇摆 (Swing)</option>
                  <option value="tada">强调 (Tada)</option>
                  <option value="wobble">摆动 (Wobble)</option>
                  <option value="jello">果冻 (Jello)</option>
                  <option value="heartBeat">心跳 (HeartBeat)</option>
                </select>
                <button @click="triggerAnimation" class="btn btn-primary">播放动画</button>
              </div>

              <div class="animation-preview">
                <transition
                  :enter-active-class="'animate__animated animate__' + selectedAnimation"
                  mode="out-in"
                >
                  <div v-if="animationKey" :key="animationKey" class="animation-box">
                    <div class="animation-icon">🎨</div>
                    <p>{{ animationNames[selectedAnimation] }}</p>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. JavaScript 钩子 -->
      <section class="content-section">
        <h2>6️⃣ JavaScript 钩子</h2>
        <p>除了 CSS 过渡，还可以使用 JavaScript 钩子来实现更复杂的动画。</p>

        <div class="info-box">
          <h3>JavaScript 钩子</h3>
          <pre v-pre><code>&lt;transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @enter-cancelled="enterCancelled"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  @leave-cancelled="leaveCancelled"
  :css="false"
&gt;
  &lt;div v-if="show"&gt;内容&lt;/div&gt;
&lt;/transition&gt;

&lt;script setup&gt;
const enter = (el, done) => {
  // 进入动画逻辑
  // 完成后调用 done()
  gsap.to(el, {
    opacity: 1,
    duration: 0.5,
    onComplete: done
  })
}
&lt;/script&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：数字滚动动画</h3>
          <div class="demo-content">
            <div class="counter-demo">
              <div class="counter-controls">
                <button @click="incrementCounter(100)" class="btn btn-primary">+100</button>
                <button @click="incrementCounter(500)" class="btn btn-primary">+500</button>
                <button @click="incrementCounter(1000)" class="btn btn-primary">+1000</button>
                <button @click="resetCounter" class="btn btn-secondary">重置</button>
              </div>

              <div class="counter-display">
                <div class="counter-value">{{ displayCounter }}</div>
                <div class="counter-label">总计</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. 动画效果库 -->
      <section class="content-section">
        <h2>7️⃣ 实战：动画效果库</h2>
        <p>整合多种动画效果，创建一个实用的动画演示库。</p>

        <div class="demo-box">
          <h3>🎨 动画效果展示</h3>
          <div class="demo-content">
            <div class="effects-gallery">
              <div class="effects-grid">
                <div
                  v-for="effect in effects"
                  :key="effect.name"
                  @click="previewEffect(effect)"
                  class="effect-card"
                  :class="{ active: currentEffect?.name === effect.name }"
                >
                  <div class="effect-icon">{{ effect.icon }}</div>
                  <div class="effect-name">{{ effect.label }}</div>
                </div>
              </div>

              <div class="effect-preview-area">
                <h4>预览区域</h4>
                <p class="preview-hint">点击左侧效果卡片查看动画</p>
                <div class="preview-stage">
                  <transition
                    :name="currentEffect?.name || 'fade'"
                    mode="out-in"
                  >
                    <div v-if="previewKey" :key="previewKey" class="preview-element">
                      <div class="preview-content">
                        <h3>{{ currentEffect?.label }}</h3>
                        <p>{{ currentEffect?.description }}</p>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. 知识总结 -->
      <section class="content-section">
        <h2>📚 知识总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>💡 核心概念</h3>
            <ul>
              <li><strong>Transition:</strong> 单元素过渡</li>
              <li><strong>TransitionGroup:</strong> 列表过渡</li>
              <li><strong>过渡类名:</strong> 6个过渡阶段类名</li>
              <li><strong>JavaScript钩子:</strong> 更灵活的动画控制</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🎯 过渡类名</h3>
            <ul>
              <li>v-enter-from / v-enter-active / v-enter-to</li>
              <li>v-leave-from / v-leave-active / v-leave-to</li>
              <li>v-move（列表移动过渡）</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>✨ 最佳实践</h3>
            <ul>
              <li>使用 mode="out-in" 避免重叠</li>
              <li>为列表项添加唯一 key</li>
              <li>合理使用动画时长（200-500ms）</li>
              <li>考虑性能，避免过度动画</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 下一课预告 -->
      <section class="content-section next-lesson-preview">
        <h2>🎯 下一课预告</h2>
        <div class="next-lesson-card">
          <h3>第68课：自定义指令</h3>
          <p>学习如何创建自定义指令，扩展 Vue 的功能。</p>
          <ul>
            <li>⚡ 指令钩子函数</li>
            <li>🔧 指令参数和修饰符</li>
            <li>📦 实用指令示例</li>
            <li>💡 自定义指令最佳实践</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// 动画对比
const noAnimVisible = ref(false)
const withAnimVisible = ref(false)

// 基础过渡
const fadeVisible = ref(true)
const slideVisible = ref(true)
const scaleVisible = ref(true)
const rotateVisible = ref(true)

// 过渡模式
const noModeView = ref('A')
const outInView = ref('A')

// 列表动画
const listItems = ref([
  { id: 1, text: '项目 1', icon: '📌' },
  { id: 2, text: '项目 2', icon: '📎' },
  { id: 3, text: '项目 3', icon: '📋' }
])

let nextId = 4

const addItem = () => {
  const icons = ['📌', '📎', '📋', '📄', '📝', '📰', '📑']
  listItems.value.push({
    id: nextId++,
    text: `项目 ${nextId - 1}`,
    icon: icons[Math.floor(Math.random() * icons.length)]
  })
}

const removeItem = (id) => {
  const index = listItems.value.findIndex(item => item.id === id)
  if (index > -1) {
    listItems.value.splice(index, 1)
  }
}

const shuffleItems = () => {
  listItems.value = listItems.value.sort(() => Math.random() - 0.5)
}

const clearItems = () => {
  listItems.value = []
}

// 自定义动画
const selectedAnimation = ref('bounce')
const animationKey = ref(Date.now())

const animationNames = {
  bounce: '弹跳效果',
  flip: '翻转效果',
  shake: '抖动效果',
  swing: '摇摆效果',
  tada: '强调效果',
  wobble: '摆动效果',
  jello: '果冻效果',
  heartBeat: '心跳效果'
}

const triggerAnimation = () => {
  animationKey.value = Date.now()
}

// 数字滚动
const counter = ref(0)
const displayCounter = ref(0)

const incrementCounter = (amount) => {
  counter.value += amount
}

const resetCounter = () => {
  counter.value = 0
  displayCounter.value = 0
}

// 监听 counter 变化，实现数字滚动动画
watch(counter, (newVal, oldVal) => {
  const duration = 1000 // 动画持续时间
  const steps = 60 // 动画帧数
  const stepValue = (newVal - oldVal) / steps
  let currentStep = 0

  const timer = setInterval(() => {
    currentStep++
    displayCounter.value = Math.round(oldVal + stepValue * currentStep)

    if (currentStep >= steps) {
      displayCounter.value = newVal
      clearInterval(timer)
    }
  }, duration / steps)
})

// 动画效果库
const effects = [
  { name: 'fade', label: '淡入淡出', icon: '🌫️', description: '元素平滑地淡入和淡出' },
  { name: 'slide', label: '滑动', icon: '➡️', description: '元素从侧边滑入滑出' },
  { name: 'scale', label: '缩放', icon: '🔍', description: '元素从小到大缩放' },
  { name: 'rotate', label: '旋转', icon: '🔄', description: '元素旋转进入和离开' },
  { name: 'bounce', label: '弹跳', icon: '⚾', description: '元素带有弹跳效果' },
  { name: 'flip', label: '翻转', icon: '🎴', description: '元素翻转效果' }
]

const currentEffect = ref(effects[0])
const previewKey = ref(Date.now())

const previewEffect = (effect) => {
  currentEffect.value = effect
  previewKey.value = Date.now()
}
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

/* 动画对比 */
.animation-comparison {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 20px;
}

.comparison-section h4 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
}

.demo-card {
  background: linear-gradient(135deg, #e8f0fe 0%, #f1f3f4 100%);
  border-radius: 12px;
  padding: 24px;
  margin-top: 16px;
}

.demo-card h5 {
  margin-top: 0;
  color: #1a73e8;
}

/* 基础过渡展示 */
.transitions-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.transition-demo {
  text-align: center;
}

.transition-demo h4 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #333;
  font-size: 16px;
}

.demo-btn {
  padding: 8px 20px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 12px;
  transition: all 0.2s ease;
}

.demo-btn:hover {
  background: #1a73e8;
  transform: translateY(-2px);
}

.transition-box {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.fade-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.slide-box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.scale-box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.rotate-box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

/* 淡入淡出 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 滑动 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* 缩放 */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

/* 旋转 */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.5s ease;
}

.rotate-enter-from {
  opacity: 0;
  transform: rotate(-180deg) scale(0.5);
}

.rotate-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}

/* 过渡模式 */
.mode-comparison {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 20px;
}

.mode-section h4 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
}

.mode-controls {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.mode-btn {
  padding: 10px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.mode-btn:hover {
  border-color: #4285f4;
}

.mode-btn.active {
  border-color: #4285f4;
  background: #4285f4;
  color: white;
}

.mode-container {
  position: relative;
  min-height: 150px;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
}

.mode-view {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  padding: 20px;
  border-radius: 12px;
  color: white;
}

.view-a {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.view-b {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.mode-view h5 {
  margin-top: 0;
  margin-bottom: 8px;
}

.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: all 0.5s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 列表动画 */
.list-demo {
  margin-bottom: 20px;
}

.list-controls {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.list-container {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  min-height: 200px;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
}

.list-item:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.item-icon {
  font-size: 24px;
}

.item-text {
  flex: 1;
  color: #333;
  font-size: 15px;
}

.remove-btn {
  width: 28px;
  height: 28px;
  border: none;
  background: #ea4335;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  transition: all 0.2s ease;
}

.remove-btn:hover {
  background: #d33;
  transform: scale(1.1);
}

.empty-message {
  text-align: center;
  color: #999;
  padding: 40px 20px;
  font-size: 15px;
}

/* 列表过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-move {
  transition: transform 0.5s ease;
}

.list-leave-active {
  position: absolute;
}

/* 自定义动画 */
.animation-library {
  margin-bottom: 20px;
}

.animation-selector {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.animation-selector label {
  font-weight: 500;
  color: #333;
}

.animation-select {
  padding: 10px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  background: white;
  transition: all 0.2s ease;
}

.animation-select:focus {
  outline: none;
  border-color: #4285f4;
}

.animation-preview {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 40px;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 24px rgba(102,126,234,0.3);
}

.animation-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.animation-box p {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
}

/* Animate.css 风格动画 */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
}

@keyframes flip {
  0% {
    transform: perspective(400px) rotateY(-360deg);
    opacity: 0;
  }
  100% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

@keyframes swing {
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes tada {
  0% {
    transform: scale(1);
  }
  10%, 20% {
    transform: scale(0.9) rotate(-3deg);
  }
  30%, 50%, 70%, 90% {
    transform: scale(1.1) rotate(3deg);
  }
  40%, 60%, 80% {
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}

@keyframes wobble {
  0% {
    transform: translateX(0%);
  }
  15% {
    transform: translateX(-25px) rotate(-5deg);
  }
  30% {
    transform: translateX(20px) rotate(3deg);
  }
  45% {
    transform: translateX(-15px) rotate(-3deg);
  }
  60% {
    transform: translateX(10px) rotate(2deg);
  }
  75% {
    transform: translateX(-5px) rotate(-1deg);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes jello {
  0%, 11.1%, 100% {
    transform: none;
  }
  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}

.animate__animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.animate__bounce {
  animation-name: bounce;
  transform-origin: center bottom;
}

.animate__flip {
  animation-name: flip;
  backface-visibility: visible;
}

.animate__shake {
  animation-name: shake;
}

.animate__swing {
  animation-name: swing;
  transform-origin: top center;
}

.animate__tada {
  animation-name: tada;
}

.animate__wobble {
  animation-name: wobble;
}

.animate__jello {
  animation-name: jello;
  transform-origin: center;
}

.animate__heartBeat {
  animation-name: heartBeat;
  animation-duration: 1.3s;
  animation-timing-function: ease-in-out;
}

/* 数字滚动 */
.counter-demo {
  margin-bottom: 20px;
}

.counter-controls {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.counter-display {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 24px rgba(102,126,234,0.3);
}

.counter-value {
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 8px;
  font-variant-numeric: tabular-nums;
}

.counter-label {
  font-size: 18px;
  opacity: 0.9;
}

/* 动画效果库 */
.effects-gallery {
  margin-bottom: 20px;
}

.effects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}

.effect-card {
  background: #f8f9fa;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.effect-card:hover {
  border-color: #4285f4;
  background: white;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(66,133,244,0.2);
}

.effect-card.active {
  border-color: #4285f4;
  background: linear-gradient(135deg, #e8f0fe 0%, #f1f3f4 100%);
}

.effect-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.effect-name {
  font-size: 13px;
  color: #666;
  font-weight: 500;
}

.effect-preview-area {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
}

.effect-preview-area h4 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #333;
}

.preview-hint {
  color: #999;
  font-size: 14px;
  margin-bottom: 20px;
}

.preview-stage {
  background: white;
  border-radius: 12px;
  padding: 40px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-element {
  width: 100%;
  max-width: 500px;
}

.preview-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 24px rgba(102,126,234,0.3);
}

.preview-content h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 28px;
}

.preview-content p {
  margin: 0;
  font-size: 16px;
  opacity: 0.95;
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

/* 弹跳效果 */
.bounce-enter-active {
  animation: bounce 0.8s;
}

.bounce-leave-active {
  animation: bounce 0.8s reverse;
}

/* 翻转效果 */
.flip-enter-active {
  animation: flip 0.6s;
}

.flip-leave-active {
  animation: flip 0.6s reverse;
}

/* 响应式 */
@media (max-width: 768px) {
  .animation-comparison,
  .mode-comparison {
    grid-template-columns: 1fr;
  }

  .transitions-showcase {
    grid-template-columns: repeat(2, 1fr);
  }

  .counter-value {
    font-size: 48px;
  }
}
</style>
