<template>
    <div class="box">
        <h1 class="Heade">个人信息</h1>
        <div class="middle">
            <span class="SpanL">姓名 : {{name}}</span>
            <ul class="message">
                <li class="datum">性别 : {{sex}}</li>
                <li class="datum">文理 : {{major}}</li>
            </ul>
            <span class="SpanL">学校 : {{school}}</span>
            <ul class="message">
                <li class="datum">年级 : {{grade}}</li>
                <li class="datum">班级 : {{classAnd}}</li>
            </ul>
            <span class="SpanL" :title="province">省份 : {{province}}</span>
            <br>
            <span class="SpanL">市区 : {{city}}</span>
            <br>
            <span class="SpanL">区县 : {{county}}</span>
            <br>
            <span class="SpanL">电话 : {{tel}}</span>
        </div>
        <Button type="success" long class="Butt" @click="jump">开始答题</Button>
    </div>
</template>

<script>
//   登陆完跳转的准备页面 
export default {
    data(){
        return{
            name:"李富贵",
            sex:"男",
            major:"文科",
            province:"广东",
            city:"广州",
            county:"路南",
            school:"一中",
            grade:"二年级",
            classAnd:"22班",
            tel:"1235645485"
        }
    },
    created(){

    },
    methods:{
        jump(){
            console.log("111111111111111111111")
        }
    }
}
</script>

<style scoped>
    .box{
        width: 800px;
        margin: 200px auto;
    }
    .middle{
        /* margin-left: 30%; */
    }
    .message{
        width: 600px;
        margin: 0 auto;
        overflow: hidden;
    }
    .Heade{
        width: 600px;
        font-size: 30px;
        text-align: left;
        /* background: orange; */
        height: 80px;
    }
    .SpanL{
        width: 600px;
        font-size: 20px;
        text-align: left;
        /* background: orange; */
        display: inline-block;
        height: 60px;
    }
    .datum{
        text-align: left;
        display: inline-block;
        width: 300px;
        height: 60px;
        font-size: 20px;
        white-space:nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
    }
    .Butt{
        width: 200px;
        margin: 50px auto
    }
    ul{
        list-style: none;
    }
</style>
