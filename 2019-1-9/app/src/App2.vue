<template>
  <div id="app">
    <div id="ppa">
      <router-link 
          @click.native="cc(0)"
          to="/" 
          tag="button"
          :class="{active:n==0}"
        >首页</router-link>
        <router-link 
          @click.native="cc(1)"
          to="/about" 
          tag="button"
          :class="{active:n==1}"
        >详情页</router-link>
    </div>
    
    <router-view/>
  </div>
</template>
<script>
export default {
    data(){
      return {
        n:0
      }
    },
    created(){
      // console.log(this.$route);
      this.listenR();
    },
    watch: {
      $route(){
        //只要route发生变化，就执行listenR这个函数。
        this.listenR();
        // console.log(this.$route);
      }
    },
    methods:{
      listenR(){
        let {path,params:{a},query:{a:x}} = this.$route;

        // if(a == 5){
        //   console.log('我点到了localhost:yinyue?id='+a)
        // }else if(a == 6){
        //   console.log('我点到了localhost:yinyue?id='+a)
        // }
        if(a){console.log('我点到了localhost:yinyue?id='+a)}
        if(x){
          console.log('我点到了c下面的localhost:yinyue?id='+x);
        }
         


        switch (path) {
          case '/':
              this.n = 0;
            break;
          default:
              this.n = 1;
            break;
        }
      },
      cc(n){
        console.log(1);
        this.n = n;
      }
    }
}
</script>
<style>
#ppa .active{
  background: greenyellow;
}
</style>
