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
                    <RadioGroup v-model="firstQuestiontit.one.one"
                    v-for="(item,i) in firstQuestion" 
                    :title="item.label"
                    :key="i" 
                    @on-change="parent(item)"
                    >
                        <Radio 
                    :label="item.label" 
                    >
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加物理,化学,生物学科地市级以上比赛有多少次?
                    <RadioGroup v-model="firstQuestiontit.one.twe"
                        v-for="(item,i) in TwoQuestion" 
                        :key="i" 
                        :title="item.label"
                        @on-change="parentT(item)"
                    >
                        <Radio 
                        :label="item.label"
                        
                        >
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
                    <RadioGroup v-model="firstQuestiontit.twe.one"
                    v-for="(item,i) in firstQuestion" :key="i" 
                    @on-change="parentTwe(item)"
                    >
                        <Radio 
                       
                        :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,在以上科技类项目中，你参加地市级以上比赛有多少次?
                    <RadioGroup v-model="firstQuestiontit.twe.twe"
                    v-for="(item,i) in TwoQuestion" :key="i"
                    :title="item.label"
                    @on-change="parentTweT(item)"
                    >
                        <Radio  :label="item.label">
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
                    <RadioGroup v-model="firstQuestiontit.thr.one"
                    v-for="(item,i) in firstQuestion" :key="i"
                     :title="item.label"
                    @on-change="parentThr(item)"
                    >
                        <Radio  :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加绘画,音乐，舞蹈等艺术类项目地市级以上比赛有多少次?
                    <RadioGroup v-model="firstQuestiontit.thr.twe"
                    v-for="(item,i) in TwoQuestion" :key="i"
                     :title="item.label"
                    @on-change="parentThrT(item)"
                    >
                        <Radio  :label="item.label">
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
                    <RadioGroup 
                    v-model="firstQuestiontit.four.one"
                    v-for="(item,i) in firstQuestion" :key="i"
                    :title="item.label"
                    @on-change="parentFour(item)"
                    >
                        <Radio  :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加数学,编程等项目地市级以上比赛有多少次?
                    <RadioGroup 
                    v-model="firstQuestiontit.four.twe"
                    v-for="(item,i) in TwoQuestion" :key="i"
                    :title="item.label"
                    @on-change="parentFourTw(item)"
                    >
                        <Radio  :label="item.label">
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
                    <RadioGroup 
                    v-model="firstQuestiontit.five.one"
                    v-for="(item,i) in firstQuestion" :key="i"
                    :title="item.label"
                    @on-change="parentFive(item)"
                    >
                        <Radio  :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加语文和英语类项目地市级以上比赛有多少次?
                    <RadioGroup 
                    v-model="firstQuestiontit.five.twe"
                    v-for="(item,i) in TwoQuestion" :key="i"
                    :title="item.label"
                    @on-change="parentFiveTw(item)"
                    >
                    <!-- v-model="firstQuestiontit" -->
                        <Radio  :label="item.label">
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
                    <RadioGroup 
                    v-model="firstQuestiontit.six.one"
                    v-for="(item,i) in firstQuestion" :key="i"
                     :title="item.label"
                    @on-change="parentSix(item)"
                    >
                        <Radio  :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加以历史和文化为主题的游学(研学旅行)活动有多少次?
                    <RadioGroup 
                    v-model="firstQuestiontit.six.twe"
                    v-for="(item,i) in TwoQuestion" :key="i"
                     :title="item.label"
                    @on-change="parentSixTW(item)"
                    >
                    <!-- v-model="firstQuestiontit" -->
                        <Radio  :label="item.label">
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
                    <RadioGroup 
                    v-model="firstQuestiontit.seve.one"
                    v-for="(item,i) in firstQuestion" :key="i"
                    :title="item.label"
                    @on-change="parentSeve(item)"
                    >
                        <Radio  :label="item.label">
                            <span>{{item.name}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div style="width:400px;height:100px;display:inline-block;border-bottom:1px solid #ccc;">
                    2,初中以来,你参加体育类项目地市级以上比赛有多少次?
                    <RadioGroup 
                    v-model="firstQuestiontit.seve.twe"
                    v-for="(item,i) in TwoQuestion" :key="i"
                    :title="item.label"
                    @on-change="parentSeveTw(item)"
                    >
                        <Radio  :label="item.label">
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
        <button @click="postAx">提交</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            radiotit:{
                one:{
                    one:"",
                    twe:"",
                },
                twe:{
                    one:"",
                    twe:"",
                },
                thr:{
                    one:"",
                    twe:"",
                },
                four:{
                    one:"",
                    twe:"",
                },
                five:{
                    one:"",
                    twe:"",
                },
                six:{
                    one:"",
                    twe:"",
                },
                seve:{
                    one:"",
                    twe:"",
                },
                eight:{
                    one:"",
                    twe:"",
                },
            },
            // firstQuestiontit: '',
            Twotit:"",
            firstQuestiontit:{
                 one:{
                    one:"",
                    twe:"",
                },
                twe:{
                    one:"",
                    twe:"",
                },
                thr:{
                    one:"",
                    twe:"",
                },
                four:{
                    one:"",
                    twe:"",
                },
                five:{
                    one:"",
                    twe:"",
                },
                six:{
                    one:"",
                    twe:"",
                },
                seve:{
                    one:"",
                    twe:"",
                }
            },
            firstQuestion:[
                {
                    name:"没有",
                    label:"0"
                },
                {
                    name:"不到1年",
                    label:"1"
                },
                {
                    name:"2年",
                    label:"3"
                },
                {
                    name:"3年",
                    label:"5"
                },
                {
                    name:"4年",
                    label:"7"
                },
                {
                    name:"5年及以上",
                    label:"9"
                },
            ],
            TwoQuestion:[
                {
                    name:"没有",
                    label:"0"
                },
                {
                    name:"1-2次",
                    label:"1"
                },
                {
                    name:"3-5次",
                    label:"3"
                },
                {
                    name:"6-8次",
                    label:"5"
                },
                {
                    name:"9-12次",
                    label:"7"
                },
                {
                    name:"12次以上",
                    label:"9"
                },
            ],
            // 自然事物
            natural:{
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
            uid:150,
        
        
        }
    },
   methods:{
       postAx(){
           let data = [
                {
                    matterOne: this.radiotit.one.one,
                    matterTwo: this.radiotit.one.twe,
                    matterTree1: this.natural.prefecture.one*3,
                    matterTree2: this.natural.prefecture.two*2,
                    matterTree3: this.natural.prefecture.three*1,
                    matterTree4: this.natural.provincial.one*5,
                    matterTree5: this.natural.provincial.two*4,
                    matterTree6: this.natural.provincial.three*3,
                    matterTree7: this.natural.state.one*7,
                    matterTree8: this.natural.state.two*6,
                    matterTree9: this.natural.state.three*5,
                    matterTree10: this.natural.international.one*9,
                    matterTree11: this.natural.international.two*8,
                    matterTree12: this.natural.international.three*7,
                    typ: "N",
                    uid: this.uid
                },
                {
                    matterOne: this.radiotit.twe.one,
                    matterTwo: this.radiotit.twe.twe,
                    matterTree1: this.manMade.prefecture.one*3,
                    matterTree2: this.manMade.prefecture.two*2,
                    matterTree3: this.manMade.prefecture.three*1,
                    matterTree4: this.manMade.provincial.one*5,
                    matterTree5: this.manMade.provincial.two*4,
                    matterTree6: this.manMade.provincial.three*3,
                    matterTree7: this.manMade.state.one*7,
                    matterTree8: this.manMade.state.two*6,
                    matterTree9: this.manMade.state.three*5,
                    matterTree10: this.manMade.international.one*9,
                    matterTree11: this.manMade.international.two*8,
                    matterTree12: this.manMade.international.three*7,
                    typ: "T",
                    uid: this.uid
                },
                {
                    matterOne: this.radiotit.thr.one,
                    matterTwo: this.radiotit.thr.twe,
                    matterTree1: this.art.prefecture.one*3,
                    matterTree2: this.art.prefecture.two*2,
                    matterTree3: this.art.prefecture.three*1,
                    matterTree4: this.art.provincial.one*5,
                    matterTree5: this.art.provincial.two*4,
                    matterTree6: this.art.provincial.three*3,
                    matterTree7: this.art.state.one*7,
                    matterTree8: this.art.state.two*6,
                    matterTree9: this.art.state.three*5,
                    matterTree10: this.art.international.one*9,
                    matterTree11: this.art.international.two*8,
                    matterTree12: this.art.international.three*7,
                    typ: "A",
                    uid: this.uid
                },
                {
                    matterOne: this.radiotit.four.one,
                    matterTwo: this.radiotit.four.twe,
                    matterTree1: this.mathematics.prefecture.one*3,
                    matterTree2: this.mathematics.prefecture.two*2,
                    matterTree3: this.mathematics.prefecture.three*1,
                    matterTree4: this.mathematics.provincial.one*5,
                    matterTree5: this.mathematics.provincial.two*4,
                    matterTree6: this.mathematics.provincial.three*3,
                    matterTree7: this.mathematics.state.one*7,
                    matterTree8: this.mathematics.state.two*6,
                    matterTree9: this.mathematics.state.three*5,
                    matterTree10: this.mathematics.international.one*9,
                    matterTree11: this.mathematics.international.two*8,
                    matterTree12: this.mathematics.international.three*7,
                    typ: "M",
                    uid: this.uid
                },
                {
                    matterOne: this.radiotit.five.one,
                    matterTwo: this.radiotit.five.twe,
                    matterTree1: this.language.prefecture.one*3,
                    matterTree2: this.language.prefecture.two*2,
                    matterTree3: this.language.prefecture.three*1,
                    matterTree4: this.language.provincial.one*5,
                    matterTree5: this.language.provincial.two*4,
                    matterTree6: this.language.provincial.three*3,
                    matterTree7: this.language.state.one*7,
                    matterTree8: this.language.state.two*6,
                    matterTree9: this.language.state.three*5,
                    matterTree10: this.language.international.one*9,
                    matterTree11: this.language.international.two*8,
                    matterTree12: this.language.international.three*7,
                    typ: "L",
                    uid: this.uid
                },
                {
                    matterOne: this.radiotit.six.one,
                    matterTwo: this.radiotit.six.twe,
                    matterTree1: this.society.prefecture.one*3,
                    matterTree2: this.society.prefecture.two*2,
                    matterTree3: this.society.prefecture.three*1,
                    matterTree4: this.society.provincial.one*5,
                    matterTree5: this.society.provincial.two*4,
                    matterTree6: this.society.provincial.three*3,
                    matterTree7: this.society.state.one*7,
                    matterTree8: this.society.state.two*6,
                    matterTree9: this.society.state.three*5,
                    matterTree10: this.society.international.one*9,
                    matterTree11: this.society.international.two*8,
                    matterTree12: this.society.international.three*7,
                    typ: "S",
                    uid: this.uid
                },
                {
                    matterOne: this.radiotit.seve.one,
                    matterTwo: this.radiotit.seve.twe,
                    matterTree1: this.unit.prefecture.one*3,
                    matterTree2: this.unit.prefecture.two*2,
                    matterTree3: this.unit.prefecture.three*1,
                    matterTree4: this.unit.provincial.one*5,
                    matterTree5: this.unit.provincial.two*4,
                    matterTree6: this.unit.provincial.three*3,
                    matterTree7: this.unit.state.one*7,
                    matterTree8: this.unit.state.two*6,
                    matterTree9: this.unit.state.three*5,
                    matterTree10: this.unit.international.one*9,
                    matterTree11: this.unit.international.two*8,
                    matterTree12: this.unit.international.three*7,
                    typ: "I",
                    uid: this.uid
                }
           ]
            axios.post('http://192.168.1.106:8080/AssessScoreTechangWeb/save1',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res)=>{

            }),(err)=>{

            }
        //    console.log(data)
            let headbox = this.$refs.headbox;
            headbox.style.display = "none"
       },
       parent(index){
           this.radiotit.one.one = index.label
       },
       parentT(index){
           this.radiotit.one.twe = index.label
       },
       parentTwe(index){
           this.radiotit.twe.one = index.label
       },
       parentTweT(index){
           this.radiotit.twe.twe = index.label
       },
       parentThr(index){
           this.radiotit.thr.one = index.label
       },
       parentThrT(index){
           this.radiotit.thr.twe = index.label
       },
       parentFour(index){
           this.radiotit.four.one = index.label
       },
       parentFourTw(index){
           this.radiotit.four.twe = index.label
       },
       parentFive(index){
           this.radiotit.five.one = index.label
       },
       parentFiveTw(index){
           this.radiotit.five.twe = index.label
       },
       parentSix(index){
           this.radiotit.six.one = index.label
       },
       parentSixTW(index){
           this.radiotit.six.twe = index.label
       },
       parentSeve(index){
           this.radiotit.seve.one = index.label
       },
       parentSeveTw(index){
           this.radiotit.seve.twe = index.label
       },
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