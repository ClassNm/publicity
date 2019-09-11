<template>
    <div class="box">
        <img src="../../../assets/111.png" alt="">
        <h1 class="tit">全职四维生涯测评分析报告</h1>
        <div class="head" style="letter-spacing: 5px;">张三</div>
        <div class="head">2019/9/3</div>
        <li class="bot">一段文字.....................................</li>
    </div>
</template>

<style scoped media="print">
    @page{
    /* size: auto A4 landscape; */
    /* margin-left: 3mm; */
    }
    @media print{
    }
    /* @page:right{
        @bottom-left {
            margin: 10pt 0 30pt 0;
            border-top: .25pt solid #666;
            content: "Our Cats";
            font-size: 9pt;
            color: #333;
        }
        @bottom-right { 
            margin: 10pt 0 30pt 0;
            border-top: .25pt solid #666;
            content: counter(page);
            font-size: 9pt;
        }


        @top-right{
            content: "Our Cats";
            font-size: 9pt;
            color: red;
        }
    } */
    li{
        list-style: none;
    }
    .box{
        width: 1100px;
        margin: 0 auto;
        margin-top: 100px;
    }
    img{
        width: 700px;
        height: 110px;
        margin: 50px 0 100px 0;
    }
    .tit{
        margin-bottom: 150px;
    }
    .head{
        font-size: 20px;
        display: block;
        margin-bottom: 30px;
        font-weight: bolder;
    }
    .bot{
        font-size: 15px;
        display: block;
        text-align: left;
        letter-spacing: 2px;
    }
</style>