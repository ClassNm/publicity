<template>
    <div class="maj">
        <div style="background:red;color:#fff;margin-bottom:20px;width:120px;">
            <h1 style="text-align:center;">{{headerT}}</h1>
        </div>
        <div class="box" style="text-align:left;width:1205px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{content}}
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            headerT:"结束语",
            content:""
        }
    },
    mounted(){
        this.majorMeth()
    },
    methods:{
        majorMeth(){
            let data = 2
            axios.post('http://47.104.245.242:8081/assessReport/show_Report',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{
                this.content = res.data[0].name;
            })
        }
    }
}
</script>

<style scoped>
    @media screen and (min-width: 1200px){
        *{
            margin: 0;
            padding: 0;
        }
         .maj{
            text-align: left;
            width: 1200px;
            margin: 40px auto;
            
        }
        .box{
            margin-top: 30px;
            font-size: 15px;
        }
    }
   @media screen and (max-width: 1199px){
       .maj{
            text-align: left;
            width: 800px;
            margin: 40px auto;
        }
        .box{
            margin-top: 30px;
            width: 800px !important;
            border: 2px solid  lightgray    ;
        }
   }
</style>
