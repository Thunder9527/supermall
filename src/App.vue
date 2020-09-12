<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="fix"></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar,
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  #app {
    position: relative;
  }
  .fix{
    position: fixed;
  }
</style>
