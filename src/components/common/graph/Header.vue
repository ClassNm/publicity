<template>
    <div class="Repor">
        <h1 style="letter-spacing: 60px;margin-bottom:100px;margin-top:80px;">个人信息</h1>
        <div class="tit">
            <span style="width:110px;display: inline-block;">姓&nbsp;名：</span>
            {{this.data1[0].name}}
        </div>
        <div class="tit">
            <span style="width:110px;display: inline-block;">出生年月：</span>
            瓦达瓦达瓦我
        </div>
        <div class="tit">
            <span style="width:110px;display: inline-block;">学校：</span>
            瓦达瓦吊袜带哇
        </div>
        <div class="tit">
            <span style="width:110px;display: inline-block;">班级：</span>
            瓦达瓦达瓦多
        </div>
        <div class="tit">
            <span style="width:110px;display: inline-block;">报告日期：</span>
            {{this.data1[0].time}}
        </div>
        
        <div style="border:1px solid black;width:900px;margin:0 auto;margin-top:200px;margin-bottom:50px;height: 260px;">
            <h1 style="text-align:left;margin-left:30px;margin-top: 30px;">温馨提示</h1>
            <span class="titBot">请凭测试账号，密码和测试地址登录系统，我们还为你准备了更丰富的有关大学，专业，学习以及未来职业发展相关的信息，欢迎登录了解</span>
            <span class="titBot">账号：aiwaodj21211232</span>
            <span class="titBot">密码：531232</span>
        </div>

        <span style="letter-spacing: 5px;font-weight: bolder;margin-bottom:50px;display:block;">*保密：个人账号未经许可不得传阅</span>

        <!-- <Table :columns="columns1" :data="data1" ></Table> -->

        <!-- <div class="fouter" style="width:1100px;text-align:left;margin-top:10px;">
            <ul class="explain" style="margin-top:8px;text-align:left;">
                <Icon type="ios-alert" class="IvIcon" size="20" style="text-align:left;"/>
                报告说明
                <li 
                v-for="(item,i) in explain" 
                :key="i" class="fouterSon" 
                :title="item.name" 
                style="text-align:left;margin:0;"
                >{{item.name}}</li>
            </ul>
        </div> -->
    </div>

</template>
<script>
import axios from 'axios';
    export default {
        data () {
            return {
                explain:[
                    
                ],
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '性别',
                        key: 'age'
                    },
                    {
                        title: '年级',
                        key: 'class'
                    },
                    {
                        title: '科类',
                        key: 'subject'
                    },
                    {
                        title: '测试时间',
                        key: 'time'
                    },
                    {
                        title: '用时',
                        key: 'schedu'
                    }
                ],
                data1: [
                    {
                        name: '',
                        age: '',
                        class:"",
                        subject: '',
                        time: '',
                        schedu: '',
                        date: '2016-10-03',
                    }
                ]
            }
        },
        mounted(){
            this.Report();
            this.ShowUser();
            this.echo();
        },
        methods:{
            Report(){
                let data = 1;
                axios.post('http://47.104.245.242:8081/assessReport/show_Report',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    this.explain = res.data
                }),(err)=>{
                    console.log(err)
                }
            },
            ShowUser(){
                let data = this.$route.query.id;
                axios.post('http://47.104.245.242:8081/assessReport/show_User',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    let arr = res.data[0]
                    let ary = this.data1[0]
                    ary.name = arr.name;
                    ary.age = arr.sex;
                    ary.class = arr.grade;
                    ary.subject = arr.artsAndSciences;
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

<style scoped midia="print">
    @media print { body { color: #000; background: #fff; } }
    li{
        list-style: none
    }
    .IvIcon{
        color: red;
    }
    @media screen and (min-width: 1200px){
         .Repor{
            width: 1100px; 
            margin: 10px auto;
            margin-top: 100px;
            border: 1px solid black;
        }
        .tit{
            margin: 20px 0;
            margin-left: 37%;
            text-align: left;
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 50px;
            /* display: inline-block; */
        }
        .titBot{
            font-size: 15px;
            display: block;
            text-align: left;
            margin-left: 30px;
            margin-top: 20px;
        }
        .fouter{
            margin-top: 20px;
            width: 1100px;
            text-align: left;
            background: #fff9f9;
            border: 1px dashed red !important;

        }
        .fouterSon{
            display: flex !important;
            width: 1100px;
            text-align: left;
            justify-content: flex-start;
            margin-top: 5px !important;
            white-space:nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
        }
        .explain{
            margin-top:8px;
            width:1000px;
            text-align:left;
        }
     }
    @media screen and (max-width: 1199px){
        .Repor{
            width: 800px; 
            margin: 0 auto;
        }
        .explain{
            margin-top:8px;
            width:800px;
            text-align:left;
        }
        .fouter{
            margin-top: 20px;
            text-align: left;
            background: #fff9f9;
            width: 800px !important;
            border: 1px dashed red;
        }
        .fouterSon{
            margin-left: 3%;
            margin-top: 5px;
            white-space:nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
        }
    }
   
</style>
