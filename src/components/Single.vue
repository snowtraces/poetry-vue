<template>
  <div id="wrap">
    <Header></Header>
    <section id="content">
      <ContentMiddleSingle :poetry="poetry" :author="author" :shangXi="shangXi"></ContentMiddleSingle>
      <ContentRightSingle :poetry="poetry" ></ContentRightSingle>
    </section>
    <section id="footer"></section>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import ContentMiddleSingle from './ContentMiddleSingle'
import ContentRightSingle from './ContentRightSingle'
export default {
  name: 'Single',
  components: {ContentMiddleSingle, Header, ContentRightSingle},
  data () {
    return {
      poetry: {},
      author: {},
      shangXi: {},
      errors: []
    }
  },
  beforeRouteEnter (to, from, next) {
    let id = to.params.id
    axios.get(`https://shicigefu.net/api/poetry/${id}?language=1`)
      .then(response => {
        next(vm => vm.setData(response.data))
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  beforeRouteUpdate (to, from, next) {
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
      this.poetry = data.poetry
      this.author = data.author
      this.shangXi = data.shangXi
    }
  }
}
</script>

<style scoped>

</style>
