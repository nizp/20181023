<template>
  <div>
      <div class="nArea">
      <!--留言-->
       {{setpage}}
      <div class="takeComment">
          <textarea 
            name="textarea" 
            class="takeTextField" 
            id="text"
            v-model="val"
          ></textarea>
          <div class="takeSbmComment">
              <input 
                type="button" 
                id="submit"
                class="inputs" 
                @click="add"
                />
              <span>(可按 Enter 回复)</span>
          </div>
      </div>
      <!--已留-->
      <div class="commentOn">
          <div class="messList" id="div1" style="height:502px">
              <div class="reply" v-for="(val,key) in arr">
                  <p class="replyContent">{{val.content}}</p>
                  <p class="operation">
                      <span class="replyTime">{{timer(val.time)}}</span>
                      <span class="handle">
                          <a href="javascript:;" class="top">{{val.like}}</a>
                          <a href="javascript:;" class="down_icon">{{val.dislike}}</a>
                          <a href="javascript:;" class="cut">删除</a>
                      </span>
                  </p>
              </div>
          </div>
          <div class="page" id="page">
              <a 
                href="javascript:;" 
                :class="num == val?'active':''"
                v-for="(val,key) in setpage"
                @click="changepage(val)"
              >{{val}}</a>
           
          </div>
      </div>
    </div> 
  </div>
</template>

<script>
import '../css/weibo.css';

/*
    第一种条件总数大于5的情况下，页面只会出现5个页码

    1,2,3,4,5
    6,7,8,9,10


    第二个条件总数不够5页的情况下,有多少页就有几个页码
      4
      1,2,3,4



*/

export default {
  name: 'Web',
  data(){
    return {
        val:'',
        arr:[],
        page:1,
        num:1
    }
  },  
  methods:{
    changepage(num){
      this.num = num;
      this.render(num);
    },
    async add(){
      let d = await fetch('http://localhost:88/api/weibo?act=add&content='+this.val)
      let data = await d.json();
      if(data.code === 0){
        this.render(1);
        this.val = '';
      }
    },
    timer(time){
      let date = new Date(time); //服务器的时间
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      let h = date.getHours();
      let mi = date.getMinutes();
      let s = date.getSeconds();
      return y + '年' + m + '月' + d + '日 ' + h+':'+mi+':'+s; 
    },
  async render(page=1){
      let data = await fetch('http://localhost:88/api/weibo?act=get&page='+page);
      let d = await data.json();
      // console.log(d);
      this.arr = [...d];
      this.getpage();
    },
    async getpage(){
      let data = await fetch('http://localhost:88/api/weibo?act=get_page_count');
      let d = await data.json();
      console.log(d);
      this.page = d.count;
      
    }
  },
  created(){
    let user = sessionStorage.getItem('user');
    if(!user){
      this.$router.replace('/login')
    }else{
      this.render();
    }
  },
  computed:{
    setpage(){
      let {num,page} = this;
      let arr = [];
      if(page > 5){
        for(let i=1;i<=5;i++){
          //如果当前值在3的范围内， 5   3
          if(this.num <= 3){  //1,2,3,4,5 
            arr.push(i);
          }else if(num >= page-2){  //6 >= 5   
            //10    8,9,10,11,12  -> 6,7,8,9,10
            arr.push(page-5+i);  
          }else{
            arr.push(num-3+i); //2,3,4,5,6
          // 1,2,3,4,5
          // 2,3,4,5,6
          }
        }
      }else{
        //不够5页的情况下，有多少页就展示多少页。
        for(let i=1;i<=page;i++){
          arr.push(i);
        }
      }
      return arr;
    }
  }
}
</script>
<style scoped>
#submit{
  position: static;
}
</style>
