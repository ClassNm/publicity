<template>
    <div>
        <div id="bodycontent_contentbody_divSurveyGuide" 
        class="surveydetail"
        onselectstart="return false"
        v-bind:style="{overflow: activeColor}"
        ref="headbox"
        >
            <div id="cvs" 
                 class="surveydetailTw" 
                 :name="item.typ"  
                 v-for="(item,i) in title" 
                 :key="i" 
                 @click="topicFun(item,i)"
                 v-bind:style="{display: activeColorOver}"
                 >
                 <!-- ref="displayTit" -->
                <p class="descs fb">{{item.tid}}、{{item.matter}}</p>
                <a type="primary" @click="modal1 = true" style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意见反馈</a>
                <Modal
                    v-model="modal1"
                    title="意见反馈"
                    @on-ok="okK"
                    @on-cancel="cancel">
                    <Input v-model="value5" type="textarea" placeholder="填写你的建议" />
                </Modal>
                <div class="sels_list" >
                    <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid" 
                           v-for="(item,i) in list" 
                           :key="item.id"
                           :value = "item.id"
                           >
                            <label>
                                <input type="radio" v-model="redio" :value="item.object" @click="present(item,i)"/>
                                {{item.object}}
                            </label>
                        </p>
                        <p class="i_bot"></p>
                    <Button @click="submit($event)" style="margin-left: 2%;">下一题</Button>
                </div>
                <!-- <Button @click="submit($event)">下一题</Button> -->
            </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data(){
        return{
            // 反馈
            value5:"",
             modal1: false,
            // 判断下一题
            ok:true,
            // 兴趣提 1
            a : 1,
            // 兴趣的id
            eeea : "",
            // 个性提 2
            b : 2,
            sel : "",
            // ubid
            ubid:"",
            judge:"",
            // 多选
            title:[],
            list:[],
            // 兴趣提结果
            type:"",
            topic:"",
            matter:"",
            score:"",
            activeColor: 'hidden',
            activeColorOver:'block',
            //   radio重置
            redio:"",
            // 页面加载时的时间
            CreaTime:"",
            aaa:"",
            // 判断题目0 or null
            mentality : ""
        }
    },
    created(){
        // this.CreaTime = new Date()
        this.ubid = this.$route.query.id;
        this.judge = this.$route.query.judge;
        // let AnsIDNumb = this.$route.query.id;
        // AnsID(AnsIDNumb)
    },
    mounted(){
        // this.async();
        this.condition()
        // if(this.mentality == 0 ){
        //     this.rubric()
        // }else{
        //     this.rubric();
        // }
        //    兴趣题 题目  答案选项
        // this.rubric();
        // this.confirm();
    },
    methods:{
        // 意见方法
        okK () {
            this.$Message.info('收到您的意见');
            if(this.value5!=""){
                let data = {
                    matter:this.matter,
                    content:this.value5,
                    uid:this.ubid
                }
                axios.post('http://47.104.245.242:8085/AssessFeedback/save_feedback',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    
                }),(err)=>{
                    console.log(err)
                }
                this.value5 = ""
            }
            
        },
        cancel () {
            this.$Message.info('返回');
        },
        confirm () {
                this.$Modal.confirm({
                    title: '心理题',
                    content: '<p>16道题</p>',
                    onOk: () => {
                        // this.$Message.info('Clicked ok');
                    }
                });
        },
        // 判断条件发id
        condition(){
            let save = this.ubid;
            // let save = 10;
            axios.post('http://47.104.245.242:8085/AssessMatter/Matter_xinLi',
            save,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.mentality = res.data[0].typ
                this.rubric();
            }),(err)=>{
                console.log(err)
            }
        },
        // 展示的题跟答案
        rubric(){
            // 题目
             let data = this.ubid;
            axios.post('http://47.104.245.242:8085/AssessMatter/Matter_xinLi',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.title = res.data
            }),(err)=>{
                console.log(err)
            };
            this.answer();    
        },

        answer(){
            // 选项
            let obj3 = 3;
            axios.post('http://47.104.245.242:8085/AssessObject/obj3',
            obj3,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.list = res.data
            }),(err)=>{
                console.log(err)
            };
        },

      // 兴趣题目
        topicFun(index){
            this.type = index.typ;
            this.topic = index.id
            this.matter = index.matter   
        },
        // 获取兴趣题的id
        present(index){
            this.score = index.id;
        },
        submit(e){
            // 类型
            let typ = this.type;
            // 题号  
            let mid =  this.topic;
            // 分值 id
            let score = this.score;
            // 用户id router传参的值
            let uid = this.ubid;
            // 题
            let matter = this.matter;

            let data = {
                typ : typ,
                id : mid,
                score : score,
                uid : uid,
                matter : matter,
                code : 1
                // time:a`
            }
            let obj = [];
            obj.push(data)
            if(typ == "" || score == "" || matter == ""|| uid == undefined){
                this.$Message.warning('请选择一个答案并点击下一题');
            }else{
                axios.post('http://47.104.245.242:8085/AssessScoreXinli/save_xinli',
                    data,
                    {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                    )
                    .then((res)=>{
                    }),(err)=>{
                        console.log(err)
                    }
                this.type = "",
                this.topic = "",
                this.score = "",
                this.title.shift()
                this.redio = "";
                this.matter = "";
                // this.aaa = ""
                // let displayTit = this.$refs.displayTit[length];
                // displayTit.style.display = "none";
                // console.log(displayTit)
                if(this.title.length == 0){
                    let headbox = this.$refs.headbox
                    headbox.style.display = "none"
                    let id = this.ubid;
                    this.$router.push({path:'/reported',query:{id:id}})
                    this.Starting();
                }
                //  this.Starting();
            }
        },
         Starting(){
            let timec = new Date();
            let time = timec.getTime();
            let uid  = this.$route.query.id;
            let data = {
                stop : time,
                uid : uid,
            }
            axios.post('http://47.104.245.242:8085/AssessTime/save_stop',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{

            }),(err)=>{

            }
        },
    }
}
</script>

<style scoped>
     .surveydetail{
        width: 800px;
        height: 3500px;
        overflow: hidden;
        margin: 50px auto 300px
    }
    .surveydetailTw{
        width: 800px;
        height: 3500px;
        overflow: hidden;
        margin: 100px auto
    }
     div {
        display: block;
    };
    .test_contents {
        border: 1px;
        margin: 8px;
        margin-top: 10px;
        padding: 7px;
        width: 800px;
        display: block;
    };
    .surveydetail p {
        line-height: 26px;
        margin: 0px;
        padding: 0px;
    }
    .descs {
        font-size: 14px;
        font-weight: bold;
        display: inline-block;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    .sels_list {
        width: 800px;
        height: 600px;
    }
    .sels_list .items {
        cursor: pointer;
        display: block;
        padding-top: 5px;
        width: 800px;
        text-align: left;
        margin-left: 40%;
    }
    .sels_list .items .i_top, .sels_list .items .i_bot {
        height: 5px;
        width: 800px;
    }
    .sels_list .items .i_mid {
        padding: 2px 9px 2px 15px;
    }
    .sels_list .items .sels {
        padding-right: 8px;
        vertical-align: middle;
    }
</style>
