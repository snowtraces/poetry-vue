<template>
  <div class='middle-item'>
    <div class='item-header'>诗词赏析</div>
    <div class='item-content'>
      <div class='shangxi-content'>
        <p v-for='(p, index) in contentP(shangXi.content)' :key='index' >{{p}}</p>
      </div>
      <div class='shangxi-author'>作者：{{shangXi.author}}</div>
      <div class='shangxi-source'>{{shangXi.source}}</div>
    </div>
    <CopyButton></CopyButton>
  </div>
</template>

<script>
import CopyButton from './CopyButton'
export default {
  name: 'ShangXi',
  components: {CopyButton},
  props: ['shangXi'],
  methods: {
    contentP: function (content) {
      return !content || content.split('\n')
    }
  }
}
</script>

<style scoped>
  .middle-item .item-content {
    font-size: .875em;
  }

  .shangxi-content{
    margin-bottom: 12px;
    letter-spacing: 0.5px;
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
