<template>
  <section class="content-right">
    <div class="sidebar-item" v-if="showTag()">
      <div class="item-header">关键词</div>
      <div class="item-content tag-list">
        <a class="meta-tag" v-for="item in poetry.tags" :key="item + '-tag'"
          :href="'/#/search/tag:' + item + '/page/1'">{{item}}</a>
        <a class="meta-keyword" v-for="item in poetry.keywords" :key="item + '-keyword'"
           :href="'/#/search/' + item + '/page/1'">{{item}}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentRightSingle',
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
  .sidebar-item {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  }
  .sidebar-item .item-header {
    padding: 8px 16px;
    border-bottom:1px solid #2bc;
    font-size: 0.9375em;
  }
  .sidebar-item .item-content {
    padding: 12px 16px;
    font-size: .875em;
  }
  a.meta-tag {
    display: inline-block;
    line-height: 1;
    background: #2bc;
    padding: 6px 10px;
    margin: 0 7px 7px 0;
    color: #fff;
    border-radius: 5px;
  }
  a.meta-keyword {
    display: inline-block;
    line-height: 1;
    padding: 10px;
    border-radius: 3px;
  }

</style>
