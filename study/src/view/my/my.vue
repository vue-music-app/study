<template>
  <div class="my">
    <span class="iconfont icon-shezhi" @click="setClick"></span>
    <div class="myTop">
      <div class="myTop-top">
        <img class="poper" src="../../assets/logo.png" alt="" srcset="">
        <div class="top-right">
          <span class="name">ruidi</span>
          <p class="text">编辑个人资料</p>
        </div>
      </div>
      <div class="myTop-bot">
        <p class="money">2758</p>
        <div class="bot-right">
          <span class="monet-title">金币</span>
          <span class="iconfont icon-iconfonti"></span>
        </div>
      </div>
    </div>
    <div class="my-centent">
      <div class="centent-left">
        <span class="iconfont icon-wodedingdan"></span>
        <span class="centent-left-name">我的订单</span>
      </div>
      <div class="centent-right">
        <span class="iconfont icon-wodeshoucang"></span>
        <span class="centent-right-name">我的收藏</span>
      </div>
    </div>
    <div class="centent-img">
      <p class="img-text">邀请好友入学,获得反学费奖励</p>
      <div class="img-right">
        <span class="iconfont icon-iconfonti"></span>
      </div>
    </div>
    <div class="my-bottom">
      <div class="bottom-box">
        <div class="box-left">
          <span class="iconfont icon-qiahao"></span>
          <span class="bottom-text">我的余额</span>
        </div>
        <div class="box-right">
          <span class="iconfont icon-iconfonti"></span>
        </div>
      </div>
      <div class="bottom-box">
        <div class="box-left">
          <span class="iconfont icon-qiahao"></span>
          <span class="bottom-text">我的余额</span>
        </div>
        <div class="box-right">
          <span class="iconfont icon-iconfonti"></span>
        </div>
      </div>
      <div class="bottom-box">
        <div class="box-left">
          <span class="iconfont icon-qiahao"></span>
          <span class="bottom-text">我的余额</span>
        </div>
        <div class="box-right">
          <span class="iconfont icon-iconfonti"></span>
        </div>
      </div>
      <div class="bottom-box">
        <div class="box-left">
          <span class="iconfont icon-qiahao"></span>
          <span class="bottom-text">我的余额</span>
        </div>
        <div class="box-right">
          <span class="iconfont icon-iconfonti"></span>
        </div>
      </div>
      <div class="bottom-box">
        <div class="box-left">
          <span class="iconfont icon-qiahao"></span>
          <span class="bottom-text">我的余额</span>
        </div>
        <div class="box-right">
          <span class="iconfont icon-iconfonti"></span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'my',
  methods: {
    setClick () {
      this.$router.push({
        path: '/my/set'
      })
    }
  }
}
</script>

<style lang = 'scss'>
  .my {
    height: 100vh;
    .icon-shezhi {
      font-size: 30px;
      position: absolute;
      top: 18px;
      right: 28px;
    }
    .myTop {
      margin-top: 65px;
      margin-left: 38px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #f5f5f5;
      padding-bottom: 30px;
      margin-right: 20px;
      .myTop-top {
        display: flex;
        flex-direction: row;
        .poper {
          width: 73px;
          height: 73px;
          border-radius: 50%;
        }
        .top-right {
          margin-top: 10px;
          margin-left: 5px;
          .name {
            font-size: 23px;
            font-weight: 600;
          }
          .text {
            margin-top: 15px;
            color: #9c9c9c;
          }
        }
      }
      .myTop-bot {
        margin-top: 10px;
        .money {
          font-size: 23px;
          color: #fa2c34;
          margin-right: 20px;
        }
        .bot-right {
          margin-top: 15px;
          display: flex;
          flex-direction: row;
          align-items: center;
          .monet-title {
            color: #999;
          }
          .icon-iconfonti {
            font-size: 25px;
            color: #bdbdbd;
          }
        }
      }
    }
    .my-centent {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      text-align: center;
      margin-top: 30px;
      .centent-left {
        display: flex;
        flex-direction: column;
        .icon-wodedingdan {
          font-size: 25px;
          color: #ee3935;
          font-weight: 600;
        }
        .centent-left-name {
          font-size: 18px;
          padding-top: 10px;
        }
      }
      .centent-right {
        display: flex;
        flex-direction: column;
        .icon-wodeshoucang {
          font-size: 25px;
          color: #ee3935;
          font-weight: 600;
        }
        .centent-right-name {
          font-size: 18px;
          padding-top: 10px;
        }
      }
    }
    .centent-img {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-top: 30px;
      width: 80%;
      height: 80px;
      border-radius: 40px;
      background: #fffaf4;
      margin-left: 10px;
      padding-left: 50px;
      .img-text {
        font-size: 18px;
        color: #ff002d;
      }
      .img-right {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background:#fdebe0;
        text-align: center;
        line-height: 30px;
        .icon-iconfonti {
          font-size: 24px;
          color: #ff6e30;
        }
      }
    }
    .my-bottom {
      display: flex;
      flex-direction: column;
      .bottom-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 2px solid #f8f8f8;
        padding-bottom: 20px;
        width: 90%;
        margin-left: 20px;
        margin-top: 30px;
        position: relative;
        .box-left {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 30px;
          font-size: 20px;
          .bottom-text {
            margin-left: 10px;
          }
        }
        .box-right {
          position: absolute;
          right: 10px;
          .icon-iconfonti {
            font-size: 30px;
          }
        }
      }
    }
  }
</style>
