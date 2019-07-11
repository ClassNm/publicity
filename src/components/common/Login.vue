<template>
    <div class="fox">
        <h1 class="size">登录信息页面</h1>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="账号">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
            </FormItem>
        </Form>
        
        <div class="font">
            <router-link :to="{path:'/register'}">
            <!-- <h3>
                注册账号
            </h3> -->
            <Button type="success" long>注册账号</Button>
        </router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                // 用户id集合  or  失败信息
                information:"",
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' },
                        { type: 'string', message: '请使用数字', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 1, message: '请使用6位数的密码', trigger: 'blur' }
                    ]
                },
                // 判断是否做题
                judge:"",
                // id
                id:""
            }
        },
        methods: {
            handleSubmit(name) {
                
                let user = this.formInline.user;
                // let b = JSON.stringify(this.formInline.password);
                let password = this.formInline.password
                
                let data = {
                    

                    phone : user,

                    passWord : password,
                    
                    name : '',
                    
                    sex : '',
                     
                     id: "",
                    
                    artsAndSciences : '',
                    
                    grade : '',
                    
                    address : '',

                    school : '',
                    
                    clas : '',
                    
                }
                // console.log(data)
                // console.log(this.formInline.user);
                // console.log(this.formInline.password);
                // axios.post('http://192.168.1.113:8080/fingByPassWord?p=123')
                let uid = ""
                axios.post('http://47.104.245.242:8081/AssessUser/fingByPassWord',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    // console.log(res.data,'res.data')
                    // console.log(typeof(res.data))
                    this.information = res.data
                    let arr = res.data.split(',')
                    this.id = arr[0]
                    this.judge = arr[1];
                    // console.log(arr[0]);
                    // console.log(arr[1])
                    // console.log(this.information,'res.data')
                    if(this.information==="用户名或密码错误"){
                        alert(this.information)
                    }else{
                        if(this.judge==="无"){
                            let id = this.id;
                            // console.log('没做过题')
                            this.$router.push({path:'/answer',query:{id:id}})
                        // console.log(this.information,'登录时的id')
                        }else if(this.judge==="有"){
                            // console.log('做过题了')
                            let id = this.id;
                            this.$router.push({path:'/reported',query:{id:id}})
                        }
                        
                    }
                    // uid = res.data
                    // this.cityList1 = res.data
                })
                // console.log(this.information)
                // console.log(this.information)
                // if(this.information=="用户名或密码错误"){
                //     alert('用户名或密码错误')
                // }else{
                //     // this.$router.push({path:'/register',query:obj})
                //     console.log(111)
                // }
                

                // 登录
// export const Login = function(e){
//     let url = '/fingByPassWord'
//     let data = e
//     axios.post(url,data).then((res)=>{
//         console.log(res)
//     },(err)=>{
//         console.log(err)
//     })
// }
                
            }
        }
    }
</script>
<style scoped>
    .font{
        width: 230px;
        margin: 0 auto;
    }
    .size{
        color: red;
        text-align: center;
        margin: 50px;
    }



     @media (min-width: 1200px) { 
       .fox{
            text-align: center;
            margin: 300px;
        }
     }
     @media screen and (max-width: 1200px) { 
        .fox{
            text-align: center;
            margin: 100px;
        }  
    }    
    @media screen and (max-width: 901px) { 
        .fox{
            text-align: center;
            margin: 50px;
        } 
    } 
</style>
