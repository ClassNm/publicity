<template>
    <div class="box">
        <h1 style="font-size:30px;">第五部分：综合测评结果</h1>
        <div class="dashedT" style="margin-top:20px;">
            <span style="text-align:left;display:block;font-size:20px;font-weight:bolder;margin-top:30px;margin-left:20px;">（一）测验概要</span>
            <div style="text-align:left;display:block;font-size:16px;margin:20px 0 20px 40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本测评系统通过全职兴趣测验、四维人格测验、学科潜能调查和心理定位测验等几个方面分别测验了您的职业兴趣，并通过四个维度的测验逐渐缩小职业推荐范围。按照“大处着眼、小处着手”的思路，以职业适合度为导向积极准备大学阶段及现阶段的学习内容是有利于提高生涯规划效率的。也就是采用“职业—专业—学科”的顺序，将远期目标分解为阶段性目标，将大目标分解为小目标，整理清晰的成长路线，打造高效的人生。
            </div>
            <span 
                style="
                text-align:left;
                display:block;
                margin-bottom:20px;
                font-size:20px;
                font-weight:bolder;
                margin-top:50px;
                margin-left:20px;
                ">
                根据以上四个方面的测评结果，你感兴趣的职业类别包括以下几种：
            </span>
            <Table border :columns="columns1" :data="data1" style="width: 590px;margin: 0 auto;"></Table>
            <div style="text-align:left;display:block;font-size:16px;margin-top:20px;margin-left:40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在以上职业类别中，符合你的人格类型【{{majorTyp}}】的职业类别是{{peopleTeacj}}。
            </div>
            <div style="text-align:left;display:block;font-size:16px;margin-top:20px;margin-left:40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你的心理定位与以上职业类别不匹配的是：{{typTeachTwe}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ShowPeople}}
            </div>
            <div style="text-align:left;display:block;font-size:16px;margin-top:20px;margin-bottom:20px;margin-left:40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                根据以上判断，优先推荐的职业类别是：{{peopleTeacj}}，在这一职业类别所对应的学科中，你感兴趣的学科是：{{peoplType}}。
            </div>
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
                    title: '序号',
                    key: 'uid'
                },
                {
                    title: '职业类别',
                    key: 'typ'
                }
            ],
            data1: [],
            typTeachTwe:"",
            ShowPeople:"",
            peopleTeacj:"",
            peoplType:"",
            majorTyp:""
        }
    },
    mounted(){
        this.ShowMTyoe();
        this.typTeach();
    },
    methods:{
        determination(){
            if(this.ShowPeople==""&&this.typTeachTwe==""){
                this.typTeachTwe="无"
            }
        },
        typTeachMajor(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreMbti/show_mbti',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.majorTyp = res.data.typ
             }),(err)=>{
                console.log(err)
            }
        },
         HeathTYpp(){
            let data = this.$route.query.id;
            // let data =1 
            axios.post('http://47.104.245.242:8085/AssessMbtiCopy/show_xueke2',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
               this.peoplType = res.data;
             }),(err)=>{
                console.log(err)
            }
        },
        HeathTeach(){
            let data = this.$route.query.id;
            // let data =1 
            axios.post('http://47.104.245.242:8085/AssessMbtiCopy/show_xueke',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{

               let aa = res.data;
               let bb = aa.map(item=>{
                    if(item=="RA"){
                        item = "艺术形象-研究与探索"
                    }else if(item=="RN"){
                        item = "自然事物-研究与探索"
                    }else if(item=="UN"){
                        item = "自然事物-使用与维护"
                    }else if(item=="PN"){
                        item = "自然事务-设计与创造"
                    }else if(item=="RT"){
                        item = "人造事物-研究与探索"
                    }else if(item=="PT"){
                        item = "人造事物-设计与创造"
                    }else if(item=="UT"){
                        item = "人造事物-使用与维护"
                    }else if(item=="RM"){
                        item = "数学符号-研究与探索"
                    }else if(item=="PM"){
                        item = "数学符号-设计与创造"
                    }else if(item=="UM"){
                        item = "数学符号-使用与维护"
                    }else if(item=="RL"){
                        item = "语言符号-研究与探索"
                    }else if(item=="PL"){
                        item = "语言符号-设计与创造"
                    }else if(item=="UL"){
                        item = "语言符号-使用与维护"
                    }else if(item=="PA"){
                        item = "艺术形象-规划与实施"
                    }else if(item=="UA"){
                        item = "艺术形象-使用与维护"
                    }else if(item=="RS"){
                        item = "社会制度-研究与探索"
                    }else if(item=="PS"){
                        item = "社会制度-设计与创造"
                    }else if(item=="US"){
                        item = "社会制度-使用与维护"
                    }else if(item=="RI"){
                        item = "个体生命-研究与探索"
                    }else if(item=="PI"){
                        item = "个体生命-设计与创造"
                    }else if(item=="UI"){
                        item = "个体生命-使用与维护"
                    }
                    return item;
               })
            this.peopleTeacj = bb;
            }),(err)=>{
                console.log(err)
            }
            
        },
         typTeach(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreXinli/show_renge',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                if(res.data.length===0){
                    this.ShowPeople = ""
                }else{
                    this.ShowPeople = res.data;
                }
                this.typTeachMajor();
                this.typTeachTwee();
                this.HeathTeach();
                this.HeathTYpp();
             }),(err)=>{
                 console.log(err)
            }
        },
        typTeachTwee(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessScoreXinli/show_xingqu',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                if(res.data.length===0){
                    this.typTeachTwe = ""
                }else{
                    this.typTeachTwe = res.data;
                }
                this.determination();
             }),(err)=>{
                console.log(err)
            }
        },
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