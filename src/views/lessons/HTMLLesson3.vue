<template>
  <LessonLayout
    lesson-id="html-lesson-3"
    title="第3课：列表与表格"
    :duration="25"
    :prev-lesson="{ path: '/lessons/html/lesson-2', title: '第2课：基础标签' }"
    :next-lesson="{ path: '/lessons/html/lesson-4', title: '第4课：图片与多媒体' }"
  >
    <!-- 课程介绍 -->
    <section class="intro-section">
      <div class="intro-card">
        <h2>📋 本课学习内容</h2>
        <p>在这一课中，我们将学习如何使用列表和表格来组织和展示数据。这些是网页中最常用的数据展示方式。</p>
        <div class="learning-goals">
          <div class="goal-item">
            <span class="goal-icon">📝</span>
            <span>掌握三种列表类型：无序、有序、描述列表</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">🔢</span>
            <span>学会列表嵌套和自定义样式</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">📊</span>
            <span>掌握表格的基本结构和语义</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">🔗</span>
            <span>学会单元格合并技巧</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 第一部分：无序列表 -->
    <section class="content-section">
      <h2>1️⃣ 无序列表（Unordered List）</h2>

      <div class="info-box">
        <p><strong>无序列表</strong>用于展示没有特定顺序的项目列表，默认使用圆点作为标记。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;ul&gt;
  &lt;li&gt;列表项1&lt;/li&gt;
  &lt;li&gt;列表项2&lt;/li&gt;
  &lt;li&gt;列表项3&lt;/li&gt;
&lt;/ul&gt;</pre>
      </div>

      <div class="demo-section">
        <h4>💡 实际效果</h4>
        <CodeEditor
          initial-html="<h3>我的兴趣爱好</h3>
<ul>
  <li>阅读</li>
  <li>运动</li>
  <li>编程</li>
  <li>旅行</li>
</ul>"
          initial-css="h3 { color: #2196F3; }
ul {
  list-style-type: disc;
  padding-left: 20px;
}
li {
  margin: 8px 0;
  color: #333;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>

      <div class="tip-box">
        <strong>💡 标记样式：</strong>可以通过 CSS 的 list-style-type 改变标记样式：
        <ul>
          <li><code>disc</code> - 实心圆点（默认）</li>
          <li><code>circle</code> - 空心圆</li>
          <li><code>square</code> - 实心方块</li>
          <li><code>none</code> - 无标记</li>
        </ul>
      </div>
    </section>

    <!-- 第二部分：有序列表 -->
    <section class="content-section">
      <h2>2️⃣ 有序列表（Ordered List）</h2>

      <div class="info-box">
        <p><strong>有序列表</strong>用于展示有顺序的项目，默认使用数字编号。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;ol&gt;
  &lt;li&gt;第一步&lt;/li&gt;
  &lt;li&gt;第二步&lt;/li&gt;
  &lt;li&gt;第三步&lt;/li&gt;
&lt;/ol&gt;</pre>
      </div>

      <div class="demo-section">
        <h4>💡 实际效果</h4>
        <CodeEditor
          initial-html="<h3>制作三明治的步骤</h3>
<ol>
  <li>准备两片面包</li>
  <li>涂上黄油或沙拉酱</li>
  <li>放上生菜和番茄</li>
  <li>加入火腿或鸡肉</li>
  <li>盖上另一片面包</li>
</ol>"
          initial-css="h3 { color: #FF9800; }
ol {
  list-style-type: decimal;
  padding-left: 20px;
}
li {
  margin: 10px 0;
  color: #333;
  line-height: 1.6;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>

      <div class="tip-box">
        <strong>💡 编号样式：</strong>可以通过 type 属性或 CSS 改变编号样式：
        <ul>
          <li><code>1</code> - 数字（默认）</li>
          <li><code>A</code> - 大写字母</li>
          <li><code>a</code> - 小写字母</li>
          <li><code>I</code> - 大写罗马数字</li>
          <li><code>i</code> - 小写罗马数字</li>
        </ul>
      </div>
    </section>

    <!-- 第三部分：列表对比工具 -->
    <section class="content-section">
      <h2>3️⃣ 交互式列表对比工具</h2>

      <div class="interactive-card">
        <h4>🎮 选择列表类型，查看不同效果</h4>

        <div class="list-type-selector">
          <button
            v-for="type in listTypes"
            :key="type.value"
            :class="['type-btn', { active: selectedListType === type.value }]"
            @click="selectedListType = type.value"
          >
            {{ type.label }}
          </button>
        </div>

        <div class="preview-area">
          <div class="code-display">
            <h5>代码：</h5>
            <pre>{{ currentListCode }}</pre>
          </div>
          <div class="result-display">
            <h5>效果：</h5>
            <div v-html="currentListHtml" class="list-preview"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第四部分：列表嵌套 -->
    <section class="content-section">
      <h2>4️⃣ 列表嵌套</h2>

      <div class="info-box">
        <p>列表可以嵌套使用，创建多层级的结构。</p>
      </div>

      <div class="demo-section">
        <h4>💡 嵌套列表示例</h4>
        <CodeEditor
          initial-html="<h3>前端学习路线</h3>
<ul>
  <li>HTML 基础
    <ul>
      <li>标签语法</li>
      <li>语义化标签</li>
      <li>表单元素</li>
    </ul>
  </li>
  <li>CSS 样式
    <ul>
      <li>选择器</li>
      <li>布局</li>
      <li>动画</li>
    </ul>
  </li>
  <li>JavaScript 编程
    <ol>
      <li>基础语法</li>
      <li>DOM 操作</li>
      <li>异步编程</li>
    </ol>
  </li>
</ul>"
          initial-css="h3 { color: #9C27B0; margin-bottom: 16px; }
ul, ol { margin: 8px 0; padding-left: 24px; }
li { margin: 6px 0; line-height: 1.6; }
ul ul { list-style-type: circle; }
ul ul ul { list-style-type: square; }"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第五部分：描述列表 -->
    <section class="content-section">
      <h2>5️⃣ 描述列表（Description List）</h2>

      <div class="info-box">
        <p><strong>描述列表</strong>用于展示术语及其描述，常用于词汇表、元数据等场景。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;dl&gt;
  &lt;dt&gt;术语1&lt;/dt&gt;
  &lt;dd&gt;术语1的描述&lt;/dd&gt;

  &lt;dt&gt;术语2&lt;/dt&gt;
  &lt;dd&gt;术语2的描述&lt;/dd&gt;
&lt;/dl&gt;</pre>
      </div>

      <div class="demo-section">
        <h4>💡 实际效果</h4>
        <CodeEditor
          initial-html="<h3>前端技术词汇表</h3>
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言，用于构建网页结构</dd>

  <dt>CSS</dt>
  <dd>层叠样式表，用于控制网页的外观和布局</dd>

  <dt>JavaScript</dt>
  <dd>脚本语言，为网页添加交互功能</dd>

  <dt>Vue.js</dt>
  <dd>渐进式 JavaScript 框架，用于构建用户界面</dd>
</dl>"
          initial-css="h3 { color: #00BCD4; margin-bottom: 16px; }
dl { margin: 16px 0; }
dt {
  font-weight: bold;
  color: #2196F3;
  margin-top: 12px;
}
dd {
  margin-left: 20px;
  margin-bottom: 8px;
  color: #666;
  line-height: 1.6;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第六部分：表格基础 -->
    <section class="content-section">
      <h2>6️⃣ 表格基础（Table）</h2>

      <div class="info-box">
        <p><strong>表格</strong>用于展示二维数据，由行和列组成。</p>
      </div>

      <div class="tag-grid">
        <div class="tag-card">
          <div class="tag-name">&lt;table&gt;</div>
          <div class="tag-desc">定义表格</div>
        </div>
        <div class="tag-card">
          <div class="tag-name">&lt;tr&gt;</div>
          <div class="tag-desc">定义表格行（Table Row）</div>
        </div>
        <div class="tag-card">
          <div class="tag-name">&lt;td&gt;</div>
          <div class="tag-desc">定义数据单元格（Table Data）</div>
        </div>
        <div class="tag-card">
          <div class="tag-name">&lt;th&gt;</div>
          <div class="tag-desc">定义表头单元格（Table Header）</div>
        </div>
      </div>

      <div class="demo-section">
        <h4>💡 简单表格示例</h4>
        <CodeEditor
          initial-html="<table>
  <tr>
    <th>姓名</th>
    <th>年龄</th>
    <th>城市</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>25</td>
    <td>北京</td>
  </tr>
  <tr>
    <td>李四</td>
    <td>28</td>
    <td>上海</td>
  </tr>
  <tr>
    <td>王五</td>
    <td>30</td>
    <td>广州</td>
  </tr>
</table>"
          initial-css="table {
  border-collapse: collapse;
  width: 100%;
  margin: 16px 0;
}
th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}
th {
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:hover {
  background-color: #e8f5e9;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第七部分：表格结构 -->
    <section class="content-section">
      <h2>7️⃣ 表格语义结构</h2>

      <div class="info-box">
        <p>使用 <code>&lt;thead&gt;</code>、<code>&lt;tbody&gt;</code>、<code>&lt;tfoot&gt;</code> 可以让表格结构更清晰、更语义化。</p>
      </div>

      <div class="syntax-box">
        <h4>完整结构</h4>
        <pre>&lt;table&gt;
  &lt;thead&gt;  &lt;!-- 表头 --&gt;
    &lt;tr&gt;
      &lt;th&gt;列标题&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;

  &lt;tbody&gt;  &lt;!-- 表体 --&gt;
    &lt;tr&gt;
      &lt;td&gt;数据&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;

  &lt;tfoot&gt;  &lt;!-- 表尾 --&gt;
    &lt;tr&gt;
      &lt;td&gt;汇总&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</pre>
      </div>

      <div class="demo-section">
        <h4>💡 语义化表格示例</h4>
        <CodeEditor
          initial-html="<table>
  <thead>
    <tr>
      <th>商品</th>
      <th>单价</th>
      <th>数量</th>
      <th>小计</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>苹果</td>
      <td>¥5.00</td>
      <td>3</td>
      <td>¥15.00</td>
    </tr>
    <tr>
      <td>香蕉</td>
      <td>¥3.00</td>
      <td>5</td>
      <td>¥15.00</td>
    </tr>
    <tr>
      <td>橙子</td>
      <td>¥4.00</td>
      <td>2</td>
      <td>¥8.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan='3'><strong>总计</strong></td>
      <td><strong>¥38.00</strong></td>
    </tr>
  </tfoot>
</table>"
          initial-css="table {
  border-collapse: collapse;
  width: 100%;
  margin: 16px 0;
}
th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}
thead th {
  background-color: #2196F3;
  color: white;
}
tfoot td {
  background-color: #e3f2fd;
  font-weight: bold;
}
tbody tr:hover {
  background-color: #f5f5f5;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第八部分：单元格合并 -->
    <section class="content-section">
      <h2>8️⃣ 单元格合并</h2>

      <div class="info-box">
        <p>可以使用 <code>colspan</code> 和 <code>rowspan</code> 属性来合并单元格。</p>
      </div>

      <div class="concept-cards">
        <div class="concept-card">
          <h4>colspan - 跨列合并</h4>
          <p>合并同一行中的多个列</p>
          <code>&lt;td colspan="3"&gt;内容&lt;/td&gt;</code>
        </div>
        <div class="concept-card">
          <h4>rowspan - 跨行合并</h4>
          <p>合并同一列中的多个行</p>
          <code>&lt;td rowspan="2"&gt;内容&lt;/td&gt;</code>
        </div>
      </div>

      <div class="demo-section">
        <h4>💡 单元格合并示例</h4>
        <CodeEditor
          initial-html="<table>
  <thead>
    <tr>
      <th colspan='2'>个人信息</th>
      <th colspan='2'>联系方式</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>姓名</td>
      <td>张三</td>
      <td>电话</td>
      <td rowspan='2'>13800138000<br>zhangsan@email.com</td>
    </tr>
    <tr>
      <td>年龄</td>
      <td>25</td>
      <td>邮箱</td>
    </tr>
    <tr>
      <td colspan='4' style='text-align: center; background: #e8f5e9;'>
        <strong>备注：以上信息仅供示例</strong>
      </td>
    </tr>
  </tbody>
</table>"
          initial-css="table {
  border-collapse: collapse;
  width: 100%;
  margin: 16px 0;
}
th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}
thead th {
  background-color: #FF9800;
  color: white;
}
tbody td:nth-child(odd) {
  background-color: #fff3e0;
  font-weight: bold;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 综合练习 -->
    <section class="content-section practice-section">
      <h2>🎯 综合练习</h2>

      <div class="practice-card">
        <h3>练习任务：创建课程表</h3>
        <p>请创建一个完整的课程表，要求包含：</p>
        <ul>
          <li>使用 <code>&lt;thead&gt;</code>、<code>&lt;tbody&gt;</code> 结构</li>
          <li>第一列是时间段，使用 <code>rowspan</code> 合并午休时间</li>
          <li>包含周一到周五5天的课程</li>
          <li>添加合适的样式美化表格</li>
        </ul>

        <div class="practice-editor">
          <CodeEditor
            initial-html="<!-- 在这里编写你的课程表代码 -->
<h2>📅 我的课程表</h2>
<table>
  <thead>
    <tr>
      <th>时间</th>
      <th>周一</th>
      <th>周二</th>
      <th>周三</th>
      <th>周四</th>
      <th>周五</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8:00-9:00</td>
      <td>语文</td>
      <td>数学</td>
      <td>英语</td>
      <td>物理</td>
      <td>化学</td>
    </tr>
    <tr>
      <td>9:00-10:00</td>
      <td>数学</td>
      <td>英语</td>
      <td>语文</td>
      <td>化学</td>
      <td>物理</td>
    </tr>
    <tr>
      <td colspan='6' style='background: #fff3e0; text-align: center; font-weight: bold;'>☕ 课间休息</td>
    </tr>
    <tr>
      <td>10:20-11:20</td>
      <td>英语</td>
      <td>体育</td>
      <td>数学</td>
      <td>语文</td>
      <td>音乐</td>
    </tr>
    <tr>
      <td colspan='6' style='background: #e8f5e9; text-align: center; font-weight: bold;'>🍱 午休时间 12:00-14:00</td>
    </tr>
    <tr>
      <td>14:00-15:00</td>
      <td>历史</td>
      <td>地理</td>
      <td>生物</td>
      <td>信息</td>
      <td>美术</td>
    </tr>
  </tbody>
</table>

<!-- 💡 试着修改课程内容，或者创建你自己的课程表！ -->"
            initial-css="/* 在这里添加样式 */
h2 {
  text-align: center;
  color: #2196F3;
  margin-bottom: 20px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
th, td {
  border: 1px solid #ddd;
  padding: 14px;
  text-align: center;
}
thead th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: bold;
}
tbody tr:nth-child(odd) td:first-child {
  background: #f5f5f5;
  font-weight: bold;
  color: #666;
}
tbody tr:hover {
  background: #e3f2fd;
  transition: background 0.3s;
}"
            :tabs="['html', 'css']"
            :auto-run="false"
          />
        </div>

        <div class="tip-box" style="margin-top: 20px;">
          <strong>💡 练习提示：</strong>
          <ul>
            <li>上面已经提供了一个完整的课程表示例</li>
            <li>尝试修改课程名称，创建你自己的课程表</li>
            <li>使用 <code>colspan</code> 合并单元格表示休息时间</li>
            <li>添加不同的背景颜色区分不同类型的课程</li>
            <li>尝试添加 <code>tfoot</code> 部分显示每周总课时</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 知识总结 -->
    <section class="content-section summary-section">
      <h2>📚 知识总结</h2>

      <div class="summary-grid">
        <div class="summary-card">
          <h4>📝 列表标签</h4>
          <ul>
            <li><code>&lt;ul&gt;</code> - 无序列表</li>
            <li><code>&lt;ol&gt;</code> - 有序列表</li>
            <li><code>&lt;dl&gt;</code> - 描述列表</li>
            <li><code>&lt;li&gt;</code> - 列表项</li>
            <li><code>&lt;dt&gt;</code> - 术语</li>
            <li><code>&lt;dd&gt;</code> - 描述</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>📊 表格标签</h4>
          <ul>
            <li><code>&lt;table&gt;</code> - 表格容器</li>
            <li><code>&lt;thead&gt;</code> - 表头区域</li>
            <li><code>&lt;tbody&gt;</code> - 表体区域</li>
            <li><code>&lt;tfoot&gt;</code> - 表尾区域</li>
            <li><code>&lt;tr&gt;</code> - 表格行</li>
            <li><code>&lt;th&gt;</code> - 表头单元格</li>
            <li><code>&lt;td&gt;</code> - 数据单元格</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>🔧 重要属性</h4>
          <ul>
            <li><code>type</code> - 列表编号类型</li>
            <li><code>start</code> - 起始编号</li>
            <li><code>colspan</code> - 跨列合并</li>
            <li><code>rowspan</code> - 跨行合并</li>
            <li><code>border-collapse</code> - 边框合并</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>💡 最佳实践</h4>
          <ul>
            <li>使用语义化标签结构</li>
            <li>表头使用 <code>&lt;th&gt;</code></li>
            <li>复杂表格使用 <code>&lt;caption&gt;</code></li>
            <li>适当使用列表嵌套</li>
            <li>表格数据要对齐</li>
          </ul>
        </div>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'

// 列表类型选择器
const selectedListType = ref('ul-disc')

const listTypes = [
  { value: 'ul-disc', label: '无序列表（圆点）' },
  { value: 'ul-circle', label: '无序列表（空心圆）' },
  { value: 'ul-square', label: '无序列表（方块）' },
  { value: 'ol-decimal', label: '有序列表（数字）' },
  { value: 'ol-alpha', label: '有序列表（字母）' },
  { value: 'ol-roman', label: '有序列表（罗马）' }
]

const listExamples = {
  'ul-disc': {
    code: `<ul style="list-style-type: disc;">
  <li>苹果</li>
  <li>香蕉</li>
  <li>橙子</li>
</ul>`,
    html: '<ul style="list-style-type: disc; padding-left: 24px;"><li>苹果</li><li>香蕉</li><li>橙子</li></ul>'
  },
  'ul-circle': {
    code: `<ul style="list-style-type: circle;">
  <li>苹果</li>
  <li>香蕉</li>
  <li>橙子</li>
</ul>`,
    html: '<ul style="list-style-type: circle; padding-left: 24px;"><li>苹果</li><li>香蕉</li><li>橙子</li></ul>'
  },
  'ul-square': {
    code: `<ul style="list-style-type: square;">
  <li>苹果</li>
  <li>香蕉</li>
  <li>橙子</li>
</ul>`,
    html: '<ul style="list-style-type: square; padding-left: 24px;"><li>苹果</li><li>香蕉</li><li>橙子</li></ul>'
  },
  'ol-decimal': {
    code: `<ol style="list-style-type: decimal;">
  <li>第一步</li>
  <li>第二步</li>
  <li>第三步</li>
</ol>`,
    html: '<ol style="list-style-type: decimal; padding-left: 24px;"><li>第一步</li><li>第二步</li><li>第三步</li></ol>'
  },
  'ol-alpha': {
    code: `<ol style="list-style-type: upper-alpha;">
  <li>第一步</li>
  <li>第二步</li>
  <li>第三步</li>
</ol>`,
    html: '<ol style="list-style-type: upper-alpha; padding-left: 24px;"><li>第一步</li><li>第二步</li><li>第三步</li></ol>'
  },
  'ol-roman': {
    code: `<ol style="list-style-type: upper-roman;">
  <li>第一步</li>
  <li>第二步</li>
  <li>第三步</li>
</ol>`,
    html: '<ol style="list-style-type: upper-roman; padding-left: 24px;"><li>第一步</li><li>第二步</li><li>第三步</li></ol>'
  }
}

const currentListCode = computed(() => listExamples[selectedListType.value].code)
const currentListHtml = computed(() => listExamples[selectedListType.value].html)
</script>

<style scoped>
/* 列表类型选择器 */
.list-type-selector {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.type-btn {
  padding: 10px 20px;
  background: white;
  border: 2px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.type-btn:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
}

.type-btn.active {
  background: var(--primary-blue);
  color: white;
  border-color: var(--primary-blue);
}

.preview-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.code-display,
.result-display {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.code-display h5,
.result-display h5 {
  margin: 0 0 12px 0;
  color: var(--text-secondary);
  font-size: 14px;
}

.code-display pre {
  margin: 0;
  padding: 12px;
  background: white;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.list-preview {
  padding: 12px;
  background: white;
  border-radius: 4px;
  min-height: 120px;
}

/* 标签网格 */
.tag-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.tag-card {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  text-align: center;
}

.tag-name {
  font-family: 'Consolas', monospace;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.tag-desc {
  font-size: 14px;
  opacity: 0.9;
}

/* 概念卡片 */
.concept-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.concept-card {
  padding: 24px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 12px;
}

.concept-card h4 {
  margin: 0 0 12px 0;
  font-size: 18px;
}

.concept-card p {
  margin: 8px 0;
  opacity: 0.9;
  font-size: 14px;
}

.concept-card code {
  display: block;
  margin-top: 12px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: 13px;
}

/* 练习部分 */
.practice-section {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 32px;
  border-radius: 12px;
}

.practice-card h3 {
  color: #d84315;
  margin-bottom: 16px;
}

.practice-card ul {
  margin: 16px 0;
  padding-left: 24px;
}

.practice-card li {
  margin: 8px 0;
  line-height: 1.6;
}

.practice-editor {
  margin-top: 24px;
}

/* 总结部分 */
.summary-section {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 32px;
  border-radius: 12px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.summary-card {
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.summary-card h4 {
  margin: 0 0 16px 0;
  color: var(--primary-blue);
  font-size: 16px;
}

.summary-card ul {
  margin: 0;
  padding-left: 20px;
}

.summary-card li {
  margin: 8px 0;
  line-height: 1.5;
  font-size: 14px;
}

.summary-card code {
  color: #e91e63;
  font-weight: 500;
}

@media (max-width: 768px) {
  .preview-area {
    grid-template-columns: 1fr;
  }

  .tag-grid,
  .summary-grid {
    grid-template-columns: 1fr;
  }
}
</style>
