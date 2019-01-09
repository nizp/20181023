<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link 
        :to="{
          name:'aaa',
          query:{
            aaa:'50'
          },
          params:{
            a:5
          }
        }" 
        tag="button"
    >aaa</router-link>
    <router-link 
      :to="{
        name:'bbb',
        params:{
          a:6
        }
      }" 
      tag="button"
    >bbb</router-link>
    <router-link 
        :to="{
          path:'c',
          query:{
            a:7
          }
        }" tag="button">ccc</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.about .seractive{
  background: yellow;
}
</style>

