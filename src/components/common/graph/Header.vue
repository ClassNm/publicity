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
    export default {
        data () {
            return {
                explain:[
                    {
                        name:"1,本报告为年度报告，每年发布一次。"
                    },
                    {
                        name:"2,除特殊说明外，本报告引用的数据、资料均来自中国泛海内部的报表、刊物、网站与相关统计，使用的货币单位均为人民币（元）。"
                    },
                    {
                        name:"3,本报告依据全球报告倡议组织（GRI）《可持续发展报告指南（4.0版）》，参考中国社科院《中国企业社会责任报告编写指南3.0"
                    },
                    {
                        name:"4,中国泛海控股集团有限公司（以下简称“中国泛海控股集团”“中国泛海”或“公司”）向社会公开发布的第九份企业社会责任报"
                    },
                    {
                        name:"5,。本报告从股东、客户、员工、合作伙伴、环境、社会等利益相关方角度披露"
                    },
                    {
                        name:"6,以下简称“中国泛海控股集团”“中国泛海”或“公司”）向社会公开发布的第九份企业社会责任报告。本报告从股东、客户、员工、合作伙伴、环境、社会等利益相关方角度披露了中国泛海2017年企业社会责任的履行情况。中国泛海董事会全体成员保证本报告所披露信息的真"
                    }
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
                        name: '孙小明',
                        age: '男',
                        class:"三年级二班",
                        subject: '理科',
                        time: '2019-07-24',
                        schedu: '10分50秒',
                        date: '2016-10-03',
                    }
                ]
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
