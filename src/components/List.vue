<template>
  <div id="wrap">
    <Header :inputKeyword="keyword"></Header>
    <div class="search-result-desc" v-html="resultDesc"></div>
    <section id="content">
      <section class="content-left"></section>
      <ContentMiddleList :beanList="beanList" :keyword="keyword" :page="page" :tagList="tagList"></ContentMiddleList>
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
      keyword: '',
      page: '',
      tagList: [],
      beanList: [],
      resultDesc: '',
      errors: []
    }
  },
  created () {
    let keyword = this.$route.params.keyword
    axios.get(`https://shicigefu.net/api/poetry/search?keyword=${keyword}`)
      .then(response => {
        let data = response.data
        this.beanList = data.poetryBeanList
        this.keyword = data.keyword
        this.page = data.page
        this.tagList = data.relationTag
        this.resultDesc = `获得约 ${data.total || 0} 条结果（第${data.page || 1}页）`
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
  .search-result-desc{
    font-size: 0.75em;
    color: #999;
    margin: -12px 0 12px 160px;
  }

  #footer {
    background: #666;
    height: 80px;
    margin-top: 24px;
  }

</style>
