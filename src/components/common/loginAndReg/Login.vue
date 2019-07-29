<template>
    <div class="fox">
        <Affix :offset-top="100">
            <div class="popUp">
                <h1 class="size">登录信息页面</h1>
                <Input v-model="formInline.user" size="large" placeholder="账号" class="inputText" />
                <br>
                <Input type="password" v-model="formInline.password" size="large" placeholder="密码" class="inputText" />
                <br>
                <Button type="primary" @click="handleSubmit('formInline')" class="numberUser">登录</Button>
                <div class="font">
                    <router-link :to="{path:'/register'}">
                        <Button type="success" long class="numberUser">注册账号</Button>
                    </router-link>
                </div>
            </div>
        </Affix>
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
                let password = this.formInline.password
                if(user == "" || password == ""){
                    this.$Message.warning('请输入账号密码');
                }else{
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
                axios.post('http://192.168.1.100:8080/AssessUser/fingByPassWord',
                data,
                {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                )
                .then((res)=>{
                    this.information = res.data
                    // console.log(res.data,'res')
                    let arr = res.data.split(',')
                    this.id = arr[0]
                    this.judge = arr[1];
                    if(this.information==="用户名或密码错误"){
                        // alert(this.information)
                        this.$Message.error(this.information);
                    }else{
                        if(this.judge==="第一部分没做"||this.judge==="第一部分没做完"||this.judge==="第二部分没做"||this.judge==="第二部分没做完"||this.judge==="第三部分没做"||this.judge==="第三部分没做完"||this.judge==="第四部分没做"||this.judge==="第四部分没做完"){
                            let id = this.id;
                            let judge = this.judge;
                            this.$router.push({path:'/answer',query:{id:id,judge:judge}})
                        }else if(this.judge==="全部做完,可查看报告"){
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

    @media screen and (min-width: 1200px){ 
       .fox{
            width: 100%;
            height: 100%;
            background: url('../../../../public/1920.jpg') no-repeat;height:1000px;
            /* background-image:url('../../../public/photo.jpg'); */
            /* background-repeat:no-repeat; */
            background-size: 100%;
        }
        .popUp{
            width: 500px;
            height: 500px;
            margin-left: 70%;
            background: white;
        }
        .size{
            color: red;
            padding-top: 30px;
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
     }
     @media screen and (max-width: 1199px){
        .fox{
            width: 100%;
            height: 100%;
            background: url('../../../../public/1080.jpg') no-repeat;height:1000px;
            /* background-image:url('../../../public/photo.jpg'); */
            /* background-repeat:no-repeat; */
            background-size: 100%;
        }
        .popUp{
            width: 300px;
            height: 300px;
            margin-left: 70%;
            background: white;
        }
        .size{
            font-size: 20px;
            color: red;
            padding-top: 10px;
        } 
        .inputText{
            height:40px;
            width:150px;
            margin-top: 10px;
        }
        .numberUser{
            width: 150px;
            height: 30px;
            margin-top: 10px;
        }
    }    
</style>
