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
</style>
