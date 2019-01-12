<template>
  <div id="app">
      <mu-appbar style="width: 100%;" color="primary" id="title">
        <mu-button icon slot="left">
          <mu-icon value="keyboard_arrow_left"></mu-icon>
        </mu-button>
        网易新闻
        <mu-button flat slot="right">LOGIN</mu-button>
      </mu-appbar>
      <Tab />
      <router-view></router-view>
  </div>
</template>
<script>
import Tab from './components2/tab';
export default {
  name:'app',
  methods:{
     
  },
  components:{
    Tab
  }
}
</script>
<style>
#title .mu-appbar-title{
  text-align:center;
}
</style>