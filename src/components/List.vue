<template>
  <div id="wrap">
    <transition name="fade">
      <Loading v-if="isLoading"></Loading>
    </transition>
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
import Loading from './base/Loading'
export default {
  name: 'Layouts',
  components: {Loading, Footer, ContentMiddleList, ContentRightList, Header},
  data () {
    return {
      keyword: '',
      page: 1,
      total: 0,
      tagList: [],
      beanList: [],
      author: {},
      errors: [],
      isLoading: true
    }
  },
  created () {
    this.isLoading = true
    let keyword = this.$route.params.keyword
    let page = this.$route.params.page
    axios.get(`https://shicigefu.net/api/poetry/search?keyword=${keyword}&page=${page}`)
      .then(response => {
        this.setData(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  beforeRouteUpdate (to, from, next) {
    this.isLoading = true
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
      this.isLoading = false
      this.beanList = data.poetryBeanList
      this.keyword = data.keyword
      this.page = data.page
      this.tagList = data.relationTag
      this.total = data.total
      this.author = data.author
      this.initHead({
        title: `与[${this.keyword.substring(this.keyword.lastIndexOf(':') + 1)}]有关的诗词`,
        keywords: `${this.tagList ? Object.keys(this.tagList).join(', ') : ''}`,
        description: `与[${this.keyword.substring(this.keyword.lastIndexOf(':') + 1)}]有关的诗词`
      })
    }
  }
}
</script>
