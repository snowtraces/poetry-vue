<template>
  <section class="content-middle">
    <div class="single">
      <div class="poetry-title">
        <h2>{{poetry.title}}</h2>
      </div>
      <div class="poetry-author">{{poetry.author}}</div>
      <div class="poetry-content">
        <p v-for="(item, index) in poetry.contentList" :key="index"> {{item}} </p>
      </div>
      <CopyButton></CopyButton>
    </div>
    <AuthorDetail :author="author" v-if="author"></AuthorDetail>
    <ShangXi :shangXi="shangXi" v-if="shangXi"></ShangXi>
  </section>
</template>

<script>
import AuthorDetail from './AuthorDetail'
import ShangXi from './ShangXi'
import CopyButton from './CopyButton'
export default {
  name: 'ContentMiddleSingle',
  components: {CopyButton, ShangXi, AuthorDetail},
  props: ['poetry', 'author', 'shangXi']
}
</script>

<style scoped>
  .single{
    padding: 16px 24px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    margin-bottom: 12px;
    letter-spacing: 0.1em;
    position: relative;
  }
  .poetry-title h2 {
    font-size: 18px;
    font-weight: 600;
  }
  .poetry-author {
    font-size: .8em;
    color: #666;
    padding-bottom: 1em;
  }
</style>
