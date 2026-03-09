<template>
  <LessonLayout
    lesson-id="html-lesson-5"
    title="第5课：表单基础"
    :duration="30"
    :prev-lesson="{ path: '/lessons/html/lesson-4', title: '第4课：图片与多媒体' }"
    :next-lesson="{ path: '/lessons/html/lesson-6', title: '第6课：表单进阶' }"
  >
    <!-- 课程介绍 -->
    <section class="intro-section">
      <div class="intro-card">
        <h2>📝 本课学习内容</h2>
        <p>表单是网页中收集用户信息的重要工具。在这一课中，我们将学习如何创建各种表单元素。</p>
        <div class="learning-goals">
          <div class="goal-item">
            <span class="goal-icon">📋</span>
            <span>掌握表单的基本结构</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">⌨️</span>
            <span>学会使用各种输入框类型</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">✅</span>
            <span>掌握单选框和复选框</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">🔘</span>
            <span>学会使用下拉选择和按钮</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 第一部分：表单标签 -->
    <section class="content-section">
      <h2>1️⃣ 表单标签 &lt;form&gt;</h2>

      <div class="info-box">
        <p><strong>&lt;form&gt;</strong> 标签用于创建表单，是所有表单元素的容器。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;form action="提交地址" method="GET/POST"&gt;
  &lt;!-- 表单元素 --&gt;
&lt;/form&gt;</pre>
      </div>

      <div class="attribute-cards">
        <div class="attr-card">
          <div class="attr-name">action</div>
          <div class="attr-desc">表单提交的目标地址（URL）</div>
          <code>action="/submit"</code>
        </div>

        <div class="attr-card">
          <div class="attr-name">method</div>
          <div class="attr-desc">提交方式：GET（默认）或 POST</div>
          <code>method="POST"</code>
        </div>

        <div class="attr-card">
          <div class="attr-name">name</div>
          <div class="attr-desc">表单的名称标识</div>
          <code>name="userForm"</code>
        </div>

        <div class="attr-card">
          <div class="attr-name">target</div>
          <div class="attr-desc">提交后在哪里打开响应</div>
          <code>target="_blank"</code>
        </div>
      </div>

      <div class="tip-box">
        <strong>💡 GET vs POST：</strong>
        <ul>
          <li><strong>GET</strong> - 参数显示在 URL 中，适合查询操作</li>
          <li><strong>POST</strong> - 参数在请求体中，适合提交数据</li>
        </ul>
      </div>
    </section>

    <!-- 第二部分：输入框 input -->
    <section class="content-section">
      <h2>2️⃣ 输入框 &lt;input&gt;</h2>

      <div class="info-box">
        <p><strong>&lt;input&gt;</strong> 是最常用的表单元素，通过 <code>type</code> 属性可以创建不同类型的输入框。</p>
      </div>

      <div class="interactive-card">
        <h4>🎮 选择输入框类型，查看效果</h4>

        <div class="input-type-selector">
          <button
            v-for="type in inputTypes"
            :key="type.value"
            :class="['type-btn', { active: selectedInputType === type.value }]"
            @click="selectedInputType = type.value"
          >
            {{ type.label }}
          </button>
        </div>

        <div class="input-demo-area">
          <div class="demo-info">
            <h5>{{ currentInputType.label }}</h5>
            <p>{{ currentInputType.description }}</p>
          </div>

          <div class="demo-input">
            <label>{{ currentInputType.label }}：</label>
            <input
              :type="currentInputType.value"
              :placeholder="currentInputType.placeholder"
              class="demo-field"
            >
          </div>

          <div class="demo-code">
            <h5>代码：</h5>
            <pre>{{ currentInputType.code }}</pre>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h4>💡 常用输入框类型</h4>
        <CodeEditor
          initial-html="<h3>用户注册表单</h3>

<form>
  <div class='form-group'>
    <label>用户名：</label>
    <input type='text' placeholder='请输入用户名' required>
  </div>

  <div class='form-group'>
    <label>密码：</label>
    <input type='password' placeholder='请输入密码' required>
  </div>

  <div class='form-group'>
    <label>邮箱：</label>
    <input type='email' placeholder='example@email.com' required>
  </div>

  <div class='form-group'>
    <label>年龄：</label>
    <input type='number' min='1' max='120' placeholder='18'>
  </div>

  <div class='form-group'>
    <label>生日：</label>
    <input type='date'>
  </div>

  <button type='submit'>提交</button>
</form>"
          initial-css="h3 {
  color: #2196F3;
  margin-bottom: 24px;
}
form {
  max-width: 500px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
}
input:focus {
  outline: none;
  border-color: #2196F3;
  box-shadow: 0 0 0 3px rgba(33,150,243,0.1);
}
button {
  width: 100%;
  padding: 12px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}
button:hover {
  background: #45a049;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第三部分：标签 label -->
    <section class="content-section">
      <h2>3️⃣ 标签 &lt;label&gt;</h2>

      <div class="info-box">
        <p><strong>&lt;label&gt;</strong> 用于为表单元素添加说明文字，提升可用性和无障碍访问。</p>
      </div>

      <div class="concept-cards">
        <div class="concept-card">
          <h4>方式一：包裹式</h4>
          <p>直接用 label 包裹 input</p>
          <div class="code-example">
            <pre>&lt;label&gt;
  用户名：
  &lt;input type="text"&gt;
&lt;/label&gt;</pre>
          </div>
        </div>

        <div class="concept-card">
          <h4>方式二：关联式</h4>
          <p>通过 for 和 id 关联</p>
          <div class="code-example">
            <pre>&lt;label for="username"&gt;用户名：&lt;/label&gt;
&lt;input type="text" id="username"&gt;</pre>
          </div>
        </div>
      </div>

      <div class="tip-box">
        <strong>💡 label 的好处：</strong>
        <ul>
          <li>点击标签文字可以聚焦到输入框</li>
          <li>提升表单的可用性</li>
          <li>改善屏幕阅读器体验</li>
        </ul>
      </div>
    </section>

    <!-- 第四部分：文本域 textarea -->
    <section class="content-section">
      <h2>4️⃣ 文本域 &lt;textarea&gt;</h2>

      <div class="info-box">
        <p><strong>&lt;textarea&gt;</strong> 用于多行文本输入，适合留言、评论等场景。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;textarea rows="5" cols="50" placeholder="请输入内容..."&gt;
&lt;/textarea&gt;</pre>
      </div>

      <div class="demo-section">
        <h4>💡 文本域示例</h4>
        <CodeEditor
          initial-html="<h3>留言板</h3>

<form>
  <div class='form-group'>
    <label>您的姓名：</label>
    <input type='text' placeholder='请输入姓名'>
  </div>

  <div class='form-group'>
    <label>留言内容：</label>
    <textarea
      rows='6'
      placeholder='请输入您的留言内容...'
    ></textarea>
  </div>

  <button type='submit'>提交留言</button>
</form>"
          initial-css="h3 {
  color: #9C27B0;
  margin-bottom: 20px;
}
form {
  max-width: 600px;
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
}
.form-group {
  margin-bottom: 16px;
}
label {
  display: block;
  margin-bottom: 8px;
  color: white;
  font-weight: 500;
}
input, textarea {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}
textarea {
  resize: vertical;
  min-height: 100px;
}
input:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
}
button {
  width: 100%;
  padding: 12px;
  background: white;
  color: #764ba2;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background: #f5f5f5;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第五部分：单选按钮 radio -->
    <section class="content-section">
      <h2>5️⃣ 单选按钮 (Radio Button)</h2>

      <div class="info-box">
        <p>单选按钮用于在一组选项中只能选择一个，通过相同的 <code>name</code> 属性分组。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;input type="radio" name="gender" value="male" id="male"&gt;
&lt;label for="male"&gt;男&lt;/label&gt;

&lt;input type="radio" name="gender" value="female" id="female"&gt;
&lt;label for="female"&gt;女&lt;/label&gt;</pre>
      </div>

      <div class="demo-section">
        <h4>💡 单选按钮示例</h4>
        <CodeEditor
          initial-html="<h3>问卷调查</h3>

<form>
  <div class='question'>
    <p><strong>1. 您的性别：</strong></p>
    <label class='radio-label'>
      <input type='radio' name='gender' value='male' checked>
      <span>男</span>
    </label>
    <label class='radio-label'>
      <input type='radio' name='gender' value='female'>
      <span>女</span>
    </label>
  </div>

  <div class='question'>
    <p><strong>2. 您的学历：</strong></p>
    <label class='radio-label'>
      <input type='radio' name='education' value='high'>
      <span>高中</span>
    </label>
    <label class='radio-label'>
      <input type='radio' name='education' value='bachelor'>
      <span>本科</span>
    </label>
    <label class='radio-label'>
      <input type='radio' name='education' value='master'>
      <span>研究生</span>
    </label>
  </div>

  <button type='submit'>提交</button>
</form>"
          initial-css="h3 {
  color: #FF5722;
  margin-bottom: 24px;
}
form {
  max-width: 600px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}
.question {
  margin-bottom: 24px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}
.question p {
  margin: 0 0 12px 0;
  color: #333;
}
.radio-label {
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}
.radio-label input {
  margin-right: 6px;
  cursor: pointer;
}
.radio-label span {
  color: #666;
}
button {
  width: 100%;
  padding: 12px;
  background: #FF5722;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background: #E64A19;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第六部分：复选框 checkbox -->
    <section class="content-section">
      <h2>6️⃣ 复选框 (Checkbox)</h2>

      <div class="info-box">
        <p>复选框允许用户选择多个选项，每个选项独立控制。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;input type="checkbox" name="hobby" value="reading" id="reading"&gt;
&lt;label for="reading"&gt;阅读&lt;/label&gt;

&lt;input type="checkbox" name="hobby" value="music" id="music"&gt;
&lt;label for="music"&gt;音乐&lt;/label&gt;</pre>
      </div>

      <div class="demo-section">
        <h4>💡 复选框示例</h4>
        <CodeEditor
          initial-html="<h3>兴趣爱好调查</h3>

<form>
  <div class='checkbox-group'>
    <p><strong>请选择您的兴趣爱好（可多选）：</strong></p>

    <label class='checkbox-label'>
      <input type='checkbox' name='hobby' value='reading'>
      <span>📚 阅读</span>
    </label>

    <label class='checkbox-label'>
      <input type='checkbox' name='hobby' value='sports'>
      <span>⚽ 运动</span>
    </label>

    <label class='checkbox-label'>
      <input type='checkbox' name='hobby' value='music'>
      <span>🎵 音乐</span>
    </label>

    <label class='checkbox-label'>
      <input type='checkbox' name='hobby' value='travel'>
      <span>✈️ 旅行</span>
    </label>

    <label class='checkbox-label'>
      <input type='checkbox' name='hobby' value='coding'>
      <span>💻 编程</span>
    </label>

    <label class='checkbox-label'>
      <input type='checkbox' name='hobby' value='photography'>
      <span>📷 摄影</span>
    </label>
  </div>

  <div class='terms'>
    <label class='checkbox-label'>
      <input type='checkbox' name='agree' required>
      <span>我已阅读并同意服务条款</span>
    </label>
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
}
.checkbox-group {
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin-bottom: 16px;
}
.checkbox-group p {
  margin: 0 0 16px 0;
  color: #333;
  font-weight: 500;
}
.checkbox-label {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}
.checkbox-label:hover {
  background: #f5f5f5;
}
.checkbox-label input {
  margin-right: 10px;
  cursor: pointer;
  width: 18px;
  height: 18px;
}
.checkbox-label span {
  color: #333;
  font-size: 15px;
}
.terms {
  padding: 16px;
  background: rgba(255,255,255,0.9);
  border-radius: 8px;
  margin-bottom: 16px;
}
button {
  width: 100%;
  padding: 12px;
  background: white;
  color: #764ba2;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background: #f5f5f5;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第七部分：下拉选择 select -->
    <section class="content-section">
      <h2>7️⃣ 下拉选择 &lt;select&gt;</h2>

      <div class="info-box">
        <p><strong>&lt;select&gt;</strong> 用于创建下拉选择菜单，包含多个 <code>&lt;option&gt;</code> 选项。</p>
      </div>

      <div class="syntax-box">
        <h4>基本语法</h4>
        <pre>&lt;select name="city"&gt;
  &lt;option value=""&gt;请选择城市&lt;/option&gt;
  &lt;option value="beijing"&gt;北京&lt;/option&gt;
  &lt;option value="shanghai"&gt;上海&lt;/option&gt;
  &lt;option value="guangzhou"&gt;广州&lt;/option&gt;
&lt;/select&gt;</pre>
      </div>

      <div class="demo-section">
        <h4>💡 下拉选择示例</h4>
        <CodeEditor
          initial-html="<h3>用户信息填写</h3>

<form>
  <div class='form-group'>
    <label>所在省份：</label>
    <select name='province'>
      <option value=''>请选择省份</option>
      <option value='beijing'>北京</option>
      <option value='shanghai'>上海</option>
      <option value='guangdong'>广东</option>
      <option value='zhejiang'>浙江</option>
      <option value='jiangsu'>江苏</option>
    </select>
  </div>

  <div class='form-group'>
    <label>出生年份：</label>
    <select name='year'>
      <option value=''>请选择年份</option>
      <option value='2000'>2000年</option>
      <option value='2001'>2001年</option>
      <option value='2002'>2002年</option>
      <option value='2003'>2003年</option>
      <option value='2004'>2004年</option>
      <option value='2005'>2005年</option>
    </select>
  </div>

  <div class='form-group'>
    <label>职业（可多选）：</label>
    <select name='job' multiple size='4'>
      <option value='student'>学生</option>
      <option value='teacher'>教师</option>
      <option value='engineer'>工程师</option>
      <option value='designer'>设计师</option>
      <option value='doctor'>医生</option>
      <option value='other'>其他</option>
    </select>
  </div>

  <button type='submit'>提交</button>
</form>"
          initial-css="h3 {
  color: #3F51B5;
  margin-bottom: 24px;
}
form {
  max-width: 500px;
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
select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  box-sizing: border-box;
}
select:focus {
  outline: none;
  border-color: #3F51B5;
  box-shadow: 0 0 0 3px rgba(63,81,181,0.1);
}
select[multiple] {
  height: auto;
}
button {
  width: 100%;
  padding: 12px;
  background: #3F51B5;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background: #303F9F;
}"
          :tabs="['html', 'css']"
          :auto-run="false"
        />
      </div>
    </section>

    <!-- 第八部分：按钮 button -->
    <section class="content-section">
      <h2>8️⃣ 按钮元素</h2>

      <div class="info-box">
        <p>表单中有多种按钮类型，用于不同的交互场景。</p>
      </div>

      <div class="button-types">
        <div class="button-card">
          <h4>&lt;button type="submit"&gt;</h4>
          <p>提交按钮 - 提交表单数据</p>
          <code>&lt;button type="submit"&gt;提交&lt;/button&gt;</code>
        </div>

        <div class="button-card">
          <h4>&lt;button type="reset"&gt;</h4>
          <p>重置按钮 - 清空表单</p>
          <code>&lt;button type="reset"&gt;重置&lt;/button&gt;</code>
        </div>

        <div class="button-card">
          <h4>&lt;button type="button"&gt;</h4>
          <p>普通按钮 - 配合 JavaScript</p>
          <code>&lt;button type="button"&gt;按钮&lt;/button&gt;</code>
        </div>

        <div class="button-card">
          <h4>&lt;input type="submit"&gt;</h4>
          <p>输入型提交按钮</p>
          <code>&lt;input type="submit" value="提交"&gt;</code>
        </div>
      </div>

      <div class="demo-section">
        <h4>💡 按钮示例</h4>
        <CodeEditor
          initial-html="<h3>表单按钮演示</h3>

<form>
  <div class='form-group'>
    <label>用户名：</label>
    <input type='text' value='张三'>
  </div>

  <div class='form-group'>
    <label>邮箱：</label>
    <input type='email' value='zhangsan@example.com'>
  </div>

  <div class='button-group'>
    <button type='submit' class='btn-submit'>
      ✓ 提交表单
    </button>
    <button type='reset' class='btn-reset'>
      ↻ 重置表单
    </button>
    <button type='button' class='btn-normal' onclick='alert(&quot;这是普通按钮&quot;)'>
      ⓘ 帮助
    </button>
  </div>
</form>"
          initial-css="h3 {
  color: #E91E63;
  margin-bottom: 24px;
}
form {
  max-width: 500px;
  padding: 24px;
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
}
input {
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
}
.button-group {
  display: flex;
  gap: 10px;
  margin-top: 24px;
}
button {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}
button:hover {
  transform: translateY(-2px);
}
.btn-submit {
  background: #4CAF50;
  color: white;
}
.btn-reset {
  background: #FFC107;
  color: #333;
}
.btn-normal {
  background: white;
  color: #f5576c;
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
        <h3>练习任务：创建注册表单</h3>
        <p>请创建一个完整的用户注册表单，要求包含：</p>
        <ul>
          <li>使用 <code>&lt;form&gt;</code> 标签包裹</li>
          <li>文本输入框：用户名、密码、邮箱</li>
          <li>单选按钮：性别选择</li>
          <li>复选框：兴趣爱好（至少3个）</li>
          <li>下拉选择：所在城市</li>
          <li>文本域：个人简介</li>
          <li>提交和重置按钮</li>
          <li>为所有输入框添加合适的 label</li>
        </ul>

        <div class="practice-editor">
          <CodeEditor
            initial-html="<!-- 在这里创建注册表单 -->
<h3>用户注册</h3>

<form>
  <!-- 添加表单元素 -->
  <div class='form-group'>
    <label>用户名：</label>
    <input type='text' placeholder='请输入用户名' required>
  </div>

  <!-- 继续添加其他表单元素... -->

  <button type='submit'>注册</button>
</form>"
            initial-css="/* 在这里添加样式 */
h3 {
  color: #333;
  margin-bottom: 20px;
}
form {
  max-width: 600px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}
.form-group {
  margin-bottom: 16px;
}
label {
  display: block;
  margin-bottom: 6px;
  color: #333;
  font-weight: 500;
}
input, select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
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
          <h4>📋 表单结构</h4>
          <ul>
            <li><code>&lt;form&gt;</code> - 表单容器</li>
            <li><code>action</code> - 提交地址</li>
            <li><code>method</code> - 提交方式</li>
            <li><code>&lt;label&gt;</code> - 标签元素</li>
            <li><code>for</code> / <code>id</code> - 关联</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>⌨️ 输入元素</h4>
          <ul>
            <li><code>type="text"</code> - 文本</li>
            <li><code>type="password"</code> - 密码</li>
            <li><code>type="email"</code> - 邮箱</li>
            <li><code>type="number"</code> - 数字</li>
            <li><code>type="date"</code> - 日期</li>
            <li><code>&lt;textarea&gt;</code> - 多行文本</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>✅ 选择元素</h4>
          <ul>
            <li><code>type="radio"</code> - 单选</li>
            <li><code>type="checkbox"</code> - 多选</li>
            <li><code>&lt;select&gt;</code> - 下拉</li>
            <li><code>&lt;option&gt;</code> - 选项</li>
            <li><code>name</code> - 分组</li>
            <li><code>value</code> - 值</li>
          </ul>
        </div>

        <div class="summary-card">
          <h4>🔘 按钮类型</h4>
          <ul>
            <li><code>type="submit"</code> - 提交</li>
            <li><code>type="reset"</code> - 重置</li>
            <li><code>type="button"</code> - 普通</li>
            <li><code>&lt;button&gt;</code> - 按钮标签</li>
            <li><code>&lt;input type="submit"&gt;</code></li>
          </ul>
        </div>
      </div>

      <div class="best-practices">
        <h3>💡 最佳实践</h3>
        <ul>
          <li>✅ 始终为输入框添加 <code>label</code> 标签</li>
          <li>✅ 使用 <code>placeholder</code> 提供输入提示</li>
          <li>✅ 合理使用 <code>required</code> 标记必填项</li>
          <li>✅ 单选按钮和复选框要设置相同的 <code>name</code></li>
          <li>✅ 为表单元素设置有意义的 <code>name</code> 和 <code>id</code></li>
          <li>✅ 提供清晰的错误提示和验证反馈</li>
        </ul>
      </div>
    </section>
  </LessonLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import LessonLayout from '@/components/LessonLayout.vue'
import CodeEditor from '@/components/CodeEditor.vue'

// 输入框类型选择器
const selectedInputType = ref('text')

const inputTypes = [
  { value: 'text', label: '文本' },
  { value: 'password', label: '密码' },
  { value: 'email', label: '邮箱' },
  { value: 'number', label: '数字' },
  { value: 'tel', label: '电话' },
  { value: 'url', label: '网址' },
  { value: 'date', label: '日期' },
  { value: 'time', label: '时间' },
  { value: 'color', label: '颜色' },
  { value: 'range', label: '滑块' }
]

const inputTypeDetails = {
  'text': {
    label: '文本输入框',
    description: '最常用的输入类型，可以输入任何文本内容',
    placeholder: '请输入文本',
    code: '<input type="text" placeholder="请输入文本">'
  },
  'password': {
    label: '密码输入框',
    description: '输入内容会被隐藏为圆点或星号',
    placeholder: '请输入密码',
    code: '<input type="password" placeholder="请输入密码">'
  },
  'email': {
    label: '邮箱输入框',
    description: '自动验证邮箱格式，移动端会显示 @ 键盘',
    placeholder: 'example@email.com',
    code: '<input type="email" placeholder="example@email.com">'
  },
  'number': {
    label: '数字输入框',
    description: '只允许输入数字，可设置最小值和最大值',
    placeholder: '请输入数字',
    code: '<input type="number" min="0" max="100">'
  },
  'tel': {
    label: '电话输入框',
    description: '移动端会显示数字键盘',
    placeholder: '请输入电话号码',
    code: '<input type="tel" placeholder="请输入电话号码">'
  },
  'url': {
    label: '网址输入框',
    description: '自动验证 URL 格式',
    placeholder: 'https://example.com',
    code: '<input type="url" placeholder="https://example.com">'
  },
  'date': {
    label: '日期选择器',
    description: '提供日期选择器界面',
    placeholder: '',
    code: '<input type="date">'
  },
  'time': {
    label: '时间选择器',
    description: '提供时间选择器界面',
    placeholder: '',
    code: '<input type="time">'
  },
  'color': {
    label: '颜色选择器',
    description: '提供颜色选择器界面',
    placeholder: '',
    code: '<input type="color">'
  },
  'range': {
    label: '滑块选择器',
    description: '通过滑块选择数值范围',
    placeholder: '',
    code: '<input type="range" min="0" max="100">'
  }
}

const currentInputType = computed(() => inputTypeDetails[selectedInputType.value])
</script>

<style scoped>
/* 属性卡片 */
.attribute-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.attr-card {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.attr-name {
  font-family: 'Consolas', monospace;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.attr-desc {
  font-size: 14px;
  margin-bottom: 12px;
  opacity: 0.95;
}

.attr-card code {
  display: block;
  padding: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: 13px;
}

/* 输入类型选择器 */
.input-type-selector {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.type-btn {
  padding: 8px 16px;
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

.input-demo-area {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-top: 20px;
}

.demo-info h5 {
  margin: 0 0 8px 0;
  color: var(--primary-blue);
  font-size: 18px;
}

.demo-info p {
  margin: 0 0 20px 0;
  color: #666;
  line-height: 1.6;
}

.demo-input {
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.demo-input label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

.demo-field {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
}

.demo-field:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
}

.demo-code {
  margin-top: 20px;
}

.demo-code h5 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 14px;
}

.demo-code pre {
  margin: 0;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;
  font-family: 'Consolas', monospace;
  font-size: 13px;
  overflow-x: auto;
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
  margin: 8px 0 16px 0;
  opacity: 0.9;
  font-size: 14px;
}

.code-example pre {
  margin: 0;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

/* 按钮类型卡片 */
.button-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.button-card {
  padding: 20px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  transition: all 0.3s;
}

.button-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.button-card h4 {
  margin: 0 0 8px 0;
  color: var(--primary-blue);
  font-size: 16px;
  font-family: 'Consolas', monospace;
}

.button-card p {
  margin: 8px 0 12px 0;
  color: #666;
  font-size: 14px;
}

.button-card code {
  display: block;
  padding: 8px 12px;
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
  .attribute-cards,
  .concept-cards,
  .button-types,
  .summary-grid {
    grid-template-columns: 1fr;
  }

  .input-type-selector {
    gap: 6px;
  }

  .type-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style>
