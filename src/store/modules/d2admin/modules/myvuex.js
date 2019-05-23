export default {
    namespaced: true,

    state:{  // 初始化 状态对象
        show:true,count:5
    },
    mutations: { // 包含多个更新 state 函数的对象
        increment(state,param){ // P1默认的 P2手动传参
            state.count = state.count + param
        },
        decrement(state,param){
            state.count = state.count - param
        }
    },
    actions: { //包含多个对应事件回调函数的对象

    },
    getters:{  // 包含多个计算属性函数的对象
        evenOrOdd(state){
            return state.count%2 == 0 ? '偶数':'奇数'
        }
    } ,

}
