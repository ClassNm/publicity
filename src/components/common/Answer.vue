<template>
    <div class="surveydetailout" id="surveydetailout" >
        <div id="bodycontent_contentbody_divSurveyGuide" 
        class="surveydetail" 
        onselectstart="return false"
        v-bind:style="{overflow: activeColor}" 
        >
            <!-- <div id="qindex_1" 
                 class="test_contents,surveydetailTw" 
                 :name="item.typ"  
                 v-for="(item,i) in title" 
                 :key="i" 
                 @click="ccc(item,i)"
                 v-bind:style="{display: activeColorOver}"
                 ref="box1"
                 >
                 
                <p class="descs fb">{{i+1}}、{{item.matter}}</p>
                <div class="sels_list" >
                    <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid" 
                           v-for="(item,i) in list" 
                           :key="item.id"
                           :value = "item.id"
                            @click="eee(item,i)"  
                           >
                            <span class="sels">
                                <input type="radio" 
                                name="a1" 
                                :value="item.id" 
                                >
                            </span>
                            {{item.object}}
                        </p>
                        <p class="i_bot"></p>
                    </div> -->
                    <!-- 按钮 -->
                    <!-- <Button @click="wwww">Default</Button> -->
                <!-- </div> -->
            <!-- </div> -->
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
          foneOne:[
              {
                name:"香蕉",
                id:"1"
              },
              {
                name:"香蕉",
                id:"1"
              },
              {
                name:"香蕉",
                id:"1"
              },
              {
                name:"香蕉",
                id:"1"
              },
          ],
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
          stateNum : []

        }
    },
    components:{
        AnswerCheck
    },
    created(){

        this.ubid = this.$route.query.id;
        // console.log(this.ubid,'ubid');

       // 兴趣题 题目
      //  let a = this.a;
       let data = 1;
        // console.log(data)
        axios.post('http://192.168.1.186:8080/AssessMatter/showMatter',
        data,
        {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        )
        .then((res)=>{
            this.title = res.data
            // console.log(title)
        }),(err)=>{
            console.log(error)
        };

        // 兴趣题  答案选项
        let obj3 = 3;
        // console.log(data)
        axios.post('http://192.168.1.186:8080/AssessObject/obj3',
        obj3,
        {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        )
        .then((res)=>{
            this.list = res.data
            // console.log(res.data,'res')
        }),(err)=>{
            console.log(error)
        };

        // let see = 2;
        // axios.post('http://192.168.1.186:8080/AssessMatter/showMatter2',
        // see,
        // {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        // )
        // .then((res)=>{
        //   // 题目
        //     this.fone = res.data;
        // }),(err)=>{
        //     console.log(error)
        // }

        // 多选答案
        // let typ = 5;
        // axios.post('http://192.168.1.186:8080/AssessObject/obj5',
        // typ,
        // {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        // )
        // .then((res)=>{
        //     this.stateNum = res.data
        //     // console.log(res.data)

        //     let aim = res.data;
        //     // 根据单个名字筛选
        //     function filterByName(aim, typ) {
        //         return aim.filter(item => item.typ == typ)
        //     }
        //     // 输入 aim 'Leila' 期望输出为 [{name:'Leila', age: 16, gender:'female'}]
        //     console.log(filterByName(aim,'RN'),'RN')
        //     console.log(filterByName(aim,'PN'),'PN')
        //     console.log(filterByName(aim,'UN'),'UN')
        //     console.log(filterByName(aim,'RT'),'RT')
        //     console.log(filterByName(aim,'PT'),'PT')
        //     console.log(filterByName(aim,'UT'),'UT')
        //     console.log(filterByName(aim,'RA'),'RA')
        //     console.log(filterByName(aim,'PA'),'PA')
        //     console.log(filterByName(aim,'UA'),'UA')
        //     console.log(filterByName(aim,'RM'),'RM')
        //     console.log(filterByName(aim,'PM'),'PM')
        //     console.log(filterByName(aim,'UM'),'UM')
        //     console.log(filterByName(aim,'RL'),'RN')
        //     console.log(filterByName(aim,'PL'),'PL')
        //     console.log(filterByName(aim,'UL'),'UL')
        //     console.log(filterByName(aim,'RS'),'RS')
        //     console.log(filterByName(aim,'PS'),'PS')
        //     console.log(filterByName(aim,'US'),'US')
        //     console.log(filterByName(aim,'RI'),'RI')
        //     console.log(filterByName(aim,'PI'),'PI')
        //     console.log(filterByName(aim,'UI'),'UI')
        // }),(err)=>{
        //     console.log(err)
        // }


    },
    mounted(){
        // console.log(this.$route.query,'querty的穿差')
        // this.ubid = this.$route.query.id;
        // console.log(this.ubid,'ubid');
    },
    methods:{
      // 兴趣题目
        ccc(index){
            // console.log(index)
            // let a = index.typ;
            // let b = index.id;
            this.type = index.typ;
            this.topic = index.id
            
            
        },
        // 获取兴趣题的id
        eee(index){
          // console.log(index,'index')
            // var c = index.id;
            this.score = index.id;
            
        },
        wwww(){
          // 类型
          let type = JSON.stringify(this.type);
          // 题号  
          
          let topic =  JSON.stringify(this.topic);
          // 分值 id
          let score = JSON.stringify(this.score);
          // 用户id router传参的值
          // let uid = 20
          let ubid = JSON.stringify(this.ubid);

          let data = {
            typ : type,
            mid : topic,
            score : score,
            uid : ubid
          }
          let obj = [];
          obj.push(data)
          console.log(obj)
          axios.post('http://192.168.1.186:8080/AssessMatter/save',
          data,
          {headers:{'Content-Type':"application/json; charset=UTF-8"}}
          )
          .then((res)=>{
              console.log(res)
          }),(err)=>{
              console.log(err)
          }

          


           let canvas=this.$refs.box1;
           canvas[length-1].style.display = "none"
           canvas.shift()
        //    console.log(canvas.length)
          
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
    }
    .sels_list .items .i_top, .sels_list .items .i_bot {
        height: 5px;
        /* overflow: hidden; */
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
