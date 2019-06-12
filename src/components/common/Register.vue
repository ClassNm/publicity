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
                <Input v-model="value11" placeholder="账号" clearable style="width: 200px" class="INt" />
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
                    <!-- </FormItem> -->
                    <!-- <FormItem>
                        <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
                        <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
                    </FormItem> -->
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
                    学校：
                <!-- </li>  -->
                </span>
                <!-- &nbsp&nbsp&nbsp -->
                <Input v-model="value1" placeholder="学校" clearable style="width: 200px" class="INt" />
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
                    <Option v-for="item in cityListO" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
                    所在地：
                </span>
                <Select v-model="model3" style="width:100px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="model3" style="width:100px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="model3" style="width:100px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
            <br>
        </div>
        <router-link :to="{path:'/answer'}">
            <Button type="dashed" class="But">注册账号</Button>
        </router-link>
       
    </div>
</template>
<script>    
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
            formCustom: {
                passwd: '',
            },
            ruleCustom: {
                passwd: [
                    { validator: validatePass, trigger: 'blur' }
                ],
            },
            value14: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value11: '',
            value12: '',
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
            model8: '',
            // 文理
            cityListO: [
                {
                    value: '文科',
                    label: '文科'
                },
                {
                    value: '理科',
                    label: '理科'
                },
                {
                    value: '新高考',
                    label: '新高考'
                },
            ],
            model: '',
            // 年级
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
            modelY: '',
            // 所在地
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
                ],
                model3: '',
                
        };
    },
     methods: {
            // handleSubmit (name) {
            //     this.$refs[name].validate((valid) => {
            //         if (valid) {
            //             this.$Message.success('Success!');
            //         } else {
            //             this.$Message.error('Fail!');
            //         }
            //     })
            // },
            // handleReset (name) {
            //     this.$refs[name].resetFields();
            // }
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