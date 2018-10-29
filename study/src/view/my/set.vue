<template>
  <div class="set">
    <div class="set-top">
      <span class="iconfont icon-fanhui"></span>
      <p class="set-top-name">设置</p>
    </div>
    <div class="set-content">
      <div class="set-box">
        <span class="box-title">收货地址</span>
        <span class="iconfont icon-iconfonti"></span>
      </div>
      <div class="set-box">
        <span class="box-title">声纹认证</span>
        <div class="box-title-right">
          <span class="box-text">未认证</span>
          <span class="iconfont icon-iconfonti"></span>
        </div>
      </div>
      <div class="set-box box1">
        <span class="box-title">仅Wi-Fi下使用</span>
        <span class="iconfont icon-iconfonti"></span>
      </div>
      <div class="set-box">
        <span class="box-title">切换到3G/4G网络时提醒我</span>
        <span class="iconfont icon-iconfonti"></span>
      </div>
      <div class="set-box box1">
        <span class="box-title">清理缓存</span>
        <div class="box-title-right">
          <span class="box-text">0.2M</span>
          <span class="iconfont icon-iconfonti"></span>
        </div>
      </div>
      <div class="set-box">
        <span class="box-title">异常日志上报</span>
        <span class="iconfont icon-iconfonti"></span>
      </div>
      <div class="set-box">
        <span class="box-title">选择下载位置</span>
        <span class="box-text">手机储存</span>
      </div>
      <div class="set-box">
        <span class="box-title">新版本更新</span>
        <span class="box-text">当前v6.16.03</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'set'
}
</script>
<style lang = 'scss'>
  .set {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    .set-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
      margin-left: 10px;
      .icon-fanhui {
        font-size: 20px;
      }
      .set-top-name {
        font-size: 20px;
        margin-left: 40%;
      }
    }
    .set-content {
      display: flex;
      flex-direction: column;
    }
    .set-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 30px;
      margin-left: 15px;
      justify-content: space-between;
      width: 90%;
      border-bottom: 1px solid #f8f8f8;
      padding-bottom: 25px;
      .box-title {
        font-size: 20px;
      }
      .box-title-right {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .icon-iconfonti {
        font-size: 30px;
      }
    }
  }
</style>
