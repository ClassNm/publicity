<template>
<!-- 多选 -->
    <div class="checkAll" ref="HeaderBox" v-if="actiontyp">
        <!-- because 给的数据格式很奇怪 只能拆分开分21次循环 crazy... 
        他把所有的数据全放在一个接口里然后给一个typ值让我区分 没办法 
        前方高能！！！
        重构3次..
        -->

        <div class="box"  ref="box2" v-bind:style="{display: activeColorOver}" v-for="(item,i) in AllData" :key="i">
            <p class="PPP">{{title}}</p>
            <!-- 答案选项 -->
            <div 
            v-for="(item,i) in item.name" :key="i" 
            :value="item.object1" 
            class="checked" 
            >
                <CheckboxGroup v-model="checkAllGroup" 
                :title="item.object1" 
                @on-change="testChange(item)">
                    <Checkbox :label="item.object" class="checked" >
                        {{item.object}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <div class="Annota">
                <span class="annotation" 
                v-for="(item,i) in checkAllGroup"
                :key="i"
                >
                    {{i+1}}、{{item}}
                </span>
            </div>
            <Button @click="resultMe" class="But">{{buttonAga}}</Button>
        </div> 
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props:["typTwo"],
    data(){
        return{
            code:"",
            typ:"",
            actiontyp:true,
            Onb:true,
            Twoee:true,
            // 隐藏
            activeColorOver:'block',
            // 题目
            title:"在下面的专业中，选出感兴趣的3个专业并排列顺序",
            // 注释  注意事项
            notice:"注意：请您认真作答，确认提交后将无法对试题答案进行修改",
            // 点击按钮
            buttonLast:"确认提交",
            buttonAga:"下一题",
            // 用户的id
            uid : "",
            // 取消选中
            checkAllGroup:[],
            // 选中的答案
            Answer:[],
            // 意见反馈
            modal1: false,
            // 意见
            value5: '',
            // 页面加载时的时间
            CreaTime:"",
            AllData:[],
            checkAlldata:[]
        }
    },
    created(){
        this.uid = this.$route.query.id;
        // this.acquire();
        this.verify();
    },
    watch:{
        code(n,o){
            if(n===0||o===0){
                this.acquire();
            }else{
                // let headbox = this.$refs.HeaderBox;
                // headbox.style.display = "none" 
                // console.log("awdwadwadawdwdw")
                this.actiontyp = false;
            }
        }
    },
    mounted(){
    },
    methods:{
        // 验证code值为0  则需要做题 
        verify(){
            // let see = this.uid;
            let see = 150;
            axios.post('http://192.168.1.106:8080/AssessScoreMbti/show_mbti',
            see,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
            // 答案
                this.code = res.data.code
                this.typ = res.data.typ
                // console.log(res.data)
            }),(err)=>{
                console.log(err)
            }
        },
        testChange(item){
            let checkAlldata = this.checkAlldata;
            checkAlldata.push(item)
        },
        // 拿数据
        acquire(){
            // let see = this.uid;
            // console.log(this.code)
            let see = this.typ;
            axios.post('http://192.168.1.106:8080/AssessScoreMbti/show_matter',
            see,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
            // 答案
                this.AllData = res.data
                // console.log(res.data)
            }),(err)=>{
                console.log(err)
            }
        },
        // 发送数据给后台
        postBack(data){
            axios.post('http://192.168.1.106:8080/AssessMatter/save2',
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
            if(this.checkAllGroup.length<=3){
                this.Answer = [];
            }else{
                this.$Message.warning('请选择三个以下专业并点击下一题')
                this.Answer=[]
            }
        },
        // style改变
        disPl(canvas){
            canvas.style.display = "none"
        },
        // 警告只能选3个
        err(){
            this.$Message.error('只能选3个');
        },
        FilterData(){   //循环判断数组a里的元素在b里面有没有，有的话就放入新建立的数组中
                let all = this.checkAlldata;
                let selected = this.checkAllGroup;
                let items = [];
                // object判断拿数据
                selected.forEach(item=>{
                    all.forEach(i=>{
                        (item == i.object) && items.push(i)
                    })
                })
                // 删除多余的
                var d = JSON.parse(JSON.stringify(items,function(key,value){
                    if(key=='object1'||key=='personalityType'){
                        return undefined;
                    }else{
                        return value;
                    }
                })) 
                // 改字段名字
                let a = JSON.parse(JSON.stringify(d).replace(/id/g, 'matter')) 
                let aa = JSON.parse(JSON.stringify(a).replace(/object/g, 'score'))
                let arr = []
                // 加字段
                aa.map(((item,index)=>{
                    arr.push(Object.assign({},item,{uid:this.uid,code:1}))
                }))
                arr.forEach(item=>{
                    if(item.matter!=0){
                        item.matter=0
                    }
                })
                // console.log(arr)
                this.postBack(arr)
        },
        // 21个click按钮点击  ref的数值不一样 用同一数值则顺序会乱 
        resultMe(){
            if(this.checkAllGroup.length<=3){
                this.FilterData()
                let data = this.checkAllGroup;
                this.proofread(data)
                this.AllData.shift();
                if(this.AllData.length === 0){
                    let headbox = this.$refs.HeaderBox;
                    headbox.style.display = "none"
                }
                this.checkAllGroup = []
                
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
