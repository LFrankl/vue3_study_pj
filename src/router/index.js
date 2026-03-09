import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// HTML 课程
import HTMLLesson1 from '../views/lessons/HTMLLesson1.vue'
import HTMLLesson2 from '../views/lessons/HTMLLesson2.vue'
import HTMLLesson3 from '../views/lessons/HTMLLesson3.vue'
import HTMLLesson4 from '../views/lessons/HTMLLesson4.vue'
import HTMLLesson5 from '../views/lessons/HTMLLesson5.vue'
import HTMLLesson6 from '../views/lessons/HTMLLesson6.vue'
import HTMLLesson7 from '../views/lessons/HTMLLesson7.vue'
import HTMLLesson8 from '../views/lessons/HTMLLesson8.vue'
import HTMLLesson9 from '../views/lessons/HTMLLesson9.vue'
import HTMLLesson10 from '../views/lessons/HTMLLesson10.vue'
import HTMLLesson11 from '../views/lessons/HTMLLesson11.vue'
import HTMLLesson12 from '../views/lessons/HTMLLesson12.vue'

// Vue3 系统课程
import Vue3Lesson1 from '../views/lessons/Vue3Lesson1.vue'
import Vue3Lesson2 from '../views/lessons/Vue3Lesson2.vue'
import Vue3Lesson3 from '../views/lessons/Vue3Lesson3.vue'
import Vue3Lesson4 from '../views/lessons/Vue3Lesson4.vue'
import Vue3Lesson5 from '../views/lessons/Vue3Lesson5.vue'
import Vue3Lesson6 from '../views/lessons/Vue3Lesson6.vue'
import Vue3Lesson7 from '../views/lessons/Vue3Lesson7.vue'
import Vue3Lesson8 from '../views/lessons/Vue3Lesson8.vue'
import Vue3Lesson9 from '../views/lessons/Vue3Lesson9.vue'
import Vue3Lesson10 from '../views/lessons/Vue3Lesson10.vue'
import Vue3Lesson11 from '../views/lessons/Vue3Lesson11.vue'
import Vue3Lesson12 from '../views/lessons/Vue3Lesson12.vue'
import Vue3Lesson13 from '../views/lessons/Vue3Lesson13.vue'
import Vue3Lesson14 from '../views/lessons/Vue3Lesson14.vue'
import Vue3Lesson15 from '../views/lessons/Vue3Lesson15.vue'
import Vue3Lesson16 from '../views/lessons/Vue3Lesson16.vue'
import Vue3Lesson17 from '../views/lessons/Vue3Lesson17.vue'
import Vue3Lesson18 from '../views/lessons/Vue3Lesson18.vue'
import Vue3Lesson19 from '../views/lessons/Vue3Lesson19.vue'
import Vue3Lesson20 from '../views/lessons/Vue3Lesson20.vue'
import Vue3Lesson21 from '../views/lessons/Vue3Lesson21.vue'

// 测试页面
import TestInteractive from '../views/TestInteractive.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' }
  },

  // 测试页面
  {
    path: '/test',
    name: 'TestInteractive',
    component: TestInteractive,
    meta: { title: '交互功能测试' }
  },

  // HTML 课程路由
  {
    path: '/lessons/html/lesson-1',
    name: 'HTMLLesson1',
    component: HTMLLesson1,
    meta: { title: '第1课：认识 HTML' }
  },
  {
    path: '/lessons/html/lesson-2',
    name: 'HTMLLesson2',
    component: HTMLLesson2,
    meta: { title: '第2课：基础标签' }
  },
  {
    path: '/lessons/html/lesson-3',
    name: 'HTMLLesson3',
    component: HTMLLesson3,
    meta: { title: '第3课：列表与表格' }
  },
  {
    path: '/lessons/html/lesson-4',
    name: 'HTMLLesson4',
    component: HTMLLesson4,
    meta: { title: '第4课：图片与多媒体' }
  },
  {
    path: '/lessons/html/lesson-5',
    name: 'HTMLLesson5',
    component: HTMLLesson5,
    meta: { title: '第5课：表单基础' }
  },
  {
    path: '/lessons/html/lesson-6',
    name: 'HTMLLesson6',
    component: HTMLLesson6,
    meta: { title: '第6课：表单进阶' }
  },
  {
    path: '/lessons/html/lesson-7',
    name: 'HTMLLesson7',
    component: HTMLLesson7,
    meta: { title: '第7课：语义化标签' }
  },
  {
    path: '/lessons/html/lesson-8',
    name: 'HTMLLesson8',
    component: HTMLLesson8,
    meta: { title: '第8课：HTML5 新特性' }
  },
  {
    path: '/lessons/html/lesson-9',
    name: 'HTMLLesson9',
    component: HTMLLesson9,
    meta: { title: '第9课：HTML 最佳实践' }
  },
  {
    path: '/lessons/html/lesson-10',
    name: 'HTMLLesson10',
    component: HTMLLesson10,
    meta: { title: '第10课：可访问性' }
  },
  {
    path: '/lessons/html/lesson-11',
    name: 'HTMLLesson11',
    component: HTMLLesson11,
    meta: { title: '第11课：SEO 优化' }
  },
  {
    path: '/lessons/html/lesson-12',
    name: 'HTMLLesson12',
    component: HTMLLesson12,
    meta: { title: '第12课：HTML 综合项目' }
  },

  // Vue3 系统课程路由
  {
    path: '/lessons/vue3/lesson-1',
    name: 'Vue3Lesson1',
    component: Vue3Lesson1,
    meta: { title: '第54课：Vue3 简介' }
  },
  {
    path: '/lessons/vue3/lesson-2',
    name: 'Vue3Lesson2',
    component: Vue3Lesson2,
    meta: { title: '第55课：模板语法' }
  },
  {
    path: '/lessons/vue3/lesson-3',
    name: 'Vue3Lesson3',
    component: Vue3Lesson3,
    meta: { title: '第56课：计算属性与侦听器' }
  },
  {
    path: '/lessons/vue3/lesson-4',
    name: 'Vue3Lesson4',
    component: Vue3Lesson4,
    meta: { title: '第57课：条件渲染' }
  },
  {
    path: '/lessons/vue3/lesson-5',
    name: 'Vue3Lesson5',
    component: Vue3Lesson5,
    meta: { title: '第58课：列表渲染' }
  },
  {
    path: '/lessons/vue3/lesson-6',
    name: 'Vue3Lesson6',
    component: Vue3Lesson6,
    meta: { title: '第59课：表单绑定' }
  },
  {
    path: '/lessons/vue3/lesson-7',
    name: 'Vue3Lesson7',
    component: Vue3Lesson7,
    meta: { title: '第60课：事件处理' }
  },
  {
    path: '/lessons/vue3/lesson-8',
    name: 'Vue3Lesson8',
    component: Vue3Lesson8,
    meta: { title: '第61课：组件基础' }
  },
  {
    path: '/lessons/vue3/lesson-9',
    name: 'Vue3Lesson9',
    component: Vue3Lesson9,
    meta: { title: '第62课：插槽' }
  },
  {
    path: '/lessons/vue3/lesson-10',
    name: 'Vue3Lesson10',
    component: Vue3Lesson10,
    meta: { title: '第63课：生命周期' }
  },
  {
    path: '/lessons/vue3/lesson-11',
    name: 'Vue3Lesson11',
    component: Vue3Lesson11,
    meta: { title: '第64课：状态管理基础' }
  },
  {
    path: '/lessons/vue3/lesson-12',
    name: 'Vue3Lesson12',
    component: Vue3Lesson12,
    meta: { title: '第65课：Vue Router 基础' }
  },
  {
    path: '/lessons/vue3/composition-api',
    name: 'Vue3Lesson13',
    component: Vue3Lesson13,
    meta: { title: '组合式 API (Composition API)' }
  },
  {
    path: '/lessons/vue3/lesson-14',
    name: 'Vue3Lesson14',
    component: Vue3Lesson14,
    meta: { title: '第66课：动态组件' }
  },
  {
    path: '/lessons/vue3/lesson-15',
    name: 'Vue3Lesson15',
    component: Vue3Lesson15,
    meta: { title: '第67课：过渡与动画' }
  },
  {
    path: '/lessons/vue3/lesson-16',
    name: 'Vue3Lesson16',
    component: Vue3Lesson16,
    meta: { title: '第68课：自定义指令' }
  },
  {
    path: '/lessons/vue3/lesson-17',
    name: 'Vue3Lesson17',
    component: Vue3Lesson17,
    meta: { title: '第69课：性能优化技巧' }
  },
  {
    path: '/lessons/vue3/lesson-18',
    name: 'Vue3Lesson18',
    component: Vue3Lesson18,
    meta: { title: '第70课：Teleport 与 Suspense' }
  },
  {
    path: '/lessons/vue3/lesson-19',
    name: 'Vue3Lesson19',
    component: Vue3Lesson19,
    meta: { title: '第71课：响应式原理深入' }
  },
  {
    path: '/lessons/vue3/lesson-20',
    name: 'Vue3Lesson20',
    component: Vue3Lesson20,
    meta: { title: '第72课：组合式函数' }
  },
  {
    path: '/lessons/vue3/lesson-21',
    name: 'Vue3Lesson21',
    component: Vue3Lesson21,
    meta: { title: '第73课：购物车应用' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
