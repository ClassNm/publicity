<template>
    <div>
        <div>
            <Icon type="md-boat" size="30" />
            <h1 class="Rep">{{Report}}</h1>
            <Spin style="display:'inline-block'"></Spin>
        </div>
        <Report class="header"></Report>  
        <!-- 第一部分 -->
        <!-- <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">{{reom}}</p>
                <p v-for="(item,i) in test" :key="i">{{i+1}},{{item.name}}</p>
            </Card>
        </div> -->
        <!-- 第二部分 -->
        <!-- <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">{{reomT}}</p>
                <p v-for="(item,i) in testT" :key="i">{{i+1}},{{item.name}}</p>
            </Card>
        </div> -->
        <!-- 第三部分 -->
        <!-- <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">{{reomThr}}</p>
                <p v-for="(item,i) in testThr" :key="i">{{i+1}},{{item.name}}</p>
            </Card>
        </div> -->
        
        <Tabs value="name1" class="boxT">
            <TabPane :label="reom" name="name1">
                <span v-for="(item,i) in utmost" :key="i" class="spanL">{{item}}</span>
            </TabPane>
            <TabPane :label="reomT" name="name2">
                <span v-for="(item,i) in very" :key="i" class="spanL">{{item}}</span>
            </TabPane>
            <TabPane :label="reomThr" name="name3">
                <span v-for="(item,i) in common" :key="i" class="spanL">{{item}}</span>
            </TabPane>
        </Tabs>





        <!-- 滑动按钮 -->
        <BackTop></BackTop>
        <!-- <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button> -->
    </div>
</template>

<script>
import axios from 'axios'
// 柱状图
import Report from './Report'
export default {
    data(){
        return{
            // 登录过的id
            Report:"测试报告结果",
            reom:"极力推荐",
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
            reomT:"很推荐",
            testT:[
                {
                    name : "法学理论"
                },
                {
                    name : "法律史"
                },
                {
                    name : "宪法学与行政法学"
                },
                {
                    name : "刑法学"
                },
                {
                    name : "诉讼法学"
                },
                {
                    name : "经济法学"
                },
                {
                    name : "环境与资源保护法学"
                },
                {
                    name : "军事法学"
                },
                {
                    name : "国际政治"
                },
                {
                    name : "社会学"
                },
            ],
            reomThr:"推荐",
            testThr:[
                {
                    name : "基础数学"
                },
                {
                    name : "计算数学"
                },
                {
                    name : "应用数学"
                },
                {
                    name : "粒子物理与原子核物理"
                },
                {
                    name : "凝聚态物理"
                },
                {
                    name : "声学"
                },
                {
                    name : "光学"
                },
                {
                    name : "无线电物理"
                },
                {
                    name : "大气物理学与大气环境"
                },
                {
                    name : "物理海洋学"
                },
            ],
            // 3块专业
            utmost:[],
            very:[],
            common:[]
        }
    },
    created(){
        this.handleSpinShow();
        let data = this.$route.query.id;
        axios.post('http://192.168.1.100:8080/AssessScore/showResult',
        data,
        {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        )
        .then((res)=>{
            // console.log(res.data)
            // 拿到返回的3块专业
            let arr = res.data;
            this.utmost = arr[0],
            this.very = arr[1],
            this.common = arr[2]
            // console.log(arr[0])
            // console.log(arr[1])
         }),(err)=>{
              console.log(err)
        }
    },
    computed:{
        
    },
    components:{
        Report
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


    .header{
        /* text-align: center */
    }
    .Rep{
        margin: 20px 0;
        color: red;
        display: inline-block;
    }

    /* 初始化显示的跳转等待默认样式 */
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }

    .boxT{
        width: 500px;
        margin: 0 auto
    }
    .spanL{
        display: block;
        margin: 0 auto;
    }
    .boxT{
        background: rgb(194, 201, 190)
    }
</style>
