<template>
<!-- 多选 -->
    <div>
        <!-- because 给的数据格式很奇怪 只能拆分开分21次循环 crazy... 
        他把所有的数据全放在一个接口里然后给一个typ值让我区分 没办法 
        前方高能！！！
        -->
        
        <div class="box"  ref="box2" v-bind:style="{display: activeColorOver}">
            <p>1,{{title}}</p>
            <div 
            v-for="(item,i) in result" :key="i" 
            :value="item.object" 
            @click="AnswerClick(item,i)" 
            class="checked" 
            >
             <CheckboxGroup v-model="checkAllGroup">
                <Checkbox :label="item.id" class="checked">
                    {{item.object}}
                </Checkbox>
            </CheckboxGroup>
                
            </div>
            <Button @click="resultMe">{{buttonAga}}</Button>
        </div> 
        <!-- 2 -->
        <div class="box" ref="resultTwo" v-bind:style="{display: activeColorOver}">
            <p>2,{{title}}</p>
            <div v-for="(item,i) in resultTwo" :key="i" 
            :value="item.object" 
            @click="AnswerClick(item,i)" 
            class="checked">
               <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultTwoMe">{{buttonAga}}</Button>
        </div> 
        <!-- 3 -->
        <div class="box" ref="resultThree" v-bind:style="{display: activeColorOver}">
            <p>3,{{title}}</p>
            <div v-for="(item,i) in resultThree" 
            :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
               <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                    {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeThr">{{buttonAga}}</Button>
        </div> 
        <!-- 4 -->
        <div class="box" ref="resultFour" v-bind:style="{display: activeColorOver}">
            <p>4,{{title}}</p>
            <div v-for="(item,i) in resultFour" 
            :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeFou">{{buttonAga}}</Button>
        </div> 

        <!-- 5 -->
        <div class="box" ref="resultFive" v-bind:style="{display: activeColorOver}">
            <p>5,{{title}}</p>
            <div v-for="(item,i) in resultFive" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeFiv">{{buttonAga}}</Button>
        </div> 

        <!-- 6 -->
        <div class="box" ref="resultSix" v-bind:style="{display: activeColorOver}">
            <p>6,{{title}}</p>
            <div v-for="(item,i) in resultSix" 
            :key="i" :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                    {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeSi">{{buttonAga}}</Button>
        </div> 

        <!-- 7 -->
        <div class="box" ref="resultSeven" v-bind:style="{display: activeColorOver}">
            <p>7,{{title}}</p>
            <div v-for="(item,i) in resultSeven" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeSeven">{{buttonAga}}</Button>
        </div> 

        <!-- 8 -->
        <div class="box" ref="resulteight" v-bind:style="{display: activeColorOver}">
            <p>8,{{title}}</p>
            <div v-for="(item,i) in resulteight" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeEight">{{buttonAga}}</Button>
        </div> 

        <!-- 9 -->
        <div class="box" ref="resultNine" v-bind:style="{display: activeColorOver}">
            <p>9,{{title}}</p>
            <div v-for="(item,i) in resultNine" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeNine">{{buttonAga}}</Button>
        </div> 

        <!-- 10 -->
        <div class="box" ref="resultTen" v-bind:style="{display: activeColorOver}">
            <p>10,{{title}}</p>
            <div v-for="(item,i) in resultTen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeTen">{{buttonAga}}</Button>
        </div> 

        <!-- 11 -->
        <div class="box" ref="resulteleven" v-bind:style="{display: activeColorOver}">
            <p>11,{{title}}</p>
            <div v-for="(item,i) in resulteleven" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeEleven">{{buttonAga}}</Button>
        </div> 

        <!-- 12 -->
        <div class="box" ref="resulttwelve" v-bind:style="{display: activeColorOver}">
            <p>12,{{title}}</p>
            <div v-for="(item,i) in resulttwelve" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeTwelve">{{buttonAga}}</Button>
        </div> 

        <!-- 13 -->
        <div class="box" ref="resultthirteen" v-bind:style="{display: activeColorOver}">
            <p>13,{{title}}</p>
            <div v-for="(item,i) in resultthirteen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeThirteen">{{buttonAga}}</Button>
        </div> 

        <!-- 14 -->
        <div class="box" ref="resultfourteen" v-bind:style="{display: activeColorOver}">
            <p>14,{{title}}</p>
            <div v-for="(item,i) in resultfourteen" :key="i"
             :value="item.object"
              @click="AnswerClick(item,i)"
              class="checked"
             >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeFourteen">{{buttonAga}}</Button>
        </div> 

        <!-- 15 -->
        <div class="box" ref="resultfifteen" v-bind:style="{display: activeColorOver}">
            <p>15,{{title}}</p>
            <div v-for="(item,i) in resultfifteen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeFifteen">{{buttonAga}}</Button>
        </div> 

        <!-- 16 -->
        <div class="box" ref="resultsixteen" v-bind:style="{display: activeColorOver}">
            <p>16,{{title}}</p>
            <div v-for="(item,i) in resultsixteen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeSixteen">{{buttonAga}}</Button>
        </div> 

        <!-- 17 -->
        <div class="box" ref="resultseveteen" v-bind:style="{display: activeColorOver}">
            <p>17,{{title}}</p>
            <div v-for="(item,i) in resultseveteen" 
            :key="i" :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeSeveteen">{{buttonAga}}</Button>
        </div> 

        <!-- 18 -->
        <div class="box" ref="resulteighteen" v-bind:style="{display: activeColorOver}">
            <p>18,{{title}}</p>
            <div v-for="(item,i) in resulteighteen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeEighteen">{{buttonAga}}</Button>
        </div> 

        <!-- 19 -->
        <div class="box" ref="resultnineteen" v-bind:style="{display: activeColorOver}">
            <p>19,{{title}}</p>
            <div v-for="(item,i) in resultnineteen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Button @click="resultMeNineteen">{{buttonAga}}</Button>
        </div> 

        <!-- 20 -->
        <div class="box" ref="resultTwenty" v-bind:style="{display: activeColorOver}">
            <p>20,{{title}}</p>
            <div v-for="(item,i) in resultTwenty" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
             <Button @click="resultMeTwenty">{{buttonAga}}</Button>
        </div> 

        <!-- 21 -->
        <div class="box" ref="resultTwentyOne" v-bind:style="{display: activeColorOver}">
            <p>21,{{title}}</p>
            <div v-for="(item,i) in resultTwentyOne" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.id" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <p class="noticeCo">{{notice}}</p>
             <Button @click="resultMeTwentyOne">{{buttonLast}}</Button>
        </div> 

        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            
            // 隐藏
            activeColorOver:'block',
            // 题目
            title:"在下面的专业中，选出你最感兴趣的3个专业并排列出顺序",
            fone:[],
            result:[],
            resultTwo:[],
            resultThree:[],
            resultFour:[],
            resultFive:[],
            resultSix:[],
            resultSeven:[],
            resulteight:[],
            resultNine:[],
            resultTen:[],
            resulteleven:[],
            resulttwelve:[],
            resultthirteen:[],
            resultfourteen:[],
            resultfifteen:[],
            resultsixteen:[],
            resultseveteen:[],
            resulteighteen:[],
            resultnineteen:[],
            resultTwenty:[],
            resultTwentyOne:[],
            // 选中的答案
            answer:[],
            // 注释  注意事项
            notice:"注意：请您认真作答，确认提交后将无法对试题答案进行修改",
            // 点击按钮
            buttonLast:"确认提交",
            buttonAga:"下一题",
            // 用户的id
            uid : "",
            // 取消选中
            checkAllGroup:[]
        }
    },
    created(){
        // 用户的uid
        this.uid = this.$route.query.id;

        let see = 2;
        axios.post('http://47.104.245.242:8081/AssessMatter/showMatter2',
        see,
        {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        )
        .then((res)=>{
          // 题目
            this.fone = res.data;
        }),(err)=>{
            console.log(error)
        }

        // 答案选项
         // 多选答案
        let typ = 5;
        axios.post('http://47.104.245.242:8081/AssessObject/obj5',
        typ,
        {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        )
        .then((res)=>{
            // this.stateNum = res.data
            // console.log(res.data)

            let aim = res.data;
            // 根据单个名字筛选
            function filterByName(aim, typ) {
                return aim.filter(item => item.typ == typ)
            }
            // 输入 aim 'Leila' 期望输出为 [{name:'Leila', age: 16, gender:'female'}]
            // console.log(filterByName(aim,'RN'),'RN')
            this.result = filterByName(aim,'RN')
            // console.log(filterByName(aim,'PN'),'PN')
            this.resultTwo = filterByName(aim,'PN')
            // console.log(filterByName(aim,'UN'),'UN')
            this.resultThree = filterByName(aim,'UN')
            // console.log(filterByName(aim,'RT'),'RT')
            this.resultFour = filterByName(aim,'RT')
            // console.log(filterByName(aim,'PT'),'PT')
            this.resultFive = filterByName(aim,'PT')
            // console.log(filterByName(aim,'UT'),'UT')
            this.resultSix = filterByName(aim,'UT')
            // console.log(filterByName(aim,'RA'),'RA')
            this.resultSeven = filterByName(aim,'RA')
            // console.log(filterByName(aim,'PA'),'PA')
            this.resulteight = filterByName(aim,'PA')
            // console.log(filterByName(aim,'UA'),'UA')
            this.resultNine = filterByName(aim,'UA')
            // console.log(filterByName(aim,'RM'),'RM')
            this.resultTen = filterByName(aim,'RM')
            // console.log(filterByName(aim,'PM'),'PM')
            this.resulteleven = filterByName(aim,'PM')
            // console.log(filterByName(aim,'UM'),'UM')
            this.resulttwelve = filterByName(aim,'UM')
            // console.log(filterByName(aim,'RN'),'RN')
            this.resultthirteen = filterByName(aim,'RL')
            // console.log(filterByName(aim,'PL'),'PL')
            this.resultfourteen = filterByName(aim,'PL')
            // console.log(filterByName(aim,'UL'),'UL')
            this.resultfifteen = filterByName(aim,'UL')
            // console.log(filterByName(aim,'RS'),'RS')
            this.resultsixteen = filterByName(aim,'RS')
            // console.log(filterByName(aim,'PS'),'PS')
            this.resultseveteen = filterByName(aim,'PS')
            // console.log(filterByName(aim,'US'),'US')
            this.resulteighteen = filterByName(aim,'US')
            // console.log(filterByName(aim,'RI'),'RI')
            this.resultnineteen = filterByName(aim,'RI')
            // console.log(filterByName(aim,'PI'),'PI')
            this.resultTwenty = filterByName(aim,'PI')
            // console.log(filterByName(aim,'UI'),'UI')
            this.resultTwentyOne = filterByName(aim,'UI')
        }),(err)=>{
            console.log(err)
        }
    },
    methods:{
        //拿到点击的选项 多选的3道  
        AnswerClick(index){
            // console.log(index.object,'item')
            let uid = this.uid
            let typ = index.typ
            let mid = index.id
            let score = index.object
            let answer = this.answer
            let obj = {
                uid : uid,
                typ : typ,
                mid : mid,
                score : score
            }
            answer.push(obj)
            // console.log(this.answer,'answer')
        },
        //发送数据给后台
        postBack(data){
            axios.post('http://47.104.245.242:8081/AssessMatter/save2',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{})
            ,(err)=>{
                console.log(err)
            }
        },
        // 验证是否选择3项
        proofread(data){
            if(data.length===3){
                this.postBack(data);
                this.answer = [];
            }else{
                this.$Message.warning('请选择三个专业并点击下一题')
                this.answer=[]
                this.checkAllGroup = [];
            }
        },
        // style改变
        disPl(canvas){
            canvas.style.display = "none"
        },
        // 21个click按钮点击  ref的数值不一样 用同一数值则顺序会乱 
        resultMe(){
            let data = this.answer;
            this.proofread(data)
            if(data.length===3){
                let canvas=this.$refs.box2;
                this.disPl(canvas)
            }
        },
        resultTwoMe(){
            let data = this.answer;
            this.proofread(data);
             if(data.length===3){
                let canvas=this.$refs.resultTwo;
                this.disPl(canvas)
            }
        },
        resultMeThr(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultThree;
                this.disPl(canvas)
            }
        },
        resultMeFou(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultFour;
                this.disPl(canvas)
            }
        },
        resultMeFiv(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultFive;
                this.disPl(canvas)
            }
        },
        resultMeSi(){
            let data = this.answer;
            this.proofread(data);
             if(data.length===3){
                let canvas=this.$refs.resultSix;
                this.disPl(canvas)
            }
        },
        resultMeSeven(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultSeven;
                this.disPl(canvas)
            }
        },
        resultMeEight(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resulteight;
                this.disPl(canvas)
            }
        },
        resultMeNine(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultNine;
                this.disPl(canvas)
            }
        },
        resultMeTen(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultTen;
                this.disPl(canvas)
            }
        },
        resultMeEleven(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resulteleven;
                this.disPl(canvas)
            }
        },
        resultMeTwelve(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resulttwelve;
                this.disPl(canvas)
            }
        },
        resultMeThirteen(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultthirteen;
                this.disPl(canvas)
            }
        },
        resultMeFourteen(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultfourteen;
                this.disPl(canvas)
            }
        },
        resultMeFifteen(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultfifteen;
                this.disPl(canvas)
            }
        },
        resultMeSixteen(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultsixteen;
                this.disPl(canvas)
            }
        },
        resultMeSeveteen(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultseveteen;
                this.disPl(canvas)
            }
        },
        resultMeEighteen(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resulteighteen;
                this.disPl(canvas)
            }
        },
        resultMeNineteen(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultnineteen;
                this.disPl(canvas)
            }
        },
        resultMeTwenty(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                let canvas=this.$refs.resultTwenty;
                this.disPl(canvas)
            }
        },
        resultMeTwentyOne(){
            let data = this.answer;
            this.proofread(data);
            if(data.length===3){
                this.$Message.success('答题完成');
                let id = this.uid
                this.$router.push({path:'/reported',query:{id:id}})
            }
        },
    }
}
</script>

<style scoped>
    .box{
        width: 500px;
        height: 600px;
        /* background: rgb(255, 230, 0); */
        overflow: hidden;
    }
    .checked{
        text-align: left;
        margin-left: 20%;

    }
    /* 注意事项 */
    .noticeCo{
        color: red;
    }
</style>
