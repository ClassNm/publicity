<template>
    <div class="box">
        <div class="HedTit">
            <h1>{{tit}}</h1>
            <div style="color:red;margin-top:15px;font-size:15px;">您的心理格局类型是：{{headerTit}}</div>
        </div>
        <div id="RadarLtwo" class="RoundNes"></div>
        <!-- <div class="fouter">
            <ul style="text-align:left;">
                <h1>心理格局特点</h1>
                <li v-for="(item,i) in trait" :key="i" style="font-size:15px;margin-top:10px;">{{item.name}}</li>
            </ul>
        </div> -->
        <!-- <p style="width:400px;margin-left:15%;margin-bottom:15px;"> -->
        <p style="width:400px;margin:0 auto;">
            {{fouterBot}}
        </p>
    </div>
</template>

<script>
// 圆形图
import axios from 'axios';
export default {
    data(){
        return{
            tit:"二、心理格局维度",
            headerTit:"",
            trait:[
                {
                    name:"在几千年的历史发展过程中,中国文化传统形成了深厚的孝文化理念,这在儒家表现得尤为突出;即便"
                },
                {
                    name:"本应与世俗绝缘的佛教,也或多或少地受到儒家孝道观的影响,而推出了“盂兰盆会”等孝亲主"
                },
                {
                    name:"宗教、文化心理等内在因素去分析中西方孝道的差异及其产生的原因,而对于社会结构等外在因素缺乏充分的关注。我们知道,人都是在一定的社会结构中生活的,社会结构与文化心理"
                },
                {
                    name:"互为表里和因果的关系。一种文化独特的文化心理决定了其社会结构的外在表现形式。但同时"
                },
                {
                    name:"定作用并不是绝对的,因为这种外在形式并非固定,而是处在不断调适和形塑过程之中。而且,社会结构的发展反过来会影响文化"
                },
                {
                    name:"与社会结构之间的互动关系,可以从对古代犹太教与儒家孝道之间的差别分析中表现出来。我们将借助于费孝通的社会学和人类学观念来分析这个问题。费孝通在从比较的视角考察"
                },
                {
                    name:"样层次分明,“每一根柴在整个挑里都属于一定的捆、扎、把。每一根柴也可以找到同"
                },
            ],
            fouterBot:"注：雷达图中，得分越接近四边形边角区域说明你的心理格局特点越典型，如雷达图接近正方形，说明对所有的心理格局倾向存在相同程度的喜好，可能因未认真作答引起",
            // N自然事物
            nature:[],
            // T人造事物
            manMade:[],
            // A艺术符号
            art:[], 
            // M数字符号
            number:[], 
            // L语言符号
            language:[], 
            // S社会制度
            society:[], 
            // I个体生命
            unit:[], 
            // tit标题
            Tit:['N自然事物', 'T人造事物', 'A艺术符号','M数字符号','L语言符号','S社会制度','I个体生命'],
            // 背景3
            backg:['研究与探索','设计与实施','使用与维护'],
            //  4个分值
            score:[]
        }
    },
    created(){},
    mounted(){
        // 调用echarts的方法实例  防止出现异步操作
        this.drawLine();
        this.ShowXin();
    },
    methods:{
        ShowXin(){
            let data = this.$route.query.id;
            // let data = 43;
            axios.post('http://47.104.245.242:8085/AssessScoreXinli/show_xinli',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.headerTit = res.data
             }),(err)=>{
                console.log(err)
            }
        },
        drawLine(){
            var myChart = this.$echarts.init(document.getElementById('RadarLtwo'));//获取容器元素
            myChart.setOption({
                    tooltip: {},
                    radar: {
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3,5]
                        }
                        },
                        indicator: [
                        { name: 'I+', max: 21},
                        { name: 'U', max: 21},
                        { name: 'I', max: 21},
                        { name: 'U+', max: 21},
                        // 最大值20
                        ]
                    }
            });
            // 处理echarts异步操作 copy的官网实例
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreXinli/xinli_num',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res) => {
                this.score = res.data;
                myChart.setOption({
                     series: [{
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : this.score,
                                name : '心理格局维度'
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

    .HedTit{
        text-align: left;
        margin-top: 20px;
    }
    .fouter{
        width: 400px;
        height: 602px;
        display: inline-block;
    }
    li{
        list-style: none;
    }
    @media screen and (min-width: 1200px){
        .box{
            width: 1100px; 
            margin: 0 auto;
        }
        .RoundNes{
            width: 800px; 
            height: 602px;
            display:inline-block;
            margin: 0 auto;
        }
    }
   @media screen and (max-width: 1199px){
       .box{
            width: 800px; 
            margin: 0 auto;
        }
        .RoundNes{
            width: 600px; 
            height: 602px;
            display: inline-block;
            margin: 0 auto;
        }
   }
</style>
