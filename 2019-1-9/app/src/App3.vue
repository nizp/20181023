<template>
  <div>
    <router-link to="a" tag="button">aaa</router-link>
    <router-link to="b" tag="button">bbb</router-link>
    <router-link to="c" tag="button">ccc</router-link>
    {{$route.params.id}}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // watch: {
  //   $route(){
  //     console.log(this.$route)
  //   }
  // },
}
</script>
