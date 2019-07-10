<template>
    <div class="box">
        <h1>
            注册页面
        </h1>  
        <div>
            <div class="fout">
                <span class="leis">
                    账号：
                <!-- </li>  -->
                </span>
                <!-- &nbsp&nbsp&nbsp -->
                <Input v-model="value11" placeholder="手机号" clearable style="width: 200px" class="INt" />
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
                    <Input type="password" v-model="formCustom.passwd"></Input>
                   
                </Form>
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    姓名：
                <!-- </li>  -->
                </span>
                <!-- &nbsp&nbsp&nbsp -->
                <Input v-model="value14" placeholder="姓名" clearable style="width: 200px" class="INt" />
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    性别：
                </span>
                <Select v-model="model8" clearable style="width:200px">
                    <Option v-for="item in cityListM" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    文理：
                </span>
                <Select v-model="model" clearable style="width:200px">
                    <Option v-for="(item,i) in cityListO" :value="item.object" :key="i">{{ item.object }}</Option>
                </Select>
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    年级：
                </span>
                <Select v-model="modelY" clearable style="width:200px">
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
                <Input v-model="value21" placeholder="班级" clearable style="width: 200px" class="INt" />
            </div>
            <br>
            <div class="fout">
                <span class="leis">
                    所在地：
                </span>
                <!-- 省份 -->
                <Select v-model="model3" style="width:100px" @on-change="aaa">
                    <Option v-for="item in cityList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
                <!-- 市份 -->
                <Select v-model="model31" style="width:100px" @on-change="bbb">
                    <Option v-for="item in cityList1" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
                <!-- 区县份 -->
                <Select v-model="mode32" style="width:100px" @on-change="ccc">
                    <Option v-for="item in cityList2" :value="item.name" :key="item.name">{{ item.name }}</Option>
                </Select>
                <!-- 学校 -->
                <Select v-model="mode33" style="width:100px">
                    <Option v-for="item in cityList3" :value="item.school" :key="item.id">{{ item.school }}</Option>
                </Select>
            </div>
            <br>
        </div>
        <!-- <router-link :to="{path:'/answer'}"> -->
            <Button type="dashed" class="But" @click="Submit">注册账号</Button>
        <!-- </router-link> -->
       
    </div>
</template>
<script>    

import axios from 'axios'
import {Register} from '../../actions.js'


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
            value14: '',
            // 学校
            // value1: '',

            value2: '',
            // 省份
            value3: '',
            value4: '',
            value5: '',
            // 账号
            value11: '',
            value12: '',
            // 班级
            value21: '',
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
            model8: '',
            // 文理数据
            cityListO: [
                // {
                //     value: '文科',
                //     label: '文科'
                // },
                // {
                //     value: '理科',
                //     label: '理科'
                // },
                // {
                //     value: '新高考',
                //     label: '新高考'
                // },
            ],
            // 文理
            model: '',
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
            modelY: '',
            // 所在地  省份
            cityList: [
                
            ],
            // 所在地  市份
            cityList1: [
                
            ],
            // 所在地  县份
            cityList2: [
                
            ],
            // 所在地  学校
            cityList3: [
                
            ],
            // 省
            model3: '',
            // 市区
            model31: '',
            // 县市
            mode32: '',
            // 学校
            mode33: '',
                
        };
    },
    created(){
        // 省份数据
        axios.post('http://47.104.245.242:8081/City/findByCode')
        .then((res)=>{
            this.cityList = res.data
            // console.log(res.data)
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
            // console.log(res.data)
        }),(err)=>{
            console.log(error)
        }
    },
     methods: {
         // 所在地  市份
            aaa(word){
                let data = word;
                // console.log(data)
                axios.post('http://47.104.245.242:8081/City/findById',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    // console.log(res)
                    this.cityList1 = res.data
                })
            },
            // 所在地  县份
            bbb(word){
                let data = word;
                // console.log(data)
                // http://192.168.1.113:8080/City/findByCode2
                axios.post('http://47.104.245.242:8081/City/findByCode2',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    // console.log(res)
                    this.cityList2 = res.data
                })
            },
            // 所在地  学校
            ccc(word){
                let data = word;
                // console.log(data)
                axios.post('http://47.104.245.242:8081/City/findByCode3',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    // console.log(res)
                    this.cityList3 = res.data
                })
            },


            Submit(){
                // 账号
                let a = this.value11;
                // 密码
                let b = this.formCustom.passwd;
                // 姓名
                let c = this.value14;
                // 学校
                // let d = this.value1;
                // 性别
                let e = this.model8;
                // 文理
                let f = this.model;
                // 年级
                let g = this.modelY;
                // 手机号
                let h = this.value21;
                //所在地
                let i =  this.model3;
                let i1 = this.model31;
                let i2 = this.mode32;
                let i3 = '+';
                let j = i+i3+i1+i3+i2;
                // 学校
                let k = this.mode33;
                // 班级
                let l = this.value21;

                let data = {
                    phone : a,
                    passWord : b,
                    name : c,
                    sex : e,
                    artsAndSciences : f,
                    grade : g,
                    address : j,
                    school : k,
                    clas : l,
                }
                // console.log(data)
                // Register(data)
                // 注册
                // export const Register = function(e){
                //     let url = '/AssessUser/save'
                //     let data = e
                //     axios.post(url,data).then((res)=>{
                //         console.log(res)
                //     },(err)=>{
                //         console.log(err)
                //     })
                // }
                axios.post('http://47.104.245.242:8081/AssessUser/save',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    // console.log(res);
                    alert(res.data);
                    if(res.data==="注册成功"){
                        // this.$route.push({path:"/login"})
                        this.$router.push('/login')
                    }
                    // this.cityList3 = res.data
                })
            }
        }
}
</script>

<style scoped lang="less">
    .box{
        text-align: center;
        margin-top: 200px;
    }
    li{
        list-style: none
    }
    .leis{
        // display: block;
        // width:20px;
        // background:red；
        text-align: left
    }
    .INt{
        // display: block
    }
    .fout{
        margin-top: 20px
    }
    .But{
        margin-top: 20px;
        width: 100px;
    }
    .One{
        display: inline-block;
        // width: 200px;
    }

</style>