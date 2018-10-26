<template>
  <div class="middle-item">
    <div class="item-header">诗词赏析</div>
    <div class="item-content">
      <div class="shangxi-content">
        <p v-for="(p, index) in contentP(shangXi.content)" :key="index" >{{p}}</p>
      </div>
      <div class="shangxi-author">作者：{{shangXi.author}}</div>
      <div class="shangxi-source">{{shangXi.source}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShangXi',
  props: ['shangXi'],
  methods: {
    contentP: function (content) {
      return !content || content.split('\n')
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
    font-size: .875em;
  }

  .shangxi-content{
    margin-bottom: 12px;
    letter-spacing: 1px;
    text-align: justify;
  }
  .shangxi-content p {
    padding-bottom: 1em;
    text-indent: 2em;
  }
  .shangxi-source, .shangxi-author {
    text-align: right;
  }
</style>
