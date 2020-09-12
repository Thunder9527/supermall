<template>
<div class="user">
  <a href="">
    <slot name="user-icon">
      <img src="@/assets/img/common/user.png" alt="" class="privateImage-svg">
    </slot>
  </a>
  <div class="aaa">
    <slot><div>登录/注册</div></slot>
    <slot><div class="bbb">暂无绑定手机号</div></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
.user{
  height: 100px;
  background-color:#ff8198;

}
.privateImage-svg{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  float: left;
  margin:5px;
}
.aaa{
padding-top: 20px;
  color: white;
}
.bbb{
  font-size: 14px;
  padding:5px;
}
</style>
