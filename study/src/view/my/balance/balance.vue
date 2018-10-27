<template>
  <div class="balance">
    <div class="title">
      <i class="iconfont icon-fanhui" @click='back'></i>
      <p class="t-text">我的余额</p>
    </div>
    <div class='infobox'>
      <p class="infotext">账户余额</p>
      <div class="price">
        <span class="price-symbol">￥</span>
        <p class="price-num">0.00</p>
      </div>
    </div>
    <div class="list">
      <ul>
        <li>
          <div class='list-title'>
            <span class="list-title-text">账户提现</span>
            <span class="list-title-num">-961.00</span>
          </div>
          <p>账户提现</p>
          <div class="time">
            <span class="day">2018-10-03</span>
            <span class="second">16:48:07</span>
          </div>
        </li>
        <li>
          <div class='list-title'>
            <span class="list-title-text">退课收入</span>
            <span class="list-title-num active">+961.00</span>
          </div>
          <p>订单号:2018072221515562390769</p>
          <div class="time">
            <span class="day">2018-10-03</span>
            <span class="second">16:48:07</span>
          </div>
        </li>
        <li>
          <div class='list-title'>
            <span class="list-title-text">订单消费</span>
            <span class="list-title-num">-99.00</span>
          </div>
          <p>订单号:2018082115553222250769</p>
          <div class="time">
            <span class="day">2018-8-21</span>
            <span class="second">15:56:09</span>
          </div>
        </li>
        <li>
          <div class='list-title'>
            <span class="list-title-text">微信H5支付</span>
            <span class="list-title-num active">+99.00</span>
          </div>
          <p>订单号:153483814017464960769</p>
          <div class="time">
            <span class="day">2018-8-21</span>
            <span class="second">15:56:09</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  name: 'balance',
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss">
  .balance{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    width:100%;
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
    .infobox{
      width: 100%;
      height: 112px;
      color:#fff;
      padding-top: 28px;
      background:#ef783b;
      .infotext{
        width: 100%;
        text-align: center;
        font-size: 12px;
        margin-bottom: 16px;
      }
      .price{
        position: relative;
        width: 100%;
        .price-symbol{
          position: absolute;
          top:13px;
          left:50%;
          transform: translateX(-47px);
          font-size: 18px;
        }
        .price-num{
          width: 100%;
          text-align: center;
          font-size: 32px;
        }
      }
    }
    .list{
      box-sizing: border-box;
      width: 100%;
      padding:0 20px;
      ul{
        width: 100%;
        li{
          width: 100%;
          padding: 22px 0;
          border-bottom: 1px solid #f2f2f2;
          .list-title{
            display: flex;
            width: 100%;
            margin-bottom: 20px;
            .list-title-text{
              flex:1;
              font-size: 18px;
            }
            .list-title-num{
              flex:1;
              font-size: 15px;
              text-align: right;
              &.active{
                color:#ff2a31;
              }
            }
          }
          p{
            color:#999;
            font-size:10px;
            margin-bottom: 10px;
          }
          .time{
            color:#999;
            font-size:10px;
          }
        }
      }
    }
  }
</style>
