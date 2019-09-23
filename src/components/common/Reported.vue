<template>
    <div>
        <!-- <div>
            <Icon type="md-boat" size="30" />
            <h1 class="Rep">{{Report}}</h1>
            <Spin style="display:'inline-block'"></Spin>
        </div> -->
        <div class="headerTT">
            <img src="../../assets/111.png" 
                 style="
                 width:400px;
                 height:120px;
                 display:block;
                 padding-bottom:60px;
                 margin-bottom:60px;
                 " 
                 alt=""
            >
        </div>
        <Cover style="break-after:page;page-break-after: always;margin-top:80px;"></Cover>
        <Header style="break-after:page;page-break-after: always;margin-top:80px;"></Header>
        <Preface style="break-after:page;page-break-after: always;margin-top:80px;"></Preface>
        <Interest style="break-after:page;page-break-after: always;margin-top:80px;"></Interest>
        <Personality style="break-after:page;page-break-after: always;margin-top:80px;"></Personality>
        <Potency style="break-after:page;page-break-after: always;margin-top:80px;"></Potency>
        <Location style="break-after:page;page-break-after: always;margin-top:80px;"></Location>
        <Analysis style="break-after:page;page-break-after: always;margin-top:80px;"></Analysis>
        <Bottom style="break-after:page;page-break-after: always;margin-top:80px;"></Bottom>
        <BackTop class="bottBack"></BackTop>
        
        <!-- <Divider class="segmentation" size="default"/> -->
        <!-- <Radar style="break-after:page;page-break-after: always;"></Radar> -->
        <!-- <Roundness style="break-after:page;page-break-after: always;"></Roundness> -->
        <!-- <Report class="header" style="break-after:page;page-break-after: always;"></Report>   -->
        <!-- <Major style="break-after:page;page-break-after: always;"></Major> -->
        <!-- 滑动按钮 -->
    </div>
</template>

<script>
import axios from 'axios'
// 封面
import Cover from './graph/Cover'
// 表头 姓名 
import Header from './graph/Header'
// 前言preface
import Preface from './graph/Preface'
// 第一部分：全职兴趣测验结果
import Interest from './graph/Interest'
// 第二部分:职业人格测验结果
import Personality from './graph/Personality'
// 第三部分:学科潜能调查的结果
import Potency from './graph/Potency'
// 第四部分:心理定位测验结果
import Location from './graph/Location'
// 第五部分:高等院校部分学科,专业解析
import Analysis from './graph/Analysis'
// 结束语
import Bottom from './graph/Bottom'




// 雷达图
import Radar from './graph/Radar'
// 第二个雷达图
import Roundness from './graph/Roundness' 
// 柱状图
import Report from './graph/Report'
// 专业
import Major from './graph/Major'
// 专业解析
export default {
    data(){
        return{
            // 登录过的id
            Report:"测试报告结果",
        }
    },
    components:{
        Cover,
        Header,
        Preface,
        Interest,
        Personality,
        Potency,
        Location,


        Report,
        Roundness,
        Radar,
        Major,
        Analysis,
        Bottom
    }
}
</script>

<style scoped media="print">
    *{
        margin: 0;
        padding: 0;
    }
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
    @media print{
        .bottBack{
            display: none !important;
        }
        @page {
            margin-top: 0;
            margin-right: 0;
            margin-left: 0;
        }
        body {
            margin-top: 2cm;
            margin-right: 2cm;
            margin-bottom: 2cm;
        }
        .headerTT {
            position: fixed;
            top: 0;
        }
        /* .footerTT {
            position: fixed;
            bottom: 0;
        } */

    }
    @media screen and (min-width: 1200px){
        .segmentation{
            height: 3px;
            width: 800px;
            display: block;
            min-width: 1100px;
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
