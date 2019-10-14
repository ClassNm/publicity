<template>
    <div class="box">
       <h1 style="font-size:30px;">第四部分:心理定位测验结果</h1>
       <div class="dashedT" style="margin-top:20px;">
           <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:30px;margin-left:20px;">（一）测验概要</span>
            <div style="text-align:left;display:block;font-size:16px;margin:20px 0 20px 40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;心理定位（Life-position），也称心理位置或心理地位，是是美国心理学家托马斯·哈里斯用来描述一个人心理成熟度的概念，指一个人从小就确立起来的有关自己、他人的基本认识和价值判断。一般分为以下四种类型：（1）“我不好，你好”，称为自卑讨好型；（2）“我好，你不好”，称为偏执攻击型；（3）“我好，你也好”，积极合作型；（4）“我不好，你也不好”，称为胆小退缩型。此外，也会有一些人不属于以上四种类型，称为折中型。
            </div>
       </div>
        <div class="dashedT" style="margin-top:20px;">
            <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:50px;margin-left:20px;">（二）测试结果</span>
            <div id="RadarLtwo" class="RoundNes"></div>
            <!-- <p style="width:400px;margin:0 auto;">
                {{fouterBot}}
            </p> -->
            <span style="text-align:left;display:block;font-size:17px;margin:50px 0 50px 40px;font-size:16px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据测试结果， 你的心理定位类型是 【{{object}}】
            </span>
            <span style="text-align:left;display:block;font-size:17px;margin:50px 0 50px 40px;font-size:16px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要特征：  {{object1}}
            </span>
        </div>
        <div class="dashedT" style="margin-top:20px;">
            <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:50px;margin-left:20px;">（三）适合的职业类别</span>
            <div style="text-align:left;display:block;font-size:16px;margin-top:20px;margin-left:40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在感兴趣的职业类别中，与你的心理定位不匹配的是：{{ShowPeopleTwe}}
            </div>
            <div style="text-align:left;display:block;font-size:16px;margin-bottom:20px;margin-left:40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在符合人格类型的职业类别中，与你的心理定位不匹配的是：{{ShowPeople}}
            </div>
        </div>
        
        <!-- 符合展示1 3  不符合展示2 -->
        <!-- <div v-if="Twethdy">
            <span style="text-align:left;display:block;font-size:17px;margin:50px 0 50px 30px;font-weight:bolder;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                再次恭喜你，对于以下能够完美的匹配你的兴趣、人格类型和学科潜能的职业类别及学科专业，你的心理定位类型（  {{object}}  ）并没有不适合之处。显然，这一职业类别及学科专业就是当前最适合你的 
            </span>
            <Table border :columns="columns2" :data="arr"></Table>
        </div>
        
        <div v-if="TwethdyTw">
            <span style="text-align:left;display:block;font-size:17px;margin:50px 0 50px 30px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                非常遗憾，对于以下能够完美的匹配你的兴趣、人格类型和学科潜能的职业类别及学科专业，你的心理定位类型（ 胆小退缩型 ）并不适合。建议寻找专业的心理咨询师，对自己的心理定位进行调整！
            </span>
            <Table border :columns="columns1" :data="arr"></Table>
         </div>

         <div v-if="Twethdy">
            <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:50px;">综合你在四个方面的测试或调查结果，推荐以下职业类别或专业供参考：</span>
            <Table border :columns="columns3" :data="arr"></Table>
         </div> -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            object:"",
            object1:"",
            fouterBot:"注：雷达图中，得分越接近四边形边角区域说明你的心理格局特点越典型，如雷达图接近正方形，说明对所有的心理格局倾向存在相同程度的喜好，可能因未认真作答引起",
            columns2: [
                {
                    title: '职业类别',
                    key: 'typ'
                },
                {
                    title: '想报考的学科',
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
                    //         height: '2px',
                    //         background: '#ccc',
                    //         }
                    //     }),
                    //     h('p',params.row.address.three),
                    //     ])
                    // }
                },
            ],
            data1: [
                {
                    name: '语言符号-研究与探索',
                    address: {
                        one:"①传播学 ",
                        two:"②应用语言学",
                        three:"③外国语言与外国历史",
                    },
                    date: '2016-10-03'
                },
                {
                    name: '数学符号-研究与探索',
                    address: {
                        one:"哲学",
                        two:"逻辑学",
                        three:"宗教学",
                    },
                    date: '2016-10-01'
                },
                {
                    name: '阿迪王-研究与探索',
                    address: {
                        one:"①传播学 ",
                        two:"②应用语言学",
                        three:"③外国语言与外国历史",
                    },
                    date: '2016-10-02'
                },
                {
                    name: '挖的哇-研究与探索',
                    address: {
                        one:"wdw挖的哇",
                        two:"挖的哇",
                        three:"反对v吧",
                    },
                    date: '2016-10-04'
                }
            ],
            arr:[],
            columns1: [
                {
                    title: '职业类别',
                    key: 'typ'
                },
                {
                    title: '想报考的学科',
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
                    //         height: '2px',
                    //         background: '#ccc',
                    //         }
                    //     }),
                    //     h('p',params.row.address.three),
                    //     ])
                    // }
                },
            ],
            columns3: [
                {
                    title: '序号',
                    key: 'name'
                },
                {
                    title: '推荐专业',
                    key: 'typ',
                },
                {
                    title: '人格类型适合度',
                    key: 'mentality',
                },
                {
                    title: '学科潜能匹配度',
                    key: 'potency',
                },
                {
                    title: '心理定位适合度',
                    key: 'mentality',
                },
                {
                    title: '包含的学科',
                    key: 'score',
                },
            ],
            matter:"",
            Twethdy:true,
            TwethdyTw:true,
            ShowPeople:"",
            ShowPeopleTwe:"",

        }
    },
    watch:{
        matter(n,o){
            if(n=="不匹配"||o=="不匹配"){
                this.Twethdy = false
            }else{
                this.TwethdyTw = false
            }
        }
    },
    mounted(){
        // 调用echarts的方法实例  防止出现异步操作
        this.drawLine();
        this.describeTit();
        this.typTeach();
    },
    methods:{

        typTeach(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreXinli/show_renge',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                // this.matter = res.data[0].matter
                // let a = res.data
                // let arrT = []
                // let id = 0;
                // a.map(((item,index)=>{
                //     arrT.push(Object.assign({},item,{potency:"匹配",mentality:"适合",name:id+=1}))
                // }))
                if(res.data.length===0){
                    this.ShowPeople = "无"
                }else{
                    this.ShowPeople = res.data;
                }
                this.typTeachTwee();
             }),(err)=>{
                console.log(err)
            }
        },
         typTeachTwee(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreXinli/show_xingqu',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                if(res.data.length===0){
                    this.ShowPeopleTwe = "无"
                }else{
                    this.ShowPeople = res.data;
                }

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
            // let data = this.$route.query.id;
            // let data = 150;
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
                        data : [
                            {
                                value : this.score,
                                name : '心理格局维度'
                            }
                        ]
                    }]
                })
            })
        },
        describeTit(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreXinli/show_xinli',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.object = res.data.object
                this.object1 = res.data.object1
             }),(err)=>{
                console.log(err)
            }
        },
    }
}
</script>

<style  scoped>
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
        .RoundNes{
            width: 1000px; 
            height: 602px;
            display:inline-block;
            margin: 0 auto;
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
        .dashedT{
            border: 1px dashed black;
        }
        .RoundNes{
            width: 800px; 
            height: 502px;
            display:inline-block;
            margin: 0 auto;
        }
   }
</style>