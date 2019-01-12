<template>
  <div id="app">
      {{toDou}}
      {{ary}}
      <ul>
        <li v-for="(val,key) in toDou">
          {{val.num}}
          <button @click="changeNum(val.id)">+</button>
         
        </li>
      </ul>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations } from 'vuex';
export default {
  name:'app',
  methods:{
    changeNum(id){
      this.$store.commit({
        type:'INCREMENT',
        n:1,
        id
      });
      // this.INCREMENT(1);
    }
  },
  computed:{
    ...mapState(['ary']),
    ...mapGetters(['toDou']),
    // ...mapMutations(['INCREMENT'])
  }
}
</script>