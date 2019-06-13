<template>
    <div class="box">
          <h1>答题页面</h1>
          <RadioGroup vertical v-model="vertical" @on-change="ccc">
              <div v-for="(item,i) in title" :key="i" :value="item.value">
                    <h3>{{item.pig}}</h3>
                    <!-- <li v-for="(item,i) in fot" :key="i" :value="item.value" > -->
                    
                    <Radio :label="item.value" v-model="item.id">
                      <Icon type="social-apple"></Icon>
                      <span >{{item.value}}</span>
                    </Radio>
                    <Radio :label="item.value1" :v-model="item.id">
                      <Icon type="social-apple"></Icon>
                      <span >{{item.value1}}</span>
                    </Radio>
                    <Radio :label="item.value2" v-model="vertical2">
                      <Icon type="social-apple"></Icon>
                      <span >{{item.value2}}</span>
                    </Radio>

                    <!-- </li> -->
              </div>
              
                
              
          </RadioGroup>
          <!-- <Page :total="100" :page-size="pageSize" @on-change="handlePage" /> -->
    </div>
</template>

<script>
export default {
    data () {
      return {
        // 每页的数据量
          pageSize: 10,
          vertical: '',
          vertical1: '',
          vertical2: '',
          vertical3: '',
          title:[
            {
              pig:"1,你最喜欢哪一个",
              value:"喜欢",
              value1:"不喜欢",
              value2:"还可以",
              id:1,
            },
            {
              pig:"2,你最喜欢哪一个",
              value:"喜欢",
              value1:"不喜欢",
              value2:"还可以",
              id:2,
            },
            {
              pig:"3,你最喜欢哪一个",
              value:"喜欢",
              value1:"不喜欢",
              value2:"还可以",
              id:3,
            },
            {
              pig:"4,你最喜欢哪一个",
              value:"4"
            },
            {
              pig:"5,你最喜欢哪一个",
              value:"5"
            },
            {
              pig:"6,你最喜欢哪一个",
              value:"6"
            },
            {
              pig:"7,你最喜欢哪一个",
              value:"7"
            },
            {
              pig:"8,你最喜欢哪一个",
              value:"8"
            },
            {
              pig:"9,你最喜欢哪一个",
              value:"9"
            },
            {
              pig:"10,你最喜欢哪一个",
              value:"10"
            },
            {
              pig:"11,你最喜欢哪一个",
              value:"11"
            },
            {
              pig:"12,你最喜欢哪一个",
              value:"12"
            },
            {
              pig:"13,你最喜欢哪一个",
              value:"13"
            },
            {
              pig:"14,你最喜欢哪一个",
              value:"14"
            },
            {
              pig:"15,你最喜欢哪一个",
              value:"15"
            },
            {
              pig:"16,你最喜欢哪一个",
              value:"16"
            },
            {
              pig:"17,你最喜欢哪一个",
              value:"17"
            },
            {
              pig:"18,你最喜欢哪一个",
              value:"18"
            },
            {
              pig:"19,你最喜欢哪一个",
              value:"19"
            },
            {
              pig:"20,你最喜欢哪一个",
              value:"20"
            },

          ],
          
          fot:[
            {
              name: "苹果",
              value:  "1"
            },
            {
              name: "香蕉",
              value:  "2"
            },
            {
              name: "菠萝",
              value:  "3"
            },
            {
              name: "橘子",
              value:  "4"
            },
            {
              name: "梨",
              value:  "5"
            },
          ]
      }
    },
    computed:{
      // handlePage(){
      //   console.log(111)
      // }
     
      // console.log(this.vertical);
    },
    mounted(){
      // console.log(222);
      // console.log(this.data.fot)
      // console.log(this.data.vertical);
    },
    methods:{
          // handlePage(value) {
          //     this.pageNum = value
          //     this.getTeacherMessages()
          // },
          ccc(data){
              // console.log(data);
              console.log(this.vertical)
          }
        // handlePageSize(value) {
        //   this.pageSize = value
        //   this.getTeacherMessages()
        // },
      // btn(){
      //   console.log(111);
      //   // console.log(this.data.vertical);
      // }
    }
}
</script>
<style scoped lang="less">
    .box{
        margin: 100px auto
    }
    li{
      list-style: none;
    }

</style>


