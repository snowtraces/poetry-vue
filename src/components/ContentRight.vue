<template>
  <section class="content-right">
    <div class="poetry-meta">
      <span class="meta-tag" v-for="item in poetry.tags" :key="item">{{item}}</span>
      <span class="meta-keyword" v-for="item in poetry.keywords" :key="item">{{item}}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentRight',
  props: ['poetry']
}
</script>

<style scoped>
  .content-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 280px;
  }
  .poetry-meta {
    padding: 8px 16px;
    border: 1px solid #ccc;
    font-size: .875em;
  }
  span.meta-tag {
    display: inline-block;
    line-height: 1;
    background: #ccc;
    padding: 3px 5px;
    color: #fff;
    margin-right: 5px;
    border-radius: 3px;
  }
  span.meta-keyword {
    display: inline-block;
    line-height: 1;
    padding: 3px;
    margin-right: 5px;
    border-radius: 3px;
  }

</style>
