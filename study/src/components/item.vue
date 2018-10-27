<template>
  <scroll>
    <ul class="list">
      <li>
        <div class="title">
          <span>英</span>
          <em>高二英语直播班专区</em>
        </div>
        <div class="price">
          ￥<span>560</span>起
        </div>
        <div class="info">
          <div>共15期课程可选</div>
          <div>7744人已购买</div>
        </div>
      </li>
      <li>
        <div class="title">
          <span>英</span>
          <em>高二英语直播班专区</em>
        </div>
        <div class="price">
          ￥<span>560</span>起
        </div>
        <div class="info">
          <div>共15期课程可选</div>
          <div>7744人已购买</div>
        </div>
      </li>
      <li>
        <div class="title">
          <span>英</span>
          <em>高二英语直播班专区</em>
        </div>
        <div class="price">
          ￥<span>560</span>起
        </div>
        <div class="info">
          <div>共15期课程可选</div>
          <div>7744人已购买</div>
        </div>
      </li>
    </ul>
  </scroll>
</template>

<script>
export default {
  name: 'item'
}
</script>

<style lang='scss' scoped>
  .list{
    box-sizing:border-box;
    padding:0 30px;
    li{
      box-sizing:border-box;
      padding-bottom:10px;
      border-bottom:1px solid #efefef;
      .title{
        box-sizing:border-box;
        height:55px;
        font-size:15px;
        color:#000;
        display:flex;
        flex-direction: row;
        align-items: center;
        span{
          box-sizing:border-box;
          display:block;
          width:20px;
          height:20px;
          line-height:20px;
          text-align:center;
          color:red;
          font-size:12px;
          border:1px solid red;
          margin-right:15px;
        }
      }
      .price{
        box-sizing:border-box;
        height:20px;
        line-height:20px;
        text-align:right;
        font-size:14px;
        color:red;
        span{
          font-size:25px;
        }
      }
      .info{
        box-sizing:border-box;
        margin-top:5px;
        font-size:12px;
        height:15px;
        color:#838383;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
</style>
