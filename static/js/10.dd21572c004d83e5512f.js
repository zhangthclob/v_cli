webpackJsonp([10],{1881:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1932),i=n.n(a),l=n(2078),o=n(3),s=o(i.a,l.a,null,null,null);t.default=s.exports},1932:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1973),l=a(i);n(2018);var o=n(618);a(o);t.default={data:function(){return{activeIndex:"1",activeIndex2:"1",activeIndex3:"1",activeIndex4:"1",isToCollapse:"展开",columns1:[{title:"参数",key:"parameter",width:130},{title:"说明",key:"explain"},{title:"类型",key:"type"},{title:"可选值",key:"optional"},{title:"默认值",key:"default"}],columns2:[{title:"事件名称",key:"name",width:100},{title:"说明",key:"explain"},{title:"参数",key:"parameter"}],columns4:[{title:"参数",key:"parameter",width:100},{title:"说明",key:"explain"},{title:"类型",key:"type"},{title:"可选值",key:"optional"},{title:"默认值",key:"default"}],columns5:[{title:"参数",key:"parameter",width:100},{title:"说明",key:"explain"},{title:"类型",key:"type"},{title:"可选值",key:"optional"},{title:"默认值",key:"default"}],columns6:[{title:"参数",key:"parameter",width:100},{title:"说明",key:"explain"},{title:"类型",key:"type"},{title:"可选值",key:"optional"},{title:"默认值",key:"default"}],data1:[{parameter:"mode",explain:"模式",type:"string",optional:"horizontal / vertical",default:"vertical"},{parameter:"collapse",explain:"是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）",type:"boolean",optional:"-",default:"false"},{parameter:"theme",explain:"主题色",type:"string",optional:"light/dark",default:"light"},{parameter:"default-active",explain:"当前激活菜单的index",type:"string",optional:"-",default:"-"},{parameter:"default-openeds",explain:"当前打开的sub-menu的key数组",type:"array",optional:"-",default:"-"},{parameter:"unique-opened",explain:"是否只保持一个子菜单的展开",type:"boolean",optional:"-",deault:"false"},{parameter:"menu-trigger",explain:"子菜单打开的触发方式（只在mode微horizontal时有效）",type:"string",optional:"-",default:"hover"},{parameter:"router",explain:"是否使用vue-router的模式，启用该模式会在激活导航时以index作为path进行路由跳转",type:"boolean",optional:"-",default:"false"}],data2:[{name:"select",explain:"菜单激活回调",parameter:"index: 选中菜单项的 indexPath: 选中菜单项的 index path"},{name:"open",explain:"SubMenu 展开的回调",parameter:"index: 打开的 subMenu 的 index， indexPath: 打开的 subMenu 的 index path"},{name:"close",explain:"SubMenu 收起的回调",parameter:"index: 收起的 subMenu 的 index， indexPath: 收起的 subMenu 的 index path"}],data4:[{parameter:"index",explain:"唯一标志",type:"string",optional:"-",default:"-"}],data5:[{parameter:"index",explain:"唯一标志",type:"string",optional:"-",default:"-"},{parameter:"route",explain:"vue router 路径对象",type:"object",optional:"-",default:"-"}],data6:[{parameter:"title",explain:"分组标题",type:"string",optional:"-",default:"-"}]}},created:function(){this.code=l.default},methods:{handleSelect:function(e,t){console.log(e,t)},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},handleOpen1:function(e,t){console.log(e,t)},handleClose1:function(e,t){console.log(e,t)}},computed:{isCollapse:function(){var e=!1;return"收起"==this.isToCollapse&&(e=!0),e}}}},1973:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};a.type={title:"顶栏",code:'\n<template>\n  <e-menu theme="dark" :default-active="activeIndex" class="e-menu-demo" mode="horizontal" @select="handleSelect">\n    <e-menu-item index="1">处理中心</e-menu-item>\n    <e-submenu index="2">\n      <template slot="title">我的工作台</template>\n      <e-menu-item index="2-1">选项1</e-menu-item>\n      <e-menu-item index="2-2">选项2</e-menu-item>\n      <e-menu-item index="2-3">选项3</e-menu-item>\n    </e-submenu> \n    <e-menu-item index="3"><a href="/" target="_blank">订单管理</a></e-menu-item>\n  </e-menu>\n  <e-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">\n    <e-menu-item index="1">处理中心</e-menu-item>\n    <e-submenu index="2">\n      <template slot="title">我的工作台</template>\n      <e-menu-item index="2-1">选项1</e-menu-item>\n      <e-menu-item index="2-2">选项2</e-menu-item>\n      <e-menu-item index="2-3">选项3</e-menu-item>\n    </e-submenu>\n    <e-menu-item index="3"><a href="/" target="_blank">订单管理</a></e-menu-item>\n  </e-menu>\n</template>\n\t',desc:"导航菜单默认为垂直模式，通过mode属性可以使导航菜单变更为水平模式。另外，在菜单中通过submenu组件可以生成二级菜单。 "},a.typeone={title:"侧栏",code:'\n<template>\n  <e-row class="tac">\n    <e-col :span="18">\n      <e-menu default-active="activeIndex3" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">\n        <e-submenu index="1">\n          <template slot="title">\t\t\t\t\t        \t\n            <e-icon type="android-pin"></e-icon>\n            <span>导航一</span>\n          </template>\n          <e-menu-item-group>\n            <template slot="title">分组一</template>\n            <e-menu-item index="1-1">选项1</e-menu-item>\n            <e-menu-item index="1-2">选项2</e-menu-item>\n          </e-menu-item-group>\n          <e-menu-item-group title="分组2">\n            <e-menu-item index="1-3">选项3</e-menu-item>\n          </e-menu-item-group>\n          <e-submenu index="1-4">\n            <template slot="title">选项4</template>\n            <e-menu-item index="1-4-1">选项1</e-menu-item>\n          </e-submenu>\n        </e-submenu>\n        <e-menu-item index="2">\t\t\t\t\t       \n          <e-icon type="android-apps"></e-icon>\n          <span slot="title">导航二</span>\n        </e-menu-item>\n        <e-menu-item index="3">\n          <e-icon type="ios-gear-outline"></e-icon>\t\t\t\t\t      \n          <span slot="title">导航三</span>\n        </e-menu-item>\n      </e-menu>\n    </e-col>\n  </e-row>\t\t\t\n</template>\n',desc:"通过e-menu-item-group组件可以实现菜单进行分组，分组名可以通过title属性直接设定，也可以通过具名 slot 来设定。"},a.collapse={title:"折叠",code:'\n<template>\n  <e-radio-group v-model="isToCollapse" style="margin-bottom: 20px;">\n    <e-radio label="展开">展开</e-radio>\n    <e-radio label="收起">收起</e-radio>\n  </e-radio-group>\n  <e-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen1" @close="handleClose1" :collapse="isCollapse">\n    <e-submenu index="1">\n      <template slot="title">\n        <i class="e-icon e-icon-home"></i>\n        <span slot="title">导航一</span>\n      </template>\n      <e-menu-item-group>\n        <span slot="title">分组一</span>\n        <e-menu-item index="1-1">选项1</e-menu-item>\n        <e-menu-item index="1-2">选项2</e-menu-item>\n      </e-menu-item-group>\n      <e-menu-item-group title="分组2">\n        <e-menu-item index="1-3">选项3</e-menu-item>\n      </e-menu-item-group>\n      <e-submenu index="1-4">\n        <span slot="title">选项4</span>\n        <e-menu-item index="1-4-1">选项1</e-menu-item>\n      </e-submenu>\n    </e-submenu>\n    <e-menu-item index="2">\n      <i class="e-icon e-icon-home"></i>\n      <span slot="title">导航二</span>\n    </e-menu-item>\n    <e-menu-item index="3">\n      <i class="e-icon e-icon-home"></i>\n      <span slot="title">导航三</span>\n    </e-menu-item>\n  </e-menu>\n</template>\n',desc:""},t.default=a},2003:function(e,t,n){t=e.exports=n(1871)(!1),t.push([e.i,".layout-doc .e-col,.layout-doc .e-row{position:static}.layout-doc .e-menu-demo{border-bottom:1px solid #e6e6e6}.layout-doc .el-menu-vertical-demo:not(.e-menu--collapse){width:200px;min-height:400px}.layout-doc .el-menu-vertical-demo .e-tooltip{position:absolute;left:0;right:0;text-indent:7px}.layout-doc .el-menu-vertical-demo .e-tooltip .e-tooltip-rel{width:100%}",""])},2018:function(e,t,n){var a=n(2003);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(1872)("05baafbc",a,!0)},2078:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container layout-doc"},[n("h1",[e._v("布局 ")]),e._v(" "),n("p",[e._v("布局和导航是产品的骨架，是页面的重要构成模式之一，是作为后续展开页面设计的基础，可以为产品奠定交互和视觉风格。")]),e._v(" "),n("h3",[e._v(e._s(e.code.type.title))]),e._v(" "),n("e-code",[n("div",{staticStyle:{height:"300px"},slot:"head"},[n("e-menu",{staticClass:"e-menu-demo",attrs:{theme:"dark","default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[n("e-menu-item",{attrs:{index:"1"}},[e._v("处理中心")]),e._v(" "),n("e-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v("我的工作台")]),e._v(" "),n("e-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),e._v(" "),n("e-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),e._v(" "),n("e-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")])],2),e._v(" "),n("e-menu-item",{attrs:{index:"3"}},[n("a",{attrs:{href:"/",target:"_blank"}},[e._v("订单管理")])])],1),e._v(" "),n("div",{staticStyle:{"margin-top":"30px"}}),e._v(" "),n("e-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex2,mode:"horizontal"},on:{select:e.handleSelect}},[n("e-menu-item",{attrs:{index:"1"}},[e._v("处理中心")]),e._v(" "),n("e-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v("我的工作台")]),e._v(" "),n("e-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),e._v(" "),n("e-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),e._v(" "),n("e-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")])],2),e._v(" "),n("e-menu-item",{attrs:{index:"3"}},[n("a",{attrs:{href:"/",target:"_blank"}},[e._v("订单管理")])])],1)],1),e._v(" "),n("div",{slot:"left"},[e._v(e._s(e.code.type.code))]),e._v(" "),n("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.type.desc)+"\n\t\t")])]),e._v(" "),n("h3",[e._v(e._s(e.code.typeone.title))]),e._v(" "),n("e-code",[n("div",{slot:"head"},[n("e-row",{staticClass:"tac"},[n("e-col",{attrs:{span:18}},[n("e-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"activeIndex3"},on:{open:e.handleOpen,close:e.handleClose}},[n("e-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("e-icon",{attrs:{type:"android-pin"}}),e._v(" "),n("span",[e._v("导航一")])],1),e._v(" "),n("e-menu-item-group",[n("template",{slot:"title"},[e._v("分组一")]),e._v(" "),n("e-menu-item",{attrs:{index:"1-1"}},[e._v("选项1")]),e._v(" "),n("e-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],2),e._v(" "),n("e-menu-item-group",{attrs:{title:"分组2"}},[n("e-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1),e._v(" "),n("e-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[e._v("选项4")]),e._v(" "),n("e-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项1")])],2)],2),e._v(" "),n("e-menu-item",{attrs:{index:"2"}},[n("e-icon",{attrs:{type:"android-apps"}}),e._v(" "),n("span",{slot:"title"},[e._v("导航二")])],1),e._v(" "),n("e-menu-item",{attrs:{index:"3"}},[n("e-icon",{attrs:{type:"ios-gear-outline"}}),e._v(" "),n("span",{slot:"title"},[e._v("导航三")])],1)],1)],1)],1)],1),e._v(" "),n("div",{slot:"left"},[e._v(e._s(e.code.typeone.code))]),e._v(" "),n("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.typeone.desc)+"\n\t\t")])]),e._v(" "),n("h3",[e._v(e._s(e.code.collapse.title))]),e._v(" "),n("e-code",{attrs:{type:"left"}},[n("div",{slot:"head"},[n("e-radio-group",{staticStyle:{"margin-bottom":"20px"},model:{value:e.isToCollapse,callback:function(t){e.isToCollapse=t},expression:"isToCollapse"}},[n("e-radio",{attrs:{label:"展开"}},[e._v("展开")]),e._v(" "),n("e-radio",{attrs:{label:"收起"}},[e._v("收起")])],1),e._v(" "),n("e-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse},on:{open:e.handleOpen1,close:e.handleClose1}},[n("e-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"e-icon e-icon-home"}),e._v(" "),n("span",{slot:"title"},[e._v("导航一")])]),e._v(" "),n("e-menu-item-group",[n("span",{slot:"title"},[e._v("分组一")]),e._v(" "),n("e-menu-item",{attrs:{index:"1-1"}},[e._v("选项1")]),e._v(" "),n("e-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],1),e._v(" "),n("e-menu-item-group",{attrs:{title:"分组2"}},[n("e-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1),e._v(" "),n("e-submenu",{attrs:{index:"1-4"}},[n("span",{slot:"title"},[e._v("选项4")]),e._v(" "),n("e-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项1")])],1)],2),e._v(" "),n("e-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"e-icon e-icon-home"}),e._v(" "),n("span",{slot:"title"},[e._v("导航二")])]),e._v(" "),n("e-menu-item",{attrs:{index:"3"}},[n("i",{staticClass:"e-icon e-icon-home"}),e._v(" "),n("span",{slot:"title"},[e._v("导航三")])])],1)],1),e._v(" "),n("div",{slot:"left"},[e._v(e._s(e.code.collapse.code))])]),e._v(" "),n("div",{staticClass:"space-div24"}),e._v(" "),n("h2",[e._v("API")]),e._v(" "),n("div",{staticClass:"space-div12"}),e._v(" "),n("h2",[e._v("Menu Attribute")]),e._v(" "),n("div",{staticClass:"space-div12"}),e._v(" "),n("e-table",{attrs:{border:"",columns:e.columns1,data:e.data1}}),e._v(" "),n("div",{staticClass:"space-div36"}),e._v(" "),n("h2",[e._v("Menu Events ")]),e._v(" "),n("div",{staticClass:"space-div12"}),e._v(" "),n("e-table",{attrs:{border:"",columns:e.columns2,data:e.data2}}),e._v(" "),n("div",{staticClass:"space-div36"}),e._v(" "),n("h2",[e._v("SubMenu Attribute")]),e._v(" "),n("div",{staticClass:"space-div12"}),e._v(" "),n("e-table",{attrs:{border:"",columns:e.columns4,data:e.data4}}),e._v(" "),n("div",{staticClass:"space-div36"}),e._v(" "),n("h2",[e._v("Menu-Item Attribute")]),e._v(" "),n("div",{staticClass:"space-div12"}),e._v(" "),n("e-table",{attrs:{border:"",columns:e.columns5,data:e.data5}}),e._v(" "),n("div",{staticClass:"space-div36"}),e._v(" "),n("h2",[e._v("Menu-Group Attribute")]),e._v(" "),n("div",{staticClass:"space-div12"}),e._v(" "),n("e-table",{attrs:{border:"",columns:e.columns6,data:e.data6}})],1)},i=[],l={render:a,staticRenderFns:i};t.a=l}});