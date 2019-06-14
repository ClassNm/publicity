<template>
    <div class="surveydetailout" id="surveydetailout" >
        <div id="bodycontent_contentbody_divSurveyGuide" class="surveydetail" onselectstart="return false" >
            <div id="qindex_1" class="test_contents" style="display: block;" v-for="(item,i) in title" :key="i" >
                <p class="descs fb">{{item.pig}}</p>
                <div class="sels_list" >
                    <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid" v-for="(item,i) in list" :key="i" @click="ccc">
                            <span class="sels">
                                <input type="radio" name="a1" :value="item.value" v-model="item.value">
                            </span>
                            {{item.name}}
                        </p>
                        <p class="i_bot"></p>
                    </div>
                    <!-- <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid">
                            <span class="sels">
                                <input type="radio" name="a1" value="10941" cindex="1" qid="3412" nindex="0" checked="checked">
                            </span>有些不符合
                        </p>
                        <p class="i_bot"></p>
                    </div>
                    <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid">
                            <span class="sels">
                                <input type="radio" name="a1" value="10942" cindex="1" qid="3412" nindex="0">
                            </span>不好确定
                        </p>
                        <p class="i_bot"></p>
                    </div>
                    <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid">
                            <span class="sels">
                                <input type="radio" name="a1" value="10943" cindex="1" qid="3412" nindex="0">
                            </span>比较符合
                        </p>
                        <p class="i_bot"></p>
                    </div>
                    <div class="items">
                        <p class="i_top"></p>
                        <p class="i_mid">
                            <span class="sels">
                                <input type="radio" name="a1" value="10944" cindex="1" qid="3412" nindex="0">
                            </span>完全符合
                        </p>
                        <p class="i_bot"></p>
                    </div> -->

                    
                </div>
            </div>
            <!-- 多选 -->
            <div>
                <div v-for="(item,i) in fone" :key="i">
                    <p>{{item.name}}</p>
                    <div v-for="(item,i) in foneOne" :key="i" :value="item" @click="ddd">
                        <!-- <CheckboxGroup v-model="item.value" > -->
                        <Checkbox :label="item.name"></Checkbox>
                        {{item.name}}
                        <!-- <Checkbox label="2"></Checkbox>
                        <Checkbox label="3"></Checkbox>
                        <Checkbox label="4"></Checkbox>
                        <Checkbox label="5"></Checkbox>
                        <Checkbox label="6"></Checkbox>
                        <Checkbox label="7"></Checkbox>
                        <Checkbox label="8"></Checkbox>
                        <Checkbox label="9"></Checkbox>
                        <Checkbox label="10"></Checkbox>
                        <Checkbox label="11"></Checkbox>
                        <Checkbox label="12"></Checkbox> -->
                    </CheckboxGroup>
                    </div>
                    
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sel : "",
            // 多选
            fruit: ['苹果'],
            title:[
            {
              pig:"1,你最喜欢哪一个",
              value:"喜欢",
              value1:"不喜欢",
              value2:"还可以",
              id:1,
              isCheck:false
            },
            {
              pig:"2,你最喜欢哪一个",
              value:"喜欢",
              value1:"不喜欢",
              value2:"还可以",
              id:2,
              isCheck:false
            },
            {
              pig:"3,你最喜欢哪一个",
              value:"喜欢",
              value1:"不喜欢",
              value2:"还可以",
              id:3,
              isCheck:false
            },
            {
              pig:"4,你最喜欢哪一个",
              value:"4"
            },
            {
              pig:"5,你最喜欢哪一个",
              value:"5"
            },
            {
              pig:"6,你最喜欢哪一个",
              value:"6"
            },
            {
              pig:"7,你最喜欢哪一个",
              value:"7"
            },
            {
              pig:"8,你最喜欢哪一个",
              value:"8"
            },
            {
              pig:"9,你最喜欢哪一个",
              value:"9"
            },
            {
              pig:"10,你最喜欢哪一个",
              value:"10"
            },
            {
              pig:"11,你最喜欢哪一个",
              value:"11"
            },
            {
              pig:"12,你最喜欢哪一个",
              value:"12"
            },
            {
              pig:"13,你最喜欢哪一个",
              value:"13"
            },
            {
              pig:"14,你最喜欢哪一个",
              value:"14"
            },
            {
              pig:"15,你最喜欢哪一个",
              value:"15"
            },
            {
              pig:"16,你最喜欢哪一个",
              value:"16"
            },
            {
              pig:"17,你最喜欢哪一个",
              value:"17"
            },
            {
              pig:"18,你最喜欢哪一个",
              value:"18"
            },
            {
              pig:"19,你最喜欢哪一个",
              value:"19"
            },
            {
              pig:"20,你最喜欢哪一个",
              value:"20"
            },
          ],
            list:[
            {
              name: "苹果",
              value:  "1"
            },
            {
              name: "香蕉",
              value:  "2"
            },
            {
              name: "菠萝",
              value:  "3"
            },
            {
              name: "橘子",
              value:  "4"
            },
            {
              name: "梨",
              value:  "5"
            },
          ],
          fone:[
              {
                  name:"1,艾薇吗"
              },
              {
                  name:"22,艾薇吗"
              },
              {
                  name:"33,艾薇吗"
              },
              {
                  name:"44,艾薇吗"
              },
              {
                  name:"55,艾薇吗"
              },
              {
                  name:"66,艾薇吗"
              },
          ],
          foneOne:[
              {
              name: "苹果",
              value:  "1"
            },
            {
              name: "香蕉",
              value:  "2"
            },
            {
              name: "菠萝",
              value:  "3"
            },
            {
              name: "橘子",
              value:  "4"
            },
            {
              name: "梨",
              value:  "5"
            },
          ]
        }
    },
    methods:{
    //     changeInput(index){
    //         this.list.map((v,i)=>{ 
    //             if(i==index){
    //             v.isCheck = true
    //             }else{
    //             v.isCheck = false
    //             }if(v.isCheck){
    //             console.log('被选中的值为:'+v.value)
    //             }
    //         })
    //     },
    //     test(){
    //         this.list.map((v,i)=>{
    //             if(v.isCheck){
    //             console.log('被选中的值为:'+v.value)
    //             }
    //         })
    //     }
    // }
        ccc(index){
            console.log(index.target.value)
            // console.log(111)
        },
        ddd(index){
            console.log(index)
        }
    }
}
</script>

<style  scoped>
    .surveydetail{
        width: 700px;
        margin: 100px auto
    }
    .surveydetailout {
        position: relative;
    };
    div {
        display: block;
    };
    .test_contents {
        border: 1px;
        margin: 8px;
        margin-top: 10px;
        padding: 7px;
        width: 670px;
    };
    .surveydetail p {
        line-height: 26px;
        margin: 0px;
        padding: 0px;
    }
    .descs {
        font-size: 14px;
        font-weight: bold;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    .sels_list {
        overflow: hidden;
    }
    .sels_list .items {
        cursor: pointer;
        display: block;
        padding-top: 5px;
        width: 640px;
    }
    .sels_list .items .i_top, .sels_list .items .i_bot {
        height: 5px;
        overflow: hidden;
        width: 640px;
    }
    .sels_list .items .i_mid {
        padding: 2px 9px 2px 15px;
    }
    .sels_list .items .sels {
        padding-right: 8px;
        vertical-align: middle;
    }
</style>
