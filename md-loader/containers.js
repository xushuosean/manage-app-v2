/* eslint-disable @typescript-eslint/no-var-requires */
const mdContainer = require('markdown-it-container')
let fs = require('fs')

function isStartTag(nesting) {
  return nesting === 1
}

function isContentTypeFence(tokens, idx) {
  return tokens[idx + 1].type === 'fence'
}

module.exports = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if ( isStartTag(tokens[idx].nesting) ) {
        const description = m && m.length > 1 ? m[1] : ''
        const content = isContentTypeFence(tokens, idx) ? tokens[idx + 1].content : ''
        return `<demo-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--element-demo: ${content}:element-demo-->
        `
      }
      return '</demo-block>'
    },
  })

  md.use(mdContainer, 'test', {
    validate(params) {
      return params.trim().match(/^test\s*(.*)$/)
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^test\s*(.*)$/)
      if (isStartTag(tokens[idx].nesting)) {
        const description = m && m.length > 1 ? m[1] : ''
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        return `<test-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--element-test: ${content}:element-test-->
        `
      }
      return '</test-block>'
    },
  })

  md.use(mdContainer, 'tip')
  md.use(mdContainer, 'warning')
}
