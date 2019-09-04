<template>
    <div class="box">
        <h1 style="margin-bottom:60px;">第二部分:职业人格测验结果</h1>
        <span style="text-align:left;display:block;font-size:18px;font-weight:bolder;">一、你的职业人格雷达图</span>
        <div id="Radar" class="Repor"></div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
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
                         { name: '心理倾向', max: 21},
                        { name: '行为方式', max: 21},
                        { name: '认知风格', max: 21},
                        { name: '信息偏好', max: 21},
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
                        name: '职业人格维度',
                        type: 'radar',
                        data : [
                            {
                                value : this.score,
                                name : '职业人格维度'
                            }
                        ]
                    }]
                })
            })
        },
    }
}
</script>

<style scoped>
     @media screen and (min-width: 1200px){
        .box{
            width: 1100px;
            margin: 0 auto;
            margin-top: 150px;
        }
        .Repor{
            width: 600px; 
            height: 602px;
            margin: 0 auto;
            display: inline-block
        }
    }
</style>