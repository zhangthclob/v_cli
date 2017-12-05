webpackJsonp([7],{1895:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(1946),n=a.n(o),d=a(2074),l=a(3),c=l(n.a,d.a,null,null,null);t.default=c.exports},1922:function(e,t,a){t=e.exports=a(1871)(!1),t.push([e.i,".app-container.picker-doc .e-col,.app-container.picker-doc .e-row{position:static}",""])},1923:function(e,t,a){var o=a(1922);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(1872)("d733bbc0",o,!0)},1946:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(1923);var o=a(1982),n=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"login",data:function(){var e=this;return{value1:"2016-01-01",value2:["2016-01-01","2016-02-15"],open:!1,value3:"",options1:{shortcuts:[{text:"今天",value:function(){return new Date},onClick:function(t){e.$Message.info("点击了今天")}},{text:"昨天",value:function(){var e=new Date;return e.setTime(e.getTime()-864e5),e},onClick:function(t){e.$Message.info("点击了昨天")}},{text:"一周前",value:function(){var e=new Date;return e.setTime(e.getTime()-6048e5),e},onClick:function(t){e.$Message.info("点击了一周前")}}]},options2:{shortcuts:[{text:"最近一周",value:function(){var e=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]}},{text:"最近一个月",value:function(){var e=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]}},{text:"最近三个月",value:function(){var e=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]}}]},options3:{disabledDate:function(e){return e&&e.valueOf()<Date.now()-864e5}},options4:{disabledDate:function(e){return 15===e.getDate()}},columns1:[{title:"属性",key:"attr",width:100},{title:"说明",key:"content"},{title:"类型",key:"type",width:100},{title:"默认值",key:"default"}],columns2:[{title:"属性",key:"attr"},{title:"说明",key:"content"},{title:"类型",key:"type"},{title:"默认值",key:"default"}],columns3:[{title:"属性",key:"attr"},{title:"说明",key:"content"},{title:"返回值",key:"default"}],columns4:[{title:"名称",key:"attr"},{title:"说明",key:"content"}],data1:[{attr:"type",content:"显示类型，可选值为 date、daterange、datetime、datetimerange、year、month",type:"string",default:"data"},{attr:"value",content:"日期，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的日期格式，点击右边查看注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用 ",type:"data",default:"-"},{attr:"format",content:"展示的日期格式 ",type:"data",default:"date | daterange：yyyy-MM-dd datetime | datetimerange：yyyy-MM-dd HH:mm:ss year：yyyy month：yyyy-MM"},{attr:"placement",content:" 日期选择器出现的位置，可选值为top top-start top-end bottom bottom-start bottom-end left left-start left-end right right-start right-end",type:"String",default:"bottom-start"},{attr:"options",content:"选择器额外配置，比如不可选日期与快捷选项，具体项详见下表",type:"Object",default:"-"},{attr:"confirm",content:"是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭",type:"Boolean",default:"false"},{attr:"open",content:"手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用",type:"Boolean",default:"null"},{attr:"size",content:"尺寸，可选值为large、small、default或者不设置",type:"String",default:"-"},{attr:"disabled",content:"是否禁用选择器",type:"Boolean",default:"false"},{attr:"clearable",content:"是否显示清除按钮",type:"Boolean",default:"true"},{attr:"readonly",content:"完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效",type:"Boolean",default:"false"},{attr:"editable",content:"文本框是否可以输入，只在没有使用 slot 时有效",type:"Boolean",default:"true"},{attr:"transfer",content:"是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果",type:"Boolean",default:"false"},{attr:"element-id",content:"给表单元素设置 id，详见 Form 用法",type:"String",default:"-"}],data2:[{attr:"shortcuts",content:"设置快捷选项，每项内容： text | String：显示的文案value | Function：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调onClick | Function：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用",type:"Array",default:"-"},{attr:"disabledDate",content:"设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天",type:"Function",default:"-"}],data3:[{attr:"on-change",content:"日期发生变化时触发",type:"",default:"已经格式化后的日期，比如 2016-01-01"},{attr:"on-open-change",content:"弹出日历和关闭日历时触发",type:"",default:"true | false"},{attr:"on-ok",content:"在 confirm 模式下有效，点击确定按钮时触发",type:"",default:"-"},{attr:"on-clear",content:"在 confirm 模式或 clearable = true 时有效，在清空日期时触发",type:"",default:"-"}],data4:[{attr:"无",content:"自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例",type:"",default:""}]}},created:function(){this.code=n.default},mounted:function(){},methods:{handleClick:function(){this.open=!this.open},handleChange:function(e){this.value3=e},handleClear:function(){this.open=!1},handleOk:function(){this.open=!1}}}},1982:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={};o.type={title:"基础用法",code:'\n<e-row>\n  <e-col span="12">\n    <e-date-picker type="date" placeholder="选择日期" style="width: 200px"></e-date-picker>\n  </e-col>\n  <e-col span="12">\n    <e-date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></e-date-picker>\n  </e-col>\n</e-row>\n\t',desc:"设置属性 type 为 date 或 daterange 分别显示选择单日和选择范围类型。设置属性 placement 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。 "},o.options={title:"快捷方式",code:'\n<e-row>\n  <e-col span="12">\n    <e-date-picker type="date" :options="options1" placeholder="选择日期" style="width: 200px"></e-date-picker>\n  </e-col>\n  <e-col span="12">\n    <e-date-picker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px"></e-date-picker>\n  </e-col>\n</e-row>\n\t',desc:"设置属性 options 对象中的 shortcuts 可以设置快捷选项，详见示例代码。其中 value 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。"},o.size={title:"日期格式 ",code:'\n<e-row>\n  <e-col span="12">\n    <e-date-picker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></e-date-picker>\n  </e-col>\n  <e-col span="12">\n    <e-date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></e-date-picker>\n  </e-col>\n</e-row>\n\t',desc:"设置属性 format 可以改变日期的显示格式，详见  Date。注意，format 只是改变显示的格式，并非改变 value 值。"},o.typeone={title:"日期时间选择",code:'\n<e-date-picker type="datetime" placeholder="选择日期和时间" style="width: 200px"></e-date-picker>\n<e-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px"></e-date-picker>\n<e-date-picker type="datetimerange" placeholder="选择日期和时间" style="width: 300px"></e-date-picker>\n<e-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 300px"></e-date-picker>\n\t',desc:"设置属性 type 为 datetime 或 datetimerange 可以选择时间。设置 format 并且忽略秒，可以只设置小时和分钟维度。"},o.typetwo={title:"年和月",code:'\n<e-row>\n  <e-col span="12">\n    <e-date-picker type="year" placeholder="选择年" style="width: 200px"></e-date-picker>\n  </e-col>\n  <e-col span="12">\n    <e-date-picker type="month" placeholder="选择月" style="width: 200px"></e-date-picker>\n  </e-col>\n</e-row>\n\t',desc:"设置属性 type 为 year 或 month 可以使用选择年或月的功能。"},o.disabled={title:"不可选日期",code:'\n<e-row>\n  <e-col span="12">\n    <e-date-picker type="date" :options="options3" placeholder="选择日期" style="width: 200px"></e-date-picker>\n  </e-col>\n  <e-col span="12">\n    <e-date-picker type="date" :options="options4" placeholder="选择日期" style="width: 200px"></e-date-picker>\n  </e-col>\n</e-row>\n\t',desc:"设置属性 options 对象中的 disabledDate 可以设置不可选择的日期。disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。"},o.sure={title:"带有确认操作 ",code:'\n<e-row>\n  <e-col span="12">\n    <e-date-picker type="date" confirm placeholder="选择日期" style="width: 200px"></e-date-picker>\n  </e-col>\n  <e-col span="12">\n    <e-date-picker type="daterange" confirm placement="bottom-end" placeholder="选择日期" style="width: 200px"></e-date-picker>\n  </e-col>\n</e-row>\n\t',desc:"设置属性 confirm，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。确认按钮并没有影响日期的正常选择。"},o.open={title:"手动控制组件 ",code:'\n<e-date-picker :open="open" :value="value3" confirm type="date" @on-change="handleChange" @on-clear="handleClear" @on-ok="handleOk">\n  <a href="javascript:void(0)" @click="handleClick">\n    <e-icon type="ios-calendar-outline"></e-icon>\n    <template v-if="value3 === \'\'">选择日期</template>\n    <template v-else>{{ value3 }}</template>\n  </a>\n</e-date-picker>\n\t',desc:"对于一些定制化的场景，可以使用 slot 配合参数 open 及事件来手动控制组件的显示状态，详见示例和 API."},o.large={title:"尺寸 ",code:'\n<e-row>\n  <e-col span="8">\n    <e-date-picker size="small" type="date" placeholder="选择日期"></e-date-picker>\n  </e-col>\n  <e-col span="8">\n    <e-date-picker type="date" placeholder="选择日期"></e-date-picker>\n  </e-col>\n  <e-col span="8">\n    <e-date-picker size="large" type="date" placeholder="选择日期"></e-date-picker>\n  </e-col>\n</e-row>\n\t',desc:"通过设置属性 size 为 large 或 small 可以调整选择器尺寸为大或小，默认不填为中。"},t.default=o},2074:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container picker-doc"},[a("h1",[e._v("DatePicker 日期选择器   ")]),e._v(" "),a("p",[e._v("选择或输入日期，支持年、月、日期等类型，支持选择范围。")]),e._v(" "),a("h3",[e._v(e._s(e.code.type.title))]),e._v(" "),a("e-code",[a("div",{slot:"head"},[a("e-row",[a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期"}})],1),e._v(" "),a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"daterange",placement:"bottom-end",placeholder:"选择日期"}})],1)],1)],1),e._v(" "),a("div",{slot:"left"},[e._v(e._s(e.code.type.code))]),e._v(" "),a("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.type.desc)+"\n\t\t")])]),e._v(" "),a("h3",[e._v(e._s(e.code.options.title))]),e._v(" "),a("e-code",[a("div",{slot:"head"},[a("e-row",[a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",options:e.options1,placeholder:"选择日期"}})],1),e._v(" "),a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"daterange",options:e.options2,placement:"bottom-end",placeholder:"选择日期"}})],1)],1)],1),e._v(" "),a("div",{slot:"left"},[e._v(e._s(e.code.options.code))]),e._v(" "),a("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.options.desc)+"\n\t\t")])]),e._v(" "),a("h3",[e._v(e._s(e.code.size.title))]),e._v(" "),a("e-code",[a("div",{slot:"head"},[a("e-row",[a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{value:e.value1,format:"yyyy年MM月dd日",type:"date",placeholder:"选择日期"}})],1),e._v(" "),a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{value:e.value2,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"选择日期"}})],1)],1)],1),e._v(" "),a("div",{slot:"left"},[e._v(e._s(e.code.size.code))]),e._v(" "),a("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.size.desc)+"\n\t\t")])]),e._v(" "),a("h3",[e._v(e._s(e.code.typeone.title))]),e._v(" "),a("e-code",[a("div",{slot:"head"},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"datetime",placeholder:"选择日期和时间"}}),e._v(" "),a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm",placeholder:"选择日期和时间（不含秒）"}}),e._v(" "),a("div",{staticClass:"space-div12"}),e._v(" "),a("e-date-picker",{staticStyle:{width:"300px"},attrs:{type:"datetimerange",placeholder:"选择日期和时间"}}),e._v(" "),a("e-date-picker",{staticStyle:{width:"300px"},attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"选择日期和时间（不含秒）"}})],1),e._v(" "),a("div",{slot:"left"},[e._v(e._s(e.code.typeone.code))]),e._v(" "),a("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.typeone.desc)+"\n\t\t")])]),e._v(" "),a("h3",[e._v(e._s(e.code.typetwo.title))]),e._v(" "),a("e-code",[a("div",{slot:"head"},[a("e-row",[a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"year",placeholder:"选择年"}})],1),e._v(" "),a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"month",placeholder:"选择月"}})],1)],1)],1),e._v(" "),a("div",{slot:"left"},[e._v(e._s(e.code.typetwo.code))]),e._v(" "),a("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.typetwo.desc)+"\n\t\t")])]),e._v(" "),a("h3",[e._v(e._s(e.code.disabled.title))]),e._v(" "),a("e-code",[a("div",{slot:"head"},[a("e-row",[a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",options:e.options3,placeholder:"选择日期"}})],1),e._v(" "),a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",options:e.options4,placeholder:"选择日期"}})],1)],1)],1),e._v(" "),a("div",{slot:"left"},[e._v(e._s(e.code.disabled.code))]),e._v(" "),a("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.disabled.desc)+"\n\t\t")])]),e._v(" "),a("h3",[e._v(e._s(e.code.sure.title))]),e._v(" "),a("e-code",[a("div",{slot:"head"},[a("e-row",[a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",confirm:"",placeholder:"选择日期"}})],1),e._v(" "),a("e-col",{attrs:{span:"12"}},[a("e-date-picker",{staticStyle:{width:"200px"},attrs:{type:"daterange",confirm:"",placement:"bottom-end",placeholder:"选择日期"}})],1)],1)],1),e._v(" "),a("div",{slot:"left"},[e._v(e._s(e.code.sure.code))]),e._v(" "),a("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.sure.desc)+"\n\t\t")])]),e._v(" "),a("h3",[e._v(e._s(e.code.open.title))]),e._v(" "),a("e-code",[a("div",{slot:"head"},[a("e-date-picker",{attrs:{open:e.open,value:e.value3,confirm:"",type:"date"},on:{"on-change":e.handleChange,"on-clear":e.handleClear,"on-ok":e.handleOk}},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:e.handleClick}},[a("e-icon",{attrs:{type:"ios-calendar-outline"}}),e._v(" "),""===e.value3?[e._v("选择日期")]:[e._v(e._s(e.value3))]],2)])],1),e._v(" "),a("div",{slot:"left"},[e._v(e._s(e.code.open.code))]),e._v(" "),a("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.open.desc)+"\n\t\t")])]),e._v(" "),a("h3",[e._v(e._s(e.code.large.title))]),e._v(" "),a("e-code",[a("div",{slot:"head"},[a("e-row",[a("e-col",{attrs:{span:"8"}},[a("e-date-picker",{attrs:{size:"small",type:"date",placeholder:"选择日期"}})],1),e._v(" "),a("e-col",{attrs:{span:"8"}},[a("e-date-picker",{attrs:{type:"date",placeholder:"选择日期"}})],1),e._v(" "),a("e-col",{attrs:{span:"8"}},[a("e-date-picker",{attrs:{size:"large",type:"date",placeholder:"选择日期"}})],1)],1)],1),e._v(" "),a("div",{slot:"left"},[e._v(e._s(e.code.large.code))]),e._v(" "),a("div",{slot:"right"},[e._v("\n\t\t\t"+e._s(e.code.large.desc)+"\n\t\t")])]),e._v(" "),a("div",{staticClass:"space-div24"}),e._v(" "),a("h2",[e._v("API")]),e._v(" "),a("div",{staticClass:"space-div12"}),e._v(" "),a("h2",[e._v("DatePicker props")]),e._v(" "),a("div",{staticClass:"space-div12"}),e._v(" "),a("e-table",{attrs:{border:"",columns:e.columns1,data:e.data1}}),e._v(" "),a("div",{staticClass:"space-div36"}),e._v(" "),a("h2",[e._v("options")]),e._v(" "),a("div",{staticClass:"space-div12"}),e._v(" "),a("e-table",{attrs:{border:"",columns:e.columns2,data:e.data2}}),e._v(" "),a("div",{staticClass:"space-div36"}),e._v(" "),a("h2",[e._v("DatePicker events")]),e._v(" "),a("div",{staticClass:"space-div12"}),e._v(" "),a("e-table",{attrs:{border:"",columns:e.columns3,data:e.data3}}),e._v(" "),a("div",{staticClass:"space-div36"}),e._v(" "),a("h2",[e._v("DatePicker slot")]),e._v(" "),a("div",{staticClass:"space-div12"}),e._v(" "),a("e-table",{attrs:{border:"",columns:e.columns4,data:e.data4}})],1)},n=[],d={render:o,staticRenderFns:n};t.a=d}});