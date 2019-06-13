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
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' },
                        { type: 'string', message: '请使用数字', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: '请使用6位数的密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                // this.$refs[name].validate((valid) => {
                //     if (valid) {
                //         this.$Message.success('Success!');
                //     } else {
                //         this.$Message.error('Fail!');
                //     }
                // })
                let a = JSON.stringify(this.formInline.user);
                let b = JSON.stringify(this.formInline.password);
                let data = {
                    n : a,
                    p : b,
                }
                // console.log(this.formInline.user);
                // console.log(this.formInline.password);
                // axios.post('http://192.168.1.113:8080/fingByPassWord?p=123')
                axios.post('http://192.168.1.113:8080/fingByPassWord?p=123',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    console.log(res)
                    // this.cityList1 = res.data
                })

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
    .fox{
        text-align: center;
        margin: 300px;
    }
    .font{
        /* background: red; */
        /* color: red; */
        width: 230px;
        margin: 0 auto;
    }
    .size{
        color: red;
        text-align: center;
        margin: 50px;
    }
</style>
