<template>
  <section class="content-middle" :key="this.keyword + '-' + this.page">
    <Card class="has-shadow padding-1 font-8125 is-gray-white">
      <div v-html="resultDesc()"></div>
    </Card>
    <Card class="single has-shadow" v-for="(bean, id) in beanList" :key="id">
      <div class="card-title is-inline padding-125 no-bottom-padding">
        <a class="font-1125" :href="'/#/poetry/' + bean.id" v-html="emKeyword(bean.title, keyword)"></a>
        <div class="font-8125 is-gray" v-html="'[' + emKeyword(bean.author, keyword) + ']'"></div>
      </div>
      <div class="card-content padding-125 no-top-padding" >
          <span class="font-8125" v-html="emKeyword(abstract(bean.contentList.join(''), keyword), keyword)"></span>
      </div>
    </Card>

    <PageNav :page="page" :total="total" :keyword="keyword" v-if="total"></PageNav>
  </section>
</template>

<script>
import PageNav from './PageNav'
import Card from './base/Card'
export default {
  name: 'ContentMiddleList',
  components: {Card, PageNav},
  props: ['beanList', 'keyword', 'page', 'tagList', 'total'],
  methods: {
    resultDesc: function () {
      return `获得约 ${this.total || 0} 条结果（第${this.page || 0}页）`
    }
  }
}
</script>

<style scoped>
  .single {
    line-height: 1.5;
    letter-spacing: 1px;
  }
</style>
