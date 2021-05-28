
  <template>
    <section class="content element-doc">
      <h2 id="card-qia-pian"><a class="header-anchor" href="#card-qia-pian">¶</a> Card 卡片</h2>
<p>将信息聚合在卡片容器中展示。</p>
<h3 id="dai-tu-pian"><a class="header-anchor" href="#dai-tu-pian">¶</a> 带图片</h3>
<p>可配置定义更丰富的内容展示。</p>
<test-block>
        <div><p>配置<code>body-style</code>属性来自定义<code>body</code>部分的<code>style</code>，我们还使用了布局组件</p>
</div>
        <!--element-test: <h1>hello here is h1 tag</h1>
:element-test-->
        <pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>hello here is h1 tag<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
</code></pre>
</test-block><demo-block>
        <div><p>配置<code>body-style</code>属性来自定义<code>body</code>部分的<code>style</code>，我们还使用了布局组件。</p>
</div>
        <template #source><element-demo0 /></template>
        <template #highlight><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-col :span=&quot;8&quot; v-for=&quot;(o, index) in 2&quot; :key=&quot;o&quot; :offset=&quot;index &gt; 0 ? 2 : 0&quot;&gt;
    &lt;el-card :body-style=&quot;{ padding: '0px' }&quot;&gt;
      &lt;img src=&quot;https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png&quot; class=&quot;image&quot;&gt;
      &lt;div style=&quot;padding: 14px;&quot;&gt;
        &lt;span&gt;好吃的汉堡&lt;/span&gt;
        &lt;div class=&quot;bottom&quot;&gt;
          &lt;time class=&quot;time&quot;&gt;{{ currentDate }}&lt;/time&gt;
          &lt;el-button type=&quot;text&quot; class=&quot;button&quot;&gt;操作按钮&lt;/el-button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-card&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
&lt;/style&gt;

&lt;script&gt;
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>header</td>
<td>设置 header，也可以通过 <code>slot#header</code> 传入 DOM</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>body-style</td>
<td>设置 body 的样式</td>
<td>object</td>
<td>—</td>
<td>{ padding: '20px' }</td>
</tr>
<tr>
<td>shadow</td>
<td>设置阴影显示时机</td>
<td>string</td>
<td>always / hover / never</td>
<td>always</td>
</tr>
</tbody>
</table>

      <right-nav />
    </section>
  </template>
  <script lang="ts">
      import * as Vue from 'vue';
      export default {
        name: 'component-doc',
        components: {
          "element-demo0": (function() {
    
    const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createBlock: _createBlock, createVNode: _createVNode, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx } = Vue

const _hoisted_1 = /*#__PURE__*/_createVNode("img", {
  src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
  class: "image"
}, null, -1 /* HOISTED */)
const _hoisted_2 = { style: {"padding":"14px"} }
const _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "好吃的汉堡", -1 /* HOISTED */)
const _hoisted_4 = { class: "bottom" }
const _hoisted_5 = { class: "time" }
const _hoisted_6 = /*#__PURE__*/_createTextVNode("操作按钮")

function render(_ctx, _cache) {
  const _component_el_button = _resolveComponent("el-button")
  const _component_el_card = _resolveComponent("el-card")
  const _component_el_col = _resolveComponent("el-col")
  const _component_el_row = _resolveComponent("el-row")

  return (_openBlock(), _createBlock("div", null, [
    _createVNode(_component_el_row, null, {
      default: _withCtx(() => [
        (_openBlock(), _createBlock(_Fragment, null, _renderList(2, (o, index) => {
          return _createVNode(_component_el_col, {
            span: 8,
            key: o,
            offset: index > 0 ? 2 : 0
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_card, { "body-style": { padding: '0px' } }, {
                default: _withCtx(() => [
                  _hoisted_1,
                  _createVNode("div", _hoisted_2, [
                    _hoisted_3,
                    _createVNode("div", _hoisted_4, [
                      _createVNode("time", _hoisted_5, _toDisplayString(_ctx.currentDate), 1 /* TEXT */),
                      _createVNode(_component_el_button, {
                        type: "text",
                        class: "button"
                      }, {
                        default: _withCtx(() => [
                          _hoisted_6
                        ]),
                        _: 1 /* STABLE */
                      })
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["offset"])
        }), 64 /* STABLE_FRAGMENT */))
      ]),
      _: 1 /* STABLE */
    })
  ]))
}
  
    const democomponentExport = {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
  