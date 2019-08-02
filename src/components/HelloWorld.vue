<template>
    <div class="box">
      <span class="size">职业生涯测评系统</span>
      <router-link :to="{path:'/Login'}">
        <Button type="success" class="but">跳转登录页</Button>
      </router-link>
      
    </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods:{
    // caruse(){
    //   this.router.push('/Login')
    // }
  }
}
</script>

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
