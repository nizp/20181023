<template>
  <div id="app">
    <div>12345</div>
    <button @click="click">点击</button>  
    <button @click="click2">点击出遮罩</button>  
    <ul ref="ul">
      <li ref="a" v-for="(val,key) in arr" :key="val">{{val}}</li>
    </ul>
    <input 
      type="text" 
      ref="txt" 
      v-show="val"
    >
    <Child ref="c"></Child>
    <!-- <Hello 
      :onoff="o"
      @changeo="click2"
    /> -->
     <Hello 
      :onoff="o"
      @changeo="click2"
    >
      <p slot="h">就换了你，哈哈!~</p>
    </Hello>


  </div>
</template>

<script>
/*
  引入组件，不用Vue.component(),而是在导出的对象上挂一个
  components的属性，属性里面为一个对象，key值和value一样
  的情况下，写一个即可。

  木偶组件（为了接收数据，渲染数据，基本上是没有逻辑的，越往下越木偶）
  功能组件（更多是控制数据，有大量的逻辑，越往顶层越功能）


  ref:
    当做给元素或者组件加了一个id，可以通过this.$refs.xx去找到它们。

    使用技巧:
      如果在操作数据之后，还要操作ref的DOM元素，可以使用nextTick方便操作。


  slot:插槽
    



*/
import Child from './components/child';
import Hello from './components/slot';




export default {
    components:{
      Child,
      Hello
    },
    data(){
        return {
          arr:[1,2,3,4,5],
          val:'',
          o:false
        }
    },
    mounted() {
      /*
        如果在mounted下，不能准确的拿到DOM元素，那么用nextTick
      */
      let lis = document.getElementsByTagName('li');
      // console.log(ul)
      for(let el of lis){
        el.onclick = function(){
          alert(1);
        }
      }
    },
    methods:{
      click(){
        // console.log(this.$refs.c);
        console.log(this.$refs.txt);
        this.val = '1234';
        this.$nextTick(()=>{
          this.$refs.txt.focus();
        });
        // this.$refs.txt.focus();
      },
      click2(){
        this.o = !this.o;
      }

    }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
</style>
