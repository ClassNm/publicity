<template>
    <div class="box">
      <span class="size">职业生涯测评系统</span>
      <router-link :to="{path:'/Login'}">
        <!-- <button class="but">跳转登录页</button> -->
        <Button type="success" class="but">跳转登录页</Button>
        <!-- <Button type="primary" class="but">跳转登录页</Button> -->
      </router-link>
      
      <!-- <Login></Login> -->
      <!-- <Carousel></Carousel> -->
      <!-- <Footer></Footer> -->
    </div>
</template>


<script>
// 头部导航
import Login from './common/Login'
// 轮播图
// import Carousel from './common/Carousel'
// 底部
// import Footer from './common/Footer'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // value1: 0
    }
  },
  components:{
    Login,
    // Carousel,
    // Footer
  },
  methods:{
    caruse(){
      this.router.push('/Login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .box{
      text-align: center;
      margin-top: 400px;
    }
    .size{
      font-size: 80px;
      // background: red;
      color: red;
      display: block;
      width: 100%;
    }
    .but{
      width: 200px;
      height: 30px;
    }
</style>
