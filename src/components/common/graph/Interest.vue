<template>
    <div class="box">
        <h1 style="margin-bottom:60px;">第一部分：全职兴趣测验结果</h1>
        <span style="font-weight:bolder;text-align:left;display:block;font-size:18px;margin:50px 0 80px 0;">一，您在全职兴趣测验中的得分如下：</span>
        <div id="myChart" class="Repor"></div>
        <ul style="text-align:left;font-weight:bolder;margin-top:80px;">
            结果说明：
            <!-- <li v-for="(item,i) in Arrdata" :key="i">在全部21中职业类型中，超过15分的职业类别包括：{{item}}</!--> -->
            <li>在全部21中职业类型中，超过15分的职业类别包括：{{Arrdata}}</li>
        </ul>
        <span style="font-weight:bolder;text-align:left;font-size:18px;display:block;margin-top:50px;">二，根据以上测验和调查，你感兴趣职业类别和想报考的学科如下：</span>
         <div style="width:1000px;margin-top:40px;">
            <div style="height:200px;width:330px;display:inline-block;border:1px solid #ccc;">
                <div style="margin-top: 70px;">职业类别</div>
            </div>
            <div style="height:200px;width:330px;display:inline-block;border:1px solid #ccc;">
                <div style="margin-top: 70px;">你喜欢的学科</div>
            </div>
            <div style="height:200px;width:330px;display:inline-block;border:1px solid #ccc;">
                <div style="margin-top: 70px;">适合度</div>
            </div>
            <div style="width:1000px;" v-for="(item,index) in arrTw" :key="index">
            <!-- <div style="width:1000px;"> -->
                <div style="width:330px;height:200px;display:inline-block;border:1px solid #ccc;">
                    <div style="margin-top: 70px;">&nbsp;&nbsp;&nbsp;&nbsp;{{item.typ}}</div>
                </div>  
                <div style="width:330px;height:200px;display:inline-block;border:1px solid #ccc;">
                    <div style="margin-top: 70px;">&nbsp;&nbsp;&nbsp;&nbsp;{{item.score}}</div>
                </div>
                <!-- <div v-for="(item,i) in kkk" :key="i" style="height:300px;width:330px;display:inline-block;border:1px solid #ccc;">
                    <div style="margin-top: 70px;" v-for="(item,i) in item.name" :key="i">{{item.name}}</div>
                </div> -->

                <div style="width:330px;height:200px;display:inline-block;border:1px solid #ccc;">
                    <div class="rightBot" :style="{width:item.code}" :title="item.code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
            </div>
            
                <!-- <div class="rightBot" :style="{width:item.part+px}">111</div> -->
        </div>
       
        <br>
    </div>
</template>

<script>
import axios from 'axios';
export default {
     data(){
        return{
            Arrdata:"",
            kkk:[
                {
                    name:[
                        {
                            name:"11",
                        },
                        {
                            name:"12",
                        },
                        {
                            name:"13",
                        }
                    ]
                },
                {
                    name:[
                        {
                            name:"121",
                        },
                        {
                            name:"122",
                        },
                        {
                            name:"123",
                        }
                    ]
                },
                {
                    name:[
                        {
                            name:"131",
                        },
                        {
                            name:"132",
                        },
                        {
                            name:"133",
                        }
                    ]
                },
            ],
            // header:"三、职业兴趣维度",
            // 用户uid
            uid:"",
            tit:['N自然事物','T人造事物','A艺术符号','M数字符号','L语言符号','S社会制度','I个体生命'],
            stateL:['R研究与探索','P设计与实施','U使用与维护'],
            stateOne:"R研究与探索",
            stateTwe:"P设计与实施",
            stateThree:"U使用与维护",
            // R研究与探索
            study:[],
            // P设计与实施
            design:[],
            // U使用与维护
            use:[],
            // 传过来的Array
            //  graph:[]
            color:50,
             cc:[
                {
                    width:[
                        {
                            name:"①教育学"
                        },
                        {
                            name:"②旅游管理"
                        },
                        {
                            name:"③公共管理"
                        },
                    ]
                },
                {
                    width:[
                        {
                            name:"①教育学"
                        },
                        {
                            name:"②旅游管理"
                        },
                        {
                            name:"③公共管理"
                        },
                    ]
                },
                {
                    width:[
                        {
                            name:"①教育学"
                        },
                        {
                            name:"②旅游管理"
                        },
                        {
                            name:"③公共管理"
                        },
                    ]
                },
            ],
            arr:[],
            test:[],
            arrTw:[],
        }
     },
     created(){
        let data = this.$route.query.id;
        axios.post('http://47.104.245.242:8085/AssessScore/showNum',
          data,
          {headers:{'Content-Type':"application/json; charset=UTF-8"}}
          )
          .then((res)=>{
            let aa = res.data;
            let study = [aa[0],aa[3],aa[6],aa[9],aa[12],aa[15],aa[18]];
            let design = [aa[1],aa[4],aa[7],aa[10],aa[13],aa[16],aa[19]]
            let use = [aa[2],aa[5],aa[8],aa[11],aa[14],aa[17],aa[20]]
            this.study = study;
            this.design = design;
            this.use = use;
          }),(err)=>{
              console.log(err)
          }

        
    },
    mounted(){
        // 调用echarts的方法实例  防止出现异步操作
        this.drawLine();
        // this.drawLineTwo();
        // this.drawLineThrr();
        this.ArrData();
        this.categoryTw();
    },
    methods:{
        categoryTw(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScore/show_xueke',data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                let a = res.data;
                a.forEach((item)=>{
                    item.code = item.code*10;
                    // c+="px"
                    item.code+="px"
                })
                this.arrTw = a;
                // let selected = this.typSele
                // let all = res.data;
                // let items = []
                // selected.forEach(item=>{
                //     all.forEach(i=>{
                //         (item == i.typ) && items.push(i)
                //     })
                // })
                // console.log(res.data,'item')
            })
        },
        // echarts调用方法 的案例
        drawLine(){
            var myChart = this.$echarts.init(document.getElementById('myChart'));//获取容器元素
            myChart.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    // data:['直接访问','联盟广告','搜索引擎']
                    data:this.stateL
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                 xAxis:  {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: this.tit
                },
            });
            // 处理echarts异步操作 copy的官网实例
            let data = this.$route.query.id;
            axios.post("http://47.104.245.242:8085/AssessScore/showNum",
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            ) 
            .then((res) => {
                let aa = res.data;
                let study = [aa[0],aa[3],aa[6],aa[9],aa[12],aa[15],aa[18]];
                let design = [aa[1],aa[4],aa[7],aa[10],aa[13],aa[16],aa[19]]
                let use = [aa[2],aa[5],aa[8],aa[11],aa[14],aa[17],aa[20]]
                this.study = study;
                this.design = design;
                this.use = use;
                myChart.setOption({                       
                        series : [
                            {
                                name: this.stateOne,
                                type: 'bar',
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: this.study
                            },
                            {
                                name: this.stateTwe,
                                type: 'bar',
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: this.design
                            },
                            {
                                name: this.stateThree,
                                type: 'bar',
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: this.use
                            }
                        ]
                });
            })
        },
        drawLineTwo(){
            var myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'));//获取容器元素
            myChartTwo.setOption({
                title: {
                    // text: '世界人口总量',
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
                    // containLabel: true
                },
                xAxis: {
                    type: 'value',
                    // boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    // data: ['会计学','光信息科学与技术','信息管理与信息系统','保险','新闻学','政治学与行政学','国际经济与贸易','财政学','金融学','经济学','法学','旅游管理',]
                    data: ['会计学']
                },
                series: [
                    {
                        // name: '2011年',
                        type: 'bar',
                        // data: [18, 23, 29, 10, 13, 6,22,34,14,11,21,33]
                        data: [18]

                    }
                ]
            });
        },
        drawLineThrr(){
            var myChartThrr = this.$echarts.init(document.getElementById('myChartThrr'));//获取容器元素
            myChartThrr.setOption({
                title: {
                    // text: '世界人口总量',
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
                    // containLabel: true
                },
                xAxis: {
                    type: 'value',
                    // boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    // data: ['会计学','光信息科学与技术','信息管理与信息系统','保险','新闻学','政治学与行政学','国际经济与贸易','财政学','金融学','经济学','法学','旅游管理',]
                    data: ['会计学']
                },
                series: [
                    {
                        // name: '2011年',
                        type: 'bar',
                        // data: [18, 23, 29, 10, 13, 6,22,34,14,11,21,33]
                        data: [25]

                    }
                ]
            });
        },
        ArrData(){
            // let data = this.$route.query.id;
            // let data = 150;
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScore/showResultt',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                var aa = res.data;
                let bb = aa.map(item=>{
                    if(item=="RA"){
                        item = "艺术形象-研究与探索"
                    }else if(item=="RN"){
                        item = "自然事物-研究与探索"
                    }else if(item=="UN"){
                        item = "自然事物-使用与维护"
                    }else if(item=="PN"){
                        item = "自然事务-规划与实施"
                    }else if(item=="RT"){
                        item = "人造事物-研究与探索"
                    }else if(item=="PT"){
                        item = "人造事物-规划与实施"
                    }else if(item=="UT"){
                        item = "人造事物-使用与维护"
                    }else if(item=="RM"){
                        item = "数学符号-研究与探索"
                    }else if(item=="PM"){
                        item = "数学符号-规划与实施"
                    }else if(item=="UM"){
                        item = "数学符号-使用与维护"
                    }else if(item=="RL"){
                        item = "语言符号-研究与探索"
                    }else if(item=="PL"){
                        item = "语言符号-规划与实施"
                    }else if(item=="UL"){
                        item = "语言符号-使用与维护"
                    }else if(item=="RA"){
                        item = "艺术形象-研究与探索"
                    }else if(item=="UA"){
                        item = "艺术形象-使用与维护"
                    }else if(item=="RS"){
                        item = "社会制度-研究与探索"
                    }else if(item=="PS"){
                        item = "社会制度-规划与实施"
                    }else if(item=="US"){
                        item = "社会制度-使用与维护"
                    }else if(item=="RI"){
                        item = "个体生命-研究与探索"
                    }else if(item=="PI"){
                        item = "个体生命-规划与实施"
                    }else if(item=="UI"){
                        item = "个体生命-使用与维护"
                    }
                    return item;
                })
                // var arr = res.data.join(",")
                // var b = arr.replace(/RA/,"艺术形象-研究与探索")
                // console.log(typeof(cc),'cccbb')
                // console.log(bb,'cccbb')
                this.Arrdata = bb.join(",");
             }),(err)=>{
                console.log(err)
            }
        }
    }        
}
</script>

<style scoped media="print">
    li{
        list-style: none;
        margin-top: 20px;
        margin-left: 30px;
    }
    @media print{
       .rightBot{
            height: 30px;
            background: black;
            -webkit-print-color-adjust: exact; 
            margin-top: 70px;
        }
    }
    @media screen and (min-width: 1200px){
        .box{
            width: 1100px; 
            margin: 20px auto;
            margin-top: 150px;
        }
        .Repor{
            width: 1100px; 
            height: 602px;
            margin: 0 auto;
        }
        .ReporTw{
             width: 300px; 
            height: 100px;
        }
        .rightBot{
            /* height: 30px; */
            background: black;
            margin-top: 70px;
        }
    }
    @media screen and (max-width: 1199px){
        .box{
            width: 800px; 
            margin: 20px auto;
            margin-top: 150px;
        }
        .Repor{
            width: 800px; 
            height: 602px;
            margin: 0 auto;
        }
         .ReporTw{
             width: 200px; 
            height: 100px;
        }
        .rightBot{
            height: 30px;
            margin-top: 50px;
            background: pink;
            margin-top: 70px;
        }
    }
</style>