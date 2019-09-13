<template>
    <div class="surveydetail" ref="headbox">
        <span style="display:block;font-weight:bolder;font-size:18px;">3.2.1学科成绩调查</span>
        <span style="display:block;margin:10px 0 50px 20px;font-size:13px;letter-spacing:3px;">(一)在最近一次全校学生参加的正式考试中,你各学科获得的成绩：</span>
        <form action="" style="border:1px solid #ccc">
            <thead>
                <tr>
                    <th style="width:250px;height:100px;">学科</th>
                    <th style="width:250px;height:100px;">考试成绩I</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="height:60px;">物理</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="physics">
                    </td>
                </tr>
               <tr>
                    <td style="height:60px;">化学</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="chemistry">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">生物</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="biology">
                    </td>
                </tr>
                 <tr>
                    <td style="height:60px;">信息技术</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="message">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">通用技术</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="common">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">美术</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="fineArts">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">音乐</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="music">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">数学</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="mathematics">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">语文</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="language">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">英语</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="english">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">历史</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="history">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">地理</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="geography">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">政治</td>
                    <td> 
                        <input type="text" class="inpAll" v-model="politics">
                    </td>
                </tr>
            </tbody>
        </form>
        <Button type="primary" style="margin:20px auto;display:block;width: 80px;" @click="file">提交</Button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            // physics:[
            //     {
            //         name:""
            //     },
            // ],
            physics:"",
            chemistry:"",
            biology:"",
            message:"",
            common:"",
            fineArts:"",
            music:"",
            mathematics:"",
            language:"",
            english:"",
            history:"",
            geography:"",
            politics:"",
            unit:""
        }
    },
    methods:{
        file(){
            let headbox = this.$refs.headbox
            headbox.style.display = "none"
            // let uid = this.$route.query.id;
            let uid = 150;
            let data = [
                {
                    score:this.physics,
                    typ:"N",
                    uid:uid
                },
                {
                    score:this.chemistry,
                    typ:"N",
                    uid:uid
                },
                {
                    score:this.biology,
                    typ:"N",
                    uid:uid
                },
                {
                    score:this.message,
                    typ:"T",
                    uid:uid
                },
                {
                    score:this.common,
                    typ:"T",
                    uid:uid
                },
                {
                    score:this.fineArts,
                    typ:"A",
                    uid:uid
                },
                {
                    score:this.music,
                    typ:"A",
                    uid:uid
                },
                {
                    score:this.mathematics,
                    typ:"M",
                    uid:uid
                },
                {
                    score:this.language,
                    typ:"I",
                    uid:uid
                },
                {
                    score:this.english,
                    typ:"I",
                    uid:uid
                },
                 {
                    score:this.history,
                    typ:"S",
                    uid:uid
                },
                 {
                    score:this.geography,
                    typ:"S",
                    uid:uid
                },
                 {
                    score:this.politics,
                    typ:"S",
                    uid:uid
                },
            ];
            axios.post('http://192.168.1.106:8080/AssessScoreTechangWeb/save',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{

            }),(err)=>{

            }
            console.log(data)
        }
    }
}
</script>

<style scoped>
    .surveydetail{
        width: 500px;;
        height: 3500px;
        overflow: hidden;
        margin: 50px auto 300px
    }
    table{
        display: table;
        border-collapse: separate;
        border-spacing: 2px;
        border-color: grey;
    }
    thead{
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
    }
    tr{
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    th{
        /* text-align: left */
    }
    .inpAll{
        /* display: inline-block; */
        /* width: 100%; */
        width: 240px;
        margin-right: 10px;
    }
</style>