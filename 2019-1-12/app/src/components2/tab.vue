<template>
    <div id="tab">
        <mu-container>
            <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
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
      active1: 0
    };
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