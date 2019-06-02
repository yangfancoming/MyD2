import Vue from 'vue'

import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'
import store from '@/store/index'
import util from '@/libs/util.js'
import routes from './routes' // 路由数据
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({routes}) // 导出路由 在 main.js 里使用

/** 路由守卫  路由拦截 权限验证 */
router.beforeEach((to, from, next) => {
  NProgress.start() // 进度条
  store.commit('d2admin/search/set', false) // 关闭搜索面板
  // 验证当前路由所有的匹配中是否需要有登录验证的
  if (to.matched.some(r => r.meta.auth)) {
    // 这里暂时将cookie里是否存有token作为验证是否登录的条件，请根据自身业务需要修改
    const token = util.cookies.get('token')
    if (token && token !== 'undefined') {
      next()
    } else {
      // 没有登录的时候跳转到登录界面 携带上登陆成功之后需要跳转的页面完整路径
      next({  name: 'login', query: { redirect: to.fullPath } })
      // https://github.com/d2-projects/d2-admin/issues/138
      NProgress.done()
    }
  } else {
    next()  // 不需要身份校验 直接通过
  }
})

router.afterEach(to => {
  NProgress.done()  // 进度条
  store.dispatch('d2admin/page/open', to) // 多页控制 打开新的页面
  util.title(to.meta.title)  // 更改标题
})

export default router
