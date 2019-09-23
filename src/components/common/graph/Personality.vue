<template>
    <div class="box">
        <h1 style="margin-bottom:60px;">第二部分:职业人格测验结果</h1>
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;">（一）测验概要</span>
        <div style="text-align:left;display:block;font-size:18px;margin-bottom:50px;margin-top:20px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四维人格测验从心理倾向、信息偏好、认知风格、行为方式四个维度，将个体人格分为16种类型，并对应到21种职业类别，判断人格类型与职业类别的匹配程度。
        </div>
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;">（二）测试结果</span>
        <div style="text-align:left;display:block;font-size:18px;margin-top:20px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你在该人格测验中四个维度的得分情况如下：</div>
        <div id="Radar" class="Repor"></div>
        <span style="text-align:left;display:block;font-size:16px;font-weight:bolder;margin-top:50px;">
            根据以上得分，你的人格类型属于【{{typeTit}}】
        </span>
        <span style="text-align:left;display:block;font-size:16px;font-weight:bolder;margin-top:30px;">
            符合程度:{{height}}
        </span>
        <span style="text-align:left;display:block;font-size:18px;font-weight:bolder;margin-top:50px;">基本描述</span>
        <div style="text-align:left;display:block;font-size:16px;margin-top:20px;margin-left:30px;">
            {{objectTit}}
        </div>
        <ul style="margin-top:50px;margin-bottom:50px;">
            <h3 style="margin-bottom:30px;">主要特征</h3>
            <li v-for="(item,i) in object1" :key="i">{{item}}</li>
        </ul>
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;">（三）适合的职业类别</span>
        <ul style="margin-top:50px;margin-left:20px;">
            <h3 style="margin-bottom:30px;">适合的职业类别</h3>
            <li v-for="(item,i) in personalityType" :key="i">{{item}}</li>
        </ul>
        <!-- <span style="margin-top:50px;text-align:left;display:block;font-size:20px;font-weight:bolder;">三、代表人物</span>
        <div v-for="(item,i) in ImgLengt" :key="i" style="display:inline-block;width: 200px;margin-right: 100px;margin-top:100px;">
            <img  :src="item.url" alt="">
            <h1 style="font-size:20px;margin: 0 0 15px 0;">{{item.name}}</h1>
        </div> -->


        <!-- <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:80px;">四、你感兴趣的职业类别与人格类型的匹配度</span>
        <Table height="200" :columns="columns1" :data="data2" style="margin-top:50px;"></Table>
        <div style="text-align:left;display:block;font-size:17px;margin-top:50px;margin-bottom:50px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你感兴趣的职业类别与人格类别不匹配，下面是一些你感兴趣的程度较低，但与你的人格类型相匹配的职业类别。对于每一种职业类别，请在其所包含的学科中，选出自己想学的1-3个学科：
        </div>
        <Table border :columns="columns2" :data="data1"></Table> -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            objectTit:"",
            typeTit:"",
            height:"",
            personalityType:[],
            object1:[],
            ImgLengt:[],
        }
    },
    mounted(){
        // 调用echarts的方法实例  防止出现异步操作
        this.drawLine();
        // this.describeTit();
        this.titdata();
        this.titdataMbt();
    },
    methods:{
        titdata(){
            // let data = this.$route.query.id;
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreMbti/show_mbti',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.objectTit = res.data.object;
                this.typeTit = res.data.typ;
                this.personalityType = res.data.personalityType.split(' ;');
                this.object1 = res.data.object1.split('。');
             }),(err)=>{
                console.log(err)
            }
        },
        titdataMbt(){
            // let data = this.$route.query.id;
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreMbti/show_fuhedu',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                // console.log(res.data,'aaa')
                this.height = res.data;
             }),(err)=>{
                console.log(err)
            }
        },
         // echarts调用方法 的案例
        drawLine(){
            var myChart = this.$echarts.init(document.getElementById('Radar'));//获取容器元素
            myChart.setOption({
                
                    tooltip: {},
                    title: {
                        // text: '四维人格测验得分模型',
                    },
                    radar: {
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                        }
                        },
                        indicator: [
                         { name: '心理倾向', max: 40},
                        { name: '行为方式', max: 40},
                        { name: '认知风格', max: 40},
                        { name: '信息偏好', max: 40},
                        // 最大值20
                        ]
                    }
            })
            // 处理echarts异步操作 copy的官网实例
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreMbti/mbti_num',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res) => {
                this.score = res.data;
                myChart.setOption({
                     series: [{
                        name: '四维人格测验得分模型',
                        type: 'radar',
                        data : [
                            {
                                value : this.score,
                                name : '四维人格测验得分模型'
                            }
                        ]
                    }]
                })
            })
        },
         // 信息
        describeTit(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreMbti/show_mbti',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                let typ = res.data.typ;
                // this.imgMeth(typ);
             }),(err)=>{
                console.log(err)
            }
        },
        imgMeth(index){
            let data = index;
            axios.post('http://47.104.245.242:8085/AssessPictures/show_picture',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.ImgLengt = res.data;
            })
        }
    }
}
</script>

<style scoped>
    ul,li{
        list-style: none;
        text-align: left;
        font-size: 15px;
        margin: 5px 0;
    }
    li{
        margin-left: 30px;
    }
    @media print{
        .Repor{
            width: 600px; 
            height: 602px;
            display: block;
            text-align: center;
            margin: 0 auto;
            display: inline-block;
            margin-top: 100px;
        }
    }
     @media screen and (min-width: 1200px){
        .box{
            width: 1100px;
            margin: 0 auto;
            margin-top: 150px;
        }
        .Repor{
            width: 600px; 
            height: 602px;
            display: block;
            text-align: center;
            margin: 0 auto;
            display: inline-block;
            margin-top: 100px;
        }
    }
     @media screen and (max-width: 1199px){
        
        .box{
            width: 800px;
            margin: 0 auto;
            margin-top: 150px;
        }
        .Repor{
            width: 500px; 
            height: 502px;
            display: block;
            text-align: center;
            margin: 0 auto;
            display: inline-block;
            margin-top: 100px;
        }
   }
</style>