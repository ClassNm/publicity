<template>
    <div class="surveydetail" ref="headbox">
        <div style="border:1px solid #ccc;">
            <div style="width:82px;display:inline-block;border-right:1px solid #ccc;height:60px;line-height:60px; color:#ccc;">
                职业领域
            </div>
            <div style="width:400px;display:inline-block;font-weight:bolder;font-size: 18px;">
                参加课外活动项目的时间、作品及获奖
            </div>
        </div>
        <div style="width:500px;border:1px solid #ccc;">
            <div style="width:90px;
            height:450px;
            display:inline-block;
            float: left;
            border-right:1px solid #ccc;
            letter-spacing: 25px;
            font-size:20px;
            line-height: 100px;
            color:#ccc;
            "
            >
                自然事物
            </div>
            <!-- <div style="width:2px;background:#ccc;height:300px;display:inline-block;"></div> -->
            <div style="width:400px;display:inline-block;height:450px;">
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    1,初中以来,你参加物理,化学，生物等学科比赛项目课外训练的时间有多长?
                    <RadioGroup v-model="firstQuestiontit">
                        <Radio v-for="(item,i) in firstQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加物理,化学,生物学科地市级以上比赛有多少次?
                    <RadioGroup v-model="Twotit">
                        <Radio v-for="(item,i) in TwoQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:250px;display:inline-block;text-align:left;">
                    3,在以上学科项目中,你参加不同级别竞赛获奖的次数有多少?
                    <div>地市级：一等奖
                        <input type="number" style="width:50px;" v-model="natural.prefecture.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="natural.prefecture.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="natural.prefecture.three">次；
                    </div>
                    <br>
                    <div>省级：一等奖
                        <input type="number" style="width:50px;" v-model="natural.provincial.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="natural.provincial.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="natural.provincial.three">次；
                    </div>
                    <br>
                    <div>国家级：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="natural.state.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="natural.state.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="natural.state.three">次；
                    </div>
                    <br>
                    <div>国际比赛：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="natural.international.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="natural.international.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="natural.international.three">次；
                    </div>
                </div>
            </div>
        </div>
        <div style="width:500px;border:1px solid #ccc;">
            <div style="width:90px; color:#ccc;height:450px;display:inline-block;float: left;border-right:1px solid #ccc;letter-spacing: 25px;font-size:20px;line-height: 100px;">
                人造事物
            </div>
            <div style="width:400px;display:inline-block;height:450px;">
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    1,初中以来,你参加模型,电子，机器人科技类项目课外训练的时间有多长?
                    <RadioGroup v-model="firstQuestiontit">
                        <Radio v-for="(item,i) in firstQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,在以上科技类项目中，你参加地市级以上比赛有多少次?
                    <RadioGroup v-model="Twotit">
                        <Radio v-for="(item,i) in TwoQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:250px;display:inline-block;text-align:left;">
                    3,在以上科技类项目中,你参加不同级别竞赛获奖的次数有多少?
                    <div>地市级：一等奖
                        <input type="number" style="width:50px;" v-model="manMade.prefecture.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="manMade.prefecture.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="manMade.prefecture.three">次；
                    </div>
                    <br>
                    <div>省级：一等奖
                        <input type="number" style="width:50px;" v-model="manMade.provincial.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="manMade.provincial.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="manMade.provincial.three">次；
                    </div>
                    <br>
                    <div>国家级：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="manMade.state.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="manMade.state.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="manMade.state.three">次；
                    </div>
                    <br>
                    <div>国际比赛：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="manMade.international.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="manMade.international.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="manMade.international.three">次；
                    </div>
                </div>
            </div>
        </div>
        <div style="width:500px;border:1px solid #ccc;">
            <div style="width:90px; color:#ccc;height:450px;display:inline-block;float: left;border-right:1px solid #ccc;letter-spacing: 25px;font-size:20px;line-height: 100px;">
                艺术符号
            </div>
            <div style="width:400px;display:inline-block;height:450px;">
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    1,初中以来,你参加绘画,音乐，舞蹈等艺术类项目课外训练的时间有多长?
                    <RadioGroup v-model="firstQuestiontit">
                        <Radio v-for="(item,i) in firstQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加绘画,音乐，舞蹈等艺术类项目地市级以上比赛有多少次?
                    <RadioGroup v-model="Twotit">
                        <Radio v-for="(item,i) in TwoQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:250px;display:inline-block;text-align:left;">
                    3,在艺术类项目中,你参加不同级别竞赛获奖的次数有多少?
                     <div>地市级：一等奖
                        <input type="number" style="width:50px;" v-model="art.prefecture.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="art.prefecture.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="art.prefecture.three">次；
                    </div>
                    <br>
                    <div>省级：一等奖
                        <input type="number" style="width:50px;" v-model="art.provincial.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="art.provincial.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="art.provincial.three">次；
                    </div>
                    <br>
                    <div>国家级：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="art.state.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="art.state.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="art.state.three">次；
                    </div>
                    <br>
                    <div>国际比赛：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="art.international.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="art.international.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="art.international.three">次；
                    </div>
                </div>
            </div>
        </div>
        <div style="width:500px;border:1px solid #ccc;">
            <div style="width:90px; color:#ccc;height:450px;display:inline-block;float: left;border-right:1px solid #ccc;letter-spacing: 25px;font-size:20px;line-height: 100px;">
                数学符号
            </div>
            <div style="width:400px;display:inline-block;height:450px;">
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    1,初中以来,你参加数学,编程等项目课外训练的时间有多长?
                    <RadioGroup v-model="firstQuestiontit">
                        <Radio v-for="(item,i) in firstQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加数学,编程等项目地市级以上比赛有多少次?
                    <RadioGroup v-model="Twotit">
                        <Radio v-for="(item,i) in TwoQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:250px;display:inline-block;text-align:left;">
                    3,在数学,编程等项目中,你参加不同级别竞赛获奖的次数有多少?
                    <div>地市级：一等奖
                        <input type="number" style="width:50px;" v-model="mathematics.prefecture.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="mathematics.prefecture.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="mathematics.prefecture.three">次；
                    </div>
                    <br>
                    <div>省级：一等奖
                        <input type="number" style="width:50px;" v-model="mathematics.provincial.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="mathematics.provincial.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="mathematics.provincial.three">次；
                    </div>
                    <br>
                    <div>国家级：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="mathematics.state.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="mathematics.state.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="mathematics.state.three">次；
                    </div>
                    <br>
                    <div>国际比赛：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="mathematics.international.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="mathematics.international.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="mathematics.international.three">次；
                    </div>
                </div>
            </div>
        </div>
        <div style="width:500px;border:1px solid #ccc;">
            <div style="width:90px; color:#ccc;height:450px;display:inline-block;float: left;border-right:1px solid #ccc;letter-spacing: 25px;font-size:20px;line-height: 100px;">
                语言符号
            </div>
            <div style="width:400px;display:inline-block;height:450px;">
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    1,初中以来,你参加语文和英语类项目课外训练的时间有多长?
                    <RadioGroup v-model="firstQuestiontit">
                        <Radio v-for="(item,i) in firstQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加语文和英语类项目地市级以上比赛有多少次?
                    <RadioGroup v-model="Twotit">
                        <Radio v-for="(item,i) in TwoQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:250px;display:inline-block;text-align:left;">
                    3,在语文和英语类项目中,你参加不同级别竞赛获奖的次数有多少?
                    <div>地市级：一等奖
                        <input type="number" style="width:50px;" v-model="language.prefecture.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="language.prefecture.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="language.prefecture.three">次；
                    </div>
                    <br>
                    <div>省级：一等奖
                        <input type="number" style="width:50px;" v-model="language.provincial.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="language.provincial.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="language.provincial.three">次；
                    </div>
                    <br>
                    <div>国家级：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="language.state.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="language.state.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="language.state.three">次；
                    </div>
                    <br>
                    <div>国际比赛：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="language.international.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="language.international.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="language.international.three">次；
                    </div>
                </div>
            </div>
        </div>
        <div style="width:500px;border:1px solid #ccc;">
            <div style="width:90px; color:#ccc;height:450px;display:inline-block;float: left;border-right:1px solid #ccc;letter-spacing: 25px;font-size:20px;line-height: 100px;">
                社会制度
            </div>
            <div style="width:400px;display:inline-block;height:450px;">
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    1,初中以来,你参加历史,地理,政治等人文社会类课外活动有多少次?
                    <RadioGroup v-model="firstQuestiontit">
                        <Radio v-for="(item,i) in firstQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加以历史和文化为主题的游学(研学旅行)活动有多少次?
                    <RadioGroup v-model="Twotit">
                        <Radio v-for="(item,i) in TwoQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:250px;display:inline-block;text-align:left;">
                    3,在人文和社会类项目中,你参加不同级别竞赛获奖的次数有多少?
                    <div>地市级：一等奖
                        <input type="number" style="width:50px;" v-model="society.prefecture.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="society.prefecture.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="society.prefecture.three">次；
                    </div>
                    <br>
                    <div>省级：一等奖
                        <input type="number" style="width:50px;" v-model="society.provincial.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="society.provincial.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="society.provincial.three">次；
                    </div>
                    <br>
                    <div>国家级：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="society.state.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="society.state.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="society.state.three">次；
                    </div>
                    <br>
                    <div>国际比赛：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="society.international.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="society.international.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="society.international.three">次；
                    </div>
                </div>
            </div>
        </div>
        <div style="width:500px;border:1px solid #ccc;">
            <div style="width:90px; color:#ccc;height:450px;display:inline-block;float: left;border-right:1px solid #ccc;letter-spacing: 25px;font-size:20px;line-height: 100px;">
                个体生命
            </div>
            <div style="width:400px;display:inline-block;height:450px;border-bottom:1px solid #ccc;">
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    1,初中以来,你参加社会实践或志愿者服务的课外活动有多少次?
                    <RadioGroup v-model="firstQuestiontit">
                        <Radio v-for="(item,i) in firstQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加体育类项目地市级以上比赛有多少次?
                    <RadioGroup v-model="Twotit">
                        <Radio v-for="(item,i) in TwoQuestion" :key="i" :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:250px;display:inline-block;text-align:left;">
                    3,在体育类项目中,你参加不同级别竞赛获奖的次数有多少?
                    <div>地市级：一等奖
                        <input type="number" style="width:50px;" v-model="unit.prefecture.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="unit.prefecture.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="unit.prefecture.three">次；
                    </div>
                    <br>
                    <div>省级：一等奖
                        <input type="number" style="width:50px;" v-model="unit.provincial.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="unit.provincial.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="unit.provincial.three">次；
                    </div>
                    <br>
                    <div>国家级：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="unit.state.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="unit.state.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="unit.state.three">次；
                    </div>
                    <br>
                    <div>国际比赛：地市级： 一等奖
                        <input type="number" style="width:50px;" v-model="unit.international.one">次；二等奖
                        <input type="number" style="width:50px;" v-model="unit.international.two">次；三等奖
                        <input type="number" style="width:50px;" v-model="unit.international.three">次；
                    </div>
                </div>
            </div>
        </div>
        <button @click="aa">提交</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            firstQuestiontit: '',
            firstQuestion:[
                {
                    name:"没有",
                    label:"没有"
                },
                {
                    name:"不到1年",
                    label:"不到1年"
                },
                {
                    name:"2年",
                    label:"2年"
                },
                {
                    name:"3年",
                    label:"3年"
                },
                {
                    name:"4年",
                    label:"4年"
                },
                {
                    name:"5年及以上",
                    label:"5年及以上"
                },
            ],
            Twotit:"",
            TwoQuestion:[
                {
                    name:"没有",
                    label:"没有"
                },
                {
                    name:"1-2次",
                    label:"1-2次"
                },
                {
                    name:"3-5次",
                    label:"3-5次"
                },
                {
                    name:"6-8次",
                    label:"6-8次"
                },
                {
                    name:"9-12次",
                    label:"9-12次"
                },
                {
                    name:"12次以上",
                    label:"12次以上"
                },
            ],
            // 自然事物
            natural:{
                prefecture:{
                    one:"",
                    two:1,
                    three:"",
                },
                provincial:{
                    one:"",
                    two:"",
                    three:"",
                },
                state:{
                    one:"",
                    two:"",
                    three:"",
                },
                international:{
                    one:"",
                    two:"",
                    three:"",
                }
            },
            // 人造事物
            manMade:{
                prefecture:{
                    one:"",
                    two:"",
                    three:"",
                },
                provincial:{
                    one:"",
                    two:"",
                    three:"",
                },
                state:{
                    one:"",
                    two:"",
                    three:"",
                },
                international:{
                    one:"",
                    two:"",
                    three:"",
                }
            },
           // 艺术符号
            art:{
                prefecture:{
                    one:"",
                    two:"",
                    three:"",
                },
                provincial:{
                    one:"",
                    two:"",
                    three:"",
                },
                state:{
                    one:"",
                    two:"",
                    three:"",
                },
                international:{
                    one:"",
                    two:"",
                    three:"",
                }
            }, 
            // 数学符号
            mathematics:{
                prefecture:{
                    one:"",
                    two:"",
                    three:"",
                },
                provincial:{
                    one:"",
                    two:"",
                    three:"",
                },
                state:{
                    one:"",
                    two:"",
                    three:"",
                },
                international:{
                    one:"",
                    two:"",
                    three:"",
                }
            }, 
            // 语言符号
            language:{
                prefecture:{
                    one:"",
                    two:"",
                    three:"",
                },
                provincial:{
                    one:"",
                    two:"",
                    three:"",
                },
                state:{
                    one:"",
                    two:"",
                    three:"",
                },
                international:{
                    one:"",
                    two:"",
                    three:"",
                }
            }, 
            // 社会制度
            society:{
                prefecture:{
                    one:"",
                    two:"",
                    three:"",
                },
                provincial:{
                    one:"",
                    two:"",
                    three:"",
                },
                state:{
                    one:"",
                    two:"",
                    three:"",
                },
                international:{
                    one:"",
                    two:"",
                    three:"",
                }
            }, 
            // 个体生命
            unit:{
                prefecture:{
                    one:"",
                    two:"",
                    three:"",
                },
                provincial:{
                    one:"",
                    two:"",
                    three:"",
                },
                state:{
                    one:"",
                    two:"",
                    three:"",
                },
                international:{
                    one:"",
                    two:"",
                    three:"",
                }
            }, 
        }
    },
   methods:{
       aa(){
        //    console.log(typeof(this.natural.prefecture.two))
        //    console.log(this.natural)
        // console.log(typeof(this.age))
       }
   }
}
</script>

<style scoped>
    .surveydetail{
        width: 500px;;
        height: 3500px;
        overflow: hidden;
        margin: 50px auto 300px
    }
    
</style>