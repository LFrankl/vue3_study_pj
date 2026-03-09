<template>
  <div class="code-editor">
    <div class="editor-tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        {{ tab.toUpperCase() }}
      </button>
      <button class="btn-run" @click="runCode">
        ▶ 运行
      </button>
    </div>

    <div class="editor-content">
      <div v-show="activeTab === 'html'" class="editor-panel">
        <textarea
          v-model="htmlCode"
          @input="autoRun && runCode()"
          placeholder="在此输入 HTML 代码..."
          spellcheck="false"
        ></textarea>
      </div>

      <div v-show="activeTab === 'css'" class="editor-panel">
        <textarea
          v-model="cssCode"
          @input="autoRun && runCode()"
          placeholder="在此输入 CSS 代码..."
          spellcheck="false"
        ></textarea>
      </div>

      <div v-show="activeTab === 'js'" class="editor-panel">
        <textarea
          v-model="jsCode"
          @input="autoRun && runCode()"
          placeholder="在此输入 JavaScript 代码..."
          spellcheck="false"
        ></textarea>
      </div>
    </div>

    <div class="preview-panel">
      <div class="preview-header">
        <span>预览</span>
        <button class="btn-reset" @click="resetCode">重置</button>
      </div>
      <iframe
        ref="previewFrame"
        class="preview-frame"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  initialHtml: {
    type: String,
    default: ''
  },
  initialCss: {
    type: String,
    default: ''
  },
  initialJs: {
    type: String,
    default: ''
  },
  tabs: {
    type: Array,
    default: () => ['html', 'css', 'js']
  },
  autoRun: {
    type: Boolean,
    default: true
  }
})

const activeTab = ref('html')
const htmlCode = ref(props.initialHtml)
const cssCode = ref(props.initialCss)
const jsCode = ref(props.initialJs)
const previewFrame = ref(null)

const runCode = () => {
  const iframe = previewFrame.value
  const document = iframe.contentDocument

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 16px; font-family: Arial, sans-serif; }
        ${cssCode.value}
      </style>
    </head>
    <body>
      ${htmlCode.value}
      <script>
        try {
          ${jsCode.value}
        } catch (error) {
          document.body.innerHTML += '<div style="color: red; margin-top: 20px; padding: 10px; background: #fee; border: 1px solid red; border-radius: 4px;">错误: ' + error.message + '</div>';
        }
      <\/script>
    </body>
    </html>
  `

  document.open()
  document.write(html)
  document.close()
}

const resetCode = () => {
  htmlCode.value = props.initialHtml
  cssCode.value = props.initialCss
  jsCode.value = props.initialJs
  runCode()
}

onMounted(() => {
  runCode()
})
</script>

<style scoped>
.code-editor {
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  background: #1e1e1e;
}

.editor-tabs {
  display: flex;
  gap: 4px;
  background: #2d2d2d;
  padding: 8px;
  border-bottom: 1px solid #3d3d3d;
}

.tab {
  padding: 6px 16px;
  background: transparent;
  color: #888;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s;
}

.tab:hover {
  background: #3d3d3d;
  color: #fff;
}

.tab.active {
  background: #1e1e1e;
  color: #4fc3f7;
}

.btn-run {
  margin-left: auto;
  padding: 6px 16px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-run:hover {
  background: #45a049;
}

.editor-content {
  height: 250px;
  position: relative;
}

.editor-panel {
  height: 100%;
}

.editor-panel textarea {
  width: 100%;
  height: 100%;
  padding: 16px;
  background: #1e1e1e;
  color: #d4d4d4;
  border: none;
  outline: none;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
}

.preview-panel {
  border-top: 1px solid #3d3d3d;
  background: white;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #f5f5f5;
  border-bottom: 1px solid var(--border);
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
}

.btn-reset {
  padding: 4px 12px;
  background: white;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  transition: all 0.2s;
}

.btn-reset:hover {
  background: var(--surface);
  color: var(--text-primary);
}

.preview-frame {
  width: 100%;
  height: 300px;
  border: none;
  background: white;
}
</style>
