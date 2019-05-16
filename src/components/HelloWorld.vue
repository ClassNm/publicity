<template>
    <div>
      <Menu></Menu>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
</template>


<script>
// 头部导航
import Menu from './common/Menu'
// 轮播图
import Carousel from './common/Carousel'
// 底部
import Footer from './common/Footer'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // value1: 0
    }
  },
  components:{
    Menu,
    Carousel,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
