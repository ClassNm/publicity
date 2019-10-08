<template>
    <div class="box">
        <h1 style="margin-bottom:60px;font-size:30px;">第一部分：全职兴趣测验结果</h1>
        <div class="dashedT">
            <span style="font-weight:bolder;text-align:left;display:block;font-size:20px;margin:50px 10px 20px 20px;">（一）测验概要</span>
            <ul style="text-align:left;display:block;font-size:16px;margin:0 20px 50px 40px;">
                <li>
                    全职兴趣测验按照“对象”和“活动”两个维度系统考察一个人的职业兴趣。其中，“对象”指一个人喜欢接触并与之打交道的事物，“活动”指一个人与特定对象打交道的形式。
                </li>
                <li>
                    本测验将对象分为自然事物、人造事物、语言符号、数学符号、艺术符号、社会制度、个体生命七种类型，七种对象的含义和包含的事物如下。
                </li>
                <li>
                    （1）“自然事物”指自然界存在的各种事物，既包括山地、河流、沙漠、海洋、天空等各种自然环境，也包括在这些环境中生存的植物、动物、微生物，以及自然环境中的各种气候变化和天气现象。人类种植的各种粮食和经济作物，以及饲养的各种动物，也属于自然事物。
                </li>
                <li>
                    （2）“人造事物”指人类制造的各种事物以及制造这些事物所用的工具，既包括房屋、桥梁、道路等各种建筑物，也包括衣物、文具、家具、手机等各种生活用品，以及锄头、锤子、汽车、车床等各种生产工具。此外，人类利用动物和植物制作的各种食物，如豆腐、饼干、饮料等，也属于人造事物。
                </li>
                <li>
                    （3）“语言符号”指记录各种语言的文字，如汉字、英文、日语、法语、俄语等。语言符号是人与人之间进行交际的工具，包括以语音形式的口头语言和文字形式的书面语言。
                </li>
                <li>
                    （4）“数学符号”指人类描述事物数量特征的数字和数量符号，以及描述数字和数量符号之间关系的各种运算符号（+、-、×、÷）、关系符号（=、≤、≥）、结合符号（“()”，、“[]”，“{}”）等。
                </li>
                <li>
                    （5）“艺术符号”指各种艺术形象，主要包括视觉艺术符号（如书法、绘画、摄影、雕塑等）、听觉艺术符号（如音乐、配音等）、视-听艺术符号（如舞蹈、戏剧、影视等）三种类型。
                </li>
                <li>
                    （6）“社会制度”指反映并维护一定社会形态和结构的各种制度，包括宏观、中观、微观三个层次。宏观层次是总体社会制度或社会形态，如资本主义制度、社会主义制度；中观层次是一个社会中不同领域里的制度，如经济制度、政治制度、法律制度、文化制度、教育制度等；微观层次是集体或机构中具体的行为模式和办事程序，如考勤制度、审批制度等。
                </li>
                <li>
                    （7）“个体生命”指生活在一定自然和社会环境中，具有七情六欲和精神需要的独立生命个体，主要指人类个体，也包括与人有亲密关系的各种宠物。
                </li>
                <li>
                    本测验将活动分为研究与探索、设计与创造、使用与维护三种形式，三种活动的含义和对应的主要职业如下。
                </li>
                <li>
                    （1）“研究与探索”指通过观察、实验、计算、分析等方法，了解某一对象的特点和规律。根据对象不同，对应的职业主要包括自然科学家、工程学家、语言学家、数学家、计算机科学家、艺术家、社会学家、心理学家等。
                </li>
                <li>
                    （2）“设计与创造”是通过构思、制作/表演、测试等方法，创造出新的对象或对已有对象进行改造。根据对象不同，对应的职业主要包括农民、工人、作家、会计师、演员、雕刻师、政府官员、企业经理、教师等。
                </li>
                <li>
                    （3）“使用与维护”指通过操作使用已有对象完成特定任务，或者通过支持、养护等方法对已有对象提供保护或服务。根据对象不同，对应的职业主要包括护林员、动物饲养员、维修人员、档案管理员、财务人员、文物修理师、法官、律师、医师、护士等。
                </li>
                <li>
                    以上七种对象和三种活动形式组合，可以得到21种职业类别（见下表），根据不同的职业类别，可以确定适合的大学本科学科。
                </li>
            </ul>
            <Table border :columns="columns10" :data="data10" style="width:1000px;margin:10px auto;"></Table>
        </div>
        <div class="dashedT" style="margin-top:20px;">
            <span style="font-weight:bolder;text-align:left;display:block;font-size:20px;margin:50px 0 20px 20px;">（二）测试结果</span>
            <div style="text-align:left;display:block;font-size:16px;margin-bottom:20px;margin-left:40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您在全职兴趣测验中的得分如下：
            </div>
            <div id="myChart" class="Repor"></div>
        </div>
        
        <!-- <ul style="text-align:left;font-weight:bolder;margin-top:80px;">
            结果说明：
            <li>在全部21中职业类型中，超过15分的职业类别包括：{{Arrdata}}</li>
        </ul> -->

        <span style="font-weight:bolder;text-align:left;font-size:20px;display:block;margin-top:50px;margin-left:20px;">（三）适合的职业类别与学科门类</span>
        <div style="text-align: left;margin:20px 0 50px 40px;font-size:16px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本测验中的21种职业类别每一类的最低得分为5分，最高得分为25分，具体分值表示的是受测者的职业兴趣高低。一般认为达到或者超过18分所表现出来的职业兴趣即可充分支撑未来的职业发展，分值越高在未来从事相应职业时将会越顺利。任何职业都需要专业知识、专业能力的支撑，而专业知识又是由学科知识组成的。在明确了职业兴趣之后就要考虑各类型职业所需的学科知识的支撑，这些学科也就是在大学阶段需要学习和储备的内容。
        </div>
        <div style="text-align: left;margin:20px 0 50px 40px;font-size:16px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据测验结果，在21种职业类别中，你的得分超过18分的前8种职业类别及相应学科如下：</div>
         <div style="width:1000px;margin-top:40px;">
             <div style="height:200px;width:240px;display:inline-block;border:1px solid #ccc;">
                <div style="margin-top: 70px;">序号</div>
            </div>
            <div style="height:200px;width:250px;display:inline-block;border:1px solid #ccc;">
                <div style="margin-top: 70px;">职业类别</div>
            </div>
            <div style="height:200px;width:250px;display:inline-block;border:1px solid #ccc;">
                <div style="margin-top: 70px;">得分</div>
            </div>
            <div style="height:200px;width:250px;display:inline-block;border:1px solid #ccc;">
                <div style="margin-top: 70px;">这一类型下感兴趣的大学本科学科</div>
            </div>
            <div style="width:1000px;" v-for="(item,index) in arrTw" :key="index">
            <!-- <div style="width:1000px;"> -->
                 <div style="width:240px;height:200px;display:inline-block;border:1px solid #ccc;">
                    <div style="margin-top: 70px;">&nbsp;&nbsp;&nbsp;&nbsp;{{index+1}}</div>
                </div>
                <div style="width:250px;height:200px;display:inline-block;border:1px solid #ccc;">
                    <div style="margin-top: 70px;">&nbsp;&nbsp;&nbsp;&nbsp;{{item.typ}}</div>
                </div>  
                <div style="width:250px;height:200px;display:inline-block;border:1px solid #ccc;">
                    <div class="rightBot" :title="item.code">&nbsp;&nbsp;&nbsp;&nbsp;{{item.code}}</div>
                </div>
                <div style="width:250px;height:200px;display:inline-block;border:1px solid #ccc;">
                    <div style="margin-top: 70px;">&nbsp;&nbsp;&nbsp;&nbsp;{{item.score}}</div>
                </div>
            </div>
            <div style="text-align:center;font-size:18px;margin-top:20px;font-weight:bolder;">（注：与第八种职业类别相同分数的类型顺延推荐）</div>
            
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
            numI:1,
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
            stateL:['R研究与探索','P设计与创造','U使用与维护'],
            stateOne:"R研究与探索",
            stateTwe:"P设计与创造",
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
            columns10: [
                    {
                        title: ' ',
                        key: 'name'
                    },
                    {
                        title: 'R研究与探索',
                        key: 'age'
                    },
                    {
                        title: 'P设计与创造',
                        key: 'address'
                    },
                    {
                        title:"U使用与维护",
                        key:"bao"
                    }
                ],
                data10: [
                    {
                        name: 'N自然事物',
                        age: "自然事物-研究与探索",
                        address: '自然事物-设计与创造',
                        bao:"自然事物-使用与维护",
                        date: '2016-10-03'
                    },
                    {
                        name: 'T人造事物',
                        age: "人造事物-研究与探索",
                        address: '人造事物-设计与创造',
                        bao:"人造事物-使用与维护",
                        date: '2016-10-01'
                    },
                    {
                        name: 'L语言符号',
                        age: "语言符号-研究与探索",
                        address: '语言符号-设计与创造',
                        bao:"语言符号-使用与维护",
                        date: '2016-10-02'
                    },
                    {
                        name: 'M数学符号',
                        age: "数学符号-研究与探索",
                        address: '数学符号-设计与创造',
                        bao:"数学符号-使用与维护",
                        date: '2016-10-04'
                    },
                    {
                        name: 'A艺术形象',
                        age: "艺术形象-研究与探索",
                        address: '艺术形象-设计与创造',
                        bao:"艺术形象-使用与维护",
                        date: '2016-10-04'
                    },
                    {
                        name: 'S社会制度',
                        age: "社会制度-研究与探索",
                        address: '社会制度-设计与创造',
                        bao:"社会制度-使用与维护",
                        date: '2016-10-04'
                    },
                    {
                        name: 'I个体生命',
                        age: "个体生命-研究与探索",
                        address: '个体生命-设计与创造',
                        bao:"个体生命-使用与维护",
                        date: '2016-10-04'
                    }
                ]
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
        // 超过15分的类别
        // this.ArrData();
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
                    // item.code = item.code*10;
                    item.code+="分"
                })
                this.arrTw = res.data;
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
            /* height: 30px; */
            /* -webkit-print-color-adjust: exact;  */
            margin-top: 70px;
        }
        .dashedT{
            border: 1px dashed black;
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
            /* background: black; */
            margin-top: 70px;
        }
        .dashedT{
            border: 1px dashed black;
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
        .dashedT{
            border: 1px dashed black;
        }
    }
</style>