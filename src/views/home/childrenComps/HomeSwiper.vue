<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'
export default {
  name: "HomeSwiper",
  props: {
    banners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    SwiperItem,
    Swiper
  },
  methods: {
    imageload(){
      if(!this.isLoad){
        this.$emit('swiperload')
        this.isLoad = true
      }
    },
    stopTimer() {
      this.$refs.swiper.stopTimer()
    },
    startTimer() {
      if (this.$refs.swiper) {
        this.$refs.swiper.startTimer()
      }
    }
  },
  data(){
    return{
      isLoad: false
    }
  }

}
</script>

<style scoped>
/*.swiper{*/
/*  width: 100%;*/
/*}*/
</style>
