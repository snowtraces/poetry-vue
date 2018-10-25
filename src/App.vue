<template>
  <div id="app">
    <router-view/>
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
  em {
    color: red;
  }
  .page-nav .nav-item a{
    display: inline-block;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    min-width: 32px;
    line-height: 30px;
    padding: 0 8px;
    text-align: center;
    margin-right: 12px;
    color: #09a;
  }
  .page-nav .nav-item a:hover {
    background: #f2f2f2;
  }
  .page-nav .nav-item a.nav-current{
    background: #2bc;
    border-color: #2bc;
    color: #fff;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
</style>
