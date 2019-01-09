<template>
    <div>
        ccccccc
        <!-- <router-link to="/">go home</router-link> -->
        <button
            @click="go"
        >回退</button>
    </div>
</template>
<script>
export default {
    name:'ccc',
    methods:{
        go(){
            this.$router.go(-1);
        }
    }
}
</script>