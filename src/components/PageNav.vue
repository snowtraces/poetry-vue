<template>
  <div class="page-nav">
    <div class="nav-pre" @click="navPre">上一页</div>
    <div class="nav-num" v-html="pageNav(this.page)"></div>
    <div class="nav-next" @click="navNext">下一页</div>
  </div>
</template>

<script>
export default {
  name: 'PageNav',
  props: ['page', 'total', 'keyword'],
  computed: {
    max: function () {
      return Math.ceil(this.total * 1.0 / 10)
    }
  },
  methods: {
    pageNav: function (page) {
      let nav = []
      let max = this.max

      let before = Math.max(page - 2, 1)
      let after = Math.min(page + 2, max)

      before > 1 && nav.push(`<span class="nav-item"><a class="${page === 1 ? 'nav-current' : ''}" href="/#/search/${this.keyword}/page/1">1</a></span>`)
      before > 2 && nav.push(`<span class="nav-item"><a>...</a></span>`)
      for (let i = before; i <= after; i++) {
        let _nav = `<span class="nav-item"><a class="${page === i ? 'nav-current' : ''}" href="/#/search/${this.keyword}/page/${i}">${i}</a></span>`
        nav.push(_nav)
      }
      after < max - 1 && nav.push(`<span class="nav-item"><a>...</a></span>`)
      after < max && nav.push(`<span class="nav-item"><a class="${page === max ? 'nav-current' : ''}" href="/#/search/${this.keyword}/page/${max}">${max}</a></span>`)

      return nav.join('')
    },
    navPre: function () {
      if (this.page > 1) {
        this.$router.push({
          path: `/search/${this.keyword}/page/${this.page - 1}`
        })
      }
    },
    navNext: function () {
      if (this.page < this.max) {
        this.$router.push({
          path: `/search/${this.keyword}/page/${this.page + 1}`
        })
      }
    }
  }
}
</script>

<style scoped>
  .page-nav > div {
    display: inline-block;
    margin-bottom: 5px;
  }
  .page-nav .nav-pre, .page-nav .nav-next{
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    min-width: 32px;
    line-height: 30px;
    padding: 0 8px;
    text-align: center;
    margin-right: 12px;
    color: #09a;
    font-size: 0.875em;
    cursor: pointer;
  }
  .page-nav .nav-pre:hover, .page-nav .nav-next:hover {
    background: #f2f2f2;
  }
</style>
