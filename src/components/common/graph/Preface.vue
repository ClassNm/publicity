<template>
    <div class="box">
        <h1 style="margin-top:80px;">前言</h1>
        <li v-for="(item,i) in liData" :key="i" style="text-align:left;font-size:15px;margin-bottom:10px;margin-top:30px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.name}}
        </li>
        <li style="text-align:left;font-size:15px;letter-spacing: 3px;font-weight:bolder;margin-top:50px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“全职四维”生涯规划测验从兴趣、人格、潜能、定位四个维度，对影响学生生涯规划的四个因素进行系统的测评，并根据测评结果向学生推荐适合的学科类别。每一级推荐都在上一级推荐的基础上进行，逐渐缩小范围，确保最后的推荐结果精准匹配学生情况。
        </li>
        <img src="../../../assets/222.jpg" alt="">
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
            two:"感兴趣的活动",
            liData:[
                {
                    name:"我们所面临的时代，可能是人类有史以来科学技术发展速度最快的时期、是知识更新最快的时期、也是社会对于人才筛选和淘汰速度最快的时期。尤其在人工智能大行其道的当下，许多行业将要或者正在经历着剧烈的变化，如何成为具有持久竞争力的人才已经成为不可回避的课题。"
                },
                {
                    name:"人才培养的时间或长或短，因人而异。但是，培养的目标都是指向就业。不同职业往往都有一些具有差异性的要求，所以在规划自己未来的时候，一定要充分审视自身的条件和基础，对照职业要求，发挥自身优势，弥补自身不足，以便在有限的成长时间内打造出具有强大优势的就业竞争力。"
                },
                {
                    name:"目前的现状是中学生不大可能有充足的时间和精力去全面、细致的了解大量职业，甚至于很多中学生连拿出时间分析自身条件都是奢侈的事情。其实，用大量的时间来做这项工作也确实有一定的难度，可行性并不高。我们的全职四维生涯测评系统从内在两个方面开展分析：一方面从全职兴趣、四维人格、学科潜能、心理定位四个维度对影响学生生涯规划的因素进行系统测评，从而分层推进逐步描画清晰的基础画像；另一方面通过大量的调查分析，摸清各学科、专业、职业对各种条件的需求。然后通过多角度匹配为学生找到擅长、适合的学科、专业和职业。"
                },
                {
                    name:"测评帮您明确生涯方向，努力决定您在这个方向上走多远，两者结合，就是您成功的体量。"
                }
            ]
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
        width: 600px;
        height: 600px;
        margin-bottom:50px;
        margin-top: 50px;
    }
    .box{
        width: 1100px;
        margin: 0 auto;
        margin-bottom: 100px;
    }
</style>