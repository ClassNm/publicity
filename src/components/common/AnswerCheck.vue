<template>
<!-- 多选 -->
    <div class="checkAll">
        <!-- because 给的数据格式很奇怪 只能拆分开分21次循环 crazy... 
        他把所有的数据全放在一个接口里然后给一个typ值让我区分 没办法 
        前方高能！！！
        -->
        
        <div class="box"  ref="box2" v-bind:style="{display: activeColorOver}">
            <p class="PPP">1,{{title}}</p>
            <!-- 意见反馈 -->
            <a type="primary" @click="modal1 = true">(意见反馈)</a>
            <Modal
                v-model="modal1"
                title="意见反馈"
                @on-ok="ok"
                @on-cancel="cancel">
                <Input v-model="value5" type="textarea" placeholder="填写你的建议" />
            </Modal>
            <!-- 答案选项 -->
            <div 
            v-for="(item,i) in result" :key="i" 
            :value="item.object" 
            class="checked" 
            >
                <CheckboxGroup v-model="checkAllGroup" :title="item.object">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMe" class="But">{{buttonAga}}</Button>
        </div> 
        <!-- 2 -->
        <div class="box" ref="resultTwo" v-bind:style="{display: activeColorOver}">
            <p>2,{{title}}</p>
            <div v-for="(item,i) in resultTwo" :key="i" 
            :value="item.object" 
            class="checked">
               <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultTwoMe" class="But">{{buttonAga}}</Button>
        </div> 
        <!-- 3 -->
        <div class="box" ref="resultThree" v-bind:style="{display: activeColorOver}">
            <p>3,{{title}}</p>
            <div v-for="(item,i) in resultThree" 
            :key="i" 
            :value="item.object"
             class="checked"
            >
               <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                    {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeThr" class="But">{{buttonAga}}</Button>
        </div> 
        <!-- 4 -->
        <div class="box" ref="resultFour" v-bind:style="{display: activeColorOver}">
            <p>4,{{title}}</p>
            <div v-for="(item,i) in resultFour" 
            :key="i" 
            :value="item.object"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeFou" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 5 -->
        <div class="box" ref="resultFive" v-bind:style="{display: activeColorOver}">
            <p>5,{{title}}</p>
                <div v-for="(item,i) in resultFive" :key="i" 
            :value="item.object"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            
            <div class="Annota">
                <div class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </div>
            </div>
            <Button @click="resultMeFiv" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 6 -->
        <div class="box" ref="resultSix" v-bind:style="{display: activeColorOver}">
            <p>6,{{title}}</p>
            <div v-for="(item,i) in resultSix" 
            :key="i" :value="item.object"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                    {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeSi" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 7 -->
        <div class="box" ref="resultSeven" v-bind:style="{display: activeColorOver}">
            <p>7,{{title}}</p>
            <div v-for="(item,i) in resultSeven" :key="i" 
            :value="item.object"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeSeven" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 8 -->
        <div class="box" ref="resulteight" v-bind:style="{display: activeColorOver}">
            <p>8,{{title}}</p>
            <div v-for="(item,i) in resulteight" :key="i" 
            :value="item.object"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeEight" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 9 -->
        <div class="box" ref="resultNine" v-bind:style="{display: activeColorOver}">
            <p>9,{{title}}</p>
            <div v-for="(item,i) in resultNine" :key="i" 
            :value="item.object"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeNine" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 10 -->
        <div class="box" ref="resultTen" v-bind:style="{display: activeColorOver}">
            <p>10,{{title}}</p>
            <div v-for="(item,i) in resultTen" :key="i" 
            :value="item.object"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeTen" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 11 -->
        <div class="box" ref="resulteleven" v-bind:style="{display: activeColorOver}">
            <p>11,{{title}}</p>
            <div v-for="(item,i) in resulteleven" :key="i" 
            :value="item.object"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeEleven" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 12 -->
        <div class="box" ref="resulttwelve" v-bind:style="{display: activeColorOver}">
            <p>12,{{title}}</p>
            <div v-for="(item,i) in resulttwelve" :key="i" 
            :value="item.object"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeTwelve" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 13 -->
        <div class="box" ref="resultthirteen" v-bind:style="{display: activeColorOver}">
            <p>13,{{title}}</p>
            <div v-for="(item,i) in resultthirteen" :key="i" 
            :value="item.object"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeThirteen" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 14 -->
        <div class="box" ref="resultfourteen" v-bind:style="{display: activeColorOver}">
            <p>14,{{title}}</p>
            <div v-for="(item,i) in resultfourteen" :key="i"
             :value="item.object"
              class="checked"
             >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeFourteen" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 15 -->
        <div class="box" ref="resultfifteen" v-bind:style="{display: activeColorOver}">
            <p>15,{{title}}</p>
            <div v-for="(item,i) in resultfifteen" :key="i" 
            :value="item.object"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeFifteen" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 16 -->
        <div class="box" ref="resultsixteen" v-bind:style="{display: activeColorOver}">
            <p>16,{{title}}</p>
            <div v-for="(item,i) in resultsixteen" :key="i" 
            :value="item.object"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeSixteen" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 17 -->
        <div class="box" ref="resultseveteen" v-bind:style="{display: activeColorOver}">
            <p>17,{{title}}</p>
            <div v-for="(item,i) in resultseveteen" 
            :key="i" :value="item.object"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeSeveteen" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 18 -->
        <div class="box" ref="resulteighteen" v-bind:style="{display: activeColorOver}">
            <p>18,{{title}}</p>
            <div v-for="(item,i) in resulteighteen" :key="i" 
            :value="item.object"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeEighteen" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 19 -->
        <div class="box" ref="resultnineteen" v-bind:style="{display: activeColorOver}">
            <p>19,{{title}}</p>
            <div v-for="(item,i) in resultnineteen" :key="i" 
            :value="item.object"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <Button @click="resultMeNineteen" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 20 -->
        <div class="box" ref="resultTwenty" v-bind:style="{display: activeColorOver}">
            <p>20,{{title}}</p>
            <div v-for="(item,i) in resultTwenty" :key="i" 
            :value="item.object"
             class="checked"
            >
                <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
             <Button @click="resultMeTwenty" class="But">{{buttonAga}}</Button>
        </div> 

        <!-- 21 -->
        <div class="box" ref="resultTwentyOne" v-bind:style="{display: activeColorOver}">
            <p>21,{{title}}</p>
            <div v-for="(item,i) in resultTwentyOne" :key="i" 
            :value="item.object"
             class="checked"
            >
                 <CheckboxGroup v-model="checkAllGroup">
                    <Checkbox :label="item.object" class="checked">
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}},{{item}}
                </span>
            </div>
            <p class="noticeCo">{{notice}}</p>
             <Button @click="resultMeTwentyOne" class="But">{{buttonLast}}</Button>
        </div> 

        
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    data(){
        return{
            
            // 隐藏
            activeColorOver:'block',
            // 题目
            title:"在下面的专业中，选出感兴趣的3个专业并排列顺序",
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
            // 注释  注意事项
            notice:"注意：请您认真作答，确认提交后将无法对试题答案进行修改",
            // 点击按钮
            buttonLast:"确认提交",
            buttonAga:"下一题",
            // 用户的id
            uid : "",
            // 取消选中
            checkAllGroup:[],
            // 判定被选中的三个替换值
            optionOne:{},
            optionTwe:{},
            optionThre:{},
            optionOnea:{},
            optionTwea:{},
            optionThrea:{},
            // 选中的答案
            Answer:[],
            // 意见反馈
            modal1: false,
            // 意见
            value5: '',
            // 页面加载时的时间
            CreaTime:"",
        }
    },
    created(){
        // this.CreaTime = new Date()
        // console.log(this.CreaTime)
        
        // 用户的uid
        this.uid = this.$route.query.id;

        // let see = this.uid;
        // axios.post('http://192.168.1.100:8080/AssessMatter/showMatter2',
        // see,
        // {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        // )
        // .then((res)=>{
        //   // 题目
        //     this.fone = res.data;
        // }),(err)=>{
        //     console.log(error)
        // }

        // 答案选项
         // 多选答案
        // let typ = 5;
        // axios.post('http://192.168.1.100:8080/AssessObject/obj5',
        // typ,
        // {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        // )
        // .then((res)=>{
        //     let aim = res.data;
        //     // 根据单个名字筛选
        //     function filterByName(aim, typ) {
        //         return aim.filter(item => item.typ == typ)
        //     }
        //     this.result = filterByName(aim,'RN')
        //     this.resultTwo = filterByName(aim,'PN')
        //     this.resultThree = filterByName(aim,'UN')
        //     this.resultFour = filterByName(aim,'RT')
        //     this.resultFive = filterByName(aim,'PT')
        //     this.resultSix = filterByName(aim,'UT')
        //     this.resultSeven = filterByName(aim,'RA')
        //     this.resulteight = filterByName(aim,'PA')
        //     this.resultNine = filterByName(aim,'UA')
        //     this.resultTen = filterByName(aim,'RM')
        //     this.resulteleven = filterByName(aim,'PM')
        //     this.resulttwelve = filterByName(aim,'UM')
        //     this.resultthirteen = filterByName(aim,'RL')
        //     this.resultfourteen = filterByName(aim,'PL')
        //     this.resultfifteen = filterByName(aim,'UL')
        //     this.resultsixteen = filterByName(aim,'RS')
        //     this.resultseveteen = filterByName(aim,'PS')
        //     this.resulteighteen = filterByName(aim,'US')
        //     this.resultnineteen = filterByName(aim,'RI')
        //     this.resultTwenty = filterByName(aim,'PI')
        //     this.resultTwentyOne = filterByName(aim,'UI')
        // }),(err)=>{
        //     console.log(err)
        // }
    },
    methods:{
        // 意见方法
        ok () {
            this.$Message.info('收到您的意见');
            console.log(this.value5)
        },
        cancel () {
            this.$Message.info('返回');
        },
        //发送数据给后台
        postBack(data){
            // axios.post('http://192.168.1.100:8080/AssessMatter/save2',
            // data,
            // {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            // )
            // .then((res)=>{})
            // ,(err)=>{
            //     console.log(err)
            // }
        },
        // 验证是否选择3项
        proofread(data){
            if(this.checkAllGroup.length===3){
                this.postBack(data);
                this.Answer = [];
                this.optionOne = ""
                this.optionTwe = ""
                this.optionThre = ""
                this.optionOnea = {}
                this.optionTwea = {}
                this.optionThrea = {}
            }else{
                this.$Message.warning('请选择三个专业并点击下一题')
                this.Answer=[]
            }
        },
        // style改变
        disPl(canvas){
            canvas.style.display = "none"
        },
        // 根据v-model的名字筛选选中的值
        rise(data){
            let aim = data;
            // 根据单个名字筛选
            function filterByName(aim, object) {
                return aim.filter(item => item.object == object)
            }
            let ever = this.checkAllGroup;
            this.optionOne = filterByName(aim,ever[0])
            this.optionTwe = filterByName(aim,ever[1])
            this.optionThre = filterByName(aim,ever[2])

            this.optionOnea = this.optionOne[0]
            this.optionTwea = this.optionTwe[0]
            this.optionThrea = this.optionThre[0]
        },
        // 拿值发送
        AnswerClick(){
            // 第一项
            let optionOnea = this.optionOnea
            let uid = this.uid
            let typ = optionOnea.typ
            let mid = optionOnea.id
            let score = optionOnea.object
            // 第二项
            let optionTwea = this.optionTwea
            let uidTwe = this.uid
            let typTwe = optionTwea.typ
            let midTwe = optionTwea.id
            let scoreTwe = optionTwea.object
            // 第三项
            let optionThrea = this.optionThrea
            let uidThr = this.uid
            let typThr = optionThrea.typ
            let midThr = optionThrea.id
            let scoreThr = optionThrea.object

            // let answer = this.answer
            let obj = {
                uid : uid,
                typ : typ,
                mid : mid,
                score : score
            }
            let objTwe = {
                uid : uidTwe,
                typ : typTwe,
                mid : midTwe,
                score : scoreTwe
            }
            let objThr = {
                uid : uidThr,
                typ : typThr,
                mid : midThr,
                score : scoreThr
            }
            let Answer = this.Answer;
            Answer[0] = obj;
            Answer[1] = objTwe;
            Answer[2] = objThr;
        },
        // 警告只能选3个
        err(){
            this.$Message.error('只能选3个');
        },
        // 21个click按钮点击  ref的数值不一样 用同一数值则顺序会乱 
        resultMe(){
            // if(this.checkAllGroup.length===3){
            //     let arr = this.result;
            //     this.rise(arr);
            //     this.AnswerClick()
            //     let data = this.Answer;
            //     this.proofread(data)
            //     let canvas=this.$refs.box2;
            //     this.disPl(canvas)
            //     this.checkAllGroup = []
            // }else{
            //     this.err();
            // }
            // 时间test实验

            // let time = new Date()
            // let TimeCl = time.getTime();
            // let CreaTime = this.CreaTime;
            // let TimeCre = CreaTime.getTime();
            // let delaT = (TimeCl - TimeCre)/1000;
            // console.log(delaT,'时间差')
        },
        resultTwoMe(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultTwo;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultTwo;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeThr(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultThree;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultThree;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeFou(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultFour;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultFour;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeFiv(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultFive;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultFive;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeSi(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultSix;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultSix;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeSeven(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultSeven;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultSeven;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeEight(){
            if(this.checkAllGroup.length===3){
                let arr = this.resulteight;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resulteight;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeNine(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultNine;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultNine;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeTen(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultTen;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultTen;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeEleven(){
            if(this.checkAllGroup.length===3){
                let arr = this.resulteleven;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resulteleven;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeTwelve(){
            if(this.checkAllGroup.length===3){
                let arr = this.resulttwelve;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resulttwelve;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeThirteen(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultthirteen;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultthirteen;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeFourteen(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultfourteen;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultfourteen;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeFifteen(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultfifteen;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultfifteen;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeSixteen(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultsixteen;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultsixteen;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeSeveteen(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultseveteen;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultseveteen;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeEighteen(){
            if(this.checkAllGroup.length===3){
                let arr = this.resulteighteen;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resulteighteen;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeNineteen(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultnineteen;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultnineteen;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeTwenty(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultTwenty;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.resultTwenty;
                this.disPl(canvas)
                this.checkAllGroup = []
            }else{
                this.err();
            }
        },
        resultMeTwentyOne(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultTwentyOne;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                this.$Message.success('答题完成');
                this.checkAllGroup = []
                let id = this.uid
                this.$router.push({path:'/reported',query:{id:id}})
            }else{
                this.err();
            }
        },
    }
}
</script>

<style scoped>
    .checkAll{
        width: 500px;
        height: 1000px;
        margin: 50px auto;
        overflow: hidden;
    }
    .box{
        width: 500px;
        height: 1000px;
        margin: 100px auto;
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
    .Annota{
        /* display: inline-block; */
        margin-top: 6px;
        height: 60px;
        overflow: hidden;
    }
    .annotation{
        color: red;
        display: inline-block;
    }
    .But{
        height: 40px;
        display: block;
        margin: 0 auto;
    }
    .PPP{
        display: inline-block;
    }
</style>
