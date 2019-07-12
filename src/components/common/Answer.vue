<template>
    <div class="surveydetailout" id="surveydetailout" >
        <div id="bodycontent_contentbody_divSurveyGuide" 
        class="surveydetail" 
        onselectstart="return false"
        v-bind:style="{overflow: activeColor}" 
        >
            <div id="cvs" 
                 class="test_contents,surveydetailTw" 
                 :name="item.typ"  
                 v-for="(item,i) in title" 
                 :key="i" 
                 @click="ccc(item,i)"
                 v-bind:style="{display: activeColorOver}"
                 
                 >
                <p class="descs fb">{{item.matter}}</p>
                <div class="sels_list" >
                    <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid" 
                           v-for="(item,i) in list" 
                           :key="item.id"
                           :value = "item.id"
                            @click="eee(item,i)" 
                           >
                            <!-- <span class="sels">
                                <input type="radio" 
                                name="a1" 
                                :value="item.id" 
                                v-model='redio' 
                                >
                            </span> -->
                             <RadioGroup v-model="redio">
                                <Radio :label="item.object"></Radio>
                            </RadioGroup>
                        </p>
                        <p class="i_bot"></p>
                    </div>

                    <!-- 按钮 -->
                    <Button @click="wwww($event)">下一题</Button>
                </div>
            </div>

            <!-- 多选 -->
            <AnswerCheck></AnswerCheck>
        </div>            
    </div>
            <!-- <Button @click="wwww">Default</Button> -->
</template>

<script>

import AnswerCheck from './AnswerCheck'

// import {Test} from '../../actions.js'
import axios from 'axios';
import { constants } from 'crypto';
// import { setTimeout } from 'timers';

export default {
    data(){
        return{
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
            // 多选
            fruit: ['苹果'],
            title:[
           
          ],
            list:[
            
          ],
          fone:[
              
          ],
          foneOne:[],
          // 兴趣提结果
          interset:[
              
          ],
          intersetSon:{

          },
          aaaaa:{
            name:"111"
          },
          aaaid:"",
          type:"",
          topic:"",
          score:"",
          seeo:"color:red",
          indexPrev:'green',
          activeColor: 'hidden',
          activeColorOver:'block',
          stateNum : [],
          
        //   radio重置
          redio:""
        }
    },
    components:{
        AnswerCheck
    },
    created(){
        this.ubid = this.$route.query.id;
       // 兴趣题 题目
       let data = 1;
        axios.post('http://47.104.245.242:8081/AssessMatter/showMatter',
        data,
        {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        )
        .then((res)=>{
            this.title = res.data
        }),(err)=>{
            console.log(error)
        };

        // 兴趣题  答案选项
        let obj3 = 3;
        axios.post('http://47.104.245.242:8081/AssessObject/obj3',
        obj3,
        {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        )
        .then((res)=>{
            this.list = res.data
        }),(err)=>{
            console.log(error)
        };
    },
    methods:{
      // 兴趣题目
        ccc(index){
            this.type = index.typ;
            this.topic = index.id        
        },
        // 获取兴趣题的id
        eee(index){
            this.score = index.id;
            
        },
        wwww(e){
          // 类型
          let typ = this.type;
          // 题号  
          let mid =  this.topic;
          // 分值 id
          let score = this.score;
          // 用户id router传参的值
          // let uid = 20
          let uid = this.ubid;

          let data = {
            typ : typ,
            mid : mid,
            score : score,
            uid : uid
          }
          let obj = [];
          obj.push(data)
            if(typ == "" || mid == "" || score == "" || uid == undefined ){
                // || uid == undefined 
                this.$Message.warning('请选择一个答案并点击下一题');
            }else{
                axios.post('http://47.104.245.242:8081/AssessMatter/save',
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
            }

        //    let canvas=this.$refs.box1 || window.event.target.box1;
        //  let canvas=document.querySelector('#cvs');
        //    let canvas=this.$refs.box1
        //    console.log(canvas[length-1])
        //    canvas[length-1].style.display = "none"
        //  canvas.style.display = "none"
        //  console.log(this.title)
        // let i =1;
        // i++;
        // console.log(i,'i')
        //  this.title.shift()
        //  this.redio = ""
        // let title = this.title
        // title.splice(0,1)
        //    canvas.shift()
        //    console.log(this.title.length)
            // console.log(this.title)
        }
    }
}
</script>

<style  scoped>
    .surveydetail{
        width: 500px;
        height: 600px;
        overflow: hidden;
        margin: 100px auto
    }
    .surveydetailTw{
        width: 500px;
        height: 600px;
        overflow: hidden;
        margin: 100px auto
    }
    .surveydetailout {
        position: relative;
    };
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
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    .sels_list {
        /* overflow: hidden; */
        width: 500px;
        height: 600px;
    }
    .sels_list .items {
        cursor: pointer;
        display: block;
        padding-top: 5px;
        width: 640px;
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
