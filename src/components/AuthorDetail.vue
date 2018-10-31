<template>
  <div class="middle-item">
    <div class="item-header">作者详情</div>
    <div class="author-detail item-content">
      <div class="author-name"><a :href="'/#/search/author:' + author.name + '/page/1'">{{author.name}}</a></div>
      <div class="author-dynasty">{{dynasty}}</div>
      <div class="author-desc">{{author.desc}}</div>
    </div>
    <CopyButton></CopyButton>
  </div>
</template>

<script>
import CopyButton from './CopyButton'
export default {
  name: 'AuthorDetail',
  components: {CopyButton},
  props: ['author'],
  computed: {
    dynasty: function () {
      let dynasty = this.author.dynasty
      return dynasty === 'tang' ? '唐' : dynasty === 'song' ? '宋' : ''
    }
  }
}
</script>

<style scoped>

  .author-detail{
    padding: 16px 24px;
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
  body .author-detail .author-dynasty {
    line-height: 1;
    display: inline-block;
  }
</style>
