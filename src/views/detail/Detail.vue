<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"ref="nav">
    </detail-nav-bar>
    <scroll class="content" ref="scroll"@scroll="contentScroll" :probe-type="3">
      <div>
      <detail-swiper :topimages="topimages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info1 :shop="shop"></detail-shop-info1>
      <detail-goods-info :detail-info="detailinfo" @imageload="imageload"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"ref="params"></detail-param-info>
      <detail-comment :comment-info="commentInfo"ref="comment"></detail-comment>
      <goods-list :goods="recommends"ref="recommends"></goods-list>
      </div>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <toast :isshow="show" :ismessage="message"/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import {getDetail, Goods, Shop, GoodsParam,getRecommend} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo1 from "@/views/detail/childComps/DetailShopInfo1";
import Scroll from "@/components/common/scroll/Scroll";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailComment from "@/views/detail/childComps/DetailComment";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import Toast from "@/components/common/toast/Toast";

import GoodsListItem from "@/components/content/goods/GoodsListItem";
import GoodsList from "@/components/content/goods/GoodsList";
import {debounce} from "@/common/utils";
import {backTopMixin} from "@/common/mixin";


export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo1,
    Scroll,
    Toast,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    GoodsListItem,
    GoodsList,
    DetailBottomBar,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topimages: [],
      goods: {},
      shop: {},
      detailinfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      titleTopY: [],
      getThemeTopy: null,
      currentIndex: 0,
      show: false,
      message: ''
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then((res) => {
      //1.获取顶部轮播数据
      console.log(res)
      const data = res.result
      this.topimages = data.itemInfo.topImages
      //2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //3.获取店铺信息
      this.shop = new Shop(data.shopInfo)
      //4.保存商品的详情数据
      this.detailinfo = data.detailInfo
      //5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //6.获取评论信息

        this.commentInfo = data.rate.list[0]

      //7.获取推荐信息

    })
    getRecommend().then((res)=> {
      this.recommends = res.data.list
    })
    this.getThemeTopy = debounce(()=>{
      this.$nextTick(() => {
        //获取不同组件的offsetTop
        this.titleTopY = [];
        this.titleTopY.push(0);
        this.titleTopY.push(this.$refs.params.$el.offsetTop );
        this.titleTopY.push(this.$refs.comment.$el.offsetTop );
        this.titleTopY.push(this.$refs.recommends.$el.offsetTop );
        this.titleTopY.push(Number.MAX_VALUE);
        console.log(this.titleTopY);
      });
    },100)
  },
  updated() {
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh,100)
   this.$bus.$on('detailImageLoad',()=>{
     newRefresh()
   })

  },
  methods: {
    imageload() {
      this.$refs.scroll.refresh()
      //图片加载获取offsettop
      this.getThemeTopy()
    },
    //点击导航栏跳转页面
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.titleTopY[index], 100)
    },
    //滚动详情页与顶部导航栏的对应
    contentScroll(position) {
      const positionY = -position.y
      let length = this.titleTopY.length
      // for (let i in this.titleTopY){
      //   if (positionY > this.titleTopY[i] && positionY < this.titleTopY[i+1]){
      //     console.log(i)
      //   }
      // }
      for (let i = 0; i < this.titleTopY.length - 1; i++) {
        if (this.currentIndex !== i && ((positionY >= this.titleTopY[i] && positionY < this.titleTopY[i + 1]))) {
          this.currentIndex = i
          console.log(this.currentIndex)
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      //抽取混入
      this.listenShowBackTop(position)
    },
    //加入购物车
    addToCart(){
      //获取数据
     const product = {}
     product.image = this.topimages[0];
     product.title = this.goods.title;
     product.desc = this.goods.desc;
     product.price = this.goods.oldPrice;
     product.iid = this.iid;
     //添加到购物车
   // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then((res)=>{
      this.show = true;
      this.message = res;
      setTimeout(()=>{
        this.show = false
        this.message=''
      },1500)

        // console.log(this.$toast)
        // this.$toast.Show()
      })

    }
  }

}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.detail-nav {
  position: fixed;
  z-index: 9;
  background-color: #fff;
}
</style>
