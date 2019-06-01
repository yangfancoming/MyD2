
import D2Crud from '@d2-projects/d2-crud'
import ElementUI from 'element-ui'  // 引入 ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import 'flex.css' // flex 布局库
import '@/components' // 组件
import '@/assets/svg-icons' // svg 图标
import axios from '@/plugin/axios' // axios

// 功能插件
import pluginError from '@/plugin/error'
import pluginLog from '@/plugin/log'
import pluginOpen from '@/plugin/open'

/**
 插件通常用来为 Vue 添加全局功能。 一般有下面几种：
 1. 添加全局方法或者属性。如: vue-custom-element
 2. 添加全局资源：指令/过滤器/过渡等。如 vue-touch
 3. 通过全局混入来添加一些组件选项。如 vue-router
 4. 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。 (推荐)
 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router
*/
export default {

    // Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
    async install (Vue, options) {
        // 设置为 false 以阻止 vue 在启动时生成生产提示
        // https://cn.vuejs.org/v2/api/#productionTip
        Vue.config.productionTip = false
        // 挂载全局 （给Vue 添加myHttp属性 并赋值为 axios）
        Vue.prototype.$myHttp = axios
        // 当前环境
        Vue.prototype.$env = process.env.NODE_ENV
        // 当前的 baseUrl
        Vue.prototype.$baseUrl = process.env.BASE_URL
        // 当前版本
        Vue.prototype.$version = process.env.VUE_APP_VERSION
        // 构建时间
        Vue.prototype.$buildTime = process.env.VUE_APP_BUILD_TIME
        // 使用 Element UI
        Vue.use(ElementUI)
        // 插件
        Vue.use(pluginError)
        Vue.use(pluginLog)
        Vue.use(pluginOpen)
        Vue.use(D2Crud)
    }
}
