<template>
  <div id="cart">
<nav-bar class="cart-nav">
  <div slot="center">购物车({{cartLength}})</div>
</nav-bar>
      <cart-list class="cart-list"></cart-list>
    <cart-bottom-bar class="bottom" ></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import CartList from "@/views/cart/childComps/CartList";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";
import {mapGetters} from 'vuex'

	export default {
		name: "Cart",
    components: {
		  NavBar,
      CartList,
      CartBottomBar,
      Scroll
    },
    computed: {
		 ...mapGetters(['cartLength'])
    },
    methods: {
    }
    // activated() {
    //   this.$refs.scroll.refresh()
    // }

	}
</script>

<style scoped>
.bottom{
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
}
/*  #cart {*/
/*    !*position: relative;*!*/
/*    height: 100vh;*/
/*    width: 100%;*/
/*  }*/

/*  .nav-bar {*/
/*    background-color: var(--color-tint);*/
/*    font-weight: 700;*/
/*    color: #fff;*/
/*  }*/
/*  .content {*/
/*    position: absolute;*/
/*    top: 44px;*/
/*    bottom: 49px;*/
/*    left: 0;*/
/*    right: 0;*/
/*    height: 100%;*/
/*    overflow: hidden;*/
/*  }*/

  .cart-nav{
    background-color: var(--color-tint);
    color: white;
  }
/*.cart-list{*/
/*  position: absolute;*/
/*  top: 44px;*/
/*  bottom: 49px;*/
/*  width: 100%;*/
/*}*/
</style>
