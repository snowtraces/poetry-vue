<template>
  <section class="content-right">
    <div class="sidebar-item" v-if="showTag()">
      <div class="item-header">推荐标签</div>
      <div class="item-content tag-list">
        <span class="tag-item" v-for="(item, key) in tagList" :key="key" ><a
          :style="{width: item * 0.45 + '%', background: 'rgba(34, 187, 204, ' + Math.max(item/100, 0.3) + ')'}"
          :href="'/#/search/' + key + '/page/1'">{{key}}</a></span>
      </div>
    </div>
    <div class="sidebar-item" v-if="showAuthor()">
      <div class="item-header">作者详情</div>
      <div class="item-content author-detail">
        <div class="author-name"><a :href="'/#/search/author:' + author.name + '/page/1'">{{author.name}}</a></div>
        <div class="author-dynasty">{{dynasty}}</div>
        <div class="author-desc">{{author.desc}}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentRightList',
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
  }
  .tag-item {
    font-size: .875em;
  }

  .author-detail{
    padding: 16px 24px;
    margin-bottom: 12px;
    text-align: justify;
  }
  .author-detail > div {
    display: inline;
  }
  .author-name{
    font-size: 1.125em;
  }
  .author-dynasty{
    font-size: 0.75em;
    background: #2bc;
    color: #fff;
    padding: 1px;
    border-radius: 50%;
  }
  .author-desc{
    font-size: 0.8125em;
  }
  body .author-detail{
    line-height: 1.375;
  }
</style>
