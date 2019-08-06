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
                </div>
                <Divider />
                <li v-for="(item,i) in test" :key="i" style="font-size:15px;margin-top:5px;">
                    <div style="display:inline-block;width:600px;">
                        {{item.name}}
                    </div>
                    <div style="display:inline-block;width: 600px;">
                        <Rate clearable :value="item.num" disabled :count="12" /> 
                    </div>
                
                </li>
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
                </div>
                <Divider />
                <li v-for="(item,i) in very" :key="i" style="font-size:15px;margin:5px 0;">
                    <div style="display:inline-block;width: 600px;">
                        {{item}}
                    </div>
                    <div style="display:inline-block;width: 600px;">
                        <Rate clearable v-model="value1" disabled  :count="12" /> 
                    </div>
                </li>
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
                </div>
                <Divider />
                <li v-for="(item,i) in common" :key="i" style="font-size:15px;margin:5px 0;">
                    <div style="display:inline-block;width: 600px;">
                        {{item}}
                    </div>
                    <div style="display:inline-block;width: 600px;">
                        <Rate clearable v-model="value1" disabled  :count="12" /> 
                    </div>
                </li>
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
            // 3块专业
            utmost:[],
            very:[],
            common:[],
            value1:10,
            lengNum:[
                1,
                3,
                4,
                6,
                2,
                9,
                11,
                12,
                9,
                1
            ],
            test:[
                {
                    name:"应用生物科学",
                    num:"10"
                },
                {
                    name:"动物医学",
                     num:"1"
                },
                {
                    name:"动物药学",
                     num:3
                },
                {
                    name:"生物医学",
                     num:1
                },
                {
                    name:"基础医学",
                     num:9
                },
                {
                    name:"生物医学科学",
                     num:12
                },
            ],
        }
    },
    created(){
        this.category();
    },
    methods:{
        category(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8081/AssessScore/showResult',
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
    @media screen and (min-width: 1200px){
         .maj{
            text-align: left;
            width: 1200px;
            margin: 40px auto;
        }
    }
   @media screen and (max-width: 1199px){
       .maj{
            text-align: left;
            width: 800px;
            margin: 40px auto;
        }
   }

</style>
