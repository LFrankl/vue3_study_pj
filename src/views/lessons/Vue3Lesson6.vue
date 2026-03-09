<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第59课：表单绑定</h1>
      <p class="lesson-subtitle">深入学习 v-model 双向绑定，掌握各种表单元素的数据绑定技巧</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 30 分钟</span>
        <span class="difficulty">📊 难度：中级</span>
      </div>
    </div>

    <div class="lesson-content">
      <!-- v-model 基础 -->
      <section class="content-section">
        <h2>1️⃣ v-model 双向绑定基础</h2>
        <p><code>v-model</code> 是 Vue 中实现表单双向数据绑定的指令，它会根据控件类型自动选择正确的方法来更新元素。</p>

        <div class="info-box">
          <h3>什么是双向绑定？</h3>
          <p><strong>双向绑定</strong>意味着：</p>
          <ul>
            <li>📥 <strong>数据 → 视图</strong>：当数据变化时，视图自动更新</li>
            <li>📤 <strong>视图 → 数据</strong>：当用户输入时，数据自动更新</li>
          </ul>
        </div>

        <div class="demo-box">
          <h3>🎯 基础演示：文本输入框</h3>
          <div class="demo-content">
            <div class="demo-result">
              <div class="input-group">
                <label>输入你的名字：</label>
                <input
                  v-model="userName"
                  type="text"
                  placeholder="请输入姓名"
                  class="input-field"
                />
              </div>

              <div class="output-display">
                <h4>实时显示：</h4>
                <p class="output-text">你好，{{ userName || '（还没输入）' }}！</p>
                <p class="output-length">字符长度：{{ userName.length }}</p>
              </div>

              <div class="code-display">
                <h4>绑定的数据：</h4>
                <pre><code>userName: "{{ userName }}"</code></pre>
              </div>
            </div>

            <div class="explanation">
              <h4>📝 原理说明</h4>
              <p><code>v-model</code> 实际上是以下写法的语法糖：</p>
              <pre><code>&lt;!-- v-model 的完整写法 --&gt;
&lt;input
  :value="userName"
  @input="userName = $event.target.value"
/&gt;

&lt;!-- 简化为 --&gt;
&lt;input v-model="userName" /&gt;</code></pre>
            </div>
          </div>
        </div>

        <div class="warning-box">
          <strong>⚠️ 重要提示：</strong>
          <p><code>v-model</code> 会忽略所有表单元素的 <code>value</code>、<code>checked</code>、<code>selected</code> 属性的初始值，始终将当前绑定的 JavaScript 状态视为数据来源。</p>
        </div>
      </section>

      <!-- 文本输入 -->
      <section class="content-section">
        <h2>2️⃣ 文本输入框 &lt;input&gt; 和 &lt;textarea&gt;</h2>

        <div class="demo-box">
          <h3>🎯 多种文本输入示例</h3>
          <div class="demo-content">
            <div class="form-grid">
              <!-- 单行文本 -->
              <div class="form-item">
                <label>单行文本：</label>
                <input
                  v-model="formData.singleLine"
                  type="text"
                  placeholder="输入单行文本"
                  class="input-field"
                />
                <p class="form-value">值：{{ formData.singleLine }}</p>
              </div>

              <!-- 多行文本 -->
              <div class="form-item">
                <label>多行文本：</label>
                <textarea
                  v-model="formData.multiLine"
                  placeholder="输入多行文本&#10;可以换行哦..."
                  rows="4"
                  class="textarea-field"
                ></textarea>
                <p class="form-value">值：{{ formData.multiLine }}</p>
              </div>

              <!-- 密码输入 -->
              <div class="form-item">
                <label>密码输入：</label>
                <input
                  v-model="formData.password"
                  type="password"
                  placeholder="输入密码"
                  class="input-field"
                />
                <p class="form-value">值：{{ formData.password ? '******' : '（未输入）' }}</p>
              </div>

              <!-- 邮箱输入 -->
              <div class="form-item">
                <label>邮箱输入：</label>
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="example@email.com"
                  class="input-field"
                />
                <p class="form-value">值：{{ formData.email }}</p>
              </div>

              <!-- 数字输入 -->
              <div class="form-item">
                <label>数字输入：</label>
                <input
                  v-model="formData.number"
                  type="number"
                  placeholder="输入数字"
                  class="input-field"
                />
                <p class="form-value">值：{{ formData.number }}（类型：{{ typeof formData.number }}）</p>
              </div>

              <!-- URL输入 -->
              <div class="form-item">
                <label>URL输入：</label>
                <input
                  v-model="formData.url"
                  type="url"
                  placeholder="https://example.com"
                  class="input-field"
                />
                <p class="form-value">值：{{ formData.url }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="tip-box">
          <strong>💡 提示：</strong>
          <p>对于需要 IME（中文、日文、韩文等输入法）的语言，<code>v-model</code> 不会在输入法组合文字过程中更新。如果需要响应这些更新，应该使用 <code>input</code> 事件监听器和 <code>value</code> 绑定。</p>
        </div>
      </section>

      <!-- 复选框 -->
      <section class="content-section">
        <h2>3️⃣ 复选框 &lt;input type="checkbox"&gt;</h2>
        <p>复选框可以绑定到布尔值（单个）或数组（多个）。</p>

        <div class="demo-box">
          <h3>🎯 单个复选框 - 绑定布尔值</h3>
          <div class="demo-content">
            <div class="checkbox-demo">
              <label class="checkbox-label">
                <input
                  v-model="agreeTerms"
                  type="checkbox"
                  class="checkbox-input"
                />
                <span class="checkbox-text">我已阅读并同意用户协议</span>
              </label>

              <div class="result-display">
                <p>✅ 绑定值：{{ agreeTerms }}</p>
                <button
                  :disabled="!agreeTerms"
                  :class="['submit-btn', { disabled: !agreeTerms }]"
                  @click="submitForm"
                >
                  {{ agreeTerms ? '提交' : '请先同意协议' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 多个复选框 - 绑定数组</h3>
          <div class="demo-content">
            <div class="checkbox-group-demo">
              <h4>选择你喜欢的技术栈：</h4>
              <div class="checkbox-group">
                <label
                  v-for="tech in techStack"
                  :key="tech.id"
                  class="checkbox-label modern"
                >
                  <input
                    v-model="selectedTech"
                    type="checkbox"
                    :value="tech.name"
                    class="checkbox-input"
                  />
                  <span class="checkbox-icon">{{ tech.icon }}</span>
                  <span class="checkbox-text">{{ tech.name }}</span>
                </label>
              </div>

              <div class="selected-result">
                <h4>你选择了 {{ selectedTech.length }} 项：</h4>
                <div class="tag-list">
                  <span
                    v-for="tech in selectedTech"
                    :key="tech"
                    class="tag"
                  >
                    {{ tech }}
                  </span>
                  <span v-if="selectedTech.length === 0" class="empty-text">
                    还没选择任何技术
                  </span>
                </div>
                <p class="data-display">数组内容：{{ JSON.stringify(selectedTech) }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="code-example-box">
          <h4>📝 代码示例</h4>
          <pre><code>&lt;!-- 单个复选框 --&gt;
&lt;input v-model="agreeTerms" type="checkbox" /&gt;
&lt;script setup&gt;
const agreeTerms = ref(false)  // 布尔值
&lt;/script&gt;

&lt;!-- 多个复选框 --&gt;
&lt;input v-model="selectedTech" type="checkbox" value="Vue3" /&gt;
&lt;input v-model="selectedTech" type="checkbox" value="React" /&gt;
&lt;script setup&gt;
const selectedTech = ref([])  // 数组
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <!-- 单选框 -->
      <section class="content-section">
        <h2>4️⃣ 单选框 &lt;input type="radio"&gt;</h2>
        <p>单选框用于在多个选项中选择一个，绑定的值就是被选中项的 <code>value</code>。</p>

        <div class="demo-box">
          <h3>🎯 支付方式选择</h3>
          <div class="demo-content">
            <div class="radio-demo">
              <h4>选择支付方式：</h4>
              <div class="radio-group">
                <label
                  v-for="method in paymentMethods"
                  :key="method.value"
                  class="radio-label"
                  :class="{ active: selectedPayment === method.value }"
                >
                  <input
                    v-model="selectedPayment"
                    type="radio"
                    :value="method.value"
                    class="radio-input"
                  />
                  <div class="radio-card">
                    <div class="radio-icon">{{ method.icon }}</div>
                    <div class="radio-content">
                      <div class="radio-title">{{ method.name }}</div>
                      <div class="radio-desc">{{ method.desc }}</div>
                    </div>
                    <div class="radio-indicator">
                      <span v-if="selectedPayment === method.value">✓</span>
                    </div>
                  </div>
                </label>
              </div>

              <div class="payment-result">
                <p class="result-text">
                  你选择了：<strong>{{ getPaymentName(selectedPayment) }}</strong>
                </p>
                <p class="data-display">绑定值：{{ selectedPayment }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 问卷调查示例</h3>
          <div class="demo-content">
            <div class="survey-demo">
              <div class="survey-question">
                <h4>1. 你的前端开发经验？</h4>
                <div class="radio-group-simple">
                  <label class="radio-label-simple">
                    <input v-model="survey.experience" type="radio" value="beginner" />
                    <span>🌱 初学者（0-1年）</span>
                  </label>
                  <label class="radio-label-simple">
                    <input v-model="survey.experience" type="radio" value="intermediate" />
                    <span>🌿 中级（1-3年）</span>
                  </label>
                  <label class="radio-label-simple">
                    <input v-model="survey.experience" type="radio" value="advanced" />
                    <span>🌳 高级（3年以上）</span>
                  </label>
                </div>
              </div>

              <div class="survey-question">
                <h4>2. 最喜欢的前端框架？</h4>
                <div class="radio-group-simple">
                  <label class="radio-label-simple">
                    <input v-model="survey.framework" type="radio" value="vue" />
                    <span>💚 Vue.js</span>
                  </label>
                  <label class="radio-label-simple">
                    <input v-model="survey.framework" type="radio" value="react" />
                    <span>⚛️ React</span>
                  </label>
                  <label class="radio-label-simple">
                    <input v-model="survey.framework" type="radio" value="angular" />
                    <span>🅰️ Angular</span>
                  </label>
                </div>
              </div>

              <div class="survey-result">
                <h4>调查结果：</h4>
                <pre>{{ JSON.stringify(survey, null, 2) }}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 下拉选择 -->
      <section class="content-section">
        <h2>5️⃣ 下拉选择 &lt;select&gt;</h2>
        <p>下拉选择框可以是单选或多选，绑定到字符串或数组。</p>

        <div class="demo-box">
          <h3>🎯 单选下拉框</h3>
          <div class="demo-content">
            <div class="select-demo">
              <label>选择你的城市：</label>
              <select v-model="selectedCity" class="select-field">
                <option value="">请选择城市</option>
                <option
                  v-for="city in cities"
                  :key="city.id"
                  :value="city.value"
                >
                  {{ city.icon }} {{ city.name }}
                </option>
              </select>

              <div class="select-result">
                <p v-if="selectedCity">
                  你选择了：<strong>{{ getCityName(selectedCity) }}</strong>
                </p>
                <p v-else class="placeholder-text">还没选择城市</p>
                <p class="data-display">绑定值：{{ selectedCity }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 多选下拉框</h3>
          <div class="demo-content">
            <div class="select-demo">
              <label>选择你擅长的编程语言（可多选，按住 Ctrl/Cmd）：</label>
              <select
                v-model="selectedLanguages"
                multiple
                class="select-field multi"
                size="6"
              >
                <option
                  v-for="lang in programmingLanguages"
                  :key="lang.value"
                  :value="lang.value"
                >
                  {{ lang.icon }} {{ lang.name }}
                </option>
              </select>

              <div class="select-result">
                <h4>已选择 {{ selectedLanguages.length }} 种语言：</h4>
                <div class="tag-list">
                  <span
                    v-for="lang in selectedLanguages"
                    :key="lang"
                    class="tag"
                  >
                    {{ getLanguageName(lang) }}
                  </span>
                  <span v-if="selectedLanguages.length === 0" class="empty-text">
                    还没选择语言
                  </span>
                </div>
                <p class="data-display">数组内容：{{ JSON.stringify(selectedLanguages) }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="tip-box">
          <strong>💡 提示：</strong>
          <ul>
            <li>如果 <code>v-model</code> 表达式的初始值不匹配任何选项，<code>&lt;select&gt;</code> 元素将被渲染为"未选中"状态</li>
            <li>建议提供一个值为空的禁用选项作为占位符</li>
            <li>多选模式下，绑定值必须是数组</li>
          </ul>
        </div>
      </section>

      <!-- v-model 修饰符 -->
      <section class="content-section highlight-section">
        <h2>6️⃣ v-model 修饰符 ⭐</h2>
        <p>Vue 为 <code>v-model</code> 提供了三个内置修饰符，用于处理常见的输入场景。</p>

        <div class="modifier-grid">
          <!-- .lazy 修饰符 -->
          <div class="modifier-card">
            <h3>.lazy - 延迟同步</h3>
            <p>在 <code>change</code> 事件之后同步数据，而不是 <code>input</code> 事件</p>

            <div class="modifier-demo">
              <div class="demo-item">
                <h4>❌ 普通 v-model（实时同步）</h4>
                <input
                  v-model="normalInput"
                  type="text"
                  placeholder="输入时立即更新"
                  class="input-field"
                />
                <p class="update-indicator">
                  更新次数：<span class="count">{{ normalUpdateCount }}</span>
                </p>
                <p class="value-display">值：{{ normalInput }}</p>
              </div>

              <div class="demo-item">
                <h4>✅ v-model.lazy（失焦后同步）</h4>
                <input
                  v-model.lazy="lazyInput"
                  type="text"
                  placeholder="失焦后才更新"
                  class="input-field"
                />
                <p class="update-indicator">
                  更新次数：<span class="count">{{ lazyUpdateCount }}</span>
                </p>
                <p class="value-display">值：{{ lazyInput }}</p>
              </div>
            </div>

            <div class="code-example">
              <pre><code>&lt;input v-model.lazy="text" /&gt;</code></pre>
            </div>

            <div class="use-case">
              <strong>📌 使用场景：</strong>
              <p>需要减少更新频率，比如实时搜索但不想每次按键都触发请求</p>
            </div>
          </div>

          <!-- .number 修饰符 -->
          <div class="modifier-card">
            <h3>.number - 自动转换数字</h3>
            <p>自动将用户输入值转换为数字类型</p>

            <div class="modifier-demo">
              <div class="demo-item">
                <h4>❌ 普通 v-model（字符串类型）</h4>
                <input
                  v-model="normalNumber"
                  type="number"
                  placeholder="输入数字"
                  class="input-field"
                />
                <p class="type-display">
                  类型：<span class="type-tag">{{ typeof normalNumber }}</span>
                </p>
                <p class="value-display">值：{{ normalNumber }}</p>
              </div>

              <div class="demo-item">
                <h4>✅ v-model.number（数字类型）</h4>
                <input
                  v-model.number="numberInput"
                  type="number"
                  placeholder="输入数字"
                  class="input-field"
                />
                <p class="type-display">
                  类型：<span class="type-tag number">{{ typeof numberInput }}</span>
                </p>
                <p class="value-display">值：{{ numberInput }}</p>
              </div>

              <div class="calculation-demo">
                <h4>🧮 计算演示：</h4>
                <p>普通：{{ normalNumber }} + 10 = {{ normalNumber + 10 }}</p>
                <p>数字：{{ numberInput }} + 10 = {{ numberInput + 10 }}</p>
              </div>
            </div>

            <div class="code-example">
              <pre><code>&lt;input v-model.number="age" type="number" /&gt;</code></pre>
            </div>

            <div class="use-case">
              <strong>📌 使用场景：</strong>
              <p>需要进行数学计算的场景，如价格、年龄、数量等</p>
            </div>
          </div>

          <!-- .trim 修饰符 -->
          <div class="modifier-card">
            <h3>.trim - 去除首尾空格</h3>
            <p>自动过滤用户输入的首尾空白字符</p>

            <div class="modifier-demo">
              <div class="demo-item">
                <h4>❌ 普通 v-model（保留空格）</h4>
                <input
                  v-model="normalTrim"
                  type="text"
                  placeholder="试试输入首尾空格"
                  class="input-field"
                />
                <p class="length-display">
                  长度：<span class="count">{{ normalTrim.length }}</span>
                </p>
                <p class="value-display">值：[{{ normalTrim }}]</p>
              </div>

              <div class="demo-item">
                <h4>✅ v-model.trim（自动去除）</h4>
                <input
                  v-model.trim="trimInput"
                  type="text"
                  placeholder="试试输入首尾空格"
                  class="input-field"
                />
                <p class="length-display">
                  长度：<span class="count">{{ trimInput.length }}</span>
                </p>
                <p class="value-display">值：[{{ trimInput }}]</p>
              </div>
            </div>

            <div class="code-example">
              <pre><code>&lt;input v-model.trim="username" /&gt;</code></pre>
            </div>

            <div class="use-case">
              <strong>📌 使用场景：</strong>
              <p>用户名、邮箱等不允许有首尾空格的输入</p>
            </div>
          </div>
        </div>

        <div class="combination-demo">
          <h3>🔗 组合使用修饰符</h3>
          <p>可以同时使用多个修饰符：</p>
          <div class="demo-content">
            <input
              v-model.lazy.number.trim="combinedInput"
              type="number"
              placeholder="组合使用 .lazy.number.trim"
              class="input-field"
            />
            <p>类型：{{ typeof combinedInput }} | 值：{{ combinedInput }}</p>
          </div>
          <pre><code>&lt;input v-model.lazy.number.trim="value" /&gt;</code></pre>
        </div>
      </section>

      <!-- 值绑定 -->
      <section class="content-section">
        <h2>7️⃣ 值绑定（动态值）</h2>
        <p>有时我们需要将值绑定到当前组件实例上的动态数据，而不是静态字符串。</p>

        <div class="demo-box">
          <h3>🎯 动态复选框值</h3>
          <div class="demo-content">
            <div class="dynamic-value-demo">
              <label class="checkbox-label">
                <input
                  v-model="toggle"
                  type="checkbox"
                  true-value="激活"
                  false-value="未激活"
                  class="checkbox-input"
                />
                <span>开关状态</span>
              </label>

              <div class="result-display">
                <p>当前状态：<strong>{{ toggle }}</strong></p>
                <p class="hint">勾选时值为"激活"，取消时值为"未激活"</p>
              </div>

              <div class="code-example">
                <pre><code>&lt;input
  v-model="toggle"
  type="checkbox"
  true-value="激活"
  false-value="未激活"
/&gt;</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-box">
          <h3>🎯 动态单选框值</h3>
          <div class="demo-content">
            <div class="dynamic-radio-demo">
              <div class="radio-group-simple">
                <label class="radio-label-simple">
                  <input
                    v-model="picked"
                    type="radio"
                    :value="optionA"
                  />
                  <span>选项 A</span>
                </label>
                <label class="radio-label-simple">
                  <input
                    v-model="picked"
                    type="radio"
                    :value="optionB"
                  />
                  <span>选项 B</span>
                </label>
              </div>

              <div class="result-display">
                <p>选中的值：{{ JSON.stringify(picked) }}</p>
              </div>

              <div class="code-example">
                <pre><code>&lt;script setup&gt;
const optionA = { text: '选项A', value: 1 }
const optionB = { text: '选项B', value: 2 }
const picked = ref(optionA)
&lt;/script&gt;

&lt;input v-model="picked" type="radio" :value="optionA" /&gt;</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 综合实战 -->
      <section class="content-section practice-section">
        <h2>🎯 综合实战：用户注册表单</h2>
        <p>让我们创建一个完整的用户注册表单，综合运用各种表单绑定技巧。</p>

        <div class="demo-box">
          <div class="registration-form">
            <h3>📝 用户注册</h3>

            <form @submit.prevent="handleRegister" class="form-container">
              <!-- 基本信息 -->
              <div class="form-section">
                <h4>👤 基本信息</h4>

                <div class="form-row">
                  <label>用户名 *</label>
                  <input
                    v-model.trim="registerForm.username"
                    type="text"
                    placeholder="请输入用户名（3-20个字符）"
                    class="input-field"
                    required
                  />
                  <span v-if="registerForm.username" class="char-count">
                    {{ registerForm.username.length }}/20
                  </span>
                </div>

                <div class="form-row">
                  <label>邮箱 *</label>
                  <input
                    v-model.trim="registerForm.email"
                    type="email"
                    placeholder="your@email.com"
                    class="input-field"
                    required
                  />
                </div>

                <div class="form-row">
                  <label>密码 *</label>
                  <input
                    v-model="registerForm.password"
                    type="password"
                    placeholder="至少8个字符"
                    class="input-field"
                    required
                  />
                  <div v-if="registerForm.password" class="password-strength">
                    强度：
                    <span :class="['strength-bar', passwordStrength]">
                      {{ passwordStrengthText }}
                    </span>
                  </div>
                </div>

                <div class="form-row">
                  <label>确认密码 *</label>
                  <input
                    v-model="registerForm.confirmPassword"
                    type="password"
                    placeholder="再次输入密码"
                    class="input-field"
                    required
                  />
                  <span
                    v-if="registerForm.confirmPassword"
                    :class="['match-status', { match: passwordsMatch }]"
                  >
                    {{ passwordsMatch ? '✓ 密码匹配' : '✗ 密码不匹配' }}
                  </span>
                </div>
              </div>

              <!-- 个人资料 -->
              <div class="form-section">
                <h4>📋 个人资料</h4>

                <div class="form-row">
                  <label>性别</label>
                  <div class="radio-group-inline">
                    <label class="radio-label-inline">
                      <input
                        v-model="registerForm.gender"
                        type="radio"
                        value="male"
                      />
                      <span>👨 男</span>
                    </label>
                    <label class="radio-label-inline">
                      <input
                        v-model="registerForm.gender"
                        type="radio"
                        value="female"
                      />
                      <span>👩 女</span>
                    </label>
                    <label class="radio-label-inline">
                      <input
                        v-model="registerForm.gender"
                        type="radio"
                        value="other"
                      />
                      <span>🧑 其他</span>
                    </label>
                  </div>
                </div>

                <div class="form-row">
                  <label>年龄</label>
                  <input
                    v-model.number="registerForm.age"
                    type="number"
                    placeholder="请输入年龄"
                    min="1"
                    max="150"
                    class="input-field"
                  />
                </div>

                <div class="form-row">
                  <label>所在城市</label>
                  <select v-model="registerForm.city" class="select-field">
                    <option value="">请选择城市</option>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="guangzhou">广州</option>
                    <option value="shenzhen">深圳</option>
                    <option value="hangzhou">杭州</option>
                  </select>
                </div>

                <div class="form-row">
                  <label>兴趣爱好</label>
                  <div class="checkbox-group-inline">
                    <label class="checkbox-label-inline">
                      <input
                        v-model="registerForm.hobbies"
                        type="checkbox"
                        value="reading"
                      />
                      <span>📚 阅读</span>
                    </label>
                    <label class="checkbox-label-inline">
                      <input
                        v-model="registerForm.hobbies"
                        type="checkbox"
                        value="sports"
                      />
                      <span>⚽ 运动</span>
                    </label>
                    <label class="checkbox-label-inline">
                      <input
                        v-model="registerForm.hobbies"
                        type="checkbox"
                        value="music"
                      />
                      <span>🎵 音乐</span>
                    </label>
                    <label class="checkbox-label-inline">
                      <input
                        v-model="registerForm.hobbies"
                        type="checkbox"
                        value="travel"
                      />
                      <span>✈️ 旅行</span>
                    </label>
                    <label class="checkbox-label-inline">
                      <input
                        v-model="registerForm.hobbies"
                        type="checkbox"
                        value="coding"
                      />
                      <span>💻 编程</span>
                    </label>
                  </div>
                </div>

                <div class="form-row">
                  <label>个人简介</label>
                  <textarea
                    v-model.trim="registerForm.bio"
                    placeholder="介绍一下自己吧..."
                    rows="4"
                    class="textarea-field"
                  ></textarea>
                  <span v-if="registerForm.bio" class="char-count">
                    {{ registerForm.bio.length }}/200
                  </span>
                </div>
              </div>

              <!-- 协议 -->
              <div class="form-section">
                <label class="checkbox-label agreement">
                  <input
                    v-model="registerForm.agreeTerms"
                    type="checkbox"
                    required
                  />
                  <span>我已阅读并同意 <a href="#" class="link">用户协议</a> 和 <a href="#" class="link">隐私政策</a></span>
                </label>
              </div>

              <!-- 提交按钮 -->
              <div class="form-actions">
                <button
                  type="submit"
                  :disabled="!isFormValid"
                  :class="['btn-submit', { disabled: !isFormValid }]"
                >
                  {{ isFormValid ? '立即注册' : '请完善必填信息' }}
                </button>
                <button
                  type="button"
                  @click="resetForm"
                  class="btn-reset"
                >
                  重置表单
                </button>
              </div>
            </form>

            <!-- 表单数据预览 -->
            <div class="form-preview">
              <h4>📊 表单数据实时预览</h4>
              <pre>{{ JSON.stringify(registerForm, null, 2) }}</pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 知识总结 -->
      <section class="content-section summary-section">
        <h2>📚 知识总结</h2>

        <div class="summary-grid">
          <div class="summary-card">
            <h4>📝 基础用法</h4>
            <ul>
              <li><code>&lt;input&gt;</code> - 文本输入</li>
              <li><code>&lt;textarea&gt;</code> - 多行文本</li>
              <li><code>&lt;select&gt;</code> - 下拉选择</li>
              <li><code>checkbox</code> - 复选框</li>
              <li><code>radio</code> - 单选框</li>
            </ul>
          </div>

          <div class="summary-card">
            <h4>🔧 修饰符</h4>
            <ul>
              <li><code>.lazy</code> - 失焦后同步</li>
              <li><code>.number</code> - 转换为数字</li>
              <li><code>.trim</code> - 去除首尾空格</li>
              <li>可以组合使用修饰符</li>
            </ul>
          </div>

          <div class="summary-card">
            <h4>📦 数据类型</h4>
            <ul>
              <li>单个复选框 → Boolean</li>
              <li>多个复选框 → Array</li>
              <li>单选框 → String/Number</li>
              <li>单选下拉框 → String/Number</li>
              <li>多选下拉框 → Array</li>
            </ul>
          </div>

          <div class="summary-card">
            <h4>💡 最佳实践</h4>
            <ul>
              <li>合理使用修饰符提升性能</li>
              <li>表单验证要及时反馈</li>
              <li>提供清晰的错误提示</li>
              <li>注意数据类型转换</li>
              <li>敏感信息要加密传输</li>
            </ul>
          </div>
        </div>

        <div class="key-points">
          <h3>🔑 核心要点</h3>
          <div class="point-list">
            <div class="point-item">
              <span class="point-number">1</span>
              <div class="point-content">
                <strong>双向绑定原理</strong>
                <p><code>v-model</code> 是 <code>:value</code> 和 <code>@input</code> 的语法糖</p>
              </div>
            </div>
            <div class="point-item">
              <span class="point-number">2</span>
              <div class="point-content">
                <strong>不同表单元素的绑定方式</strong>
                <p>根据表单类型自动选择正确的属性和事件</p>
              </div>
            </div>
            <div class="point-item">
              <span class="point-number">3</span>
              <div class="point-content">
                <strong>修饰符优化体验</strong>
                <p>使用修饰符处理常见场景，提升开发效率</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 课程导航 -->
      <div class="lesson-nav">
        <router-link to="/lessons/vue3/lesson-5" class="nav-btn prev-btn">
          ← 上一课：列表渲染
        </router-link>
        <router-link to="/lessons/vue3/lesson-7" class="nav-btn next-btn">
          下一课：组件基础 →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// 基础双向绑定
const userName = ref('')

// 文本输入表单数据
const formData = ref({
  singleLine: '',
  multiLine: '',
  password: '',
  email: '',
  number: '',
  url: ''
})

// 复选框 - 单个
const agreeTerms = ref(false)

// 复选框 - 多个
const techStack = ref([
  { id: 1, name: 'Vue3', icon: '💚' },
  { id: 2, name: 'React', icon: '⚛️' },
  { id: 3, name: 'Angular', icon: '🅰️' },
  { id: 4, name: 'Svelte', icon: '🔥' },
  { id: 5, name: 'Node.js', icon: '🟢' },
  { id: 6, name: 'TypeScript', icon: '🔷' }
])
const selectedTech = ref([])

// 单选框
const paymentMethods = ref([
  {
    value: 'alipay',
    name: '支付宝',
    icon: '💙',
    desc: '快捷安全的支付方式'
  },
  {
    value: 'wechat',
    name: '微信支付',
    icon: '💚',
    desc: '使用微信支付更便捷'
  },
  {
    value: 'unionpay',
    name: '银联',
    icon: '🏦',
    desc: '银行卡直接支付'
  },
  {
    value: 'card',
    name: '信用卡',
    icon: '💳',
    desc: '支持 Visa/Mastercard'
  }
])
const selectedPayment = ref('alipay')

const getPaymentName = (value) => {
  const method = paymentMethods.value.find(m => m.value === value)
  return method ? method.name : '未选择'
}

// 问卷调查
const survey = ref({
  experience: '',
  framework: ''
})

// 下拉选择
const cities = ref([
  { id: 1, value: 'beijing', name: '北京', icon: '🏛️' },
  { id: 2, value: 'shanghai', name: '上海', icon: '🗼' },
  { id: 3, value: 'guangzhou', name: '广州', icon: '🌸' },
  { id: 4, value: 'shenzhen', name: '深圳', icon: '🏢' },
  { id: 5, value: 'hangzhou', name: '杭州', icon: '🌊' },
  { id: 6, value: 'chengdu', name: '成都', icon: '🐼' }
])
const selectedCity = ref('')

const getCityName = (value) => {
  const city = cities.value.find(c => c.value === value)
  return city ? city.name : ''
}

// 多选下拉框
const programmingLanguages = ref([
  { value: 'javascript', name: 'JavaScript', icon: '💛' },
  { value: 'python', name: 'Python', icon: '🐍' },
  { value: 'java', name: 'Java', icon: '☕' },
  { value: 'go', name: 'Go', icon: '🔵' },
  { value: 'rust', name: 'Rust', icon: '🦀' },
  { value: 'cpp', name: 'C++', icon: '⚡' }
])
const selectedLanguages = ref([])

const getLanguageName = (value) => {
  const lang = programmingLanguages.value.find(l => l.value === value)
  return lang ? `${lang.icon} ${lang.name}` : value
}

// 修饰符演示 - .lazy
const normalInput = ref('')
const lazyInput = ref('')
const normalUpdateCount = ref(0)
const lazyUpdateCount = ref(0)

watch(normalInput, () => {
  normalUpdateCount.value++
})

watch(lazyInput, () => {
  lazyUpdateCount.value++
})

// 修饰符演示 - .number
const normalNumber = ref('')
const numberInput = ref(0)

// 修饰符演示 - .trim
const normalTrim = ref('')
const trimInput = ref('')

// 组合修饰符
const combinedInput = ref(0)

// 值绑定
const toggle = ref('未激活')
const optionA = { text: '选项A', value: 1 }
const optionB = { text: '选项B', value: 2 }
const picked = ref(optionA)

// 注册表单
const registerForm = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  age: null,
  city: '',
  hobbies: [],
  bio: '',
  agreeTerms: false
})

// 密码强度计算
const passwordStrength = computed(() => {
  const pwd = registerForm.value.password
  if (!pwd) return ''
  if (pwd.length < 6) return 'weak'
  if (pwd.length < 10) return 'medium'
  return 'strong'
})

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value
  if (strength === 'weak') return '弱'
  if (strength === 'medium') return '中'
  if (strength === 'strong') return '强'
  return ''
})

// 密码匹配
const passwordsMatch = computed(() => {
  return registerForm.value.password === registerForm.value.confirmPassword &&
         registerForm.value.confirmPassword !== ''
})

// 表单验证
const isFormValid = computed(() => {
  const form = registerForm.value
  return form.username.length >= 3 &&
         form.email.includes('@') &&
         form.password.length >= 8 &&
         passwordsMatch.value &&
         form.agreeTerms
})

// 提交表单
const submitForm = () => {
  if (!agreeTerms.value) {
    alert('请先同意用户协议！')
    return
  }
  alert('提交成功！')
}

const handleRegister = () => {
  if (!isFormValid.value) {
    alert('请完善必填信息！')
    return
  }
  alert('注册成功！\n\n' + JSON.stringify(registerForm.value, null, 2))
}

// 重置表单
const resetForm = () => {
  registerForm.value = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    age: null,
    city: '',
    hobbies: [],
    bio: '',
    agreeTerms: false
  }
}
</script>

<style scoped>
.lesson-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  background: #f8f9fa;
}

.lesson-header {
  background: linear-gradient(135deg, #42b983 0%, #2c7a5f 100%);
  color: white;
  padding: 48px 40px;
  border-radius: 16px;
  margin-bottom: 32px;
  box-shadow: 0 8px 24px rgba(66, 185, 131, 0.3);
}

.lesson-header h1 {
  margin: 0 0 12px 0;
  font-size: 36px;
}

.lesson-subtitle {
  font-size: 18px;
  opacity: 0.95;
  margin: 0 0 20px 0;
}

.lesson-meta {
  display: flex;
  gap: 24px;
  font-size: 14px;
  opacity: 0.9;
}

.content-section {
  background: white;
  padding: 32px;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.content-section h2 {
  color: #2c3e50;
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 3px solid #42b983;
}

.info-box, .warning-box, .tip-box {
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.info-box {
  background: #e8f5e9;
  border-left: 4px solid #4caf50;
}

.warning-box {
  background: #fff3e0;
  border-left: 4px solid #ff9800;
}

.tip-box {
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
}

.info-box h3 {
  margin: 0 0 12px 0;
  color: #2c3e50;
}

.info-box ul, .tip-box ul {
  margin: 12px 0 0 0;
  padding-left: 24px;
}

.info-box li, .tip-box li {
  margin: 8px 0;
  line-height: 1.6;
}

.demo-box {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  border: 2px solid #e0e0e0;
}

.demo-box h3, .demo-box h4 {
  margin: 0 0 16px 0;
  color: #42b983;
}

.demo-content {
  display: grid;
  gap: 20px;
}

.demo-result {
  padding: 20px;
  background: white;
  border-radius: 8px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
}

.textarea-field {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s;
}

.textarea-field:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
}

.output-display {
  background: linear-gradient(135deg, #42b983 0%, #2c7a5f 100%);
  color: white;
  padding: 24px;
  border-radius: 8px;
  margin-top: 20px;
}

.output-display h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  opacity: 0.9;
}

.output-text {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 8px 0;
}

.output-length {
  font-size: 14px;
  opacity: 0.8;
  margin: 0;
}

.code-display {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
}

.code-display h4 {
  color: #f8f8f2;
  margin: 0 0 12px 0;
  font-size: 14px;
  opacity: 0.8;
}

code {
  font-family: 'Consolas', monospace;
  font-size: 14px;
}

pre {
  margin: 0;
  overflow-x: auto;
}

pre code {
  display: block;
  line-height: 1.6;
}

.explanation {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
}

.explanation h4 {
  margin: 0 0 12px 0;
  color: #2c3e50;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.form-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
}

.form-item label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.form-value {
  margin: 12px 0 0 0;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 4px;
  font-size: 13px;
  color: #666;
  font-family: 'Consolas', monospace;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  transition: background 0.2s;
}

.checkbox-label:hover {
  background: #f5f5f5;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.checkbox-text {
  font-size: 16px;
  color: #2c3e50;
}

.result-display {
  margin-top: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
}

.result-display p {
  margin: 8px 0;
  font-size: 16px;
  color: #2c3e50;
}

.submit-btn {
  padding: 12px 32px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-btn:hover:not(.disabled) {
  background: #2c7a5f;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.3);
}

.submit-btn.disabled {
  background: #ccc;
  cursor: not-allowed;
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin: 16px 0;
}

.checkbox-label.modern {
  background: white;
  border: 2px solid #e0e0e0;
  padding: 16px;
  border-radius: 8px;
  transition: all 0.2s;
}

.checkbox-label.modern:hover {
  border-color: #42b983;
  background: #f8fff8;
}

.checkbox-label.modern input:checked + .checkbox-icon {
  transform: scale(1.2);
}

.checkbox-icon {
  font-size: 24px;
  transition: transform 0.2s;
}

.selected-result {
  margin-top: 24px;
  padding: 20px;
  background: white;
  border-radius: 8px;
}

.selected-result h4 {
  margin: 0 0 12px 0;
  color: #2c3e50;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}

.tag {
  padding: 6px 16px;
  background: #42b983;
  color: white;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
}

.empty-text {
  color: #999;
  font-style: italic;
}

.data-display {
  margin-top: 12px;
  padding: 12px;
  background: #2d2d2d;
  color: #42b983;
  border-radius: 6px;
  font-family: 'Consolas', monospace;
  font-size: 13px;
  overflow-x: auto;
}

.radio-label {
  display: block;
  cursor: pointer;
  margin-bottom: 12px;
}

.radio-label.active .radio-card {
  border-color: #42b983;
  background: #f8fff8;
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.2);
}

.radio-input {
  display: none;
}

.radio-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  transition: all 0.3s;
}

.radio-card:hover {
  border-color: #42b983;
  transform: translateX(4px);
}

.radio-icon {
  font-size: 32px;
  width: 50px;
  text-align: center;
}

.radio-content {
  flex: 1;
}

.radio-title {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.radio-desc {
  font-size: 14px;
  color: #666;
}

.radio-indicator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #42b983;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}

.payment-result {
  margin-top: 24px;
  padding: 20px;
  background: linear-gradient(135deg, #42b983 0%, #2c7a5f 100%);
  color: white;
  border-radius: 12px;
}

.result-text {
  font-size: 18px;
  margin: 0 0 8px 0;
}

.data-display {
  margin: 8px 0 0 0;
}

.radio-group-simple {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 0;
}

.radio-label-simple {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.radio-label-simple:hover {
  border-color: #42b983;
  background: #f8fff8;
}

.radio-label-simple input {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.radio-label-simple span {
  font-size: 16px;
  color: #2c3e50;
}

.survey-demo {
  background: white;
  padding: 24px;
  border-radius: 12px;
}

.survey-question {
  margin-bottom: 32px;
}

.survey-question h4 {
  margin: 0 0 16px 0;
  color: #2c3e50;
  font-size: 18px;
}

.survey-result {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-top: 24px;
}

.survey-result h4 {
  margin: 0 0 12px 0;
  color: #2c3e50;
}

.survey-result pre {
  background: #2d2d2d;
  color: #42b983;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
}

.select-field {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.select-field:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
}

.select-field.multi {
  height: auto;
}

.select-demo {
  padding: 20px;
  background: white;
  border-radius: 8px;
}

.select-demo label {
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  color: #2c3e50;
}

.select-result {
  margin-top: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
}

.select-result h4 {
  margin: 0 0 12px 0;
  color: #2c3e50;
}

.placeholder-text {
  color: #999;
  font-style: italic;
}

.highlight-section {
  background: linear-gradient(135deg, #fff5f5 0%, #ffffff 100%);
  border-left: 5px solid #42b983;
}

.modifier-grid {
  display: grid;
  gap: 24px;
  margin: 24px 0;
}

.modifier-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.modifier-card h3 {
  margin: 0 0 12px 0;
  color: #42b983;
  font-size: 20px;
}

.modifier-card > p {
  color: #666;
  margin: 0 0 20px 0;
}

.modifier-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.demo-item {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
}

.demo-item h4 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #2c3e50;
}

.update-indicator, .type-display, .length-display {
  margin: 8px 0;
  font-size: 14px;
  color: #666;
}

.count {
  display: inline-block;
  padding: 2px 8px;
  background: #42b983;
  color: white;
  border-radius: 4px;
  font-weight: 600;
  min-width: 30px;
  text-align: center;
}

.type-tag {
  display: inline-block;
  padding: 2px 8px;
  background: #ff9800;
  color: white;
  border-radius: 4px;
  font-weight: 600;
  font-family: 'Consolas', monospace;
}

.type-tag.number {
  background: #4caf50;
}

.value-display {
  margin: 8px 0 0 0;
  padding: 8px;
  background: white;
  border-radius: 4px;
  font-family: 'Consolas', monospace;
  font-size: 14px;
  word-break: break-all;
}

.calculation-demo {
  grid-column: 1 / -1;
  background: #e8f5e9;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
}

.calculation-demo h4 {
  margin: 0 0 12px 0;
  color: #2c3e50;
}

.calculation-demo p {
  margin: 8px 0;
  font-family: 'Consolas', monospace;
  font-size: 16px;
}

.code-example {
  background: #2d2d2d;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
}

.code-example pre {
  margin: 0;
  color: #42b983;
}

.use-case {
  background: #e8f5e9;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
}

.use-case strong {
  color: #2c3e50;
  display: block;
  margin-bottom: 8px;
}

.use-case p {
  margin: 0;
  color: #666;
}

.combination-demo {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
}

.combination-demo h3 {
  margin: 0 0 12px 0;
  color: #42b983;
}

.combination-demo p {
  margin: 0 0 16px 0;
  color: #666;
}

.combination-demo .demo-content {
  margin: 16px 0;
}

.combination-demo pre {
  background: #2d2d2d;
  color: #42b983;
  padding: 16px;
  border-radius: 8px;
  margin-top: 12px;
}

.dynamic-value-demo, .dynamic-radio-demo {
  padding: 20px;
  background: white;
  border-radius: 8px;
}

.code-example-box {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin: 24px 0;
}

.code-example-box h4 {
  margin: 0 0 12px 0;
  color: #2c3e50;
}

.code-example-box pre {
  background: #2d2d2d;
  color: #42b983;
  padding: 16px;
  border-radius: 8px;
  margin: 0;
}

.hint {
  font-size: 13px;
  color: #666;
  margin-top: 8px;
}

.practice-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%);
  border: 3px solid #42b983;
}

.registration-form {
  background: white;
  padding: 32px;
  border-radius: 12px;
}

.registration-form h3 {
  margin: 0 0 24px 0;
  color: #2c3e50;
  font-size: 24px;
}

.form-container {
  max-width: 800px;
}

.form-section {
  margin-bottom: 32px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
}

.form-section h4 {
  margin: 0 0 20px 0;
  color: #42b983;
  font-size: 18px;
}

.form-row {
  margin-bottom: 20px;
  position: relative;
}

.form-row label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.char-count {
  position: absolute;
  right: 12px;
  top: 40px;
  font-size: 12px;
  color: #999;
  background: white;
  padding: 2px 8px;
  border-radius: 4px;
}

.password-strength {
  margin-top: 8px;
  font-size: 14px;
  color: #666;
}

.strength-bar {
  display: inline-block;
  padding: 2px 12px;
  border-radius: 4px;
  font-weight: 600;
  color: white;
}

.strength-bar.weak {
  background: #f44336;
}

.strength-bar.medium {
  background: #ff9800;
}

.strength-bar.strong {
  background: #4caf50;
}

.match-status {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: #f44336;
}

.match-status.match {
  color: #4caf50;
}

.radio-group-inline, .checkbox-group-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.radio-label-inline, .checkbox-label-inline {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.radio-label-inline:hover, .checkbox-label-inline:hover {
  border-color: #42b983;
  background: #f8fff8;
}

.radio-label-inline input, .checkbox-label-inline input {
  cursor: pointer;
}

.checkbox-label.agreement {
  background: #fff3e0;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #ff9800;
}

.link {
  color: #42b983;
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
}

.form-actions {
  display: flex;
  gap: 16px;
  margin-top: 32px;
}

.btn-submit, .btn-reset {
  flex: 1;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-submit {
  background: #42b983;
  color: white;
}

.btn-submit:hover:not(.disabled) {
  background: #2c7a5f;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.3);
}

.btn-submit.disabled {
  background: #ccc;
  cursor: not-allowed;
}

.btn-reset {
  background: white;
  color: #666;
  border: 2px solid #e0e0e0;
}

.btn-reset:hover {
  border-color: #42b983;
  color: #42b983;
}

.form-preview {
  margin-top: 32px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
}

.form-preview h4 {
  margin: 0 0 16px 0;
  color: #2c3e50;
}

.form-preview pre {
  background: #2d2d2d;
  color: #42b983;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 0;
  max-height: 500px;
  overflow-y: auto;
}

.summary-section {
  background: linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%);
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.summary-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  transition: all 0.2s;
}

.summary-card:hover {
  border-color: #42b983;
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.2);
}

.summary-card h4 {
  margin: 0 0 16px 0;
  color: #42b983;
  font-size: 18px;
}

.summary-card ul {
  margin: 0;
  padding-left: 20px;
}

.summary-card li {
  margin: 10px 0;
  line-height: 1.6;
  color: #2c3e50;
}

.summary-card code {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 4px;
  color: #42b983;
  font-size: 13px;
}

.key-points {
  background: white;
  padding: 24px;
  border-radius: 12px;
  margin-top: 24px;
  border: 2px solid #42b983;
}

.key-points h3 {
  margin: 0 0 20px 0;
  color: #42b983;
}

.point-list {
  display: grid;
  gap: 16px;
}

.point-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.point-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #42b983;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  flex-shrink: 0;
}

.point-content {
  flex: 1;
}

.point-content strong {
  display: block;
  margin-bottom: 6px;
  color: #2c3e50;
  font-size: 16px;
}

.point-content p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.point-content code {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 4px;
  color: #42b983;
  font-size: 13px;
}

.lesson-nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 48px;
}

.nav-btn {
  flex: 1;
  padding: 16px 24px;
  background: white;
  color: #42b983;
  text-decoration: none;
  border-radius: 12px;
  border: 2px solid #42b983;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s;
}

.nav-btn:hover {
  background: #42b983;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.3);
}

@media (max-width: 768px) {
  .lesson-header {
    padding: 32px 24px;
  }

  .lesson-header h1 {
    font-size: 28px;
  }

  .content-section {
    padding: 20px;
  }

  .form-grid, .modifier-grid {
    grid-template-columns: 1fr;
  }

  .lesson-nav {
    flex-direction: column;
  }

  .modifier-demo {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column;
  }
}
</style>
