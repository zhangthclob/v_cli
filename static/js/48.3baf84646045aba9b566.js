webpackJsonp([48],{1915:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t(2083),o=t(3),r=o(null,s.a,null,null,null);n.default=r.exports},2083:function(e,n,t){"use strict";var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-container"},[t("code",[t("h1",{staticStyle:{"margin-bottom":"14px"}},[e._v("webpackConfig相关配置说明")]),e._v(" "),t("h2",[e._v("入口")]),e._v(" "),t("p",[e._v("从"),t("e-tag",[e._v("package.json")]),e._v("可以看到开发和生产环境的入口。")],1),e._v(" "),t("e-code-sign",[e._v('\n  "scripts": {\n    "dev": "node build/dev-server.js",\n    "start": "node build/dev-server.js",\n    "build": "node build/build.js"\n  },\n            ')]),e._v(" "),t("h2",[e._v("开发环境")]),e._v(" "),t("p",[e._v("开发环境的入口文件是 "),t("e-tag",[e._v("build/dev-server.js")]),e._v("。")],1),e._v(" "),t("e-code-sign",[e._v("\nrequire('./check-versions')()//检查node和npm的版本\n/*获取config/index.js中的默认配置，config后面没有配置项会自动找index.js*/\nvar config = require('../config')\nif (!process.env.NODE_ENV) {\n  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)\n}\nvar opn = require('opn') //一个可以强制打开浏览器并跳转到指定url的插件\nvar path = require('path')//使用Node自带的文件路径工具\nvar express = require('express')//使用express\nvar webpack = require('webpack')//使用webpack\nvar proxyMiddleware = require('http-proxy-middleware')//一个Node的代理中间件\nvar webpackConfig = require('./webpack.dev.conf')//加载webpack配置\n// default port where dev server listens for incoming traffic,如果没有指定端口就是用config.dev.port作为运行端口\nvar port = process.env.PORT || config.dev.port\n// automatically open browser, if not set will be false 根据config.dev.autoOpenBrowser选择是否自动打开浏览器\nvar autoOpenBrowser = !!config.dev.autoOpenBrowser\n// Define HTTP proxies to your custom API backend\n// https://github.com/chimurai/http-proxy-middleware\n//使用 config.dev.proxyTable 的配置作为 proxyTable 的代理配置\nvar proxyTable = config.dev.proxyTable\nvar app = express()//使用express启动一个服务\nvar compiler = webpack(webpackConfig)//启动webpack进行编译\n//启动 webpack-dev-middleware，将 编译后的文件暂存到内存中\nvar devMiddleware = require('webpack-dev-middleware')(compiler, {\n  publicPath: webpackConfig.output.publicPath,\n  quiet: true\n})\n// 启动 webpack-hot-middleware，也就是我们常说的 Hot-reload,https://www.npmjs.com/package/webpack-hot-middleware\nvar hotMiddleware = require('webpack-hot-middleware')(compiler, {\n  log: () => {}\n})\n// 当html-webpack-plugin模板更改时，强制页面重新加载\ncompiler.plugin('compilation', function (compilation) {\n  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {\n    hotMiddleware.publish({ action: 'reload' })\n    cb()\n  })\n})\n// proxy api requests\n//将 proxyTable 中的请求配置挂在到启动的 express 服务上\nObject.keys(proxyTable).forEach(function (context) {\n  var options = proxyTable[context]\n  if (typeof options === 'string') {\n    options = { target: options }\n  }\n  app.use(proxyMiddleware(options.filter || context, options))\n})\n// handle fallback for HTML5 history API\n//使用 connect-history-api-fallback 匹配资源，如果不匹配就可以重定向到指定地址\n// https://www.npmjs.com/package/connect-history-api-fallback\napp.use(require('connect-history-api-fallback')())\n// serve webpack bundle output\n//将暂存到内存中的 webpack 编译后的文件挂在到 express 服务上\napp.use(devMiddleware)\n// enable hot-reload and state-preserving\n// compilation error display\n//将 Hot-reload 挂在到 express 服务上\napp.use(hotMiddleware)\n// serve pure static assets\n//拼接 static 文件夹的静态资源路径\nvar staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)\napp.use(staticPath, express.static('./static'))\n// 让我们这个 express 服务监听 port 的请求，并且将此服务作为 dev-server.js 的接口暴露出去\nvar uri = 'http://localhost:' + port\nvar _resolve\nvar readyPromise = new Promise(resolve => {\n  _resolve = resolve\n})\nconsole.log('> Starting dev server...')\ndevMiddleware.waitUntilValid(() => {\n  console.log('> Listening at ' + uri + '\\n')\n  // when env is testing, don't need open it\n  // 如果不是测试环境，自动打开浏览器并跳到我们的开发地址\n  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {\n    opn(uri)\n  }\n  _resolve()\n})\nvar server = app.listen(port)\nmodule.exports = {\n  ready: readyPromise,\n  close: () => {\n    server.close()\n  }\n}\n            ")]),e._v(" "),t("h2",[e._v("webpack.dev.conf.js")]),e._v(" "),t("p",[t("e-tag",[e._v("dev-server.js")]),e._v("中使用了"),t("e-tag",[e._v("webpack.dev.conf.js")]),e._v("文件，该文件是开发环境中webpack的配置入口。")],1),e._v(" "),t("e-code-sign",[e._v("\nvar utils = require('./utils')//封装了一些方法的工具\nvar path = require('path')//使用Node自带的文件路径工具\nvar webpack = require('webpack')//使用 webpack\nvar config = require('../config')//使用 config/index.js\nvar merge = require('webpack-merge')//使用 webpack 配置合并插件\nvar baseWebpackConfig = require('./webpack.base.conf')// 加载 webpack.base.conf\n// 使用 html-webpack-plugin 插件，这个插件可以帮我们自动生成 html 并且注入到 .html 文件中\nvar HtmlWebpackPlugin = require('html-webpack-plugin')\n//https://www.npmjs.com/package/friendly-errors-webpack-plugin,可以识别某些类别的Webpack错误并进行清理，聚合和优先排序\nvar FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')\nfunction resolveApp(relativePath) {//获取当前项目的根路径然后拼接\n  return path.resolve(relativePath);\n}\n// add hot-reload related code to entry chunks\n//将 Hol-reload 相对路径添加到 webpack.base.conf 的 对应 entry 前\nObject.keys(baseWebpackConfig.entry).forEach(function (name) {\n  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])\n})\n// 将我们 webpack.dev.conf.js 的配置和 webpack.base.conf.js 的配置合并\nmodule.exports = merge(baseWebpackConfig, {\n  module: {\n  \t// 使用 styleLoaders\n    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })\n  },\n   // 使用 #cheap-module-eval-source-map 模式作为开发辅助调试工具\n  // 具体配置请参考https://doc.webpack-china.org/configuration/devtool/\n  devtool: '#cheap-module-eval-source-map',\n  plugins: [\n  // definePlugin 接收字符串插入到代码当中, 需要的话可以写上 JS 的字符串\n    new webpack.DefinePlugin({\n      'process.env': config.dev.env\n    }),\n    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage\n    // HotModule 插件在页面进行变更的时候只会重回对应的页面模块，不会重绘整个 html 文件\n    new webpack.HotModuleReplacementPlugin(),\n     //https://doc.webpack-china.org/plugins/no-emit-on-errors-plugin/\n    //在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。\n    new webpack.NoEmitOnErrorsPlugin(),\n     // https://github.com/ampedandwired/html-webpack-plugin\n    // 将 index.html 作为入口，注入 html 代码后生成 index.html文件\n    //https://doc.webpack-china.org/plugins/html-webpack-plugin/ webpack插件列表(中文)\n    new HtmlWebpackPlugin({\n      filename: 'index.html',\n      template: 'index.html',\n      favicon: resolveApp('favicon.ico'),//引入favicon.ico\n      inject: true\n    }),\n    // 全局挂载jquery插件\n     new webpack.ProvidePlugin({\n      jQuery: \"jquery\",\n      $: \"jquery\",\n      \"window.jQuery\":\"jquery\"\n    }),\n    new FriendlyErrorsPlugin()\n  ]\n})\n\n           ")]),e._v(" "),t("h2",[e._v("webpack.base.conf.js")]),e._v(" "),t("p",[e._v("\n          \t在"),t("e-tag",[e._v("webpack.dev.conf.js")]),e._v("中出现"),t("e-tag",[e._v("webpack.base.conf.js")]),e._v("，这个文件是开发环境和生产环境，甚至测试环境，这些环境的公共webpack配置。可以说，这个文件相当重要。\n          ")],1),e._v(" "),t("e-code-sign",[e._v("\nvar path = require('path')// 使用 NodeJS 自带的文件路径插件\nvar utils = require('./utils')//封装了一些方法的工具\nvar config = require('../config')//使用 config/index.js\n//使用vue-loader.conf\nvar vueLoaderConfig = require('./vue-loader.conf')\n// 拼接我们的工作区路径为一个绝对路径\nfunction resolve (dir) {\n  return path.join(__dirname, '..', dir)\n}\nmodule.exports = {\n  entry: {\n  \t// 编译文件入口\n    app: './src/main.js'\n  },\n  output: {\n  \t//使用config/index.js中build的assetsRoot作为输出根路径\n    path: config.build.assetsRoot,\n    filename: '[name].js',//编译输入的文件名\n    // 正式发布环境下编译输出的发布路径\n    publicPath: process.env.NODE_ENV === 'production'\n      ? config.build.assetsPublicPath\n      : config.dev.assetsPublicPath\n  },\n  resolve: {\n  \t//https://doc.webpack-china.org/configuration/resolve/\n  \t// 自动补全的扩展名,能够使用户在引入模块时不带扩展\n    extensions: ['.js', '.vue', '.json'],\n    alias: {\n    \t// 默认路径代理，例如 import Vue from 'vue$'，会自动到 'vue/dist/vue.esm.js'中寻找\n      'vue$': 'vue/dist/vue.esm.js',\n      '@': resolve('src')\n    }\n  },\n  module: {//https://doc.webpack-china.org/loaders/ loader列表\n    rules: [//https://doc.webpack-china.org/configuration/module/\n      // {\n      \t// 审查 js 和 vue 文件\n        // https://github.com/MoOx/eslint-loader\n      //   test: /\\.(js|vue)$/,\n      //   loader: 'eslint-loader',\n      //   enforce: 'pre',\n      //   include: [resolve('src'), resolve('test')],\n      //   options: {\n      //     formatter: require('eslint-friendly-formatter')\n      //   }\n      // },\n      \n      {\n      \t// 处理 vue文件\n        // https://github.com/vuejs/vue-loader\n        test: /\\.vue$/,\n        loader: 'vue-loader',\n        options: vueLoaderConfig\n      },\n      {\n      \t// 编译 js\n        // https://github.com/babel/babel-loader\n        test: /\\.js$/,\n        loader: 'babel-loader',\n        include: [resolve('src'), resolve('test')]\n      },\n      {\n      \t// 处理svg文件\n        test: /\\.svg$/,\n        loader: 'svg-sprite-loader',\n        include: [resolve('src/icons')],\n        options: {\n          symbolId: 'icon-[name]'\n        }\n      },\n      {\n      \t// 处理图片文件\n        // https://github.com/webpack-contrib/url-loader\n        test: /\\.(png|jpe?g|gif|svg)(\\?.*)?$/,\n        loader: 'url-loader',\n        exclude: [resolve('src/icons')],\n        options: {\n          limit: 10000,\n          name: utils.assetsPath('img/[name].[hash:7].[ext]')\n        }\n      },\n      {\n      \t// 处理字体文件\n        test: /\\.(woff2?|eot|ttf|otf)(\\?.*)?$/,\n        loader: 'url-loader',\n        options: {\n          limit: 10000,\n          name: utils.assetsPath('/fonts/[name].[hash:7].[ext]')\n        }\n      }\n    ]\n  }\n}\n          ")]),e._v(" "),t("h2",[e._v("config/index.js")]),e._v(" "),t("p",[e._v("该文件在很多文件中都用到，是主要的配置文件，包含静态文件的路径、是否开启sourceMap等。其中，分为两个部分"),t("e-tag",[e._v("dev")]),e._v("（开发环境的配置）和"),t("e-tag",[e._v("build")]),e._v("（生产环境的配置）。")],1),e._v(" "),t("e-code-sign",[e._v("\n// see http://vuejs-templates.github.io/webpack for documentation.\nvar path = require('path') //使用Node自带的文件路径插件\nmodule.exports = {\n\tbuild: {\n\t\t//http://vuejs-templates.github.io/webpack/backend.html\n\t\t// 使用 config/prod.env.js 中定义的编译环境\n\t\tenv: require('./prod.env'),\n\t\t// 编译注入的 index.html 文件,必须是本地的绝对路径\n\t\tindex: path.resolve(__dirname, '../dist/index.html'),\n\t\t// 编译输出的静态资源根路径\n\t\tassetsRoot: path.resolve(__dirname, '../dist'),\n\t\t// 编译输出的二级目录\n\t\tassetsSubDirectory: 'static',\n\t\t // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名\n\t\tassetsPublicPath: './',\n\t\t//生成用于生产构建的源映射\n\t\tproductionSourceMap: false,\n\t\t// Gzip off by default as many popular static hosts such as\n\t\t// Surge or Netlify already gzip all static assets for you.\n\t\t// Before setting to `true`, make sure to:\n\t\t// npm install --save-dev compression-webpack-plugin\n\t\tproductionGzip: false,// 是否开启 gzip\n\t\tproductionGzipExtensions: ['js', 'css'],// 需要使用 gzip 压缩的文件扩展名\n\t\t// Run the build command with an extra argument to\n\t\t// View the bundle analyzer report after build finishes:\n\t\t// `npm run build --report`\n\t\t// Set to `true` or `false` to always turn it on or off\n\t\t//一个实用工具,用于分析项目的依赖关系https://www.npmjs.com/package/webpack-bundle-analyzer\n\t\tbundleAnalyzerReport: process.env.npm_config_report\n\t},\n\tdev: {\n\t\tenv: require('./dev.env'),\n\t\tport: 5050,\n\t\tautoOpenBrowser: true,\n\t\tassetsSubDirectory: 'static',\n\t\tassetsPublicPath: '/',\n\t\tstaticPath: '/static/',\n\t\tproxyTable: { //可以配置多个(需要跨域的接口)\n\t\t\t'/v2': {\n\t\t\t\ttarget: 'https://api.douban.com', // 你接口的域名\n\t\t\t\tsecure: false, // 如果是https接口，需要配置这个参数\n\t\t\t\tchangeOrigin: true, // 如果接口跨域，需要进行这个参数配置\n\t\t\t\tpathRewrite: {\n\t\t\t\t\t'^/v2': '/v2'\n\t\t\t\t}\n\t\t\t},\n\t\t\t'/tenant-auth-api': {\n\t\t\t\ttarget: 'http://10.72.1.137:8018', // 你接口的域名\n\t\t\t\tsecure: false, // 如果是https接口，需要配置这个参数\n\t\t\t\tchangeOrigin: true, // 如果接口跨域，需要进行这个参数配置\n\t\t\t\tpathRewrite: {\n\t\t\t\t\t'^/tenant-auth-api': '/tenant-auth-api'\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t},\n\t\t// CSS Sourcemaps off by default because relative paths are \"buggy\"\n\t\t// with this option, according to the CSS-Loader README\n\t\t// (https://github.com/webpack/css-loader#sourcemaps)\n\t\t// In our experience, they generally work as expected,\n\t\t// just be aware of this issue when enabling this option.\n\t\tcssSourceMap: false\n\t}\n}\n       ")]),e._v(" "),t("h2",[e._v("utils.js")]),e._v(" "),t("p",[t("e-tag",[e._v("utils.js")]),e._v("也是一个被使用频率的文件，这个文件包含了三个工具函数：")],1),e._v(" "),e._m(0),e._v(" "),t("e-code-sign",[e._v("\nvar path = require('path')// 引入nodejs路径模块\nvar config = require('../config')// 引入config目录下的index.js配置文件\n// 引入extract-text-webpack-plugin插件，用来将css提取到单独的css文件中\nvar ExtractTextPlugin = require('extract-text-webpack-plugin')\n// exports其实就是一个对象，用来导出方法的最终还是使用module.exports，此处导出assetsPath\nexports.assetsPath = function (_path) {\n\t// 如果是生产环境assetsSubDirectory就是'static'，否则还是'static'(因为config.build和config.dev里面配置的一样)\n  var assetsSubDirectory = process.env.NODE_ENV === 'production'\n    ? config.build.assetsSubDirectory\n    : config.dev.assetsSubDirectory\n    // path.join和path.posix.join的区别就是，前者返回的是完整的路径，后者返回的是完整路径的相对根路径\n    // 也就是说path.join的路径是C:a/a/b/xiangmu/b，那么path.posix.join就是b\n  return path.posix.join(assetsSubDirectory, _path)\n   // 所以这个方法的作用就是返回一个干净的相对根路径\n}\n// 下面是导出cssLoaders的相关配置\nexports.cssLoaders = function (options) {\n\t// options如果没值就是空对象\n  options = options || {}\n // cssLoader的基本配置\n  var cssLoader = {\n    loader: 'css-loader',\n    options: {\n    \t// options是用来传递参数给loader的\n      // minimize表示压缩，如果是生产环境就压缩css代码\n      minimize: process.env.NODE_ENV === 'production',\n      // 是否开启cssmap，默认是false\n      sourceMap: options.sourceMap\n    }\n  }\n  // generate loader string to be used with extract text plugin\n  function generateLoaders (loader, loaderOptions) {\n  \t// 将上面的基础cssLoader配置放在一个数组里面\n    var loaders = [cssLoader]\n    // 如果该函数传递了单独的loader就加到这个loaders数组里面，这个loader可能是less,sass之类的\n    if (loader) {\n      loaders.push({\n      \t// 加载对应的loader\n        loader: loader + '-loader',\n        // Object.assign是es6的方法，主要用来合并对象的，浅拷贝\n        options: Object.assign({}, loaderOptions, {\n          sourceMap: options.sourceMap\n        })\n      })\n    }\n     // Extract CSS when that option is specified\n     // (which is the case during production build)\n     // 注意这个extract是自定义的属性，可以定义在options里面，主要作用就是当配置为true就把文件单独提取，\n     //false表示不单独提取，这个可以在使用的时候单独配置\n    if (options.extract) {\n      return ExtractTextPlugin.extract({\n        use: loaders,\n        fallback: 'vue-style-loader',\n        publicPath:'../../'\n      })\n    } else {\n      return ['vue-style-loader'].concat(loaders)\n    }\n    // 上面这段代码就是用来返回最终读取和导入loader，来处理对应类型的文件\n  }\n\n  // https://vue-loader.vuejs.org/en/configurations/extract-css.html\n  return {\n    css: generateLoaders(),// css对应 vue-style-loader 和 css-loader\n    postcss: generateLoaders(),// postcss对应 vue-style-loader 和 css-loader\n    less: generateLoaders('less'),// less对应 vue-style-loader 和 less-loader\n    sass: generateLoaders('sass', { indentedSyntax: true }), // sass对应 vue-style-loader 和 sass-loader\n    scss: generateLoaders('sass'),// scss对应 vue-style-loader 和 sass-loader\n    stylus: generateLoaders('stylus'),// stylus对应 vue-style-loader 和 stylus-loader\n    styl: generateLoaders('stylus')// styl对应 vue-style-loader 和 styl-loader \n  }\n}\n\n// Generate loaders for standalone style files (outside of .vue)\n// 下面这个主要处理import这种方式导入的文件类型的打包，上面的exports.cssLoaders是为这一步服务的\nexports.styleLoaders = function (options) {\n  var output = []\n  // 下面就是生成的各种css文件的loader对象\n  var loaders = exports.cssLoaders(options)\n  for (var extension in loaders) {\n  \t// 把每一种文件的laoder都提取出来\n    var loader = loaders[extension]\n    output.push({\n    \t// 把最终的结果都push到output数组中\n      test: new RegExp('\\\\.' + extension + '$'),\n      use: loader\n    })\n  }\n  return output\n}\n       ")]),e._v(" "),t("h2",[e._v("vue-loader.conf")]),e._v(" "),t("p",[e._v("在"),t("e-tag",[e._v("webpack.base.conf.js")]),e._v("中有提到"),t("e-tag",[e._v("vue-loader.conf.js")])],1),e._v(" "),t("e-code-sign",[e._v("\nvar utils = require('./utils')\nvar config = require('../config')\nvar isProduction = process.env.NODE_ENV === 'production'\nmodule.exports = {\n\t// css加载器\n\tloaders: utils.cssLoaders({\n\t\tsourceMap: isProduction ?\n\t\t\tconfig.build.productionSourceMap :\n\t\t\tconfig.dev.cssSourceMap,\n\t\textract: isProduction\n\t}),\n\t// 编译css之后自动添加前缀\n\tpostcss: [\n\t\trequire('autoprefixer')({\n\t\t\tbrowsers: ['last 5 versions']\n\t\t})\n\t]\n}\n       ")]),e._v(" "),t("h3",[e._v("生产环境")]),e._v(" "),t("p",[e._v("开生产环境的入口文件是"),t("e-tag",[e._v("build/build.js")]),e._v(" 。")],1),e._v(" "),t("e-code-sign",[e._v("\nrequire('./check-versions')()// 检查 Node 和 npm 版本\nprocess.env.NODE_ENV = 'production'//指定生产环境\nvar ora = require('ora')// 一个很好看的 loading 插件\nvar rm = require('rimraf')//提供node版本的UNIX的rm -rf命令\nvar path = require('path')//使用Node自带的文件路径插件\nvar chalk = require('chalk')//控制台高亮显示的插件\nvar webpack = require('webpack')//使用 webpack\nvar config = require('../config')//使用 config/index.js\nvar webpackConfig = require('./webpack.prod.conf')// 加载 webpack.prod.conf\n// 使用 ora 打印出 loading + log\nvar spinner = ora('building for production...')\nspinner.start()\n//https://www.npmjs.com/package/rimraf\nrm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {\n  if (err) throw err//如果回调函数出现错误就抛出异常\n  //  开始 webpack 的编译\n  webpack(webpackConfig, function (err, stats) {//编译回调函数\n    spinner.stop()\n    if (err) throw err//编译失败就抛出异常\n    process.stdout.write(stats.toString({//标准输出流\n      colors: true,\n      modules: false,\n      children: false,\n      chunks: false,\n      chunkModules: false\n    }) + '\\n\\n')\n    console.log(chalk.cyan('  Build complete.\\n'))\n    console.log(chalk.yellow(\n      '  Tip: built files are meant to be served over an HTTP server.\\n' +\n      '  Opening index.html over file:// won\\'t work.\\n'\n    ))\n  })\n})\n       ")]),e._v(" "),t("h3",[e._v("webpack.prod.conf")]),e._v(" "),t("p",[e._v("该文件，为生产环境中webpack的配置入口。同时，它也依赖于前面提到的"),t("e-tag",[e._v("webpack.base.conf.js")]),e._v("、"),t("e-tag",[e._v("utils.js")]),e._v("和"),t("e-tag",[e._v("config/index.js")]),e._v("。")],1),e._v(" "),t("e-code-sign",[e._v("\nvar path = require('path')//使用Node自带的文件路径插件\nvar utils = require('./utils')//封装了一些方法的工具\nvar webpack = require('webpack')//使用 webpack\nvar config = require('../config')//使用 config/index.js\nvar merge = require('webpack-merge')//使用 webpack 配置合并插件\nvar baseWebpackConfig = require('./webpack.base.conf')\n//可以将单个文件或整个目录复制到构建目录中\nvar CopyWebpackPlugin = require('copy-webpack-plugin')\n// 一个可以插入 html 并且创建新的 .html 文件的插件\nvar HtmlWebpackPlugin = require('html-webpack-plugin')\n// 一个 webpack 扩展，可以提取一些代码并且将它们和文件分离开\n// 如果我们想将 webpack 打包成一个文件 css js 分离开，那我们需要这个插件\nvar ExtractTextPlugin = require('extract-text-webpack-plugin')\n//一个个优化/最小化css资源的插件\nvar OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')\n\nvar env = config.build.env\n\nfunction resolveApp(relativePath) {\n    return path.resolve(relativePath);\n}\n//合并 webpack.base.conf.js中的配置,里面具体的配置参考webpack.base.conf.js里面的注释\nvar webpackConfig = merge(baseWebpackConfig, {\n  module: {\n    rules: utils.styleLoaders({\n      sourceMap: config.build.productionSourceMap,\n      extract: true\n    })\n  },\n  devtool: config.build.productionSourceMap ? '#source-map' : false,\n  output: {\n    path: config.build.assetsRoot,//指定生产环境输出路径\n    filename: utils.assetsPath('js/[name].[chunkhash].js'),//编译输出带hash的文件名,可以指定hash长度(chunkhash:6)\n    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')// 没有指定输出名的文件输出的文件名\n  },\n  plugins: [\n    // http://vuejs.github.io/vue-loader/en/workflow/production.html\n   // definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串\n   new webpack.DefinePlugin({\n      'process.env': env\n    }),\n    // 压缩 js (同样可以压缩 css)\n    new webpack.optimize.UglifyJsPlugin({\n      compress: {\n        warnings: false\n      },\n      sourceMap: true\n    }),\n    // extract css into its own file\n    //将 css 文件分离出来\n    new ExtractTextPlugin({\n      filename: utils.assetsPath('css/[name].[contenthash].css')\n    }),\n    // Compress extracted CSS. We are using this plugin so that possible\n    // duplicated CSS from different components can be deduped.\n    //压缩css代码\n    new OptimizeCSSPlugin({\n      cssProcessorOptions: {\n        safe: true\n      }\n    }),\n    // generate dist index.html with correct asset hash for caching.\n    // you can customize output by editing /index.html\n    // see https://github.com/ampedandwired/html-webpack-plugin\n   // 输入输出的 .html 文件\n   new HtmlWebpackPlugin({\n      filename: config.build.index,\n      template: 'index.html',\n      inject: true,// 是否注入 html\n      favicon: resolveApp('favicon.ico'),\n      minify: {// 压缩的方式\n        removeComments: true,//移除带html的注释\n        collapseWhitespace: true,//移除空格\n        removeAttributeQuotes: true//移除属性的引号\n        // more options:\n        // https://github.com/kangax/html-minifier#options-quick-reference\n      },\n      // necessary to consistently work with multiple chunks via CommonsChunkPlugin\n      //资源按照依赖关系去插入\n      chunksSortMode: 'dependency'\n    }),\n     // split vendor js into its own file//将引用的库文件拆出来打包到一个[name].js文件中\n    new webpack.optimize.CommonsChunkPlugin({\n      name: 'vendor',\n      minChunks: function (module, count) {\n        // any required modules inside node_modules are extracted to vendor\n       //任何一个从node_modules中引用的模块都会被打包进来\n       return (\n          module.resource &&\n          /\\.js$/.test(module.resource) &&\n          module.resource.indexOf(\n            path.join(__dirname, '../node_modules')\n          ) === 0\n        )\n      }\n    }),\n    // extract webpack runtime and module manifest to its own file in order to\n    // prevent vendor hash from being updated whenever app bundle is updated\n    //https://doc.webpack-china.org/concepts/manifest/\n    //把webpack的runtime和manifest这些webpack管理所有模块交互的代码打包到[name].js文件中,防止build之后vendor的hash值被更新\n    new webpack.optimize.CommonsChunkPlugin({\n      name: 'manifest',\n      chunks: ['vendor']\n    }),\n    // copy custom static assets\n     //复制自定义的静态资源文件到dist/static文件夹中\n    new CopyWebpackPlugin([\n      {\n        from: path.resolve(__dirname, '../static'),\n        to: config.build.assetsSubDirectory,\n        ignore: ['.*']\n      }\n    ]),\n    // 全局挂载插件\n    new webpack.ProvidePlugin({\n      jQuery: \"jquery\",\n      $: \"jquery\"\n    })\n  ]\n})\n// 开启 gzip 的情况下使用下方的配置\nif (config.build.productionGzip) {\n\t// Gzip依赖 compression-webpack-plugin 插件\n  var CompressionWebpackPlugin = require('compression-webpack-plugin')\n\n  webpackConfig.plugins.push(\n  \t// 使用 compression-webpack-plugin 插件进行压缩,https://doc.webpack-china.org/plugins/compression-webpack-plugin/\n    new CompressionWebpackPlugin({\n      asset: '[path].gz[query]',\n      algorithm: 'gzip',\n      test: new RegExp(\n        '\\\\.(' +\n        config.build.productionGzipExtensions.join('|') +\n        ')$'\n      ),//所有匹配该正则的资源都会被处理。默认值是全部资源。\n      threshold: 10240,//只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。\n      minRatio: 0.8//只有压缩率小于这个值的资源才会被处理。默认值是 0.8。\n    })\n  )\n}\n//配置项目分析工具加载下方插件\nif (config.build.bundleAnalyzerReport) {\n  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin\n  webpackConfig.plugins.push(new BundleAnalyzerPlugin())\n}\nmodule.exports = webpackConfig\n \t\t\t\t")])],1)])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",{staticClass:"ul"},[t("li",[e._v("生成静态资源的路径")]),e._v(" "),t("li",[e._v("生成 ExtractTextPlugin对象或loader字符串")]),e._v(" "),t("li",[e._v("生成 style-loader的配置")])])}],r={render:s,staticRenderFns:o};n.a=r}});