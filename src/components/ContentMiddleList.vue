<template>
  <section class="content-middle">
    <div class="single list-single" v-for="(bean, id) in beanList" :key="id">
      <div class="poetry-title">
        <a :href="getHref(bean.id)">{{bean.title}}</a>
      </div>
      <div class="poetry-author">[{{bean.author}}]</div>
      <div class="poetry-content">
        <span v-for="(item, index) in bean.contentList" :key="index"> {{item}} </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentMiddleList',
  props: ['beanList'],
  methods: {
    getHref: function (id) {
      return `/#/poetry/${id}`
    }
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
  .list-single .poetry-content > span {
    font-size: 0.8125em;
  }
  body .poetry-content{
    line-height: 1.5;
  }
  .list-single .poetry-title {
    display: inline-block;
    font-size: 1.125em;
  }
  .list-single .poetry-author {
    display: inline-block;
    font-size: 0.8125em;
    margin-left: 4px;
  }
</style>
