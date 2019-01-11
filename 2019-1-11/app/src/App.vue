<template>
  <div id="app">
    <!-- <router-link to="/"></router-link> -->
    <router-link to="/about2"  tag="button">公开的信息</router-link>
    <router-link to="/about" tag="button">私有的信息</router-link>
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
