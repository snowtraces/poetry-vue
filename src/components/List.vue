<template>
  <div id="wrap">
    <Header :inputKeyword="keyword"></Header>
    <div class="search-result-desc" v-html="resultDesc"></div>
    <section id="content">
      <section class="content-left"></section>
      <ContentMiddleList :beanList="beanList" :keyword="keyword" :page="page" :tagList="tagList"></ContentMiddleList>
      <!--<ContentRight :poetry="poetry" ></ContentRight>-->
    </section>
    <PageNav :page="page" :total="total" :keyword="keyword"></PageNav>
    <section id="footer"></section>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import ContentMiddleList from './ContentMiddleList'
import PageNav from './PageNav'
export default {
  name: 'Layouts',
  components: {PageNav, ContentMiddleList, Header},
  data () {
    return {
      keyword: '',
      page: 1,
      total: 0,
      tagList: [],
      beanList: [],
      resultDesc: '',
      errors: []
    }
  },
  methods: {
    pageNav: function (page, total) {
      let nav = []
      let max = Math.ceil(total * 1.0 / 10)
      if (max > 10) {
        for (let i = 1; i < 10; i++) {
          let _nav = `<span class="nav-item"><a href="/#/search/${this.keyword}/page/${i}">${i}</a></span>`
          nav.push(_nav)
        }
      }
      return nav.join('')
    }
  },
  created () {
    let keyword = this.$route.params.keyword
    let page = this.$route.params.page
    axios.get(`https://shicigefu.net/api/poetry/search?keyword=${keyword}&page=${page}`)
      .then(response => {
        let data = response.data
        this.beanList = data.poetryBeanList
        this.keyword = data.keyword
        this.page = data.page
        this.tagList = data.relationTag
        this.total = data.total
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
  .page-nav{
    margin-left: 160px;
  }
  #footer {
    background: #666;
    height: 80px;
    margin-top: 24px;
  }
</style>
