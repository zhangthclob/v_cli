webpackJsonp([3],{1886:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(1937),r=a.n(i),n=a(2068),l=a(3),o=l(r.a,n.a,null,null,null);t.default=o.exports},1937:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),a(2020);var r=a(1978),n=i(r),l=a(1979),o=i(l);t.default={name:"",data:function(){return{charts:""}},methods:{},created:function(){},mounted:function(){var e=this.$echarts.init(document.getElementById("gauge"));n.default.gauge.series[0].data[0].value=(100*Math.random()).toFixed(2)-0,e.setOption(n.default.gauge,!0),setInterval(function(){n.default.gauge.series[0].data[0].value=(100*Math.random()).toFixed(2)-0,e.setOption(n.default.gauge,!0)},2e3);var t=this.$echarts.init(document.getElementById("ex-pie"));t.setOption(n.default.exPie);var a=this.$echarts.init(document.getElementById("base-bar"));a.setOption(n.default.baseBar);var i=this.$echarts.init(document.getElementById("base-line"));i.setOption(n.default.baseLine);var r=this.$echarts.init(document.getElementById("base-to-line"));r.setOption(n.default.barToLine);var l=this.$echarts.init(document.getElementById("scatter"));l.setOption(n.default.scatter);var s=this.$echarts.init(document.getElementById("category"));s.setOption(o.default.option),window.addEventListener("resize",function(){e.resize(),t.resize(),a.resize(),i.resize(),r.resize(),l.resize(),s.resize()})}}},1978:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={};i.gauge={tooltip:{formatter:"{a} <br/>{c} {b}"},toolbox:{show:!1,feature:{}},series:[{name:"速度",type:"gauge",z:3,min:0,max:220,splitNumber:11,radius:"75%",axisLine:{lineStyle:{width:5}},axisTick:{length:10,lineStyle:{color:"auto"}},splitLine:{length:15,lineStyle:{color:"auto"}},title:{textStyle:{fontWeight:"bolder",fontSize:16,fontStyle:"italic"}},detail:{textStyle:{fontWeight:"bolder"}},data:[{value:1,name:"km/h"}]}]},i.exPie={title:{text:"某站点用户访问来源",subtext:"纯属虚构",left:"center",top:"0"},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["直达","营销广告","搜索引擎","邮件营销","联盟广告","视频广告","百度","谷歌","必应","其他"]},series:[{name:"访问来源",type:"pie",selectedMode:"single",radius:[0,"30%"],label:{normal:{position:"inner"}},labelLine:{normal:{show:!1}},data:[{value:335,name:"直达",selected:!0},{value:679,name:"营销广告"},{value:1548,name:"搜索引擎"}]},{name:"访问来源",type:"pie",radius:["40%","55%"],data:[{value:335,name:"直达"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1048,name:"百度"},{value:251,name:"谷歌"},{value:147,name:"必应"},{value:102,name:"其他"}]}]},i.baseBar={tooltip:{trigger:"axis",axisPointer:{type:"line"}},grid:{left:"1%",right:"30",bottom:"1%",containLabel:!0},toolbox:{feature:{magicType:{show:!0,type:["line","bar"]}},right:"30"},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",barWidth:"30%",data:[10,52,200,334,390,330,220]}]},i.baseLine={tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},grid:{left:"1%",right:"40",bottom:"1%",containLabel:!0},toolbox:{feature:{magicType:{show:!0,type:["line","bar"]}},right:"30",top:"30"},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]},i.barToLine={title:{text:"某地区蒸发量和降水量",subtext:"纯属虚构"},grid:{left:"1%",right:"8%",bottom:"1%",containLabel:!0},tooltip:{trigger:"axis"},legend:{data:["蒸发量","降水量"]},toolbox:{show:!0,feature:{magicType:{show:!0,type:["line","bar"]}},right:"30"},calculable:!0,xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value"}],series:[{name:"蒸发量",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"降水量",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3],markPoint:{data:[{name:"年最高",value:182.2,xAxis:7,yAxis:183},{name:"年最低",value:2.3,xAxis:11,yAxis:3}]},markLine:{data:[{type:"average",name:"平均值"}]}}]},i.scatter={title:{text:"男性女性身高体重分布",subtext:"抽样调查来自: Heinz  2003"},grid:{left:"1%",right:"60px",bottom:"1%",containLabel:!0},tooltip:{trigger:"item",showDelay:0,formatter:function(e){return e.value.length>1?e.seriesName+" :<br/>"+e.value[0]+"cm "+e.value[1]+"kg ":e.seriesName+" :<br/>"+e.name+" : "+e.value+"kg "},axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}}},legend:{data:["女性","男性"],right:"40"},xAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value} cm"},splitLine:{lineStyle:{type:"dashed"}}}],yAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value} kg"},splitLine:{lineStyle:{type:"dashed"}}}],series:[{name:"女性",type:"scatter",data:[[161.2,51.6],[167.5,59],[159.5,49.2],[157,63],[155.8,53.6],[170,59],[159.1,47.6],[166,69.8],[176.2,66.8],[160.2,75.2],[172.5,55.2],[170.9,54.2],[172.9,62.5],[153.4,42],[160,50],[147.2,49.8],[168.2,49.2],[175,73.2],[157,47.8],[167.6,68.8],[159.5,50.6],[175,82.5],[166.8,57.2],[176.5,87.8],[170.2,72.8],[174,54.5],[173,59.8],[179.9,67.3],[170.5,67.8],[160,47],[154.4,46.2],[162,55],[176.5,83],[160,54.4],[152,45.8],[162.1,53.6],[170,73.2],[160.2,52.1],[161.3,67.9],[166.4,56.6],[168.9,62.3],[163.8,58.5],[167.6,54.5],[160,50.2],[161.3,60.3],[167.6,58.3],[165.1,56.2],[160,50.2],[170,72.9],[157.5,59.8],[167.6,61],[160.7,69.1],[163.2,55.9],[152.4,46.5],[157.5,54.3],[168.3,54.8],[180.3,60.7],[165.5,60],[165,62],[164.5,60.3],[156,52.7],[160,74.3],[163,62],[165.7,73.1],[161,80],[162,54.7],[166,53.2],[174,75.7],[172.7,61.1],[167.6,55.7],[151.1,48.7],[164.5,52.3],[163.5,50],[152,59.3],[169,62.5],[164,55.7],[161.2,54.8],[155,45.9],[170,70.6],[176.2,67.2],[170,69.4],[162.5,58.2],[170.3,64.8],[164.1,71.6],[169.5,52.8],[163.2,59.8],[154.5,49],[159.8,50],[173.2,69.2],[170,55.9],[161.4,63.4],[169,58.2],[166.2,58.6],[159.4,45.7],[162.5,52.2],[159,48.6],[162.8,57.8],[159,55.6],[179.8,66.8],[162.9,59.4],[161,53.6],[151.1,73.2],[168.2,53.4],[168.9,69],[173.2,58.4],[171.8,56.2],[178,70.6],[164.3,59.8],[163,72],[168.5,65.2],[166.8,56.6],[172.7,105.2],[163.5,51.8],[169.4,63.4],[167.8,59],[159.5,47.6],[167.6,63],[161.2,55.2],[160,45],[163.2,54],[162.2,50.2],[161.3,60.2],[149.5,44.8],[157.5,58.8],[163.2,56.4],[172.7,62],[155,49.2],[156.5,67.2],[164,53.8],[160.9,54.4],[162.8,58],[167,59.8],[160,54.8],[160,43.2],[168.9,60.5],[158.2,46.4],[156,64.4],[160,48.8],[167.1,62.2],[158,55.5],[167.6,57.8],[156,54.6],[162.1,59.2],[173.4,52.7],[159.8,53.2],[170.5,64.5],[159.2,51.8],[157.5,56],[161.3,63.6],[162.6,63.2],[160,59.5],[168.9,56.8],[165.1,64.1],[162.6,50],[165.1,72.3],[166.4,55],[160,55.9],[152.4,60.4],[170.2,69.1],[162.6,84.5],[170.2,55.9],[158.8,55.5],[172.7,69.5],[167.6,76.4],[162.6,61.4],[167.6,65.9],[156.2,58.6],[175.2,66.8],[172.1,56.6],[162.6,58.6],[160,55.9],[165.1,59.1],[182.9,81.8],[166.4,70.7],[165.1,56.8],[177.8,60],[165.1,58.2],[175.3,72.7],[154.9,54.1],[158.8,49.1],[172.7,75.9],[168.9,55],[161.3,57.3],[167.6,55],[165.1,65.5],[175.3,65.5],[157.5,48.6],[163.8,58.6],[167.6,63.6],[165.1,55.2],[165.1,62.7],[168.9,56.6],[162.6,53.9],[164.5,63.2],[176.5,73.6],[168.9,62],[175.3,63.6],[159.4,53.2],[160,53.4],[170.2,55],[162.6,70.5],[167.6,54.5],[162.6,54.5],[160.7,55.9],[160,59],[157.5,63.6],[162.6,54.5],[152.4,47.3],[170.2,67.7],[165.1,80.9],[172.7,70.5],[165.1,60.9],[170.2,63.6],[170.2,54.5],[170.2,59.1],[161.3,70.5],[167.6,52.7],[167.6,62.7],[165.1,86.3],[162.6,66.4],[152.4,67.3],[168.9,63],[170.2,73.6],[175.2,62.3],[175.2,57.7],[160,55.4],[165.1,104.1],[174,55.5],[170.2,77.3],[160,80.5],[167.6,64.5],[167.6,72.3],[167.6,61.4],[154.9,58.2],[162.6,81.8],[175.3,63.6],[171.4,53.4],[157.5,54.5],[165.1,53.6],[160,60],[174,73.6],[162.6,61.4],[174,55.5],[162.6,63.6],[161.3,60.9],[156.2,60],[149.9,46.8],[169.5,57.3],[160,64.1],[175.3,63.6],[169.5,67.3],[160,75.5],[172.7,68.2],[162.6,61.4],[157.5,76.8],[176.5,71.8],[164.4,55.5],[160.7,48.6],[174,66.4],[163.8,67.3]],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"男性",type:"scatter",data:[[174,65.6],[175.3,71.8],[193.5,80.7],[186.5,72.6],[187.2,78.8],[181.5,74.8],[184,86.4],[184.5,78.4],[175,62],[184,81.6],[180,76.6],[177.8,83.6],[192,90],[176,74.6],[174,71],[184,79.6],[192.7,93.8],[171.5,70],[173,72.4],[176,85.9],[176,78.8],[180.5,77.8],[172.7,66.2],[176,86.4],[173.5,81.8],[178,89.6],[180.3,82.8],[180.3,76.4],[164.5,63.2],[173,60.9],[183.5,74.8],[175.5,70],[188,72.4],[189.2,84.1],[172.8,69.1],[170,59.5],[182,67.2],[170,61.3],[177.8,68.6],[184.2,80.1],[186.7,87.8],[171.4,84.7],[172.7,73.4],[175.3,72.1],[180.3,82.6],[182.9,88.7],[188,84.1],[177.2,94.1],[172.1,74.9],[167,59.1],[169.5,75.6],[174,86.2],[172.7,75.3],[182.2,87.1],[164.1,55.2],[163,57],[171.5,61.4],[184.2,76.8],[174,86.8],[174,72.2],[177,71.6],[186,84.8],[167,68.2],[171.8,66.1],[182,72],[167,64.6],[177.8,74.8],[164.5,70],[192,101.6],[175.5,63.2],[171.2,79.1],[181.6,78.9],[167.4,67.7],[181.1,66],[177,68.2],[174.5,63.9],[177.5,72],[170.5,56.8],[182.4,74.5],[197.1,90.9],[180.1,93],[175.5,80.9],[180.6,72.7],[184.4,68],[175.5,70.9],[180.6,72.5],[177,72.5],[177.1,83.4],[181.6,75.5],[176.5,73],[175,70.2],[174,73.4],[165.1,70.5],[177,68.9],[192,102.3],[176.5,68.4],[169.4,65.9],[182.1,75.7],[179.8,84.5],[175.3,87.7],[184.9,86.4],[177.3,73.2],[167.4,53.9],[178.1,72],[168.9,55.5],[157.2,58.4],[180.3,83.2],[170.2,72.7],[177.8,64.1],[172.7,72.3],[165.1,65],[186.7,86.4],[165.1,65],[174,88.6],[175.3,84.1],[185.4,66.8],[177.8,75.5],[180.3,93.2],[180.3,82.7],[177.8,58],[177.8,79.5],[177.8,78.6],[177.8,71.8],[177.8,116.4],[163.8,72.2],[188,83.6],[198.1,85.5],[175.3,90.9],[166.4,85.9],[190.5,89.1],[166.4,75],[177.8,77.7],[179.7,86.4],[172.7,90.9],[190.5,73.6],[185.4,76.4],[168.9,69.1],[167.6,84.5],[175.3,64.5],[170.2,69.1],[190.5,108.6],[177.8,86.4],[190.5,80.9],[177.8,87.7],[184.2,94.5],[176.5,80.2],[177.8,72],[180.3,71.4],[171.4,72.7],[172.7,84.1],[172.7,76.8],[177.8,63.6],[177.8,80.9],[182.9,80.9],[170.2,85.5],[167.6,68.6],[175.3,67.7],[165.1,66.4],[185.4,102.3],[181.6,70.5],[172.7,95.9],[190.5,84.1],[179.1,87.3],[175.3,71.8],[170.2,65.9],[193,95.9],[171.4,91.4],[177.8,81.8],[177.8,96.8],[167.6,69.1],[167.6,82.7],[180.3,75.5],[182.9,79.5],[176.5,73.6],[186.7,91.8],[188,84.1],[188,85.9],[177.8,81.8],[174,82.5],[177.8,80.5],[171.4,70],[185.4,81.8],[185.4,84.1],[188,90.5],[188,91.4],[182.9,89.1],[176.5,85],[175.3,69.1],[175.3,73.6],[188,80.5],[188,82.7],[175.3,86.4],[170.5,67.7],[179.1,92.7],[177.8,93.6],[175.3,70.9],[182.9,75],[170.8,93.2],[188,93.2],[180.3,77.7],[177.8,61.4],[185.4,94.1],[168.9,75],[185.4,83.6],[180.3,85.5],[174,73.9],[167.6,66.8],[182.9,87.3],[160,72.3],[180.3,88.6],[167.6,75.5],[186.7,101.4],[175.3,91.1],[175.3,67.3],[175.9,77.7],[175.3,81.8],[179.1,75.5],[181.6,84.5],[177.8,76.6],[182.9,85],[177.8,102.5],[184.2,77.3],[179.1,71.8],[176.5,87.9],[188,94.3],[174,70.9],[167.6,64.5],[170.2,77.3],[167.6,72.3],[188,87.3],[174,80],[176.5,82.3],[180.3,73.6],[167.6,74.1],[188,85.9],[180.3,73.2],[167.6,76.3],[183,65.9],[183,90.9],[179.1,89.1],[170.2,62.3],[177.8,82.7],[179.1,79.1],[190.5,98.2],[177.8,84.1],[180.3,83.2],[180.3,83.2]],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]},t.default=i},1979:function(e,t,a){"use strict";function i(e){for(var t=[],a=0,i=n.values.length;a<i;a++)if(a<e)t.push("-");else{for(var r=0,l=0;l<e;l++)r+=n.values[a-l][1];t.push(r/e)}return t}Object.defineProperty(t,"__esModule",{value:!0});var r={},n=function(e){for(var t=[],a=[],i=0;i<e.length;i++)t.push(e[i].splice(0,1)[0]),a.push(e[i]);return{categoryData:t,values:a}}([["2013/1/24",2320.26,2320.26,2287.3,2362.94],["2013/1/25",2300,2291.3,2288.26,2308.38],["2013/1/28",2295.35,2346.5,2295.35,2346.92],["2013/1/29",2347.22,2358.98,2337.35,2363.8],["2013/1/30",2360.75,2382.48,2347.89,2383.76],["2013/1/31",2383.43,2385.42,2371.23,2391.82],["2013/2/1",2377.41,2419.02,2369.57,2421.15],["2013/2/4",2425.92,2428.15,2417.58,2440.38],["2013/2/5",2411,2433.13,2403.3,2437.42],["2013/2/6",2432.68,2434.48,2427.7,2441.73],["2013/2/7",2430.69,2418.53,2394.22,2433.89],["2013/2/8",2416.62,2432.4,2414.4,2443.03],["2013/2/18",2441.91,2421.56,2415.43,2444.8],["2013/2/19",2420.26,2382.91,2373.53,2427.07],["2013/2/20",2383.49,2397.18,2370.61,2397.94],["2013/2/21",2378.82,2325.95,2309.17,2378.82],["2013/2/22",2322.94,2314.16,2308.76,2330.88],["2013/2/25",2320.62,2325.82,2315.01,2338.78],["2013/2/26",2313.74,2293.34,2289.89,2340.71],["2013/2/27",2297.77,2313.22,2292.03,2324.63],["2013/2/28",2322.32,2365.59,2308.92,2366.16],["2013/3/1",2364.54,2359.51,2330.86,2369.65],["2013/3/4",2332.08,2273.4,2259.25,2333.54],["2013/3/5",2274.81,2326.31,2270.1,2328.14],["2013/3/6",2333.61,2347.18,2321.6,2351.44],["2013/3/7",2340.44,2324.29,2304.27,2352.02],["2013/3/8",2326.42,2318.61,2314.59,2333.67],["2013/3/11",2314.68,2310.59,2296.58,2320.96],["2013/3/12",2309.16,2286.6,2264.83,2333.29],["2013/3/13",2282.17,2263.97,2253.25,2286.33],["2013/3/14",2255.77,2270.28,2253.31,2276.22],["2013/3/15",2269.31,2278.4,2250,2312.08],["2013/3/18",2267.29,2240.02,2239.21,2276.05],["2013/3/19",2244.26,2257.43,2232.02,2261.31],["2013/3/20",2257.74,2317.37,2257.42,2317.86],["2013/3/21",2318.21,2324.24,2311.6,2330.81],["2013/3/22",2321.4,2328.28,2314.97,2332],["2013/3/25",2334.74,2326.72,2319.91,2344.89],["2013/3/26",2318.58,2297.67,2281.12,2319.99],["2013/3/27",2299.38,2301.26,2289,2323.48],["2013/3/28",2273.55,2236.3,2232.91,2273.55],["2013/3/29",2238.49,2236.62,2228.81,2246.87],["2013/4/1",2229.46,2234.4,2227.31,2243.95],["2013/4/2",2234.9,2227.74,2220.44,2253.42],["2013/4/3",2232.69,2225.29,2217.25,2241.34],["2013/4/8",2196.24,2211.59,2180.67,2212.59],["2013/4/9",2215.47,2225.77,2215.47,2234.73],["2013/4/10",2224.93,2226.13,2212.56,2233.04],["2013/4/11",2236.98,2219.55,2217.26,2242.48],["2013/4/12",2218.09,2206.78,2204.44,2226.26],["2013/4/15",2199.91,2181.94,2177.39,2204.99],["2013/4/16",2169.63,2194.85,2165.78,2196.43],["2013/4/17",2195.03,2193.8,2178.47,2197.51],["2013/4/18",2181.82,2197.6,2175.44,2206.03],["2013/4/19",2201.12,2244.64,2200.58,2250.11],["2013/4/22",2236.4,2242.17,2232.26,2245.12],["2013/4/23",2242.62,2184.54,2182.81,2242.62],["2013/4/24",2187.35,2218.32,2184.11,2226.12],["2013/4/25",2213.19,2199.31,2191.85,2224.63],["2013/4/26",2203.89,2177.91,2173.86,2210.58],["2013/5/2",2170.78,2174.12,2161.14,2179.65],["2013/5/3",2179.05,2205.5,2179.05,2222.81],["2013/5/6",2212.5,2231.17,2212.5,2236.07],["2013/5/7",2227.86,2235.57,2219.44,2240.26],["2013/5/8",2242.39,2246.3,2235.42,2255.21],["2013/5/9",2246.96,2232.97,2221.38,2247.86],["2013/5/10",2228.82,2246.83,2225.81,2247.67],["2013/5/13",2247.68,2241.92,2231.36,2250.85],["2013/5/14",2238.9,2217.01,2205.87,2239.93],["2013/5/15",2217.09,2224.8,2213.58,2225.19],["2013/5/16",2221.34,2251.81,2210.77,2252.87],["2013/5/17",2249.81,2282.87,2248.41,2288.09],["2013/5/20",2286.33,2299.99,2281.9,2309.39],["2013/5/21",2297.11,2305.11,2290.12,2305.3],["2013/5/22",2303.75,2302.4,2292.43,2314.18],["2013/5/23",2293.81,2275.67,2274.1,2304.95],["2013/5/24",2281.45,2288.53,2270.25,2292.59],["2013/5/27",2286.66,2293.08,2283.94,2301.7],["2013/5/28",2293.4,2321.32,2281.47,2322.1],["2013/5/29",2323.54,2324.02,2321.17,2334.33],["2013/5/30",2316.25,2317.75,2310.49,2325.72],["2013/5/31",2320.74,2300.59,2299.37,2325.53],["2013/6/3",2300.21,2299.25,2294.11,2313.43],["2013/6/4",2297.1,2272.42,2264.76,2297.1],["2013/6/5",2270.71,2270.93,2260.87,2276.86],["2013/6/6",2264.43,2242.11,2240.07,2266.69],["2013/6/7",2242.26,2210.9,2205.07,2250.63],["2013/6/13",2190.1,2148.35,2126.22,2190.1]]);r.option={title:{text:"上证指数",left:0},tooltip:{trigger:"axis",axisPointer:{type:"line"}},legend:{data:["日K","MA5","MA10","MA20","MA30"]},grid:{left:"10%",right:"10%",bottom:"15%"},xAxis:{type:"category",data:n.categoryData,scale:!0,boundaryGap:!1,axisLine:{onZero:!1},splitLine:{show:!1},splitNumber:20,min:"dataMin",max:"dataMax"},yAxis:{scale:!0,splitArea:{show:!0}},dataZoom:[{type:"inside",start:50,end:100},{show:!0,type:"slider",y:"90%",start:50,end:100}],series:[{name:"日K",type:"candlestick",data:n.values,markPoint:{label:{normal:{formatter:function(e){return null!=e?Math.round(e.value):""}}},data:[{name:"XX标点",coord:["2013/5/31",2300],value:2300,itemStyle:{normal:{color:"rgb(41,60,85)"}}},{name:"highest value",type:"max",valueDim:"highest"},{name:"lowest value",type:"min",valueDim:"lowest"},{name:"average value on close",type:"average",valueDim:"close"}],tooltip:{formatter:function(e){return e.name+"<br>"+(e.data.coord||"")}}},markLine:{symbol:["none","none"],data:[{name:"min line on close",type:"min",valueDim:"close"},{name:"max line on close",type:"max",valueDim:"close"}]}},{name:"MA5",type:"line",data:i(5),smooth:!0,lineStyle:{normal:{opacity:.5}}},{name:"MA10",type:"line",data:i(10),smooth:!0,lineStyle:{normal:{opacity:.5}}},{name:"MA20",type:"line",data:i(20),smooth:!0,lineStyle:{normal:{opacity:.5}}},{name:"MA30",type:"line",data:i(30),smooth:!0,lineStyle:{normal:{opacity:.5}}}]},t.default=r},2005:function(e,t,a){t=e.exports=a(1871)(!1),t.push([e.i,".app-container.dashboard{min-height:100%;height:100%}.app-container.dashboard .e-card-head{padding:6px 16px}.app-container.dashboard .e-card-head p{margin:0}.app-container.dashboard .e-card-body{height:320px;padding:2px;overflow:hidden}",""])},2020:function(e,t,a){var i=a(2005);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(1872)("5130aa97",i,!0)},2068:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container dashboard",staticStyle:{"background-color":"#f0f0f0"}},[a("e-row",{staticStyle:{"background-color":"#f0f0f0",padding:"10px 0px"},attrs:{gutter:24}},[a("e-col",{attrs:{span:"11"}},[a("e-card",{attrs:{bordered:!1}},[a("p",{slot:"title"},[e._v("仪表盘")]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"gauge"}})])],1),e._v(" "),a("e-col",{attrs:{span:"13"}},[a("e-card",{attrs:{bordered:!1}},[a("p",{slot:"title"},[e._v("嵌套饼图")]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"ex-pie"}})])],1)],1),e._v(" "),a("e-row",{staticStyle:{"background-color":"#f0f0f0",padding:"10px 0px"},attrs:{gutter:24}},[a("e-col",{attrs:{span:"12"}},[a("e-card",{attrs:{bordered:!1}},[a("p",{slot:"title"},[e._v("柱状图")]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"base-bar"}})])],1),e._v(" "),a("e-col",{attrs:{span:"12"}},[a("e-card",{attrs:{bordered:!1}},[a("p",{slot:"title"},[e._v("折线图")]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"base-line"}})])],1)],1),e._v(" "),a("e-row",{staticStyle:{"background-color":"#f0f0f0",padding:"10px 0px"},attrs:{gutter:24}},[a("e-col",{attrs:{span:"24"}},[a("e-card",{attrs:{bordered:!1}},[a("p",{slot:"title"},[e._v("柱状图")]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"base-to-line"}})])],1)],1),e._v(" "),a("e-row",{staticStyle:{"background-color":"#f0f0f0",padding:"10px 0px"},attrs:{gutter:24}},[a("e-col",{attrs:{span:"24"}},[a("e-card",{attrs:{bordered:!1}},[a("p",{slot:"title"},[e._v("散点图")]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"scatter"}})])],1)],1),e._v(" "),a("e-row",{staticStyle:{"background-color":"#f0f0f0",padding:"10px 0px"},attrs:{gutter:24}},[a("e-col",{attrs:{span:"24"}},[a("e-card",{attrs:{bordered:!1}},[a("p",{slot:"title"},[e._v("K线图")]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"category"}})])],1)],1)],1)},r=[],n={render:i,staticRenderFns:r};t.a=n}});