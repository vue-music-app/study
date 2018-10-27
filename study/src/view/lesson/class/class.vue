<template>
  <div class="box">
    <div class="header-scroll">
      <scroll>
        <ul class="headnav">
          <li class="active">课</li>
          <li>专题课</li>
          <li>讲座</li>
          <li>1对1</li>
          <li>录播课</li>
          <li>高数</li>
          <li>计算机</li>
          <li>前端</li>
        </ul>
      </scroll>
      <div class="filter">
        高二
        <span class="iconfont icon-xiajiantou"></span>
      </div>
    </div>
    <div class="slider">
      <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <div class="search">
        <span class="iconfont icon-fangdajing"></span>
        <label>
          <input type="text" placeholder="搜索老师/课程">
        </label>
         <span class="iconfont icon-voice_icon"></span>
      </div>
    </div>
    <div class="class">
      <div class="class-nav">
          <scroll>
            <ul class="nav-scroll">
              <li class="active">全部</li>
              <li>数学</li>
              <li>语文</li>
              <li>英语</li>
              <li>物理</li>
              <li>化学</li>
              <li>生物</li>
              <li>地理</li>
            </ul>
        </scroll>
      </div>
      <item class="item-scroll"></item>
      <div class="filter">
        <span class="iconfont icon-shaixuan"></span>
        筛选
      </div>
    </div>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import item from '@/components/item'
export default {
  name: 'class',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        grabCursor: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    item
  },
  mounted () {}
}
</script>

<style lang='scss' scoped>
@import 'swiper/dist/css/swiper.css';
  .box{
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction: column;
    .header-scroll{
      .scroll{
        width:80vw;
        overflow:hidden;
        margin-left:10px;
        .headnav{
          width:120vw;
          height:40px;
          line-height:40px;
          display: flex;
          flex-direction: row;
          li{
            color:#ccc;
            padding:0 10px;
            font-size:14px;
          }
          li.active{
            color:#000;
          }
        }
      }
      .filter{
        position:fixed;
        top:13px;
        right:10px;
        font-size:10px;
        color:#ccc;
        span{
          font-size:13px;
        }
      }
    }
    .slider{
      width:100vw;
      height:265px;
      background: pink;
      position:relative;
      .swiper-container{
        height:265px !important;
        img{
          display:block;
          width:100%;
          height:100%;
        }
      }
      .search{
        width:100vw;
        height:60px;
        background: rgba(0,0,0,.4);
        box-sizing:border-box;
        padding:15px 30px;
        position:absolute;
        bottom:0;
        left:0;
        z-index:100;
        input{
          box-sizing:border-box;
          background: #fff;
          padding-left:30px;
          color:#999;
          height:30px;
          border:none;
          outline:none;
          border-radius:10px;
          width:100%;
          font-size:12px;
        }
        .iconfont{
          font-size:13px;
          color:#656565;
          position:absolute;
          top:24px;
        }
        .icon-fangdajing{
          left:40px;
        }
        .icon-voice_icon{
          right:40px;
        }
      }
    }
    .class{
      flex:1;
      margin-bottom:45px;
      width:100vw;
      box-sizing:border-box;
      padding:10px;
      position:relative;
      display:flex;
      flex-direction: column;
      .class-nav{
        width:78vw;
        height:20px;
        overflow:hidden;
        .scroll{
          width:100%;
          height:20px;
          line-height:20px;
          font-size:13px;
          .nav-scroll{
            width:100vw;
            display:flex;
            flex-direction: row;
            li{
              padding:0 10px;
              color:#838383;
            }
            li.active{
              color:red;
              font-weight:600;
            }
          }
        }
      }
      .filter{
        font-size:13px;
        height:30px;
        line-height:30px;
        position:absolute;
        top:5px;
        right:15px;
        color:#838383;
      }
      .item-scroll{
        flex:1;
        overflow:hidden;
      }
    }
  }
</style>
