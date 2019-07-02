<template>
<!-- 多选 -->
    <div>
        <!-- because 给的数据格式很奇怪 只能拆分开分21次循环 crazy... 
        他把所有的数据全放在一个接口里然后给一个typ值让我区分 没办法 
        前方高能！！！
        -->
        
        <div class="box"  ref="box2" v-bind:style="{display: activeColorOver}">
            <p>1,{{title}}</p>
            <div v-for="(item,i) in result" :key="i" 
            :value="item.object" 
            @click="AnswerClick(item,i)" 
            class="checked">
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id" class="checked"></Checkbox>
                    {{item.object}}
                <!-- </CheckboxGroup> -->
            </div>
            <Button @click="resultMe">Default</Button>
        </div> 
        <!-- 2 -->
        <div class="box" ref="resultTwo" v-bind:style="{display: activeColorOver}">
            <p>2,{{title}}</p>
            <div v-for="(item,i) in resultTwo" :key="i" 
            :value="item.object" 
            @click="AnswerClick(item,i)" 
            class="checked">
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id" class="checked"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultTwoMe">Default</Button>
        </div> 
        <!-- 3 -->
        <div class="box" ref="resultThree" v-bind:style="{display: activeColorOver}">
            <p>3,{{title}}</p>
            <div v-for="(item,i) in resultThree" 
            :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeThr">Default</Button>
        </div> 
        <!-- 4 -->
        <div class="box" ref="resultFour" v-bind:style="{display: activeColorOver}">
            <p>4,{{title}}</p>
            <div v-for="(item,i) in resultFour" 
            :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeFou">Default</Button>
        </div> 

        <!-- 5 -->
        <div class="box" ref="resultFive" v-bind:style="{display: activeColorOver}">
            <p>5,{{title}}</p>
            <div v-for="(item,i) in resultFive" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeFiv">Default</Button>
        </div> 

        <!-- 6 -->
        <div class="box" ref="resultSix" v-bind:style="{display: activeColorOver}">
            <p>6,{{title}}</p>
            <div v-for="(item,i) in resultSix" 
            :key="i" :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeSi">Default</Button>
        </div> 

        <!-- 7 -->
        <div class="box" ref="resultSeven" v-bind:style="{display: activeColorOver}">
            <p>7,{{title}}</p>
            <div v-for="(item,i) in resultSeven" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                <!-- </CheckboxGroup> -->
            </div>
            <Button @click="resultMeSeven">Default</Button>
        </div> 

        <!-- 8 -->
        <div class="box" ref="resulteight" v-bind:style="{display: activeColorOver}">
            <p>8,{{title}}</p>
            <div v-for="(item,i) in resulteight" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeEight">Default</Button>
        </div> 

        <!-- 9 -->
        <div class="box" ref="resultNine" v-bind:style="{display: activeColorOver}">
            <p>9,{{title}}</p>
            <div v-for="(item,i) in resultNine" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeNine">Default</Button>
        </div> 

        <!-- 10 -->
        <div class="box" ref="resultTen" v-bind:style="{display: activeColorOver}">
            <p>10,{{title}}</p>
            <div v-for="(item,i) in resultTen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeTen">Default</Button>
        </div> 

        <!-- 11 -->
        <div class="box" ref="resulteleven" v-bind:style="{display: activeColorOver}">
            <p>11,{{title}}</p>
            <div v-for="(item,i) in resulteleven" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeEleven">Default</Button>
        </div> 

        <!-- 12 -->
        <div class="box" ref="resulttwelve" v-bind:style="{display: activeColorOver}">
            <p>12,{{title}}</p>
            <div v-for="(item,i) in resulttwelve" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeTwelve">Default</Button>
        </div> 

        <!-- 13 -->
        <div class="box" ref="resultthirteen" v-bind:style="{display: activeColorOver}">
            <p>13,{{title}}</p>
            <div v-for="(item,i) in resultthirteen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeThirteen">Default</Button>
        </div> 

        <!-- 14 -->
        <div class="box" ref="resultfourteen" v-bind:style="{display: activeColorOver}">
            <p>14,{{title}}</p>
            <div v-for="(item,i) in resultfourteen" :key="i"
             :value="item.object"
              @click="AnswerClick(item,i)"
             >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeFourteen">Default</Button>
        </div> 

        <!-- 15 -->
        <div class="box" ref="resultfifteen" v-bind:style="{display: activeColorOver}">
            <p>15,{{title}}</p>
            <div v-for="(item,i) in resultfifteen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeFifteen">Default</Button>
        </div> 

        <!-- 16 -->
        <div class="box" ref="resultsixteen" v-bind:style="{display: activeColorOver}">
            <p>16,{{title}}</p>
            <div v-for="(item,i) in resultsixteen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeSixteen">Default</Button>
        </div> 

        <!-- 17 -->
        <div class="box" ref="resultseveteen" v-bind:style="{display: activeColorOver}">
            <p>17,{{title}}</p>
            <div v-for="(item,i) in resultseveteen" 
            :key="i" :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeSeveteen">Default</Button>
        </div> 

        <!-- 18 -->
        <div class="box" ref="resulteighteen" v-bind:style="{display: activeColorOver}">
            <p>18,{{title}}</p>
            <div v-for="(item,i) in resulteighteen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeEighteen">Default</Button>
        </div> 

        <!-- 19 -->
        <div class="box" ref="resultnineteen" v-bind:style="{display: activeColorOver}">
            <p>19,{{title}}</p>
            <div v-for="(item,i) in resultnineteen" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
            <Button @click="resultMeNineteen">Default</Button>
        </div> 

        <!-- 20 -->
        <div class="box" ref="resultTwenty" v-bind:style="{display: activeColorOver}">
            <p>20,{{title}}</p>
            <div v-for="(item,i) in resultTwenty" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
             <Button @click="resultMeTwenty">Default</Button>
        </div> 

        <!-- 21 -->
        <div class="box" ref="resultTwentyOne" v-bind:style="{display: activeColorOver}">
            <p>21,{{title}}</p>
            <div v-for="(item,i) in resultTwentyOne" :key="i" 
            :value="item.object"
             @click="AnswerClick(item,i)"
            >
            <!-- <div @click="ddd">     -->
                <!-- <CheckboxGroup v-model="item.value" > -->
                <Checkbox :label="item.id"></Checkbox>
                    {{item.object}}
                </CheckboxGroup>
            </div>
             <Button @click="resultMeTwentyOne">Default</Button>
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
        }
    },
    created(){
        let see = 2;
        axios.post('http://192.168.1.186:8080/AssessMatter/showMatter2',
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
        axios.post('http://192.168.1.186:8080/AssessObject/obj5',
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
            this.resultthirteen = filterByName(aim,'RN')
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
            let a = index.object
            let answer = this.answer
            answer.push(a)
            // console.log(this.answer,'answer')
        },

        // 21个click按钮点击  crazy
        resultMe(){
            let data = this.answer;
            console.log(this.answer,'发送前')
            this.answer = [];
            console.log(this.answer,'发送后')
            // console.log(data)
            let canvas=this.$refs.box2;
            canvas.style.display = "none"
        },
        resultTwoMe(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultTwo;
            canvas.style.display = "none"
        },
        resultMeThr(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultThree;
            canvas.style.display = "none"
        },
        resultMeFou(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultFour;
            canvas.style.display = "none"
        },
        resultMeFiv(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultFive;
            canvas.style.display = "none"
        },
        resultMeSi(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultSix;
            canvas.style.display = "none"
        },
        resultMeSeven(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultSeven;
            canvas.style.display = "none",
            console.log(111)
        },
        resultMeEight(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resulteight;
            canvas.style.display = "none"
        },
        resultMeNine(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultNine;
            canvas.style.display = "none"
        },
        resultMeTen(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultTen;
            canvas.style.display = "none"
        },
        resultMeEleven(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resulteleven;
            canvas.style.display = "none"
        },
        resultMeTwelve(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resulttwelve;
            canvas.style.display = "none"
        },
        resultMeThirteen(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultthirteen;
            canvas.style.display = "none"
        },
        resultMeFourteen(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultfourteen;
            canvas.style.display = "none"
        },
        resultMeFifteen(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultfifteen;
            canvas.style.display = "none"
        },
        resultMeSixteen(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultsixteen;
            canvas.style.display = "none"
        },
        resultMeSeveteen(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultseveteen;
            canvas.style.display = "none"
        },
        resultMeEighteen(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resulteighteen;
            canvas.style.display = "none"
        },
        resultMeNineteen(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultnineteen;
            canvas.style.display = "none"
        },
        resultMeTwenty(){
            let data = this.answer;
            console.log(this.answer,'第二次发送前')
            this.answer = [];
            console.log(this.answer,'第二次发送后')
            let canvas=this.$refs.resultTwenty;
            canvas.style.display = "none"
        },
        resultMeTwentyOne(){
            // let canvas=this.$refs.resultTwentyOne;
            // canvas.style.display = "none"
            alert('答题完成')
        },
    }
}
</script>

<style scoped>
    .box{
        width: 500px;
        height: 600px;
        background: rgb(255, 230, 0);
        overflow: hidden;
    }
    .checked{
        text-align: center
    }
</style>
