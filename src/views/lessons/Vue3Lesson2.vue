<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第55课：模板语法</h1>
      <p class="lesson-subtitle">掌握 Vue 模板中的插值、属性绑定和事件处理</p>
    </div>

    <div class="lesson-content">
      <!-- 插值表达式 -->
      <section class="content-section">
        <h2>插值表达式 <span v-pre>{{ }}</span></h2>
        <p>Vue 使用双大括号 <code v-pre>{{ }}</code> 进行文本插值，这是最基本的数据绑定形式。</p>

        <div class="info-box">
          <h3>基础用法</h3>
          <pre v-pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;{{ message }}&lt;/p&gt;
    &lt;p&gt;{{ count * 2 }}&lt;/p&gt;
    &lt;p&gt;{{ isActive ? '激活' : '未激活' }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div class="demo-box">
          <h3>🎯 实时演示</h3>
          <div class="demo-content">
            <div class="demo-controls">
              <label>修改消息：</label>
              <input v-model="message" type="text" class="input-field" />
              <label>修改计数：</label>
              <input v-model.number="count" type="number" class="input-field" />
            </div>
            <div class="demo-result">
              <div class="result-item">
                <span class="label">原始消息：</span>
                <span class="value">{{ message }}</span>
              </div>
              <div class="result-item">
                <span class="label">计数翻倍：</span>
                <span class="value">{{ count * 2 }}</span>
              </div>
              <div class="result-item">
                <span class="label">状态：</span>
                <span class="value">{{ count > 0 ? '正数' : count < 0 ? '负数' : '零' }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="tip-box">
          <strong>💡 提示：</strong>插值表达式中可以使用 JavaScript 表达式，但不能使用语句（如 if、for）
        </div>
      </section>

      <!-- v-bind 属性绑定 -->
      <section class="content-section">
        <h2>v-bind 属性绑定</h2>
        <p>使用 <code>v-bind</code> 指令（简写为 <code>:</code>）可以动态绑定 HTML 属性。</p>

        <div class="info-box">
          <h3>绑定各种属性</h3>
          <pre><code>&lt;!-- 完整语法 --&gt;
&lt;img v-bind:src="imageUrl" v-bind:alt="imageAlt" /&gt;

&lt;!-- 简写语法（推荐） --&gt;
&lt;img :src="imageUrl" :alt="imageAlt" /&gt;

&lt;!-- 绑定 class --&gt;
&lt;div :class="{ active: isActive, 'text-danger': hasError }"&gt;&lt;/div&gt;

&lt;!-- 绑定 style --&gt;
&lt;div :style="{ color: textColor, fontSize: fontSize + 'px' }"&gt;&lt;/div&gt;</code></pre>
        </div>

        <h3>动态绑定示例</h3>
        <CodeEditor
          :initial-html='`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>v-bind 示例</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
  <style>
    .box {
      width: 200px;
      height: 200px;
      margin: 20px auto;
      border: 2px solid #333;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      transition: all 0.3s;
    }
    .active {
      background-color: #42b983;
      color: white;
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <div id="app">
    <div class="box" :class="{ active: isActive }">
      {{ isActive ? "激活状态" : "普通状态" }}
    </div>
    <button @click="isActive = !isActive">切换状态</button>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const isActive = ref(false);
        return { isActive };
      }
    }).mount("#app");
  <\/script>
</body>
</html>`'
          :initial-css="''"
          :initial-js="''"
          :auto-run="true"
        />

        <h3>🎯 交互演示：动态样式</h3>
        <div class="style-demo">
          <div class="style-controls">
            <div class="control-row">
              <label>背景颜色：</label>
              <input v-model="bgColor" type="color" />
              <span>{{ bgColor }}</span>
            </div>
            <div class="control-row">
              <label>文字颜色：</label>
              <input v-model="textColor" type="color" />
              <span>{{ textColor }}</span>
            </div>
            <div class="control-row">
              <label>字体大小：</label>
              <input v-model.number="fontSize" type="range" min="12" max="48" />
              <span>{{ fontSize }}px</span>
            </div>
            <div class="control-row">
              <label>圆角：</label>
              <input v-model.number="borderRadius" type="range" min="0" max="50" />
              <span>{{ borderRadius }}px</span>
            </div>
          </div>
          <div
            class="style-preview"
            :style="{
              backgroundColor: bgColor,
              color: textColor,
              fontSize: fontSize + 'px',
              borderRadius: borderRadius + 'px'
            }"
          >
            这是动态样式的文本
          </div>
        </div>
      </section>

      <!-- v-on 事件绑定 -->
      <section class="content-section">
        <h2>v-on 事件绑定</h2>
        <p>使用 <code>v-on</code> 指令（简写为 <code>@</code>）可以监听 DOM 事件。</p>

        <div class="info-box">
          <h3>事件绑定语法</h3>
          <pre><code>&lt;!-- 完整语法 --&gt;
&lt;button v-on:click="handleClick"&gt;点击我&lt;/button&gt;

&lt;!-- 简写语法（推荐） --&gt;
&lt;button @click="handleClick"&gt;点击我&lt;/button&gt;

&lt;!-- 内联处理器 --&gt;
&lt;button @click="count++"&gt;增加&lt;/button&gt;

&lt;!-- 传递参数 --&gt;
&lt;button @click="greet('Hello')"&gt;问候&lt;/button&gt;

&lt;!-- 访问事件对象 --&gt;
&lt;button @click="handleClick($event)"&gt;获取事件&lt;/button&gt;</code></pre>
        </div>

        <h3>常见事件类型</h3>
        <div class="event-demo">
          <div class="event-item">
            <h4>@click - 点击事件</h4>
            <button @click="clickCounter++" class="demo-button">
              点击次数: {{ clickCounter }}
            </button>
          </div>

          <div class="event-item">
            <h4>@input - 输入事件</h4>
            <input
              @input="inputValue = $event.target.value"
              type="text"
              placeholder="实时输入"
              class="input-field"
            />
            <p>输入内容: {{ inputValue }}</p>
          </div>

          <div class="event-item">
            <h4>@mouseenter / @mouseleave - 鼠标事件</h4>
            <div
              @mouseenter="isHovering = true"
              @mouseleave="isHovering = false"
              class="hover-box"
              :class="{ hovering: isHovering }"
            >
              {{ isHovering ? '鼠标在里面' : '鼠标移到这里' }}
            </div>
          </div>

          <div class="event-item">
            <h4>@keyup - 键盘事件</h4>
            <input
              @keyup.enter="handleEnter"
              v-model="keyboardInput"
              type="text"
              placeholder="按 Enter 键"
              class="input-field"
            />
            <p v-if="lastEnterValue">上次输入: {{ lastEnterValue }}</p>
          </div>
        </div>

        <div class="tip-box">
          <strong>💡 事件修饰符：</strong>
          <ul>
            <li><code>@click.stop</code> - 阻止事件冒泡</li>
            <li><code>@submit.prevent</code> - 阻止默认行为</li>
            <li><code>@keyup.enter</code> - 只在按下 Enter 键时触发</li>
            <li><code>@click.once</code> - 只触发一次</li>
          </ul>
        </div>
      </section>

      <!-- 模板语法实验室 -->
      <section class="content-section">
        <h2>🎯 模板语法实验室</h2>
        <p>综合运用插值、属性绑定和事件处理，创建一个完整的交互示例：</p>

        <CodeEditor
          :initial-html='`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>模板语法实验室</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #f5f5f5;
    }
    .card {
      max-width: 500px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    h1 {
      color: #333;
      margin-bottom: 20px;
      text-align: center;
    }
    .profile {
      text-align: center;
      margin-bottom: 30px;
    }
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      transition: transform 0.3s;
    }
    .avatar:hover {
      transform: scale(1.1);
    }
    .input-group {
      margin-bottom: 15px;
    }
    .input-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #555;
    }
    .input-group input {
      width: 100%;
      padding: 10px;
      border: 2px solid #ddd;
      border-radius: 6px;
      font-size: 16px;
    }
    .input-group input:focus {
      outline: none;
      border-color: #42b983;
    }
    .greeting {
      background: #42b983;
      color: white;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      font-size: 18px;
      margin-top: 20px;
    }
    .stats {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 2px solid #eee;
    }
    .stat {
      text-align: center;
    }
    .stat-value {
      font-size: 32px;
      font-weight: bold;
      color: #42b983;
    }
    .stat-label {
      font-size: 14px;
      color: #888;
    }
  </style>
</head>
<body>
  <div id="app">
    <div class="card">
      <h1>个人资料卡片</h1>

      <div class="profile">
        <div
          class="avatar"
          :style="{ backgroundColor: avatarColor }"
          @click="changeColor"
          title="点击更换颜色"
        >
          {{ name.charAt(0) || "?" }}
        </div>
      </div>

      <div class="input-group">
        <label>姓名：</label>
        <input
          type="text"
          v-model="name"
          placeholder="请输入你的名字"
          @input="inputCount++"
        />
      </div>

      <div class="input-group">
        <label>年龄：</label>
        <input
          type="number"
          v-model.number="age"
          placeholder="请输入年龄"
        />
      </div>

      <div class="greeting">
        {{ greeting }}
      </div>

      <div class="stats">
        <div class="stat">
          <div class="stat-value">{{ inputCount }}</div>
          <div class="stat-label">输入次数</div>
        </div>
        <div class="stat">
          <div class="stat-value">{{ colorChangeCount }}</div>
          <div class="stat-label">换色次数</div>
        </div>
      </div>
    </div>
  </div>

  <script>
    const { createApp, ref, computed } = Vue;

    createApp({
      setup() {
        const name = ref("访客");
        const age = ref(18);
        const avatarColor = ref("#42b983");
        const inputCount = ref(0);
        const colorChangeCount = ref(0);

        const greeting = computed(() => {
          if (!name.value) return "请输入你的名字";
          if (age.value < 18) {
            return \`你好，\${name.value}！你还是个未成年人\`;
          } else if (age.value < 60) {
            return \`欢迎你，\${name.value}！正值青壮年\`;
          } else {
            return \`尊敬的 \${name.value}，祝您健康长寿！\`;
          }
        });

        const changeColor = () => {
          const colors = [
            "#42b983", "#3b82f6", "#8b5cf6",
            "#ec4899", "#f59e0b", "#10b981"
          ];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          avatarColor.value = randomColor;
          colorChangeCount.value++;
        };

        return {
          name,
          age,
          avatarColor,
          inputCount,
          colorChangeCount,
          greeting,
          changeColor
        };
      }
    }).mount("#app");
  <\/script>
</body>
</html>`'
          :initial-css="''"
          :initial-js="''"
          :auto-run="true"
        />
      </section>

      <!-- 总结 -->
      <section class="content-section">
        <h2>📚 本课总结</h2>
        <div class="summary-box">
          <h3>插值表达式 {{ }}</h3>
          <ul>
            <li>用于文本插值，显示响应式数据</li>
            <li>支持 JavaScript 表达式，如运算、三元表达式</li>
            <li>不能使用语句（if、for、while 等）</li>
          </ul>

          <h3>v-bind 属性绑定（简写 :）</h3>
          <ul>
            <li>动态绑定 HTML 属性：<code>:src</code>、<code>:href</code>、<code>:id</code></li>
            <li>绑定 class：<code>:class="{ active: isActive }"</code></li>
            <li>绑定 style：<code>:style="{ color: textColor }"</code></li>
            <li>可以绑定对象、数组等复杂数据</li>
          </ul>

          <h3>v-on 事件绑定（简写 @）</h3>
          <ul>
            <li>监听 DOM 事件：<code>@click</code>、<code>@input</code>、<code>@keyup</code></li>
            <li>可以使用内联处理器：<code>@click="count++"</code></li>
            <li>可以传递参数：<code>@click="handleClick('arg')"</code></li>
            <li>支持事件修饰符：<code>.stop</code>、<code>.prevent</code>、<code>.enter</code></li>
          </ul>
        </div>
      </section>

      <!-- 下一课预告 -->
      <div class="next-lesson">
        <h3>下一课预告</h3>
        <p>第56课：计算属性与侦听器 - 学习如何使用 computed 和 watch</p>
        <router-link to="/lessons/vue3/lesson-3" class="next-button">
          前往下一课 →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeEditor from '../../components/CodeEditor.vue'

// 插值演示
const message = ref('Hello Vue!')
const count = ref(10)

// 样式演示
const bgColor = ref('#42b983')
const textColor = ref('#ffffff')
const fontSize = ref(24)
const borderRadius = ref(8)

// 事件演示
const clickCounter = ref(0)
const inputValue = ref('')
const isHovering = ref(false)
const keyboardInput = ref('')
const lastEnterValue = ref('')

const handleEnter = () => {
  lastEnterValue.value = keyboardInput.value
  keyboardInput.value = ''
}
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

.demo-box {
  background: #fefce8;
  padding: 24px;
  border-radius: 8px;
  margin: 24px 0;
  border: 2px solid #fbbf24;
}

.demo-box h3 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #92400e;
}

.demo-content {
  display: grid;
  gap: 20px;
}

.demo-controls label {
  display: block;
  font-weight: 600;
  margin: 12px 0 6px;
  color: #374151;
}

.input-field {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
}

.input-field:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
}

.demo-result {
  background: white;
  padding: 20px;
  border-radius: 6px;
  margin-top: 16px;
}

.result-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 8px;
  background: #f9fafb;
  border-radius: 4px;
}

.result-item .label {
  font-weight: 600;
  color: #4b5563;
}

.result-item .value {
  color: #42b983;
  font-weight: 600;
}

.style-demo {
  background: #f9fafb;
  padding: 24px;
  border-radius: 8px;
  margin: 20px 0;
}

.style-controls {
  margin-bottom: 24px;
}

.control-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.control-row label {
  min-width: 100px;
  font-weight: 600;
  color: #374151;
}

.control-row input[type="color"] {
  width: 50px;
  height: 32px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  cursor: pointer;
}

.control-row input[type="range"] {
  flex: 1;
}

.control-row span {
  min-width: 80px;
  color: #6b7280;
}

.style-preview {
  padding: 40px;
  text-align: center;
  font-weight: 600;
  border: 2px solid #e5e7eb;
  transition: all 0.3s;
}

.event-demo {
  display: grid;
  gap: 24px;
  margin: 20px 0;
}

.event-item {
  background: #f9fafb;
  padding: 20px;
  border-radius: 8px;
}

.event-item h4 {
  margin: 0 0 12px;
  color: #1f2937;
  font-size: 16px;
}

.demo-button {
  padding: 10px 20px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.demo-button:hover {
  background: #359268;
  transform: translateY(-2px);
}

.demo-button:active {
  transform: translateY(0);
}

.hover-box {
  padding: 40px;
  background: #e5e7eb;
  border: 2px dashed #9ca3af;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
}

.hover-box.hovering {
  background: #42b983;
  color: white;
  border-color: #42b983;
  border-style: solid;
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
