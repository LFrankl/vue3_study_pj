<template>
  <div class="container" style="margin-top: 80px; padding: 40px;">
    <h1 class="page-title">交互功能测试页面</h1>

    <!-- 测试1：代码编辑器 -->
    <section class="section">
      <h2 class="section-title">测试1: 代码编辑器</h2>
      <p>修改下面的代码，点击"运行"按钮查看效果：</p>
      <CodeEditor
        initial-html="<h1>Hello World</h1>
<p>这是一个测试段落。</p>
<button onclick='alert(&#34;按钮被点击了!&#34;)'>点击我</button>"
        initial-css="h1 { color: blue; }
p { color: green; }"
        initial-js="console.log('JavaScript is working!');"
        :tabs="['html', 'css', 'js']"
        :auto-run="false"
      />
    </section>

    <!-- 测试2：按钮点击 -->
    <section class="section">
      <h2 class="section-title">测试2: 按钮点击响应</h2>
      <div class="demo-box">
        <p><strong>点击计数:</strong> {{ clickCount }}</p>
        <button @click="clickCount++" class="btn btn-primary">点击我增加计数</button>
        <button @click="clickCount = 0" class="btn btn-secondary" style="margin-left: 10px;">重置</button>
      </div>
    </section>

    <!-- 测试3：标签选择器 -->
    <section class="section">
      <h2 class="section-title">测试3: 标签选择器</h2>
      <div class="demo-box">
        <p><strong>当前选中:</strong> {{ selectedTag }}</p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px;">
          <button
            v-for="tag in testTags"
            :key="tag"
            :class="['btn', selectedTag === tag ? 'btn-primary' : 'btn-secondary']"
            @click="selectedTag = tag"
          >
            {{ tag }}
          </button>
        </div>
        <div style="margin-top: 20px; padding: 20px; background: var(--info-bg); border-radius: 8px;">
          <p><strong>选中的标签:</strong> &lt;{{ selectedTag }}&gt;</p>
        </div>
      </div>
    </section>

    <!-- 测试4：输入框双向绑定 -->
    <section class="section">
      <h2 class="section-title">测试4: 输入框双向绑定</h2>
      <div class="demo-box">
        <input v-model="inputText" type="text" class="input" placeholder="输入文字..." style="margin-bottom: 16px;" />
        <p><strong>输入的内容:</strong> {{ inputText }}</p>
        <p><strong>字符数:</strong> {{ inputText.length }}</p>
      </div>
    </section>

    <!-- 测试5：v-html 渲染 -->
    <section class="section">
      <h2 class="section-title">测试5: HTML 内容渲染</h2>
      <div class="demo-box">
        <p><strong>选择标签效果:</strong></p>
        <div style="display: flex; gap: 10px; margin: 16px 0;">
          <button @click="htmlContent = '<strong>这是粗体</strong>'" class="btn btn-secondary">粗体</button>
          <button @click="htmlContent = '<em>这是斜体</em>'" class="btn btn-secondary">斜体</button>
          <button @click="htmlContent = '<mark>这是高亮</mark>'" class="btn btn-secondary">高亮</button>
        </div>
        <div style="padding: 20px; background: white; border-radius: 8px; border: 2px dashed var(--border);">
          <div v-html="htmlContent"></div>
        </div>
      </div>
    </section>

    <!-- 测试6：条件渲染 -->
    <section class="section">
      <h2 class="section-title">测试6: 条件渲染</h2>
      <div class="demo-box">
        <button @click="showContent = !showContent" class="btn btn-primary">
          {{ showContent ? '隐藏' : '显示' }}内容
        </button>
        <div v-if="showContent" style="margin-top: 16px; padding: 20px; background: var(--success-bg); border-radius: 8px;">
          <p><strong>✓</strong> 这是条件渲染的内容！</p>
        </div>
      </div>
    </section>

    <!-- 诊断信息 -->
    <section class="section">
      <h2 class="section-title">🔍 诊断信息</h2>
      <div class="card">
        <h3 style="margin-bottom: 16px;">Vue 响应式状态</h3>
        <pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto;">{{
          JSON.stringify({
            clickCount: clickCount,
            selectedTag: selectedTag,
            inputText: inputText,
            htmlContent: htmlContent,
            showContent: showContent
          }, null, 2)
        }}</pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeEditor from '@/components/CodeEditor.vue'

const clickCount = ref(0)
const selectedTag = ref('div')
const testTags = ['div', 'span', 'p', 'h1', 'strong', 'em']
const inputText = ref('Hello Vue3!')
const htmlContent = ref('<strong>这是粗体</strong>')
const showContent = ref(true)
</script>

<style scoped>
.section {
  margin-bottom: 48px;
}

.section-title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--border);
}

.demo-box {
  padding: 24px;
  background: var(--surface);
  border-radius: 8px;
  margin-top: 16px;
}

.input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 14px;
}

.input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px var(--info-bg);
}
</style>
