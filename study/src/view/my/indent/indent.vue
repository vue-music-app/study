<template>
  <div class="indent">
    <div class="title">
      <i class="iconfont icon-fanhui" @click='back'></i>
      <p class="t-text">我的订单</p>
    </div>
    <ul class="nav">
      <li class="active">全部</li>
      <li>已支付</li>
      <li>待支付</li>
      <li>已取消</li>
    </ul>
    <scroll class="indent-list">
      <ul>
        <li>
          <div class="indent-top">
            <span class="indent-num">订单号: 2018082115553222250769</span>
            <span class="indent-text">已支付</span>
          </div>
          <div class="indent-middle">
            <div class="indent-content">
              <span class="red-text">语</span>
              <span class="indent-content-text">【书法课】一周好字</span>
              <div class="lecturer">
                <div class="lecturer-pic"><img src="../../../assets/pic.jpg" alt="图片"></div>
                <div class="lecturer-text">
                  <p class="ke">授课</p>
                  <p class="name">邓元杰</p>
                </div>
              </div>
            </div>
            <div class="welfare">
              <span class="text-one">福利:</span>
              <span class="text-two">暂无实物福利信息</span>
              <i></i>
            </div>
            <div class="price">
              <span>实付款: ￥99</span>
            </div>
            <span class="btn">订单详情</span>
          </div>
        </li>
       <li>
          <div class="indent-top">
            <span class="indent-num">订单号: 2018082115553222250769</span>
            <span class="indent-text">已支付</span>
          </div>
          <div class="indent-middle">
            <div class="indent-content">
              <span class="red-text">语</span>
              <span class="indent-content-text">【书法课】一周好字</span>
              <div class="lecturer">
                <div class="lecturer-pic"><img src="../../../assets/pic.jpg" alt="图片"></div>
                <div class="lecturer-text">
                  <p class="ke">授课</p>
                  <p class="name">邓元杰</p>
                </div>
              </div>
            </div>
            <div class="welfare">
              <span class="text-one">福利:</span>
              <span class="text-two">暂无实物福利信息</span>
              <i></i>
            </div>
            <div class="price">
              <span>实付款: ￥99</span>
            </div>
            <span class="btn">订单详情</span>
          </div>
        </li>
        <li>
          <div class="indent-top">
            <span class="indent-num">订单号: 2018082115553222250769</span>
            <span class="indent-text">已支付</span>
          </div>
          <div class="indent-middle">
            <div class="indent-content">
              <span class="red-text">语</span>
              <span class="indent-content-text">【书法课】一周好字</span>
              <div class="lecturer">
                <div class="lecturer-pic"><img src="../../../assets/pic.jpg" alt="图片"></div>
                <div class="lecturer-text">
                  <p class="ke">授课</p>
                  <p class="name">邓元杰</p>
                </div>
              </div>
            </div>
            <div class="welfare">
              <span class="text-one">福利:</span>
              <span class="text-two">暂无实物福利信息</span>
              <i></i>
            </div>
            <div class="price">
              <span>实付款: ￥99</span>
            </div>
            <span class="btn">订单详情</span>
          </div>
        </li>
      </ul>
    </scroll>
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
    .nav{
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 18px;
      li{
        float:left;
        margin-right:20px;
        font-size: 14px;
        &.active{
          color:#ff0000;
        }
      }
    }
    .indent-list{
      position: fixed;
      top: 90px;
      left: 0;
      bottom:0;
      width: 100%;
      overflow: hidden;
      ul{
        width: 100%;
        background: #f9f9f9;
        li{
          width: 100%;
          margin-bottom: 15px;
          padding-bottom: 20px;
          background:#fff;
          .indent-top{
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 12px;
            color:#999999;
            border-bottom: 1px solid #dfdfdf;
            .indent-num{
              margin-left: 20px;
            }
            .indent-text{
              float:right;
              margin-right: 10px;
            }
          }
          .indent-middle{
            position: relative;
            width:100%;
            .indent-content{
              margin: 0 20px;
              padding-top: 20px;
              border-bottom: 1px solid #dfdfdf;
              .red-text{
                display: inline-block;
                width:16px;
                height:16px;
                line-height:16px;
                text-align: center;
                font-size: 12px;
                color:#ff0000;
                border-radius: 3px;
                border:1px solid #ff0000;
              }
              .white-text{
                 display: inline-block;
                width:16px;
                height:16px;
                line-height:16px;
                text-align: center;
                font-size: 12px;
                color:#fff;
                border-radius: 3px;
                background:#ff0000;
                border:1px solid #ff0000;
              }
              .indent-content-text{
                font-size: 16px;
              }
              .lecturer{
                display: flex;
                margin-top: 15px;
                .lecturer-pic{
                  width: 40px;
                  height: 40px;
                  margin-right: 10px;
                  img{
                    width: 100%;
                    height: 100;
                    border-radius: 50%;
                  }
                }
                .lecturer-text{
                  padding-top: 5px;
                  margin-bottom: 10px;
                  font-size: 12px;
                  .ke{
                    color: #999999;
                    margin-bottom: 5px;
                  }
                }
              }
            }
            .welfare{
              margin: 20px 20px 40px;
              font-size: 12px;
              color:#999999;
            }
            .price{
              font-size: 16px;
              margin: 0 20px;
              color: #6d6d6d;
            }
            .btn{
              position: absolute;
              bottom:-10px;
              right: 20px;
              width: 80px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              font-size: 13px;
              color:#686868;
              border-radius: 3px;
              border: 1px solid #afafaf;
            }
          }
        }
      }
    }
  }
 .text{
  font-size:20px;
  color:#00ff00;
 }
</style>
