<template>
  <el-tooltip
    effect="dark"
    :content="tooltipContent"
    placement="bottom">
      <el-button class="d2-ml-0 d2-mr btn-text can-hover" type="text" @click="handleClick">
          <el-badge  v-if="logLength > 0"  :max="99" :value="logLengthError" :is-dot="logLengthError === 0">
              <d2-icon :name="logLengthError === 0 ? 'dot-circle-o' : 'bug'"  style="font-size: 20px"/>
          </el-badge>
          <d2-icon v-else  name="dot-circle-o"  style="font-size: 20px"/>
      </el-button>
  </el-tooltip>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('d2admin', {
      logLength: 'log/length',
      logLengthError: 'log/lengthError'
    }),
    tooltipContent () {
      return this.logLength === 0 ? '没有日志或异常' : `${this.logLength} 条日志${this.logLengthError > 0 ? ` | 包含 ${this.logLengthError} 个异常` : ''}`
    }
  },
  methods: {
    ...mapMutations('d2admin/log', [ 'clean']),
    handleClick () { // 点击按钮  路由跳转 异常日志页面
      this.$router.push({ name: 'log' })
    }
  }
  /**
   注意：在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push
   想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
   当你点击 <router-link> 时，这个方法会在内部调用，所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)。
   声明式	 <router-link :to="...">
   编程式    router.push(...)
  */
}
</script>
