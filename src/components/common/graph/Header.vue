<template>
    <div class="Repor">
        <Table :columns="columns1" :data="data1" ></Table>
        <div class="fouter">
            <ul style="margin-top:8px">
                <Icon type="ios-alert" class="IvIcon" size="20"/>
                报告说明
                <li v-for="(item,i) in explain" :key="i" class="fouterSon">{{item.name}}</li>
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
        },
        methods:{
            Report(){
                axios.post('http://192.168.1.100:8080/assessReport/show_Report',
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
                // let data = 43
                axios.post('http://192.168.1.100:8080/assessReport/show_User',
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
            }
        }
    }
</script>

<style scoped>
    li{
        list-style: none
    }
    .IvIcon{
        color: red;
    }
    @media (min-width: 1200px) { 
        .Repor{
            width: 1205px; 
            margin: 0 auto;
        }
        .fouter{
            margin-top: 20px;
            text-align: left;
            width: 1205px;
            background: #fff9f9;
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
    @media screen and (max-width: 1200px) { 
        .Repor{
            width: 800px; 
            margin: 0 auto;
        }
        .fouter{
            text-align: left
        }
        .fouterSon{
            margin-left: 3%;
            margin-top: 5px;
            white-space:nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
        }
    } 
    @media screen and (max-width: 901px) { 
        .Repor{
            width: 500px;
            margin: 0 auto;
        } 
        .fouter{
            text-align: left
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
