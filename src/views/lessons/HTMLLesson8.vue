<template>
  <LessonLayout
    :lesson-number="8"
    lesson-title="HTML5 新特性"
    :prev-lesson="{ name: 'HTMLLesson7', title: '第7课：语义化标签' }"
    :next-lesson="null"
  >
    <!-- 课程简介 -->
    <section class="lesson-section">
      <h2>本课内容</h2>
      <p>HTML5 带来了许多强大的新特性，让网页应用更加丰富和强大。本课将学习：</p>
      <ul>
        <li>Canvas 画布绘图</li>
        <li>SVG 矢量图形</li>
        <li>Web Storage 本地存储</li>
        <li>Geolocation 地理定位</li>
        <li>Drag and Drop 拖放</li>
        <li>新的表单特性</li>
      </ul>
    </section>

    <!-- Canvas 画布 -->
    <section class="lesson-section">
      <h2>1. Canvas 画布</h2>
      <p><code>&lt;canvas&gt;</code> 元素用于通过 JavaScript 绘制图形。</p>

      <div class="concept-box">
        <h3>基本语法</h3>
        <pre><code>&lt;canvas id="myCanvas" width="300" height="150"&gt;&lt;/canvas&gt;

&lt;script&gt;
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // 绘制矩形
  ctx.fillStyle = '#4285f4';
  ctx.fillRect(20, 20, 100, 60);

  // 绘制圆形
  ctx.fillStyle = '#ea4335';
  ctx.beginPath();
  ctx.arc(200, 50, 40, 0, Math.PI * 2);
  ctx.fill();
&lt;/script&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>实例：Canvas 绘图</h3>
        <CodeEditor
          :initial-html="`<canvas id='myCanvas' width='400' height='200' style='border: 1px solid #ddd;'></canvas>`"
          :initial-css="``"
          :initial-js="`const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 绘制渐变背景
const gradient = ctx.createLinearGradient(0, 0, 400, 0);
gradient.addColorStop(0, '#4285f4');
gradient.addColorStop(1, '#ea4335');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 400, 200);

// 绘制文字
ctx.fillStyle = 'white';
ctx.font = 'bold 30px Arial';
ctx.fillText('Hello Canvas!', 100, 100);

// 绘制圆形
ctx.fillStyle = '#fbbc04';
ctx.beginPath();
ctx.arc(350, 50, 30, 0, Math.PI * 2);
ctx.fill();`"
          :auto-run="true"
        />
      </div>

      <div class="tip-box">
        <strong>💡 提示：</strong>Canvas 是位图，放大会失真。适合动态绘图、游戏、图表等。
      </div>
    </section>

    <!-- SVG 矢量图形 -->
    <section class="lesson-section">
      <h2>2. SVG 矢量图形</h2>
      <p>SVG（Scalable Vector Graphics）是基于 XML 的矢量图形，无论放大多少倍都不会失真。</p>

      <div class="concept-box">
        <h3>基本语法</h3>
        <pre><code>&lt;svg width="200" height="200"&gt;
  &lt;circle cx="100" cy="100" r="80" fill="#4285f4" /&gt;
  &lt;rect x="50" y="50" width="100" height="100" fill="#ea4335" /&gt;
  &lt;line x1="0" y1="0" x2="200" y2="200" stroke="#34a853" stroke-width="2" /&gt;
&lt;/svg&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>实例：SVG 图形与动画</h3>
        <CodeEditor
          :initial-html="`<svg width='300' height='300' style='border: 1px solid #ddd;'>
  <!-- 圆形 -->
  <circle cx='150' cy='80' r='40' fill='#4285f4'>
    <animate attributeName='r' values='40;50;40' dur='2s' repeatCount='indefinite' />
  </circle>

  <!-- 矩形 -->
  <rect x='100' y='140' width='100' height='60' fill='#ea4335' rx='10'>
    <animate attributeName='x' values='100;120;100' dur='1.5s' repeatCount='indefinite' />
  </rect>

  <!-- 星形路径 -->
  <path d='M150,220 L160,250 L190,250 L165,270 L175,300 L150,280 L125,300 L135,270 L110,250 L140,250 Z'
        fill='#fbbc04' stroke='#f4b400' stroke-width='2' />

  <!-- 文字 -->
  <text x='150' y='30' text-anchor='middle' fill='#34a853' font-size='20' font-weight='bold'>
    SVG Graphics
  </text>
</svg>`"
          :initial-css="``"
          :initial-js="``"
          :auto-run="true"
        />
      </div>

      <div class="comparison-box">
        <h3>Canvas vs SVG</h3>
        <table>
          <thead>
            <tr>
              <th>特性</th>
              <th>Canvas</th>
              <th>SVG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>类型</td>
              <td>位图（像素）</td>
              <td>矢量图（路径）</td>
            </tr>
            <tr>
              <td>缩放</td>
              <td>放大会失真</td>
              <td>任意缩放不失真</td>
            </tr>
            <tr>
              <td>性能</td>
              <td>适合大量元素</td>
              <td>元素多时性能下降</td>
            </tr>
            <tr>
              <td>事件</td>
              <td>需要手动计算</td>
              <td>每个元素可绑定事件</td>
            </tr>
            <tr>
              <td>适用场景</td>
              <td>游戏、图表、实时绘图</td>
              <td>图标、图形、地图</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Web Storage -->
    <section class="lesson-section">
      <h2>3. Web Storage 本地存储</h2>
      <p>HTML5 提供了两种在客户端存储数据的方法：</p>
      <ul>
        <li><strong>localStorage</strong>：永久存储，除非手动清除</li>
        <li><strong>sessionStorage</strong>：会话存储，关闭浏览器后清除</li>
      </ul>

      <div class="concept-box">
        <h3>基本语法</h3>
        <pre><code>// 存储数据
localStorage.setItem('username', 'Alice');
sessionStorage.setItem('tempData', 'value');

// 读取数据
const name = localStorage.getItem('username');

// 删除数据
localStorage.removeItem('username');

// 清空所有数据
localStorage.clear();</code></pre>
      </div>

      <div class="example-box">
        <h3>实例：待办事项列表</h3>
        <CodeEditor
          :initial-html="`<div style='max-width: 400px; margin: 20px auto; padding: 20px; background: #f5f5f5; border-radius: 8px;'>
  <h3 style='margin-top: 0;'>待办事项</h3>
  <div style='display: flex; gap: 10px; margin-bottom: 15px;'>
    <input type='text' id='todoInput' placeholder='输入任务...'
           style='flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px;'>
    <button onclick='addTodo()' style='padding: 8px 20px; background: #4285f4; color: white; border: none; border-radius: 4px; cursor: pointer;'>
      添加
    </button>
  </div>
  <ul id='todoList' style='list-style: none; padding: 0;'></ul>
  <button onclick='clearAll()' style='width: 100%; padding: 8px; background: #ea4335; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;'>
    清空所有
  </button>
</div>`"
          :initial-css="``"
          :initial-js="`// 加载已保存的任务
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  const list = document.getElementById('todoList');
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.style.cssText = 'padding: 10px; background: white; margin-bottom: 8px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;';
    li.innerHTML = \`
      <span>\${todo}</span>
      <button onclick='deleteTodo(\${index})' style='padding: 4px 12px; background: #ea4335; color: white; border: none; border-radius: 4px; cursor: pointer;'>删除</button>
    \`;
    list.appendChild(li);
  });
}

// 添加任务
function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  if (!text) return;

  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.push(text);
  localStorage.setItem('todos', JSON.stringify(todos));

  input.value = '';
  loadTodos();
}

// 删除任务
function deleteTodo(index) {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  loadTodos();
}

// 清空所有
function clearAll() {
  localStorage.removeItem('todos');
  loadTodos();
}

// 页面加载时显示任务
loadTodos();

// 回车添加
document.getElementById('todoInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});`"
          :auto-run="true"
        />
      </div>

      <div class="warning-box">
        <strong>⚠️ 注意：</strong>
        <ul>
          <li>存储大小限制约 5-10MB（因浏览器而异）</li>
          <li>只能存储字符串，对象需用 JSON.stringify/parse</li>
          <li>localStorage 在同源页面间共享</li>
          <li>不要存储敏感信息（如密码、token）</li>
        </ul>
      </div>
    </section>

    <!-- Geolocation -->
    <section class="lesson-section">
      <h2>4. Geolocation 地理定位</h2>
      <p>HTML5 Geolocation API 可以获取用户的地理位置（需要用户授权）。</p>

      <div class="concept-box">
        <h3>基本语法</h3>
        <pre><code>if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(\`位置：\${latitude}, \${longitude}\`);
    },
    (error) => {
      console.error('获取位置失败：', error.message);
    }
  );
} else {
  console.log('浏览器不支持地理定位');
}</code></pre>
      </div>

      <div class="example-box">
        <h3>实例：获取当前位置</h3>
        <CodeEditor
          :initial-html="`<div style='max-width: 500px; margin: 20px auto; padding: 20px; background: #f5f5f5; border-radius: 8px;'>
  <h3 style='margin-top: 0;'>地理定位演示</h3>
  <button onclick='getLocation()' style='width: 100%; padding: 12px; background: #4285f4; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;'>
    获取我的位置
  </button>
  <div id='result' style='margin-top: 15px; padding: 15px; background: white; border-radius: 4px; min-height: 100px;'></div>
</div>`"
          :initial-css="``"
          :initial-js="`function getLocation() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<p style=&quot;color: #999;&quot;>正在获取位置...</p>';

  if (!navigator.geolocation) {
    resultDiv.innerHTML = '<p style=&quot;color: #ea4335;&quot;>❌ 您的浏览器不支持地理定位</p>';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(6);
      const lon = position.coords.longitude.toFixed(6);
      const accuracy = position.coords.accuracy.toFixed(0);

      resultDiv.innerHTML = \`
        <p style='margin: 0 0 8px 0;'><strong>✅ 位置获取成功！</strong></p>
        <p style='margin: 5px 0;'>📍 纬度：\${lat}</p>
        <p style='margin: 5px 0;'>📍 经度：\${lon}</p>
        <p style='margin: 5px 0;'>🎯 精度：约 \${accuracy} 米</p>
        <p style='margin: 10px 0 0 0; font-size: 12px; color: #666;'>
          <a href='https://www.google.com/maps?q=\${lat},\${lon}' target='_blank' style='color: #4285f4;'>
            在 Google 地图中查看 →
          </a>
        </p>
      \`;
    },
    (error) => {
      let errorMsg = '';
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMsg = '用户拒绝了地理定位请求';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMsg = '位置信息不可用';
          break;
        case error.TIMEOUT:
          errorMsg = '获取位置超时';
          break;
        default:
          errorMsg = '发生未知错误';
      }
      resultDiv.innerHTML = \`<p style='color: #ea4335;'>❌ \${errorMsg}</p>\`;
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  );
}`"
          :auto-run="true"
        />
      </div>

      <div class="tip-box">
        <strong>💡 提示：</strong>出于安全考虑，地理定位只在 HTTPS 或 localhost 下可用。
      </div>
    </section>

    <!-- Drag and Drop -->
    <section class="lesson-section">
      <h2>5. Drag and Drop 拖放</h2>
      <p>HTML5 提供了原生的拖放 API，让元素可以被拖动和放置。</p>

      <div class="concept-box">
        <h3>基本语法</h3>
        <pre><code>&lt;!-- 可拖动元素 --&gt;
&lt;div draggable="true" ondragstart="drag(event)"&gt;拖动我&lt;/div&gt;

&lt;!-- 放置区域 --&gt;
&lt;div ondrop="drop(event)" ondragover="allowDrop(event)"&gt;放置区&lt;/div&gt;

&lt;script&gt;
function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function allowDrop(e) {
  e.preventDefault(); // 必须阻止默认行为
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  e.target.appendChild(document.getElementById(data));
}
&lt;/script&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>实例：任务看板</h3>
        <CodeEditor
          :initial-html="`<div style='display: flex; gap: 20px; padding: 20px;'>
  <div class='board' ondrop='drop(event)' ondragover='allowDrop(event)' data-status='todo'>
    <h3>📋 待办</h3>
    <div class='task' draggable='true' ondragstart='drag(event)' id='task1'>任务 1</div>
    <div class='task' draggable='true' ondragstart='drag(event)' id='task2'>任务 2</div>
    <div class='task' draggable='true' ondragstart='drag(event)' id='task3'>任务 3</div>
  </div>

  <div class='board' ondrop='drop(event)' ondragover='allowDrop(event)' data-status='doing'>
    <h3>🔄 进行中</h3>
  </div>

  <div class='board' ondrop='drop(event)' ondragover='allowDrop(event)' data-status='done'>
    <h3>✅ 完成</h3>
  </div>
</div>`"
          :initial-css="`.board {
  flex: 1;
  min-height: 300px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
  border: 2px dashed #ddd;
}

.board h3 {
  margin-top: 0;
  color: #333;
}

.board.drag-over {
  background: #e3f2fd;
  border-color: #4285f4;
}

.task {
  padding: 12px;
  margin-bottom: 10px;
  background: white;
  border-radius: 6px;
  border: 1px solid #ddd;
  cursor: move;
  transition: all 0.2s;
}

.task:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.task.dragging {
  opacity: 0.5;
}`"
          :initial-js="`function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
  e.target.classList.add('dragging');
}

function allowDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function drop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');

  const taskId = e.dataTransfer.getData('text');
  const task = document.getElementById(taskId);

  // 找到最近的 board 容器
  let dropZone = e.target;
  while (dropZone && !dropZone.classList.contains('board')) {
    dropZone = dropZone.parentElement;
  }

  if (dropZone && task) {
    dropZone.appendChild(task);
    task.classList.remove('dragging');
  }
}

// 拖动结束后移除样式
document.addEventListener('dragend', (e) => {
  if (e.target.classList.contains('task')) {
    e.target.classList.remove('dragging');
  }
  document.querySelectorAll('.board').forEach(board => {
    board.classList.remove('drag-over');
  });
});`"
          :auto-run="true"
        />
      </div>
    </section>

    <!-- 其他新特性 -->
    <section class="lesson-section">
      <h2>6. 其他新特性</h2>

      <div class="concept-box">
        <h3>新的输入类型</h3>
        <p>HTML5 新增了许多输入类型（第6课已学习）：</p>
        <ul>
          <li><code>type="email"</code>、<code>type="url"</code>、<code>type="tel"</code></li>
          <li><code>type="date"</code>、<code>type="time"</code>、<code>type="datetime-local"</code></li>
          <li><code>type="number"</code>、<code>type="range"</code></li>
          <li><code>type="color"</code>、<code>type="search"</code></li>
        </ul>
      </div>

      <div class="concept-box">
        <h3>音频和视频</h3>
        <p>原生支持音频和视频播放（第4课已学习）：</p>
        <pre><code>&lt;video controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;

&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;</code></pre>
      </div>

      <div class="concept-box">
        <h3>其他 API</h3>
        <ul>
          <li><strong>Web Workers</strong>：在后台线程运行 JavaScript</li>
          <li><strong>WebSocket</strong>：实时双向通信</li>
          <li><strong>History API</strong>：操作浏览器历史记录</li>
          <li><strong>File API</strong>：读取本地文件</li>
          <li><strong>Notification API</strong>：系统通知</li>
          <li><strong>Fullscreen API</strong>：全屏显示</li>
        </ul>
      </div>
    </section>

    <!-- 浏览器支持 -->
    <section class="lesson-section">
      <h2>7. 浏览器支持</h2>

      <div class="tip-box">
        <strong>💡 检测特性支持：</strong>
        <pre><code>// 检测 Canvas 支持
if (document.createElement('canvas').getContext) {
  console.log('支持 Canvas');
}

// 检测 localStorage 支持
if (typeof(Storage) !== 'undefined') {
  console.log('支持 Web Storage');
}

// 检测 Geolocation 支持
if (navigator.geolocation) {
  console.log('支持地理定位');
}</code></pre>
      </div>

      <div class="warning-box">
        <strong>⚠️ 兼容性建议：</strong>
        <ul>
          <li>始终检测特性是否支持后再使用</li>
          <li>为不支持的浏览器提供降级方案</li>
          <li>使用 <a href="https://caniuse.com" target="_blank">Can I Use</a> 查询兼容性</li>
          <li>考虑使用 polyfill 库提供兼容支持</li>
        </ul>
      </div>
    </section>

    <!-- 课程总结 -->
    <section class="lesson-section summary-section">
      <h2>课程总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <div class="summary-icon">🎨</div>
          <h3>Canvas & SVG</h3>
          <p>Canvas 适合动态绘图，SVG 适合矢量图形</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">💾</div>
          <h3>Web Storage</h3>
          <p>localStorage 永久存储，sessionStorage 会话存储</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">📍</div>
          <h3>Geolocation</h3>
          <p>获取用户地理位置（需授权）</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🎯</div>
          <h3>Drag & Drop</h3>
          <p>原生拖放 API，实现交互式界面</p>
        </div>
      </div>

      <div class="key-points">
        <h3>关键要点</h3>
        <ul>
          <li>HTML5 大幅增强了网页应用能力</li>
          <li>Canvas 和 SVG 各有优势，按需选择</li>
          <li>Web Storage 提供简单的本地存储方案</li>
          <li>地理定位需要用户授权和 HTTPS</li>
          <li>拖放 API 需要正确处理事件和默认行为</li>
          <li>使用前检测浏览器支持情况</li>
        </ul>
      </div>
    </section>

    <!-- 练习题 -->
    <section class="lesson-section practice-section">
      <h2>实践练习</h2>
      <div class="practice-list">
        <div class="practice-item">
          <h3>练习 1：Canvas 时钟</h3>
          <p>使用 Canvas 绘制一个实时时钟，显示时、分、秒针。</p>
        </div>
        <div class="practice-item">
          <h3>练习 2：笔记应用</h3>
          <p>创建一个笔记应用，使用 localStorage 保存和加载笔记。</p>
        </div>
        <div class="practice-item">
          <h3>练习 3：拖放排序</h3>
          <p>实现一个可拖放排序的列表，调整项目顺序。</p>
        </div>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'
</script>

<style scoped>
.lesson-section {
  margin-bottom: 48px;
}

.lesson-section h2 {
  color: var(--primary-blue);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 3px solid var(--primary-blue);
}

.lesson-section h3 {
  color: var(--text-primary);
  margin-top: 24px;
  margin-bottom: 12px;
}

.lesson-section p {
  line-height: 1.8;
  margin-bottom: 16px;
}

.lesson-section ul,
.lesson-section ol {
  line-height: 1.8;
  margin-bottom: 16px;
  padding-left: 24px;
}

.lesson-section li {
  margin-bottom: 8px;
}

.concept-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.concept-box h3 {
  color: white;
  margin-top: 0;
}

.concept-box pre {
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 12px 0 0 0;
}

.concept-box code {
  color: #f0f0f0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.example-box {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  border: 2px solid #e9ecef;
}

.example-box h3 {
  color: var(--primary-blue);
  margin-top: 0;
}

.comparison-box {
  background: #fff3e0;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  border-left: 4px solid #ff9800;
}

.comparison-box h3 {
  color: #f57c00;
  margin-top: 0;
}

.comparison-box table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-box th,
.comparison-box td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ffcc80;
}

.comparison-box th {
  background: #ff9800;
  color: white;
  font-weight: 600;
}

.comparison-box tbody tr:last-child td {
  border-bottom: none;
}

.tip-box {
  background: #e3f2fd;
  padding: 16px 20px;
  border-radius: 8px;
  margin: 24px 0;
  border-left: 4px solid var(--primary-blue);
}

.tip-box strong {
  color: var(--primary-blue);
}

.tip-box pre {
  background: rgba(66, 133, 244, 0.1);
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 12px 0 0 0;
}

.tip-box code {
  color: var(--primary-blue);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.warning-box {
  background: #ffebee;
  padding: 16px 20px;
  border-radius: 8px;
  margin: 24px 0;
  border-left: 4px solid #f44336;
}

.warning-box strong {
  color: #c62828;
}

.warning-box ul {
  margin: 12px 0 0 0;
}

.warning-box li {
  color: #d32f2f;
}

.summary-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 32px;
  border-radius: 16px;
  margin-top: 48px;
}

.summary-section h2 {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.3);
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.summary-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.summary-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.summary-item h3 {
  color: white;
  margin: 12px 0;
}

.summary-item p {
  font-size: 14px;
  opacity: 0.9;
}

.key-points {
  background: rgba(255, 255, 255, 0.1);
  padding: 24px;
  border-radius: 12px;
  margin-top: 24px;
  backdrop-filter: blur(10px);
}

.key-points h3 {
  color: white;
  margin-top: 0;
}

.key-points ul {
  margin: 16px 0 0 0;
}

.key-points li {
  margin-bottom: 8px;
  opacity: 0.95;
}

.practice-section {
  background: #f0f4f8;
  padding: 32px;
  border-radius: 16px;
}

.practice-list {
  display: grid;
  gap: 20px;
  margin-top: 24px;
}

.practice-item {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border-left: 4px solid var(--primary-blue);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.practice-item h3 {
  color: var(--primary-blue);
  margin-top: 0;
}

.practice-item p {
  color: var(--text-secondary);
  margin: 0;
}

code {
  background: rgba(66, 133, 244, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
  color: var(--primary-blue);
}

a {
  color: var(--primary-blue);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
