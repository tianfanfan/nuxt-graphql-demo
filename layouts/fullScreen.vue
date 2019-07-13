<template>
  <div class="main">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>


<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components:{
    Header,
    Footer,
  }
}
</script>


<style>

  html,body,#__nuxt,#__layout{
    height:100%;
  }

  .main{
    position: relative;
    height: 100%;
  }

</style>
