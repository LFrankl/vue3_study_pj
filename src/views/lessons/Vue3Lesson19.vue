<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>第71课：响应式原理深入</h1>
      <p class="lesson-subtitle">深入理解 Vue3 响应式系统的底层原理，掌握 Proxy、Reflect 和依赖收集机制</p>
      <div class="lesson-meta">
        <span class="duration">⏱️ 预计 60 分钟</span>
        <span class="difficulty">📊 难度：高级</span>
      </div>
    </div>

    <div class="lesson-content">

      <!-- 第一部分：响应式系统概述 -->
      <section class="content-section">
        <h2>1️⃣ Vue3 响应式系统概述</h2>
        <p>Vue3 使用 Proxy 重写了响应式系统，相比 Vue2 的 Object.defineProperty，Proxy 提供了更强大的拦截能力和更好的性能。</p>

        <div class="info-box">
          <h3>💡 Vue2 vs Vue3 响应式对比</h3>
          <ul>
            <li><strong>Vue2 (Object.defineProperty)：</strong>只能监听对象属性的读取和修改，无法监听属性的新增和删除</li>
            <li><strong>Vue3 (Proxy)：</strong>可以监听整个对象，包括属性的新增、删除、遍历等所有操作</li>
            <li><strong>性能提升：</strong>Proxy 是语言层面的支持，性能比 Object.defineProperty 更好</li>
            <li><strong>数组优化：</strong>可以直接监听数组索引和 length 的变化，无需特殊处理</li>
          </ul>
        </div>

        <div class="demo-box">
          <h3>🎯 对比：Vue2 vs Vue3 响应式实现</h3>
          <div class="demo-content">
            <div class="comparison-grid">
              <div class="comparison-item">
                <h4>Vue2 响应式</h4>
                <pre v-pre><code>// 遍历对象所有属性
Object.keys(obj).forEach(key => {
  Object.defineProperty(obj, key, {
    get() {
      // 依赖收集
      return value
    },
    set(newValue) {
      // 触发更新
      value = newValue
    }
  })
})</code></pre>
                <p class="comparison-note">❌ 无法监听新增属性和数组索引</p>
              </div>

              <div class="comparison-item highlight">
                <h4>Vue3 响应式</h4>
                <pre v-pre><code>// 代理整个对象
const proxy = new Proxy(obj, {
  get(target, key) {
    // 依赖收集
    track(target, key)
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    // 触发更新
    Reflect.set(target, key, value)
    trigger(target, key)
  }
})</code></pre>
                <p class="comparison-note">✅ 完整的对象监听，性能更好</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 第二部分：Proxy 基础 -->
      <section class="content-section">
        <h2>2️⃣ Proxy 代理基础</h2>
        <p>Proxy 是 ES6 引入的新特性，可以创建一个对象的代理，从而拦截并自定义对象的基本操作。</p>

        <div class="demo-box">
          <h4>🎯 Proxy 基础演示</h4>

          <div style="margin-top: 16px;">
            <div class="input-group">
              <label>设置属性值：</label>
              <input v-model="proxyDemoKey" placeholder="属性名" style="margin-right: 8px;">
              <input v-model="proxyDemoValue" placeholder="属性值" style="margin-right: 8px;">
              <button @click="setProxyProperty" class="btn-primary">设置属性</button>
            </div>

            <div class="input-group" style="margin-top: 12px;">
              <label>获取属性值：</label>
              <input v-model="getProxyKey" placeholder="属性名" style="margin-right: 8px;">
              <button @click="getProxyProperty" class="btn-primary">获取属性</button>
            </div>
          </div>

          <div class="result-box" style="margin-top: 20px;">
            <h5>代理对象当前状态：</h5>
            <pre>{{ JSON.stringify(proxyTarget, null, 2) }}</pre>
          </div>

          <div class="log-box" style="margin-top: 16px;">
            <h5>操作日志：</h5>
            <div class="log-item" v-for="(log, index) in proxyLogs" :key="index">
              <span class="log-type" :class="log.type">{{ log.type.toUpperCase() }}</span>
              <span>{{ log.message }}</span>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>Proxy 基础用法</span>
          </div>
          <pre><code>const obj = { name: '张三', age: 25 }

const proxy = new Proxy(obj, {
  // 拦截属性读取
  get(target, key, receiver) {
    console.log(\`读取属性: \${key}\`)
    return Reflect.get(target, key, receiver)
  },

  // 拦截属性设置
  set(target, key, value, receiver) {
    console.log(\`设置属性: \${key} = \${value}\`)
    return Reflect.set(target, key, value, receiver)
  },

  // 拦截属性删除
  deleteProperty(target, key) {
    console.log(\`删除属性: \${key}\`)
    return Reflect.deleteProperty(target, key)
  },

  // 拦截 in 操作符
  has(target, key) {
    console.log(\`检查属性: \${key}\`)
    return Reflect.has(target, key)
  }
})

proxy.name           // 输出: 读取属性: name
proxy.age = 26       // 输出: 设置属性: age = 26
delete proxy.age     // 输出: 删除属性: age
'name' in proxy      // 输出: 检查属性: name</code></pre>
        </div>

        <div class="info-box" style="margin-top: 24px;">
          <h3>Proxy 常用拦截器</h3>
          <ul>
            <li><strong>get：</strong>拦截属性读取</li>
            <li><strong>set：</strong>拦截属性设置</li>
            <li><strong>has：</strong>拦截 in 操作</li>
            <li><strong>deleteProperty：</strong>拦截属性删除</li>
            <li><strong>ownKeys：</strong>拦截对象遍历</li>
          </ul>
        </div>

        <div class="info-box">
          <h3>Reflect 的作用</h3>
          <ul>
            <li><strong>规范化操作：</strong>将对象操作转为函数行为</li>
            <li><strong>返回值合理：</strong>返回布尔值表示操作是否成功</li>
            <li><strong>配合 Proxy：</strong>与 Proxy 拦截器完美搭配</li>
            <li><strong>正确 this：</strong>保证 receiver 参数正确传递</li>
          </ul>
        </div>
      </section>

      <!-- 第三部分：依赖收集 -->
      <section class="content-section">
        <h2>3️⃣ 依赖收集机制</h2>
        <p>响应式系统的核心是依赖收集：当数据被读取时，记录谁在使用这个数据；当数据变化时，通知所有使用者更新。</p>

        <div class="info-box">
          <h3>📊 依赖收集流程</h3>
          <div style="padding: 20px; background: white; border-radius: 8px; margin-top: 16px;">
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="padding: 16px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; text-align: center;">
                <strong style="font-size: 16px;">1. 组件渲染</strong>
                <div style="margin-top: 4px; opacity: 0.9;">读取响应式数据</div>
              </div>
              <div style="text-align: center; font-size: 24px; color: var(--primary-blue);">↓</div>
              <div style="padding: 16px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 8px; text-align: center;">
                <strong style="font-size: 16px;">2. 触发 get</strong>
                <div style="margin-top: 4px; opacity: 0.9;">Proxy 拦截读取操作</div>
              </div>
              <div style="text-align: center; font-size: 24px; color: var(--primary-blue);">↓</div>
              <div style="padding: 16px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; border-radius: 8px; text-align: center;">
                <strong style="font-size: 16px;">3. track 收集</strong>
                <div style="margin-top: 4px; opacity: 0.9;">记录当前组件依赖</div>
              </div>
              <div style="text-align: center; font-size: 24px; color: var(--primary-blue);">↓</div>
              <div style="padding: 16px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; border-radius: 8px; text-align: center;">
                <strong style="font-size: 16px;">4. 数据变化</strong>
                <div style="margin-top: 4px; opacity: 0.9;">触发 set 拦截器</div>
              </div>
              <div style="text-align: center; font-size: 24px; color: var(--primary-blue);">↓</div>
              <div style="padding: 16px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; border-radius: 8px; text-align: center;">
                <strong style="font-size: 16px;">5. trigger 更新</strong>
                <div style="margin-top: 4px; opacity: 0.9;">通知所有依赖更新</div>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-box" style="margin-top: 24px;">
          <h4>🔍 依赖收集演示</h4>

          <div style="margin-top: 16px;">
            <button @click="runEffect1" class="btn-primary" style="margin-right: 8px;">运行副作用 1</button>
            <button @click="runEffect2" class="btn-primary" style="margin-right: 8px;">运行副作用 2</button>
            <button @click="updateReactiveData" class="btn-success">修改响应式数据</button>
          </div>

          <div class="result-grid" style="margin-top: 20px;">
            <div class="result-card">
              <h5>响应式数据</h5>
              <pre>{{ JSON.stringify(reactiveData, null, 2) }}</pre>
            </div>

            <div class="result-card">
              <h5>依赖关系</h5>
              <div class="dependency-list">
                <div v-for="(deps, key) in dependencyMap" :key="key" class="dependency-item">
                  <strong>{{ key }}:</strong> {{ deps.length }} 个依赖
                </div>
              </div>
            </div>

            <div class="result-card" style="grid-column: 1 / -1;">
              <h5>执行日志</h5>
              <div class="effect-logs">
                <div v-for="(log, index) in effectLogs" :key="index" class="effect-log">
                  {{ log }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>简化版依赖收集实现</span>
          </div>
          <pre><code>// 当前正在执行的副作用函数
let activeEffect = null

// 存储依赖关系: target -> key -> Set(effects)
const targetMap = new WeakMap()

// 依赖收集
function track(target, key) {
  if (!activeEffect) return

  // 获取 target 对应的依赖 Map
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }

  // 获取 key 对应的依赖 Set
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }

  // 添加当前副作用函数
  deps.add(activeEffect)
}

// 触发更新
function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return

  const effects = depsMap.get(key)
  if (effects) {
    // 执行所有依赖的副作用函数
    effects.forEach(effect => effect())
  }
}

// 副作用函数包装器
function effect(fn) {
  const effectFn = () => {
    activeEffect = effectFn
    fn()
    activeEffect = null
  }

  // 立即执行一次
  effectFn()

  return effectFn
}</code></pre>
        </div>
      </section>

      <!-- 第四部分：reactive 实现 -->
      <section class="content-section">
        <h2>4️⃣ reactive 实现原理</h2>
        <p>reactive 是 Vue3 提供的 API，用于创建深层响应式对象。它内部使用 Proxy 代理对象，并递归处理嵌套对象。</p>

        <div class="demo-box">
          <h4>🎨 手写 reactive 演示</h4>

          <div style="margin-top: 16px;">
            <button @click="createCustomReactive" class="btn-primary" style="margin-right: 8px;">创建响应式对象</button>
            <button @click="modifyNestedProperty" class="btn-success" style="margin-right: 8px;">修改嵌套属性</button>
            <button @click="addNewProperty" class="btn-info">添加新属性</button>
          </div>

          <div class="result-box" style="margin-top: 20px;">
            <h5>自定义 Reactive 对象：</h5>
            <pre>{{ JSON.stringify(customReactiveObj, null, 2) }}</pre>
          </div>

          <div class="log-box" style="margin-top: 16px;">
            <h5>响应式操作日志：</h5>
            <div class="log-item" v-for="(log, index) in reactiveLogs" :key="index">
              <span class="log-timestamp">{{ log.time }}</span>
              <span>{{ log.message }}</span>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>reactive 简化实现</span>
          </div>
          <pre><code>// 用于存储已代理的对象，避免重复代理
const reactiveMap = new WeakMap()

function reactive(target) {
  // 如果不是对象，直接返回
  if (typeof target !== 'object' || target === null) {
    return target
  }

  // 如果已经是响应式对象，直接返回
  if (reactiveMap.has(target)) {
    return reactiveMap.get(target)
  }

  const proxy = new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key)

      const result = Reflect.get(target, key, receiver)

      // 如果结果是对象，递归创建响应式
      if (typeof result === 'object' && result !== null) {
        return reactive(result)
      }

      return result
    },

    set(target, key, value, receiver) {
      const oldValue = target[key]
      const result = Reflect.set(target, key, value, receiver)

      // 值发生变化时触发更新
      if (oldValue !== value) {
        trigger(target, key)
      }

      return result
    },

    deleteProperty(target, key) {
      const hadKey = Object.prototype.hasOwnProperty.call(target, key)
      const result = Reflect.deleteProperty(target, key)

      // 如果删除成功，触发更新
      if (result && hadKey) {
        trigger(target, key)
      }

      return result
    }
  })

  // 缓存代理对象
  reactiveMap.set(target, proxy)

  return proxy
}</code></pre>
        </div>

        <div class="info-box" style="margin-top: 24px;">
          <h3>💡 reactive 核心要点</h3>
          <ul>
            <li><strong>深层响应式：</strong>递归处理嵌套对象，确保所有层级都是响应式的</li>
            <li><strong>避免重复代理：</strong>使用 WeakMap 缓存已代理的对象</li>
            <li><strong>自动依赖收集：</strong>访问属性时自动收集依赖</li>
            <li><strong>精确更新：</strong>只在值真正变化时才触发更新</li>
          </ul>
        </div>
      </section>

      <!-- 第五部分：ref 实现 -->
      <section class="content-section">
        <h2>5️⃣ ref 实现原理</h2>
        <p>ref 用于创建基本类型的响应式数据。它将值包装在一个对象中，通过 .value 访问，内部也使用 Proxy 实现响应式。</p>

        <div class="demo-box">
          <h3>🎯 对比：ref vs reactive</h3>
          <div class="demo-content">
            <div class="comparison-grid">
              <div class="comparison-item">
                <h4>ref - 基本类型</h4>
                <pre v-pre><code>const count = ref(0)

// 访问需要 .value
console.log(count.value) // 0

// 修改需要 .value
count.value++</code></pre>
                <p class="comparison-note">💡 适用于基本类型值</p>
              </div>

              <div class="comparison-item">
                <h4>reactive - 对象类型</h4>
                <pre v-pre><code>const state = reactive({ count: 0 })

// 直接访问
console.log(state.count) // 0

// 直接修改
state.count++</code></pre>
                <p class="comparison-note">💡 适用于对象和数组</p>
              </div>
            </div>
          </div>
        </div>

        <div class="code-box" style="margin-top: 24px;">
          <div class="code-header">
            <span>ref 简化实现</span>
          </div>
          <pre><code>class RefImpl {
  constructor(value) {
    // 保存原始值
    this._value = convert(value)
    this.__v_isRef = true
  }

  get value() {
    // 依赖收集
    track(this, 'value')
    return this._value
  }

  set value(newValue) {
    // 值发生变化时触发更新
    if (newValue !== this._value) {
      this._value = convert(newValue)
      trigger(this, 'value')
    }
  }
}

// 如果值是对象，转换为 reactive
function convert(value) {
  return typeof value === 'object' && value !== null
    ? reactive(value)
    : value
}

function ref(value) {
  return new RefImpl(value)
}

// 自动解包 ref（在模板中使用）
function unref(ref) {
  return ref && ref.__v_isRef ? ref.value : ref
}</code></pre>
        </div>

        <div class="info-box" style="margin-top: 24px;">
          <h3>ref 的特点</h3>
          <ul>
            <li><strong>适用场景：</strong>基本类型值（number、string、boolean）</li>
            <li><strong>访问方式：</strong>通过 .value 访问和修改</li>
            <li><strong>模板使用：</strong>模板中自动解包，无需 .value</li>
            <li><strong>对象处理：</strong>ref 包裹对象时，内部会转为 reactive</li>
          </ul>
        </div>

        <div class="info-box">
          <h3>reactive 的特点</h3>
          <ul>
            <li><strong>适用场景：</strong>对象和数组</li>
            <li><strong>访问方式：</strong>直接访问属性，无需 .value</li>
            <li><strong>深层响应：</strong>递归处理所有嵌套对象</li>
            <li><strong>注意事项：</strong>不能直接替换整个对象，会失去响应式</li>
          </ul>
        </div>
      </section>

      <!-- 第六部分：computed 实现 -->
      <section class="content-section">
        <h2>6️⃣ computed 实现原理</h2>
        <p>computed 是惰性求值的响应式引用，它会缓存计算结果，只在依赖变化时才重新计算。</p>

        <div class="demo-box">
          <h4>⚡ computed 性能对比</h4>

          <div style="margin-top: 16px;">
            <div class="input-group">
              <label>输入数字：</label>
              <input v-model.number="computedInput" type="number" style="margin-right: 8px;">
            </div>
          </div>

          <div class="result-grid" style="margin-top: 20px;">
            <div class="result-card">
              <h5>普通函数</h5>
              <p>每次访问都计算</p>
              <div class="result-value">{{ expensiveFunction() }}</div>
              <div class="call-count">调用次数: {{ functionCallCount }}</div>
            </div>

            <div class="result-card">
              <h5>computed 属性</h5>
              <p>缓存结果，依赖变化才计算</p>
              <div class="result-value">{{ expensiveComputed }}</div>
              <div class="call-count">计算次数: {{ computedCallCount }}</div>
            </div>
          </div>

          <div class="info-box" style="margin-top: 16px;">
            <p><strong>💡 注意：</strong>computed 会缓存计算结果，多次访问不会重复计算，只有依赖的数据变化时才会重新计算。</p>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>computed 简化实现</span>
          </div>
          <pre><code>class ComputedRefImpl {
  constructor(getter) {
    this._getter = getter
    this._value = undefined
    this._dirty = true // 标记是否需要重新计算

    // 创建副作用函数
    this.effect = effect(getter, {
      lazy: true, // 懒执行
      scheduler: () => {
        // 依赖变化时标记为脏
        if (!this._dirty) {
          this._dirty = true
          trigger(this, 'value')
        }
      }
    })
  }

  get value() {
    // 依赖收集
    track(this, 'value')

    // 只有脏值才重新计算
    if (this._dirty) {
      this._value = this.effect()
      this._dirty = false
    }

    return this._value
  }
}

function computed(getter) {
  return new ComputedRefImpl(getter)
}

// 使用示例
const count = ref(1)
const doubleCount = computed(() => {
  console.log('计算中...')
  return count.value * 2
})

console.log(doubleCount.value) // 输出: 计算中... 2
console.log(doubleCount.value) // 2 (不会重新计算)
count.value = 2
console.log(doubleCount.value) // 输出: 计算中... 4</code></pre>
        </div>

        <div class="info-box" style="margin-top: 24px;">
          <h3>✨ computed 优化原理</h3>
          <ul>
            <li><strong>惰性求值：</strong>只有访问时才计算，不访问不计算</li>
            <li><strong>缓存机制：</strong>使用 _dirty 标记控制是否需要重新计算</li>
            <li><strong>依赖追踪：</strong>自动追踪 getter 函数中的响应式依赖</li>
            <li><strong>调度器优化：</strong>依赖变化时只标记脏值，不立即计算</li>
          </ul>
        </div>
      </section>

      <!-- 第七部分：watch 实现 -->
      <section class="content-section">
        <h2>7️⃣ watch 实现原理</h2>
        <p>watch 用于监听响应式数据的变化，并在变化时执行回调函数。它支持深度监听、立即执行等多种选项。</p>

        <div class="demo-box">
          <h4>👁️ watch 监听演示</h4>

          <div style="margin-top: 16px;">
            <div class="input-group">
              <label>修改数据：</label>
              <input v-model="watchedValue" placeholder="输入内容" style="margin-right: 8px;">
              <button @click="resetWatchedValue" class="btn-secondary">重置</button>
            </div>

            <div class="input-group" style="margin-top: 12px;">
              <label>
                <input type="checkbox" v-model="watchImmediate" style="margin-right: 4px;">
                immediate（立即执行）
              </label>
              <label style="margin-left: 16px;">
                <input type="checkbox" v-model="watchDeep" style="margin-right: 4px;">
                deep（深度监听）
              </label>
            </div>
          </div>

          <div class="log-box" style="margin-top: 20px;">
            <h5>Watch 回调日志：</h5>
            <div v-if="watchLogs.length === 0" class="empty-log">暂无日志</div>
            <div v-else class="log-item" v-for="(log, index) in watchLogs" :key="index">
              <span class="log-timestamp">{{ log.time }}</span>
              <span>{{ log.message }}</span>
            </div>
          </div>
        </div>

        <div class="code-box">
          <div class="code-header">
            <span>watch 简化实现</span>
          </div>
          <pre><code>function watch(source, cb, options = {}) {
  let getter

  // 处理不同类型的 source
  if (typeof source === 'function') {
    getter = source
  } else {
    // 如果是 ref 或 reactive 对象
    getter = () => traverse(source)
  }

  let oldValue

  // 调度器：依赖变化时执行
  const job = () => {
    const newValue = effectFn()

    // 执行回调
    cb(newValue, oldValue)
    oldValue = newValue
  }

  const effectFn = effect(
    getter,
    {
      lazy: true,
      scheduler: job
    }
  )

  if (options.immediate) {
    // 立即执行一次
    job()
  } else {
    oldValue = effectFn()
  }
}

// 递归遍历对象，触发所有属性的 get
function traverse(value, seen = new Set()) {
  if (typeof value !== 'object' || value === null || seen.has(value)) {
    return value
  }

  seen.add(value)

  // 遍历对象所有属性
  for (const key in value) {
    traverse(value[key], seen)
  }

  return value
}

// 使用示例
const state = reactive({ count: 0 })

watch(
  () => state.count,
  (newValue, oldValue) => {
    console.log(\`count 从 \${oldValue} 变为 \${newValue}\`)
  }
)</code></pre>
        </div>

        <div class="info-box" style="margin-top: 24px;">
          <h3>watch 常用选项</h3>
          <ul>
            <li><strong>immediate：</strong>立即执行回调函数</li>
            <li><strong>deep：</strong>深度监听对象内部值的变化</li>
            <li><strong>flush：</strong>控制回调执行时机（pre、post、sync）</li>
            <li><strong>onTrack / onTrigger：</strong>调试钩子，追踪依赖收集和触发</li>
          </ul>
        </div>

        <div class="info-box">
          <h3>watch vs watchEffect</h3>
          <ul>
            <li><strong>watch：</strong>需要明确指定监听的数据源，可以访问新旧值</li>
            <li><strong>watchEffect：</strong>自动追踪回调中使用的响应式依赖</li>
            <li><strong>使用场景：</strong>watch 适合明确监听某个值，watchEffect 适合自动依赖追踪</li>
            <li><strong>性能对比：</strong>两者性能相近，选择看具体需求</li>
          </ul>
        </div>
      </section>

      <!-- 第八部分：性能优化技巧 -->
      <section class="content-section">
        <h2>8️⃣ 响应式性能优化</h2>
        <p>理解响应式原理后，我们可以运用一些技巧来优化应用性能。</p>

        <div class="info-box">
          <h3>✅ 推荐做法</h3>
          <ul>
            <li><strong>使用 shallowRef：</strong>对于大型对象，只需要顶层响应式</li>
            <li><strong>使用 markRaw：</strong>标记不需要响应式的对象（如第三方库实例）</li>
            <li><strong>合理使用 computed：</strong>利用缓存避免重复计算</li>
            <li><strong>避免深层嵌套：</strong>扁平化数据结构，提升性能</li>
            <li><strong>使用 toRefs：</strong>解构 reactive 对象时保持响应式</li>
          </ul>
        </div>

        <div class="info-box">
          <h3>❌ 避免踩坑</h3>
          <ul>
            <li><strong>避免在 computed 中修改数据：</strong>会导致无限循环</li>
            <li><strong>不要解构 reactive 对象：</strong>会失去响应式，应使用 toRefs</li>
            <li><strong>避免大量响应式数据：</strong>会影响性能，考虑使用 shallowRef</li>
            <li><strong>不要频繁触发更新：</strong>使用防抖节流优化</li>
            <li><strong>避免循环依赖：</strong>合理设计数据流，防止死循环</li>
          </ul>
        </div>

        <div class="code-box" style="margin-top: 24px;">
          <div class="code-header">
            <span>性能优化示例</span>
          </div>
          <pre><code>import { shallowRef, markRaw, readonly } from 'vue'

// 1. 使用 shallowRef 优化大型对象
const largeData = shallowRef({
  list: new Array(10000).fill(0)
})
// 修改顶层属性会触发更新，内部属性不会

// 2. 使用 markRaw 标记非响应式数据
const thirdPartyLib = markRaw(someLibrary)
// 该对象不会被代理，性能更好

// 3. 使用 readonly 防止意外修改
const config = readonly(reactive({
  apiUrl: 'https://api.example.com'
}))
// 尝试修改会在开发环境警告

// 4. 合理使用 computed 缓存
const expensiveValue = computed(() => {
  // 复杂计算只在依赖变化时执行
  return heavyComputation(data.value)
})

// 5. 避免解构 reactive
const state = reactive({ count: 0 })
// ❌ 错误：失去响应式
const { count } = state
// ✅ 正确：使用 toRefs
const { count } = toRefs(state)</code></pre>
        </div>
      </section>

      <!-- 课程总结 -->
      <section class="content-section">
        <h2>📚 课程总结</h2>
        <div class="summary-grid">
          <div class="summary-item">
            <div class="summary-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">🎯</div>
            <h4>Proxy 代理</h4>
            <p>Vue3 使用 Proxy 实现响应式，提供完整的对象拦截能力</p>
          </div>
          <div class="summary-item">
            <div class="summary-icon" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">🔍</div>
            <h4>依赖收集</h4>
            <p>track 收集依赖，trigger 触发更新，形成完整的响应式循环</p>
          </div>
          <div class="summary-item">
            <div class="summary-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">⚡</div>
            <h4>reactive & ref</h4>
            <p>reactive 用于对象，ref 用于基本类型，各有适用场景</p>
          </div>
          <div class="summary-item">
            <div class="summary-icon" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">💡</div>
            <h4>computed & watch</h4>
            <p>computed 惰性缓存，watch 监听变化，优化性能的利器</p>
          </div>
        </div>

        <div class="key-points-box">
          <h4>🎓 核心要点</h4>
          <ul>
            <li>Proxy 相比 Object.defineProperty 提供了更强大的拦截能力和更好的性能</li>
            <li>依赖收集通过 track 和 trigger 实现自动的响应式更新</li>
            <li>reactive 创建深层响应式对象，ref 包装基本类型值</li>
            <li>computed 利用缓存机制避免重复计算，提升性能</li>
            <li>watch 提供灵活的数据监听能力，支持深度监听和立即执行</li>
            <li>合理使用 shallowRef、markRaw 等 API 可以优化大型应用性能</li>
          </ul>
        </div>
      </section>

      <!-- 下一课预告 -->
      <div class="next-lesson">
        <h3>🎯 下一课预告</h3>
        <p>第72课：购物车实战项目</p>
        <p class="next-lesson-desc">综合运用 Vue3 所学知识，开发一个完整的购物车应用</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

// ============ Proxy 演示 ============
const proxyTarget = reactive({})
const proxyLogs = ref([])
const proxyDemoKey = ref('')
const proxyDemoValue = ref('')
const getProxyKey = ref('')

function addProxyLog(type, message) {
  proxyLogs.value.push({ type, message, time: new Date().toLocaleTimeString() })
  if (proxyLogs.value.length > 10) {
    proxyLogs.value.shift()
  }
}

function setProxyProperty() {
  if (!proxyDemoKey.value) return
  proxyTarget[proxyDemoKey.value] = proxyDemoValue.value
  addProxyLog('set', `设置属性 ${proxyDemoKey.value} = ${proxyDemoValue.value}`)
  proxyDemoKey.value = ''
  proxyDemoValue.value = ''
}

function getProxyProperty() {
  if (!getProxyKey.value) return
  const value = proxyTarget[getProxyKey.value]
  addProxyLog('get', `读取属性 ${getProxyKey.value} = ${value}`)
}

// ============ 依赖收集演示 ============
const reactiveData = reactive({ count: 0, name: 'Vue3' })
const dependencyMap = ref({})
const effectLogs = ref([])

let effectId = 0

function runEffect1() {
  const id = ++effectId
  effectLogs.value.push(`[副作用 ${id}] 读取 count: ${reactiveData.count}`)

  if (!dependencyMap.value.count) {
    dependencyMap.value.count = []
  }
  dependencyMap.value.count.push(`副作用 ${id}`)
}

function runEffect2() {
  const id = ++effectId
  effectLogs.value.push(`[副作用 ${id}] 读取 name: ${reactiveData.name}`)

  if (!dependencyMap.value.name) {
    dependencyMap.value.name = []
  }
  dependencyMap.value.name.push(`副作用 ${id}`)
}

function updateReactiveData() {
  reactiveData.count++
  effectLogs.value.push(`🔄 数据更新: count = ${reactiveData.count}，触发 ${dependencyMap.value.count?.length || 0} 个副作用`)
}

// ============ 自定义 Reactive 演示 ============
const customReactiveObj = ref({})
const reactiveLogs = ref([])

function createCustomReactive() {
  customReactiveObj.value = {
    name: '张三',
    age: 25,
    address: {
      city: '北京',
      district: '朝阳区'
    }
  }
  reactiveLogs.value.push({
    time: new Date().toLocaleTimeString(),
    message: '创建响应式对象成功'
  })
}

function modifyNestedProperty() {
  if (customReactiveObj.value.address) {
    customReactiveObj.value.address.city = '上海'
    reactiveLogs.value.push({
      time: new Date().toLocaleTimeString(),
      message: '修改嵌套属性 address.city = 上海'
    })
  }
}

function addNewProperty() {
  customReactiveObj.value.email = 'test@example.com'
  reactiveLogs.value.push({
    time: new Date().toLocaleTimeString(),
    message: '添加新属性 email = test@example.com'
  })
}

// ============ computed 演示 ============
const computedInput = ref(10)
const functionCallCount = ref(0)
const computedCallCount = ref(0)

function expensiveFunction() {
  functionCallCount.value++
  let result = 0
  for (let i = 0; i < computedInput.value * 1000; i++) {
    result += i
  }
  return result
}

const expensiveComputed = computed(() => {
  computedCallCount.value++
  let result = 0
  for (let i = 0; i < computedInput.value * 1000; i++) {
    result += i
  }
  return result
})

// ============ watch 演示 ============
const watchedValue = ref('初始值')
const watchImmediate = ref(false)
const watchDeep = ref(false)
const watchLogs = ref([])

watch(
  watchedValue,
  (newVal, oldVal) => {
    watchLogs.value.push({
      time: new Date().toLocaleTimeString(),
      message: `值从 "${oldVal}" 变为 "${newVal}"`
    })
  }
)

function resetWatchedValue() {
  watchedValue.value = '初始值'
}
</script>

<style scoped>
/* 对比网格 - 用于并排对比代码 */
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

/* 输入组 */
.input-group {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.input-group label {
  font-weight: 500;
  color: var(--text-primary);
}

.input-group input[type="text"],
.input-group input[type="number"] {
  flex: 1;
  min-width: 150px;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
}

/* 结果框 */
.result-box {
  padding: 16px;
  background: var(--background-color);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.result-box h5 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.result-box pre {
  margin: 0;
  padding: 12px;
  background: white;
  border-radius: 6px;
  font-size: 13px;
  overflow-x: auto;
}

/* 日志框 */
.log-box {
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
}

.log-box h5 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.log-item {
  padding: 8px 12px;
  background: white;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.log-type {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}

.log-type.get {
  background: var(--info-bg);
  color: var(--primary-blue);
}

.log-type.set {
  background: var(--success-bg);
  color: var(--success-green);
}

.log-timestamp {
  font-size: 11px;
  color: var(--text-secondary);
  font-family: monospace;
}

.empty-log {
  text-align: center;
  padding: 20px;
  color: var(--text-secondary);
  font-size: 14px;
}

/* 结果网格 */
.result-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.result-card {
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.result-card h5 {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.result-card p {
  margin: 0 0 12px 0;
  font-size: 13px;
  color: var(--text-secondary);
}

.result-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-blue);
  margin: 12px 0;
}

.call-count {
  font-size: 12px;
  color: var(--text-secondary);
  padding: 4px 8px;
  background: var(--background-color);
  border-radius: 4px;
  display: inline-block;
}

.dependency-list {
  font-size: 13px;
}

.dependency-item {
  padding: 8px 12px;
  background: var(--background-color);
  border-radius: 6px;
  margin-bottom: 8px;
}

.dependency-item strong {
  color: var(--primary-blue);
}

.effect-logs {
  max-height: 200px;
  overflow-y: auto;
}

.effect-log {
  padding: 6px 12px;
  background: var(--background-color);
  border-radius: 4px;
  margin-bottom: 6px;
  font-size: 13px;
  font-family: monospace;
}

/* 核心要点框 */
.key-points-box {
  margin-top: 24px;
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.key-points-box h4 {
  margin: 0 0 16px 0;
  font-size: 18px;
}

.key-points-box ul {
  margin: 0;
  padding-left: 24px;
  line-height: 2;
}

.key-points-box li {
  margin-bottom: 8px;
}
</style>
