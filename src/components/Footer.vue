<template>
  <section id="footer">
    <div class="footer-bottom">
      <div class="poweredby">Powered by <a href="https://xinyo.org" title="雪痕的博客">XINYO.ORG</a></div>
      <div class="copyright">©{{year}} {{host}} </div>
      <div class="clearfix"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year: function () {
      return new Date().getFullYear()
    },
    host: function () {
      return window.location.host
    }
  }
}
</script>
<style scoped>
  .footer-bottom a{
    color: #fff;
  }
  .poweredby{
    float: left;
  }
  .copyright{
    float: right;
  }
</style>
