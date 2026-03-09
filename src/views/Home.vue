<template>
  <div class="container fade-in">
    <h1 class="page-title">欢迎来到前端学习平台</h1>
    <p class="page-subtitle">
      系统学习 Vue3、JavaScript、HTML、CSS 等前端技术，通过互动示例快速掌握核心知识
    </p>

    <section class="section">
      <h2 class="section-title">🎯 学习特色</h2>
      <div class="grid-2">
        <div class="card" style="background: var(--info-bg); border-color: var(--primary-blue);">
          <div class="card-header" style="border-bottom-color: var(--primary-blue);">
            <span style="font-size: 32px;">💡</span>
          </div>
          <h3 class="card-title">互动式学习</h3>
          <ul style="margin-top: 12px; padding-left: 20px; line-height: 2;">
            <li>在线代码编辑器</li>
            <li>即时运行效果预览</li>
            <li>循序渐进的教程</li>
            <li>实战项目案例</li>
          </ul>
        </div>

        <div class="card" style="background: var(--success-bg); border-color: var(--success-green);">
          <div class="card-header" style="border-bottom-color: var(--success-green);">
            <span style="font-size: 32px;">📚</span>
          </div>
          <h3 class="card-title">系统化课程</h3>
          <ul style="margin-top: 12px; padding-left: 20px; line-height: 2;">
            <li>73课完整体系</li>
            <li>从基础到进阶</li>
            <li>丰富交互组件</li>
            <li>真实项目实战</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">🔥 从这里开始</h2>
      <div class="lesson-list">
        <router-link to="/lessons/html/lesson-1" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">📄</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第1课：认识 HTML</h4>
                <p class="text-secondary" style="font-size: 13px;">从零开始，学习 HTML 的基础概念和文档结构 <span class="badge badge-success" style="margin-left: 8px;">推荐</span></p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/html/lesson-2" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">📝</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第2课：基础标签</h4>
                <p class="text-secondary" style="font-size: 13px;">掌握 HTML 中最常用的标题、段落、链接等标签</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">💚 Vue3 系统课程</h2>
      <p class="text-secondary" style="margin-bottom: 16px;">完整的 Vue3 学习路径，从基础到进阶</p>
      <div class="lesson-list">
        <router-link to="/lessons/vue3/lesson-1" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">💚</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第54课：Vue3 简介</h4>
                <p class="text-secondary" style="font-size: 13px;">了解 Vue3 的特性、优势和基本概念</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-2" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🎯</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第55课：模板语法</h4>
                <p class="text-secondary" style="font-size: 13px;">掌握 Vue3 的模板语法、插值和指令</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-3" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">⚡</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第56课：计算属性与侦听器</h4>
                <p class="text-secondary" style="font-size: 13px;">学习 computed 和 watch 的使用和区别</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-4" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🔀</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第57课：条件渲染</h4>
                <p class="text-secondary" style="font-size: 13px;">掌握 v-if、v-else-if、v-else 和 v-show 的使用</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-5" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🔄</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第58课：列表渲染</h4>
                <p class="text-secondary" style="font-size: 13px;">学习 v-for 指令和 key 属性的重要性 <span class="badge badge-success" style="margin-left: 8px;">新课</span></p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-6" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">📝</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第59课：表单绑定</h4>
                <p class="text-secondary" style="font-size: 13px;">深入学习 v-model 双向绑定和表单处理</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-7" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">⚡</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第60课：事件处理</h4>
                <p class="text-secondary" style="font-size: 13px;">掌握事件绑定、事件修饰符和按键修饰符 <span class="badge badge-success" style="margin-left: 8px;">新课</span></p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-8" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🧩</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第61课：组件基础</h4>
                <p class="text-secondary" style="font-size: 13px;">学习组件化开发，掌握 Props 和 Emits 通信</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-9" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🎰</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第62课：插槽</h4>
                <p class="text-secondary" style="font-size: 13px;">深入学习插槽的使用，包括默认插槽、具名插槽和作用域插槽 <span class="badge badge-success" style="margin-left: 8px;">新课</span></p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-10" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🔄</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第63课：生命周期</h4>
                <p class="text-secondary" style="font-size: 13px;">理解组件生命周期，掌握各个生命周期钩子的使用场景</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-11" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🔗</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第64课：状态管理基础</h4>
                <p class="text-secondary" style="font-size: 13px;">学习 provide/inject 进行跨组件状态管理，实现响应式数据共享</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-12" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🛣️</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第65课：Vue Router 基础</h4>
                <p class="text-secondary" style="font-size: 13px;">学习路由系统，掌握单页应用的路由管理和页面导航</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/composition-api" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">💡</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">组合式 API (Composition API)</h4>
                <p class="text-secondary" style="font-size: 13px;">深入理解 Vue3 的 Composition API，掌握现代化的组件开发方式 <span class="badge badge-success" style="margin-left: 8px;">重点</span></p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-14" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🔄</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第66课：动态组件</h4>
                <p class="text-secondary" style="font-size: 13px;">学习动态组件的使用，掌握组件缓存和异步加载技术</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-15" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">✨</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第67课：过渡与动画</h4>
                <p class="text-secondary" style="font-size: 13px;">掌握 Vue3 的过渡系统，实现流畅的动画效果和页面切换</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-16" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🎯</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第68课：自定义指令</h4>
                <p class="text-secondary" style="font-size: 13px;">学习自定义指令开发，封装可复用的 DOM 操作逻辑</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-17" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">⚡</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第69课：性能优化技巧</h4>
                <p class="text-secondary" style="font-size: 13px;">掌握 Vue3 性能优化技术，包括虚拟滚动、懒加载和响应式优化</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-18" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🎯</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第70课：Teleport 与 Suspense</h4>
                <p class="text-secondary" style="font-size: 13px;">掌握传送门和异步组件处理，实现灵活的组件渲染</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-19" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🔍</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第71课：响应式原理深入</h4>
                <p class="text-secondary" style="font-size: 13px;">深入理解 Vue3 响应式系统，掌握 Proxy、Reflect 和依赖收集机制</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-20" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🧩</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第72课：组合式函数</h4>
                <p class="text-secondary" style="font-size: 13px;">掌握 Composables 设计模式，学会抽取和复用组件逻辑</p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>

        <router-link to="/lessons/vue3/lesson-21" class="card-interactive">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-md">
              <span style="font-size: 24px;">🛒</span>
              <div>
                <h4 style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">第73课：购物车应用 - 综合实战</h4>
                <p class="text-secondary" style="font-size: 13px;">整合所有 Vue3 知识点，构建完整购物车系统 <span class="badge badge-success" style="margin-left: 8px;">完结</span></p>
              </div>
            </div>
            <span style="font-size: 20px;">→</span>
          </div>
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
// 首页组件
</script>
