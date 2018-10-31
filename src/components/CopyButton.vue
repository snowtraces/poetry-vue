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
      target.style.opacity = '0'
      target.style.width = '0'
      target.style.height = '0'
      target.style.left = '0'
      target.style.top = '0'
      target.style.zIndex = '-9999'
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
    background: #fff;
    font-size: 0.8125em;
    border: 1px solid;
    padding: 0 8px;
    color: #2bc;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.85;
  }
</style>
