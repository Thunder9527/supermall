import {
  ADD_COUNTER,
  ADD_TO_CART
} from "@/store/mutation-types";

export default {
  addCart(context, payload) {
   return new Promise(((resolve, reject) => {
     let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
     if (oldproduct) {
       context.commit(ADD_COUNTER,oldproduct)
       //  oldproduct.count++
       resolve('添加商品数量加一')
     } else {
       payload.count = 1
       context.commit(ADD_TO_CART,payload)
       resolve('添加新商品')
     }
   }))
  }
}
