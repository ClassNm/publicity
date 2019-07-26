<template>
    <div>
        <div>
            <Icon type="md-boat" size="30" />
            <h1 class="Rep">{{Report}}</h1>
            <Spin style="display:'inline-block'"></Spin>
        </div>
        <Header></Header>
        <Divider class="segmentation" size="default"/>
        <Radar></Radar>
        <Roundness></Roundness>
        <Major></Major>
        <!-- <Report class="header"></Report>   -->
        <!-- 第一部分 -->
        <!-- <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">{{reom}}</p>
                <p v-for="(item,i) in test" :key="i">{{i+1}},{{item.name}}</p>
            </Card>
        </div> -->   
        <!-- <Tabs value="name1" class="boxT">
            <TabPane :label="reom" name="name1" class="fit" type="line" style="font-size:25px;" size="25px">
                <span v-for="(item,i) in utmost" :key="i" class="spanL">{{item}}</span>
            </TabPane>
            <TabPane :label="reomT" name="name2"  class="fit">
                <span v-for="(item,i) in very" :key="i" class="spanL">{{item}}</span>
            </TabPane>
            <TabPane :label="reomThr" name="name3"  class="fit">
                <span v-for="(item,i) in common" :key="i" class="spanL">{{item}}</span>
            </TabPane>
        </Tabs> -->




        <!-- <a href="print" target="_self">打印</a> -->
        <!-- 滑动按钮 -->
        <BackTop></BackTop>
        <!-- <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button> -->
    </div>
</template>

<script>
import axios from 'axios'
// 表头 姓名 
import Header from './graph/Header'
// 柱状图
import Report from './graph/Report'
// 圆形图
import Roundness from './graph/Roundness' 
// 雷达图
import Radar from './graph/Radar'
// 专业
import Major from './graph/Major'
export default {
    data(){
        return{
            // 登录过的id
            Report:"测试报告结果",
            reom:"非常适合",
            test:[
                {
                    name : "马克思主义哲学"
                },
                {
                    name : "中国哲学"
                },
                {
                    name : "外国哲学"
                },
                {
                    name : "逻辑学"
                },
                {
                    name : "伦理学"
                },
                {
                    name : "美学"
                },
                {
                    name : "宗教学"
                },
                {
                    name : "科学技术哲学"
                },
                {
                    name : "政治经济学"
                },
                {
                    name : "经济史"
                },
            ],
            reomT:"比较适合",
            reomThr:"一般适合",
            // 3块专业
            utmost:[],
            very:[],
            common:[]
        }
    },
    created(){
        this.handleSpinShow();
        // let data = this.$route.query.id;
        // axios.post('http://192.168.1.100:8080/AssessScore/showResult',
        // data,
        // {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        // )
        // .then((res)=>{
        //     let arr = res.data;
        //     this.utmost = arr[0],
        //     this.very = arr[1],
        //     this.common = arr[2]
        //  }),(err)=>{
        //       console.log(err)
        // }
    },
    components:{
        Header,
        Report,
        Roundness,
        Radar,
        Major
    },
    methods:{
        handleSpinShow () {
            this.$Spin.show();
            setTimeout(() => {
                this.$Spin.hide();
            }, 3000);
        }, 
       
    }
}
</script>

<style scoped>
    /* 为了修改Tabs的标题大小不设置 scoped 权限问题 */
    .Rep{
        margin: 20px 0;
        color: red;
        display: inline-block;
    }

    /* 初始化显示的跳转等待默认样式 */
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @media (min-width: 1200px) { 
       .boxT{
            width: 1100px;
            margin: 0 auto;
        }
        .segmentation{
            height: 3px;
            width: 800px;
            display: block;
            min-width: 1200px;
            margin: 24px auto;
        }
     }
     @media screen and (max-width: 1200px) { 
        .boxT{
            width: 800px;
            /* background: orange; */
            margin: 0 auto;
        }  
        .segmentation{
            height: 3px;
            width: 800px;
            display: block;
            min-width: 800px;
            margin: 24px auto;
        }
    }    
    @media screen and (max-width: 901px) { 
        .boxT{
            width: 500px;
            /* background: salmon; */
            margin: 0 auto;
        } 
    } 
    .spanL{
        display: block;
        margin: 0 auto;
        font-size: 25px;
        text-align: left;
    }
    .ivu-tabs-nav .ivu-tabs-tab{
        font-size: 25px;
    }
</style>
