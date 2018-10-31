<template>
  <section class="content-middle" :key="this.keyword + '-' + this.page">
    <div class="search-result-desc" v-html="resultDesc()"></div>
    <div class="single list-single" v-for="(bean, id) in beanList" :key="id">
      <div class="poetry-title">
        <a :href="getHref(bean.id)" v-html="emKeyword(bean.title)"></a>
      </div>
      <div class="poetry-author" v-html="emAuthor(bean.author)"></div>
      <div class="poetry-content" >
          <span v-html="abstract(bean.contentList)"></span>
      </div>
    </div>
    <PageNav :page="page" :total="total" :keyword="keyword" v-if="total"></PageNav>
  </section>
</template>

<script>
import PageNav from './PageNav'
export default {
  name: 'ContentMiddleList',
  components: {PageNav},
  props: ['beanList', 'keyword', 'page', 'tagList', 'total'],
  methods: {
    resultDesc: function () {
      return `获得约 ${this.total || 0} 条结果（第${this.page || 0}页）`
    },
    getHref: function (id) {
      return `/#/poetry/${id}`
    },
    emKeyword: function (content) {
      let keyword = this.keyword
      let re = new RegExp(keyword, 'g')
      return content.replace(re, '<em>' + keyword + '</em>')
    },
    emAuthor: function (author) {
      let keyword = this.keyword
      let re = new RegExp(keyword, 'g')
      return `[${author.replace(re, '<em>' + keyword + '</em>')}]`
    },
    abstract: function (dataList) {
      if (!dataList || dataList.length === 0) {
        return ''
      }
      let content = dataList.join('')
      let maxLen = 144
      let keyword = this.keyword
      let re = new RegExp(keyword, 'g')

      if (content.length <= maxLen) {
        return content.replace(re, '<em>' + keyword + '</em>')
      }

      let index = content.indexOf(keyword)
      if (index === -1) {
        return content.substr(0, maxLen) + '...'
      } else if (index <= maxLen) {
        return content.substr(0, maxLen).replace(re, '<em>' + keyword + '</em>') + '...'
      } else {
        if (content.length > (index + 120)) {
          return '...' + content.substr(index - 24, maxLen).replace(re, '<em>' + keyword + '</em>') + '...'
        } else {
          return '...' + content.substr(index - 24).replace(re, '<em>' + keyword + '</em>')
        }
      }
    }
  }
}
</script>

<style scoped>
  .list-single .poetry-content > span {
    font-size: 0.8125em;
  }
  body .poetry-content{
    line-height: 1.5;
    letter-spacing: 1px;
  }
  .list-single .poetry-title {
    display: inline-block;
    font-size: 1.125em;
  }
  .list-single .poetry-author {
    display: inline-block;
    font-size: 0.8125em;
    margin-left: 4px;
    color: #666;
  }
  .search-result-desc{
    font-size: 0.8em;
    color: #999;
    margin-bottom: 12px;
  }
</style>
