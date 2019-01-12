<template>
    <div>
        <mu-list textline="three-line">
            <div v-for="(val,key) in list">
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
    </div>
</template>
<script>
import jsonp from '../fetch.js';
export default {
    data(){
        return {
            list:[]
        }
    },
    async created(){
        let data = await jsonp({
            url:'https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html',
            fnName:'artiList' 
        });
        this.list.push(...data.BBM54PGAwangning);
        // console.log();
    }
}
</script>
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
</style>