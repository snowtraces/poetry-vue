<template>
  <section class="content-middle">
    <div class="single list-single" v-for="(bean, id) in beanList" :key="id">
      <div class="poetry-title">
        <a :href="getHref(bean.id)" v-html="emKeyword(bean.title)"></a>
      </div>
      <div class="poetry-author" v-html="emAuthor(bean.author)"></div>
      <div class="poetry-content" >
          <span v-html="abstract(bean.contentList)"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentMiddleList',
  props: ['beanList', 'keyword', 'page', 'tagList'],
  methods: {
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
  .content-middle{
    height: 100%;
    margin-left: 160px;
    margin-right: 300px;
    max-width: 670px;
  }
  .single{
    padding: 16px 24px;
    border: 1px solid #ccc;
    margin-bottom: 12px;
  }
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
</style>
