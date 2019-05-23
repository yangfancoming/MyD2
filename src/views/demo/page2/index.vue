<template>
  <d2-container :filename="filename">
    <template slot="header">Page 2 header</template>

      <!-- fuck 在vue中 所有js文件名 必须小写！ 否则报错  eg: 将 myvuex.js 文件改成 myVuex.js 则 $store.state.d2admin.myVuex.count 报错 -->
      <h1> 全局store的 count 属性：（{{ $store.state.d2admin.myvuex.count}}） -------（{{ $store.getters.d2admin}}）-------- show 属性：（{{ $store.state.d2admin.myvuex.show}}） </h1>

      <!--doit 如何 访问 myvuex.js 中的 mutations getters  actions ？？？？？-->

      <!-- 直接修改方式 -->
      <el-row>
          <el-button type="success"  @click="$store.state.d2admin.myvuex.count++"> 直接增加</el-button>
          <el-button type="info"     @click="$store.state.d2admin.myvuex.count--"> 直接减少</el-button>
          <el-button type="info"     @click="$store.state.d2admin.myvuex.count--"> 奇数 Odd 增加</el-button>
          <el-button type="info"     @click="$store.state.d2admin.myvuex.count--"> 偶数 Even 增加</el-button>
      </el-row>
      <!--  通过 mutations 方式 带参数 调用的地方不需要显示写出 ，第一参数写的是方法名-->
      <el-row>
          <el-button type="primary"  @click="$store.commit('d2admin/myvuex/increment',10)">  mutations 增加 方式一</el-button>
          <el-button type="success"  @click="$store.commit('d2admin/myvuex/decrement',5)">mutations 减少 方式一</el-button>
      </el-row>
      <el-row>
          <el-button type="primary"  @click="increment">  mutations 增加 方式二</el-button> <!--doit  方式二 失败-->
          <el-button type="success"  @click="decrement">  mutations 减少 方式二</el-button>
      </el-row>
  </d2-container>
</template>

<script>

    import { mapMutations } from 'vuex'

    /** Vuex 多个视图共享同一状态
     * 以前的解决办法：
     * 1.将数据及操作数据的行为都定义在父组件
     * 2.将数据及操作数据的行为传递给需要的各个子组件 (有可能需要多级传递)
     * 3.Vuex 应用而生
    */
    export default {
        name: 'page2',
        data () {
            return {
                filename: __filename,
            }
        },
        methods:{

            // ...mapMutations(['increment', 'decrement']),
            ...mapMutations({
                increment: 'd2admin/myvuex/increment'
            }),
            increment(){
                this.increment()
            },
            decrement(){
                this.decrement()
            },
            // 将 `this.increase()` 映射为 `this.$store.commit('increase')`
        }
    }
</script>
