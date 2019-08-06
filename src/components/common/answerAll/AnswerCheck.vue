<template>
<!-- 多选 -->
    <div class="checkAll" ref="HeaderBox">
        <!-- because 给的数据格式很奇怪 只能拆分开分21次循环 crazy... 
        他把所有的数据全放在一个接口里然后给一个typ值让我区分 没办法 
        前方高能！！！
        -->
        <div class="box"  ref="box2" v-bind:style="{display: activeColorOver}">
            <p class="PPP">{{title}}</p>
            <!-- 意见反馈 -->
            <a type="primary" @click="modal1 = true" style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意见反馈</a>
            <Modal
                v-model="modal1"
                title="意见反馈"
                @on-ok="ok"
                :mask-closable="false"
                @on-cancel="cancel">
                <Input v-model="value5" type="textarea" placeholder="填写你的建议" />
            </Modal>
            <!-- 答案选项 -->
            <div 
            v-for="(item,i) in result" :key="i" 
            :value="item.object" 
            class="checked" 
            >
                <CheckboxGroup v-model="checkAllGroup" :title="item.object1">
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
        <div class="box" ref="resultTwo" v-bind:style="{display: activeColorOver}" v-if="Onb">
            <p class="PPP">{{title}}</p>
            <a type="primary" @click="modal1 = true" style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意见反馈</a>
            <Modal
                v-model="modal1"
                title="意见反馈"
                @on-ok="ok"
                @on-cancel="cancel">
                <Input v-model="value5" type="textarea" placeholder="填写你的建议" />
            </Modal>
            <div v-for="(item,i) in resultTwo" :key="i" 
            :value="item.object" 
            class="checked">
               <CheckboxGroup v-model="checkAllGroup" :title="item.object1">
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
        <div class="box" ref="resultThree" v-bind:style="{display: activeColorOver}" v-if="Twoee">
            <p class="PPP">{{title}}</p>
            <a type="primary" @click="modal1 = true" style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意见反馈</a>
            <Modal
                v-model="modal1"
                title="意见反馈"
                @on-ok="ok"
                @on-cancel="cancel">
                <Input v-model="value5" type="textarea" placeholder="填写你的建议" />
            </Modal>
            <div v-for="(item,i) in resultThree" 
            :key="i" 
            :value="item.object"
             class="checked"
            >
               <CheckboxGroup v-model="checkAllGroup" :title="item.object1">
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
 
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props:["typTwo"],
    data(){
        return{
            Onb:true,
            Twoee:true,
            // 隐藏
            activeColorOver:'block',
            // 题目
            title:"在下面的专业中，选出感兴趣的3个专业并排列顺序",
            fone:[],
            result:[],
            resultTwo:[],
            resultThree:[],
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
            // TYPtWO : ""
        }
    },
    created(){
        this.uid = this.$route.query.id;
    },
    watch:{
        typTwo(n,o){
            if(n==2||o==2){
                this.acquire();
            }
        }
    },
    mounted(){
            // this.acquire();
    },
    methods:{ 
        confirm () {
                this.$Modal.confirm({
                    title: '个性题',
                    content: '<p>3道题</p>',
                    onOk: () => {
                        // this.acquire();
                    }
                });
        },
        // 拿数据
        acquire(){
                // 用户的uid
            // this.uid = this.$route.query.id;
            // let see = 128;
            let see = this.uid;
            axios.post('http://47.104.245.242:8081/AssessMatter/showMatter2',
            see,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
            // 答案
                this.fone = res.data;
                this.result = res.data[0]
                this.resultTwo = res.data[1]
                this.resultThree = res.data[2]
            }),(err)=>{
                console.log(err)
            }
        },
        // 意见方法
        ok () {
            this.$Message.info('收到您的意见');
            if(this.value5!=""){
                let data = {
                    matter:this.title,
                    content:this.value5,
                    uid:this.uid
                }
                axios.post('http://47.104.245.242:8081/AssessFeedback/save_feedback',
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
                matter : mid,
                score : score,
                code : 1
            }
            let objTwe = {
                uid : uidTwe,
                typ : typTwe,
                matter : midTwe,
                score : scoreTwe,
                code : 1,
            }
            let objThr = {
                uid : uidThr,
                typ : typThr,
                matter : midThr,
                score : scoreThr,
                code : 1
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
            if(this.checkAllGroup.length===3){
                let arr = this.result;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                this.proofread(data)
                let canvas=this.$refs.box2;
                this.disPl(canvas)
                if(this.fone.length === 1){
                    let headbox = this.$refs.HeaderBox;
                    headbox.style.display = "none"
                    this.Onb = false
                    this.Twoee = false
                }
                this.checkAllGroup = []
                
            }else{
                this.err();
            }
        },
        resultTwoMe(){
            if(this.checkAllGroup.length===3){
                let arr = this.resultTwo;
                this.rise(arr);
                this.AnswerClick()
                let data = this.Answer;
                data[0].code = 2;
                data[1].code = 2;
                data[2].code = 2;
                this.proofread(data)
                let canvas=this.$refs.resultTwo;
                this.disPl(canvas)
                if(this.fone.length === 2){
                    let headbox = this.$refs.HeaderBox;
                    headbox.style.display = "none"
                    this.Twoee = false
                }
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
                data[0].code = 3;
                data[1].code = 3;
                data[2].code = 3;
                this.proofread(data)
                let canvas=this.$refs.resultThree;
                let headbox = this.$refs.HeaderBox;
                this.disPl(canvas)
                headbox.style.display = "none"
                this.checkAllGroup = []
            }else{
                this.err();
            }
        }
    }
}
</script>

<style scoped>
    .checkAll{
        width: 500px;
        height: 1000px;
        margin: 50px auto 300px;
        overflow: hidden;
    }
    .box{
        width: 500px;
        height: 1000px;
        margin: 100px auto;
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
