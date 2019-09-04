<template>
    <div class="box">
        <h1 style="margin-top:80px;">前言</h1>
        <li style="text-align:left;font-size:15px;margin-bottom:150px;margin-top:50px;">
            闫老师编写..................................................................................
        </li>
        <li style="text-align:left;font-size:15px;letter-spacing: 3px;font-weight:bolder;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“全职四维”生涯规划测验从兴趣、人格、潜能、定位四个维度，对影响学生生涯规划的四个因素进行系统的测评，并根据测评结果向学生推荐适合的学科类别。每一级推荐都在上一级推荐的基础上进行，逐渐缩小范围，确保最后的推荐结果精准匹配学生情况。
        </li>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Sanya_Sun_Photo_by_Dale_Preston_enhanced.jpg" alt="">
        <span style="text-align:left;font-size:20px;display:block;font-weight:bolder;margin-bottom: 40px;">【名词释义】</span>
        <ul  style="text-align:left;font-size:15px;margin-left:30px;">
            <li>1，全职兴趣测验：按照“{{one}}”和“{{two}}”两个维度，将大学本科的学科（职业）分为21种类型，考察学生对21种类型的兴趣。</li>
            <li>2，四维人格测验：从心理倾向、信息偏好、认知风格、行为方式四个维度，将个体人格分为16种类别，并根据“感兴趣的活动”维度对应到21种学科类型。</li>
            <li>3，学科潜能调查：从“感兴趣的对象”维度出发，系统考察个体针对不同对象的学科潜能。</li>
            <li>4，心理定位测验：考察学生从小确立的关于自己与他人价值判断的基本信念，涉及学生是否适合从事与人有关的职业。</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            one:"感兴趣的对象",
            two:"感兴趣的活动"
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
        margin: 10px 0;
    }
    img{
        width: 300px;
        height: 300px;
        margin-bottom:50px;
        margin-top: 50px;
    }
    .box{
        width: 1100px;
        margin: 0 auto;
        margin-bottom: 100px;
    }
</style>