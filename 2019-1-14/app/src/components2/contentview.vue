<template>
    <div id="cview">
        <newHead />
        <div v-html="temp" id="txt"></div>
    </div>
</template>
<script>
import newHead from './newshead';
import axios from 'axios';
export default {
    components:{
        newHead
    },
    data(){
        return {
            temp:''
        }
    },
    async created(){
        let {params:{docid}} = this.$route;
        let d = await axios.get('/api/'+docid+'.html');
        let temp = '';
        d.data.replace(/<div class="page js-page on">[\s\S]+<div class="footer/g,($0,$1,$2)=>{
            ///(<[ap][^>]+>[\S\s]*<\/[ap]>)/g
            $0.replace(/(<[ap][\s\S]*<\/[ap]>)/g,($0,$1)=>{
                temp += $1;
            });
        });
        // console.log(d.data);
        if(/data-src/.test(temp)){
            temp = temp.replace(/data-src/g,'src')
        }
        this.temp = temp;
 
    }
}
</script>
<style>
#txt{
    padding:20px;
}
#txt img,#txt video{
    width:100%
}
#cview{
    position:absolute;
    width:100%;
    height:100vh;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:#fff;
    z-index:999;
}
</style>
