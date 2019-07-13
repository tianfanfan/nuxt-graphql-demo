<template>
  <div class="one-screen-page bg-gray-darker bg-image">
    <div class="page-inner">
      <header class="page-head">
        <!-- <div class="divider-spectrum"></div> -->
        <div class="page-head-inner">
          <div class="shell text-center"><a href="/" class="brand brand-md"><img src="../assets/img/logo.png" width="100" height="22" alt="logo"/></a> </div>
        </div>
      </header>
      <section class="page-content text-center">
        <div class="shell">
          <div class="range range-sm-center">
            <div v-if="error.statusCode === 404" class="cell-sm-9 cell-md-8">
              <h5>对不起，找不到这个页面</h5>
              <div class="text-extra-large-bordered offset-top-15">
                <p>404</p>
              </div>
              <p class="text-white">你可能打错了地址，或页面移动了。</p>
              <div class="group-xl offset-top-40 offset-sm-top-60 offset-xl-top-120"><a class="btn btn-primary" href="/">回到首页</a><a class="btn btn-white-outline" href="#">联系我们</a></div>
            </div>
          </div>
        </div>
      </section>
      <footer class="page-foot">
        <div class="page-foot-inner">
          <div class="shell text-center">
            <!-- <div class="range">
              <div class="cell-xs-12">
                <p class="rights"><span>Business</span><span>&nbsp;&#169;&nbsp;</span><span id="copyright-year"></span><span>All Rights Reserved</span><br class="veil-sm">
                  <a href="#" class="link-primary-inverse">Terms of Use</a><span>and</span><a href="privacy-policy.html" class="link-primary-inverse">Privacy Policy</a></p>
              </div>
            </div> -->
          </div>
        </div>
        <!-- <div class="divider-spectrum"></div> -->
      </footer>
    </div>
  </div>
</template>


<script>
export default {
  name: "Error",
  layout:'nuxt',
  props: ["error"],
}
</script>


<style lang="less" scoped>
  .bg-image {
    background-image: url('../assets/img/404_bg.jpg');
  }
</style>
