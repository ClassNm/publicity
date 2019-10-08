<template>
    <div class="box">
        <h1 style="font-size:30px;">第六部分：专业大视野</h1>
        <div class="dashedT" style="margin-top:20px;">
            <span style="text-align:left;display:block;margin-bottom:20px;font-size:20px;font-weight:bolder;margin-top:50px;margin-left:20px;">
                根据全职四维生涯测评系统对四个因素进行系统的测评，现根据测评结果，将所有适合你学习的专业进行展示，以供参考：
            </span>
            <Table border :columns="columns1" :data="data1" style="width:1000px;margin:0 auto;margin-bottom:20px;"></Table>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            columns1: [
                {
                    title: '类别',
                    key: 'name'
                },
                {
                    title: '学科',
                    key: 'age'
                },
                {
                    title: '专业',
                    key: 'major'
                }
            ],
            data1: [
                {
                    name: "理学",
                    age: '地理科学类',
                    major:"人文地理与城乡规划"
                },
                {
                    name: "管理学",
                    age: '电子商务类',
                    major:"电子商务"
                },
                {
                    name: "管理学",
                    age: '电子商务类',
                    major:"电子商务及法律"
                },
                {
                    name: "法学",
                    age: '法学类',
                    major:"知识产权"
                }
            ]
        }
    }
}
</script>

<style scoped>
     @media print{
        .dashedT{
            border: 1px dashed black;
        }
    }
     @media screen and (min-width: 1200px){
        .box{
            width: 1100px;
            margin: 0 auto;
            margin-top: 100px;
        }
        .dashedT{
            border: 1px dashed black;
        }
        
    }
   @media screen and (max-width: 1199px){
        .box{
            width: 800px;
            margin: 0 auto;
            margin-top: 100px;
        }
        .dashedT{
            border: 1px dashed black;
        }
   }
</style>