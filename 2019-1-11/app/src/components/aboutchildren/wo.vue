<template>
  <div>
    <h1>关于我</h1>
    <router-link :to="{
            name:'tamen',
            params:{
                name:'yuanye'
            }
        }"
        tag="button"
    >原野同学</router-link>
    <router-link 
        :to="{
            name:'tamen',
            params:{
                name:'yifan'
            }
        }"
        tag="button"
    >亦凡同学</router-link>
    <router-link 
        :to="{
            name:'tamen',
            params:{
                name:'tiesong'
            }
        }"
        tag="button"
    >铁松同学</router-link>

    
    <router-view></router-view>
  </div>
</template>
<script>
/*
    原野
    亦凡
    铁松
*/
export default {
    
}
</script>
<style>
  
</style>