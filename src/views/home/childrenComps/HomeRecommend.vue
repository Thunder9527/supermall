<template>
<div class="recommend">
  <div v-for="item in recommends" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>
    <div>{{item.title}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends:  {
      type: Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 5px 0px;
  border-bottom: 8px #eeeeee solid;
  width: 100%;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
