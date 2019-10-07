<template>
    <div class="box">
        <h1>第五部分：综合测评结果</h1>
        <span style="text-align:left;display:block;margin-bottom:20px;font-size:20px;font-weight:bolder;margin-top:50px;">根据以上四个方面的测评结果，你感兴趣的职业类别包括以下九种：</span>
        <Table border :columns="columns1" :data="data1" style="width: 590px;margin: 0 auto;"></Table>
        <div style="text-align:left;display:block;font-size:18px;margin-top:20px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在以上职业类别中，符合你的人格类型【规划者 (粘液质-决策型)】的职业类别是排名第 六 的职业类别【社会制度-规划与实施】，你在这一职业类别上的学科潜能指数为第    等。
        </div>
        <div style="text-align:left;display:block;font-size:18px;margin-top:20px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你的心理定位与以上职业类别不匹配的是：【个体生命-使用与维护】。
        </div>
        <div style="text-align:left;display:block;font-size:18px;margin-top:20px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            根据以上判断，优先推荐的职业类别是：【社会制度-规划与实施】，在这一职业类别所对应的学科门类中，你感兴趣的学科是：公共管理、经济学、地理科学。
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            columns1: [
                {
                    title: '序号',
                    key: 'name'
                },
                {
                    title: '职业类别',
                    key: 'age'
                }
            ],
            data1: [
                {
                    name: 1,
                    age: '个体生命-使用与维护',
                },
                {
                    name: 2,
                    age: '个体生命-研究与探索',
                },
                {
                    name: 3,
                    age: '社会制度-使用与维护',
                },
                {
                    name: 4,
                    age: '人造事物-使用与维护',
                }
            ]
        }
    }
}
</script>

<style scoped>
    @media screen and (min-width: 1200px){
        .box{
            width: 1100px;
            margin: 0 auto;
            margin-top: 100px;
        }
        
    }
   @media screen and (max-width: 1199px){
        .box{
            width: 800px;
            margin: 0 auto;
            margin-top: 100px;
        }
        
   }
</style>