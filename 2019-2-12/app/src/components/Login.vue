<template>
  <div>
      <h2 id="userInfo">欢迎回来,<span id="user"></span></h2>
      <div class="form-wrapper">
          <div class="banner"></div>
           <div class="item-wrapper"><label for="username">登陆名</label>
              <input type="text" name="username" id="username" v-model="uv"></div>
            <div class="item-wrapper"><label for="password">密码</label>
              <input type="password" name="password" id="password" v-model="pv"></div>
            <input 
              type="button" 
              value="登陆" 
              id="submit"
              @click="login"
            >
            <input 
              type="button" 
              value="注册" 
              id="register"
              @click="register"
            >
          <p id="info" >请输入信息</p>
      </div>
  </div>
</template>

<script>

import '../css/register.css';
export default {
  name: 'Login',
  data(){
    return {
      uv:'',
      pv:''
    }
  },
  methods:{
  async register(){
        let d = await fetch('http://localhost:88/api/user/register',{
          method:'post',
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          body:new URLSearchParams({
            username: this.uv,
		        password: this.pv
          }).toString()
        });
        let data = await d.json();

        if(data.code === 0){
          sessionStorage.setItem('user',this.uv);
          this.$router.replace('/web');
        }
        console.log(data);
    },
    async login(){
      let d = await fetch('http://localhost:88/api/user/login',{
          method:'post',
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          body:new URLSearchParams({
            username: this.uv,
		        password: this.pv
          }).toString()
        });
      let data = await d.json();

      if(data.code === 0){
        sessionStorage.setItem('user',this.uv);
        this.$router.replace('/web');
      }else if(data.code === -3){
        alert('哥（姐）们,请重新登录');
      }

        console.log(data);
    }

  }
}
</script>
<style >
h2 {
    display: none;
}
#info{
  display: none;
}
</style>
