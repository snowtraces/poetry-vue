<template>
  <div class="middle-item">
    <div class="item-header">作者详情</div>
    <div class="author-detail item-content">
      <div class="author-name">{{author.name}}</div>
      <div class="author-dynasty">{{dynasty}}</div>
      <div class="author-desc">{{author.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorDetail',
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
  .middle-item {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  }
  .middle-item .item-header {
    padding: 8px 16px 0;
    border-top:1px solid #2bc;
    font-size: 0.9375em;
    font-weight: 800;
    color: rgba(34, 187, 204, 0.8);
  }
  .middle-item .item-content {
    padding: 12px 16px;
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
