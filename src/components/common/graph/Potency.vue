<template>
    <div class="box">
        <h1>第三部分:学科潜能调查的结果</h1>
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:50px;">（一）测验概要</span>
        <div style="text-align:left;display:block;font-size:18px;margin-top:20px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从“对象”维度出发，系统考察个体在不同对象所对应的职业类别上的学科潜能，进一步判断个体是否具有从事相应职业的能力条件。
        </div>
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:50px;">（二）测试结果</span>
        <div id="myChartThr" class="Repor"></div>
        <!-- <span style="text-align:left;display:block;font-size:18px;margin-top:50px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#需要该部分测验结果的解释#</span> -->
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:50px;margin-bottom:50px;">
            （三）适合的职业类别
        </span>
        <Table border :columns="columns2" :data="arr"></Table>
        <!-- <span style="text-align:left;display:block;font-size:16px;margin:50px 0 50px 30px;">
            恭喜你， 语言符号 的 研究与探索 类职业所对应的学科专业能够完美的匹配你的兴趣、人格类型和学科潜能。
        </span>
         <span style="text-align:left;display:block;font-size:16px;margin:50px 0 50px 30px;">
            #需要该部分测验结果的解释,比如ABQ=80（八级）#
        </span> -->
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
                        // render: (h, params) => {
                        //     return h('div', [
                        //     h('p',params.row.address.one),
                        //     h('div', {
                        //         style: {
                        //         margin: '1px 0',
                        //         height: '1px',
                        //         background: '#ccc',
                        //         }
                        //     }),
                        //     h('p',params.row.address.two),
                        //     h('div', {
                        //         style: {
                        //         margin: '1px 0',
                        //         height: '1px',
                        //         background: '#ccc',
                        //         }
                        //     }),
                        //     h('p',params.row.address.three),
                        //     ])
                        // }
                    },
                     {
                        title: '综合学科潜能',
                        key: 'matter'
                    }
            ],
            data1: [
                    {
                        name: '语言符号-研究与探索',
                        // address: {
                        //     one:"①传播学 ",
                        //     two:"②应用语言学",
                        //     three:"③外国语言与外国历史",
                        // },
                        address:"传播学",
                        subject:"ABQ=80（八级）",
                        date: '2016-10-03'
                    },
                    {
                        name: '数学符号-研究与探索',
                        // address: {
                        //     one:"哲学",
                        //     two:"逻辑学",
                        //     three:"宗教学",
                        // },
                        address:"传播学",
                        subject:"ABQ=80（八级）",
                        date: '2016-10-01'
                    },
                    {
                        name: '阿迪王-研究与探索',
                        // address: {
                        //     one:"①传播学 ",
                        //     two:"②应用语言学",
                        //     three:"③外国语言与外国历史",
                        // },
                        address:"传播学",
                        subject:"ABQ=80（八级）",
                        date: '2016-10-02'
                    },
                    {
                        name: '挖的哇-研究与探索',
                        // address: {
                        //     one:"wdw挖的哇",
                        //     two:"挖的哇",
                        //     three:"反对v吧",
                        // },
                        address:"传播学",
                        subject:"ABQ=80（八级）",
                        date: '2016-10-04'
                    }
            ],
            arr:[],
            kool:[],
            score:[],
        }
    },
    created(){
       
    },
    mounted(){
        this.drawLineTwo();
        this.dataTit();
        
        
    },
    methods:{
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
                // console.log(this.arr,'2111111111')
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
    @media screen and (min-width: 1200px){
        .box{
            width: 1100px;
            margin: 0 auto;
            margin-top: 100px;
        }
        .Repor{
            width: 1000px; 
            height: 602px;
            margin: 0 auto;
            margin-top: 50px;
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
   }
</style>