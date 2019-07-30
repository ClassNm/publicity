<template>
    <div class="surveydetailout" id="surveydetailout" >
        <!-- <FirstRadio v-if="ok" v-on:listTop="helloFn"></FirstRadio> -->
        <AnswerCheck v-if="Two" :typTwo="typTwo"></AnswerCheck>
        <TwoRadio v-if="Thr"></TwoRadio>  
        <FourRadio></FourRadio>   
        <!-- <button @click="disPla">显示</button> -->
    </div>
</template>

<script>
// 105道单选
import FirstRadio from './FirstRadio'
// 3道多选
import AnswerCheck from './AnswerCheck'
// xinli 单选 16
import TwoRadio from './TwoRadio'
// MBTI 单选 32
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
            Fourr : true,
            typTwo:"1"
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
            this.ok = false
            this.Two = false
        }else if(this.judge==="第四部分没做"||this.judge==="第四部分没做完"){
            this.ok = false
            this.Two = false
            this.Thr = false
        }
        // let AnsIDNumb = this.$route.query.id;
        // AnsID(AnsIDNumb)
    },
    mounted(){
        // 时间test实验
            // let time = new Date();
            // let TimeCl = time.getTime();
            // let CreaTime = this.CreaTime;
            // let TimeCre = CreaTime.getTime();
            // this.aaa = (TimeCl - TimeCre)/1000;
            // let a = this.aaa;
            // let aa = this.aaa - a;
            // let bb = ""
            // if(aa === 0){
            //     aa = a;
            // }else{
            
            // }
        let time = new Date();
        let TimeCl = time.getTime();
        let a = (new Date()).getTime() - 86400 * 3 * 1000;
        let b = time.toLocaleString( ); 
        var mytime=time.toLocaleTimeString();
        console.log(b,'bbb')
        this.Starting();
        // console.log(this.typTwo,'2222222222222222')
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
            axios.post('http://192.168.1.100:8080/AssessTime/save_start',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{

            }),(err)=>{

            }
        },
        disPla(){
            this.ok = true
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
        height: 1000px;
        margin: 50px auto 300px;
        overflow: hidden;
    };
    div {
        display: block;
    };
</style>
