<template>
    <div>
        <div id="Radar" class="Repor"></div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            // 用户uid
            uid:"",
            header:['预算分配（Allocated Budget）']
        }
    },
    created(){
        // let data = this.$route.query.id;
        // axios.post('http://192.168.1.100:8080/AssessScore/showNum',
        //   data,
        //   {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        //   )
        //   .then((res)=>{
        //     let aa = res.data;
        //     // let aa = this.graph;
        //   }),(err)=>{
        //       console.log(err)
        //   }

        
    },
    mounted(){
        // 调用echarts的方法实例  防止出现异步操作
        this.drawLine();

    },
    methods:{
        // echarts调用方法 的案例
        drawLine(){
            var myChart = this.$echarts.init(document.getElementById('Radar'));//获取容器元素
            myChart.setOption({
                    tooltip: {},
                    legend: {
                        data: this.header
                    },
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
                        { name: '内向（Introverted）', max: 6500},
                        { name: '具体（Specific）', max: 16000},
                        { name: '理性（Reason）', max: 30000},
                        { name: '严谨（Preciseness）', max: 38000},
                        { name: '外向（Extroversion）', max: 52000},
                        { name: '抽象（Abstract）', max: 25000},
                        { name: '感性（Sensibility）', max: 45000},
                        { name: '灵活（Agility）', max: 55000}
                        ]
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000,40000,45000],
                                name : '预算分配（Allocated Budget）'
                            }
                        ]
                    }]
            })
        }
    }
}

</script>

<style scoped>
    @media (min-width: 1200px) { 
        .Repor{
            width: 1205px; 
            height: 602px;
            margin: 0 auto;
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

