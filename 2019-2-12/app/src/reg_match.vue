<template>
    <div class="wrap">
    <h2>注册信息</h2>
    <ul>
        <li v-for="(val,key) in arr">
            <span>{{val.name}}</span>
            <input 
                type="text" 
                :placeholder="'请输入'+val.name+'号'" 
                @input="change(val)"
                v-model="val.val"
                :class="val.val?val.ok?'ok':'nook':''"
            >
        </li>
    </ul>
    <button 
        :class="!ndbnd?'btn nd':'btn bnd'" 
        id="btn" 
        :disabled="ndbnd">注册</button>
    {{arr}}
</div>
</template>

<script>
export default {
    data(){
        return {
            arr:[
                {
                    val:'',
                    ok:false,
                    re:/^[1-9]\d{4,10}$/,
                    name:'QQ'
                },
                {
                    val:'',
                    ok:false,
                    re:/^[a-z1-9]\w{3,17}@[\da-z]{2,8}(\.(com|cn|net)){1,3}$/i,
                    name:'邮箱'
                },
                {
                    val:'',
                    ok:false,
                    re:/^1[3456789]\d{9}$/,
                    name:'手机'
                },
                {
                    val:'',
                    ok:false,
                    re:/^(\d+)\D+(\d+)\D+(\d+)\D*$/,
                    name:'出生日期'
                }

            ]
        }
    },
    methods: {
        change(val){
            if(val.name === '出生日期'){
                //格式是正确的，但是不能保证时间是对的
                if(val.re.test(val.val)){
                    val.val.replace(val.re,($0,$1,$2,$3)=>{
                        //把用户填写的时间记录下来，设置为最新的时间
                        let date = new Date($1,$2-1,$3);
                        let d2 = +new Date(); //当前的时间
                        //如果用户填写的时间比现在的时间要大，就说明未来出生（外星人），直接错误
                        if(+date > d2){
                            val.ok = false;
                        }else{
                            //然后把设置的时间和用户填写的时间做一个比较，如果都相等，就说明这个时间是正确的
                            let y = date.getFullYear();
                            let m = date.getMonth() + 1;
                            let d = date.getDate();

                            if($1 == y && $2 == m && $3 == d){
                                val.ok = true;
                            }else{
                                val.ok = false;
                            }
                        }
                    });

                }else{
                    //如果格式都不正确，直接false
                    val.ok = false;
                }
            }else{
                val.ok = val.re.test(val.val);
            }
        }
    },
    computed:{
        ndbnd(){
            return !this.arr.every(e=>e.ok)
        }
    }
}
</script>

<style>
body{
    background-color: orange;
}
ul{
    margin: 0;
    padding: 0;
    list-style:none;
}
h2{
    text-align: center;
}
.wrap{
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #fff;
    background-color: #fff;
    margin: 100px auto;
    padding: 30px;
}
ul{
    margin-left: 10px;
}
li{
    margin-top: 20px;
}
li span{
    width: 70px;
    text-align: right;
    display: inline-block;
    margin-right: 5px;
}
button{
    margin-left: 104px;
    margin-top: 20px;
    width: 100px;
    height: 30px;
}
button.bnd{
    cursor:no-drop;
}
button.nd{
    cursor: pointer;
}


.ok{
    border-color: green;
    color: green;
}
.nook{
    border-color: red;
    color: red;
}
input{
    outline: none;
    height: 30px;
    padding-left: 10px;
    border: 1px solid #ccc;
}
</style>
