<template>
    <div>
        <div class="maj">
            <ul>
                <div style="background:red;color:#fff;margin-bottom:20px;width:120px;">
                    <h1 style="text-align:center;">非常适合</h1>
                </div>
                <div style="margin-bottom:5px;font-size:15px;"> 
                    <li style="color:#708090;display:inline-block;">
                        {{designation}}
                    </li> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {{synopsis}}
                </div>
                <Divider />
                <li v-for="(item,i) in utmost" :key="i" style="font-size:15px;margin:5px 0;">{{item}}</li>
            </ul>
        </div>
        <div class="maj">
            <ul>
                <div style="background:red;color:#fff;margin-bottom:20px;width:120px;">
                    <h1 style="text-align:center;">比较适合</h1>
                </div>
                <div style="margin-bottom:5px;font-size:15px;"> 
                    <li style="color:#708090;display:inline-block;">
                        {{designation}}
                    </li> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {{synopsis}}
                </div>
                <Divider />
                <li v-for="(item,i) in very" :key="i" style="font-size:15px;margin:5px 0;">{{item}}</li>
            </ul>
        </div>
       <div class="maj">
            <ul>
                <div style="background:red;color:#fff;margin-bottom:20px;width:120px;">
                    <h1 style="text-align:center;">一般适合</h1>
                </div>
                <div style="margin-bottom:5px;font-size:15px;"> 
                    <li style="color:#708090;display:inline-block;">
                        {{designation}}
                    </li> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {{synopsis}}
                </div>
                <Divider />
                <li v-for="(item,i) in common" :key="i" style="font-size:15px;margin:5px 0;">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            designation : "专业(类)名称",
            synopsis : "专业简介",
            // 3块专业
            utmost:[],
            very:[],
            common:[]
        }
    },
    created(){
        this.category();
    },
    methods:{
        category(){
            let data = this.$route.query.id;
            // let data = 43
            axios.post('http://192.168.1.100:8080/AssessScore/showResult',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                let arr = res.data;
                this.utmost = arr[0],
                this.very = arr[1],
                this.common = arr[2]
             }),(err)=>{
                  console.log(err)
            }
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
    }
    .maj{
        text-align: left;
        width: 1200px;
        margin: 40px auto;
    }

</style>
