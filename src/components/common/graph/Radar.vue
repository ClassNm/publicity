<template>
    <div class="box">
        <div class="HedTit">
            <h1 style="text-align:left;">{{tit}}</h1>
            <div style="color:red;margin-top:15px;font-size:15px;text-align:left;">您的职业人格类型是：{{headerTit}}</div>
        </div>
        <Layout class="orida">
            <Content>
                <div id="Radar" class="Repor"></div>
            </Content>
            <Sider hide-trigger>
                <h1 style="background:white;text-align:left;">代表人物</h1>
                <div v-for="(item,i) in ImgLengt" :key="i">
                    <img  :src="item.url" alt="">
                    <h1 style="font-size:20px;margin: 0 0 15px 0;">{{item.name}}</h1>
                </div>
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
            tit:"一，职业人格维度",
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
                    },
                    {
                        title: '符合度',
                        key: 'compliance'
                    }
            ],
            data1: [
                {
                    name: '',
                    age: '',
                    address: '',
                    compliance : '',
                    date: '2016-10-03'
                }
            ],
            // 8项分值
            score:"",
            ImgLengt:[]
        }
    },
    created(){
    },
    mounted(){
        // 调用echarts的方法实例  防止出现异步操作
        this.drawLine();
        this.describeTit();
        this.complianceMeth();
    },
    methods:{
        // 信息
        describeTit(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8081/AssessScoreMbti/show_mbti',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                let arr = this.data1[0]
                arr.age = res.data.object
                arr.address = res.data.object1
                arr.name = res.data.typ
                this.headerTit = res.data.typ
                let typ = res.data.typ;
                this.imgMeth(typ);
             }),(err)=>{
                console.log(err)
            }
        },
        complianceMeth(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8081/AssessScoreMbti/show_fuhedu',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                // let arr = this.data1[0]
                // arr.compliance
                this.data1[0].compliance = res.data;
            })
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
            axios.post('http://47.104.245.242:8081/AssessScoreMbti/mbti_num',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res) => {
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
        },
        imgMeth(index){
            let data = index;
            axios.post('http://47.104.245.242:8081/AssessPictures/show_picture',
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
    img{
        width: 200px;
        height: 200px;
        display: inline-block;
        /* margin-bottom: 10px;     */
    }
    .ivu-layout{
        background:white
    }
    .ivu-layout-sider-children{
        background: white;
    }
    .ivu-layout-sider{
        background: white;
        height: 700px;
    }
    .fouter{
        width: 400px;
        /* margin: 0 auto; */
        margin-left: 25%;
        margin-bottom: 25px;
        text-align: left;
    }
    @media screen and (min-width: 1200px){
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
            text-align: left;
            width:400px;
        }
        img{
            width: 200px;
            height: 200px;
            display: inline-block;
        }
    }
    @media screen and (max-width: 1199px){
        .box{
            width: 800px;
            margin: 0 auto;
        }
        .orida{
            width: 800px;
            margin: 0 auto;
        }
        .Repor{
            width: 400px; 
            height: 602px;
            margin: 0 auto;
        }
        .HedTit{
            text-align: left
        }
        img{
            width: 150px;
            height: 150px;
            display: inline-block;
        }
    }
</style>

