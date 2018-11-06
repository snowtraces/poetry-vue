export default{
  install (Vue, options) {
    /**
     * head初始化
     * @param data
     */
    Vue.prototype.initHead = function (data) {
      if (data == null) {
        return
      }
      window.document.title = data.title
      window.document.head.querySelector('meta[name=keywords]').content = data.keywords
      window.document.head.querySelector('meta[name=description]').content = data.description.substr(0, 144)
    }
    /**
     * 强调关键字
     * @param content
     * @param keyword
     * @returns {*}
     */
    Vue.prototype.emKeyword = function (content, keyword) {
      if (!content) {
        return ''
      }
      let re = new RegExp(keyword, 'g')
      return content.replace(re, '<em>' + keyword + '</em>')
    }

    /**
     * 字符串截取
     * @param content
     * @param keyword
     * @param maxLen
     * @returns {*}
     */
    Vue.prototype.abstract = function (content, keyword, maxLen) {
      let preLen = 24
      maxLen = maxLen || 144

      if (content.length <= maxLen) {
        return content
      }

      let index = content.indexOf(keyword)
      if (index === -1 || index <= maxLen) {
        return content.substr(0, maxLen) + '...'
      } else {
        if (content.length > (index + maxLen - preLen)) {
          return '...' + content.substr(index - preLen, maxLen) + '...'
        } else {
          return '...' + content.substr(index - preLen)
        }
      }
    }
  }
}
