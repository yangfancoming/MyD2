<template>
  <d2-container :filename="filename">
    <template slot="header">Page 1 header</template>
      Hello World {{filename}}

      <br/>
      <el-button @click="test()">请求测试</el-button>
  </d2-container>
</template>

<script>
    export default {
        name: 'page1',
        data () {
            return {
                filename: __filename  // index.js
            }
        },
        methods:{
            test () {
                return this.$axios.get('/mobile/get').then(res => {
                    console.log(res)
                }).catch(() => {})
            },
        }
    }
</script>
