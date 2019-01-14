<template>
    <div id="list">

        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            <!-- <mu-appbar color="teal">
                <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
                </mu-button>
                LoadMore
                <mu-button icon slot="right" @click="refresh()">
                <mu-icon value="refresh"></mu-icon>
                </mu-button>
            </mu-appbar> -->
            <mu-container ref="container" class="demo-loadmore-content">
                <mu-load-more
                     :loading="loading" 
                     @load="load"
                >
                    <mu-list textline="three-line" v-show="!$store.state.loading">
                        <div v-for="(val,key) in list" @click="changepage(val)">
                            <mu-list-item avatar :ripple="false" button>
                                <mu-list-item-action>
                                    <mu-avatar>
                                    <img :src="val.imgsrc">
                                    </mu-avatar>
                                </mu-list-item-action>
                                <mu-list-item-content>
                                    <mu-list-item-title>{{val.title}}</mu-list-item-title>
                                    <mu-list-item-sub-title>
                                    <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> {{val.digest}}
                                    </mu-list-item-sub-title>
                                </mu-list-item-content>
                            </mu-list-item>
                            <mu-divider></mu-divider>
                        </div>
                    </mu-list>
                </mu-load-more>
            </mu-container>
        </mu-paper>
        <div v-show="$route.path === '/ls'">
            您已经浏览了{{$store.getters.len}}个新闻
        </div>
    </div>
</template>
<script>
import jsonp from '../fetch.js';
import axios from 'axios';
export default {
    props:{
        toggle:{
            type:String,
            default:'BBM54PGAwangning'
        }
    },
    data(){
        return {
            list:[],
            start: 0,
            end:10,
            refreshing: false,
            loading: false,
            text: 'List'
        }
    },
    beforeCreate() {
        this.$store.commit('loadingon');
    },
    created(){
        // console.log('https://3g.163.com/touch/reconstruct/article/list/'+ this.toggle +'/0-10.html')
        // console.log(this.toggle);
        
        if(this.$route.path == '/ls'){
            this.list.push(...this.$store.state.collect);
        }else{
            this.createData();
        }
        

        // axios.get('/api/E5FD6IDT0001875P.html')
        // .then(e=>{
        //     let temp = '';
        //     e.data.replace(/<div class="page js-page on">[\s\S]+<div class="page js-page/g,($0,$1,$2)=>{
        //         // console.log($0)
        //         $0.replace(/(<[ap][^>]+>[\S\s]*<\/[ap]>)/g,($0,$1)=>{
        //             temp += $1;
        //         });
        //     });
        //     console.log(temp);
        // })
        // console.log(data[this.toggle]);


        
        // console.log(data.BBM54PGAwangning);
    },
    beforeMount(){
        setTimeout(() => {
            this.$store.commit('loadingoff');
        }, 1000);
    },
    methods:{
       async createData(){
            let {start,end} = this;
            try {
                let data = await jsonp({
                    url:'https://3g.163.com/touch/reconstruct/article/list/'+ this.toggle +`/${start}-${end}.html`,
                    fnName:'artiList' 
                });
                this.list.push(...data[this.toggle]);
                this.loading = false;
                 console.log(data,start,end)
            } catch (error) {
                let span = this.$refs.container.getElementsByClassName('mu-infinite-scroll-text')[0];
                span.innerText='我还是有底线的';
                setTimeout(() => {
                    span.innerText='正在加载...';
                    this.loading = false;
                }, 2000);
            }
           
        },
        changepage(val){
            this.$store.commit('ADDCOLLECT',val);
            this.$router.push('/cview/'+val.docid);
        },
        // refresh () {
        //     this.refreshing = true;
        //         this.$refs.container.scrollTop = 0;
        //         setTimeout(() => {
        //             this.refreshing = false;
        //             this.text = this.text === 'List' ? 'Menu' : 'List';
        //             this.num = 10;
        //         }, 2000)
        //     },
        load () {
            this.loading = true;
            this.start += 10;
            this.end += 10;
            this.createData();
            // console.log(this.loading)
            // setTimeout(() => {
            //     this.loading = false;
            //     this.num += 10;
            // }, 2000)
        }
    }
}
/*
    E5FGSV6A0001899O
    http://3g.163.com/news/19/0114/08/E5FE9Q7E00018AOR
*/
</script>
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
#list .mu-avatar img{
    border-radius:0;
}
.demo-loadmore-wrap {
  width: 100%;
  max-width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
}
.demo-loadmore-wrap .mu-appbar {
    width: 100%;
}
.demo-loadmore-content {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
</style>