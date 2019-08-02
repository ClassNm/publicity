<template>
    <div>
        <div>
            <Icon type="md-boat" size="30" />
            <h1 class="Rep">{{Report}}</h1>
            <Spin style="display:'inline-block'"></Spin>
        </div>
        <Header></Header>
        <Divider class="segmentation" size="default"/>
        <Radar></Radar>
        <Roundness></Roundness>
        <Report class="header"></Report>  
        <Major></Major>

        <!-- 滑动按钮 -->
        <BackTop></BackTop>
    </div>
</template>

<script>
import axios from 'axios'
// 表头 姓名 
import Header from './graph/Header'
// 雷达图
import Radar from './graph/Radar'
// 第二个雷达图
import Roundness from './graph/Roundness' 
// 柱状图
import Report from './graph/Report'
// 专业
import Major from './graph/Major'
export default {
    data(){
        return{
            // 登录过的id
            Report:"测试报告结果",
        }
    },
    components:{
        Header,
        Report,
        Roundness,
        Radar,
        Major
    }
}
</script>

<style scoped>
    /* 为了修改Tabs的标题大小不设置 scoped 权限问题 */
    .Rep{
        margin: 20px 0;
        color: red;
        display: inline-block;
    }

    /* 初始化显示的跳转等待默认样式 */
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @media screen and (min-width: 1200px){
       
        .segmentation{
            height: 3px;
            width: 800px;
            display: block;
            min-width: 1200px;
            margin: 24px auto;
        }
    }
   @media screen and (max-width: 1199px){
        
        .segmentation{
            height: 3px;
            width: 800px;
            display: block;
            min-width: 800px;
            margin: 24px auto;
        }
   }
</style>
