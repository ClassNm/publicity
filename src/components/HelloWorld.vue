<template>
    <div class="box">
      <span class="size">职业生涯测评系统</span>
      <router-link :to="{path:'/Login'}">
        <Button type="success" class="but">跳转登录页</Button>
      </router-link>
      
    </div>
</template>


<script>
// 头部导航
// import Login from './common/Login'
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
    // Login,
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
    .but{
      width: 200px;
      height: 30px;
    }

     @media (min-width: 1200px) { 
       .box{
          text-align: center;
          margin-top: 300px;
        }
        .size{
          font-size: 80px;
          color: red;
          display: block;
          width: 100%;
        }
     }
     @media screen and (max-width: 1200px) { 
        .box{
          text-align: center;
          margin-top: 150px;
        } 
        .size{
          font-size: 70px;
          color: red;
          display: block;
          width: 100%;
        }
    }    
    @media screen and (max-width: 901px) { 
        .box{
          text-align: center;
          margin-top: 100px;
        }
        .size{
          font-size: 40px;
          color: red;
          display: block;
          width: 100%;
        }
    } 


</style>
