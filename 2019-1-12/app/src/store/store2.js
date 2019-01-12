import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);
//初始化的状态（数据），当改变state的时候就会改变视图
const state = {
    count:0,
    ary:[
        {num:0,id:0},
        {num:0,id:1}
    ]
}
//只有mutations才能改变vuex中的数据状态哦！~
//什么时候让mutations改变，使用this.$store.commit('add')函数名称
const mutations = {
    add(state,n){
        // setTimeout(() => {
            state.count += n.n;
        // },0);
    },
    //如果你的mutation调用了，数据也改了，但是视图没有，这个时候就要想到
    //对象要改变地址的问题。
    //Object.assgin({},state.obj)   JSON.parse(JSON.stringify(state.obj))
    INCREMENT(state,obj){
        console.log(obj);
        let o = state.ary.find(d=>d.id==obj.id);
        o.num += obj.n;
        state.ary = [...state.ary];
        // state.ary.forEach(e=>{
        //     if(e.id == obj.id){
        //         e.num += obj.n;
        //     }
        // });
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters:{
        toDou:(state)=>{
            let arr = JSON.parse(JSON.stringify(state.ary));
            return arr.map(e=>{
                if(e.num<10){
                    e.num = '0'+e.num
                }else{
                    e.num = '' + e.num
                }
                return e;
            });
        }
    },
    actions:{
        actionsadd(context,n){
            setTimeout(() => {
                context.commit('add',n);
            }, 1500);
        }
    }
});
 