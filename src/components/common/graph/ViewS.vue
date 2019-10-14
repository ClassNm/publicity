<template>
    <div class="box">
        <h1 style="font-size:30px;">第六部分：专业大视野</h1>
        <div class="dashedT" style="margin-top:20px;">
            <span style="text-align:left;display:block;margin-bottom:20px;font-size:20px;font-weight:bolder;margin-top:50px;margin-left:20px;">
                根据全职四维生涯测评系统对四个因素进行系统的测评，现根据测评结果，将所有适合你学习的专业进行展示，以供参考：
            </span>
            <Table border :columns="columns1" :data="data1" style="width:1000px;margin:0 auto;margin-bottom:20px;"></Table>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            columns1: [
                {
                    title: '类别',
                    key: 'name'
                },
                {
                    title: '学科',
                    key: 'age'
                },
                {
                    title: '专业',
                    key: 'major'
                }
            ],
            data1: [
                {
                    name: "理学",
                    age: '地理科学类',
                    major:"人文地理与城乡规划"
                },
                {
                    name: "管理学",
                    age: '电子商务类',
                    major:"电子商务"
                },
                {
                    name: "管理学",
                    age: '电子商务类',
                    major:"电子商务及法律"
                },
                {
                    name: "法学",
                    age: '法学类',
                    major:"知识产权"
                }
            ]
        }
    },
    mounted(){
        // this.ShowMTyoe()
    },
    methods:{
        ShowMTyoe(){
            // let data = 1;
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessMbtiCopy/show_jieguo',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                let aa = res.data;
                let bb = aa.map(item=>{
                    if(item.part === 0){
                        item.part = "不符合"
                    }else{
                        item.part = "符合"
                    }
                     if(item.typ=="RA"){
                        item.typ = "艺术形象-研究与探索"
                    }else if(item.typ=="RN"){
                        item.typ = "自然事物-研究与探索"
                    }else if(item.typ=="UN"){
                        item.typ = "自然事物-使用与维护"
                    }else if(item.typ=="PN"){
                        item.typ = "自然事务-设计与创造"
                    }else if(item.typ=="RT"){
                        item.typ = "人造事物-研究与探索"
                    }else if(item.typ=="PT"){
                        item.typ = "人造事物-设计与创造"
                    }else if(item.typ=="UT"){
                        item.typ = "人造事物-使用与维护"
                    }else if(item.typ=="RM"){
                        item.typ = "数学符号-研究与探索"
                    }else if(item.typ=="PM"){
                        item.typ = "数学符号-设计与创造"
                    }else if(item.typ=="UM"){
                        item.typ = "数学符号-使用与维护"
                    }else if(item.typ=="RL"){
                        item.typ = "语言符号-研究与探索"
                    }else if(item.typ=="PL"){
                        item.typ = "语言符号-设计与创造"
                    }else if(item.typ=="UL"){
                        item.typ = "语言符号-使用与维护"
                    }else if(item.typ=="RA"){
                        item.typ = "艺术形象-设计与创造"
                    }else if(item.typ=="UA"){
                        item.typ = "艺术形象-使用与维护"
                    }else if(item.typ=="RS"){
                        item.typ = "社会制度-研究与探索"
                    }else if(item.typ=="PS"){
                        item.typ = "社会制度-设计与创造"
                    }else if(item.typ=="US"){
                        item.typ = "社会制度-使用与维护"
                    }else if(item.typ=="RI"){
                        item.typ = "个体生命-研究与探索"
                    }else if(item.typ=="PI"){
                        item.typ = "个体生命-设计与创造"
                    }else if(item.typ=="UI"){
                        item.typ = "个体生命-使用与维护"
                    }
                    return item;
                })
                this.data1 = res.data;
                console.log(res.data,'222')
            })
        }
    }
}
</script>

<style scoped>
     @media print{
        .dashedT{
            border: 1px dashed black;
        }
    }
     @media screen and (min-width: 1200px){
        .box{
            width: 1100px;
            margin: 0 auto;
            margin-top: 100px;
        }
        .dashedT{
            border: 1px dashed black;
        }
        
    }
   @media screen and (max-width: 1199px){
        .box{
            width: 800px;
            margin: 0 auto;
            margin-top: 100px;
        }
        .dashedT{
            border: 1px dashed black;
        }
   }
</style>