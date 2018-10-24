<template>
  <section class="content-middle">
    <div class="single">
      <div class="poetry-title">
        <a>{{bean.title}}</a>
      </div>
      <div class="poetry-author">{{bean.author}}</div>
      <div class="poetry-content">
        <p v-for="(item, index) in bean.contentList" :key="index"> {{item}} </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentMiddleSingle',
  props: ['bean'],
  methods: {
  }
}
</script>

<style scoped>
  .content-middle{
    height: 100%;
    margin-left: 160px;
    margin-right: 300px;
    max-width: 670px;
  }
  .single{
    padding: 16px 24px;
    border: 1px solid #ccc;
    margin-bottom: 12px;
  }
</style>
