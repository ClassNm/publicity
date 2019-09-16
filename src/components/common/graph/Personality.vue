<template>
    <div class="box">
        <h1 style="margin-bottom:60px;">第二部分:职业人格测验结果</h1>
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;">一、你的职业人格雷达图</span>
        <div id="Radar" class="Repor"></div>
        <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;">二、你的职业人格类型</span>
        <span style="text-align:left;display:block;font-size:16px;font-weight:bolder;margin-top:50px;">
            {{typeTit}}
        </span>
        <span style="text-align:left;display:block;font-size:16px;font-weight:bolder;margin-top:30px;">
            符合程度:{{height}}
        </span>
        <span style="text-align:left;display:block;font-size:18px;font-weight:bolder;margin-top:50px;">基本描述</span>
        <div style="text-align:left;display:block;font-size:16px;margin-top:20px;margin-left:30px;">
            {{objectTit}}
        </div>
        <ul style="margin-top:50px;">
            <h3 style="margin-bottom:30px;">主要特征</h3>
            <li v-for="(item,i) in object1" :key="i">{{item}}</li>
        </ul>
        <ul style="margin-top:50px;">
            <h3 style="margin-bottom:30px;">适合的职业类别</h3>
            <li v-for="(item,i) in personalityType" :key="i">{{item}}</li>
        </ul>
        <span style="margin-top:50px;text-align:left;display:block;font-size:20px;font-weight:bolder;">三、代表人物</span>
        <div v-for="(item,i) in ImgLengt" :key="i" style="display:inline-block;width: 200px;margin-right: 100px;margin-top:100px;">
            <img  :src="item.url" alt="">
            <h1 style="font-size:20px;margin: 0 0 15px 0;">{{item.name}}</h1>
        </div>
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
        //     columns1: [
        //             {
        //                 title: '职业类别',
        //                 key: 'name'
        //             },
        //             {
        //                 title: '你想报考的学科',
        //                 key: 'age'
        //             },
        //             {
        //                 title: '与人格类型是否匹配',
        //                 key: 'address'
        //             }
        //     ],
        //     data2: [
        //         {
        //             name: '个体生命-规划与实施',
        //             age: '①教育学  ②旅游管理 ③公共管理',
        //             address: '不匹配(或匹配)',
        //             date: '2016-10-03'
        //         },
        //         {
        //             name: '热发电',
        //             age: '①教育学  ②旅游管理 ③公共管理',
        //             address: '不匹配(或匹配)',
        //             date: '2016-10-01'
        //         },
        //         {
        //             name: '飞机',
        //             age: '①教育学  ②旅游管理 ③公共管理',
        //             address: '不匹配(或匹配)',
        //             date: '2016-10-02'
        //         },
        //     ],
        //     columns2: [
        //             {
        //                 title: '职业类别',
        //                 key: 'name'
        //             },
        //             {
        //                 title: '兴趣得分',
        //                 key: 'age'
        //             },
        //             {
        //                 title: '所包含的学科',
        //                 key: 'address',
        //                 render: (h, params) => {
        //                     // return h('div', [
        //                     // h('Button', {
        //                     //     props: { type: 'primary', size: 'small' },
        //                     //      style:{
        //                     //         display:"block",
        //                     //         marginBottom:"2px"
        //                     //     },
        //                     //     on: {
        //                     //         click: () => { console.log(params.row.address.one) }
        //                     //     }
        //                     // }, params.row.address.one),
        //                     // h('Button', {
        //                     //     props: { type: 'primary', size: 'small' },
        //                     //     style:{
        //                     //         display:"block",
        //                     //         marginBottom:"2px"
        //                     //     },
        //                     //     on: {
        //                     //         click: () => { console.log(params.row.address.two) }
        //                     //     }
        //                     // }, params.row.address.two),
        //                     // h('Button', {
        //                     //     props: { type: 'primary', size: 'small' },
        //                     //      style:{
        //                     //         display:"block",
        //                     //         marginBottom:"2px"
        //                     //     },
        //                     //     on: {
        //                     //         click: () => { console.log(params.row.address.three) }
        //                     //     }
        //                     // }, params.row.address.three),
        //                     // h('Button', {
        //                     //     props: { type: 'primary', size: 'small' },
        //                     //      style:{
        //                     //         display:"block",
        //                     //         marginBottom:"2px"
        //                     //     },
        //                     //     on: {
        //                     //         click: () => { console.log(params.row.address.fout) }
        //                     //     }
        //                     // }, params.row.address.fout),
        //                     // h('Button', {
        //                     //     props: { type: 'primary', size: 'small' },
        //                     //      style:{
        //                     //         display:"block",
        //                     //         marginBottom:"2px"
        //                     //     },
        //                     //     on: {
        //                     //         click: () => { console.log(params.row.address.five) }
        //                     //     }
        //                     // }, params.row.address.five),
        //                     // ])
        //                      return h('div', params.row.address.map(v => {
        //                         return h('Button',
        //                             {
        //                             props: { type: 'primary', size: 'small' },
        //                              style:{
        //                                 display:"block",
        //                                 marginBottom:"2px"
        //                             },
        //                             on: {
        //                                 click: (e) => { 
        //                                     let a = params.row.subject
        //                                     a.push(e.target.innerText)
        //                                     // console.log(e.target.innerText)
        //                                     // console.log(a)
        //                                     if(a.length>3){
        //                                         this.$Message.error('最多选三个');
        //                                         params.row.subject = []
        //                                     }
        //                                 }
        //                             },
        //                             domProps: {
        //                                 innerHTML: v.name
        //                             }
        //                             })
        //                         })
        //                     )
        //                 }
        //             },
        //              {
        //                 title: '你喜欢的学科',
        //                 key: 'subject',
        //                 // render: (h, params) => {
        //                 //     return h('div', [
        //                 //     h('p',params.row.subject.subOne),
        //                 //     h('p',params.row.subject.subTwe),
        //                 //     h('p',params.row.subject.subThree),
        //                 //     ])
        //                 // }
        //                 render: (h, params) => {
        //                     return h('div', params.row.subject.map(v => {
        //                         return h('p',
        //                             {
        //                             domProps: {
        //                                 innerHTML: v
        //                             }
        //                             })
        //                         })
        //                     )
        //                 }
        //             }
        //     ],
        //     data1: [
        //             {
        //                 name: '语言符号-研究与探索',
        //                 age: "17分",
        //                 address:[
        //                     {
        //                         name:"外国语言与外国历史"
        //                     },
        //                     {
        //                         name:"汉语言"
        //                     },
        //                     {
        //                         name:"逻辑学"
        //                     },
        //                     {
        //                         name:"应用语言学"
        //                     },
        //                     {
        //                         name:"挖都挖出现"
        //                     },
        //                     {
        //                         name:"汉语言"
        //                     },
        //                 ],
        //                 subject:[],
        //                 // subject:{
        //                 //     subOne:"娃达",
        //                 //     subTwe:"2",
        //                 //     subThree:"3"
        //                 // },
        //             },
        //             {
        //                 name: '数学符号-研究与探索',
        //                 age: "15分",
        //                 address:[
        //                     {
        //                         name:"哲学"
        //                     },
        //                     {
        //                         name:"逻辑学"
        //                     },
        //                     {
        //                         name:"宗教学"
        //                     },
        //                     {
        //                         name:"宗教学"
        //                     },
        //                     {
        //                         name:"传播学"
        //                     },
        //                 ],
        //                 subject:[],
        //             },
        //             {
        //                 name: '阿迪王-研究与探索',
        //                 age: "12分",
        //                 address:[
        //                     {
        //                         name:"统计学"
        //                     },
        //                     {
        //                         name:"数学"
        //                     },
        //                     {
        //                         name:"信息科学"
        //                     },
        //                     {
        //                         name:"力学"
        //                     },
        //                     {
        //                         name:"传播学"
        //                     },
        //                 ],
        //                 subject:[],
        //             },
        //             {
        //                 name: '挖的哇-研究与探索',
        //                 age: "19分",
        //                 address:[
        //                     {
        //                         name:"wdw挖的哇"
        //                     },
        //                     {
        //                         name:"挖的哇"
        //                     },
        //                     {
        //                         name:"反对v吧"
        //                     },
        //                     {
        //                         name:"而乏味"
        //                     },
        //                     {
        //                         name:"反对v吧"
        //                     },
        //                 ],
        //                 subject:[],
        //             }
        //         ]
        }
    },
    mounted(){
        // 调用echarts的方法实例  防止出现异步操作
        this.drawLine();
        this.describeTit();
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
                        text: '四维人格测验得分模型',
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
                this.imgMeth(typ);
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