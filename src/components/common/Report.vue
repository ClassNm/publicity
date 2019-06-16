<template>
    <div>
        <div id="myChart" :style="{width: '1205px', height: '602px',margin:'0 auto'}"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tit:['自然事物','人造事物','艺术符号','数字符号','语言符号','社会制度','个体生命'],
            stateL:['第一部分','第二部分','第三部分'],
            stateOne:"第一部分",
            stateTwe:"第二部分",
            stateThree:"第三部分",
        }
    },
    created(){
        
    },
    mounted(){
        var myChart = this.$echarts.init(document.getElementById('myChart'));//获取容器元素
        let option = {
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
            // data : ['自然事物','人造事物','艺术符号','数字符号','语言符号','社会制度','个体生命']
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
            data:[5, 3, 2,6,3,3,3]
        },
        {
            name:this.stateTwe,
            type:'bar',
            stack: '广告',
            data:[3, 2, 3,3,3,3,3]
        },
        {
            name:this.stateThree,
            type:'bar',
            data:[3, 2, 3,3,3,3,3],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
            }
        },
    ]
};
            
            myChart.setOption(option);//设置option
    }
}

</script>

<style scoped>

</style>

