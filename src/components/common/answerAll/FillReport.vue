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
                    <td v-for="(item,i) in physics" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
               <tr>
                    <td style="height:60px;">化学</td>
                    <td v-for="(item,i) in chemistry" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">生物</td>
                    <td v-for="(item,i) in biology" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                 <tr>
                    <td style="height:60px;">信息技术</td>
                    <td v-for="(item,i) in message" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">通用技术</td>
                    <td v-for="(item,i) in common" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">美术</td>
                    <td v-for="(item,i) in fineArts" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">音乐</td>
                    <td v-for="(item,i) in music" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">数学</td>
                    <td v-for="(item,i) in mathematics" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">语文</td>
                    <td v-for="(item,i) in language" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">英语</td>
                    <td v-for="(item,i) in english" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">历史</td>
                    <td v-for="(item,i) in history" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">地理</td>
                    <td v-for="(item,i) in geography" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">政治</td>
                    <td v-for="(item,i) in politics" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;">XXX</td>
                    <td v-for="(item,i) in unit" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
            </tbody>
        </form>
        <Button type="primary" style="margin:20px auto;display:block;width: 80px;" @click="file">提交</Button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            physics:[
                {
                    name:""
                },
            ],
            chemistry:[
                {
                    name:""
                }
            ],
            biology:[
                {
                    name:""
                }
            ],
            message:[
                {
                    name:""
                }
            ],
            common:[
                {
                    name:""
                }
            ],
            fineArts:[
                {
                    name:""
                }
            ],
            music:[
                {
                    name:""
                }
            ],
            mathematics:[
                {
                    name:""
                }
            ],
            language:[
                {
                    name:""
                }
            ],
            english:[
                {
                    name:""
                }
            ],
            history:[
                {
                    name:""
                }
            ],
            geography:[
                {
                    name:""
                }
            ],
            politics:[
                {
                    name:""
                }
            ],
            unit:[
                {
                    name:""
                }
            ]
        }
    },
    methods:{
        file(){
            // console.log(111)
            let headbox = this.$refs.headbox
            headbox.style.display = "none"
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