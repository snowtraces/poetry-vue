<template>
  <section class="content-right">
    <div class="sidebar-item" v-show="showTag()">
      <div class="item-header">推荐标签</div>
      <div class="item-content tag-list">
        <span class="tag-item" v-for="(item, key) in tagList" :key="key" ><a
          :style="{width: item * .45 + '%', background: 'rgba(34, 187, 204, ' + Math.max(item/100, 0.3) + ')'}"
          :href="'/#/search/' + key + '/page/1'">{{key}}</a></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentRightList',
  props: ['tagList', 'keyword'],
  methods: {
    showTag: function () {
      return this.tagList && Object.keys(this.tagList).length
    }
  }
}
</script>

<style scoped>
  .content-right {
    position: absolute;
    top: 35px;
    right: 0;
    width: 280px;
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
    font-size: .875em;
  }
</style>
