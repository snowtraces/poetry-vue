<template>
  <section class="content-middle">
    <div class="potery-title">
      {{poetry.title}}
    </div>
    <div class="potery-author">{{poetry.author}}</div>
    <div class="potery-content">
      <p v-for="(item, index) in poetry.contentList" :key="index"> {{item}} </p>
    </div>
    <div class="author">
      <div class="author-name">{{author.name}}</div>
      <div class="author-dynasty">{{dynasty}}</div>
      <div class="author-detail">{{author.desc}}</div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContentMiddle',
  data () {
    return {
      poetry: {},
      author: {},
      shangxi: {},
      errors: []
    }
  },
  computed: {
    dynasty: function () {
      let dynasty = this.author.dynasty
      return dynasty === 'tang' ? '唐' : dynasty === 'song' ? '宋' : ''
    }
  },
  created () {
    axios.get(`https://shicigefu.net/api/poetry/1391?language=1`)
      .then(response => {
        let data = response.data
        this.poetry = data.poetry
        this.author = data.author
        this.shangxi = data.shangxi
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
  .content-middle{
    padding: 16px 24px;
    height: 100%;
    margin-left: 160px;
    margin-right: 300px;
    overflow: auto;
    max-width: 670px;
    border: 1px solid #ccc;
  }

</style>
