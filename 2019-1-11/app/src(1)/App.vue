<template>
  <div id="app">
    <!-- <router-link to="/"></router-link> -->
    <router-link to="/about"  tag="button">关于</router-link>
    <router-link to="/about2" tag="button">关于2</router-link>
    <router-link to="/gogo" tag="button">去详情页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
 
}
</script>

<style>
.router-link-active{
  background:yellow;
}
</style>
