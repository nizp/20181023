<template>
    <div>
        用户名:<input type="text" v-model="val"/><br>
        密码:<input type="password" v-model="pas">
        <button @click="click">登录</button>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return {
            val:'',
            pas:''
        }
    },
    methods:{
        click(){
            //用户的数据库
            let arr = [{name:'aaa',pass:1},{name:'bbb',pass:1}];
            let {val,pas} = this;
            let obj = arr.find(e=>e.name == val);
            if(obj && obj.pass == pas){
                this.$router.push('/about?onoff=true');
            }
        }
    }
}
</script>