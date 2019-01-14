<template>
  <div id="app">
      <newHead/>
      <Tab/>
      <div id="loading" v-if="loading">
        <img  src="./assets/timg.gif">
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
import Tab from './components2/tab';
import newHead from './components2/newshead';
import Cview from './components2/contentview';
export default {
  name:'app',
  // data(){
  //   return {
  //     // loading:true
  //   }
  // },
  methods:{
     
  },
  computed:{
    loading(){
      return this.$store.state.loading;
    }
  },
  components:{
    Tab,
    newHead,
    Cview
  }
}
</script>
<style>
#title .mu-appbar-title{
  text-align:center;
}
#loading img{
  width:100%;
}
</style>