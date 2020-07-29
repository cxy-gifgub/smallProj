import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payload) {
            let oldProduct = state.cartList.find(item => item.bvid === payload.bvid)
            if (oldProduct) {
                oldProduct.count += 1;
            }
            else {
                payload.count = 1;
                state.cartList.push(payload)
            }
        },
        // addCart(state, payload) {
        //     let oldProduct = state.cartList.find(item => item.bvid === payload.bvid)
        //     if (oldProduct) {
        //         oldProduct.count += 1;
        //     }
        //     else {
        //         payload.count = 1;
        //         state.cartList.push(payload)
        //     }
        // },
        // delCart(state, payload) {
        //     let oldProduct = state.cartList.find(item => item.bvid === payload.bvid)
        //     if (oldProduct) {
                
        //     }
        // }
    }
})

export default store