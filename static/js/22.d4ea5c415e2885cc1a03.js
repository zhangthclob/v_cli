webpackJsonp([22],{1906:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(1957),i=e.n(o),a=e(2080),c=e(3),s=c(i.a,a.a,null,null,null);n.default=s.exports},1957:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(1992),i=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default={name:"login",data:function(){return{message:"false",code:""}},created:function(){this.code=i.default},mounted:function(){},methods:{base:function(){this.$Modal.alert("我是一个alert弹框")},base1:function(){this.$Modal.alert("我是一个带回调函数的alert弹框",function(){this.$Message.info({content:"你点击了确定",duration:1})})},confirm:function(){var t=this;this.$Modal.confirm({title:"确认对话框标题",closable:!0,content:"<p>你确定要删除吗</p>",onOk:function(){t.$Message.info("点击了确定")},onCancel:function(){t.$Message.info("点击了取消")}})},confirm1:function(){var t=this;this.$Modal.info({content:"<p>你确定要删除吗</p>",onOk:function(){t.$Message.info("点击了确定")},onCancel:function(){t.$Message.info("点击了取消")}})}}}},1992:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={};o.base='\n<template>\n  <e-button @click="base">alert弹框</e-button>\n  <e-button @click="base1">带回调的alert弹框</e-button>\n</template>\n<script>\n  export default {\n\tdata() {\n\t  return {\n\t\tvalue: \'\',\n\t\t}\n\t  },\n\tmethods: {\n\t  base:function(){\n\t\tthis.$Modal.alert("我是一个alert弹框");\n\t  },\n\t  base1:function(){\n\t\tthis.$Modal.alert("我是一个带回调函数的alert弹框",function(){\n\t\t  this.$Message.info({content:"你点击了确定",duration:1});\n\t\t})\n\t  },\n\t}\n  }\n<\/script>\n\t',o.confirm="\n<template>\n  <e-button @click=\"confirm\">基础对话框</e-button>\n  <e-button @click=\"confirm1\">无标题对话框</e-button>\n</template>\n<script>\n  export default {\n\tmethods: {\n\t  confirm:function(){\n\t\tthis.$Modal.confirm({\n\t\t  title: '确认对话框标题',\n\t\t  closable:true,\n\t\t  content: '<p>你确定要删除吗</p>',\n\t\t  onOk: () => {\n\t\t\tthis.$Message.info('点击了确定');\n\t\t  },\n\t\t  onCancel: () => {\n\t\t\tthis.$Message.info('点击了取消');\n\t\t  }\n\t\t});\n\t  },\n\t  confirm1:function(){\n\t\tthis.$Modal.info({\n\t\t  content: '<p>你确定要删除吗</p>',\n\t\t  onOk: () => {\n\t\t\tthis.$Message.info('点击了确定');\n\t\t  },\n\t\t  onCancel: () => {\n\t\t\tthis.$Message.info('点击了取消');\n\t\t  }\n\t\t});\n\t  }\n\t}\n  }\n<\/script>\n\t",n.default=o},2080:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("h1",[t._v("Modal")]),t._v(" "),e("h3",[t._v("Alert")]),t._v(" "),e("p",[t._v("modal.alert基本用法")]),t._v(" "),e("e-code",[e("div",{slot:"head"},[e("e-button",{on:{click:t.base}},[t._v("alert弹框")]),t._v(" "),e("e-button",{on:{click:t.base1}},[t._v("带回调的alert弹框")])],1),t._v(" "),e("div",{slot:"left"},[t._v(t._s(t.code.base))])]),t._v(" "),e("h3",[t._v("confirm确认对话框")]),t._v(" "),e("p",[t._v("确认对话框的基本用法")]),t._v(" "),e("e-code",[e("div",{slot:"head"},[e("e-button",{on:{click:t.confirm}},[t._v("基础对话框")]),t._v(" "),e("e-button",{on:{click:t.confirm1}},[t._v("无标题对话框")])],1),t._v(" "),e("div",{slot:"left"},[t._v(t._s(t.code.confirm))])])],1)},i=[],a={render:o,staticRenderFns:i};n.a=a}});