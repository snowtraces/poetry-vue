<template>
  <div id="wrap">
    <Header></Header>
    <section id="content">
      <section class="content-left"></section>
      <ContentMiddleSingle :bean="bean"></ContentMiddleSingle>
      <!--<ContentRight :poetry="poetry" ></ContentRight>-->
    </section>
    <section id="footer"></section>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import ContentMiddleSingle from './ContentMiddleSingle'
export default {
  name: 'Single',
  components: {ContentMiddleSingle, Header},
  data () {
    return {
      bean: [],
      errors: []
    }
  },
  created () {
    let id = this.$route.params.id
    axios.get(`https://shicigefu.net/api/poetry/${id}?language=1`)
      .then(response => {
        let data = response.data
        this.bean = data.poetry
      })
      .catch(e => {
        this.errors.push(e)
      })
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
