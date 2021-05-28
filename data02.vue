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
        <!--element-demo: <el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

<style>
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
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
:element-demo-->
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
