<template>
  <section class="content-middle">
    <div class="single">
      <div class="poetry-title">
        <h2>{{bean.title}}</h2>
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
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    margin-bottom: 12px;
    letter-spacing: 0.1em;
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
