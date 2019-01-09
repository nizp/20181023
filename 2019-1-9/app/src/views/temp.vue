<template>
    <div id="t">
        <div class="box">
            <ul>
                <li v-for="(val,key) in obj[$route.params.num]">{{val}}</li>
            </ul>
        </div>
        {{$route.params.num}}
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            obj:{
                a:[1,2,3],
                b:[4,5,6],
                c:[7,8,9]
            }
        }
    }
}
</script>
<style>
#t .box{
    width:100px;
    height:100px;
    border:1px solid #000;
}
</style>