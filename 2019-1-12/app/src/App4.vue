<template>
  <div id="app">
      {{count}} <button @click="fn">+</button>
  </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex';


export default {
  name:'app',
  methods:{
      fn(){
        // this.$store.commit({
        //   type:'add',
        //   n:1
        // });
        this.$store.dispatch('actionsadd',{n:1});
      }
  },
  computed:{
    ...mapState(['count'])
  }
}
</script>