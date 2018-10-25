<template>
  <div id="wrap">
    <Header></Header>
    <section id="content">
      <section class="content-left"></section>
      <ContentMiddleSingle :bean="bean"></ContentMiddleSingle>
      <ContentRightSingle :poetry="bean" ></ContentRightSingle>
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
      bean: [],
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
      this.bean = data.poetry
    }
  }
}
</script>

<style scoped>
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
