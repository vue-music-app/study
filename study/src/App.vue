<template>
  <div id="app">
    <router-view/>
      <ul class="navbar">
        <li>
          <router-link to='/lesson'>
            <span class="iconfont icon-jiemubofang icon"></span>
            <span class="text1">选课</span>
          </router-link>
        </li>
        <li>
          <router-link to='/study'>
            <span class="iconfont icon-xuexizhongxin icon"></span>
            <span class="text1">学习</span>
          </router-link>
        </li>
        <li>
          <router-link to='/find'>
            <span class="iconfont icon-weibiaoti2fuzhi15 icon"></span>
            <span class="text1">发现</span>
          </router-link>
        </li>
        <li>
          <router-link to='/my'>
            <span class="iconfont icon-wo icon"></span>
            <span class="text1">我</span>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
  .navbar{
    position:fixed;
    bottom:0px;
    left:0;
    width:100vw;
    display:flex;
    flex-direction: row;
    background: #fff;
    justify-content: space-around;
    li{
      a{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color:#ccc;
        .icon{
          font-size:25px;
        }
        .text1{
          font-size:10px;
          line-height:20px;
        }
      }
      a.active{
        span{
          color:red;
        }
      }
    }
  }
</style>
