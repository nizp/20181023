<template>
    <div id="lb" v-if="!$store.state.loading">
        <mu-carousel transition="fade">
            <mu-carousel-item>
                <img :src="carouselImg1">
            </mu-carousel-item>
        </mu-carousel>
    </div>
</template>

<script>
import carouselImg1 from '../assets/01.jpg';
export default {
  data () {
    return {
      carouselImg1
    }
  }
};
</script>
<style>
#lb .mu-carousel{
    height:10.5rem;
}
#lb .mu-carousel img{
    width:135%;
}

</style>