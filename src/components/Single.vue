<template>
  <div id="wrap">
    <transition name="fade">
      <Loading v-if="isLoading"></Loading>
    </transition>
    <Header></Header>
    <section id="content">
      <ContentMiddleSingle :poetry="poetry" :author="author" :shangXi="shangXi"></ContentMiddleSingle>
      <ContentRightSingle :poetry="poetry" ></ContentRightSingle>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import ContentMiddleSingle from './ContentMiddleSingle'
import ContentRightSingle from './ContentRightSingle'
import Footer from './Footer'
import Loading from './base/Loading'
export default {
  name: 'Single',
  components: {Loading, Footer, ContentMiddleSingle, Header, ContentRightSingle},
  data () {
    return {
      poetry: {},
      author: {},
      shangXi: {},
      errors: [],
      isLoading: true
    }
  },
  created () {
    this.isLoading = true
    let id = this.$route.params.id
    axios.get(`https://shicigefu.net/api/poetry/${id}?language=1`)
      .then(response => {
        this.setData(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  beforeRouteUpdate (to, from, next) {
    this.isLoading = true
    let id = to.params.id
    axios.get(`https://shicigefu.net/api/poetry/${id}?language=1`)
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
      this.poetry = data.poetry
      this.author = data.author
      this.shangXi = data.shangXi
      this.initHead({
        title: `${this.poetry ? this.poetry.title : ''}[${this.poetry ? this.poetry.author : ''}]`,
        keywords: `${this.poetry.tags ? this.poetry.tags.join(', ') + ', '
          : ''}${this.poetry.keywords ? this.poetry.keywords.join(', ') : ''}`,
        description: `${this.poetry.contentList ? this.poetry.contentList.join('') : ''}`
      })
    }
  }
}
</script>

<style scoped>

</style>
