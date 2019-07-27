<template>
    <div class="surveydetailout" id="surveydetailout" >
        <FirstRadio v-if="ok"></FirstRadio>
        <AnswerCheck v-if="Two"></AnswerCheck>
        <TwoRadio v-if="Thr"></TwoRadio>  
        <FourRadio></FourRadio>   
        <button @click="disPla">显示</button>
    </div>
</template>

<script>
// 105道单选
import FirstRadio from './FirstRadio'
// 3道多选
import AnswerCheck from './AnswerCheck'
// xinli 单选
import TwoRadio from './TwoRadio'
// MBTI 单选
import FourRadio from './FourRadio'

import axios from 'axios';
// import { setTimeout } from 'timers';

// axios方法
// import { AnsID } from '../../../actions'

export default {
    data(){
        return{
            // ubid
            ubid : "",
            judge : "",
            ok : true,
            Two : true,
            Thr : true,
            Fourr : true
        }
    },
    components:{
        FirstRadio,
        AnswerCheck,
        TwoRadio,
        FourRadio
    },
    created(){
        // this.CreaTime = new Date()
        this.ubid = this.$route.query.id;
        this.judge = this.$route.query.judge;
        if(this.judge==="第二部分没做"||this.judge==="第二部分没做完"){
            this.ok = false
        }else if(this.judge==="第三部分没做"||this.judge==="第三部分没做完"){
            this.Two = false
            this.ok = false
        }else if(this.judge==="第四部分没做"||this.judge==="第四部分没做完"){
            this.Two = false
            this.ok = false
            this.Thr = false
        }
        // let AnsIDNumb = this.$route.query.id;
        // AnsID(AnsIDNumb)
    },
    mounted(){
    },
    methods:{
        disPla(){
            this.ok = true
        }
    }
}
</script>

<style  scoped>
    .surveydetailout {
        position: relative;
         width: 500px;
        height: 1000px;
        margin: 50px auto 300px;
        overflow: hidden;
    };
    div {
        display: block;
    };
</style>
