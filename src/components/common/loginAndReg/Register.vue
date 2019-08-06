<template>
    <div class="box">
        <h1 class="Hheader">
            注册页面
        </h1>  
        <div>
            <div class="fout">
                <span class="leis">
                    账号：
                <!-- </li>  -->
                </span>
                <!-- &nbsp&nbsp&nbsp -->
                <Input v-model="phone" placeholder="手机号" clearable style="width: 200px" class="INt" />
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    密码：
                </span>
                <!-- &nbsp&nbsp&nbsp -->
                <!-- <Input v-model="value12" placeholder="密码" clearable style="width: 200px" class="INt" /> -->
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80" class="One"  style="width: 200px" >
                    <!-- <FormItem  prop="passwd"> -->
                    <Input type="password" v-model="formCustom.passwd" />
                   
                </Form>
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    姓名：
                <!-- </li>  -->
                </span>
                <!-- &nbsp&nbsp&nbsp -->
                <Input v-model="name" placeholder="姓名" clearable style="width: 200px" class="INt" />
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    性别：
                </span>
                <Select v-model="sex" clearable style="width:200px">
                    <Option v-for="item in cityListM" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    地区：
                </span>
                <!-- 省份 -->
                <Select v-model="location" style="width:100px;margin-right:5px;" @on-change="city">
                    <Option v-for="item in cityList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
                <!-- 市份 -->
                <Select v-model="locationSon" style="width:100px;margin-right: 5px;" @on-change="county">
                    <Option v-for="item in cityList1" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
                <!-- 区县份 -->
                <Select v-model="locationSonAg" style="width:100px;margin-right: 5px;" @on-change="school">
                    <Option v-for="item in cityList2" :value="item.name" :key="item.name">{{ item.name }}</Option>
                </Select>
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    学校：
                <!-- </li>  -->
                </span>
                <!-- 学校 -->
                <Select v-model="schoolNa" style="width:100px;margin-right:5px;" :disabled = decide>
                    <Option v-for="item in cityList3" :value="item.school" :key="item.id">{{ item.school }}</Option>
                </Select>
               <Input 
               v-model="school1" 
               @on-change="field"
               placeholder="如列表中无你的学校，请在此填写" 
               title="如列表中无你的学校，请在此填写" 
               clearable 
               style="width: 210px;" 
               class="INt" 
               />
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    文理：
                </span>
                <Select v-model="artsAndSciences" clearable style="width:200px">
                    <Option v-for="(item,i) in cityListO" :value="item.object" :key="i">{{ item.object }}</Option>
                </Select>
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    年级：
                </span>
                <Select v-model="grade" clearable style="width:200px">
                    <Option v-for="item in cityListY" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    班级：
                <!-- </li>  -->
                </span>
                <!-- &nbsp&nbsp&nbsp -->
                <Input v-model="clas" placeholder="班级" clearable style="width: 200px" class="INt" />
            </div>
            <br>
            
            <br>
        </div>
        <Button type="dashed" class="But" @click="Submit">注册账号</Button>
    </div>
</template>
<script>    

import axios from 'axios'
import {Register} from '../../../actions.js'

export default {
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter your password'));
            } else {
                if (this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('passwdCheck');
                }
                callback();
            }
        };
        return {
            // 密码
            formCustom: {
                passwd: '',
            },
            ruleCustom: {
                passwd: [
                    { validator: validatePass, trigger: 'blur' }
                ],
            },
            // 姓名
            name: '',
            // 学校
            // value1:
            value2: '',
            // 省份
            value3: '',
            value4: '',
            value5: '',
            school1:"",
            // 账号
            phone: '',
            value12: '',
            // 班级
            clas: '',
            // 性别
            cityListM: [
                {
                    value: '男',
                    label: '男'
                },
                {
                    value: '女',
                    label: '女'
                }
            ],
            // 性别
            sex: '',
            // 文理数据
            cityListO: [],
            // 文理
            artsAndSciences: '',
            // 年级数据
            cityListY: [
                {
                    value: '一年级',
                    label: '一年级'
                },
                {
                    value: '二年级',
                    label: '二年级'
                },
                {
                    value: '三年级',
                    label: '三年级'
                },
            ],
            // 年级
            grade: '',
            // 所在地  省份
            cityList: [
                
            ],
            // 所在地  市份
            cityList1: [],
            // 所在地  县份
            cityList2: [],
            // 所在地  学校
            cityList3: [],
            // 省
            location: '',
            // 市区
            locationSon: '',
            // 县市
            locationSonAg: '',
            // 学校
            schoolNa: '',
            decide:false
                
        };
    },
    created(){
        // 省份数据
        axios.post('http://47.104.245.242:8081/City/findByCode')
        .then((res)=>{
            this.cityList = res.data
        }),(err)=>{
            console.log(error)
        }

        // 文理科
        let obj2 = 2;
        axios.post('http://47.104.245.242:8081/AssessObject/obj2',
        obj2,
        {headers:{'Content-Type':"application/json; charset=UTF-8"}}
        )
        .then((res)=>{
            this.cityListO = res.data
        }),(err)=>{
            console.log(error)
        }
    },
     methods: {
         // 所在地  市份
            city(word){
                let data = word;
                axios.post('http://47.104.245.242:8081/City/findById',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    this.cityList1 = res.data
                })
            },
            // 所在地  县份
            county(word){
                let data = word;
                axios.post('http://47.104.245.242:8081/City/findByCode2',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    this.cityList2 = res.data
                })
            },
            // 所在地  学校
            school(word){
                let data = word;
                axios.post('http://47.104.245.242:8081/City/findByCode3',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    this.cityList3 = res.data
                })
            },
            // 学习input
            field(){
                if(this.school1!=""){
                    this.schoolNa ="",
                    this.decide=true
                }
                // console.log('111aaa')
                // console.log(this.school1)
            },


            Submit(){
                // 账号
                let phone = this.phone;
                // 密码
                let passWord = this.formCustom.passwd;
                // 姓名
                let name = this.name;
                // 性别
                let sex = this.sex;
                // 文理
                let artsAndSciences = this.artsAndSciences;
                // 年级
                let grade = this.grade;
                //所在地
                let location =  this.location;
                let locationSon = this.locationSon;
                let locationSonAg = this.locationSonAg;
                let i3 = '+';
                let address = location+i3+locationSon+i3+locationSonAg;
                // 学校
                let school = this.schoolNa;
                let school1 = this.school1;
                // 班级
                let clas = this.clas;

                let data = {
                    phone : phone,
                    passWord : passWord,
                    name : name,
                    sex : sex,
                    artsAndSciences : artsAndSciences,
                    grade : grade,
                    address : address,
                    school : school,
                    clas : clas,
                    school1 : school1
                }
                if(phone == "" || passWord == "" 
                    || name == "" || sex == "" || 
                    artsAndSciences == "" || grade == "" || 
                    clas == "" || location == "" || locationSon =="" || locationSonAg == "")
                {
                    this.$Message.warning('请填写完整信息')
                }else{
                    axios.post('http://47.104.245.242:8081/AssessUser/save',
                    data,
                    {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                    )
                    .then((res)=>{
                        this.$Message.info(res.data);
                        if(res.data==="注册成功"){
                            this.$router.push('/login')
                        }
                    })
                    }
            }
        }
}
</script>

<style scoped lang="less">
    li{
        list-style: none
    }
    .leis{
        text-align: left
    }
    .fout{
        margin-top: 20px;
        text-align: left;
        width: 400px;
        margin-left: 25%;
    }
    .But{
        margin-top: 20px;
        text-align: left;
    }
    .Hheader{
        // width: 100px;
        text-align: left;
        // background: red;
        display: inline;
    }
    .One{
        display: inline-block;
    }
    .box{
        // text-align: center;
        margin: 200px auto 0 auto;
        width: 600px;
    }

</style>