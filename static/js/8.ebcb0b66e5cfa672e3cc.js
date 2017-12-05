webpackJsonp([8],{1893:function(a,e,n){"use strict";function l(a){n(2030)}Object.defineProperty(e,"__esModule",{value:!0});var t=n(1944),i=n.n(t),d=n(2070),u=n(3),c=l,r=u(i.a,d.a,c,"data-v-7e3b4fd8",null);e.default=r.exports},1944:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n(1980),t=function(a){return a&&a.__esModule?a:{default:a}}(l);e.default={name:"cascader",data:function(){return{value1:["jiangsu","suzhou","zhuozhengyuan"],data:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}],data2:[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖"}]}]},{value:"jiangsu",label:"江苏",disabled:!0,children:[{value:"nanjing",label:"南京",children:[{value:"zhonghuamen",label:"中华门"}]}]}],data3:[{value:"beijing",label:"北京",children:[],loading:!1},{value:"hangzhou",label:"杭州",children:[],loading:!1}],columns1:[{title:"属性",key:"attr",width:130},{title:"说明",key:"content"},{title:"类型",key:"type",width:200},{title:"默认值",key:"default",width:100}],columns2:[{title:"事件名",key:"eventName",width:140},{title:"说明",key:"content"},{title:"返回值",key:"returnValue",width:120}],tData1:[{attr:"data",content:"可选项的数据源",type:"Array",default:"[ ]"},{attr:"value",content:"当前已选项的数据",type:"Array",default:"[ ]"},{attr:"disabled",content:"是否禁用",type:"Boolean",default:"false"},{attr:"clearable",content:"是否可以清空选项",type:"Boolean",default:"true"},{attr:"placeholder",content:"选择框默认文字",type:"String",default:"请选择"},{attr:"size",content:"选择框大小，可选值为large、small、default或者不填",type:"String",default:"-"},{attr:"trigger",content:"次级菜单展开方式，可选值为 click 或 hover",type:"String",default:"click"},{attr:"change-on-select",content:"当此项为 true 时，点选每级菜单选项值都会发生变化",type:"Function",default:"value"},{attr:"load-data",content:"动态获取数据，数据源需标识 loading",type:"String",default:"-"}],tData2:[{eventName:"on-change",content:"选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据",returnValue:"value, selectedData"},{eventName:"on-visible-change",content:"展开和关闭弹窗时触发",returnValue:"\t显示状态，Boolean"}]}},created:function(){this.code=t.default},mounted:function(){},methods:{loadData:function(a,e){a.loading=!0,setTimeout(function(){"beijing"===a.value?a.children=[{value:"talkingdata",label:"TalkingData"},{value:"baidu",label:"百度"},{value:"sina",label:"新浪"}]:"hangzhou"===a.value&&(a.children=[{value:"ali",label:"阿里巴巴"},{value:"163",label:"网易"}]),a.loading=!1,e()},1e3)}}}},1980:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={};l.base="\n<template>\n  <e-cascader :data=\"data\" v-model=\"value1\"></e-cascader>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        value1: ['jiangsu', 'suzhou', 'zhuozhengyuan'],\n        data: [\n            {\n              value: 'beijing',\n              label: '北京',\n              children: [\n                {value: 'gugong',label: '故宫'},\n                {value: 'tiantan',label: '天坛'},\n                {value: 'wangfujing',label: '王府井'}\n              ]\n            }, {\n              value: 'jiangsu',\n              label: '江苏',\n              children: [\n                {\n                  value: 'nanjing',\n                  label: '南京',\n                  children: [\n                    {value: 'fuzimiao',label: '夫子庙'}\n                  ]\n                },{\n                  value: 'suzhou',\n                  label: '苏州',\n                  children: [\n                    {value: 'zhuozhengyuan',label: '拙政园'},\n                    {value: 'shizilin',label: '狮子林'}\n                  ]\n                }\n              ]\n            }\n        ]\n      }\n    }\n  }\n<\/script>\n",l.hover="\n<template>\n  <e-cascader :data=\"data\" trigger=\"hover\"></e-cascader>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n            {\n              value: 'beijing',\n              label: '北京',\n              children: [\n                {value: 'gugong',label: '故宫'},\n                {value: 'tiantan',label: '天坛'},\n                {value: 'wangfujing',label: '王府井'}\n              ]\n            }, {\n              value: 'jiangsu',\n              label: '江苏',\n              children: [\n                {\n                  value: 'nanjing',\n                  label: '南京',\n                  children: [\n                    {value: 'fuzimiao',label: '夫子庙'}\n                  ]\n                },{\n                  value: 'suzhou',\n                  label: '苏州',\n                  children: [\n                    {value: 'zhuozhengyuan',label: '拙政园'},\n                    {value: 'shizilin',label: '狮子林'}\n                  ]\n                }\n              ]\n            }\n        ]\n      }\n    }\n  }\n<\/script>\n",l.disabled="\n<template>\n  <e-cascader :data=\"data2\" disabled></e-cascader>\n  <e-cascader :data=\"data2\"></e-cascader>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        data2: [\n          {\n            value: 'zhejiang',\n            label: '浙江',\n            children: [\n              {\n                value: 'hangzhou',\n                label: '杭州',\n                children: [{value: 'xihu',label: '西湖'}]\n              }\n            ]\n          }, {\n            value: 'jiangsu',\n            label: '江苏',\n            disabled: true,\n            children: [\n              {\n                value: 'nanjing',\n                label: '南京',\n                children: [{value: 'zhonghuamen',label: '中华门'}]\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n<\/script>\n",l.loading="\n<template>\n  <e-cascader :data=\"data2\" disabled></e-cascader>\n  <e-cascader :data=\"data2\"></e-cascader>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        data3: [\n          {value: 'beijing',label: '北京',children: [],loading: false},\n          {value: 'hangzhou',label: '杭州',children: [],loading: false}\n        ]\n      }\n    },\n    methods:{\n      loadData(item, callback) {\n        item.loading = true;\n        setTimeout(() => {\n          if(item.value === 'beijing') {\n            item.children = [\n              {value: 'talkingdata',label: 'TalkingData'},\n              {value: 'baidu',label: '百度'},\n              {value: 'sina',label: '新浪'}\n            ];\n          } else if(item.value === 'hangzhou') {\n            item.children = [\n              {value: 'ali',label: '阿里巴巴'},\n              {value: '163',label: '网易'}\n            ];\n          }\n          item.loading = false;\n          callback();\n        }, 1000);\n      }\n   }\n  }\n<\/script>\n",e.default=l},2015:function(a,e,n){e=a.exports=n(1871)(!1),e.push([a.i,".app-container .e-cascader[data-v-7e3b4fd8]{width:200px}",""])},2030:function(a,e,n){var l=n(2015);"string"==typeof l&&(l=[[a.i,l,""]]),l.locals&&(a.exports=l.locals);n(1872)("4cab47ce",l,!0)},2070:function(a,e,n){"use strict";var l=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"app-container"},[n("h1",[a._v("Cascader 级联选择")]),a._v(" "),n("p",[a._v("常用于省市区、公司级层、事务分类等")]),a._v(" "),n("h3",[a._v("基础用法")]),a._v(" "),n("e-code",{attrs:{type:"left"}},[n("div",{slot:"head"},[n("e-cascader",{attrs:{data:a.data},model:{value:a.value1,callback:function(e){a.value1=e},expression:"value1"}})],1),a._v(" "),n("div",{slot:"left"},[a._v(a._s(a.code.base))])]),a._v(" "),n("h3",[a._v("移入展开")]),a._v(" "),n("e-code",{attrs:{type:"left"}},[n("div",{slot:"head"},[n("e-cascader",{attrs:{data:a.data,trigger:"hover"}})],1),a._v(" "),n("div",{slot:"left"},[a._v(a._s(a.code.hover))])]),a._v(" "),n("h3",[a._v("禁用")]),a._v(" "),n("e-code",{attrs:{type:"left"}},[n("div",{slot:"head"},[n("e-cascader",{attrs:{data:a.data2,disabled:""}}),a._v(" "),n("br"),a._v(" "),n("e-cascader",{attrs:{data:a.data2}})],1),a._v(" "),n("div",{slot:"left"},[a._v(a._s(a.code.disabled))])]),a._v(" "),n("h3",[a._v("动态加载选项")]),a._v(" "),n("e-code",{attrs:{type:"left"}},[n("div",{slot:"head"},[n("e-cascader",{attrs:{data:a.data3,"load-data":a.loadData}})],1),a._v(" "),n("div",{slot:"left"},[a._v(a._s(a.code.loading))])]),a._v(" "),n("div",{staticClass:"space-div24"}),a._v(" "),n("h2",[a._v("API")]),a._v(" "),n("div",{staticClass:"space-div12"}),a._v(" "),n("h2",[a._v("Cascader props ")]),a._v(" "),n("div",{staticClass:"space-div12"}),a._v(" "),n("e-table",{attrs:{border:"",columns:a.columns1,data:a.tData1}}),a._v(" "),n("div",{staticClass:"space-div36"}),a._v(" "),n("h2",[a._v("Cascader events")]),a._v(" "),n("div",{staticClass:"space-div12"}),a._v(" "),n("e-table",{attrs:{border:"",columns:a.columns2,data:a.tData2}}),a._v(" "),n("div",{staticClass:"space-div36"})],1)},t=[],i={render:l,staticRenderFns:t};e.a=i}});