// 课程数据结构
export const curriculum = {
  // HTML 部分
  html: {
    title: 'HTML 基础与进阶',
    icon: '📄',
    color: '#e34c26',
    modules: [
      {
        id: 'html-module-1',
        title: 'HTML 入门',
        lessons: [
          {
            id: 'lesson-1',
            number: 1,
            title: '认识 HTML',
            path: '/lessons/html/lesson-1',
            duration: '15分钟',
            topics: ['什么是 HTML', 'HTML 的作用', 'HTML 文档结构', '第一个网页'],
            completed: false
          },
          {
            id: 'lesson-2',
            number: 2,
            title: '基础标签',
            path: '/lessons/html/lesson-2',
            duration: '20分钟',
            topics: ['标题标签', '段落与换行', '文本格式化', '链接标签'],
            completed: false
          },
          {
            id: 'lesson-3',
            number: 3,
            title: '列表与表格',
            path: '/lessons/html/lesson-3',
            duration: '20分钟',
            topics: ['无序列表', '有序列表', '定义列表', '表格结构'],
            completed: false
          },
          {
            id: 'lesson-4',
            number: 4,
            title: '图片与多媒体',
            path: '/lessons/html/lesson-4',
            duration: '20分钟',
            topics: ['图片标签', '音频标签', '视频标签', 'iframe 嵌入'],
            completed: false
          }
        ]
      },
      {
        id: 'html-module-2',
        title: 'HTML 表单',
        lessons: [
          {
            id: 'lesson-5',
            number: 5,
            title: '表单基础',
            path: '/lessons/html/lesson-5',
            duration: '25分钟',
            topics: ['表单结构', '输入框', 'label 标签', '按钮'],
            completed: false
          },
          {
            id: 'lesson-6',
            number: 6,
            title: '高级表单控件',
            path: '/lessons/html/lesson-6',
            duration: '25分钟',
            topics: ['单选框', '复选框', '下拉选择', '文本域'],
            completed: false
          },
          {
            id: 'lesson-7',
            number: 7,
            title: 'HTML5 新表单特性',
            path: '/lessons/html/lesson-7',
            duration: '25分钟',
            topics: ['日期选择', '颜色选择', '范围滑块', '表单验证'],
            completed: false
          }
        ]
      }
    ]
  },

  // CSS 部分
  css: {
    title: 'CSS 基础与进阶',
    icon: '🎨',
    color: '#264de4',
    modules: [
      {
        id: 'css-module-1',
        title: 'CSS 入门',
        lessons: [
          {
            id: 'lesson-13',
            number: 13,
            title: 'CSS 基础',
            path: '/lessons/css/lesson-13',
            duration: '20分钟',
            topics: ['CSS 简介', '引入方式', '选择器基础'],
            completed: false
          }
          // 更多课程...
        ]
      }
    ]
  },

  // JavaScript 部分
  javascript: {
    title: 'JavaScript 编程',
    icon: '⚡',
    color: '#f7df1e',
    modules: [
      {
        id: 'js-module-1',
        title: 'JavaScript 入门',
        lessons: [
          {
            id: 'lesson-29',
            number: 29,
            title: 'JavaScript 简介',
            path: '/lessons/javascript/lesson-29',
            duration: '20分钟',
            topics: ['JS 简介', 'JS 作用', '使用方式'],
            completed: false
          }
          // 更多课程...
        ]
      }
    ]
  },

  // Vue3 部分
  vue: {
    title: 'Vue3 框架',
    icon: '💚',
    color: '#42b883',
    modules: [
      {
        id: 'vue-module-1',
        title: 'Vue3 入门',
        lessons: [
          {
            id: 'lesson-54',
            number: 54,
            title: 'Vue3 简介',
            path: '/lessons/vue/lesson-54',
            duration: '20分钟',
            topics: ['Vue3 介绍', '创建应用', '响应式演示'],
            completed: false
          }
          // 更多课程...
        ]
      }
    ]
  }
}

// 获取所有课程列表（扁平化）
export function getAllLessons() {
  const lessons = []
  Object.values(curriculum).forEach(section => {
    section.modules.forEach(module => {
      module.lessons.forEach(lesson => {
        lessons.push({
          ...lesson,
          sectionTitle: section.title,
          sectionIcon: section.icon,
          moduleTitle: module.title
        })
      })
    })
  })
  return lessons.sort((a, b) => a.number - b.number)
}

// 根据课程ID获取课程信息
export function getLessonById(id) {
  const allLessons = getAllLessons()
  return allLessons.find(lesson => lesson.id === id)
}

// 获取下一课
export function getNextLesson(currentId) {
  const allLessons = getAllLessons()
  const currentIndex = allLessons.findIndex(lesson => lesson.id === currentId)
  return currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null
}

// 获取上一课
export function getPrevLesson(currentId) {
  const allLessons = getAllLessons()
  const currentIndex = allLessons.findIndex(lesson => lesson.id === currentId)
  return currentIndex > 0 ? allLessons[currentIndex - 1] : null
}

// 计算学习进度
export function calculateProgress() {
  const allLessons = getAllLessons()
  const completed = allLessons.filter(lesson => lesson.completed).length
  return {
    total: allLessons.length,
    completed,
    percentage: Math.round((completed / allLessons.length) * 100)
  }
}
