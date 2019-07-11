// 圆形图
<template>
    <div>
        <div id="Roundness" class="RoundNes"></div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            // N自然事物
            nature:[],
            // T人造事物
            manMade:[],
            // A艺术符号
            art:[], 
            // M数字符号
            number:[], 
            // L语言符号
            language:[], 
            // S社会制度
            society:[], 
            // I个体生命
            unit:[], 
            // tit标题
            Tit:['N自然事物', 'T人造事物', 'A艺术符号','M数字符号','L语言符号','S社会制度','I个体生命'],
            // 背景3
            backg:['研究与探索','设计与实施','使用与维护']
        }
    },
    created(){
        let data = this.$route.query.id;
        axios.post('http://47.104.245.242:8081/AssessScore/showNum',
          data,
          {headers:{'Content-Type':"application/json; charset=UTF-8"}}
          )
          .then((res)=>{
            let aa = res.data;
            // let aa = this.graph;
            let nature = [aa[0],aa[1],aa[2]];
            let manMade = [aa[3],aa[4],aa[5]]
            let art = [aa[6],aa[7],aa[8]]
            let number = [aa[9],aa[10],aa[11]]
            let language = [aa[12],aa[13],aa[14]]
            let society = [aa[15],aa[16],aa[17]]
            let unit = [aa[18],aa[19],aa[20]]
            this.nature = nature;
            this.manMade = manMade;
            this.art = art;
            this.number = number;
            this.language = language;
            this.society = society;
            this.unit = unit;
            // console.log(aa)
            // console.log(this.nature)
            // console.log(this.manMade)
          }),(err)=>{
              console.log(err)
          }
    },
    mounted(){
        // 调用echarts的方法实例  防止出现异步操作
        this.drawLine();

    },
    methods:{
        
        drawLine(){
            var myChart = this.$echarts.init(document.getElementById('Roundness'));//获取容器元素
            // app.title = '极坐标系下的堆叠柱状图报告';

             let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8081/AssessScore/showNum',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                let aa = res.data;
                // let aa = this.graph;
                let nature = [aa[0],aa[1],aa[2]];
                let manMade = [aa[3],aa[4],aa[5]]
                let art = [aa[6],aa[7],aa[8]]
                let number = [aa[9],aa[10],aa[11]]
                let language = [aa[12],aa[13],aa[14]]
                let society = [aa[15],aa[16],aa[17]]
                let unit = [aa[18],aa[19],aa[20]]
                this.nature = nature;
                this.manMade = manMade;
                this.art = art;
                this.number = number;
                this.language = language;
                this.society = society;
                this.unit = unit;
                // console.log(aa)
                // console.log(this.nature)
                // console.log(this.manMade)

                myChart.setOption({
                angleAxis: {
                },
                radiusAxis: {
                    type: 'category',
                    data: this.backg,
                    z: 10,
                     rotate:-75
                },
                polar: {
                },
                series: [{
                    type: 'bar',
                    data: this.nature,
                    coordinateSystem: 'polar',
                    name: 'N自然事物',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: this.manMade,
                    coordinateSystem: 'polar',
                    name: 'T人造事物',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: this.art,
                    coordinateSystem: 'polar',
                    name: 'A艺术符号',
                    stack: 'a'
                },{
                    type: 'bar',
                    data: this.number,
                    coordinateSystem: 'polar',
                    name: 'M数字符号',
                    stack: 'a'
                },{
                    type: 'bar',
                    data: this.language,
                    coordinateSystem: 'polar',
                    name: 'L语言符号',
                    stack: 'a'
                },{
                    type: 'bar',
                    data: this.society,
                    coordinateSystem: 'polar',
                    name: 'S社会制度',
                    stack: 'a'
                },{
                    type: 'bar',
                    data: this.unit,
                    coordinateSystem: 'polar',
                    name: 'I个体生命',
                    stack: 'a'
                }],
                legend: {
                    show: true,
                    data: this.Tit
                }
            });

            }),(err)=>{
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
    @media (min-width: 1200px) { 
        .RoundNes{
            width: 1205px; 
            height: 602px;
            margin: 0 auto;
        }
    }
    @media screen and (max-width: 1200px) { 
        .RoundNes{
            width: 800px; 
            height: 602px;
            margin: 0 auto;
            /* background: red */
        }
    } 
    @media screen and (max-width: 901px) { 
        .RoundNes{
            width: 500px;
            /* background: salmon; */
            height: 602px;
            margin: 0 auto;
        } 
    } 
</style>
