<template>
    <div class="Repor">
        <Table :columns="columns1" :data="data1" ></Table>
        <div class="fouter">
            <ul style="margin-top:8px">
                <Icon type="ios-alert" class="IvIcon" size="20"/>
                报告说明
                <li v-for="(item,i) in explain" :key="i" class="fouterSon" :title="item.name">{{item.name}}</li>
            </ul>
        </div>
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
                axios.post('http://47.104.245.242:8081/assessReport/show_Report',
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
    /* ul{
        display: block;
        margin:0;
        padding:0
    } */
    @media screen and (min-width: 1200px){
         .Repor{
            width: 1205px; 
            margin: 0 auto;
            /* display: flex; */
            /* justify-content: center; */
            /* align-items: center */
        }
        
        @media print {
            body, article {
                width: 100%;
                margin: 0;
                padding: 0;
            }
            .Repor{
                width: 1205px; 
            }
            .fouter{
            margin-top: 20px;
            width: 1205px;
            background: #fff9f9;
            border: 1px dashed red !important;

            }
            .fouterSon{
                width: 100%;
            }
        }
        .fouter{
            margin-top: 20px;
            width: 1205px;
            background: #fff9f9;
            border: 1px dashed red !important;

        }
        .fouterSon{
            display: flex !important;
            width: 100%;
            justify-content: flex-start;
            margin-top: 5px !important;
            white-space:nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
        }
     }
    @media screen and (max-width: 1199px){
        .Repor{
            width: 800px; 
            margin: 0 auto;
        }
        .fouter{
            margin-top: 20px;
            text-align: left;
            background: #fff9f9;
            width: 800px;
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
