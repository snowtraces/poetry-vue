<template>
  <section id="header">
    <div id="header-title">
      <h1>
        <a href="/#/" :title="title"><Logo></Logo></a>
      </h1>
    </div>
    <div id="header-search">
      <input type="text" :value="keyword" @keyup.enter="search" name="keyword" autocomplete="off"
             :placeholder="searchHint">
      <input type="button" name="doSearch" value="搜索" @click="search">
    </div>
  </section>
</template>

<script>
import Logo from './base/Logo'
export default {
  name: 'Header',
  components: {Logo},
  props: ['inputKeyword'],
  data () {
    return {
      title: '诗词歌赋',
      searchHint: '请输入 作者/标题/内容'
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

</style>
