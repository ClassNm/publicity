<template>
    <div class="surveydetailout" id="surveydetailout" >
        <div id="bodycontent_contentbody_divSurveyGuide" 
        class="surveydetail" 
        onselectstart="return false"
        v-bind:style="{overflow: activeColor}" 
        >
            <div id="qindex_1" 
                 class="test_contents" 
                 
                  
                 :name="item.typ"  
                 v-for="(item,i) in title" 
                 :key="i" 
                 @click="ccc(item,i)"
                 v-bind:style="{display: activeColorOver}"
                 ref="box1"
                 >
                 <!-- :style="seeo" -->
                 <!-- v-if="ok" -->
                 <!-- @click="ccc(item,i)" -->
                 
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
                            <!-- {{ssew}} -->
                        </p>
                        <!-- {{ssew}} -->
                        <p class="i_bot"></p>
                </div>
                    <Button @click="wwww">Default</Button>
                    <!-- <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid">
                            <span class="sels">
                                <input type="radio" name="a1" value="10941" cindex="1" qid="3412" nindex="0" checked="checked">
                            </span>有些不符合
                        </p>
                        <p class="i_bot"></p>
                    </div>
                    <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid">
                            <span class="sels">
                                <input type="radio" name="a1" value="10942" cindex="1" qid="3412" nindex="0">
                            </span>不好确定
                        </p>
                        <p class="i_bot"></p>
                    </div>
                    <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid">
                            <span class="sels">
                                <input type="radio" name="a1" value="10943" cindex="1" qid="3412" nindex="0">
                            </span>比较符合
                        </p>
                        <p class="i_bot"></p>
                    </div>
                    <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid">
                            <span class="sels">
                                <input type="radio" name="a1" value="10944" cindex="1" qid="3412" nindex="0">
                            </span>完全符合
                        </p>
                        <p class="i_bot"></p>
                    </div> -->

                    
                </div>
            </div>
            <!-- 多选 -->
            <div>
                <div v-for="(item,i) in fone" :key="i">
                    <p>{{i+1}}，{{item.matter}}</p>
                    <div v-for="(item,i) in foneOne" :key="i" :value="item" @click="ddd">
                        <!-- <CheckboxGroup v-model="item.value" > -->
                        <Checkbox :label="item.personality"></Checkbox>
                        {{item.personality}}
                        <!-- <Checkbox label="2"></Checkbox>
                        <Checkbox label="3"></Checkbox>
                        <Checkbox label="4"></Checkbox>
                        <Checkbox label="5"></Checkbox>
                        <Checkbox label="6"></Checkbox>
                        <Checkbox label="7"></Checkbox>
                        <Checkbox label="8"></Checkbox>
                        <Checkbox label="9"></Checkbox>
                        <Checkbox label="10"></Checkbox>
                        <Checkbox label="11"></Checkbox>
                        <Checkbox label="12"></Checkbox> -->
                    </CheckboxGroup>
                    </div>
                    
                </div>
            </div>            
        </div>
            <!-- <Button @click="wwww">Default</Button> -->
    </div>
</template>

<script>

// import {Test} from '../../actions.js'
import axios from 'axios';
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

        }
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
            // console.log(res)
        }),(err)=>{
            console.log(error)
        };

        // let b = this.b;
        let see = 2;
        axios.post('http://192.168.1.186:8080/AssessMatter/showMatter2',
        see,
        {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        )
        .then((res)=>{
          // 题目
            this.fone = res.data;
            this.foneOne = res.data;
            // console.log(res.data)
            




            // console.log(res.data)




            // console.log(res)
        }),(err)=>{
            console.log(error)
        }


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
        ddd(index){
            // console.log(index)
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
        width: 700px;
        height: 340px;
        /* overflow: hidden; */
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
        overflow: hidden;
    }
    .sels_list .items {
        cursor: pointer;
        display: block;
        padding-top: 5px;
        width: 640px;
    }
    .sels_list .items .i_top, .sels_list .items .i_bot {
        height: 5px;
        overflow: hidden;
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
