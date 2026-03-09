<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第60课：事件处理</h1>
      <p class="lesson-subtitle">掌握 Vue3 中的事件绑定、事件修饰符和按键修饰符</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 30 分钟</span>
        <span class="difficulty">📊 难度：初级</span>
      </div>
    </div>

    <div class="lesson-content">
      <!-- 1. 基础事件绑定 -->
      <section class="content-section">
        <h2>1️⃣ 基础事件绑定</h2>
        <p>Vue 使用 <code>v-on</code> 指令（简写为 <code>@</code>）来监听 DOM 事件。</p>

        <div class="info-box">
          <h3>语法格式</h3>
          <pre><code>&lt;!-- 完整写法 --&gt;
&lt;button v-on:click="handleClick"&gt;点击&lt;/button&gt;

&lt;!-- 简写（推荐） --&gt;
&lt;button @click="handleClick"&gt;点击&lt;/button&gt;

&lt;!-- 内联处理器 --&gt;
&lt;button @click="count++"&gt;增加&lt;/button&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：点击计数器</h3>
          <div class="demo-content">
            <div class="counter-demo">
              <div class="counter-display">
                <span class="counter-label">点击次数：</span>
                <span class="counter-value">{{ clickCount }}</span>
              </div>

              <div class="button-group">
                <button @click="clickCount++" class="btn btn-primary">
                  直接增加
                </button>
                <button @click="incrementCounter" class="btn btn-success">
                  方法处理
                </button>
                <button @click="handleClick('自定义消息')" class="btn btn-info">
                  传递参数
                </button>
                <button @click="clickCount = 0" class="btn btn-warning">
                  重置
                </button>
              </div>

              <div v-if="lastMessage" class="message-display">
                <p>📢 {{ lastMessage }}</p>
              </div>
            </div>

            <div class="code-example">
              <pre><code>&lt;template&gt;
  &lt;button @click="count++"&gt;直接增加&lt;/button&gt;
  &lt;button @click="incrementCounter"&gt;方法处理&lt;/button&gt;
  &lt;button @click="handleClick('消息')"&gt;传递参数&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const count = ref(0)

const incrementCounter = () => {
  count.value++
}

const handleClick = (message) => {
  console.log(message)
}
&lt;/script&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. 事件对象 -->
      <section class="content-section">
        <h2>2️⃣ 事件对象</h2>
        <p>Vue 会自动传递原生 DOM 事件对象给事件处理器。你可以使用 <code>$event</code> 在内联处理器中访问它。</p>

        <div class="demo-box">
          <h3>🎯 演示：事件对象信息</h3>
          <div class="demo-content">
            <div class="event-demo">
              <button
                @click="showEventInfo"
                @mousemove="updateMousePosition"
                class="btn btn-primary event-trigger-btn"
              >
                点击或移动鼠标
              </button>

              <div v-if="eventInfo" class="event-info-display">
                <h4>事件信息：</h4>
                <div class="info-grid">
                  <div class="info-item">
                    <span class="info-label">事件类型：</span>
                    <span class="info-value">{{ eventInfo.type }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">目标元素：</span>
                    <span class="info-value">{{ eventInfo.target }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">点击坐标：</span>
                    <span class="info-value">X: {{ eventInfo.clientX }}, Y: {{ eventInfo.clientY }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">时间戳：</span>
                    <span class="info-value">{{ eventInfo.timeStamp }}</span>
                  </div>
                </div>
              </div>

              <div v-if="mousePosition" class="mouse-position">
                <p>鼠标位置：X: {{ mousePosition.x }}, Y: {{ mousePosition.y }}</p>
              </div>
            </div>

            <div class="code-example">
              <pre><code>&lt;button @click="showEventInfo"&gt;点击&lt;/button&gt;

const showEventInfo = (event) => {
  console.log('事件类型:', event.type)
  console.log('目标元素:', event.target)
  console.log('坐标:', event.clientX, event.clientY)
}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. 事件修饰符 -->
      <section class="content-section">
        <h2>3️⃣ 事件修饰符</h2>
        <p>Vue 为 <code>v-on</code> 提供了事件修饰符来处理 DOM 事件的细节问题。</p>

        <div class="info-box">
          <h3>常用事件修饰符</h3>
          <div class="modifier-list">
            <div class="modifier-item">
              <code>.stop</code> - 阻止事件冒泡（等同于 event.stopPropagation()）
            </div>
            <div class="modifier-item">
              <code>.prevent</code> - 阻止默认行为（等同于 event.preventDefault()）
            </div>
            <div class="modifier-item">
              <code>.capture</code> - 使用事件捕获模式
            </div>
            <div class="modifier-item">
              <code>.self</code> - 只在事件从元素本身触发时触发回调
            </div>
            <div class="modifier-item">
              <code>.once</code> - 事件只触发一次
            </div>
            <div class="modifier-item">
              <code>.passive</code> - 以 passive 模式添加监听器（提升移动端性能）
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：事件修饰符对比</h3>
          <div class="demo-content">
            <div class="modifiers-demo">
              <!-- .stop 演示 -->
              <div class="modifier-example">
                <h4>.stop - 阻止冒泡</h4>
                <div class="comparison-grid">
                  <div class="comparison-item">
                    <p class="comparison-title">不使用 .stop</p>
                    <div @click="outerClick" class="outer-box">
                      外层 (点击数: {{ outerClickCount }})
                      <button @click="innerClick" class="btn btn-sm">
                        内层按钮
                      </button>
                    </div>
                  </div>
                  <div class="comparison-item">
                    <p class="comparison-title">使用 .stop</p>
                    <div @click="outerClick" class="outer-box">
                      外层 (点击数: {{ outerClickCountStop }})
                      <button @click.stop="innerClickStop" class="btn btn-sm">
                        内层按钮 (.stop)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- .prevent 演示 -->
              <div class="modifier-example">
                <h4>.prevent - 阻止默认行为</h4>
                <div class="comparison-grid">
                  <div class="comparison-item">
                    <p class="comparison-title">普通链接</p>
                    <a href="https://vuejs.org" target="_blank" class="demo-link">
                      点击跳转（会打开新页面）
                    </a>
                  </div>
                  <div class="comparison-item">
                    <p class="comparison-title">使用 .prevent</p>
                    <a href="https://vuejs.org" @click.prevent="showPreventMessage" class="demo-link">
                      点击不跳转（阻止默认行为）
                    </a>
                    <p v-if="preventMessage" class="prevent-msg">{{ preventMessage }}</p>
                  </div>
                </div>
              </div>

              <!-- .once 演示 -->
              <div class="modifier-example">
                <h4>.once - 只触发一次</h4>
                <div class="comparison-grid">
                  <div class="comparison-item">
                    <button @click="normalClick" class="btn btn-primary">
                      普通按钮 ({{ normalClickCount }}次)
                    </button>
                  </div>
                  <div class="comparison-item">
                    <button @click.once="onceClick" class="btn btn-success">
                      .once 按钮 ({{ onceClickCount }}次)
                    </button>
                  </div>
                </div>
              </div>

              <!-- .self 演示 -->
              <div class="modifier-example">
                <h4>.self - 只在自身触发</h4>
                <div @click.self="selfClick" class="self-demo-box">
                  点击背景区域才会触发 ({{ selfClickCount }}次)
                  <button class="btn btn-sm">点击我不会触发外层</button>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre><code>&lt;!-- 阻止冒泡 --&gt;
&lt;button @click.stop="handleClick"&gt;阻止冒泡&lt;/button&gt;

&lt;!-- 阻止默认行为 --&gt;
&lt;a @click.prevent="handleClick"&gt;阻止跳转&lt;/a&gt;

&lt;!-- 只触发一次 --&gt;
&lt;button @click.once="handleClick"&gt;只触发一次&lt;/button&gt;

&lt;!-- 修饰符可以串联 --&gt;
&lt;button @click.stop.prevent="handleClick"&gt;串联修饰符&lt;/button&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. 按键修饰符 -->
      <section class="content-section">
        <h2>4️⃣ 按键修饰符</h2>
        <p>监听键盘事件时，可以使用按键修饰符来指定特定的按键。</p>

        <div class="info-box">
          <h3>常用按键修饰符</h3>
          <div class="key-modifier-grid">
            <div class="key-category">
              <h4>基础按键</h4>
              <ul>
                <li><code>.enter</code> - 回车键</li>
                <li><code>.tab</code> - Tab 键</li>
                <li><code>.delete</code> - Delete/Backspace</li>
                <li><code>.esc</code> - Esc 键</li>
                <li><code>.space</code> - 空格键</li>
              </ul>
            </div>
            <div class="key-category">
              <h4>方向键</h4>
              <ul>
                <li><code>.up</code> - 上箭头</li>
                <li><code>.down</code> - 下箭头</li>
                <li><code>.left</code> - 左箭头</li>
                <li><code>.right</code> - 右箭头</li>
              </ul>
            </div>
            <div class="key-category">
              <h4>系统修饰键</h4>
              <ul>
                <li><code>.ctrl</code> - Ctrl 键</li>
                <li><code>.alt</code> - Alt 键</li>
                <li><code>.shift</code> - Shift 键</li>
                <li><code>.meta</code> - ⌘ (Mac) / ⊞ (Win)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 演示：按键监听</h3>
          <div class="demo-content">
            <div class="keyboard-demo">
              <!-- Enter 键提交 -->
              <div class="key-example">
                <h4>回车键提交</h4>
                <div class="input-group">
                  <input
                    v-model="todoInput"
                    @keyup.enter="addTodo"
                    placeholder="输入待办事项，按 Enter 添加"
                    class="input-field"
                  />
                  <button @click="addTodo" class="btn btn-primary">添加</button>
                </div>
                <ul class="todo-list">
                  <li v-for="(todo, index) in todos" :key="index" class="todo-item">
                    {{ todo }}
                    <button @click="removeTodo(index)" class="btn-remove">×</button>
                  </li>
                </ul>
              </div>

              <!-- 方向键控制 -->
              <div class="key-example">
                <h4>方向键控制移动</h4>
                <div class="arrow-control">
                  <p class="instruction">在输入框获得焦点时，使用方向键移动方块</p>
                  <input
                    @keydown.up.prevent="moveBox('up')"
                    @keydown.down.prevent="moveBox('down')"
                    @keydown.left.prevent="moveBox('left')"
                    @keydown.right.prevent="moveBox('right')"
                    placeholder="点击这里，然后使用方向键"
                    class="input-field"
                    style="margin-bottom: 16px;"
                  />
                  <div class="game-area">
                    <div
                      class="movable-box"
                      :style="{
                        top: boxPosition.y + 'px',
                        left: boxPosition.x + 'px'
                      }"
                    >
                      📦
                    </div>
                  </div>
                  <p class="position-info">位置: X: {{ boxPosition.x }}, Y: {{ boxPosition.y }}</p>
                </div>
              </div>

              <!-- 组合键 -->
              <div class="key-example">
                <h4>组合键监听</h4>
                <div class="combo-demo">
                  <input
                    v-model="comboInput"
                    @keyup.ctrl.s.prevent="saveContent"
                    @keyup.ctrl.c="copyContent"
                    @keyup.esc="clearContent"
                    placeholder="试试 Ctrl+S 保存, Ctrl+C 复制, Esc 清空"
                    class="input-field"
                  />
                  <div v-if="comboMessage" class="combo-message">
                    {{ comboMessage }}
                  </div>
                  <div v-if="savedContent" class="saved-content">
                    <h5>已保存的内容：</h5>
                    <p>{{ savedContent }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre><code>&lt;!-- 回车键提交 --&gt;
&lt;input @keyup.enter="submit" /&gt;

&lt;!-- 方向键 --&gt;
&lt;input @keydown.up="moveUp" /&gt;

&lt;!-- 组合键：Ctrl + S --&gt;
&lt;input @keyup.ctrl.s="save" /&gt;

&lt;!-- 阻止默认行为 --&gt;
&lt;input @keydown.up.prevent="moveUp" /&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. 鼠标按钮修饰符 -->
      <section class="content-section">
        <h2>5️⃣ 鼠标按钮修饰符</h2>
        <p>这些修饰符会限制处理函数仅响应特定的鼠标按钮。</p>

        <div class="demo-box">
          <h3>🎯 演示：鼠标按钮检测</h3>
          <div class="demo-content">
            <div class="mouse-demo">
              <div
                @click.left="handleMouseButton('左键')"
                @click.right.prevent="handleMouseButton('右键')"
                @click.middle="handleMouseButton('中键')"
                class="mouse-test-area"
              >
                <p>在这里使用不同的鼠标按钮点击</p>
                <p class="instruction">（右键菜单已被阻止）</p>
              </div>
              <div v-if="mouseButtonMessage" class="mouse-message">
                {{ mouseButtonMessage }}
              </div>
            </div>

            <div class="code-example">
              <pre><code>&lt;div
  @click.left="handleLeft"    左键点击
  @click.right="handleRight"  右键点击
  @click.middle="handleMiddle" 中键点击
&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. 综合练习 -->
      <section class="content-section">
        <h2>6️⃣ 综合练习：多功能记事本</h2>
        <p>将所学的事件处理知识综合应用到一个实际项目中。</p>

        <div class="demo-box">
          <h3>🎯 实践：快捷键记事本</h3>
          <div class="demo-content">
            <div class="notepad-app">
              <div class="notepad-toolbar">
                <button @click="clearNote" class="btn btn-sm btn-warning">
                  清空 (Esc)
                </button>
                <button @click="saveNote" class="btn btn-sm btn-success">
                  保存 (Ctrl+S)
                </button>
                <span class="save-indicator" :class="{ saved: noteSaved }">
                  {{ noteSaved ? '✓ 已保存' : '未保存' }}
                </span>
              </div>

              <textarea
                v-model="noteContent"
                @input="noteModified"
                @keydown.ctrl.s.prevent="saveNote"
                @keydown.esc="clearNote"
                @paste="handlePaste"
                placeholder="开始输入笔记...

快捷键：
- Ctrl + S: 保存
- Esc: 清空"
                class="notepad-textarea"
              ></textarea>

              <div class="notepad-stats">
                <span>字数: {{ noteContent.length }}</span>
                <span>行数: {{ noteLines }}</span>
                <span>最后编辑: {{ lastEditTime || '未编辑' }}</span>
              </div>

              <div v-if="savedNotes.length > 0" class="saved-notes">
                <h4>历史记录：</h4>
                <div
                  v-for="(note, index) in savedNotes"
                  :key="index"
                  class="saved-note-item"
                >
                  <div class="note-header">
                    <span class="note-time">{{ note.time }}</span>
                    <button @click="loadNote(index)" class="btn btn-sm">加载</button>
                    <button @click="deleteNote(index)" class="btn btn-sm btn-danger">删除</button>
                  </div>
                  <div class="note-preview">{{ note.content.slice(0, 50) }}...</div>
                </div>
              </div>
            </div>

            <div class="code-example">
              <pre><code>&lt;textarea
  v-model="noteContent"
  @input="noteModified"
  @keydown.ctrl.s.prevent="saveNote"
  @keydown.esc="clearNote"
  @paste="handlePaste"
&gt;&lt;/textarea&gt;

const saveNote = () => {
  savedNotes.value.push({
    content: noteContent.value,
    time: new Date().toLocaleString()
  })
  noteSaved.value = true
}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 知识总结 -->
      <section class="content-section">
        <h2>📚 知识总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>🎯 事件绑定</h3>
            <ul>
              <li>使用 <code>@事件名</code> 监听事件</li>
              <li>支持内联处理器和方法处理器</li>
              <li>可以传递参数和访问事件对象</li>
              <li>使用 <code>$event</code> 访问原生事件</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>⚙️ 事件修饰符</h3>
            <ul>
              <li><code>.stop</code> 阻止冒泡</li>
              <li><code>.prevent</code> 阻止默认行为</li>
              <li><code>.once</code> 只触发一次</li>
              <li><code>.self</code> 只在自身触发</li>
              <li>修饰符可以串联使用</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>⌨️ 按键修饰符</h3>
            <ul>
              <li>基础按键：<code>.enter</code>, <code>.tab</code>, <code>.esc</code></li>
              <li>方向键：<code>.up</code>, <code>.down</code>, <code>.left</code>, <code>.right</code></li>
              <li>系统键：<code>.ctrl</code>, <code>.alt</code>, <code>.shift</code></li>
              <li>支持组合键：<code>@keyup.ctrl.s</code></li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🖱️ 鼠标修饰符</h3>
            <ul>
              <li><code>.left</code> 左键点击</li>
              <li><code>.right</code> 右键点击</li>
              <li><code>.middle</code> 中键点击</li>
              <li>可与事件修饰符组合使用</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 下一课预告 -->
      <section class="content-section next-lesson-preview">
        <h2>🎯 下一课预告</h2>
        <div class="next-lesson-card">
          <h3>第61课：组件基础</h3>
          <p>学习 Vue3 组件的创建、注册和使用，掌握组件化开发的核心概念。</p>
          <ul>
            <li>✨ 组件注册（全局和局部）</li>
            <li>📤 Props 父传子通信</li>
            <li>📥 Emits 子传父通信</li>
            <li>🔄 组件复用和数据隔离</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 1. 基础事件绑定
const clickCount = ref(0)
const lastMessage = ref('')

const incrementCounter = () => {
  clickCount.value++
  lastMessage.value = '点击计数增加了！'
  setTimeout(() => lastMessage.value = '', 2000)
}

const handleClick = (message) => {
  clickCount.value++
  lastMessage.value = `收到消息: ${message}`
  setTimeout(() => lastMessage.value = '', 2000)
}

// 2. 事件对象
const eventInfo = ref(null)
const mousePosition = ref(null)

const showEventInfo = (event) => {
  eventInfo.value = {
    type: event.type,
    target: event.target.tagName,
    clientX: event.clientX,
    clientY: event.clientY,
    timeStamp: Math.floor(event.timeStamp)
  }
}

const updateMousePosition = (event) => {
  mousePosition.value = {
    x: event.offsetX,
    y: event.offsetY
  }
}

// 3. 事件修饰符
const outerClickCount = ref(0)
const outerClickCountStop = ref(0)
const preventMessage = ref('')
const normalClickCount = ref(0)
const onceClickCount = ref(0)
const selfClickCount = ref(0)

const outerClick = () => {
  outerClickCount.value++
  outerClickCountStop.value++
}

const innerClick = () => {
  console.log('内层按钮被点击')
}

const innerClickStop = () => {
  console.log('内层按钮被点击 (阻止冒泡)')
}

const showPreventMessage = () => {
  preventMessage.value = '✓ 默认跳转行为已被阻止'
  setTimeout(() => preventMessage.value = '', 2000)
}

const normalClick = () => {
  normalClickCount.value++
}

const onceClick = () => {
  onceClickCount.value++
}

const selfClick = () => {
  selfClickCount.value++
}

// 4. 按键修饰符
const todoInput = ref('')
const todos = ref([])

const addTodo = () => {
  if (todoInput.value.trim()) {
    todos.value.push(todoInput.value.trim())
    todoInput.value = ''
  }
}

const removeTodo = (index) => {
  todos.value.splice(index, 1)
}

// 方向键控制
const boxPosition = ref({ x: 100, y: 100 })

const moveBox = (direction) => {
  const step = 10
  switch(direction) {
    case 'up':
      boxPosition.value.y = Math.max(0, boxPosition.value.y - step)
      break
    case 'down':
      boxPosition.value.y = Math.min(150, boxPosition.value.y + step)
      break
    case 'left':
      boxPosition.value.x = Math.max(0, boxPosition.value.x - step)
      break
    case 'right':
      boxPosition.value.x = Math.min(250, boxPosition.value.x + step)
      break
  }
}

// 组合键
const comboInput = ref('')
const comboMessage = ref('')
const savedContent = ref('')

const saveContent = () => {
  savedContent.value = comboInput.value
  comboMessage.value = '✓ 内容已保存 (Ctrl+S)'
  setTimeout(() => comboMessage.value = '', 2000)
}

const copyContent = () => {
  comboMessage.value = '✓ 内容已复制 (Ctrl+C)'
  setTimeout(() => comboMessage.value = '', 2000)
}

const clearContent = () => {
  comboInput.value = ''
  comboMessage.value = '✓ 内容已清空 (Esc)'
  setTimeout(() => comboMessage.value = '', 2000)
}

// 5. 鼠标按钮
const mouseButtonMessage = ref('')

const handleMouseButton = (button) => {
  mouseButtonMessage.value = `检测到${button}点击！`
  setTimeout(() => mouseButtonMessage.value = '', 2000)
}

// 6. 综合练习：记事本
const noteContent = ref('')
const noteSaved = ref(true)
const savedNotes = ref([])
const lastEditTime = ref('')

const noteLines = computed(() => {
  return noteContent.value.split('\n').length
})

const noteModified = () => {
  noteSaved.value = false
  lastEditTime.value = new Date().toLocaleTimeString()
}

const saveNote = () => {
  if (noteContent.value.trim()) {
    savedNotes.value.unshift({
      content: noteContent.value,
      time: new Date().toLocaleString()
    })
    noteSaved.value = true
  }
}

const clearNote = () => {
  if (confirm('确定要清空笔记吗？')) {
    noteContent.value = ''
    noteSaved.value = true
    lastEditTime.value = ''
  }
}

const handlePaste = () => {
  noteModified()
}

const loadNote = (index) => {
  noteContent.value = savedNotes.value[index].content
  noteSaved.value = true
}

const deleteNote = (index) => {
  savedNotes.value.splice(index, 1)
}
</script>

<style scoped>
.lesson-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.lesson-header {
  text-align: center;
  margin-bottom: 48px;
  padding: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
}

.lesson-header h1 {
  font-size: 36px;
  margin-bottom: 12px;
}

.lesson-subtitle {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 16px;
}

.lesson-meta {
  display: flex;
  gap: 24px;
  justify-content: center;
  font-size: 14px;
}

.content-section {
  margin-bottom: 48px;
}

.content-section h2 {
  font-size: 28px;
  color: var(--primary-blue);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 3px solid var(--primary-blue);
}

.info-box {
  background: var(--info-bg);
  border-left: 4px solid var(--primary-blue);
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
}

.info-box h3 {
  margin-top: 0;
  color: var(--primary-blue);
}

.info-box pre {
  background: white;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
}

.demo-box {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
}

.demo-box h3 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 20px;
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* 计数器演示 */
.counter-demo {
  padding: 20px;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  border-radius: 8px;
}

.counter-display {
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.counter-label {
  font-size: 18px;
  color: #666;
  margin-right: 12px;
}

.counter-value {
  font-size: 48px;
  font-weight: bold;
  color: var(--primary-blue);
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.message-display {
  margin-top: 16px;
  padding: 12px;
  background: var(--success-bg);
  border-radius: 6px;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

/* 事件对象演示 */
.event-demo {
  padding: 20px;
}

.event-trigger-btn {
  width: 100%;
  padding: 60px 20px;
  font-size: 18px;
}

.event-info-display {
  margin-top: 20px;
  padding: 20px;
  background: var(--info-bg);
  border-radius: 8px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.info-item {
  padding: 12px;
  background: white;
  border-radius: 6px;
}

.info-label {
  font-weight: 600;
  color: #666;
  margin-right: 8px;
}

.info-value {
  color: var(--primary-blue);
  font-weight: 500;
}

.mouse-position {
  margin-top: 12px;
  padding: 12px;
  background: var(--warning-bg);
  border-radius: 6px;
  text-align: center;
  font-family: monospace;
}

/* 事件修饰符演示 */
.modifiers-demo {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.modifier-example {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.modifier-example h4 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 16px;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.comparison-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
}

.comparison-title {
  font-weight: 600;
  color: #666;
  margin-bottom: 12px;
  font-size: 14px;
}

.outer-box {
  padding: 20px;
  background: var(--info-bg);
  border: 2px dashed var(--primary-blue);
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: background 0.2s;
}

.outer-box:hover {
  background: #cfe2ff;
}

.outer-box button {
  margin-top: 12px;
}

.demo-link {
  display: inline-block;
  padding: 10px 20px;
  background: var(--primary-blue);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.2s;
}

.demo-link:hover {
  background: var(--primary-blue-hover);
}

.prevent-msg {
  margin-top: 12px;
  padding: 8px;
  background: var(--success-bg);
  border-radius: 4px;
  text-align: center;
  animation: fadeIn 0.3s;
}

.self-demo-box {
  padding: 40px;
  background: var(--warning-bg);
  border: 2px dashed #ff9800;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
}

.self-demo-box button {
  margin-top: 16px;
}

.modifier-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modifier-item {
  padding: 12px;
  background: white;
  border-radius: 6px;
  border-left: 3px solid var(--primary-blue);
}

.modifier-item code {
  font-weight: 600;
  color: var(--primary-blue);
  margin-right: 8px;
}

/* 按键修饰符 */
.key-modifier-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 16px;
}

.key-category {
  background: white;
  padding: 16px;
  border-radius: 8px;
}

.key-category h4 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 12px;
}

.key-category ul {
  margin: 0;
  padding-left: 20px;
  list-style: none;
}

.key-category li {
  padding: 6px 0;
}

.key-category code {
  background: var(--info-bg);
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 600;
}

/* 键盘演示 */
.keyboard-demo {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.key-example {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.key-example h4 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 16px;
}

.input-group {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.input-field {
  flex: 1;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.input-field:focus {
  outline: none;
  border-color: var(--primary-blue);
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin-bottom: 8px;
}

.btn-remove {
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  transition: background 0.2s;
}

.btn-remove:hover {
  background: #cc0000;
}

/* 方向键控制 */
.arrow-control {
  padding: 20px;
  background: white;
  border-radius: 8px;
}

.instruction {
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
}

.game-area {
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(to bottom, #e3f2fd, #bbdefb);
  border: 2px solid var(--primary-blue);
  border-radius: 8px;
  overflow: hidden;
}

.movable-box {
  position: absolute;
  width: 40px;
  height: 40px;
  font-size: 30px;
  transition: all 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.position-info {
  margin-top: 12px;
  text-align: center;
  font-family: monospace;
  color: #666;
}

/* 组合键 */
.combo-demo {
  padding: 20px;
  background: white;
  border-radius: 8px;
}

.combo-message {
  margin-top: 12px;
  padding: 12px;
  background: var(--success-bg);
  border-radius: 6px;
  text-align: center;
  animation: fadeIn 0.3s;
}

.saved-content {
  margin-top: 16px;
  padding: 16px;
  background: var(--info-bg);
  border-radius: 6px;
}

.saved-content h5 {
  margin-top: 0;
  color: var(--primary-blue);
}

/* 鼠标按钮 */
.mouse-demo {
  padding: 20px;
}

.mouse-test-area {
  padding: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
}

.mouse-test-area p {
  margin: 8px 0;
}

.mouse-message {
  margin-top: 16px;
  padding: 16px;
  background: var(--success-bg);
  border-radius: 6px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  animation: fadeIn 0.3s;
}

/* 记事本应用 */
.notepad-app {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.notepad-toolbar {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 16px;
  background: #f8f9fa;
  border-bottom: 2px solid #e0e0e0;
}

.save-indicator {
  margin-left: auto;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  background: #ffc107;
  color: white;
  transition: all 0.3s;
}

.save-indicator.saved {
  background: var(--success-green);
}

.notepad-textarea {
  width: 100%;
  min-height: 300px;
  padding: 20px;
  border: none;
  font-size: 16px;
  font-family: 'Monaco', 'Menlo', monospace;
  resize: vertical;
  line-height: 1.6;
}

.notepad-textarea:focus {
  outline: none;
}

.notepad-stats {
  display: flex;
  gap: 24px;
  padding: 12px 16px;
  background: #f8f9fa;
  border-top: 2px solid #e0e0e0;
  font-size: 13px;
  color: #666;
}

.saved-notes {
  padding: 20px;
  background: #f8f9fa;
  border-top: 2px solid #e0e0e0;
}

.saved-notes h4 {
  margin-top: 0;
  color: var(--primary-blue);
}

.saved-note-item {
  background: white;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #e0e0e0;
}

.note-header {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
}

.note-time {
  flex: 1;
  font-size: 12px;
  color: #666;
}

.note-preview {
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 按钮样式 */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 13px;
}

.btn-primary {
  background: var(--primary-blue);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-blue-hover);
  transform: translateY(-1px);
}

.btn-success {
  background: var(--success-green);
  color: white;
}

.btn-success:hover {
  background: #28a745;
}

.btn-info {
  background: #17a2b8;
  color: white;
}

.btn-info:hover {
  background: #138496;
}

.btn-warning {
  background: #ffc107;
  color: #333;
}

.btn-warning:hover {
  background: #e0a800;
}

.btn-danger {
  background: #dc3545;
  color: white;
}

.btn-danger:hover {
  background: #c82333;
}

/* 代码示例 */
.code-example {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
}

.code-example pre {
  margin: 0;
  overflow-x: auto;
}

.code-example code {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  line-height: 1.6;
}

/* 知识总结 */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.summary-card {
  background: white;
  border: 2px solid var(--primary-blue);
  border-radius: 12px;
  padding: 20px;
}

.summary-card h3 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 16px;
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

/* 动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .lesson-container {
    padding: 16px;
  }

  .lesson-header h1 {
    font-size: 28px;
  }

  .button-group {
    flex-direction: column;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .key-modifier-grid {
    grid-template-columns: 1fr;
  }

  .summary-grid {
    grid-template-columns: 1fr;
  }
}
</style>
