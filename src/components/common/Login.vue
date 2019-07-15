<template>
    <div class="fox">
        <div class="popUp">
            <h1 class="size">登录信息页面</h1>
            <Input v-model="formInline.user" size="large" placeholder="账号" class="inputText"/></Input>
            <br>
            <Input type="password" v-model="formInline.password" size="large" placeholder="密码" class="inputText"></Input>
            <br>
            <Button type="primary" @click="handleSubmit('formInline')" class="numberUser">登录</Button>
            <div class="font">
                <router-link :to="{path:'/register'}">
                    <Button type="success" long class="numberUser">注册账号</Button>
                </router-link>
            </div>
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
                        { required: true, message: '请填写用户名', trigger: 'blur' },
                        { type: 'string', message: '请使用数字', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
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
                console.log(this.formInline.user)
                if(user == "" || password == ""){
                    this.$Message.warning('请输入账号密码');
                }else{
                    console.log(user)
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
                let uid = ""
                axios.post('http://47.104.245.242:8081/AssessUser/fingByPassWord',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    this.information = res.data
                    let arr = res.data.split(',')
                    this.id = arr[0]
                    this.judge = arr[1];
                    if(this.information==="用户名或密码错误"){
                        // alert(this.information)
                        this.$Message.error(this.information);
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
                })
                }              
            }
        }
    }
</script>
<style scoped>
    .size{
        color: red;
        margin-top: 30px;
    }

    .popUp{
        width: 500px;
        height: 500px;
        margin-left: 60%;
        background: white;
        position: absolute;
        top: 20%;
    }
    .numberUser{
        width: 300px;
        height: 50px;
        margin-top: 30px;
     }
    .inputText{
        height:50px;
        width:300px;
        margin-top: 30px;
    }

     @media (min-width: 1200px) { 
       .fox{
            /* text-align: center; */
            width: 100%;
            height: 1000px;
            /* margin: 0; */
            background: url('../../../public/photo.jpg') no-repeat;height:1000px;
            /* background-image:url('../../../public/photo.jpg'); */
            /* background-repeat:no-repeat; */
            background-size: 100%;
            position: relative;
        }
        /* img{max-width:100%}; */
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
