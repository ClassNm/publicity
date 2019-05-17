<template>
    <div>
        <Carousel autoplay v-model="value1" loop class="box">
          <CarouselItem>
              <div class="demo-carousel">
                <img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0B/0F/ChMlWlyAyJGIGkF2AAikQSWLnioAAIp0AFNg4YACKRZ311.jpg" alt="">
              </div>
          </CarouselItem>
          <CarouselItem>
              <div class="demo-carousel">
                <img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0B/0F/ChMlWVyAyJGIKFDCAB2k7V-yOOIAAIp0AFWJ98AHaUF656.jpg" alt="">
              </div>
          </CarouselItem>
          <CarouselItem>
              <div class="demo-carousel">
                <img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0B/0F/ChMlWVyAyJKIcSwkABOKe7VxvsIAAIp0AFzzOQAE4qT099.jpg" alt="">
              </div>
          </CarouselItem>
          <CarouselItem>
              <div class="demo-carousel">
                <img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0B/0F/ChMlWlyAyI-IN6eeAAva1cdvUO0AAIp0ADpDIQAC9rt777.jpg" alt="">
              </div>
          </CarouselItem>
</Carousel>
    </div>
</template>

<script>
export default {
    data () {
        return {
        value1: 0
        }
  },
}
</script>
<style lang="less">
.box{
    // width: 100%;
    height: 550px;
    .demo-carousel{
        // width: 100%;
        img{
            width: 100%;
            height: 500px;
        }
    }
}
.box{
    // width: 100%;
    height: 550px;
    .demo-carousel{
        // width: 100%;
        img{
            width: 100%;
            height: 500px;
        }
    }
}

</style>


