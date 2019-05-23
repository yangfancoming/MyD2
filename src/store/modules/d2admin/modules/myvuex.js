export default {
    namespaced: true,

    state:{  // 全局状态对象 state
        show:true,count:5,length:12,
    },
    mutations: { // 增删改 state
        // P1默认的 P2手动传参
        increment:(state,param)=> { state.count = state.count + param },
        decrement:(state,param)=> { state.count = state.count - param },
    },
    getters:{  // 只读 state
        length: (state) => {return state.length},
    } ,
    actions: { //
        test:()=> console.log(12345),
        listen ({ commit },num) {
            setTimeout(function () { //  setTimeout 为异步  打开 vuetools 可以看到每次的更新记录  不会丢失数据记录
                commit('increment', num)
            },0)
        },
    },

    /**  actions 多用于业务行为 调用 mutations
     * actions 调用 mutations 采用  this.$store.dispatch('d2admin/account/load',param) 的方式 进行调用
     * p1 为 某action p2 为输入参数
     * 注意：若有是异步请求必须放在actions中，因为在mutations中导致数据丢失
    */

}
