<template>
    <div class="box">
        <div class="HedTit">
            <h1>{{tit}}</h1>
            <div style="color:red;margin-top:15px;font-size:15px;">您的职业人格类型是：{{headerTit}}</div>
        </div>
        <Layout class="orida">
            <Content>
                <div id="Radar" class="Repor"></div>
            </Content>
            <Sider hide-trigger>
                <h1 style="background:white;text-align:left;">代表人物</h1>
                <img src="https://tool.gaodun.com/pic/assets/img/bcg.jpg" alt="">
                <img src="data:image/jpeg;base64,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" alt="">
                <img src="data:image/jpeg;base64,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" alt="">
            </Sider>
        </Layout>
        <p class="fouter">{{fouterTit}}</p>
        <Table border :columns="columns1" :data="data1"></Table>
            <!-- <div>
                代表人物
            </div> -->
           
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            tit:"一,职业人格维度",
            headerTit:"",
            fouterTit:"注：蛛网图中，得分越接近八边形边角区域说明你的职业人格特点越典型，如蛛网图接近正八边形，说明对所有的职业人格倾向存在相同程度的喜好，可能因未认真作答引起",
            // 用户uid
            uid:"",
            header:['预算分配（Allocated Budget）'],
            columns1: [
                    {
                        title: '类型',
                        key: 'name'
                    },
                    {
                        title: '基本描述',
                        key: 'age'
                    },
                    {
                        title: '主要特征',
                        key: 'address'
                    }
            ],
            data1: [
                {
                    name: '',
                    age: '',
                    address: '',
                    date: '2016-10-03'
                }
            ],
            // 8项分值
            score:""
        }
    },
    created(){
    },
    mounted(){
        // 调用echarts的方法实例  防止出现异步操作
        this.drawLine();
        this.describeTit();

    },
    methods:{
        // 信息
        describeTit(){
            let data = this.$route.query.id;
            axios.post('http://192.168.1.100:8080/AssessScoreMbti/show_mbti',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                let arr = this.data1[0]
                console.log(arr,'arr')
                arr.age = res.data.object
                arr.address = res.data.object1
                arr.name = res.data.typ
                this.headerTit = res.data.typ
             }),(err)=>{
                console.log(err)
            }
        },
        // echarts调用方法 的案例
        drawLine(){
            var myChart = this.$echarts.init(document.getElementById('Radar'));//获取容器元素
            myChart.setOption({
                    tooltip: {},
                    // legend: {
                    //     data: this.header
                    // },
                    radar: {
                        // shape: 'circle', 
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                        }
                        },
                        indicator: [
                        { name: '内向（Introverted）', max: 21},
                        { name: '具体（Specific）', max: 21},
                        { name: '理性（Reason）', max: 21},
                        { name: '严谨（Preciseness）', max: 21},
                        { name: '外向（Extroversion）', max: 21},
                        { name: '抽象（Abstract）', max: 21},
                        { name: '感性（Sensibility）', max: 21}  ,
                        { name: '灵活（Agility）', max: 21}
                        // 最大值20
                        ]
                    }
            })
            // 处理echarts异步操作 copy的官网实例
            let data = this.$route.query.id;
            // let data = 33;
            axios.post('http://192.168.1.100:8080/AssessScoreMbti/mbti_num',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res) => {
                // console.log(res.data,'eeeeeeeeeeeeeeee')
                this.score = res.data;
                myChart.setOption({
                     series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : this.score,
                                name : '预算分配（Allocated Budget）'
                            }
                        ]
                    }]
                })
            })
        }
    }
}

</script>

<style scoped>
    img{
        width: 200px;
        height: 200px;
        display: inline-block;
         
    }
    .ivu-layout{
        background:white
    }
    .fouter{
        width: 400px;
        margin: 0 auto;
        margin-bottom: 25px;
    }
    @media (min-width: 1200px) { 
        .box{
            width: 1205px;
            margin: 0 auto;
        }
        .orida{
            width: 1205px;
            margin: 0 auto;
        }
        .Repor{
            width: 600px; 
            height: 602px;
            display: inline-block
            /* margin: 0 auto; */
        }
        .HedTit{
            text-align: left
        }
    }
    @media screen and (max-width: 1200px) { 
        .Repor{
            width: 800px; 
            height: 602px;
            margin: 0 auto;
        }
    } 
    @media screen and (max-width: 901px) { 
        .Repor{
            width: 500px;
            height: 602px;
            margin: 0 auto;
        } 
    } 
</style>

