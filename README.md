![](/docs/logo.png)


## 准备工作


### 远行环境

- [nodejs =8.11.4](https://nodejs.org/en/)
- [vue-cli =2.9.6](https://cli.vuejs.org/zh/)
- [webpack](https://webpack.js.org/)

*一般使用最新版的`node`即可,用node自带的`npm`管理工具安装`vue-cli`*
```shell
$ npm install vue-cli -g
```


### 开发工具

- HTML采用[pug](https://pugjs.org/api/getting-started.html)； pug一种健康的、优雅的、特性丰富的模版语言。简化HTML代码。
- CSS使用[sass](http://sass-lang.com/)； sass一种成熟的、稳定的、强大的CSS扩展语言。
- Javascript支持[ES6](http://es6.ruanyifeng.com/)；提供了不少非常棒的特性。


### 开发框架&依赖

- [Vue.js](https://github.com/vuejs/vue) 一种渐进的，增量式可用的用于在Web上构建用户界面的JavaScript框架。
- [vue-router](https://github.com/vuejs/vue-router) 官方Vue.js视图路由。
- [vuex](https://github.com/vuejs/vuex) 集中式状态管理，类似model层。
- [axios](https://github.com/axios/axios) HTTP请求客户端。
- [lodash](https://github.com/lodash/lodash) 一个现代的Javascript实用工具库。
- [element-ui](https://element.eleme.cn/#/zh-CN/component/installation) 一个优秀的UI框架,丰富的前端组件。


## 安装&运行


### 一. 使用git拉取源代码

```shell
$ git clone ssh://
```


### 二. 安装依赖

```shell
$ npm install
```


### 三. 运行项目

```shell
$ npm start 或 npm run dev
```


### 四. 浏览器访问

```
http://127.0.0.1:8080/
```


## 项目架构


### 目录结构，仅描述关键目录和文件


```
AlarmSystem/
├── build/                          // 项目构建
├── config/                         // 项目构建配置
├── docs/                           // 项目文档
├── node_modules/                   // 第三方依赖
├── src/                            // 应用源码
│     ├── http/                     // HTTP接口定义
|     |     ├── api.js              // 接口对应地址
|     |     └── config.js           // axios的拦截器配置
│     ├── assets/                   // 静态文件
|     |     ├── image/              // 图片
|     |     ├── js/                 // 响应式js
|     |     ├── css/                // 应用全局的css
|     |     └── png/                // png图片
│     ├── filters/
|     |     └── index.js            // 过滤器入口，单个过滤器单个文件
│     ├── router/
|     |     └── index.js            // 应用路由配置
│     ├── store/                    // vuex项定义
|     |     ├── modules/            // 定义state和mutation
|     |     |     ├── app.js        // 应用模块
|     |     |     ├── view.js       // 页面模块
|     |     |     ├── report.js     // 报告模块
|     |     |     └── user.js       // 用户模块
|     |     ├── actions.js          // 定义action
|     |     ├── getters.js          // 定义getter
|     |     ├── index.js            // vuex暴露入口
│     ├── components/               // vue组件
│     ├── views/                    // vue视图
│     ├── main.js                   // 应用主框架js
│     └── App.vue                   // 应用主框架
├── .babelrc
├── .eslintignore                   // eslint要忽略的配置
├── .eslintrc.js                    // eslint配置项
├── .gitignore                      // git要忽略文件的配置，里头指定的文件将不纳入版本控制
├── index.html                      // vue项目的主html页面, webpack构建后的js和css文件自动插入文件
├── package.json                    // 应用构建信息,可以看到所有用到的依赖
└── README.md                       // 当前所看内容书写处
```


## 开发指导


### 一.数据流转


```
aixos通过接口地址(src/http/api)请求后台, 通过vuex中的actions(src/store/actions)将数据(一般为json类型)暂存vuex的
store(src/store/modules)中, vue视图(src/views/)及组件(src/components)获取vuex中的数据, 通过vue的动态渲染能力将
数据渲染到页面
```


### 二.用户访问


```
用户访问index.html(vue单页面应用的入口) --> App.vue(index.html中对应的id为app的div) -->
src/main.js(主入口js,挂载依赖)--> src/router(路由,配置页面路径) -->
src/views(页面, components组件可拔插其中) --> src/store/modules(存储页面展示需要的数据)-->
src/store/actions(利用axios向后台发送http请求) --> src/http/api(后台接口地址)
```
