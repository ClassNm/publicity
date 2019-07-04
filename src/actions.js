import axios from 'axios';
axios.defaults.baseURL = "http://192.168.1.100:8080";


// // 注册
// export const Register = function(e){
//     let url = '/AssessUser/save'
//     let data = e
//     axios.post(url,data).then((res)=>{
//         console.log(res)
//     },(err)=>{
//         console.log(err)
//     })
// }





// // 登录
// export const Login = function(e){
//     let url = '/fingByPassWord'
//     let data = e
//     axios.post(url,data).then((res)=>{
//         console.log(res)
//     },(err)=>{
//         console.log(err)
//     })
// }
  