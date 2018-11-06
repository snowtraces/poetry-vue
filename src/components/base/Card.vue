<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
  .card {
    position: relative;
    margin-bottom: 0.75em;
  }
  .card .card-title{
    padding: 1em 1.5em 0;
  }
  .card .card-title h2 {
    font-size: 1.125em;
    font-weight: 600;
  }
  .card .card-content {
    padding: 1em 1.5em;
    text-align: justify;
  }

</style>
