<template>
    <div class="box">
       <h1>第四部分:心理定位测验结果</h1>
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:50px;">一、心理定位类型和特点</span>
        <div id="RadarLtwo" class="RoundNes"></div>
        <p style="width:400px;margin:0 auto;">
            {{fouterBot}}
        </p>
        <span style="text-align:left;display:block;font-size:17px;margin:50px 0 50px 30px;font-weight:bolder;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你的心理定位类型:  {{object}}
        </span>
        <span style="text-align:left;display:block;font-size:17px;margin:50px 0 50px 30px;font-weight:bolder;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要特征：  {{object1}}
        </span>
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:50px;">二、心理定位与职业类型适合度</span>
        <span style="text-align:left;display:block;font-size:17px;margin:50px 0 50px 30px;font-weight:bolder;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            再次恭喜你，对于以下能够完美的匹配你的兴趣、人格类型和学科潜能的职业类别及学科专业，你的心理定位类型（  折中型  ）并没有不适合之处。显然，这一职业类别及学科专业就是当前最适合你的 
        </span>
        <Table border :columns="columns2" :data="data1"></Table>
         <span style="text-align:left;display:block;font-size:17px;margin:50px 0 50px 30px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            #如果出现不适合的情况，表达方式如下#
        </span>
        <span style="text-align:left;display:block;font-size:17px;margin:50px 0 50px 30px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            非常遗憾，对于以下能够完美的匹配你的兴趣、人格类型和学科潜能的职业类别及学科专业，你的心理定位类型（ 胆小退缩型 ）并不适合。建议寻找专业的心理咨询师，对自己的心理定位进行调整！
        </span>
        <Table border :columns="columns1" :data="data2"></Table>
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:50px;">综合你在四个方面的测试或调查结果，推荐以下职业类别或专业供参考：</span>
        <Table border :columns="columns3" :data="data3"></Table>
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
                    key: 'name'
                },
                {
                    title: '想报考的学科',
                    key: 'address',
                    render: (h, params) => {
                        return h('div', [
                        h('p',params.row.address.one),
                        h('div', {
                            style: {
                            margin: '1px 0',
                            height: '1px',
                            background: '#ccc',
                            }
                        }),
                        h('p',params.row.address.two),
                        h('div', {
                            style: {
                            margin: '1px 0',
                            height: '2px',
                            background: '#ccc',
                            }
                        }),
                        h('p',params.row.address.three),
                        ])
                    }
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
            columns1: [
                {
                    title: '职业类别',
                    key: 'name'
                },
                {
                    title: '想报考的学科',
                    key: 'address',
                    render: (h, params) => {
                        return h('div', [
                        h('p',params.row.address.one),
                        h('div', {
                            style: {
                            margin: '1px 0',
                            height: '1px',
                            background: '#ccc',
                            }
                        }),
                        h('p',params.row.address.two),
                        h('div', {
                            style: {
                            margin: '1px 0',
                            height: '2px',
                            background: '#ccc',
                            }
                        }),
                        h('p',params.row.address.three),
                        ])
                    }
                },
            ],
            data2: [
                {
                    name: '社会制度-规划与实施',
                    address: {
                        one:"①公安学  ",
                        two:"②经济学",
                        three:"③电子商务",
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
                    name: '社会制度-规划与实施',
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
            columns3: [
                {
                    title: '序号',
                    key: 'name'
                },
                {
                    title: '推荐专业',
                    key: 'address',
                },
                {
                    title: '兴趣得分',
                    key: 'interest',
                },
                {
                    title: '人格类型适合度',
                    key: 'typ',
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
                    key: 'subject',
                },
            ],
            data3: [
                {
                    name: '1',
                    address: "",
                    interest: "",
                    typ: "适合",
                    potency: "匹配",
                    mentality: "适合",
                    subject: "",
                    date: '2016-10-03'
                },
                {
                    name: '2',
                    address: "",
                    interest: "",
                    typ: "适合",
                    potency: "匹配",
                    mentality: "适合",
                    subject: "",
                    date: '2016-10-03'
                },
                {
                    name: '3',
                    address: "",
                    interest: "",
                    typ: "适合",
                    potency: "匹配",
                    mentality: "适合",
                    subject: "",
                    date: '2016-10-03'
                },
            ],
            
        }
    },
    mounted(){
        // 调用echarts的方法实例  防止出现异步操作
        this.drawLine();
        this.describeTit();
    },
    methods:{
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
            let data = 150;
            axios.post('http://47.104.245.242:8081/AssessScoreXinli/xinli_num',
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
            // let data = this.$route.query.id;
            let data = 150;
            axios.post('http://192.168.1.106:8080/AssessScoreXinli/show_xinli',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                console.log(res.data)
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
</style>