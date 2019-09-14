<template>
    <div class="box">
        <img src="../../../assets/111.png" alt="">
        <h1 class="tit">全职四维生涯测评分析报告</h1>
        <div class="head" style="letter-spacing: 5px;">{{name}}</div>
        <div class="head">{{this.data1[0].time}}</div>
        <!-- <li class="bot">一段文字.....................................</li> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            name:"",
            data1: [
                    {
                        time: '',
                    }
            ]
        }
    },
    mounted(){
        this.ShowUser()
        this.echo();
    },
    methods:{
        ShowUser(){
                let data = this.$route.query.id;
                axios.post('http://47.104.245.242:8081/assessReport/show_User',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    let arr = res.data[0]
                    this.name = arr.name;
                    // console.log(arr,'arr')
                }),(err)=>{
                    console.log(err)
                }
        },
        // 获取时间  后台给的毫秒自己换算
            getMyDate(str) {
                var oDate = new Date(str),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth()+1,
                oDay = oDate.getDate(),
                oHour = oDate.getHours(),
                oMin = oDate.getMinutes(),
                oSen = oDate.getSeconds(),
                oTime = oYear +'-'+ this.addZero(oMonth) +'-'+ this.addZero(oDay) +' '+ this.addZero(oHour) +':'+
                this.addZero(oMin) +':'+this.addZero(oSen);
                return oTime;
            },
            addZero(num){
                if(parseInt(num) < 10){
                    num = '0'+num;
                }
                return num;
            },
            echo(){
                let uid  = this.$route.query.id;
                axios.post('http://47.104.245.242:8081/AssessTime/show_time',
                uid,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    let arr = res.data;
                    let timeStart = arr.start;
                    let timeStop = arr.stop;
                    let Difference = timeStop - timeStart;
                    var dateTime = this.getMyDate(parseInt(timeStart));
                    var minutes = parseInt((Difference % (1000 * 60 * 60)) / (1000 * 60));
                    let ary = this.data1[0]
                    ary.time = dateTime
                    ary.schedu = minutes+"分钟"
                }),(err)=>{

                }
            }
    }
}
</script>

<style scoped media="print">
    @page{
    /* size: auto A4 landscape; */
    /* margin-left: 3mm; */
    }
    @media print{
    }
    /* @page:right{
        @bottom-left {
            margin: 10pt 0 30pt 0;
            border-top: .25pt solid #666;
            content: "Our Cats";
            font-size: 9pt;
            color: #333;
        }
        @bottom-right { 
            margin: 10pt 0 30pt 0;
            border-top: .25pt solid #666;
            content: counter(page);
            font-size: 9pt;
        }


        @top-right{
            content: "Our Cats";
            font-size: 9pt;
            color: red;
        }
    } */
    li{
        list-style: none;
    }
    .box{
        width: 1100px;
        margin: 0 auto;
        margin-top: 100px;
    }
    img{
        width: 700px;
        height: 110px;
        margin: 50px 0 100px 0;
    }
    .tit{
        margin-bottom: 150px;
    }
    .head{
        font-size: 20px;
        display: block;
        margin-bottom: 30px;
        font-weight: bolder;
    }
    .bot{
        font-size: 15px;
        display: block;
        text-align: left;
        letter-spacing: 2px;
    }
</style>