<template>
    <div>
        <div class="maj">
            <ul>
                <div style="background:red;color:#fff;margin-bottom:20px;width:120px;">
                    <h1 style="text-align:center;">非常适合</h1>
                </div>
                <div style="width:600px;font-size:15px;text-align:left;"> 
                    <li style="color:#708090;display:inline-block;text-align:left;">
                        {{designation}}
                    </li> 
                </div>
                <Divider />
                <li v-for="(item,i) in utmost" :key="i" style="font-size:15px;width:600px;text-align:left;">
                    <div style="display:inline-block;width:600px;text-align:left;">
                        {{item}}
                    </div>
                    <!-- <div style="display:inline-block;width: 600px;">
                        <Rate clearable :value="item.num" disabled :count="12" /> 
                    </div> -->
                </li>
            </ul>
        </div>
        <div class="maj">
            <ul>
                <div style="background:red;color:#fff;margin-bottom:20px;width:120px;">
                    <h1 style="text-align:center;">比较适合</h1>
                </div>
                <div style="margin-bottom:5px;font-size:15px;width:600px;text-align:left;"> 
                    <li style="color:#708090;display:inline-block;text-align:left;">
                        {{designation}}
                    </li> 
                </div>
                <Divider />
                <li v-for="(item,i) in very" :key="i" style="font-size:15px;margin:5px 0;width:600px;text-align:left;">
                    <div style="display:inline-block;width: 600px;text-align:left;">
                        {{item}}
                    </div>
                    <!-- <div style="display:inline-block;width: 600px;">
                        <Rate clearable v-model="value1" disabled  :count="12" /> 
                    </div> -->
                </li>
            </ul>
        </div>
       <div class="maj">
            <ul>
                <div style="background:red;color:#fff;margin-bottom:20px;width:120px;">
                    <h1 style="text-align:center;">一般适合</h1>
                </div>
                <div style="margin-bottom:5px;font-size:15px;width:600px;text-align:left;"> 
                    <li style="color:#708090;display:inline-block;text-align:left;">
                        {{designation}}
                    </li> 
                </div>
                <Divider />
                <li v-for="(item,i) in common" :key="i" style="font-size:15px;margin:5px 0;width:600px;text-align:left;">
                    <div style="display:inline-block;width: 600px;text-align:left;">
                        {{item}}
                    </div>
                    <!-- <div style="display:inline-block;width: 600px;">
                        <Rate clearable v-model="value1" disabled  :count="12" /> 
                    </div> -->
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
