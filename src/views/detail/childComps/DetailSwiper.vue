<template>
  <swiper class="swiper-item">
    <swiper-item v-for="item in topimages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";

export default {
  name: "DetailSwiper",
  props: {
    topimages: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    SwiperItem,
    Swiper
  }
}
</script>

<style scoped>
.swiper-item{
  height: 300px;
  overflow: hidden;
}
</style>
