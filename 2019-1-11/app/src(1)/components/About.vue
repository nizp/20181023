<template>
  <div id="about">
      <h1>{{aboutname.substr(1)}} </h1>
      <!-- {{aboutname + '/ta' }} -->
     
      <router-link 
        :to="{
          path: aboutname + '/ta'
        }" 
        tag="button"
      >
     
      关于她</router-link>
    
      <router-link to="/about/wo" tag="button" v-if="aboutname=='/about'">关于我</router-link>
      <hr />
      <router-view></router-view>
  </div>
</template>
<script>


export default {
  computed: {
    aboutname(){
      /*
          /about2

          /about2/ta
          /about2/ta
      */
      // console.log(this.$route.meta.page);
      return '/' + this.$route.path.replace(/^\/(\w+)(\/)?(.+)?$/,($0,$1)=>$1);
    }
  },
}
</script>
<style>
#about .router-link-exact-active{
  background:red;
}
</style>