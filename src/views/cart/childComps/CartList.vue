<template>
  <div id="cart_list">
    <scroll ref="scroll" class="cart_scroll">
      <template>
        <cart-list-item
          v-for="(item, index) in $store.state.cartList"
          :key="index"
          :item-info="item"
          ref="item"
          @click="click"
        ></cart-list-item>
      </template>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from "@/views/cart/childComps/CartListItem";
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "CartList",
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    CartListItem,
    Scroll
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  methods: {
    click(){
      this.$router.push('/detail/' + this.$refs.item.iteminfo.iid)
    }
  }
}
</script>

<style scoped>
#cart_list {
  height: calc(100% - 44px - 49px - 40px);
}
/**
* scroll
*/
.cart_scroll {
  height: 100%;
  overflow: hidden;
}
</style>
