<template>
  <div class="indent">
    <div class="title">
      <i class="iconfont icon-fanhui" @click='back'></i>
      <p class="t-text">我的订单</p>
    </div>
    <ul class="nav">
      <li>全部</li>
      <li>已支付</li>
      <li>待支付</li>
      <li>已取消</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'indent',
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss">
  .indent{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    background:#fff;
    .title{
      position: relative;
      width:100%;
      height: 50px;
      line-height: 50px;
      font-size:16px;
      background:#fff;
      .icon-fanhui{
        position: absolute;
        top:0;
        left: 20px;
        font-size: 20px;
      }
      p{
        width:100%;
        text-align: center;
        font-weight: 700;
      }
    }
  }
 .text{
  font-size:20px;
  color:#00ff00;
 }
</style>
