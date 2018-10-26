<template>
  <div id="app">
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "css/main.css";
</style>
