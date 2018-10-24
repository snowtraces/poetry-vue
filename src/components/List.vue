<template>
  <div id="wrap">
    <Header></Header>
    <section id="content">
      <section class="content-left"></section>
      <ContentMiddleList :beanList="beanList"></ContentMiddleList>
      <!--<ContentRight :poetry="poetry" ></ContentRight>-->
    </section>
    <section id="footer"></section>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import ContentMiddleList from './ContentMiddleList'
export default {
  name: 'Layouts',
  components: {ContentMiddleList, Header},
  data () {
    return {
      beanList: [],
      errors: []
    }
  },
  created () {
    let keyword = this.$route.params.keyword
    axios.get(`https://shicigefu.net/api/poetry/search?keyword=${keyword}`)
      .then(response => {
        let data = response.data
        this.beanList = data.poetryBeanList
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
<style lang="css" scoped>
  #wrap {
    height: 100%;
  }

  #content {
    background: #fff;
    min-height: calc(100% - 228px);
    position: relative;
    max-width: 1130px;
  }

  .content-left{
    position: absolute;
    width: 160px;
    height: 100%;
    top: 0;
    left: 0;
  }

  #footer {
    background: #666;
    height: 80px;
    margin-top: 24px;
  }

</style>
