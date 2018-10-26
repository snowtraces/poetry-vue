<template>
  <section id="header">
    <div id="header-title">
      <h1>
        <a href="/">{{title}}</a>
      </h1>
    </div>
    <div id="header-search">
      <input type="text" :value="keyword" @keyup.enter="search" name="keyword" autocomplete="off" placeholder="">
      <input type="button" name="doSearch" value="搜索" @click="search">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: ['inputKeyword'],
  data () {
    return {
      title: '诗词歌赋'
    }
  },
  computed: {
    keyword () {
      return this.inputKeyword
    }
  },
  methods: {
    search: function () {
      let keyword = document.querySelector('input[name=keyword]').value
      if (!keyword) {
        return
      }
      this.$router.push({
        path: `/search/${keyword}/page/1`
      })
    }
  }
}
</script>

<style scoped>
  #header {
    background: #eee;
    height: 100px;
    margin-bottom: 24px;
  }
  h1 {
    margin: 0;
  }
  #header-title {
    width: 150px;
    line-height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 1.25em;
  }
  #header-search{
    margin-left: 150px;
    margin-right: 300px;
    padding: 30px 0;
    max-width: 670px;
    position: relative;
  }
  #header-search input[name=keyword]{
    width: 100%;
    padding: 5px 60px 5px 12px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }

  #header-search input[name=doSearch] {
    padding: 4px 14px;
    letter-spacing: 3px;
    background: transparent;
    position: absolute;
    top: 32px;
    right: 0;
    color: #2bc;
  }

  @media (max-width: 1200px) {
    #header-search{
      max-width: 536px;
      margin-right: 316px;
    }
  }

</style>
