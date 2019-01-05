<template>
  <div id="app">
    <div class="active">你好</div>
    <hr />
    <List></List>
    <TextInput />
  </div>
</template>

<script>
/* 
  App.vue中通过
  export default {
    
  }
  把App这个组件导出去，给min.js使用


  引入组件:
    1.import引入
    2.components:{
      List:List,
      List
    }
    3.把组件放到template中
*/

import List from './components/list';
import TextInput from './components/text';
export default {
  components:{
    List,
    TextInput
  }
}
</script>

<style scoped>
.active{
  color:red;
}
body{
  background: pink;
}
</style>
