<template>
  <section class="content-middle">
    <!--正文-->
    <Card class="single has-shadow" v-if="poetry">
      <div class="card-title poetry-title padding-125">
        <h2>{{poetry.title}}</h2>
        <div class="poetry-author">{{poetry.author}}</div>
      </div>
      <div class="card-content padding-125 no-top-padding">
        <p v-for="(item, index) in poetry.contentList" :key="index"> {{item}} </p>
      </div>
      <CopyButton></CopyButton>
    </Card>
    <!--作者-->
    <Card class="has-shadow " v-if="author">
      <div class="card-title em-color-title padding-125">作者详情</div>
      <div class="card-content is-inline padding-125 no-top-padding is-narrow-row is-justify">
        <div class="author-name is-color font-1125"><a :href="'/#/search/author:' + author.name + '/page/1'">{{author.name}}</a></div>
        <div class="author-dynasty is-white-button font-75 is-round">{{dynasty}}</div>
        <div class="author-desc font-8125">{{author.desc}}</div>
      </div>
      <CopyButton></CopyButton>
    </Card>
    <!--赏析-->
    <Card class="has-shadow shangxi-card" v-if="shangXi">
      <div class="card-title em-color-title padding-125">诗词赏析</div>
      <div class="card-content font-875 padding-125 no-top-padding is-justify">
        <p v-for="(p, index) in contentP(shangXi.content)" :key="index" >{{p}}</p>
        <div class="text-right">作者：{{shangXi.author}}</div>
        <div class="text-right">{{shangXi.source}}</div>
      </div>
      <CopyButton></CopyButton>
    </Card>
  </section>
</template>

<script>
import CopyButton from './CopyButton'
import Card from './base/Card'
export default {
  name: 'ContentMiddleSingle',
  components: {Card, CopyButton},
  props: ['poetry', 'author', 'shangXi'],
  computed: {
    dynasty: function () {
      let dynasty = this.author.dynasty
      return dynasty === 'tang' ? '唐' : dynasty === 'song' ? '宋' : ''
    }
  },
  methods: {
    contentP: function (content) {
      return !content || content.split('\n')
    }
  }
}
</script>

<style scoped>
  .poetry-author {
    font-size: .8em;
    color: #666;
  }
  .single {
    letter-spacing: 0.1em;
  }
  .shangxi-card .card-content p {
    padding-bottom: 1em;
    text-indent: 2em;
  }

</style>
