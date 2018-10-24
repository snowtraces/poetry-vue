<template>
  <div id="wrap">
    <Header></Header>
    <section id="content">
      <section class="content-left">
      </section>
      <ContentMiddle></ContentMiddle>
    </section>
    <section id="footer"></section>
  </div>
</template>

<script>
import Header from './Header'
import ContentMiddle from './ContentMiddle'
export default {
  name: 'Layouts',
  components: {ContentMiddle, Header},
  data () {
    return {
      header: 'header content'
    }
  }
}
</script>
<style lang="css" scoped>
  #wrap {
    height: 100%;
  }

  #content {
    background: #fff;
    height: calc(100% - 180px);
    position: relative;
  }

  .content-left{
    position: absolute;
    width: 160px;
    height: 100%;
    /*background: #888;*/
    top: 0;
    left: 0;
  }

  #footer {
    background: #666;
    height: 80px;
    margin-top: 24px;
  }

</style>
