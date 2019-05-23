<template>
  <d2-container :filename="filename">
    <template slot="header">Page 2 header</template>

      <!-- fuck 在vue中 所有js文件名 必须小写！ 否则报错  eg: 将 myvuex.js 文件改成 myVuex.js 则 $store.state.d2admin.myVuex.count 报错 -->
      <h1> 全局store的 count 属性：（{{ $store.state.d2admin.myvuex.count}}） --------------- show 属性：（{{ $store.state.d2admin.myvuex.show}}） </h1><br>

      <!--doit 如何 访问 myvuex.js 中的    actions ？？？？？-->

      <!-- 直接修改方式 -->
      <el-row>
          <el-button type="success"  @click="$store.state.d2admin.myvuex.count++"> 直接增加</el-button>
          <el-button type="info"     @click="$store.state.d2admin.myvuex.count--"> 直接减少</el-button>
      </el-row> <br>
      <!--  通过 mutations 方式 带参数 调用的地方不需要显示写出 ，第一参数写的是方法名-->
      <el-row>
          <el-button type="primary"  @click="$store.commit('d2admin/myvuex/increment',10)">  mutations 增加 方式一</el-button>
          <el-button type="success"  @click="$store.commit('d2admin/myvuex/decrement',5)">mutations 减少 方式一</el-button>
      </el-row><br>
      <!-- 方式二 失败-->
      <el-row>
          <el-button type="primary"  @click="increment(5)">  mutations 增加 方式二</el-button>
          <el-button type="success"  @click="decrement(10)">  mutations 减少 方式二</el-button>
      </el-row>

      <h1>mapGetters 测试 {{ logLength }} </h1><br>
      <h1>mapActions 测试  </h1><br>
      <el-button type="success"  @click="test"> mapActions 测试</el-button>
      <el-button type="success"  @click="test3"> mapActions test3</el-button>
  </d2-container>
</template>

<script>
    import {mapActions, mapGetters, mapMutations } from 'vuex'

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
            ...mapMutations('d2admin/myvuex', ['increment','decrement']), // ['increment','decrement']  对应 @click="increment(5)"  可以传入参数
            ...mapActions('d2admin/myvuex', [ 'test' ]), //  [ 'test' ] 对应  @click="test"
            test3(){
                // this.$store.dispatch('d2admin/myvuex',[ 'test2',100 ])
                this.$store.dispatch('d2admin/myvuex/listen',-10)
            }
        },
        computed: {
            ...mapGetters('d2admin', {
                logLength: 'myvuex/length',
            }),
        },
    }
</script>
