<template>
    <div id="s" v-show="onoff">
        <div class="box" @click="change">
            <slot name="h">
                <h1>你好!</h1>
            </slot>
        </div>
        <div class="shadow"></div>
    </div>
</template>
<script>
export default {
    props:{
        onoff:{
            default:false
        }
    },
    methods:{
        change(){
            this.$emit('changeo');
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style>
#s .shadow{
    top:0;
    left:0;
    position: absolute;
    width:100vw;
    height:100vh;
    background:rgba(000, 000,000, .4);
}
#s h1,#s p{
    text-align: center;
    line-height: 100px;
}
#s .box{
    width:300px;
    height:100px;
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-150px;
    margin-top:-50px;
    background:#fff;
    border: 1px solid #000;
    z-index: 2;
}
</style>