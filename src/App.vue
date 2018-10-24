<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,html {
    margin: 0;
    height: 100%;
  }

  html {
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body, input, textarea, button, em, pre, pre:before, code:before {
    font-family: arial, sans-serif;
    text-size-adjust: 100%;
    font-weight: normal;
    font-style: normal;
    -webkit-text-size-adjust: none
  }

  input[type=button]{
    cursor: pointer;
  }

  body, input, textarea, button {
    color: #212121;
    line-height: 1.85;
    font-size: 1em;
    -webkit-appearance: none;
    border-radius: 0
  }

  div.clearfix {
    clear: both;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
</style>
