<template>
  <LessonLayout
    :lesson-number="10"
    lesson-title="可访问性（Accessibility）"
    :prev-lesson="{ name: 'HTMLLesson9', title: '第9课：HTML 最佳实践' }"
    :next-lesson="null"
  >
    <!-- 课程简介 -->
    <section class="lesson-section">
      <h2>本课内容</h2>
      <p>Web 可访问性（a11y）确保所有人都能访问和使用网站，包括残障人士。本课将学习：</p>
      <ul>
        <li>什么是 Web 可访问性</li>
        <li>ARIA 属性和角色</li>
        <li>语义化 HTML 的重要性</li>
        <li>键盘导航和焦点管理</li>
        <li>屏幕阅读器优化</li>
        <li>可访问性测试工具</li>
      </ul>

      <div class="info-box">
        <strong>🌍 为什么可访问性重要？</strong>
        <ul>
          <li><strong>包容性</strong>：全球约 15% 的人口有某种形式的残障</li>
          <li><strong>法律要求</strong>：许多国家有 Web 可访问性法规（如 ADA、EAA）</li>
          <li><strong>更好的用户体验</strong>：可访问性改进使所有用户受益</li>
          <li><strong>SEO 优化</strong>：语义化标记有助于搜索引擎理解内容</li>
          <li><strong>道德责任</strong>：技术应该服务所有人</li>
        </ul>
      </div>
    </section>

    <!-- 语义化 HTML -->
    <section class="lesson-section">
      <h2>1. 语义化 HTML 的重要性</h2>
      <p>语义化 HTML 是可访问性的基础，它让辅助技术（如屏幕阅读器）能够理解页面结构。</p>

      <div class="comparison-box">
        <h3>语义化与非语义化对比</h3>

        <div class="compare-item">
          <div class="bad">
            <h4>❌ 非语义化（屏幕阅读器难以理解）</h4>
            <pre><code>&lt;div class="button" onclick="submit()"&gt;
  提交
&lt;/div&gt;

&lt;div class="header"&gt;标题&lt;/div&gt;

&lt;div onclick="navigate()"&gt;链接&lt;/div&gt;</code></pre>
            <p class="explanation">屏幕阅读器无法识别这些是按钮、标题或链接</p>
          </div>
          <div class="good">
            <h4>✅ 语义化（清晰的结构）</h4>
            <pre><code>&lt;button type="submit" onclick="submit()"&gt;
  提交
&lt;/button&gt;

&lt;h1&gt;标题&lt;/h1&gt;

&lt;a href="/page"&gt;链接&lt;/a&gt;</code></pre>
            <p class="explanation">屏幕阅读器能正确识别元素类型和功能</p>
          </div>
        </div>
      </div>

      <div class="example-box">
        <h3>实例：语义化页面结构</h3>
        <CodeEditor
          :initial-html="`<!DOCTYPE html>
<html lang='zh-CN'>
<head>
  <meta charset='UTF-8'>
  <title>可访问的页面结构</title>
</head>
<body>
  <a href='#main' class='skip-link' style='position: absolute; left: -9999px;'>
    跳转到主内容
  </a>

  <header style='background: #4285f4; color: white; padding: 20px;'>
    <h1 style='margin: 0;'>网站标题</h1>
    <nav aria-label='主导航' style='margin-top: 10px;'>
      <ul style='list-style: none; padding: 0; display: flex; gap: 15px; margin: 0;'>
        <li><a href='#' style='color: white;'>首页</a></li>
        <li><a href='#' style='color: white;'>关于</a></li>
        <li><a href='#' style='color: white;'>联系</a></li>
      </ul>
    </nav>
  </header>

  <main id='main' style='max-width: 800px; margin: 20px auto; padding: 0 20px;'>
    <article style='background: #f5f5f5; padding: 20px; border-radius: 8px;'>
      <h2>文章标题</h2>
      <p>这是一个使用语义化 HTML 的示例页面，对屏幕阅读器友好。</p>

      <section>
        <h3>章节标题</h3>
        <p>使用正确的标题层级帮助用户理解内容结构。</p>
      </section>

      <figure style='margin: 20px 0;'>
        <img src='https://via.placeholder.com/600x300'
             alt='示例图片：展示语义化HTML结构的图表'
             style='max-width: 100%; border-radius: 4px;'>
        <figcaption style='text-align: center; color: #666; margin-top: 8px;'>
          图1：HTML 语义化结构示意图
        </figcaption>
      </figure>
    </article>
  </main>

  <footer style='background: #333; color: white; text-align: center; padding: 20px; margin-top: 40px;'>
    <p style='margin: 0;'>&copy; 2025 网站名称</p>
  </footer>
</body>
</html>`"
          :initial-css="`.skip-link:focus {
  position: static;
  background: #ffeb3b;
  color: #000;
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
}`"
          :initial-js="''"
          :auto-run="true"
        />
      </div>

      <div class="tip-box">
        <strong>💡 语义化清单：</strong>
        <ul>
          <li>使用 <code>&lt;header&gt;</code>、<code>&lt;nav&gt;</code>、<code>&lt;main&gt;</code>、<code>&lt;footer&gt;</code> 定义页面结构</li>
          <li>使用 <code>&lt;article&gt;</code>、<code>&lt;section&gt;</code> 组织内容</li>
          <li>使用正确的标题层级（h1-h6）</li>
          <li>用 <code>&lt;button&gt;</code> 表示按钮，不要用 div</li>
          <li>用 <code>&lt;a&gt;</code> 表示链接，不要用 span</li>
        </ul>
      </div>
    </section>

    <!-- ARIA 属性 -->
    <section class="lesson-section">
      <h2>2. ARIA 属性和角色</h2>
      <p>ARIA（Accessible Rich Internet Applications）提供额外的语义信息，帮助辅助技术理解复杂的 Web 应用。</p>

      <div class="concept-box">
        <h3>常用 ARIA 角色</h3>
        <pre><code>&lt;!-- 地标角色 --&gt;
&lt;div role="banner"&gt;页面头部&lt;/div&gt;
&lt;div role="navigation"&gt;导航&lt;/div&gt;
&lt;div role="main"&gt;主要内容&lt;/div&gt;
&lt;div role="complementary"&gt;侧边栏&lt;/div&gt;
&lt;div role="contentinfo"&gt;页脚&lt;/div&gt;

&lt;!-- 组件角色 --&gt;
&lt;div role="button"&gt;按钮&lt;/div&gt;
&lt;div role="tab"&gt;标签页&lt;/div&gt;
&lt;div role="dialog"&gt;对话框&lt;/div&gt;
&lt;div role="alert"&gt;警告信息&lt;/div&gt;</code></pre>
      </div>

      <div class="concept-box">
        <h3>常用 ARIA 属性</h3>
        <pre><code>&lt;!-- aria-label: 为元素提供标签 --&gt;
&lt;button aria-label="关闭对话框"&gt;×&lt;/button&gt;

&lt;!-- aria-labelledby: 引用其他元素作为标签 --&gt;
&lt;div id="dialog-title"&gt;确认删除&lt;/div&gt;
&lt;div role="dialog" aria-labelledby="dialog-title"&gt;...&lt;/div&gt;

&lt;!-- aria-describedby: 提供额外描述 --&gt;
&lt;input type="password" aria-describedby="pwd-help"&gt;
&lt;span id="pwd-help"&gt;密码至少 8 个字符&lt;/span&gt;

&lt;!-- aria-hidden: 对屏幕阅读器隐藏 --&gt;
&lt;span aria-hidden="true"&gt;🎨&lt;/span&gt;

&lt;!-- aria-expanded: 展开/收起状态 --&gt;
&lt;button aria-expanded="false" aria-controls="menu"&gt;菜单&lt;/button&gt;

&lt;!-- aria-live: 动态内容更新通知 --&gt;
&lt;div aria-live="polite"&gt;加载中...&lt;/div&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>实例：可访问的下拉菜单</h3>
        <CodeEditor
          :initial-html="`<div style='max-width: 400px; margin: 20px auto;'>
  <button
    id='menuButton'
    aria-expanded='false'
    aria-haspopup='true'
    aria-controls='menu'
    onclick='toggleMenu()'
    style='padding: 12px 24px; background: #4285f4; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;'>
    菜单 ▼
  </button>

  <ul
    id='menu'
    role='menu'
    aria-labelledby='menuButton'
    hidden
    style='list-style: none; padding: 0; margin: 8px 0; background: white; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);'>
    <li role='none'>
      <a href='#' role='menuitem' style='display: block; padding: 12px 20px; color: #333; text-decoration: none;'>
        选项 1
      </a>
    </li>
    <li role='none'>
      <a href='#' role='menuitem' style='display: block; padding: 12px 20px; color: #333; text-decoration: none;'>
        选项 2
      </a>
    </li>
    <li role='none'>
      <a href='#' role='menuitem' style='display: block; padding: 12px 20px; color: #333; text-decoration: none;'>
        选项 3
      </a>
    </li>
  </ul>

  <div id='status' role='status' aria-live='polite' style='margin-top: 20px; padding: 12px; background: #e3f2fd; border-radius: 4px; min-height: 20px;'></div>
</div>`"
          :initial-css="`[role='menuitem']:hover {
  background: #f5f5f5;
}

[role='menuitem']:focus {
  outline: 2px solid #4285f4;
  outline-offset: -2px;
  background: #e3f2fd;
}`"
          :initial-js="`function toggleMenu() {
  const button = document.getElementById('menuButton');
  const menu = document.getElementById('menu');
  const status = document.getElementById('status');
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    button.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    status.textContent = '菜单已关闭';
  } else {
    button.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
    status.textContent = '菜单已打开，共 3 个选项';

    // 将焦点移到第一个菜单项
    const firstItem = menu.querySelector('[role=&quot;menuitem&quot;]');
    if (firstItem) {
      setTimeout(() => firstItem.focus(), 100);
    }
  }
}

// 键盘导航支持
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const menuItems = menu.querySelectorAll('[role=&quot;menuitem&quot;]');

  menuItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const status = document.getElementById('status');
      status.textContent = \`已选择：\${item.textContent.trim()}\`;
      toggleMenu();
    });

    // 方向键导航
    item.addEventListener('keydown', (e) => {
      let nextItem;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        nextItem = menuItems[index + 1] || menuItems[0];
        nextItem.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        nextItem = menuItems[index - 1] || menuItems[menuItems.length - 1];
        nextItem.focus();
      } else if (e.key === 'Escape') {
        toggleMenu();
        document.getElementById('menuButton').focus();
      }
    });
  });
});

// 点击外部关闭菜单
document.addEventListener('click', (e) => {
  const button = document.getElementById('menuButton');
  const menu = document.getElementById('menu');
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    if (button.getAttribute('aria-expanded') === 'true') {
      toggleMenu();
    }
  }
});`"
          :auto-run="true"
        />
      </div>

      <div class="warning-box">
        <strong>⚠️ ARIA 使用原则：</strong>
        <ul>
          <li><strong>第一原则</strong>：优先使用原生 HTML，只在必要时使用 ARIA</li>
          <li>不要改变原生语义（如 <code>&lt;button role="link"&gt;</code>）</li>
          <li>确保 ARIA 状态与实际状态同步</li>
          <li>测试屏幕阅读器以验证效果</li>
        </ul>
      </div>
    </section>

    <!-- 键盘导航 -->
    <section class="lesson-section">
      <h2>3. 键盘导航和焦点管理</h2>
      <p>许多用户依赖键盘导航，确保所有功能都可以通过键盘访问非常重要。</p>

      <div class="concept-box">
        <h3>键盘导航标准</h3>
        <ul>
          <li><strong>Tab</strong>：移动到下一个可聚焦元素</li>
          <li><strong>Shift + Tab</strong>：移动到上一个可聚焦元素</li>
          <li><strong>Enter</strong>：激活链接或按钮</li>
          <li><strong>Space</strong>：激活按钮，选中复选框</li>
          <li><strong>方向键</strong>：在单选按钮组、菜单、标签页间导航</li>
          <li><strong>Escape</strong>：关闭模态框或下拉菜单</li>
        </ul>
      </div>

      <div class="concept-box">
        <h3>焦点管理</h3>
        <pre><code>&lt;!-- tabindex 属性 --&gt;
&lt;div tabindex="0"&gt;可聚焦（按文档顺序）&lt;/div&gt;
&lt;div tabindex="-1"&gt;可通过 JS 聚焦，但 Tab 键跳过&lt;/div&gt;
&lt;div tabindex="1"&gt;不推荐：会打乱自然 Tab 顺序&lt;/div&gt;

&lt;!-- 可见的焦点样式 --&gt;
&lt;style&gt;
button:focus {
  outline: 2px solid #4285f4;
  outline-offset: 2px;
}

/* 不要移除焦点样式！ */
/* *:focus { outline: none; } ❌ */
&lt;/style&gt;

&lt;!-- 跳过导航链接 --&gt;
&lt;a href="#main" class="skip-link"&gt;跳转到主内容&lt;/a&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>实例：可访问的模态框</h3>
        <CodeEditor
          :initial-html="`<div style='text-align: center; padding: 20px;'>
  <button onclick='openModal()' style='padding: 12px 24px; background: #4285f4; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;'>
    打开模态框
  </button>
</div>

<div
  id='modal'
  role='dialog'
  aria-modal='true'
  aria-labelledby='modal-title'
  aria-describedby='modal-desc'
  hidden
  style='position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;'>

  <div style='background: white; padding: 32px; border-radius: 12px; max-width: 500px; width: 90%; box-shadow: 0 8px 32px rgba(0,0,0,0.2);'>
    <h2 id='modal-title' style='margin-top: 0;'>模态框标题</h2>
    <p id='modal-desc'>
      这是一个可访问的模态框示例。尝试使用 Tab 键导航，按 Escape 键关闭。
    </p>

    <form style='margin: 20px 0;'>
      <label for='name' style='display: block; margin-bottom: 8px;'>姓名：</label>
      <input type='text' id='name' style='width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 16px;'>

      <label for='email' style='display: block; margin-bottom: 8px;'>邮箱：</label>
      <input type='email' id='email' style='width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;'>
    </form>

    <div style='display: flex; gap: 12px; justify-content: flex-end;'>
      <button onclick='closeModal()' style='padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;'>
        取消
      </button>
      <button onclick='submitModal()' style='padding: 10px 20px; background: #4285f4; color: white; border: none; border-radius: 4px; cursor: pointer;'>
        确定
      </button>
    </div>
  </div>
</div>`"
          :initial-css="''"
          :initial-js="`let previousFocus;

function openModal() {
  const modal = document.getElementById('modal');
  previousFocus = document.activeElement;

  modal.hidden = false;

  // 将焦点移到模态框内的第一个可聚焦元素
  const firstFocusable = modal.querySelector('input, button');
  if (firstFocusable) {
    setTimeout(() => firstFocusable.focus(), 100);
  }

  // 捕获焦点在模态框内
  trapFocus(modal);
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.hidden = true;

  // 恢复之前的焦点
  if (previousFocus) {
    previousFocus.focus();
  }
}

function submitModal() {
  alert('表单已提交！');
  closeModal();
}

function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, input, textarea, select, a[href]'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    } else if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// 点击背景关闭
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target.id === 'modal') {
    closeModal();
  }
});`"
          :auto-run="true"
        />
      </div>
    </section>

    <!-- 表单可访问性 -->
    <section class="lesson-section">
      <h2>4. 表单可访问性</h2>

      <div class="concept-box">
        <h3>表单最佳实践</h3>
        <pre><code>&lt;!-- 1. 每个输入都要有 label --&gt;
&lt;label for="username"&gt;用户名：&lt;/label&gt;
&lt;input type="text" id="username" name="username"&gt;

&lt;!-- 2. 使用 fieldset 和 legend 分组 --&gt;
&lt;fieldset&gt;
  &lt;legend&gt;个人信息&lt;/legend&gt;
  &lt;!-- 表单字段 --&gt;
&lt;/fieldset&gt;

&lt;!-- 3. 提供错误提示和帮助文本 --&gt;
&lt;label for="password"&gt;密码：&lt;/label&gt;
&lt;input
  type="password"
  id="password"
  aria-describedby="pwd-help pwd-error"
  aria-invalid="true"
&gt;
&lt;span id="pwd-help"&gt;至少 8 个字符&lt;/span&gt;
&lt;span id="pwd-error" role="alert"&gt;密码太短&lt;/span&gt;

&lt;!-- 4. 必填字段标记 --&gt;
&lt;label for="email"&gt;
  邮箱
  &lt;abbr title="必填" aria-label="必填"&gt;*&lt;/abbr&gt;
&lt;/label&gt;
&lt;input type="email" id="email" required&gt;</code></pre>
      </div>

      <div class="example-box">
        <h3>实例：可访问的注册表单</h3>
        <CodeEditor
          :initial-html="`<form style='max-width: 500px; margin: 20px auto; padding: 24px; background: #f8f9fa; border-radius: 8px;'>
  <fieldset style='border: 1px solid #ddd; padding: 20px; border-radius: 4px; margin-bottom: 20px;'>
    <legend style='padding: 0 10px; font-weight: bold; color: #4285f4;'>账号信息</legend>

    <div style='margin-bottom: 16px;'>
      <label for='reg-username' style='display: block; margin-bottom: 8px; font-weight: 500;'>
        用户名 <abbr title='必填' aria-label='必填' style='color: red; text-decoration: none;'>*</abbr>
      </label>
      <input
        type='text'
        id='reg-username'
        name='username'
        required
        aria-required='true'
        aria-describedby='username-help'
        style='width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;'>
      <span id='username-help' style='font-size: 12px; color: #666;'>
        3-20 个字符，只能包含字母和数字
      </span>
    </div>

    <div style='margin-bottom: 16px;'>
      <label for='reg-email' style='display: block; margin-bottom: 8px; font-weight: 500;'>
        邮箱 <abbr title='必填' aria-label='必填' style='color: red; text-decoration: none;'>*</abbr>
      </label>
      <input
        type='email'
        id='reg-email'
        name='email'
        required
        aria-required='true'
        style='width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;'>
    </div>

    <div style='margin-bottom: 16px;'>
      <label for='reg-password' style='display: block; margin-bottom: 8px; font-weight: 500;'>
        密码 <abbr title='必填' aria-label='必填' style='color: red; text-decoration: none;'>*</abbr>
      </label>
      <input
        type='password'
        id='reg-password'
        name='password'
        required
        aria-required='true'
        aria-describedby='password-help'
        style='width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;'>
      <span id='password-help' style='font-size: 12px; color: #666;'>
        至少 8 个字符，包含字母和数字
      </span>
    </div>
  </fieldset>

  <fieldset style='border: 1px solid #ddd; padding: 20px; border-radius: 4px; margin-bottom: 20px;'>
    <legend style='padding: 0 10px; font-weight: bold; color: #4285f4;'>通知偏好</legend>

    <div style='margin-bottom: 12px;'>
      <input type='checkbox' id='notify-email' name='notify-email' style='margin-right: 8px;'>
      <label for='notify-email'>接收邮件通知</label>
    </div>

    <div>
      <input type='checkbox' id='notify-sms' name='notify-sms' style='margin-right: 8px;'>
      <label for='notify-sms'>接收短信通知</label>
    </div>
  </fieldset>

  <div role='group' aria-labelledby='terms-label' style='margin-bottom: 20px;'>
    <input type='checkbox' id='terms' name='terms' required aria-required='true' style='margin-right: 8px;'>
    <label for='terms' id='terms-label'>
      我同意 <a href='#' style='color: #4285f4;'>服务条款</a> 和 <a href='#' style='color: #4285f4;'>隐私政策</a>
      <abbr title='必填' aria-label='必填' style='color: red; text-decoration: none;'>*</abbr>
    </label>
  </div>

  <div style='display: flex; gap: 12px;'>
    <button type='submit' style='flex: 1; padding: 12px; background: #4285f4; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;'>
      注册
    </button>
    <button type='reset' style='flex: 1; padding: 12px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;'>
      重置
    </button>
  </div>

  <div id='form-status' role='status' aria-live='polite' style='margin-top: 16px; padding: 12px; background: #e3f2fd; border-radius: 4px; min-height: 20px; display: none;'></div>
</form>`"
          :initial-css="`input:focus, button:focus {
  outline: 2px solid #4285f4;
  outline-offset: 2px;
}

input:invalid:not(:focus) {
  border-color: #dc3545;
}

input:valid:not(:placeholder-shown) {
  border-color: #28a745;
}`"
          :initial-js="`document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const status = document.getElementById('form-status');
  const username = document.getElementById('reg-username').value;

  status.style.display = 'block';
  status.style.background = '#d4edda';
  status.style.color = '#155724';
  status.textContent = \`✅ 注册成功！欢迎，\${username}！\`;

  // 3 秒后隐藏状态消息
  setTimeout(() => {
    status.style.display = 'none';
  }, 3000);
});`"
          :auto-run="true"
        />
      </div>
    </section>

    <!-- 图片和多媒体 -->
    <section class="lesson-section">
      <h2>5. 图片和多媒体可访问性</h2>

      <div class="concept-box">
        <h3>图片 alt 文本指南</h3>
        <pre><code>&lt;!-- 信息性图片：描述图片内容 --&gt;
&lt;img src="chart.png" alt="2024年销售额增长趋势图"&gt;

&lt;!-- 功能性图片：描述图片功能 --&gt;
&lt;img src="search.png" alt="搜索"&gt;

&lt;!-- 装饰性图片：使用空 alt --&gt;
&lt;img src="decoration.png" alt=""&gt;

&lt;!-- 复杂图片：提供详细描述 --&gt;
&lt;img src="complex-chart.png"
     alt="销售数据图表"
     aria-describedby="chart-desc"&gt;
&lt;div id="chart-desc"&gt;
  详细描述：2024年第一季度销售额为...
&lt;/div&gt;</code></pre>
      </div>

      <div class="concept-box">
        <h3>视频和音频</h3>
        <pre><code>&lt;!-- 视频字幕 --&gt;
&lt;video controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;track kind="captions" src="captions-zh.vtt" srclang="zh" label="中文"&gt;
  &lt;track kind="captions" src="captions-en.vtt" srclang="en" label="English"&gt;
&lt;/video&gt;

&lt;!-- 音频转录本 --&gt;
&lt;audio controls&gt;
  &lt;source src="podcast.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;
&lt;details&gt;
  &lt;summary&gt;查看转录本&lt;/summary&gt;
  &lt;p&gt;音频内容的文字版本...&lt;/p&gt;
&lt;/details&gt;</code></pre>
      </div>
    </section>

    <!-- 测试工具 -->
    <section class="lesson-section">
      <h2>6. 可访问性测试</h2>

      <div class="tools-grid">
        <div class="tool-card">
          <div class="tool-icon">🔍</div>
          <h3>axe DevTools</h3>
          <p>浏览器扩展，自动检测可访问性问题</p>
        </div>

        <div class="tool-card">
          <div class="tool-icon">⚡</div>
          <h3>Lighthouse</h3>
          <p>Chrome 内置，可访问性审计</p>
        </div>

        <div class="tool-card">
          <div class="tool-icon">📱</div>
          <h3>屏幕阅读器</h3>
          <p>NVDA (Windows)、VoiceOver (Mac)、TalkBack (Android)</p>
        </div>

        <div class="tool-card">
          <div class="tool-icon">⌨️</div>
          <h3>键盘测试</h3>
          <p>断开鼠标，只用键盘测试所有功能</p>
        </div>

        <div class="tool-card">
          <div class="tool-icon">🎨</div>
          <h3>色彩对比检查</h3>
          <p>确保文字和背景对比度达到 WCAG AA 标准（4.5:1）</p>
        </div>

        <div class="tool-card">
          <div class="tool-icon">✅</div>
          <h3>WAVE</h3>
          <p>Web 可访问性评估工具</p>
          <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">
            wave.webaim.org →
          </a>
        </div>
      </div>

      <div class="tip-box">
        <strong>💡 测试清单：</strong>
        <ul>
          <li>✅ 所有功能可通过键盘访问</li>
          <li>✅ 焦点样式清晰可见</li>
          <li>✅ 所有图片有合适的 alt 文本</li>
          <li>✅ 表单标签和输入正确关联</li>
          <li>✅ 颜色不是传达信息的唯一方式</li>
          <li>✅ 文字和背景对比度足够</li>
          <li>✅ 标题层级正确</li>
          <li>✅ 链接文本有意义（不只是"点击这里"）</li>
          <li>✅ 使用屏幕阅读器测试</li>
        </ul>
      </div>
    </section>

    <!-- 课程总结 -->
    <section class="lesson-section summary-section">
      <h2>课程总结</h2>

      <div class="summary-grid">
        <div class="summary-item">
          <div class="summary-icon">🏗️</div>
          <h3>语义化 HTML</h3>
          <p>使用正确的标签，让内容结构清晰</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🎯</div>
          <h3>ARIA</h3>
          <p>增强语义，但不要过度使用</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">⌨️</div>
          <h3>键盘导航</h3>
          <p>确保所有功能键盘可访问</p>
        </div>
        <div class="summary-item">
          <div class="summary-icon">🔍</div>
          <h3>测试</h3>
          <p>使用工具和真实用户测试</p>
        </div>
      </div>

      <div class="key-points">
        <h3>关键要点</h3>
        <ul>
          <li>可访问性是人权，不是可选功能</li>
          <li>语义化 HTML 是可访问性的基础</li>
          <li>ARIA 是补充，不是替代</li>
          <li>键盘导航和焦点管理至关重要</li>
          <li>所有图片需要合适的 alt 文本</li>
          <li>表单标签和错误提示要清晰</li>
          <li>定期测试，包括使用屏幕阅读器</li>
          <li>可访问性让每个人受益</li>
        </ul>
      </div>
    </section>

    <!-- 练习题 -->
    <section class="lesson-section practice-section">
      <h2>实践练习</h2>
      <div class="practice-list">
        <div class="practice-item">
          <h3>练习 1：键盘导航测试</h3>
          <p>断开鼠标，只用键盘浏览一个网站，记录遇到的问题并提出改进方案。</p>
        </div>
        <div class="practice-item">
          <h3>练习 2：可访问的组件</h3>
          <p>创建一个可访问的标签页组件，支持键盘导航和屏幕阅读器。</p>
        </div>
        <div class="practice-item">
          <h3>练习 3：审计和修复</h3>
          <p>使用 Lighthouse 或 axe DevTools 审计一个网站，修复发现的可访问性问题。</p>
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

.lesson-section h4 {
  margin: 12px 0 8px 0;
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

.info-box {
  background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-box strong {
  color: white;
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
}

.info-box ul {
  margin: 12px 0 0 0;
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

.concept-box ul {
  margin: 12px 0 0 0;
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

.comparison-box {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  border: 2px solid #e9ecef;
}

.comparison-box h3 {
  color: var(--primary-blue);
  margin-top: 0;
  margin-bottom: 24px;
}

.compare-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.good {
  background: #d4edda;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.bad {
  background: #f8d7da;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #dc3545;
}

.good h4 {
  color: #155724;
  margin-top: 0;
}

.bad h4 {
  color: #721c24;
  margin-top: 0;
}

.explanation {
  font-size: 13px;
  font-style: italic;
  margin-top: 8px;
  opacity: 0.9;
}

.good pre,
.bad pre {
  background: rgba(255, 255, 255, 0.7);
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 8px 0;
}

.good code {
  color: #155724;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.bad code {
  color: #721c24;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
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

.tip-box ul {
  margin: 12px 0 0 0;
}

.warning-box {
  background: #fff3e0;
  padding: 16px 20px;
  border-radius: 8px;
  margin: 24px 0;
  border-left: 4px solid #ff9800;
}

.warning-box strong {
  color: #f57c00;
}

.warning-box ul {
  margin: 12px 0 0 0;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.tool-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  text-align: center;
  transition: all 0.3s;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-blue);
}

.tool-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.tool-card h3 {
  margin: 12px 0;
  color: var(--primary-blue);
}

.tool-card p {
  color: var(--text-secondary);
  font-size: 14px;
  margin: 8px 0;
}

.tool-card a {
  display: inline-block;
  margin-top: 12px;
  color: var(--primary-blue);
  text-decoration: none;
  font-weight: 500;
}

.tool-card a:hover {
  text-decoration: underline;
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
  margin: 0;
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

@media (max-width: 768px) {
  .compare-item {
    grid-template-columns: 1fr;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
