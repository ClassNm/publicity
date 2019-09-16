<template>
    <div class="maj">
        <h1 style="text-align:center;margin-bottom:50px;">{{headerT}}</h1>
        <div class="box" v-for="(item,i) in objLe" :key="i" style="width:1100px;">
            <div style="font-size:20px;height:50px;line-height:50px;background:pink;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.name}}</div>
            <ul class="outer" style="width:1100px;text-align:left;">
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业类概述&nbsp;▼
                <br>
                <li class="insideSon" :title="item.generalize" style="text-align:left;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.generalize}}
                </li>
            </ul>
            <ul class="inside" style="width:1100px;text-align:left;">
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;适用专业&nbsp;▼
                <br>
                <li class="insideSon" :title="item.suit" style="text-align:left;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.suit}}
                </li>
            </ul>
            <ul class="outer" style="width:1100px;text-align:left;">
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;培养目标&nbsp;▼
                <br>
                <li class="insideSon" :title="item.target" style="text-align:left;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.target}}
                </li>
            </ul>
            <ul class="inside" style="width:1100px;text-align:left;" v-if="item.direction.length==0?false:true" >
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;培养方向&nbsp;▼
                <br>
                <li class="insideSon" :title="item.direction" style="text-align:left;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.direction}}
                </li>
            </ul>
            <ul class="outer" style="width:1100px;text-align:left;">
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;院校示例&nbsp;▼
                <br>
                <li class="insideSon" :title="item.example" style="text-align:left;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.example}}
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
import { truncate } from 'fs';
export default {
    data(){
        return{
            objLe:[],
            headerT:"第五部分:高等院校部分学科,专业解析",
            major:"",
            Typtit:true
        }
    },
    mounted(){
        this.majorMeth()
    },
    methods:{
        majorMeth(){
            let data = this.$route.query.id;
            axios.post('http://47.104.245.242:8085/AssessProfessionalIntroduction/show',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.objLe = res.data;
            })
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
    }
    @media screen and (min-width: 1200px){
        *{
            margin: 0;
            padding: 0;
        }
         .maj{
            text-align: left;
            width: 1100px;
            margin: 40px auto;
            margin-top: 150px;
        }
        .box{
            text-align: left;
            width: 1100px;
            margin-top: 30px;
            border: 2px solid  lightgray    ;
        }
        .outer{
            background: #f7f7f7;
            text-align: left;
            /* height: 400px; */
            width: 1100px;
            font-size: 20px;
            overflow: hidden;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
        }
        .inside{
            background: white;
            text-align: left;
             width: 1100px;
            font-size: 20px;
             overflow: hidden;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
        }
        .insideSon{
            text-align: left;
            margin-top: 30px;
        }
    }
   @media screen and (max-width: 1199px){
       .maj{
            text-align: left;
            width: 800px;
            margin: 40px auto;
        }
        .box{
            text-align: left;
            width: 800px !important;
            margin-top: 30px;
            border: 2px solid  lightgray;
        }
        .outer{
            background: #f7f7f7;
            text-align: left;
            height: 400px;
            width: 800px !important;
            font-size: 20px;
            overflow: hidden;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
        }
        .inside{
            background: white;
            text-align: left;
            height: 400px;
             width: 800px !important;
            font-size: 20px;
             overflow: hidden;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
        }
        .insideSon{
            text-align: left;
            margin-top: 30px;
        }
   }
</style>
