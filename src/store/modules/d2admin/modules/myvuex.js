export default {
    namespaced: true,

    state:{  // 初始化 状态对象
        show:true,count:5,length:12,
    },
    mutations: { // 包含多个更新 state 函数的对象
        // P1默认的 P2手动传参
        increment(state,param){
            state.count = state.count + param
        },
        decrement(state,param){
            state.count = state.count - param
        },

    },
    actions: { //包含多个对应事件回调函数的对象
        test:()=> console.log(12345)
    },
    getters:{  // 包含多个计算属性函数的对象
        length: (state) => {return state.length},
    } ,

}
