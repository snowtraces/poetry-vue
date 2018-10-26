<template>
  <transition name="fade">
    <button class='copy' @click='copyContent($event)' >复制</button>
  </transition>
</template>

<script>
export default {
  name: 'CopyButton',
  methods: {
    copyContent: function (e) {
      let current = e.target
      let content = current.parentElement.outerText
      content = content.substring(0, content.length - 4).replace(/\n\n/g, '\n')

      let target = document.createElement('textarea')
      target.style.position = 'absolute'
      target.style.opacity = 0
      target.style.left = '-99999px'
      target.style.top = '0'
      target.id = 'tmp_copy_id'
      current.append(target)
      target.textContent = content

      target.focus()
      target.setSelectionRange(0, target.value.length)
      document.execCommand('copy')
      target.remove()

      current.innerText = '成功'
      current.style.color = '#666'
      setTimeout(function () {
        current.innerText = '复制'
        current.style.color = '#2bc'
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .copy{
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    font-size: 0.8125em;
    border: 1px solid;
    padding: 0 8px;
    color: #2bc;
    border-radius: 4px;
    cursor: pointer;
    -webkit-transition: prop 1s;
    -moz-transition: prop 1s;
    -ms-transition: prop 1s;
    -o-transition: prop 1s;
    transition: prop 1s;
  }
</style>
