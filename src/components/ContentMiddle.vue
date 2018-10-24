<template>
  <section class="content-middle">
    <div class="poetry-title">
      {{poetry.title}}
    </div>
    <div class="poetry-author">{{poetry.author}}</div>
    <div class="poetry-content">
      <p v-for="(item, index) in poetry.contentList" :key="index"> {{item}} </p>
    </div>
    <div class="author">
      <div class="author-name">{{author.name}}</div>
      <div class="author-dynasty">{{dynasty}}</div>
      <div class="author-detail">{{author.desc}}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentMiddle',
  props: ['poetry', 'author'],
  computed: {
    dynasty: function () {
      let dynasty = this.author.dynasty
      return dynasty === 'tang' ? '唐' : dynasty === 'song' ? '宋' : ''
    }
  }
}
</script>

<style scoped>
  .content-middle{
    padding: 16px 24px;
    height: 100%;
    margin-left: 160px;
    margin-right: 300px;
    overflow: auto;
    max-width: 670px;
    border: 1px solid #ccc;
  }
  .author > div {
    display: inline;
  }
  body .author{
    line-height: 1.375;
  }
  .author-name{
    font-size: 1.125em;
  }
  .author-dynasty{
    display: inline-block;
    font-size: 0.75em;
    background: #999;
    color: #fff;
    padding: 2px 3px;
    border-radius: 50%;
  }
  .author-detail{
    font-size: 0.875em;
  }

</style>
