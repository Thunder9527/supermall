<template>
<div class="view">
  <slot name="img"></slot>
  <slot name="news" class="viewinfo"></slot>
</div>
</template>

<script>
export default {
  name: "viewInfo"
}
</script>

<style scoped>
.view{
  display: flex;
}
img{
  width: 40px;
  margin: 10px;
}
.viewinfo{
  flex: 1;
  border-bottom: #f6f6f6 1px solid;
  line-height: 20px;
}
</style>
