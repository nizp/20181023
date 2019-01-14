<template>
    <div id="tab">
        <mu-container>
            <mu-tabs 
                :value.sync="active1" 
                inverse color="secondary" 
                text-color="rgba(0, 0, 0, .54)"  
                center
            >
                <mu-tab to="/">首页</mu-tab>
                <mu-tab to="/gn">国内</mu-tab>
                <mu-tab to="/gj">国际</mu-tab>
                <mu-tab to="/ls">历史</mu-tab>
            </mu-tabs>
            
        </mu-container>
    </div>
</template>
<script>
export default {
  data () {
    return {
      active1: this.listenR()
    };
  },
  methods:{
      listenR(){
          switch (this.$route.path) {
            case '/':
                return 0
                break;
            case '/gn':
                  return 1
                  break;
            case '/gj':
                  return 2
                  break;
            case '/ls':
                  return 3
                  break;
            default:
                return 0;
                  break;
          }
      }
  }
}
</script>
<style>
#tab .container{
    padding:0;
}
.demo-text {
  background: #fff;
}
</style>