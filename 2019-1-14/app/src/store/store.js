import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);

const state = {
   loading:false,
   //定义了一个可变的状态，只要你想多个页面去享用，那么就在vuex中定义，
   //只要在vuex中的数据，就是一种状态。
   collect:[]
}
const mutations = {
    loadingon(state){
        state.loading = true;
    },
    loadingoff(state){
        state.loading = false;
    },
    //改变状态只能通过mutations去同步更改。
    //外部使用this.$store.commit('名字',参数);
    //mutations中就是放入更改状态的逻辑
    ADDCOLLECT(state,val){
        //如果collect没有同样的数据，就添加。
        let obj = state.collect.find(d=>d.docid == val.docid);
        if(!obj){
            state.collect = [val,...state.collect];
            console.log( state.collect );
        }
    }
}
const getters = {
    len(state){
        return state.collect.length;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters
});
 