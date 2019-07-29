<template>
    <div class="box">
        <h1 style="text-align:left;">{{header}}</h1>
        <div id="myChart" class="Repor"></div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            header:"三,职业兴趣维度",
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
        }
    },
    created(){
        // console.log(this.$route.query.id,'aa')
        let data = this.$route.query.id;
        axios.post('http://192.168.1.100:8080/AssessScore/showNum',
          data,
          {headers:{'Content-Type':"application/json; charset=UTF-8"}}
          )
          .then((res)=>{
            let aa = res.data;
            // let aa = this.graph;
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

    },
    methods:{
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
            axios.post("http://192.168.1.100:8080/AssessScore/showNum",
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
                // console.log(use,'use')
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
                // myChart.setOption(option);//设置option
        }
    }
}

</script>

<style scoped>
    @media (min-width: 1200px) { 
        .box{
            width: 1205px; 
            margin: 0 auto;
        }
        .Repor{
            width: 1105px; 
            height: 602px;
            margin: 0 auto;
        }
    }
    @media screen and (max-width: 1200px) { 
        .Repor{
            width: 800px; 
            height: 602px;
            margin: 0 auto;
            /* background: red */
        }
    } 
    @media screen and (max-width: 901px) { 
        .Repor{
            width: 500px;
            /* background: salmon; */
            height: 602px;
            margin: 0 auto;
        } 
    } 
</style>

