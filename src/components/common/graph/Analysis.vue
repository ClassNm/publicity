<template>
    <div class="maj">
        <h1>{{headerT}}</h1>
        <div class="box">
            <div style="font-size:20px;height:50px;line-height:50px;background:pink;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{major}}</div>
            <ul class="outer">
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业类概述&nbsp;▼
                <br>
                <li class="insideSon" :title="name1">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{name1}}
                </li>
            </ul>
            <ul class="inside">
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;适用专业&nbsp;▼
                <br>
                <li class="insideSon" :title="name2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{name2}}
                </li>
            </ul>
            <ul class="outer">
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;培养目标&nbsp;▼
                <br>
                <li class="insideSon" :title="name3">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{name3}}
                </li>
            </ul>
            <ul class="inside">
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;培养方向&nbsp;▼
                <br>
                <li class="insideSon" :title="name4">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{name4}}
                </li>
            </ul>
            <ul class="outer">
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;院校示例&nbsp;▼
                <br>
                <li class="insideSon" :title="name5">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{name5}}
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            headerT:"四，高等院校部分学科,专业解析",
            major:"化工与制药类(化工类专业)",
            name1:"概述 化学工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合概述 化学工程与工艺专业工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合概述 化学工程与工艺专业工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合概述 化学工程与工艺专业工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合概述 化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合概述 化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合概述 化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合概述 化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合概述 化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合成纤维，制药，药剂，燃料等工业，简称化工。化学工业生产一般包括原料处理，化学反应和产品精制3个步骤。无论其生产规模如何，各种化学生产工艺都是通过为数不多的基本操作，如传热，蒸发，蒸馏，吸收，干燥，过滤，萃取，结晶等完成的，他需要在特定的设备中进行。因此，在实际生产中存在着怎样选用，改进生产设备和采用何种生产方法进行化学工业生产的问题。前者即为化学工程，后者即为化学工艺，也就是说，化学工程",
            name2:"有机化学，生物化学，物理化学，化工原理，制药工程，药物合成反应，药物化学，药理学，药剂学，天然药物化学，应用光谱分析，制药工艺学",
            name3:"制药工程专业在国民经济发展中处于特殊的地位并有着十分重要的作用。其特殊性在于他研究的对象——化学药物是目前人类众多疾病在诊断，医疗等方面的主要药物，绝对不可缺少，是管人的健康和社会发展，并是一个推动国家经济发展的重要产业，于国于民密切相关",
            name4:"培养目标和就业方向 本专业旨在培养掌握化学药物研究，制备和生产的基本理论，知识和技术，具有从事化学合成新药物研制，生产过程及产品质量控制能力的高级工程技术人才。毕业生可到各类化学药物生产企业，药物研究所，药物工商业及各级医药卫生行政管理部门或精细化工和生物化工等部门从事生产，研究新产品，经营原理及营销等工作。",
            name5:"化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合成纤维，制药，药剂，燃料等工业，简称化工。化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合成纤维，制药，药剂，燃料等工业，简称化工。化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合成纤维，制药，药剂，燃料等工业，简称化工。化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合成纤维，制药，药剂，燃料等工业，简称化工。化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合成纤维，制药，药剂，燃料等工业，简称化工。化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合成纤维，制药，药剂，燃料等工业，简称化工。化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合成纤维，制药，药剂，燃料等工业，简称化工。化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合成纤维，制药，药剂，燃料等工业，简称化工。化学工程与工艺专业是化学工业发展的产物。化学工业是只利用化学反应生产化学产品的工业，包括熟料，橡胶，合成纤维，制药，药剂，燃料等工业，简称化工。"
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
    }
    @media screen and (min-width: 1200px){
        *{
            margin: 0;
            padding: 0;
        }
         .maj{
            text-align: left;
            width: 1200px;
            margin: 40px auto;
            
        }
        .box{
            margin-top: 30px;
            border: 2px solid  lightgray    ;
        }
        .outer{
            /* margin-top: 20px; */
            background: #f7f7f7;
            height: 400px;
            width: 1200px;
            font-size: 20px;
            overflow: hidden;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
            /* white-space:nowrap; */
        }
        .inside{
            background: white;
            height: 400px;
            font-size: 20px;
        }
        .insideSon{
            margin-top: 30px;
        }
    }
   @media screen and (max-width: 1199px){
       .maj{
            text-align: left;
            width: 800px;
            margin: 40px auto;
        }
   }
</style>
