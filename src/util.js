export default{
  install (Vue, options) {
    Vue.prototype.initHead = function (data) {
      if (data == null) {
        return
      }
      window.document.title = data.title
      window.document.head.querySelector('meta[name=keywords]').content = data.keywords
      window.document.head.querySelector('meta[name=description]').content = data.description.substr(0, 144)
    }
  }
}
