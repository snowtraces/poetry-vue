<template>
  <div id="wrap">
    <Header :inputKeyword="keyword"></Header>
    <section id="content">
      <ContentMiddleList :beanList="beanList" :keyword="keyword" :page="page" :tagList="tagList" :total="total"></ContentMiddleList>
      <ContentRightList :tagList="tagList" :keyword="keyword" :author="author"></ContentRightList>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import ContentMiddleList from './ContentMiddleList'
import ContentRightList from './ContentRightList'
import Footer from './Footer'
export default {
  name: 'Layouts',
  components: {Footer, ContentMiddleList, ContentRightList, Header},
  data () {
    return {
      keyword: '',
      page: 1,
      total: 0,
      tagList: [],
      beanList: [],
      author: {},
      errors: []
    }
  },
  beforeRouteEnter (to, from, next) {
    let keyword = to.params.keyword
    let page = to.params.page
    axios.get(`https://shicigefu.net/api/poetry/search?keyword=${keyword}&page=${page}`)
      .then(response => {
        next(vm => vm.setData(response.data))
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  beforeRouteUpdate (to, from, next) {
    let keyword = to.params.keyword
    let page = to.params.page
    axios.get(`https://shicigefu.net/api/poetry/search?keyword=${keyword}&page=${page}`)
      .then(response => {
        this.setData(response.data)
        next()
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    setData (data) {
      this.beanList = data.poetryBeanList
      this.keyword = data.keyword
      this.page = data.page
      this.tagList = data.relationTag
      this.total = data.total
      this.author = data.author
    }
  }
}
</script>
<style lang="css" scoped>
</style>
