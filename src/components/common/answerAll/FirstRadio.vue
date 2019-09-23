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
                <p class="descs fb">{{item.tid}}、{{item.matter}}</p>
                <a type="primary" @click="modal1 = true" style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意见反馈</a>
                <Modal
                    v-model="modal1"
                    title="意见反馈"
                    @on-ok="ok"
                    @on-cancel="cancel">
                    <Input v-model="value5" type="textarea" placeholder="填写你的建议" />
                </Modal>
                <!-- <Button @click="modal7 = true">Disable upper right corner (including Esc key)</Button>
                <Modal
                    title="Title"
                    v-model="modal7"
                    :closable="false">
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                </Modal> -->
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
                </div>

                        <p class="i_bot"></p>
                <Button @click="submit($event)" style="margin-left: 42%;text-align: left;display: block;">下一题</Button>
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
            modal7: false,
            value5:"",
            modal1: false,
            // 判断下一题
            // ok:true,
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
        }
    },
    created(){
        this.ubid = this.$route.query.id;
        this.judge = this.$route.query.judge;
        // this.confirm();
    },
    mounted(){
        this.condRubir();
    },
    methods:{
        // 意见方法
        ok () {
            this.$Message.info('收到您的意见');
            if(this.value5!=""){
                let data = {
                    matter:this.matter,
                    content:this.value5,
                    uid: this.ubid
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
                    title: '兴趣题',
                    content: '<p>105道题</p>',
                    onOk: () => {
                    }
                });
        },
        // 判断条件发id
        condRubir(){
            this.answer();
            if(this.judge === "第一部分没做"){
               this.condition()
            }else{
                this.rubric();
            }
        },
        condition(){
            let save = this.ubid;
            axios.post('http://47.104.245.242:8085/AssessMatter/saveMatter',
            save,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.rubric();
            }),(err)=>{
                console.log(err,'err')
            }
        },
        // 展示的题跟答案
        rubric(){
            // 题目
            let data = this.ubid;
            axios.post('http://47.104.245.242:8085/AssessMatter/showMatter',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.title = res.data
            }),(err)=>{
                console.log(err,'err')
            };
            // this.answer();
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
                console.log(err,'err')
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
            let uid = JSON.parse(this.ubid);
            // 题
            let matter = this.matter;
            
            let data = {
                typ : typ,
                id : mid,
                score : score,
                uid : uid,
                matter : matter,
                code : 1
            }
            let obj = [];
            obj.push(data)
            if(typ == "" || mid == "" || score == "" || matter == "" || uid == undefined){
                this.$Message.warning('请选择一个答案并点击下一题');
            }else{
                axios.post('http://47.104.245.242:8085/AssessMatter/save',
                    data,
                    {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                    )
                    .then((res)=>{
                    }),(err)=>{
                        console.log(err,'err')
                    }
                this.type = "",
                this.topic = "",
                this.score = "",
                this.title.shift()
                this.redio = "";
                this.matter = ""
                if(this.title.length == 0){
                    let headbox = this.$refs.headbox
                    headbox.style.display = "none"
                    this.sendMsg();
                }
            }
        }, 
        sendMsg(){
            this.$emit('listTop','this.message')
        }
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
        width: 670px;
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
        width: 640px;
    }
    .sels_list .items .i_mid {
        padding: 2px 9px 2px 15px;
    }
    .sels_list .items .sels {
        padding-right: 8px;
        vertical-align: middle;
    }
</style>
