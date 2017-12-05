webpackJsonp([4],{1910:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(1961),l=o.n(n),i=o(2067),a=o(3),p=a(l.a,i.a,null,null,null);e.default=p.exports},1961:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(1996),l=function(t){return t&&t.__esModule?t:{default:t}}(n);o(2026),e.default={name:"login",data:function(){return{code:"",disabled:!1,columns1:[{title:"属性",key:"attr",width:100},{title:"说明",key:"content"},{title:"类型",key:"type",width:100},{title:"默认值",key:"default",width:100}],columns2:[{title:"事件名",key:"attr",width:100},{title:"说明",key:"content"},{title:"返回值",key:"default",width:100}],columns3:[{title:"名称",key:"attr",width:100},{title:"说明",key:"content"}],data1:[{attr:"content",content:"正文的内容，",type:"String | Number",default:"空"},{attr:"placement",content:"提示框出现的位置，可选值为top top-start top-end bottom bottom-start bottom-end left left-start left-end right right-start right-end",type:"string",default:"bottom"},{attr:"disabled",content:"是否禁用提示框",type:"boolean",default:"false"},{attr:"delay",content:"延迟显示，单位毫秒",type:"number",default:"0"},{attr:"always",content:"是否总是可见",type:"boolean",default:"false"},{attr:"transfer",content:"是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果",type:"boolean",default:"false"}],data2:[{attr:"on-popper-show",content:"在提示框显示时触发",type:"",default:"无"},{attr:"on-popper-hide",content:"在提示框消失时触发",type:"",default:"无"}],data3:[{attr:"无",content:"主体内容",type:"",default:""},{attr:"content",content:"提示框内容，定义此 slot 时，会覆盖 props content，只在非 confirm 模式下有效",type:"",default:""}]}},created:function(){this.code=l.default},mounted:function(){},methods:{}}},1996:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};n.base='\n<template>\n  <e-tooltip content="这里是提示文字">\n        当鼠标经过这段文字时，会显示一个气泡框\n    </e-tooltip>\n</template>\n<script>\n  export default {\n\t\n  }\n<\/script>\n\t',n.position='\n<template>\n  <div class="tooltip-doc-top">\n        <e-tooltip content="Top Left 文字提示" placement="top-start">\n            <e-button>上左</e-button>\n        </e-tooltip>\n        <e-tooltip content="Top Center 文字提示" placement="top">\n            <e-button>上边</e-button>\n        </e-tooltip>\n        <e-tooltip content="Top Right 文字提示" placement="top-end">\n            <e-button>上右</e-button>\n        </e-tooltip>\n    </div>\n    <div class="tooltip-doc-center">\n        <div class="tooltip-doc-center-left">\n            <e-tooltip content="Left Top 文字提示" placement="left-start">\n                <e-button>左上</e-button>\n            </e-tooltip><br><br>\n            <e-tooltip content="Left Center 文字提示" placement="left">\n                <e-button>左边</e-button>\n            </e-tooltip><br><br>\n            <e-tooltip content="Left Bottom 文字提示" placement="left-end">\n                <e-button>左下</e-button>\n            </e-tooltip>\n        </div>\n        <div class="tooltip-doc-center-right">\n            <e-tooltip content="Right Top 文字提示" placement="right-start">\n                <e-button>右上</e-button>\n            </e-tooltip><br><br>\n            <e-tooltip content="Right Center 文字提示" placement="right">\n                <e-button>右边</e-button>\n            </e-tooltip><br><br>\n            <e-tooltip content="Right Bottom 文字提示" placement="right-end">\n                <e-button>右下</e-button>\n            </e-tooltip>\n        </div>\n    </div>\n    <div class="tooltip-doc-bottom">\n        <e-tooltip content="Bottom Left 文字提示" placement="bottom-start">\n            <e-button>下左</e-button>\n        </e-tooltip>\n        <e-tooltip content="Bottom Center 文字提示" placement="bottom">\n            <e-button>下边</e-button>\n        </e-tooltip>\n        <e-tooltip content="Bottom Right 文字提示" placement="bottom-end">\n            <e-button>下右</e-button>\n        </e-tooltip>\n    </div>\n</template>\n<script>\n  export default {\n\t\n  }\n<\/script>\n\t',n.custom='\n<template>\n  <e-tooltip placement="top">\n        <e-button>多行</e-button>\n        <div slot="content">\n            <p>显示多行信息</p>\n            <p><i>可以自定义样式</i></p>\n        </div>\n    </e-tooltip>\n</template>\n<script>\n  export default {\n\t\n  }\n<\/script>\n\t',n.disabled='\n<template>\n   <e-tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">\n        <e-button @click="disabled = true">点击关闭提示</e-button>\n    </e-tooltip>\n</template>\n<script>\n  export default {\n\tdata() {\n\t\t\treturn {\t\t\n\t\t\t\tdisabled: false\n\t\t\t}\n\t\t},\n  }\n<\/script>\n\t',n.delay='\n<template>\n  <e-tooltip placement="top" content="Tooltip 文字提示" :delay="1000">\n\t\t\t        <e-button @click="disabled = true">延时1秒显示</e-button>\n\t\t\t    </e-tooltip>\n</template>\n<script>\n  export default {\n\t\n  }\n<\/script>\n\t',e.default=n},2011:function(t,e,o){e=t.exports=o(1871)(!1),e.push([t.i,".tooltip-doc-bottom,.tooltip-doc-top{text-align:center}.tooltip-doc-center{width:300px;margin:10px auto;overflow:hidden}.tooltip-doc-center-left{float:left}.tooltip-doc-center-right{float:right}",""])},2026:function(t,e,o){var n=o(2011);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(1872)("1298fd07",n,!0)},2067:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container tooltip-doc"},[o("h1",[t._v("Tooltip 文字提示")]),t._v(" "),o("h3",[t._v("基础用法")]),t._v(" "),o("e-code",[o("div",{slot:"head"},[o("e-tooltip",{attrs:{content:"这里是提示文字"}},[t._v("\n\t\t\t        当鼠标经过这段文字时，会显示一个气泡框\n\t\t\t    ")])],1),t._v(" "),o("div",{slot:"left"},[t._v(t._s(t.code.base))]),t._v(" "),o("div",{slot:"right"},[o("p",[t._v("基础用法")]),t._v("\n\t\t\t\t注意 Tooltip 内的文本使用了 white-space: nowrap;，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 white-space: normal;。\n\t\t\t")])]),t._v(" "),o("h3",[t._v("位置")]),t._v(" "),o("e-code",[o("div",{slot:"head"},[o("div",{staticClass:"tooltip-doc-top"},[o("e-tooltip",{attrs:{content:"Top Left 文字提示",placement:"top-start"}},[o("e-button",[t._v("上左")])],1),t._v(" "),o("e-tooltip",{attrs:{content:"Top Center 文字提示",placement:"top"}},[o("e-button",[t._v("上边")])],1),t._v(" "),o("e-tooltip",{attrs:{content:"Top Right 文字提示",placement:"top-end"}},[o("e-button",[t._v("上右")])],1)],1),t._v(" "),o("div",{staticClass:"tooltip-doc-center"},[o("div",{staticClass:"tooltip-doc-center-left"},[o("e-tooltip",{attrs:{content:"Left Top 文字提示",placement:"left-start"}},[o("e-button",[t._v("左上")])],1),o("br"),o("br"),t._v(" "),o("e-tooltip",{attrs:{content:"Left Center 文字提示",placement:"left"}},[o("e-button",[t._v("左边")])],1),o("br"),o("br"),t._v(" "),o("e-tooltip",{attrs:{content:"Left Bottom 文字提示",placement:"left-end"}},[o("e-button",[t._v("左下")])],1)],1),t._v(" "),o("div",{staticClass:"tooltip-doc-center-right"},[o("e-tooltip",{attrs:{content:"Right Top 文字提示",placement:"right-start"}},[o("e-button",[t._v("右上")])],1),o("br"),o("br"),t._v(" "),o("e-tooltip",{attrs:{content:"Right Center 文字提示",placement:"right"}},[o("e-button",[t._v("右边")])],1),o("br"),o("br"),t._v(" "),o("e-tooltip",{attrs:{content:"Right Bottom 文字提示",placement:"right-end"}},[o("e-button",[t._v("右下")])],1)],1)]),t._v(" "),o("div",{staticClass:"tooltip-doc-bottom"},[o("e-tooltip",{attrs:{content:"Bottom Left 文字提示",placement:"bottom-start"}},[o("e-button",[t._v("下左")])],1),t._v(" "),o("e-tooltip",{attrs:{content:"Bottom Center 文字提示",placement:"bottom"}},[o("e-button",[t._v("下边")])],1),t._v(" "),o("e-tooltip",{attrs:{content:"Bottom Right 文字提示",placement:"bottom-end"}},[o("e-button",[t._v("下右")])],1)],1)]),t._v(" "),o("div",{slot:"left"},[t._v(t._s(t.code.position))]),t._v(" "),o("div",{slot:"right"},[o("p",[t._v("组件提供了12个不同的方向显示Tooltip，具体配置可查看API。")])])]),t._v(" "),o("h3",[t._v("自定义内容")]),t._v(" "),o("e-code",[o("div",{slot:"head"},[o("e-tooltip",{attrs:{placement:"top"}},[o("e-button",[t._v("多行")]),t._v(" "),o("div",{slot:"content"},[o("p",[t._v("显示多行信息")]),t._v(" "),o("p",[o("i",[t._v("可以自定义样式")])])])],1)],1),t._v(" "),o("div",{slot:"left"},[t._v(t._s(t.code.custom))]),t._v(" "),o("div",{slot:"right"},[o("p",[t._v("通过自定义 slot 显示多行文本或更复杂的样式。")])])]),t._v(" "),o("h3",[t._v("禁用")]),t._v(" "),o("e-code",[o("div",{slot:"head"},[o("e-tooltip",{attrs:{placement:"top",content:"可以禁用文字提示",disabled:t.disabled}},[o("e-button",{on:{click:function(e){t.disabled=!0}}},[t._v("点击关闭提示")])],1)],1),t._v(" "),o("div",{slot:"left"},[t._v(t._s(t.code.disabled))]),t._v(" "),o("div",{slot:"right"},[o("p",[t._v("通过设置属性disabled可以禁用文字提示。")])])]),t._v(" "),o("h3",[t._v("延时")]),t._v(" "),o("e-code",[o("div",{slot:"head"},[o("e-tooltip",{attrs:{placement:"top",content:"Tooltip 文字提示",delay:1e3}},[o("e-button",{on:{click:function(e){t.disabled=!0}}},[t._v("延时1秒显示")])],1)],1),t._v(" "),o("div",{slot:"left"},[t._v(t._s(t.code.delay))]),t._v(" "),o("div",{slot:"right"},[o("p",[t._v("通过设置属性delay可以延时显示文字提示，单位毫秒。")])])]),t._v(" "),o("div",{staticClass:"space-div24"}),t._v(" "),o("h2",[t._v("API")]),t._v(" "),o("div",{staticClass:"space-div12"}),t._v(" "),o("h2",[t._v("Tooltip props")]),t._v(" "),o("div",{staticClass:"space-div12"}),t._v(" "),o("e-table",{attrs:{border:"",columns:t.columns1,data:t.data1}}),t._v(" "),o("div",{staticClass:"space-div36"}),t._v(" "),o("h2",[t._v("Tooltip events")]),t._v(" "),o("div",{staticClass:"space-div12"}),t._v(" "),o("e-table",{attrs:{border:"",columns:t.columns2,data:t.data2}}),t._v(" "),o("div",{staticClass:"space-div36"}),t._v(" "),o("h2",[t._v("Tooltip slot")]),t._v(" "),o("div",{staticClass:"space-div12"}),t._v(" "),o("e-table",{attrs:{border:"",columns:t.columns3,data:t.data3}})],1)},l=[],i={render:n,staticRenderFns:l};e.a=i}});