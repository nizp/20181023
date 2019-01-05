<template>
    <div id="list">
        <ul>
            <li v-for="(val,key) in arr" class="active">{{val}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arr:[1,2,3,4]
        }
    }    
}
</script>
<style>
#list .active{
    color:aqua;
}
</style>
