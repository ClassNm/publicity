<template>
<!-- 多选 -->
    <div class="checkAll" ref="HeaderBox">
        <!-- because 给的数据格式很奇怪 只能拆分开分21次循环 crazy... 
        他把所有的数据全放在一个接口里然后给一个typ值让我区分 没办法 
        前方高能！！！
        重构3次..
        -->

        <div class="box"  ref="box2" v-bind:style="{display: activeColorOver}" v-for="(item,i) in AllData" :key="i">
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
            v-for="(item,i) in item.name" :key="i" 
            :value="item.object1" 
            class="checked" 
            >
                <CheckboxGroup v-model="checkAllGroup" :title="item.object1" @on-change="testChange(item)">
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
            // TYPtWO : ""
            AllData:[],
            checkAlldata:[]
        }
    },
    created(){
        this.uid = this.$route.query.id;
        this.acquire();
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
        testChange(item){
            let checkAlldata = this.checkAlldata;
            checkAlldata.push(item)
        },
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
            let see = this.uid;
            axios.post('http://192.168.1.106:8080/AssessMatter/showMatter2',
            see,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
            // 答案
                this.AllData = res.data
                console.log(res.data)
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
        // 根据v-model的名字筛选选中的值  弃用
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
