<template>
    <div>
        <div id="myChart" :style="{width: '1205px', height: '602px',margin:'0 auto'}"></div>
        {{study}}
        {{design}}
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
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
             graph:[]
        }
    },
    created(){
        let data = this.$route.query.id;
        axios.post('http://192.168.1.186:8080/AssessScore/showNum',
          data,
          {headers:{'Content-Type':"application/json; charset=UTF-8"}}
          )
          .then((res)=>{
            this.graph = res.data;
            let aa = this.graph;
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

        // var myChart = this.$echarts.init(document.getElementById('myChart'));//获取容器元素
        //     let option = {
        //         tooltip : {
        //             trigger: 'axis',
        //             axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //                 type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //             }
        //         },
        //         legend: {
        //             // data:['直接访问','联盟广告','搜索引擎']
        //             data:this.stateL
        //         },
        //         grid: {
        //             left: '3%',
        //             right: '4%',
        //             bottom: '3%',
        //             containLabel: true
        //         },
        //         xAxis : [
        //             {
        //                 type : 'category',
        //                 data:this.tit
        //             }
        //         ],
        //         yAxis : [
        //             {
        //                 type : 'value'
        //             }
        //         ],
        //         series : [
        //             {
        //                 name:this.stateOne,
        //                 type:'bar',
        //                 data:this.study
        //             },
        //             {
        //                 name:this.stateTwe,
        //                 type:'bar',
        //                 stack: '广告',
        //                 data:this.design
        //             },
        //             {
        //                 name:this.stateThree,
        //                 type:'bar',
        //                 data:this.use,
        //                 markLine : {
        //                     lineStyle: {
        //                         normal: {
        //                             type: 'dashed'
        //                         }
        //                     },
        //                 }
        //             },
        //         ]
        //     };
        //         myChart.setOption(option);//设置option
        // console.log('echarts')
        // }
        this.drawLine();

    },
    methods:{
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
                xAxis : [
                    {
                        type : 'category',
                        data:this.tit
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:this.stateOne,
                        type:'bar',
                        data:this.study
                    },
                    {
                        name:this.stateTwe,
                        type:'bar',
                        stack: '广告',
                        data:this.design
                    },
                    {
                        name:this.stateThree,
                        type:'bar',
                        data:this.use,
                        markLine : {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                        }
                    },
                ]
            });
            let data = this.$route.query.id;
             axios.post("http://192.168.1.186:8080/AssessScore/showNum",
             data,
             {headers:{'Content-Type':"application/json; charset=UTF-8"}}
             ) 
             .then((res) => {
                let aa = res.data;
                let study = [aa[0],aa[3],aa[6],aa[9],aa[12],aa[15],aa[18]];
                let design = [aa[1],aa[4],aa[7],aa[10],aa[13],aa[16],aa[19]]
                let use = [aa[2],aa[5],aa[8],aa[11],aa[14],aa[17],aa[20]]
                // this.study = study;
                // this.design = design;
                // this.use = use;
                console.log(use,'use')
             })
                // myChart.setOption(option);//设置option
    }
}
}

</script>

<style scoped>

</style>

