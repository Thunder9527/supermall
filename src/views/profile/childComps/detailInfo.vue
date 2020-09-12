<template>
<div class="detail">
<div class="big"><slot name="name"></slot></div>
<div class="small"><slot name="value"></slot></div>
</div>
</template>

<script>
export default {
  name: "detailInfo"
}
</script>

<style scoped>
.detail{
flex: 1;
  text-align: center;
  align-items: center;
  padding: 10px;
  border-left:#f6f6f6 1px solid;
  border-bottom: #f6f6f6 20px solid;
}
.big{
  font-weight: bold;
  color: #f13e3a;
  font-size: 27px;
  padding: 5px;
}
.small{
  font-size: 15px;
  padding: 5px;
}
</style>
