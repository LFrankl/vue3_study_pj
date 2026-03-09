<template>
  <LessonLayout
    lesson-id="html-lesson-6"
    title="第6课：表单进阶"
    :duration="30"
    :prev-lesson="{ path: '/lessons/html/lesson-5', title: '第5课：表单基础' }"
    :next-lesson="{ path: '/lessons/html/lesson-7', title: '第7课：语义化标签' }"
  >
    <!-- 课程介绍 -->
    <section class="intro-section">
      <div class="intro-card">
        <h2>🚀 本课学习内容</h2>
        <p>在表单基础之上，我们将学习 HTML5 新增的表单特性和高级验证技巧。</p>
        <div class="learning-goals">
          <div class="goal-item">
            <span class="goal-icon">✨</span>
            <span>掌握 HTML5 新增输入类型</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">✓</span>
            <span>学会表单验证属性</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">📋</span>
            <span>掌握 datalist 和 fieldset</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">🎨</span>
            <span>学习高级表单布局</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 第一部分：HTML5 新增输入类型 -->
    <section class="content-section">
      <h2>1️⃣ HTML5 新增输入类型</h2>

      <div class="info-box">
        <p>HTML5 为 input 元素新增了许多输入类型，提供更好的用户体验和原生验证。</p>
      </div>

      <div class="demo-section">
        <h4>💡 HTML5 输入类型演示</h4>
        <CodeEditor
          initial-html="<h3>HTML5 输入类型</h3>

<form>
  <div class='form-group'>
    <label>搜索：</label>
    <input type='search' placeholder='输入关键词搜索...'>
  </div>

  <div class='form-group'>
    <label>网址：</label>
    <input type='url' placeholder='https://example.com'>
  </div>

  <div class='form-group'>
    <label>电话：</label>
    <input type='tel' placeholder='13800138000'>
  </div>

  <div class='form-group'>
    <label>时间：</label>
    <input type='time'>
  </div>

  <div class='form-group'>
    <label>日期时间：</label>
    <input type='datetime-local'>
  </div>

  <div class='form-group'>
    <label>月份：</label>
    <input type='month'>
  </div>

  <div class='form-group'>
    <label>星期：</label>
    <input type='week'>
  </div>

  <div class='form-group'>
    <label>颜色选择：</label>
    <input type='color' value='#4CAF50'>
  </div>

  <div class='form-group'>
    <label>数量（滑块）：</label>
    <input type='range' min='0' max='100' value='50'>
    <output>50</output>
  </div>

  <button type='submit'>提交</button>
</form>"
          initial-css="h3 {
  color: #673AB7;
  margin-bottom: 24px;
}
form {
  max-width: 600px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
}
input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
}
input:focus {
  outline: none;
  border-color: #673AB7;
  box-shadow: 0 0 0 3px rgba(103,58,183,0.1);
}
input[type='color'] {
  height: 50px;
  padding: 4px;
  cursor: pointer;
}
input[type='range'] {
  padding: 0;
}
output {
  display: inline-block;
  margin-left: 12px;
  color: #673AB7;
  font-weight: bold;
}
button {
  width: 100%;
  padding: 12px;
  background: #673AB7;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background: #512DA8;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第二部分：表单验证属性 -->
    <section class="content-section">
      <h2>2️⃣ 表单验证属性</h2>

      <div class="info-box">
        <p>HTML5 提供了丰富的验证属性，无需 JavaScript 即可实现基本的表单验证。</p>
      </div>

      <div class="validation-attrs">
        <div class="attr-box">
          <h4>required</h4>
          <p>必填项</p>
          <code>&lt;input type="text" required&gt;</code>
        </div>

        <div class="attr-box">
          <h4>pattern</h4>
          <p>正则表达式验证</p>
          <code>&lt;input pattern="[0-9]{11}"&gt;</code>
        </div>

        <div class="attr-box">
          <h4>min / max</h4>
          <p>数值范围限制</p>
          <code>&lt;input type="number" min="1" max="100"&gt;</code>
        </div>

        <div class="attr-box">
          <h4>minlength / maxlength</h4>
          <p>长度限制</p>
          <code>&lt;input minlength="6" maxlength="20"&gt;</code>
        </div>

        <div class="attr-box">
          <h4>step</h4>
          <p>数值步长</p>
          <code>&lt;input type="number" step="0.5"&gt;</code>
        </div>

        <div class="attr-box">
          <h4>placeholder</h4>
          <p>占位提示文本</p>
          <code>&lt;input placeholder="请输入..."&gt;</code>
        </div>
      </div>

      <div class="demo-section">
        <h4>💡 表单验证示例</h4>
        <CodeEditor
          initial-html="<h3>注册表单（带验证）</h3>

<form>
  <div class='form-group'>
    <label>用户名（必填，3-15字符）：</label>
    <input
      type='text'
      name='username'
      minlength='3'
      maxlength='15'
      required
      placeholder='请输入3-15个字符'
    >
  </div>

  <div class='form-group'>
    <label>密码（必填，至少6位）：</label>
    <input
      type='password'
      name='password'
      minlength='6'
      required
      placeholder='至少6位密码'
    >
  </div>

  <div class='form-group'>
    <label>邮箱（必填）：</label>
    <input
      type='email'
      name='email'
      required
      placeholder='example@email.com'
    >
  </div>

  <div class='form-group'>
    <label>手机号（必填，11位数字）：</label>
    <input
      type='tel'
      name='phone'
      pattern='[0-9]{11}'
      required
      placeholder='13800138000'
      title='请输入11位手机号码'
    >
  </div>

  <div class='form-group'>
    <label>年龄（18-100岁）：</label>
    <input
      type='number'
      name='age'
      min='18'
      max='100'
      required
    >
  </div>

  <div class='form-group'>
    <label>个人主页：</label>
    <input
      type='url'
      name='website'
      placeholder='https://yoursite.com'
    >
  </div>

  <button type='submit'>注册</button>
  <p class='note'>* 所有带星号字段为必填项</p>
</form>"
          initial-css="h3 {
  color: #E91E63;
  margin-bottom: 24px;
}
form {
  max-width: 600px;
  padding: 32px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 8px;
  color: white;
  font-weight: 500;
  font-size: 14px;
}
input {
  width: 100%;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
  transition: all 0.3s;
}
input:focus {
  outline: none;
  border-color: white;
  box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
}
input:valid {
  border-color: #4CAF50;
}
input:invalid {
  border-color: #f44336;
}
button {
  width: 100%;
  padding: 12px;
  background: white;
  color: #f5576c;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;
}
button:hover {
  background: #f5f5f5;
}
.note {
  margin: 12px 0 0 0;
  color: rgba(255,255,255,0.9);
  font-size: 12px;
  text-align: center;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第三部分：datalist 数据列表 -->
    <section class="content-section">
      <h2>3️⃣ 数据列表 &lt;datalist&gt;</h2>

      <div class="info-box">
        <p><strong>&lt;datalist&gt;</strong> 提供输入建议列表，用户可以选择或自行输入。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;input list="cities" placeholder="选择或输入城市"&gt;
&lt;datalist id="cities"&gt;
  &lt;option value="北京"&gt;
  &lt;option value="上海"&gt;
  &lt;option value="广州"&gt;
&lt;/datalist&gt;</pre>
      </div>

      <div class="demo-section">
        <h4>💡 datalist 示例</h4>
        <CodeEditor
          initial-html="<h3>智能输入建议</h3>

<form>
  <div class='form-group'>
    <label>选择编程语言：</label>
    <input
      list='languages'
      placeholder='输入或选择...'
    >
    <datalist id='languages'>
      <option value='JavaScript'>
      <option value='Python'>
      <option value='Java'>
      <option value='C++'>
      <option value='Go'>
      <option value='Rust'>
      <option value='TypeScript'>
      <option value='PHP'>
    </datalist>
  </div>

  <div class='form-group'>
    <label>选择浏览器：</label>
    <input
      list='browsers'
      placeholder='输入或选择...'
    >
    <datalist id='browsers'>
      <option value='Chrome'>
      <option value='Firefox'>
      <option value='Safari'>
      <option value='Edge'>
      <option value='Opera'>
    </datalist>
  </div>

  <div class='form-group'>
    <label>选择城市：</label>
    <input
      list='cities'
      placeholder='输入或选择...'
    >
    <datalist id='cities'>
      <option value='北京'>
      <option value='上海'>
      <option value='广州'>
      <option value='深圳'>
      <option value='杭州'>
      <option value='成都'>
    </datalist>
  </div>

  <button type='submit'>提交</button>
</form>"
          initial-css="h3 {
  color: #00BCD4;
  margin-bottom: 24px;
}
form {
  max-width: 600px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
}
input:focus {
  outline: none;
  border-color: #00BCD4;
  box-shadow: 0 0 0 3px rgba(0,188,212,0.1);
}
button {
  width: 100%;
  padding: 12px;
  background: #00BCD4;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background: #0097A7;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第四部分：fieldset 和 legend -->
    <section class="content-section">
      <h2>4️⃣ 表单分组 &lt;fieldset&gt; & &lt;legend&gt;</h2>

      <div class="info-box">
        <p>使用 <code>&lt;fieldset&gt;</code> 和 <code>&lt;legend&gt;</code> 可以将相关的表单元素分组，提升表单结构的语义性。</p>
      </div>

      <div class="demo-section">
        <h4>💡 表单分组示例</h4>
        <CodeEditor
          initial-html="<h3>用户信息登记</h3>

<form>
  <fieldset>
    <legend>📝 基本信息</legend>
    <div class='form-group'>
      <label>姓名：</label>
      <input type='text' required>
    </div>
    <div class='form-group'>
      <label>性别：</label>
      <label><input type='radio' name='gender' value='male'> 男</label>
      <label><input type='radio' name='gender' value='female'> 女</label>
    </div>
  </fieldset>

  <fieldset>
    <legend>📧 联系方式</legend>
    <div class='form-group'>
      <label>邮箱：</label>
      <input type='email' required>
    </div>
    <div class='form-group'>
      <label>电话：</label>
      <input type='tel' required>
    </div>
  </fieldset>

  <fieldset>
    <legend>📍 地址信息</legend>
    <div class='form-group'>
      <label>省份：</label>
      <select>
        <option>北京</option>
        <option>上海</option>
        <option>广东</option>
      </select>
    </div>
    <div class='form-group'>
      <label>详细地址：</label>
      <textarea rows='3'></textarea>
    </div>
  </fieldset>

  <button type='submit'>提交</button>
</form>"
          initial-css="h3 {
  color: #FF9800;
  margin-bottom: 24px;
}
form {
  max-width: 700px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
}
fieldset {
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid #FF9800;
  border-radius: 8px;
  background: white;
}
legend {
  padding: 4px 12px;
  color: #FF9800;
  font-weight: bold;
  font-size: 16px;
}
.form-group {
  margin-bottom: 16px;
}
label {
  display: block;
  margin-bottom: 6px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
}
input, select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
}
input[type='radio'] {
  width: auto;
  margin-right: 4px;
}
button {
  width: 100%;
  padding: 12px;
  background: #FF9800;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background: #F57C00;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第五部分：其他实用属性 -->
    <section class="content-section">
      <h2>5️⃣ 其他实用属性</h2>

      <div class="attributes-grid">
        <div class="attr-item">
          <h4>autofocus</h4>
          <p>页面加载时自动聚焦</p>
          <code>&lt;input autofocus&gt;</code>
        </div>

        <div class="attr-item">
          <h4>autocomplete</h4>
          <p>控制自动完成功能</p>
          <code>&lt;input autocomplete="off"&gt;</code>
        </div>

        <div class="attr-item">
          <h4>readonly</h4>
          <p>只读，不可编辑</p>
          <code>&lt;input readonly&gt;</code>
        </div>

        <div class="attr-item">
          <h4>disabled</h4>
          <p>禁用，不可交互</p>
          <code>&lt;input disabled&gt;</code>
        </div>

        <div class="attr-item">
          <h4>multiple</h4>
          <p>允许多选（file/email）</p>
          <code>&lt;input type="file" multiple&gt;</code>
        </div>

        <div class="attr-item">
          <h4>accept</h4>
          <p>文件类型限制</p>
          <code>&lt;input type="file" accept="image/*"&gt;</code>
        </div>
      </div>
    </section>

    <!-- 综合练习 -->
    <section class="content-section practice-section">
      <h2>🎯 综合练习</h2>

      <div class="practice-card">
        <h3>练习任务：创建职位申请表单</h3>
        <p>请创建一个完整的职位申请表单，要求包含：</p>
        <ul>
          <li>使用 <code>&lt;fieldset&gt;</code> 分组：个人信息、教育背景、工作经验</li>
          <li>个人信息：姓名（必填）、邮箱（必填）、电话（11位，必填）</li>
          <li>教育背景：学历（下拉选择）、毕业院校（datalist）</li>
          <li>工作经验：年限（数字，0-50）、期望薪资（range 滑块）</li>
          <li>附件上传：简历（accept 限制为 PDF）</li>
          <li>所有必填项添加验证</li>
          <li>提交和重置按钮</li>
        </ul>

        <div class="practice-editor">
          <CodeEditor
            initial-html="<!-- 在这里创建职位申请表单 -->
<h3>职位申请表</h3>

<form>
  <fieldset>
    <legend>个人信息</legend>
    <!-- 添加表单字段 -->
  </fieldset>

  <!-- 继续添加其他 fieldset... -->

  <button type='submit'>提交申请</button>
  <button type='reset'>重置</button>
</form>"
            initial-css="/* 在这里添加样式 */
h3 {
  color: #333;
  margin-bottom: 20px;
}
form {
  max-width: 800px;
  padding: 24px;
}
fieldset {
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
}
legend {
  padding: 4px 12px;
  font-weight: bold;
}"
            :tabs="['html', 'css']"
            :auto-run="false"
          />
        </div>
      </div>
    </section>

    <!-- 知识总结 -->
    <section class="content-section summary-section">
      <h2>📚 知识总结</h2>

      <div class="summary-grid">
        <div class="summary-card">
          <h4>✨ HTML5 输入类型</h4>
          <ul>
            <li><code>search</code> - 搜索框</li>
            <li><code>url</code> - 网址</li>
            <li><code>tel</code> - 电话</li>
            <li><code>time</code> - 时间</li>
            <li><code>datetime-local</code> - 日期时间</li>
            <li><code>month</code> / <code>week</code></li>
            <li><code>color</code> - 颜色选择器</li>
            <li><code>range</code> - 滑块</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>✓ 验证属性</h4>
          <ul>
            <li><code>required</code> - 必填</li>
            <li><code>pattern</code> - 正则验证</li>
            <li><code>min</code> / <code>max</code> - 范围</li>
            <li><code>minlength</code> / <code>maxlength</code></li>
            <li><code>step</code> - 步长</li>
            <li><code>:valid</code> / <code>:invalid</code> CSS</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>📋 高级元素</h4>
          <ul>
            <li><code>&lt;datalist&gt;</code> - 输入建议</li>
            <li><code>&lt;fieldset&gt;</code> - 分组</li>
            <li><code>&lt;legend&gt;</code> - 分组标题</li>
            <li><code>&lt;output&gt;</code> - 输出结果</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>🔧 实用属性</h4>
          <ul>
            <li><code>placeholder</code> - 占位符</li>
            <li><code>autofocus</code> - 自动聚焦</li>
            <li><code>autocomplete</code> - 自动完成</li>
            <li><code>readonly</code> - 只读</li>
            <li><code>disabled</code> - 禁用</li>
            <li><code>multiple</code> - 多选</li>
          </ul>
        </div>
      </div>

      <div class="best-practices">
        <h3>💡 最佳实践</h3>
        <ul>
          <li>✅ 优先使用 HTML5 原生验证，减少 JavaScript 依赖</li>
          <li>✅ 为验证错误提供清晰的提示信息（title 属性）</li>
          <li>✅ 使用合适的 input type，提升移动端体验</li>
          <li>✅ 利用 :valid 和 :invalid 伪类提供视觉反馈</li>
          <li>✅ 使用 fieldset 分组相关字段，提升可访问性</li>
          <li>✅ datalist 提供输入建议，提升用户体验</li>
        </ul>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import { ref } from 'vue'
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'
</script>

<style scoped>
/* 验证属性展示 */
.validation-attrs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.attr-box {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  transition: transform 0.3s;
}

.attr-box:hover {
  transform: translateY(-4px);
}

.attr-box h4 {
  margin: 0 0 8px 0;
  font-family: 'Consolas', monospace;
  font-size: 16px;
}

.attr-box p {
  margin: 8px 0 12px 0;
  opacity: 0.9;
  font-size: 14px;
}

.attr-box code {
  display: block;
  padding: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: 12px;
  overflow-x: auto;
}

/* 属性网格 */
.attributes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.attr-item {
  padding: 20px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  transition: all 0.3s;
}

.attr-item:hover {
  border-color: var(--primary-blue);
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.attr-item h4 {
  margin: 0 0 8px 0;
  color: var(--primary-blue);
  font-family: 'Consolas', monospace;
  font-size: 15px;
}

.attr-item p {
  margin: 8px 0 12px 0;
  color: #666;
  font-size: 14px;
}

.attr-item code {
  display: block;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 12px;
  color: #e91e63;
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

.best-practices {
  margin-top: 32px;
  padding: 24px;
  background: white;
  border-radius: 12px;
}

.best-practices h3 {
  margin: 0 0 16px 0;
  color: #4CAF50;
  font-size: 20px;
}

.best-practices ul {
  margin: 0;
  padding-left: 24px;
}

.best-practices li {
  margin: 12px 0;
  line-height: 1.6;
  font-size: 15px;
}

@media (max-width: 768px) {
  .validation-attrs,
  .attributes-grid,
  .summary-grid {
    grid-template-columns: 1fr;
  }
}
</style>
