<template>
  <section class="content-right">
    <Card  v-if="showTag()" class="has-shadow">
      <div class="card-title light-color-title padding-1">关键词</div>
      <div class="card-content padding-1 font-875">
        <a class="meta-tag is-inline-block is-background-color is-radius-5 " v-for="item in poetry.tags" :key="item + '-tag'"
           :href="'/#/search/tag:' + item + '/page/1'">{{item}}</a>
        <a class="meta-keyword is-inline-block" v-for="item in poetry.keywords" :key="item + '-keyword'"
           :href="'/#/search/' + item + '/page/1'">{{item}}</a>
      </div>
    </Card>
  </section>
</template>

<script>
import Card from './base/Card'
export default {
  name: 'ContentRightSingle',
  components: {Card},
  props: ['poetry'],
  methods: {
    showTag: function () {
      let poetry = this.poetry
      return (poetry.tags && poetry.tags.length) || (poetry.keywords && poetry.keywords.length)
    }
  }
}
</script>

<style scoped>
  a.meta-tag {
    line-height: 1;
    padding: 6px 10px;
    margin: 0 7px 7px 0;
    color: #fff;
  }
  a.meta-keyword {
    line-height: 1;
    padding: 10px;
  }

</style>
