<template>
    <div id="mu-header">
        <mu-appbar style="width: 100%;" color="primary" id="title">
            <mu-button icon slot="left" @click="fn">
                <mu-icon value="keyboard_arrow_left"></mu-icon>
            </mu-button>
            网易新闻
            <mu-button flat slot="right">LOGIN</mu-button>
        </mu-appbar>
    </div>
</template>
<script>
export default {
    methods:{
        fn(){
           this.$router.go(-1);
        }
    }
}
</script>