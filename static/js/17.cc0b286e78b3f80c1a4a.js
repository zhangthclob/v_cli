webpackJsonp([17],{1920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1965),s=n.n(a),i=n(2054),o=n(3),r=o(s.a,i.a,null,null,null);t.default=r.exports},1965:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1999),s=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={data:function(){return{total2:0,current2:1,pageSize2:10,pageSizeOpts2:[10,20,30,40],total:0,current:1,pageSize:10,pageSizeOpts:[10,20,30,40],columns1:[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"地址",key:"address"}],data1:[],data2:[]}},created:function(){this.code=s.default,this.data1=this.$mock.mock({"list|30-50":[{id:"@guid",name:"@cname","age|10-60":100,address:"@county(true)"}]}).list},mounted:function(){this.total=this.data1.length,this.getDatas()},methods:{getDatas:function(){var e=this;e.data2=[];for(var t=0;t<this.pageSize2;t++)e.data2.push(this.$mock.mock({"list|1":[{id:"@guid",name:"@cname","age|10-60":100,address:"@county(true)"}]}).list);this.total2=60},pageChange:function(e){this.current=e},changePageSize:function(e){this.pageSize=e},pageChange2:function(e){this.current2=e,this.getDatas()},changePageSize2:function(e){this.pageSize2=e}},computed:{tableData:function(){var e=(this.current-1)*this.pageSize,t=this.current*this.pageSize;return t>this.data1.length&&(t=this.data1.length),this.data1.slice(e,t)}}}},1999:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};a.base="\n<template>\n  <e-table :columns=\"columns1\" :data=\"tableData\"></e-table>\n  <e-page \n  \t@on-change=\"pageChange\"\n  \t@on-page-size-change=\"changePageSize\"\n  \t:total=\"total\"\n  \t:page-size=\"pageSize\"\n  \t:page-size-opts=\"pageSizeOpts\"\n  \tshow-total \n  \tshow-sizer \n  \tshow-elevator>\n  </e-page>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        total:0,\n        current:1,\n        pageSize:10,\n        pageSizeOpts:[10, 20, 30, 40],\n        columns1: [\n        {title: '姓名',key: 'name'},\n        {title: '年龄',key: 'age'},\n        {title: '地址',key: 'address'}\n        ],\n        data1: []\n      }\n    },\n    created: function() {\n      //请求所有数据\n      this.data1=this.$mock.mock({\n        'list|30-50': [\n          {'id': '@guid','name': '@cname','age|10-60': 100,'address': '@county(true)'}\n        ]\n      }).list;\n    },\n    mounted: function() {\n      //设置总页数\n      this.total=this.data1.length;\n    },\n    methods: {\n      //当分页组件改变当前页时改变this.current(当前页)的值\n      pageChange(currentPage){\n        this.current=currentPage;\n      },\n      //当分页组件改变每页大小的值时,改变this.pageSize(每页大小)的值\n      changePageSize(currentPageSize){\n        this.pageSize=currentPageSize;\n      }\n    },\n    computed:{\n      tableData(){\n        let datas=[];\n        //当前页开始索引\n        let startIndex=(this.current-1)*this.pageSize;\n        //当前页结束索引\n        let endIndex=this.current*this.pageSize;\n        if(endIndex>this.data1.length){\n          endIndex=this.data1.length;\n        }\n        //获取当前页数据\n        datas=this.data1.slice(startIndex,endIndex);\n        return datas;\n      }\n    }\n  }\n<\/script>\n",a.base2="\n<template>\n  <e-table :columns=\"columns1\" :data=\"datas\"></e-table>\n  <e-page \n  \t@on-change=\"pageChange\"\n  \t@on-page-size-change=\"changePageSize\"\n  \t:total=\"total\"\n  \t:page-size=\"pageSize\"\n  \t:page-size-opts=\"pageSizeOpts\"\n  \tshow-total \n  \tshow-sizer \n  \tshow-elevator>\n  </e-page>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        total:0,\n        current:1,\n        pageSize:10,\n        pageSizeOpts:[10, 20, 30, 40],\n        columns1: [\n        {title: '姓名',key: 'name'},\n        {title: '年龄',key: 'age'},\n        {title: '地址',key: 'address'}\n        ],\n        datas: []\n      }\n    },\n    mounted: function() {\n      this.getDatas();\n    },\n    methods: {\n    \tgetDatas() {\n        var _self = this;\n        _self.datas = [];\n        for(let i = 0; i < this.pageSize; i++) {\n          _self.datas.push(\n            this.$mock.mock(\n              {'list|1': [{'name': '@cname','age|10-60': 100,'address': '@county(true)'}]}\n            ).list\n          )\n        }\n        this.total = 60;\n      },\n      //当分页组件改变当前页时改变this.current(当前页)的值\n      pageChange(currentPage){\n        this.current=currentPage;\n        this.getDatas();\n      },\n      //当分页组件改变每页大小的值时,改变this.pageSize(每页大小)的值\n      changePageSize(currentPageSize){\n        this.pageSize=currentPageSize;\n      }\n    }\n   \n  }\n<\/script>\n",t.default=a},2054:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container table-doc"},[n("h1",[e._v("分页实例")]),e._v(" "),n("h3",[e._v("客户端分页")]),e._v(" "),n("e-code",{attrs:{type:"left"}},[n("div",{slot:"head"},[n("e-table",{attrs:{columns:e.columns1,data:e.tableData}}),e._v(" "),n("e-page",{attrs:{total:e.total,"page-size":e.pageSize,"page-size-opts":e.pageSizeOpts,"show-total":"","show-sizer":"","show-elevator":""},on:{"on-change":e.pageChange,"on-page-size-change":e.changePageSize}})],1),e._v(" "),n("div",{slot:"left"},[e._v(e._s(e.code.base))])]),e._v(" "),n("h3",[e._v("服务端分页")]),e._v(" "),n("e-code",{attrs:{type:"left"}},[n("div",{slot:"head"},[n("e-table",{attrs:{columns:e.columns1,data:e.data2}}),e._v(" "),n("e-page",{attrs:{total:e.total2,"page-size":e.pageSize2,"page-size-opts":e.pageSizeOpts2,"show-total":"","show-sizer":"","show-elevator":""},on:{"on-change":e.pageChange2,"on-page-size-change":e.changePageSize2}})],1),e._v(" "),n("div",{slot:"left"},[e._v(e._s(e.code.base2))])])],1)},s=[],i={render:a,staticRenderFns:s};t.a=i}});