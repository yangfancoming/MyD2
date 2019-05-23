// Vue 使用 ES6 模块化 加载引入 Vue，没有路径都去 node_modules 目录中查找并加载
import Vue from 'vue'
// App 使用 ES6 模块化 加载引入 App，有路径则按照路径去查找并加载  ./ 当前目录下  找 App 文件/目录  (.vue后缀名可以省略)
import App from './App'
// 核心插件
import d2Admin from '@/plugin/d2admin'
// store
import store from '@/store/index'
// 多国语
import i18n from './i18n'

// 菜单和路由设置
import router from './router' // 导入 router，在当前目录中 找到文件夹 router，并根据加载规则找到 router 目录下的 index.js文件
import menuHeader from '@/menu/header'// 获取 顶部菜单 数据源
import menuAside from '@/menu/aside'  // 获取 左侧菜单 数据源
import { frameInRoutes } from '@/router/routes'

// 核心插件
Vue.use(d2Admin)

new Vue({
    router,// 在 new Vue 中注册的所有组件对象 都多了一个$属性 eg： $router $store...
    store,// 注册全局 store 组件，而 store中又包含了 Vuex
    i18n,
    render: h => h(App), // 绑定app 挂载区域
    created () {
        this.$store.commit('d2admin/page/init', frameInRoutes)    // 处理路由 得到每一级的路由设置
        this.$store.commit('d2admin/menu/headerSet', menuHeader)  // 设置顶部菜单
        this.$store.commit('d2admin/menu/asideSet', menuAside)    // 设置左侧菜单 src/store/modules/d2admin/modules/menu.js
        this.$store.commit('d2admin/search/init', menuHeader)     // 初始化菜单搜索功能
    },
    mounted () {
        // 展示系统信息
        this.$store.commit('d2admin/releases/versionShow')
        // 用户登录后从数据库加载一系列的设置
        this.$store.dispatch('d2admin/account/load')
        // 获取并记录用户 UA
        this.$store.commit('d2admin/ua/get')
        // 初始化全屏监听
        this.$store.dispatch('d2admin/fullscreen/listen')
    }
}).$mount('#app')
