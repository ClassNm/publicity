<template>
    <div class="box">
        <h1 style="font-size:30px;">第三部分:学科潜能调查的结果</h1>
        <div class="dashedT" style="margin-top:20px;">
            <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:20px;margin-left:20px;">（一）测验概要</span>
            <div style="text-align:left;display:block;font-size:16px;margin-top:20px;margin-bottom:10px;margin-left:40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未来的职业需要专业知识、能力来支撑，专业知识则由学科知识组成，而高中学科与大学学科之间具有思维方法上的一致性，知识体系上的一惯性。所以，中学阶段体现出来的学科潜能对于大学阶段学科学习具有较大影响。
            </div>
            <div style="text-align:left;display:block;font-size:16px;margin-top:20px;margin-bottom:10px;margin-left:40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本测验从“对象”维度出发，系统考察个体在不同对象所对应的职业类别上的学科潜能或特长，进一步判断个体是否具有从事相应职业的能力条件，并依次缩小职业推荐范围。
            </div>
        </div>
       <div class="dashedT" style="margin-top:20px;">
           <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:50px;margin-left:20px;">（二）测试结果</span>
            <div id="myChartThr" class="Repor"></div>
            <!-- <span style="text-align:left;display:block;font-size:18px;margin-top:50px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#需要该部分测验结果的解释#</span> -->
            
       </div>
       <div class="dashedT" style="margin-top:20px;">
           <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin:50px 0 40px 20px;">
            （三）适合的职业类别
            </span>
            <!-- <Table border :columns="columns2" :data="arr"></Table> -->
            <div style="text-align:left;display:block;font-size:16px;margin-top:20px;margin-left:60px;">
                在感兴趣的职业类别中，学科潜能较高的是：
                <ul style="text-align:left;display:block;font-size:16px;margin-top:20px;">
                    <!-- 包含如下学科： -->
                    <li v-for="(item,i) in interest" :key="i">{{item}}</li>
                </ul>
            </div>
            <div style="text-align:left;display:block;font-size:16px;margin-top:20px;margin-left:60px;">
            在符合人格类型的职业类别中，学科潜能较高的是：
                <ul style="text-align:left;display:block;font-size:16px;margin-top:20px;">
                    <!-- {{interestTwe}}，包含如下学科： -->
                    <li v-for="(item,i) in interestTwe" :key="i">{{item}}</li>
                </ul>
            </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            columns2: [
                    {
                        title: '职业类别',
                        key: 'typ'
                    },
                    {
                        title: '你喜欢、并适合人格类型的学科',
                        key: 'score',
                    },
                     {
                        title: '综合学科潜能',
                        key: 'matter'
                    }
            ],
            data1: [
                    {
                        name: '语言符号-研究与探索',
                        address:"传播学",
                        subject:"ABQ=80（八级）",
                        date: '2016-10-03'
                    },
                    {
                        name: '数学符号-研究与探索',
                        address:"传播学",
                        subject:"ABQ=80（八级）",
                        date: '2016-10-01'
                    },
                    {
                        name: '阿迪王-研究与探索',
                        address:"传播学",
                        subject:"ABQ=80（八级）",
                        date: '2016-10-02'
                    },
                    {
                        name: '挖的哇-研究与探索',
                        address:"传播学",
                        subject:"ABQ=80（八级）",
                        date: '2016-10-04'
                    }
            ],
            arr:[],
            kool:[],
            score:[],
            interest:"",
            interestTwe:""
        }
    },
    created(){
       
    },
    mounted(){
        this.drawLineTwo();
        // this.dataTit();
        this.dataTypp()
        
    },
    methods:{
        dataTypp(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreTechangWeb/show_jibie',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.interest = res.data
                this.dataTyppTwe();
             }),(err)=>{
                console.log(err)
            }
        },
        dataTyppTwe(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreTechangWeb/show_jibie2',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.interestTwe = res.data
             }),(err)=>{
                console.log(err)
            }
        },
        drawLineTwo(){
            var myChartThr = this.$echarts.init(document.getElementById('myChartThr'));//获取容器元素
            myChartThr.setOption({
                title: {
                    text: '不同职业类别学科潜能的分布情况',
                    // subtext: '数据来自网络'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    // data: ['2011年', '2012年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['N自然事物','T人造事物','M数学符号','L语言符号','A艺术形象','S社会制度','I个体生命']
                },
            });
            // 处理echarts异步操作 copy的官网实例
            // let data = this.$route.query.id;
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreTechangWeb/show_numb',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res) => {
                this.score = res.data;
                myChartThr.setOption({
                        series: [
                            {
                                // name: '2011年',
                                type: 'bar',
                                data: this.score
                            }
                        ],
                })
            })
        },
        dataTit(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreTechangWeb/show_xueke',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.arr = res.data
                this.dataTitTW();
             }),(err)=>{
                console.log(err)
            }
            
        },
        dataTitTW(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreTechangWeb/show_jibie',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.kool = res.data
                this.foon();
             }),(err)=>{
                console.log(err)
            }
            
        },
        foon(){
            let arr = this.arr;
            let kool = this.kool;
            arr.forEach(item=>{
                kool.forEach(i=>{
                    if(item.typ === i.typ){
                        item.matter = i.matter
                    }
                })
            })
        }
    }
}
</script>

<style scoped>
    ul li {
        list-style: none;
    }
     @media print{
        .dashedT{
            border: 1px dashed black;
        }
    }
    @media screen and (min-width: 1200px){
        .box{
            width: 1100px;
            margin: 0 auto;
            margin-top: 100px;
        }
        .Repor{
            width: 900px; 
            height: 602px;
            margin: 0 auto;
            margin-top: 50px;
        }
        .dashedT{
            border: 1px dashed black;
        }
    }
   @media screen and (max-width: 1199px){
        .box{
            width: 800px;
            margin: 0 auto;
            margin-top: 100px;
        }
        .Repor{
            width: 800px; 
            height: 502px;
            margin: 0 auto;
            margin-top: 50px;
        }
        .dashedT{
            border: 1px dashed black;
        }
   }
</style>