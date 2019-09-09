<template>
    <div class="surveydetailout" id="surveydetailout" >
        <!-- <FirstRadio v-if="ok" v-on:listTop="helloFn"></FirstRadio> -->
        <!-- <AnswerCheck v-if="Two" :typTwo="typTwo"></AnswerCheck> -->
        <FillReport></FillReport>
        <Submitfile></Submitfile>
        <!-- <TwoRadio v-if="Thr"></TwoRadio>   -->
        <!-- <FourRadio></FourRadio>    -->
    </div>
</template>

<script>
// 105道单选
import FirstRadio from './FirstRadio'
// 3道多选
import AnswerCheck from './AnswerCheck'
// xinli 单选 16
import TwoRadio from './TwoRadio'

// mbti 能力  心理 
// 填报告
import FillReport from './FillReport'
import Submitfile from './Submitfile'

// MBTI 单选 32
import FourRadio from './FourRadio'

import axios from 'axios';

export default {
    data(){
        return{
            // ubid
            ubid : "",
            judge : "",
            ok : true,
            Two : true,
            Thr : true,
            Fourr : true,
            typTwo:"1"
        }
    },
    components:{
        FirstRadio,
        AnswerCheck,
        FillReport,
        Submitfile,
        TwoRadio,
        FourRadio
    },
    created(){
        this.ubid = this.$route.query.id;
        this.judge = this.$route.query.judge;
        if(this.judge==="第二部分没做"||this.judge==="第二部分没做完"){
            this.ok = false
        }else if(this.judge==="第三部分没做"||this.judge==="第三部分没做完"){
            this.ok = false
            this.Two = false
        }else if(this.judge==="第四部分没做"||this.judge==="第四部分没做完"){
            this.ok = false
            this.Two = false
            this.Thr = false
        }
    },
    mounted(){
        this.Starting();
    },
    methods:{
        Starting(){
            let timec = new Date();
            let time = timec.getTime();
            let uid  = this.$route.query.id;
            let data = {
                start : time,
                uid : uid,
            }
            axios.post('http://47.104.245.242:8081/AssessTime/save_start',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{

            }),(err)=>{

            }
        },
        helloFn(){
            this.typTwo = 2
        }
    }
}
</script>

<style  scoped>
    .surveydetailout {
        position: relative;
        width: 500px;
        height: 3500px;
        margin: 50px auto 300px;
        overflow: hidden;
    };
    div {
        display: block;
    };
</style>
