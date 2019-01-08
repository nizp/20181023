<template>
  <div id="app">
      <!-- <div>11111</div> -->
      <router-link to="/" tag="button">app</router-link>
      <router-link to="/ppa" tag="button">ppa</router-link>
      <router-link to="/child" tag="button">child</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
/* 
  / -> index.html

  res.write();
  res.end();


  浏览器 -> localhost:8080/  ->  app.listen(8080);


*/
export default {

}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
</style>
