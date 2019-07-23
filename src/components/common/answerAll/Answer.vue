<template>
    <div class="surveydetailout" id="surveydetailout" >
        <FirstRadio v-if="ok"></FirstRadio>
        <!-- <AnswerCheck></AnswerCheck>      -->
        <button @click="disPla">显示</button>
    </div>
</template>

<script>
// 105道单选
import FirstRadio from './FirstRadio'
// 3道多选
// import AnswerCheck from './AnswerCheck'

import axios from 'axios';
// import { setTimeout } from 'timers';

// axios方法
// import { AnsID } from '../../../actions'

export default {
    data(){
        return{
            // ubid
            ubid:"",
            judge:"",
            ok:false
        }
    },
    components:{
        FirstRadio,
        // AnswerCheck
    },
    created(){
        // this.CreaTime = new Date()
        this.ubid = this.$route.query.id;
        this.judge = this.$route.query.judge;
        
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
    };
    div {
        display: block;
    };
</style>
