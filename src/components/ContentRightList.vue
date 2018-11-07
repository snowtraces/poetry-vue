<template>
  <section class="content-right">
    <Card v-if="showTag()" class="has-shadow">
      <div class="card-title light-color-title padding-1">推荐标签</div>
      <div class="card-content padding-1">
        <span class="tag-item" v-for="(item, key) in tagList" :key="key" ><a
          :style="{width: item * 0.45 + '%', background: 'rgba(34, 187, 204, ' + Math.max(item/100, 0.3) + ')'}"
          :href="'/#/search/' + key + '/page/1'">{{key}}</a></span>
      </div>
    </Card>
    <Card v-if="showAuthor()" class="has-shadow">
      <div class="card-title light-color-title padding-1">作者详情</div>
      <div class="card-content padding-1 is-inline is-narrow-row is-justify">
        <div class="author-name is-color font-1125"><a :href="'/#/search/author:' + author.name + '/page/1'">{{author.name}}</a></div>
        <div class="author-dynasty is-white font-75 is-round">{{dynasty}}</div>
        <div class="author-desc font-8125">{{author.desc}}</div>
      </div>
    </Card>
  </section>
</template>

<script>
import Card from './base/Card'
export default {
  name: 'ContentRightList',
  components: {Card},
  props: ['tagList', 'keyword', 'author'],
  methods: {
    showTag: function () {
      return this.tagList && Object.keys(this.tagList).length
    },
    showAuthor: function () {
      return this.author && Object.keys(this.author).length
    }
  },
  computed: {
    dynasty: function () {
      let dynasty = this.author.dynasty
      return dynasty === 'tang' ? '唐' : dynasty === 'song' ? '宋' : ''
    }
  }
}
</script>

<style scoped>
  .content-right {
    top: 35px;
  }
  span.tag-item a{
    display: inline-block;
    line-height: 1;
    background: #ccc;
    padding: 5px;
    color: #fff;
    margin: 0 7px 7px 0;
    border-radius: 3px;
    min-width: 38px !important;
  }
  .tag-item {
    font-size: .875em;
  }
</style>
