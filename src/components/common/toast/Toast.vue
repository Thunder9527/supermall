<template>
<div class="toast" v-show="isshow">
  <div>{{ismessage}}</div>
</div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    ismessage: {
      type: String,
      default: ''
    },
    isshow: {
      type:Boolean,
      default: false
    }
  },
  data(){
    return{
      message: '',
      isShow: false
    }
  },
  methods: {
    Show :function (message='默认文字',duration = 2000) {
      this.isshow = true;
      this.ismessage = message
      setTimeout(()=>{
        this.isshow = false;
        this.ismessage = ''
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 8px 10px;
  color: #ffffff;
  background-color: rgba(0,0,0,.35);
  z-index: 999;
}
</style>
