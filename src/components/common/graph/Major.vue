<template>
    <div>
        <div class="maj">
            <ul>
                <div style="background:red;color:#fff;margin-bottom:20px;width:120px;">
                    <h1 style="text-align:center;">非常适合</h1>
                </div>
                <div style="margin-bottom:5px;font-size:15px;"> 
                    <li style="color:#708090;display:inline-block;">
                        专业(类)名称
                    </li> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    专业简介
                </div>
                <Divider />
                <li v-for="(item,i) in headerTit" :key="i" style="font-size:15px;margin:5px 0;">{{item.name}}</li>
            </ul>
        </div>
        <div class="maj">
            <ul>
                <div style="background:red;color:#fff;margin-bottom:20px;width:120px;">
                    <h1 style="text-align:center;">比较适合</h1>
                </div>
                <div style="margin-bottom:5px;font-size:15px;"> 
                    <li style="color:#708090;display:inline-block;">
                        专业(类)名称
                    </li> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    专业简介
                </div>
                <Divider />
                <li v-for="(item,i) in headerTit" :key="i" style="font-size:15px;margin:5px 0;">{{item.name}}</li>
            </ul>
        </div>
       <div class="maj">
            <ul>
                <div style="background:red;color:#fff;margin-bottom:20px;width:120px;">
                    <h1 style="text-align:center;">一般适合</h1>
                </div>
                <div style="margin-bottom:5px;font-size:15px;"> 
                    <li style="color:#708090;display:inline-block;">
                        专业(类)名称
                    </li> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    专业简介
                </div>
                <Divider />
                <li v-for="(item,i) in headerTit" :key="i" style="font-size:15px;margin:5px 0;">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            headerTit:[
                {
                    name:"物联网工程"
                },
                {
                    name:"电子计算机"
                },
                {
                    name:"网络空间安全"
                },
                {
                    name:"新媒体运行"
                },
                {
                    name:"自动化"
                },
                {
                    name:"轨道交通信号与控制"
                },
                {
                    name:"机器人工程"
                },
                {
                    name:"邮政工程"
                },
                {
                    name:"飞行器制造"
                },
                {
                    name:"飞行器控制工程"
                },
            ]
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
