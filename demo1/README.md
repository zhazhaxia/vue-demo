# demo1-simple-webpack

> vue cli demo base on simple webpack vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).



=====2019.4.4

熟悉了vuex通信机制
yarn 安装 yarn add vuex --dev
了解
getters
state
mutations
actions

=====2019.4.7

vue-router接入
yarn 安装 yarn add vue-router --dev
https://segmentfault.com/a/1190000009160934?_ea=1849098
https://blog.csdn.net/hhzzcc_/article/details/79251027
https://www.cnblogs.com/SamWeb/p/6610733.html
了解
router-view
router-link
this.$router.push("")
路由的配置，不同路由类型配置，嵌套路由，动态路由


======2019.4.9

axios接入
官方：https://github.com/axios/axios 
中文：https://www.kancloud.cn/yunye/axios/234845
图解：https://www.jianshu.com/p/13cf01cdb81f
可以拦截请求
在mounted或者created里面都可以发送异步请求数据，更新状态（4.10）

  
=======2019.4.10

nextTick
在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中
https://www.jianshu.com/p/a7550c0e164f