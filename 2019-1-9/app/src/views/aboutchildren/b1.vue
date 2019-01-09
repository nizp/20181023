<template>
    <div>
        我是b1
        <button
            @click="changeRoute"
        >切到小宝宝这儿</button>
    </div>
</template>
<script>
export default {
    name:'b1',
    methods:{
        changeRoute(){
            this.$router.push('/c');
        }
    }
}
</script>