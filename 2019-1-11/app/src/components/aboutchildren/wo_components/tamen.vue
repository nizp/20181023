<template>
  <div>
    我亲爱的同学{{$route.params.name}}
    <button @click="goHome">返回到首页</button>
  </div>
</template>
<script>
/*
    原野
    亦凡
    铁松
*/
export default {
  name:'tamen',
  methods: {
    goHome(){
      this.$router.push('/');
      // this.$router.replace('/');
    }
  },
}
</script>
<style>
  
</style>