<template>
    <div class="surveydetail" ref="headbox">
        <span style="display:block;font-weight:bolder;text-align:left;font-size:18px;">3.2.1学科成绩调查</span>
        <span style="display:block;margin:10px 0 50px 20px;font-size:13px;letter-spacing:3px;">(一)在最近一次全校学生参加的正式考试中,你各学科获得的成绩：</span>
        <form action="" style="border:1px solid #ccc">
            <thead>
                <tr>
                    <th style="width:60px;height:100px;">职业领域</th>
                    <th style="width:60px;height:100px;">学科</th>
                    <th style="width:94px;height:100px;">总分值T</th>
                    <th style="width:94px;height:100px;">考试成绩I</th>
                    <th style="width:94px;height:100px;">年级平均分P</th>
                    <th style="width:94px;height:100px;">标准分：(I-P)/0.15*T</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="height:60px;text-align:left;">自然事物</td>
                    <td style="height:60px;text-align:left;">物理</td>
                    <td v-for="(item,i) in physics" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
               <tr>
                    <td style="height:60px;text-align:left;">自然事物</td>
                    <td style="height:60px;text-align:left;">化学</td>
                    <td v-for="(item,i) in chemistry" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">自然事物</td>
                    <td style="height:60px;text-align:left;">生物</td>
                    <td v-for="(item,i) in biology" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                 <tr>
                    <td style="height:60px;text-align:left;">人造事物</td>
                    <td style="height:60px;text-align:left;">信息技术</td>
                    <td v-for="(item,i) in message" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">人造事物</td>
                    <td style="height:60px;text-align:left;">通用技术</td>
                    <td v-for="(item,i) in common" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">艺术符号</td>
                    <td style="height:60px;text-align:left;">美术</td>
                    <td v-for="(item,i) in fineArts" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">艺术符号</td>
                    <td style="height:60px;text-align:left;">音乐</td>
                    <td v-for="(item,i) in music" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">数学符号</td>
                    <td style="height:60px;text-align:left;">数学</td>
                    <td v-for="(item,i) in mathematics" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">语言符号</td>
                    <td style="height:60px;text-align:left;">语文</td>
                    <td v-for="(item,i) in language" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">语言符号</td>
                    <td style="height:60px;text-align:left;">英语</td>
                    <td v-for="(item,i) in english" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">社会制度</td>
                    <td style="height:60px;text-align:left;">历史</td>
                    <td v-for="(item,i) in history" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">社会制度</td>
                    <td style="height:60px;text-align:left;">地理</td>
                    <td v-for="(item,i) in geography" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">社会制度</td>
                    <td style="height:60px;text-align:left;">政治</td>
                    <td v-for="(item,i) in politics" :key="i"> 
                        <input type="text" class="inpAll" v-model="item.name">
                    </td>
                </tr>
                <tr>
                    <td style="height:60px;text-align:left;">个体生命</td>
                    <td style="height:60px;text-align:left;">XXX</td>
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
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            chemistry:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            biology:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            message:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            common:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            fineArts:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            music:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            mathematics:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            language:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            english:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            history:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            geography:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            politics:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
            ],
            unit:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
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
        height: 1500px;
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
        text-align: left
    }
    .inpAll{
        /* display: inline-block; */
        /* width: 100%; */
        width: 91px;
        margin-right: 2px;
    }
</style>